import LogoSection from './logo-section';
import TextSection from './text-section';

export default function Hero() {
  return (
    <div className="flex w-full items-center justify-between pb-6">
      <TextSection />
      <LogoSection />
    </div>
  );
}
