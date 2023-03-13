import { SvgIconProps } from './iconsType';

export const TimeIcon = ({ size = 25, color = 'currentColor' }: SvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
    >
      <rect height="128" width="128" fill="#B39952" fillOpacity=".2" rx="64" />
      <path
        d="M97.333 64C97.333 82.4 82.4 97.333 64 97.333S30.667 82.4 30.667 64 45.6 30.667 64 30.667 97.333 45.6 97.333 64z"
        stroke="#B39952"
        strokeLinecap="round"
        strokeWidth="3"
      />
      <path
        d="M76.367 74.6l-10.334-6.167c-1.8-1.066-3.266-3.633-3.266-5.733V49.033"
        stroke="#B39952"
        strokeLinecap="round"
        strokeWidth="3"
      />
    </svg>
  );
};
