import { useThemeContext } from '@/context/ThemeContext';
import { ComputerDesktopIcon } from '@heroicons/react/24/outline';
import PopButton from '@utilities/PopButton';
import type { FC } from 'react';

const Themes: FC = () => {
  const { setIsThemeChanged } = useThemeContext();

  function setDarkTheme() {
    window.localStorage.setItem('prefers-theme', 'dark');
    setIsThemeChanged((cng) => cng + 1);
  }
  function setLightTheme() {
    window.localStorage.setItem('prefers-theme', 'light');
    setIsThemeChanged((cng) => cng + 1);
  }
  function setSystemTheme() {
    window.localStorage.clear();
    setIsThemeChanged((cng) => cng + 1);
  }

  return (
    <div className=" w-screen max-w-[16rem] space-y-2 p-4">
      <h2 className="text-2xl font-bold capitalize tracking-tight text-skin-base">
        Choose Theme
      </h2>
      {/* two buttons */}
      <div className="flex w-full flex-wrap items-center justify-between">
        <PopButton
          onClick={setLightTheme}
          className="w-[48%] rounded-md border border-skin-base bg-white px-6 py-3 capitalize text-neutral-800"
        >
          light
        </PopButton>
        <PopButton
          onClick={setDarkTheme}
          className="w-[48%] rounded-md border border-skin-base bg-neutral-900 px-6 py-3 capitalize text-white"
        >
          dark
        </PopButton>
      </div>
      {/* sync with system */}
      <PopButton
        onClick={setSystemTheme}
        className="flex items-center justify-center gap-x-2 rounded-full border border-skin-base bg-skin-base px-4 py-3 text-skin-base hover:bg-skin-shine"
      >
        <ComputerDesktopIcon className="h-5 w-5" /> Sync with System
      </PopButton>
    </div>
  );
};

export default Themes;
