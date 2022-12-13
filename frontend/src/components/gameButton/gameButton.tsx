import "./gameButton.scss";
type gameButtonProps = {
  images?: string[];
  name: string;
  onClick: () => void;
  key:string
};

function GameButton({ images, onClick = () => {}, name, key }: gameButtonProps) {
  return (
    <div onClick={onClick} className="GameButton" key={key}>
      <p>{name}</p>
      <div className="background">
        {images?.map((imgSrc) => (
          <img src={imgSrc}/>
        ))}
      </div>
    </div>
  );
}

export default GameButton;
