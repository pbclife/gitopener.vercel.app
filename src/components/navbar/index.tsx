import Image from 'next/image';
import PBCLifeLogo from '~/images/pbclifelogo.png';
import Container from '../layouts/container';

export default function Navbar() {
  return (
    <Container>
      {/* logo */}
      <div className="flex items-center gap-x-2 py-4">
        <Image
          src={PBCLifeLogo}
          alt="logo"
          placeholder="blur"
          width={48}
          height={48}
          className="h-10 w-10 rounded-full object-cover object-center"
        />
        <span className="text-2xl font-bold tracking-tight">PBC LIFE</span>
      </div>
      {/* social icons */}
      <div className=""></div>
    </Container>
  );
}
