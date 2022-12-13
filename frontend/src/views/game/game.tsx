import "./game.scss";
import Card from "../../components/card/card";
import useMemoTest from "../../hooks/useMemoTest";
import { MemotestId } from "../../types/game.types";
import Modal from "../../components/modal/modal";

type GameProps = {
  id: MemotestId;
  onFinnish: (v: any) => void;
};

export function Game({ id, onFinnish }: GameProps) {
  const { cards, onCardClick, score } = useMemoTest(id);
  return (
    <div className="Game">
      {score !== undefined && (
        <Modal title="Congratulations!" onAccept={onFinnish}>
          <iframe
            src="https://giphy.com/embed/3o6fIUZTTDl0IDjbZS"
            frameBorder="0"
            className="giphy-embed"
            allowFullScreen
          ></iframe>
          <p>{`You scored: ${score} points`}</p>
        </Modal>
      )}
      {cards ? (
        cards.map(({ url, hidden }, index) => (
          <Card
            key={index + url}
            number={index + 1}
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
