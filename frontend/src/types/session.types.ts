export type Session = {
    id: String;
    memotestId: String;
    retries: number;
    numberOfPairs: number;
    state: SessionState;
  };
  
  enum SessionState {
    STARTED = "STARTED",
    COMPLETED = "COMPLETED",
  }
  