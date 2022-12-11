import "./App.scss";
import Card from "./components/card/card";
import useMemoTest from "./hooks/useMemoTest";

function App() {
  const { cards, onCardClick } = useMemoTest();
  return (
    <div className="App">
      {cards ? (
        cards.map(({ url, hidden }, index) => (
          <Card
            key={index + url}
            id={index}
            imgSrc={url}
            onClick={() => onCardClick(index)}
            hidden={hidden}
          />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
