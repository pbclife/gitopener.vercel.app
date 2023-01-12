import GitOpenerIcon from '@/components/icons/git-opener';
import Container from '@layouts/container';

export default function Navbar() {
  return (
    <Container>
      {/* logo */}
      <div className="flex items-center gap-x-2 py-4">
        {/* <Image
          src={PBCLifeLogo}
          alt="logo"
          placeholder="blur"
          width={48}
          height={48}
          className="h-10 w-10 rounded-full object-cover object-center"
        /> */}
        <GitOpenerIcon className="h-10 w-10 rotate-90 " />
        <span className="text-2xl font-bold tracking-tight">Git Opener</span>
      </div>
      {/* social icons */}
      <div className=""></div>
    </Container>
  );
}
