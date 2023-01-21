import GitOpenerIcon from '@/components/icons/GitOpener';

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
      className="flex items-center -space-x-[0.35rem] border-none py-4 text-skin-base outline-none"
    >
      <GitOpenerIcon className="h-9 w-9 -rotate-90  " />
      <span className=" text-2xl font-bold tracking-tight">Git Opener</span>
    </button>
  );
}
