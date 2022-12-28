import Dot from '@/utilities/dot';
import TypoComp from '@/utilities/typo-component';

export default function TextSection() {
  return (
    <section className="space-y-6">
      {/* icons */}
      <div className="flex flex-wrap items-center gap-x-4 text-sm font-medium capitalize">
        1 contributors
        <Dot />
        Open Source
        <Dot />
        Student community
      </div>
      <TypoComp>
        <h1>
          Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet consectetur.{' '}
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure,
          veritatis architecto totam accusantium placeat voluptas ipsum numquam.
        </p>
      </TypoComp>
      {/* links */}
      <div className="">links</div>
    </section>
  );
}
