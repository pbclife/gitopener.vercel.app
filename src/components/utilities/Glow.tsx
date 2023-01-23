import { useThemeContext } from '@/context/ThemeContext';
import { FC, useEffect, useId, useState } from 'react';
import colors from 'tailwindcss/colors';

interface GlowType {
  className: string;
}

const Glow: FC<GlowType> = ({ className }) => {
  const id = useId();
  const [from, setFrom] = useState<string>(``);
  const [to, setTo] = useState<string>(``);
  const { isDark } = useThemeContext();

  useEffect(() => {
    if (isDark) {
      setFrom(colors.pink[500]);
      setTo(colors.fuchsia[400]);
    } else {
      setFrom(colors.blue[500]);
      setTo(colors.sky[500]);
    }
  }, [isDark]);

  return (
    <svg
      viewBox="0 0 384 12"
      fill="none"
      aria-hidden="true"
      className={`!pointer-events-none absolute top-full w-full transition ${className}`}
    >
      <mask
        id={`${id}-a`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={48}
        y={0}
        width={269}
        height={4}
      >
        <path
          transform="rotate(180 316.656 4)"
          fill="#C4C4C4"
          d="M316.656 4h268v4h-268z"
        />
      </mask>
      <g filter={`url(#${id}-b)`} mask={`url(#${id}-a)`}>
        <path
          transform="rotate(180 292.656 1)"
          fill={`url(#${id}-c)`}
          d="M292.656 1h220v2h-220z"
        />
      </g>
      <mask
        id={`${id}-d`}
        style={{ maskType: 'alpha' }}
        maskUnits="userSpaceOnUse"
        x={116}
        y={0}
        width={268}
        height={12}
      >
        <path
          transform="rotate(180 384 12)"
          fill="#C4C4C4"
          d="M384 12h268v12H384z"
        />
      </mask>
      <g filter={`url(#${id}-e)`} mask={`url(#${id}-d)`}>
        <path
          transform="rotate(180 360 1)"
          fill={`url(#${id}-f)`}
          d="M360 1h220v2H360z"
        />
      </g>
      <defs>
        <linearGradient
          id={`${id}-c`}
          x1="292.656"
          y1={1}
          x2="512.656"
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={from} stopOpacity={0} />
          <stop offset=".323" stopColor={from} />
          <stop offset=".672" stopColor={to} stopOpacity=".3" />
          <stop offset={1} stopColor={to} stopOpacity={0} />
        </linearGradient>
        <linearGradient
          id={`${id}-f`}
          x1={360}
          y1={1}
          x2={580}
          y2={1}
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor={from} stopOpacity={0} />
          <stop offset=".323" stopColor={from} />
          <stop offset=".672" stopColor={to} stopOpacity=".3" />
          <stop offset={1} stopColor={to} stopOpacity={0} />
        </linearGradient>
        <filter
          id={`${id}-b`}
          x="71.656"
          y={-2}
          width={222}
          height={4}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation=".5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
        <filter
          id={`${id}-e`}
          x={131}
          y={-10}
          width={238}
          height={20}
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity={0} result="BackgroundImageFix" />
          <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
          <feGaussianBlur
            stdDeviation="4.5"
            result="effect1_foregroundBlur_311_43467"
          />
        </filter>
      </defs>
    </svg>
  );
};

export default Glow;
