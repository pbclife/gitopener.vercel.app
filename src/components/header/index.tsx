import Hero from '../hero';
import Container from '../layouts/container';
import Navbar from '../navbar';

export default function Header() {
  return (
    <div className="relative border-b border-slate-200">
      <Navbar />
      <div className="pointer-events-none absolute inset-0 -z-10 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0))]"></div>
      <Container>
        <div className="mt-4 flex min-h-[21rem] items-center">
          <Hero />
        </div>
      </Container>
    </div>
  );
}
