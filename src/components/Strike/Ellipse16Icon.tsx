import { memo, SVGProps } from 'react';

const Ellipse16Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 456 456' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.2} cx={228} cy={228} r={228} stroke='#3C68A1' />
  </svg>
);
const Memo = memo(Ellipse16Icon);
export { Memo as Ellipse16Icon };
