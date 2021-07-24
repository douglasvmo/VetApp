import React from 'react';
import {createContext} from 'use-context-selector';
import {StateContext, InitialStateContext, ActionContext} from 'types';

const initialState: StateContext = {
  theme: 'light',
  token: null,
};

export const Context = createContext<InitialStateContext>({
  store: initialState,
  dispath: () => {},
});

function reducer(state: StateContext, action: ActionContext): StateContext {
  switch (action.type) {
    case 'theme':
      return {...state, theme: action.payload};
    case 'auth':
      return {...state, token: action.payload};
    default:
      return state;
  }
}

export type Props = {
  children: React.ReactNode;
};

export default function ({children}: Props) {
  const [store, dispath] = React.useReducer(reducer, initialState);

  return (
    <Context.Provider value={{store, dispath}}>{children}</Context.Provider>
  );
}
