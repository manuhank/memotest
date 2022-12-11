import { useEffect, useRef, useState } from "react";
import { CardState, revealedState } from "../types/states";

const mockedData = new Array(4).fill(null).map((e, i) => i.toString());

export default function useMemoTest() {
  const [cards, setCards] = useState<CardState[]>();
  const [lastCardsRevealed, setLastCardsRevealed] = useState<revealedState>([]);
  const [solvedCards, setSolvedCards] = useState<number>(0);
  const mismatchTimeout = useRef<NodeJS.Timeout>();

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
    const initialState = [...mockedData, ...mockedData]
      .map((val) => new CardState(val))
      .sort(() => (Math.random() <= 0.5 ? -1 : 1));
    setCards(initialState);
  };

  const onCardClick = (index: number) => {
    if (mismatchTimeout.current !== undefined) {
      clearTimeout(mismatchTimeout.current);
      hideRevealedCards();
    } else if (!lastCardsRevealed.length) {
      changeVisibility(index);
      setLastCardsRevealed([index]);
    } else {
      changeVisibility(index);
      if (cards[lastCardsRevealed[0]].url === cards[index].url) {
        setSolvedCards(solvedCards + 2);
        setLastCardsRevealed([]);
      } else {
        setLastCardsRevealed([...(lastCardsRevealed as [number]), index]);
        mismatchTimeout.current = setTimeout(hideRevealedCards, 2000);
        console.log(typeof mismatchTimeout.current);
      }
    }
  };

  useEffect(loadGame, []);

  return { cards, onCardClick };
}
