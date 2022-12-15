import { useState } from "react";
import "./App.scss";
import { ErrorBoundary } from "./components/errorBoundary/ErrorBoundary";
import { MemotestId } from "./types/game.types";
import { Game } from "./views/game/game";
import { GameSelection } from "./views/gameSelection/gameSelection";

function App() {
  const [selectedGame, setSelectedGame] = useState<MemotestId>();
  return (
    <div className="App">
      <ErrorBoundary>
        {selectedGame !== undefined ? (
          <Game
            id={selectedGame}
            onFinnish={() => setSelectedGame(undefined)}
          />
        ) : (
          <GameSelection onSelection={setSelectedGame} />
        )}
      </ErrorBoundary>
    </div>
  );
}

export default App;
