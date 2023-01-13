import GitOpenerIcon from '@/components/icons/git-opener';

export default function Logo() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  }
  return (
    <button
      type="button"
      onClick={scrollToTop}
      className="flex items-center gap-x-2 border-none py-4 text-skin-base outline-none"
    >
      <GitOpenerIcon className="h-10 w-10 rotate-90 " />
      <span className="text-2xl font-bold tracking-tight">Git Opener</span>
    </button>
  );
}
