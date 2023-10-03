import { memo, SVGProps } from 'react';

const Group8Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 80 80' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <circle opacity={0.5} cx={40} cy={40} r={40} stroke='white' />
    <g clipPath='url(#clip0_2_715)'>
      <path
        d='M63.467 20.577L40.6827 15.4488C40.4965 15.4105 40.3045 15.4105 40.1183 15.4488L17.2827 20.577C16.9933 20.6421 16.7355 20.8055 16.553 21.0392C16.3706 21.273 16.2748 21.5627 16.2821 21.8591C16.2821 22.3591 17.0005 34.2309 19.81 42.5642C24.6081 56.8591 39.1433 64.5001 39.7591 64.8206C39.9414 64.915 40.1438 64.9643 40.3492 64.9643C40.5546 64.9643 40.7569 64.915 40.9393 64.8206C41.5551 64.5001 56.0903 56.8591 60.8883 42.5642C63.6979 34.2309 64.3906 22.3591 64.4163 21.8591C64.4262 21.5696 64.3378 21.2854 64.1654 21.0526C63.993 20.8198 63.7468 20.6521 63.467 20.577ZM58.4765 41.795C54.5508 53.5257 43.0817 60.6796 40.3748 62.3078C37.6423 60.7309 26.263 53.577 22.2732 41.795C20.0538 35.2052 19.1814 25.9744 18.9377 22.8591L40.3748 18.0514L61.812 22.8462C61.5683 25.9616 60.6959 35.1924 58.4765 41.795Z'
        fill='white'
      />
      <path
        opacity={0.5}
        d='M31.9336 37.1668C31.692 36.9254 31.3644 36.7897 31.0227 36.7897C30.6811 36.7897 30.3535 36.9254 30.1119 37.1668C29.8703 37.4082 29.7346 37.7356 29.7346 38.077C29.7346 38.4184 29.8703 38.7459 30.1119 38.9873L35.7053 44.577C35.8246 44.6972 35.9664 44.7926 36.1228 44.8577C36.2791 44.9228 36.4468 44.9563 36.6162 44.9563C36.7855 44.9563 36.9532 44.9228 37.1095 44.8577C37.2659 44.7926 37.4077 44.6972 37.527 44.577L50.6382 31.4745C50.8798 31.2331 51.0155 30.9056 51.0155 30.5642C51.0155 30.2228 50.8798 29.8954 50.6382 29.654C50.3966 29.4125 50.069 29.2769 49.7273 29.2769C49.3857 29.2769 49.0581 29.4125 48.8165 29.654L36.6162 41.9232L31.9336 37.1668Z'
        fill='white'
      />
    </g>
    <defs>
      <clipPath id='clip0_2_715'>
        <rect width={48.75} height={50} fill='white' transform='translate(16 15)' />
      </clipPath>
    </defs>
  </svg>
);
const Memo = memo(Group8Icon);
export { Memo as Group8Icon };