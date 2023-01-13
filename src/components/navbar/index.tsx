import Container from '@layouts/container';
import Logo from '@utilities/logo';
import ThemeButton from './theme-button';

export default function Navbar() {
  return (
    <Container className="z-10 flex items-center justify-between">
      {/* logo */}
      <Logo />
      {/* social icons */}
      <ThemeButton />
    </Container>
  );
}
