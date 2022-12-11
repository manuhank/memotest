import { useState } from "react";
import "./App.css";
import Card from "./components/card/card";

class CardState {
  url: string;
  hidden: boolean;
  constructor(url) {
    this.url = url;
    this.hidden = true;
  }
}

function App() {
  const [cards, setCards] = useState([new CardState("url")]);
  
  const changeVisibility = (index: number) => {
    const newState = [...cards];
    newState[index] = { ...newState[index], hidden: !newState[index].hidden };
    setCards(newState);
  };
  
  return (
    <div className="App">
      {cards.map(({ url, hidden }, index) => (
        <Card
          key={index + url}
          id={index}
          imgSrc={url}
          onClick={() => changeVisibility(index)}
          hidden={hidden}
        />
      ))}
    </div>
  );
}

export default App;
