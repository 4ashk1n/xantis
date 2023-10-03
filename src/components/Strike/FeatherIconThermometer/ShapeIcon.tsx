import { memo, SVGProps } from 'react';

const ShapeIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 9 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M6.66667 12.3V2.91667C6.66667 1.76607 5.73393 0.833333 4.58333 0.833333C3.43274 0.833333 2.5 1.76607 2.5 2.91667V12.3C1.12657 13.2177 0.515323 14.9259 0.994798 16.5066C1.47427 18.0872 2.93154 19.168 4.58333 19.168C6.23512 19.168 7.69239 18.0872 8.17187 16.5066C8.65134 14.9259 8.0401 13.2177 6.66667 12.3Z'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);
const Memo = memo(ShapeIcon);
export { Memo as ShapeIcon };
