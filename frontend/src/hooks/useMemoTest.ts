import { useEffect, useRef, useState } from "react";
import { CardState, revealedState } from "../types/states.types";
import { useQuery } from "@apollo/client";
import { GET_MEMOTEST_BY_ID } from "../graphql/memotest.queries";
import { getMemotestById } from "../types/api.types";
import useSession from "./useSession";

export default function useMemoTest(id) {
  const [cards, setCards] = useState<CardState[]>();
  const [lastCardsRevealed, setLastCardsRevealed] = useState<revealedState>([]);
  const [solvedCards, setSolvedCards] = useState<number>(0);
  const [score, setScore] = useState<number>();
  const mismatchTimeout = useRef<NodeJS.Timeout>();
  const retries = useRef<number>(0);
  const {
    data: memotestData,
    loading: loadingMemotest,
  }: { data: getMemotestById; loading: boolean } = useQuery(
    GET_MEMOTEST_BY_ID(id)
  );
  const { updateRetries, endSession } = useSession(id);

  const changeVisibility = (index: number) => {
    const newState = [...cards];
    newState[index] = { ...newState[index], hidden: !newState[index].hidden };
    setCards(newState);
  };

  const hideRevealedCards = () => {
    setCards(
      cards.map((card, index) => ({
        ...card,
        hidden: card.hidden || lastCardsRevealed.includes(index),
      }))
    );
    setLastCardsRevealed([]);
    mismatchTimeout.current = undefined;
  };

  const loadGame = () => {
    if (loadingMemotest) return;
    const images = memotestData.memotest.images.map(({ url }) => url);
    const initialState = [...images, ...images]
      .map((val) => new CardState(val))
      .sort(() => (Math.random() <= 0.5 ? -1 : 1));
    setCards(initialState);
  };

  const onCardClick = (index: number) => {
    if (mismatchTimeout.current !== undefined) {
      //user clicked just after two different cards are revealed
      clearTimeout(mismatchTimeout.current);
      hideRevealedCards();
    } else if (!lastCardsRevealed.length) {
      //clicked on the first card of the pair
      changeVisibility(index);
      setLastCardsRevealed([index]);
      retries.current++;
      updateRetries(retries.current);
    } else {
      //clicked on the second card of the pair
      changeVisibility(index);
      if (cards[lastCardsRevealed[0]].url === cards[index].url) {
        //if the second card is the same image as the first one
        const currentSolvedCards = solvedCards + 2;
        setSolvedCards(currentSolvedCards);
        setLastCardsRevealed([]);
        if (cards.length === currentSolvedCards) {
          //if all cards have been matched
          setTimeout(
            () => setScore(Math.round((cards.length / retries.current) * 100)),
            1000
          );
          endSession(retries.current);
        }
      } else {
        //if both cards are different
        setLastCardsRevealed([...(lastCardsRevealed as [number]), index]);
        mismatchTimeout.current = setTimeout(hideRevealedCards, 2000);
      }
    }
  };

  useEffect(loadGame, [loadingMemotest, memotestData]);

  return {
    name: memotestData?.memotest.name,
    cards,
    onCardClick,
    score,
  };
}
