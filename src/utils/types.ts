export enum ScreenStatus {
  LOADING = "loading",
  INITIAL = "initial",
  ERROR = "initial_incomplete",
  PENDING = "pending",
  SUCCESSFUL = "successful",
  FAILED = "failed",
  CONNECT = "connect",
}

export interface State {
  screen: ScreenStatus;
}