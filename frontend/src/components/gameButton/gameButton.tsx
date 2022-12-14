import { ImageURLS } from "../../types/game.types";
import "./gameButton.scss";
type gameButtonProps = {
  images?: ImageURLS[];
  name: string;
  onClick: () => void;
  key:string
};

function GameButton({ images, onClick = () => {}, name }: gameButtonProps) {
  return (
    <div onClick={onClick} className="GameButton">
      <p>{name}</p>
      <div className="background">
        {images?.map(({url}) => (
          <img src={url}/>
        ))}
      </div>
    </div>
  );
}

export default GameButton;
