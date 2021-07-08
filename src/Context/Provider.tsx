import React from 'react';
import {createContext} from 'use-context-selector';

export type State = {
  theme: 'dark' | 'light';
  token: string | null;
};

export type Action =
  | {
      type: 'theme';
      payload: 'dark' | 'light';
    }
  | {
      type: 'auth';
      payload: string | null;
    };

type InitialState = {
  store: State;
  dispath: React.Dispatch<Action>;
};

const initialState: State = {
  theme: 'light',
  token: null,
};

export const Context = createContext<InitialState>({
  store: initialState,
  dispath: () => {},
});

export type Props = {
  children: React.ReactNode;
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'theme':
      return {...state, theme: action.payload};
    case 'auth':
      return {...state, token: action.payload};
    default:
      return state;
  }
}

export default function ({children}: Props) {
  const [store, dispath] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{store, dispath}}>{children}</Context.Provider>
  );
}
