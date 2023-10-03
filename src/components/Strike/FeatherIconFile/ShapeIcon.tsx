import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M9 0H2C0.89543 0 0 0.89543 0 2V18C0 19.1046 0.89543 20 2 20H14C15.1046 20 16 19.1046 16 18V7L9 0Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
