import { ApolloError } from "@apollo/client";
import { Memotest } from "./game.types";

export type requestStatus = { loading: boolean; error?: ApolloError };

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

export type createSession = {
  createSession: {
    id: string;
  };
};

export type updateSessionRetries = {
  updateSessionRetries: {
    id: string;
  };
};

export type endSession = {
  endSession: {
    id: string;
  };
};
