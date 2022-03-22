import React from "react";
import { ScreenStatus } from "../utils/types";
import { Connect, Failed, Pending, Send } from "../components/a";

export const useApp = () => {
  const [status, setStatus] = React.useState<ScreenStatus>(ScreenStatus.PENDING);

  let screen = <Connect />;

  switch (status) {
    case ScreenStatus.CONNECT:
      screen = <Connect />
      break;
    case ScreenStatus.INITIAL:
      screen = <Send />
      break;
    case ScreenStatus.PENDING:
      screen = <Pending />
      break;
    case ScreenStatus.FAILED:
      screen = <Failed />
      break;
    default:
      screen = <Connect />
      break;
  }

  console.log(status);

  console.log(screen);

  return {
    status,
    screen,
    setStatus
  }
}