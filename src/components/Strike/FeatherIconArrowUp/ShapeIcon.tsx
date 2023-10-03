import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 2 16' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 16V0' stroke='white' strokeWidth={2} strokeLinecap='round' strokeLinejoin='round' />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
