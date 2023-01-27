import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const GitOpenerIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 54 54"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <title>GitOpener</title>
      <path d="M38.655 6.13a2.5 2.5 0 1 0 .373-.668l-.373.669Zm-2.857-.92A23.5 23.5 0 1 0 50.452 28.5h-6.517C43.175 37.186 35.883 44 27 44c-9.389 0-17-7.611-17-17s7.611-17 17-17c8.883 0 16.175 6.814 16.935 15.5H53.5V27A26.5 26.5 0 1 1 37.57 2.7a5.5 5.5 0 1 1-1.773 2.51Zm2.1 20.29C37.169 20.134 32.567 16 27 16c-6.075 0-11 4.925-11 11s4.925 11 11 11c5.566 0 10.167-4.134 10.899-9.5h-5.606a5.5 5.5 0 1 1 0-3h5.606ZM24.5 27a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0Z" />
    </svg>
  );
};

export default GitOpenerIcon;
