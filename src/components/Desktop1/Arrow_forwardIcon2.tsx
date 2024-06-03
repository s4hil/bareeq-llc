import { memo, SVGProps } from 'react';

const Arrow_forwardIcon2 = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 230 230' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <path
      d='M138.734 142.075L81.2201 84.5611L84.5611 81.2201L142.075 138.734V82.8906H146.848V146.848H82.8906V142.075L138.734 142.075Z'
      fill='#0D2ABF'
    />
  </svg>
);

const Memo = memo(Arrow_forwardIcon2);
export { Memo as Arrow_forwardIcon2 };
