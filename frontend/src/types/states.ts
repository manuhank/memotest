export class CardState {
    url: string;
    hidden: boolean;
    constructor(url) {
      this.url = url;
      this.hidden = true;
    }
  }

  export type revealedState = [number?, number?];