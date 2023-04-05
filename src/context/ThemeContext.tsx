import {
  ComponentProps,
  Dispatch,
  FC,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';

type Mode = 'light' | 'dark';

interface ThemeStateType {
  mode: Mode;
  setIsThemeChanged: Dispatch<SetStateAction<number>>;
  isDark: boolean;
}

const ThemeContext = createContext<ThemeStateType>({
  mode: 'light',
  isDark: false,
  setIsThemeChanged: () => {},
});

type ThemeProps = ComponentProps<'div'>;

const ThemeProvider: FC<ThemeProps> = ({ children, className, ...props }) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [isDark, setIsDark] = useState<boolean>(false);
  const [isThemeChanged, setIsThemeChanged] = useState<number>(0);
  const [mode, setMode] = useState<Mode>(`light`);

  function isSystemHasDarkTheme(): boolean {
    return window.matchMedia('(prefers-color-scheme: dark)').matches;
  }

  function mediaQueryListener(e: MediaQueryListEvent) {
    if (e.matches) {
      setMode(`dark`);
      setIsDark(true);
    } else {
      setMode(`light`);
      setIsDark(false);
    }
  }

  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const isTokenFound = window.localStorage.getItem('prefers-theme');
    if (isTokenFound) {
      if (isTokenFound === 'dark') {
        setMode('dark');
        setIsDark(true);
      } else {
        setMode('light');
        setIsDark(false);
      }
    } else {
      if (isSystemHasDarkTheme()) {
        setMode('dark');
        setIsDark(true);
      } else {
        setMode('light');
        setIsDark(false);
      }

      darkModeMediaQuery.addEventListener('change', mediaQueryListener);
    }
    setLoading(false);
    return () =>
      darkModeMediaQuery.removeEventListener('change', mediaQueryListener);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isThemeChanged]);

  const value: ThemeStateType = {
    mode,
    isDark,
    setIsThemeChanged,
  };
  return (
    <ThemeContext.Provider value={value}>
      {!loading && (
        <div className={`${mode} ${className || ``}`} {...props}>
          {children}
        </div>
      )}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;

export const useThemeContext = () => useContext(ThemeContext);
