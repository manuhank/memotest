import { useState } from "react";
import "./App.scss";
import { MemotestId } from "./types/game.types";
import { Game } from "./views/game/game";
import { GameSelection } from "./views/gameSelection/gameSelection";

function App() {
  const [selectedGame, setSelectedGame] = useState<MemotestId>();
  return (
    <div className="App">
      {selectedGame !== undefined ? (
        <Game id={selectedGame} />
      ) : (
        <GameSelection onSelection={setSelectedGame} />
      )}
    </div>
  );
}

export default App;
