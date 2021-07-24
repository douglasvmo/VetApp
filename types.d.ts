export type ActionContext =
  | {
      type: 'theme';
      payload: 'dark' | 'light';
    }
  | {
      type: 'auth';
      payload: string | null;
    };

export type StateContext = {
  theme: 'dark' | 'light';
  token: string | null;
};

export type InitialStateContext = {
  store: StateContext;
  dispath: React.Dispatch<ActionContext>;
};
