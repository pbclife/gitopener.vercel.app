import { useThemeContext } from '@/context/theme-context';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Pop from '@utilities/pop';
import Themes from './theme';

export default function ThemeButton() {
  const { isDark } = useThemeContext();
  return (
    <div className="">
      <Pop Icon={isDark ? MoonIcon : SunIcon} className="z-50">
        <Themes />
      </Pop>
    </div>
  );
}
