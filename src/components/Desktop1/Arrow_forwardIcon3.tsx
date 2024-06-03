import { memo, SVGProps } from 'react';

const Arrow_forwardIcon3 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 24 24' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <mask
      id='mask0_388_1669'
      style={{
        maskType: 'alpha',
      }}
      maskUnits='userSpaceOnUse'
      x={0}
      y={0}
      width={24}
      height={24}
    >
      <rect width={24} height={24} fill='#D9D9D9' />
    </mask>
    <g mask='url(#mask0_388_1669)'>
      <path d='M17.35 12.35H5.3V11.65H17.35L11.5 5.8L12 5.3L18.7 12L12 18.7L11.5 18.2L17.35 12.35Z' fill='#1C1B1F' />
    </g>
  </svg>
);

const Memo = memo(Arrow_forwardIcon3);
export { Memo as Arrow_forwardIcon3 };
