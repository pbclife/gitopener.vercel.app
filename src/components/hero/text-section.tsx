import { useHeaderContext } from '@/context/headerContext';
import Dot from '@utilities/dot';
import TypoComp from '@utilities/typo-component';
import Links from './links';

export default function TextSection() {
  const { contributorsCount } = useHeaderContext();
  return (
    <section className="space-y-6">
      {/* icons */}
      <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium capitalize text-skin-base">
        {contributorsCount} contributors
        <Dot />
        Open Source
        <Dot />
        Student community
      </div>
      <TypoComp className="prose-sm prose-h1:capitalize xs:prose-base">
        <h1>
          Great place to start <span className="text-accent">Open-Source</span>{' '}
          Journey. Contribute today
        </h1>
        <p>
          An open source project focuses on student learning, If you want to get
          started with open source with Github you are on the right spot. Just
          create a copy
        </p>
      </TypoComp>
      {/* links */}
      <Links />
    </section>
  );
}
