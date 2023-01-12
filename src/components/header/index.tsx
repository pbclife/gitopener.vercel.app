import colors from 'tailwindcss/colors';
import Hero from '../hero';
import Container from '../layouts/container';
import Navbar from '../navbar';
import GradientBG from '../utilities/gradient-bg';

export default function Header() {
  return (
    <div className="relative border-b border-skin-base ">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-dot-slate-500/30 [mask-image:linear-gradient(-90deg,white,rgba(255,255,255,0))]"></div>
      <div className="pointer-events-none absolute inset-0 -z-20 bg-gradient-to-br from-primary via-primary/90 to-primary/50 backdrop-blur-md"></div>
      <GradientBG
        className="absolute inset-0 -z-30 h-full w-full animate-bg-shift"
        colors={[
          colors.fuchsia[400],
          colors.teal[500],
          colors.purple[600],
          colors.indigo[600],
        ]}
      />
      <Container>
        <div className="mt-4 flex min-h-[21rem] items-center">
          <Hero />
        </div>
      </Container>
    </div>
  );
}
