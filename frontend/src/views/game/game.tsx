import "./game.scss";
import Card from "../../components/card/card";
import useMemoTest from "../../hooks/useMemoTest";
import { MemotestId } from "../../types/game.types";

type GameProps = {
  id: MemotestId;
};

export function Game({ id }: GameProps) {
  const { cards, onCardClick } = useMemoTest(id);
  return (
    <div className="Game">
      {cards ? (
        cards.map(({ url, hidden }, index) => (
          <Card
            key={index + url}
            imgSrc={url}
            onClick={() => onCardClick(index)}
            hidden={hidden}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
