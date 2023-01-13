import { useThemeContext } from '@/context/theme-context';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import Container from '@layouts/container';
import Logo from '@utilities/logo';
import Pop from '@utilities/pop';
import Themes from './theme';

export default function Navbar() {
  const { isDark } = useThemeContext();
  return (
    <Container className="z-10 flex items-center justify-between">
      {/* logo */}
      <Logo />
      {/* social icons */}
      <div className="">
        <Pop Icon={isDark ? MoonIcon : SunIcon} className="!z-50">
          <Themes />
        </Pop>
      </div>
    </Container>
  );
}
