import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const GitOpenerIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 190 218"
      {...props}
      fill="currentColor"
      fillRule="evenodd"
      clipRule="evenodd"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>GitOpener</title>
      <path d="M189.067 54.69 95 .382.934 54.691v108.618L95 217.619l94.067-54.31V54.691ZM80.441 18.025l14.56-8.405 15.438 8.913.002 56.698c-.172 1.977-7.31 6.644-15.002 9.912-7.691-3.262-14.809-7.926-14.994-9.896l-.004-57.222Zm-6.464 3.732L8.934 59.31v99.382L95 208.381l86.067-49.69V59.309l-64.162-37.044.002 52.979c-.003 2.276-1.326 4.467-3.334 6.475-3.917 3.917-10.448 7.159-14.9 9.077v43.877c5.547 1.439 9.657 6.49 9.662 12.48l-.004 29.502c0 3.44-1.34 6.679-3.775 9.113a12.802 12.802 0 0 1-9.113 3.775 12.79 12.79 0 0 1-9.115-3.774 12.798 12.798 0 0 1-3.772-9.117l-.007-29.496c.005-5.781 4.235-10.935 9.658-12.448l.002-43.912c-6.734-2.898-18.23-8.834-18.228-15.55l-.004-53.49ZM95.534 140.73l.042-.001c3.477.073 6.29 2.93 6.294 6.431l-.003 29.496c-.003 3.429-2.997 6.423-6.424 6.423a6.37 6.37 0 0 1-4.543-1.881 6.379 6.379 0 0 1-1.88-4.545l-.008-29.49a6.402 6.402 0 0 1 1.888-4.549 6.398 6.398 0 0 1 4.408-1.885l.132.002.094-.001Z"></path>
    </svg>
  );
};

export default GitOpenerIcon;