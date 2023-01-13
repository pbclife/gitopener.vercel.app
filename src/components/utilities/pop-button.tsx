import { Menu } from '@headlessui/react';
import { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
  className: string;
  onClick?: () => void;
};

const PopButton: FC<Props> = ({ children, onClick, className }) => {
  return (
    <Menu.Item
      as="button"
      onClick={onClick}
      className={`font-lexend px-6 py-2 font-semibold capitalize outline-none ${
        className || ``
      }`}
    >
      {children}
    </Menu.Item>
  );
};

export default PopButton;
