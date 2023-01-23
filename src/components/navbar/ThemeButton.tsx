import { useThemeContext } from '@/context/ThemeContext';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Pop from '@utilities/Pop';
import type { FC } from 'react';
import Themes from './Theme';

const ThemeButton: FC = () => {
  const { isDark } = useThemeContext();
  return (
    <div className="">
      <Pop Icon={isDark ? MoonIcon : SunIcon} className="z-50">
        <Themes />
      </Pop>
    </div>
  );
};

export default ThemeButton;
