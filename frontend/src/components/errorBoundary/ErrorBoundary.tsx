import React, { ReactNode } from "react";
import Modal from "../modal/modal";

type ErrorBoundaryState = {
  hasError: boolean;
  error: Error;
};
type ErrorBoundaryProps = {
  children: ReactNode;
};

export class ErrorBoundary extends React.Component<
  ErrorBoundaryProps,
  ErrorBoundaryState
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: undefined };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      return (
        <Modal title="Sorry, something went wrong" onAccept={()=>window.location.reload()}>
          <iframe
            src="https://giphy.com/embed/3ohs4qw8hkPShGeanS"
            frameBorder="0"
          ></iframe>
          <p>{this.state.error.message}</p>
        </Modal>
      );
    }

    return this.props.children;
  }
}
