import "./gameSelection.scss";
import { MemotestId } from "../../types/game.types";
import { GET_ALL_MEMOTESTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import GameButton from "../../components/gameButton/gameButton";

type GameSelectionProps = {
  onSelection: (id: MemotestId) => void;
};

export function GameSelection({ onSelection }: GameSelectionProps) {
  const { data, loading, error } = useQuery(GET_ALL_MEMOTESTS());
  return (
    <div className="Game">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {data.memotests.map(({ id, name, urls }) => (
            <GameButton key={id} name={name} onClick={() => onSelection(id)} images={JSON.parse(urls)}/>
          ))}
        </>
      )}
    </div>
  );
}
