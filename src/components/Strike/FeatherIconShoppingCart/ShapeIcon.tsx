import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 14' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M4.725 5H19.1667L17.7667 11.9917C17.6094 12.7835 16.9072 13.3488 16.1 13.3333H7.29167C6.44957 13.3405 5.73445 12.7183 5.625 11.8833L4.35833 2.28333C4.24968 1.45466 3.54409 0.834599 2.70833 0.833333H0.833333'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
