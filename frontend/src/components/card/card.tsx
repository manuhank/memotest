import "./card.scss";
type cardProps = {
  imgSrc: string;
  onClick: () => void;
  hidden: boolean;
};

function Card({ imgSrc, onClick= ()=>{}, hidden }: cardProps) {
  return (
    <div
      onClick={()=>hidden && onClick()}
      className={`Card ${hidden ? "hidden" : ""}`}
    >
      {!hidden && <img src={imgSrc}/>}
    </div>
  );
}

export default Card;
