import { useThemeContext } from '@/context/theme-context';
import ForkAltIcon from '../icons/fork-alt';
import GithubAltIcon from '../icons/github-alt';

export default function LogoSection() {
  const { isDark } = useThemeContext();
  return (
    <section className="relative hidden text-skin-base lg:block">
      <div className="absolute bottom-4 right-16 ">
        <GithubAltIcon className="h-36 w-36" />
      </div>
      <ForkAltIcon
        className={`h-96 w-96 rotate-6  ${
          isDark
            ? `text-skin-base`
            : ` fill-transparent stroke-skin-base stroke-1 `
        }`}
      />
    </section>
  );
}
