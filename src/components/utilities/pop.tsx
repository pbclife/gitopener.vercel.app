import { Menu, Transition } from '@headlessui/react';
import React, { ComponentProps, FC } from 'react';

type PopProps = ComponentProps<'div'> & {
  Icon: React.FC<React.ComponentProps<'svg'>>;
};

const Pop: FC<PopProps> = ({ children, Icon, className }) => {
  return (
    <Menu as={`div`} className={`relative z-0 ${className}`}>
      {/* icon */}
      <Menu.Button
        className={`group rounded-full border-none p-1 outline-none `}
      >
        {<Icon className={`h-8 w-8 text-skin-base group-hover:text-accent`} />}
      </Menu.Button>
      {/* panel */}
      <Transition
        enter="transition duration-500 ease-out"
        enterFrom="transform scale-95 opacity-0"
        enterTo="transform scale-100 opacity-100"
        leave="transition duration-300 ease-out"
        leaveFrom="transform scale-300 opacity-100"
        leaveTo="transform scale-95 opacity-0"
      >
        <Menu.Items
          className={`absolute top-4 -right-4 z-20 rounded-lg border border-skin-base bg-skin-base shadow-md `}
        >
          <div className="pointer-events-none absolute right-5 h-5 w-5 origin-top-right rotate-45 rounded bg-accent"></div>
          {children}
        </Menu.Items>
      </Transition>
    </Menu>
  );
};

export default Pop;
