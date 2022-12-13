import "./card.scss";
type cardProps = {
  imgSrc: string;
  onClick: () => void;
  hidden: boolean;
};

function Card({ imgSrc, onClick = () => {}, hidden }: cardProps) {
  return (
    <div
      onClick={() => hidden && onClick()}
      className={`Card ${hidden ? "hidden" : ""}`}
    >
      <div className={`content ${hidden ? "hidden" : ""}`}>
        <div className="image">
          <img src={imgSrc} />
        </div>
        <div className="background"></div>
      </div>
    </div>
  );
}

export default Card;
