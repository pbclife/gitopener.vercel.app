import Container from '@layouts/Container';
import Logo from '@utilities/Logo';
import type { FC } from 'react';
import ThemeButton from './ThemeButton';

const Navbar: FC = () => {
  return (
    <Container className="z-10 flex items-center justify-between">
      {/* logo */}
      <Logo />
      {/* social icons */}
      <ThemeButton />
    </Container>
  );
};
export default Navbar;
