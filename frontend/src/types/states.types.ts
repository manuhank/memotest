export class CardState {
    url: string;
    hidden: boolean;
    constructor(url) {
      this.url = url;
      this.hidden = true;
    }
  }

  export type RevealedState = [number?, number?];

  export type SavedGame = {
    retries:number;
    cards:CardState[];
    solvedCards: number;
    lastCardsRevealed: RevealedState;
  }