import { memo, SVGProps } from 'react';

const OvalIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 4 5' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M1.66667 4.16667C2.58714 4.16667 3.33333 3.42047 3.33333 2.5C3.33333 1.57953 2.58714 0.833334 1.66667 0.833334C0.746192 0.833334 0 1.57953 0 2.5C0 3.42047 0.746192 4.16667 1.66667 4.16667Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(OvalIcon2);
export { Memo as OvalIcon2 };
