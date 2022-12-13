import { Memotest } from "./game.types";

export type getMemotestById = {
  memotest: Memotest;
};

export type getAllMemotests = {
  memotests: {
    data: Memotest[];
    paginatorInfo: {
      hasMorePages: boolean;
    };
  };
};
