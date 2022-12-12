import "./gameSelection.scss";
import { MemotestId } from "../../types/game.types";
import { GET_ALL_MEMOTESTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";

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
            <p key={id} onClick={() => onSelection(id)}>
              {name}
            </p>
          ))}
        </>
      )}
    </div>
  );
}
