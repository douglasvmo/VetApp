export type ActionContext =
  | {
      type: 'theme';
      payload: 'dark' | 'light';
    }
  | {
      type: 'auth';
      payload: string | null;
    }
  | {type: 'alert'; payload: {show: boolean; message?: string}};

export type StateContext = {
  theme: 'dark' | 'light';
  token: string | null;
  alert: {
    show: boolean;
    message?: string;
  };
};

export type InitialStateContext = {
  store: StateContext;
  dispath: React.Dispatch<ActionContext>;
};
