import {useContextSelector} from 'use-context-selector';
import {Context} from '@/Context';
import {InitialStateContext} from 'types';

export default function (selector: (state: InitialStateContext) => any) {
  return useContextSelector(Context, selector);
}
