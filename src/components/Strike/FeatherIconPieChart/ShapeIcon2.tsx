import { memo, SVGProps } from 'react';

const ShapeIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 9' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M8.33334 9C8.33334 6.78986 7.45536 4.67025 5.89256 3.10744C4.32975 1.54464 2.21014 0.666667 0 0.666667V9H8.33334Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShapeIcon2);
export { Memo as ShapeIcon2 };
