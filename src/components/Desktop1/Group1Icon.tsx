import { memo, SVGProps } from 'react';

const Group1Icon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 1493 1979' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g
      style={{
        mixBlendMode: 'multiply',
      }}
      filter='url(#filter0_f_388_1577)'
    >
      <path
        d='M933.401 190.254C868.543 241.206 822.762 293.349 820.921 333.96C804.659 521.746 575.451 1529.11 382.046 1890.25C140.291 2341.67 406.749 949.612 586.503 442.221C666.93 215.202 797.824 183.791 933.401 190.254C1122.52 41.6851 1473.83 -96.7552 1370.9 90.3924C1275.42 263.991 1100.84 198.237 933.401 190.254Z'
        fill='url(#paint0_linear_388_1577)'
      />
    </g>
    <g
      style={{
        mixBlendMode: 'multiply',
      }}
      filter='url(#filter1_f_388_1577)'
    >
      <path
        d='M461.983 1151.08L463.395 1150.34C560.665 1092.62 796.566 800.021 932.956 577.594C1103.44 299.56 1312.4 -175.256 1092.03 74.0427C871.662 323.342 446.834 916.658 329.603 1113.27C236.34 1269.69 377.39 1195.55 461.983 1151.08Z'
        fill='url(#paint1_linear_388_1577)'
      />
    </g>
    <defs>
      <filter
        id='filter0_f_388_1577'
        x={96.4121}
        y={-189}
        width={1482}
        height={2357}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={94.5} result='effect1_foregroundBlur_388_1577' />
      </filter>
      <filter
        id='filter1_f_388_1577'
        x={109.896}
        y={-185.027}
        width={1266.24}
        height={1582.13}
        filterUnits='userSpaceOnUse'
        colorInterpolationFilters='sRGB'
      >
        <feFlood floodOpacity={0} result='BackgroundImageFix' />
        <feBlend mode='normal' in='SourceGraphic' in2='BackgroundImageFix' result='shape' />
        <feGaussianBlur stdDeviation={94.5} result='effect1_foregroundBlur_388_1577' />
      </filter>
      <linearGradient
        id='paint0_linear_388_1577'
        x1={1064.21}
        y1={756.789}
        x2={400.634}
        y2={1113.38}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#787CFE' />
        <stop offset={0.475} stopColor='#00E2E0' />
        <stop offset={1} stopColor='#172D9D' />
      </linearGradient>
      <linearGradient
        id='paint1_linear_388_1577'
        x1={307.353}
        y1={1033.51}
        x2={959.61}
        y2={411.293}
        gradientUnits='userSpaceOnUse'
      >
        <stop stopColor='#00E2E0' />
        <stop offset={0.475} stopColor='#00C7E9' />
        <stop offset={1} stopColor='#172D9D' />
      </linearGradient>
    </defs>
  </svg>
);

const Memo = memo(Group1Icon);
export { Memo as Group1Icon };
