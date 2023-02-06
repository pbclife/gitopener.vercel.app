import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const QuoteIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>Quote</title>
      <circle cx="18.5" cy="14" r="5.5"></circle>
      <path d="M15.797,4.669C14.456,7.232,13,10.762,13,14h5V5.201C18,3.977,16.364,3.585,15.797,4.669z"></path>
      <path
        d="M5.5,8.5C5.331,8.5,5.165,8.51,5,8.525V5.201c0-1.224-1.636-1.616-2.203-0.532c-1.262,2.412-2.61,5.677-2.766,8.753 C0.011,13.612,0,13.805,0,14c0,3.038,2.462,5.5,5.5,5.5S11,17.038,11,14S8.538,8.5,5.5,8.5z"
        opacity=".35"
      ></path>{' '}
    </svg>
  );
};

export default QuoteIcon;
