import "./card.scss";
type cardProps = {
  number: number;
  imgSrc: string;
  onClick: () => void;
  hidden: boolean;
};

function Card({ number, imgSrc, onClick = () => {}, hidden }: cardProps) {
  return (
    <div
      onClick={() => hidden && onClick()}
      className={`Card ${hidden ? "hidden" : ""}`}
    >
      <div className={`content ${hidden ? "hidden" : ""}`}>
        <div className="image">
          <img src={imgSrc} />
        </div>
        <div className="background">
          <span>{number}</span>
        </div>
      </div>
    </div>
  );
}

export default Card;
