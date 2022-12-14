import "./gameSelection.scss";
import { MemotestId } from "../../types/game.types";
import { GET_ALL_MEMOTESTS } from "../../graphql/queries";
import { useQuery } from "@apollo/client";
import GameButton from "../../components/gameButton/gameButton";
import { useState } from "react";
import { getAllMemotests } from "../../types/api.types";

type GameSelectionProps = {
  onSelection: (id: MemotestId) => void;
};

export function GameSelection({ onSelection }: GameSelectionProps) {
  const [page, setPage] = useState<number>(1);
  const { data, loading }: { data: getAllMemotests; loading: boolean } =
    useQuery(GET_ALL_MEMOTESTS(page));
  return (
    <div className="GameSelection">
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <h1>Choose your game:</h1>
          <div className="games">
            {data.memotests.data.map(({ id, name, images }) => (
              <GameButton
                key={id}
                name={name}
                onClick={() => onSelection(id)}
                images={images}
              />
            ))}
          </div>
          <div className="paginationBar">
            <button
              type="button"
              disabled={page <= 1}
              onClick={() => setPage(page - 1)}
            >
              {"<"}
            </button>
            <button
              type="button"
              disabled={!data.memotests.paginatorInfo.hasMorePages}
              onClick={() => setPage(page + 1)}
            >
              {">"}
            </button>
          </div>
        </>
      )}
    </div>
  );
}
