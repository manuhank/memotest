import { useEffect, useRef, useState } from "react";
import { CardState, revealedState } from "../types/states";
import { useQuery } from "@apollo/client";
import { GET_ALL_MEMOTESTS } from "../graphql/queries";

export default function useMemoTest() {
  const [cards, setCards] = useState<CardState[]>();
  const [lastCardsRevealed, setLastCardsRevealed] = useState<revealedState>([]);
  const [solvedCards, setSolvedCards] = useState<number>(0);
  const mismatchTimeout = useRef<NodeJS.Timeout>();
  const attempts = useRef<number>(0);
  const { data, loading, error } = useQuery(GET_ALL_MEMOTESTS);

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
    if(loading) return;
    const initialState = [...data, ...data]
      .map((val) => new CardState(val))
      .sort(() => (Math.random() <= 0.5 ? -1 : 1));
    setCards(initialState);
    console.log("data", data)
  };

  const onCardClick = (index: number) => {
    if (mismatchTimeout.current !== undefined) {
      clearTimeout(mismatchTimeout.current);
      hideRevealedCards();
    } else if (!lastCardsRevealed.length) {
      changeVisibility(index);
      setLastCardsRevealed([index]);
      attempts.current++;
    } else {
      changeVisibility(index);
      if (cards[lastCardsRevealed[0]].url === cards[index].url) {
        const currentSolvedCards = solvedCards + 2;
        setSolvedCards(currentSolvedCards);
        setLastCardsRevealed([]);
        if (cards.length === currentSolvedCards)
          console.log("ganaste en", attempts.current);
      } else {
        setLastCardsRevealed([...(lastCardsRevealed as [number]), index]);
        mismatchTimeout.current = setTimeout(hideRevealedCards, 2000);
      }
    }
  };

  useEffect(loadGame, [loading, data]);

  return { cards, onCardClick };
}
