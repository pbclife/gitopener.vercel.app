import TypoComp from '@utilities/TypoComponent';
import type { FC, ReactElement } from 'react';
import { Children, useState } from 'react';
import Tab from './Tab';

type TabsProps = {
  children?: ReactElement[];
};

const Tabs: FC<TabsProps> = ({ children }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const arrayChildren = Children.toArray(children) as ReactElement[];
  const activeTabContent = arrayChildren[activeTabIndex]?.props?.children;
  return (
    <>
      <ul className="not-prose mb-6 flex min-w-full flex-none space-x-6 overflow-auto border-b border-skin-base pb-px ">
        {arrayChildren.map((child: ReactElement, i: number) => (
          <li
            key={i}
            onClick={() => setActiveTabIndex(i)}
            className="cursor-pointer"
          >
            <Tab
              title={child?.props?.title ?? 'Tab Title'}
              isActive={i === activeTabIndex}
            />
          </li>
        ))}
      </ul>
      <TypoComp className="mb-12 !max-w-none text-skin-base">
        {activeTabContent}
      </TypoComp>
    </>
  );
};

export default Tabs;
