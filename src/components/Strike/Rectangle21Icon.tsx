import { memo, SVGProps } from 'react';

const Rectangle21Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 145 50' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path d='M0 8C0 3.58172 3.58172 0 8 0H145V50H8C3.58173 50 0 46.4183 0 42V8Z' fill='#EBF0F6' />
  </svg>
);
const Memo = memo(Rectangle21Icon);
export { Memo as Rectangle21Icon };
