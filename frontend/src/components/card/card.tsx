import "./card.scss";
type cardProps = {
  id: number;
  imgSrc: string;
  onClick: () => void;
  hidden: boolean;
};

function Card({ id, imgSrc, onClick= ()=>{}, hidden }: cardProps) {
  return (
    <div
      onClick={()=>hidden && onClick()}
      className={`Card ${hidden ? "hidden" : ""}`}
    >
      {/* TODO: switch to img */}
      {!hidden && imgSrc}
    </div>
  );
}

export default Card;
