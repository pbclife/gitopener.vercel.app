import GitOpenerIcon from '@/components/icons/git-opener';
import { useThemeContext } from '@/context/theme-context';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Container from '@layouts/container';
import Pop from '@utilities/pop';
import Themes from './theme';

export default function Navbar() {
  const { isDark } = useThemeContext();
  return (
    <Container className="z-10 flex items-center justify-between">
      {/* logo */}
      <div className="flex items-center gap-x-2 py-4 text-skin-base">
        <GitOpenerIcon className="h-10 w-10 rotate-90 " />
        <span className="text-2xl font-bold tracking-tight">Git Opener</span>
      </div>
      {/* social icons */}
      <div className="">
        <Pop Icon={isDark ? MoonIcon : SunIcon} className="!z-50">
          <Themes />
        </Pop>
      </div>
    </Container>
  );
}
