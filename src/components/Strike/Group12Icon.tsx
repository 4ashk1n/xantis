import { memo, SVGProps } from 'react';

const Group12Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 99 300' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <rect y={300} width={300} height={98.7611} rx={49.3805} transform='rotate(-90 0 300)' fill='#3C68A1' />
    <path
      d='M49.3805 300C22.1084 300 -9.66389e-07 277.892 -2.15849e-06 250.619L-2.20491e-06 249.558L98.7611 249.558L98.7611 250.619C98.7611 277.892 76.6526 300 49.3805 300V300Z'
      fill='#C62B48'
    />
    <rect
      y={300}
      width={300}
      height={98.7611}
      rx={49.3805}
      transform='rotate(-90 0 300)'
      fill='url(#paint0_linear_2_613)'
    />
    <rect
      opacity={0.2}
      x={9.02655}
      y={260.708}
      width={191.15}
      height={7.96461}
      rx={3.98231}
      transform='rotate(-90 9.02655 260.708)'
      fill='white'
    />
    <rect
      opacity={0.2}
      x={9.02655}
      y={62.1239}
      width={12.2124}
      height={7.9646}
      rx={3.9823}
      transform='rotate(-90 9.02655 62.1239)'
      fill='white'
    />
    <defs>
      <linearGradient
        id='paint0_linear_2_613'
        x1={300}
        y1={349.381}
        x2={174.69}
        y2={341.681}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='white' stopOpacity={0.2} />
        <stop offset={1} stopColor='white' stopOpacity={0} />
      </linearGradient>
    </defs>
  </svg>
);
const Memo = memo(Group12Icon);
export { Memo as Group12Icon };
