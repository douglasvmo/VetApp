import {useSelector} from '@/Hooks';

export default function () {
  return useSelector(state => state.dispath);
}
