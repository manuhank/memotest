import "./gameButton.scss";
type gameButtonProps = {
  images?: string[];
  name: string;
  onClick: () => void;
};

function GameButton({ images, onClick = () => {}, name }: gameButtonProps) {
  return (
    <div onClick={onClick} className={`GameButton`}>
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
