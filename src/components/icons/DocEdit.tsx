import { ComponentProps } from 'react';

type Props = ComponentProps<'svg'>;

const DocEditIcon = (props: Props) => {
  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      {...props}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      clipRule="evenodd"
    >
      <title>Doc Edit</title>
      <path d="M12.5 6.75a.75.75 0 0 0-1.5 0V9H8.75a.75.75 0 0 0 0 1.5H11v2.25a.75.75 0 0 0 1.5 0V10.5h2.25a.75.75 0 0 0 0-1.5H12.5V6.75ZM8.75 16a.75.75 0 0 0 0 1.5h6a.75.75 0 0 0 0-1.5h-6Z" />
      <path d="M5 1a2 2 0 0 0-2 2v18a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V7.018a2 2 0 0 0-.586-1.414l-4.018-4.018A2 2 0 0 0 14.982 1H5Zm-.5 2a.5.5 0 0 1 .5-.5h9.982a.5.5 0 0 1 .354.146l4.018 4.018a.5.5 0 0 1 .146.354V21a.5.5 0 0 1-.5.5H5a.5.5 0 0 1-.5-.5V3Z" />
    </svg>
  );
};

export default DocEditIcon;
