import ForkAltIcon from '../icons/fork-alt';
import GithubAltIcon from '../icons/github-alt';

export default function LogoSection() {
  return (
    <section className="relative hidden lg:block">
      <div className="absolute bottom-4 right-16 ">
        <GithubAltIcon className="h-36 w-36" />
      </div>
      <ForkAltIcon className="h-96 w-96 rotate-6 fill-transparent stroke-slate-900 stroke-1 " />
    </section>
  );
}
