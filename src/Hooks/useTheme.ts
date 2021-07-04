import { useContextSelector } from 'use-context-selector'
import { Context } from '@/Context'


export default function () {
    const theme = useContextSelector(Context, s => s.store?.theme);
    const dispath = useContextSelector(Context, s => s.dispath);

    const isDarkMode = theme == 'dark';
    const isLightMode = !isDarkMode;


    return { isDarkMode, isLightMode, dispath }
}