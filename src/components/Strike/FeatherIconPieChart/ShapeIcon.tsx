import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 17 17' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M16.675 11.2417C15.2165 14.6907 11.6365 16.7434 7.92314 16.2596C4.20977 15.7759 1.27512 12.8745 0.748987 9.16692C0.222857 5.45931 2.23448 1.85608 5.66666 0.358332'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
