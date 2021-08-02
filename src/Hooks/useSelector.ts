import {useContextSelector} from 'use-context-selector';
import {Context} from '@/Context';
import {InitialStateContext} from 'types';

export default function <T>(selector: (state: InitialStateContext) => T) {
  return useContextSelector(Context, selector);
}
