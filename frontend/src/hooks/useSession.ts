import { useMutation } from "@apollo/client";
import { useEffect } from "react";
import {
  CREATE_SESSION,
  END_SESSION,
  UPDATE_SESSION_RETRIES,
} from "../graphql/session.mutations";
import { createSession } from "../types/api.types";

export default function useSession(memotestId) {
  const [
    CreateSession,
    { data: createdSession, loading: isCreatingSession, error: creationError },
  ] = useMutation<createSession>(CREATE_SESSION);
  const [
    UpdateSessionRetries,
    { loading: isUpdatingSession, error: updatedError },
  ] = useMutation(UPDATE_SESSION_RETRIES);
  const [EndSession, { loading: isEndingSession, error: endedError }] =
    useMutation(END_SESSION);

  useEffect(() => {
    if (memotestId) CreateSession({ variables: { memotestId } });
  }, [memotestId]);

  const updateRetries = (retries) =>
    !isCreatingSession &&
    UpdateSessionRetries({
      variables: { id: createdSession.createSession.id, retries },
    });

  const endSession = (retries) =>
    !isCreatingSession &&
    EndSession({ variables: { id: createdSession.createSession.id, retries } });

  return {
    updateRetries,
    endSession,
    isCreatingSession,
    isUpdatingSession,
    isEndingSession,
    error: creationError || updatedError || endedError,
  };
}
