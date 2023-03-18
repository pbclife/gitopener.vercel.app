import type { FC, ReactElement } from 'react';

import Image from 'next/image';
import { Children, useState } from 'react';
import ProjectDetails from './ProjectDetails';
import ProjectList from './ProjectList';

type ProjectsProps = {
  children?: ReactElement[];
};

const Projects: FC<ProjectsProps> = ({ children }) => {
  const [activePtojectIndex, setActivePtojectIndex] = useState(0);
  const arrayChildren = Children.toArray(children) as ReactElement[];
  const activeChildren = arrayChildren[activePtojectIndex];
  const activePtojectProps = arrayChildren[activePtojectIndex]?.props;

  const hasImageProp: boolean = activePtojectProps && activePtojectProps?.image;

  const isUseNextImage: boolean =
    hasImageProp &&
    activePtojectProps.image.startsWith(
      'https://user-images.githubusercontent.com'
    );

  return (
    <section className="relative my-12 mx-auto max-w-7xl">
      <div className="mx-auto grid grid-cols-1 gap-y-8 xl:max-w-none ">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {/* Project Details */}
          <div className="row-start-2">
            <ProjectDetails className="">{activeChildren}</ProjectDetails>
          </div>
          <div className="row-start-1 md:row-start-2 xl:mt-6">
            <ProjectList
              onSelect={setActivePtojectIndex}
              inFocus={activePtojectIndex}
            >
              {arrayChildren}
            </ProjectList>
          </div>
          {/* canvas */}
        </div>
        <div className="relative xl:col-span-2">
          {hasImageProp ? (
            isUseNextImage ? (
              <Image
                className="aspect-video flex-auto rounded-xl bg-white text-skin-base"
                src={activePtojectProps?.image}
                alt={activePtojectProps?.name}
                width={1280}
                height={720}
              />
            ) : (
              // eslint-disable-next-line @next/next/no-img-element
              <img
                className="aspect-video flex-auto rounded-xl bg-white text-skin-base"
                src={activePtojectProps?.image}
                alt={activePtojectProps?.name}
              />
            )
          ) : null}
        </div>
      </div>
    </section>
  );
};

export default Projects;
