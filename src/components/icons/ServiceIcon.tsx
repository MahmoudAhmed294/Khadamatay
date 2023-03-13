import { SvgIconProps } from './iconsType';

export const ServiceIcon = ({ size = 25, color = 'currentColor' }: SvgIconProps) => {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      height={size}
      width={size}
      viewBox={`0 0 ${size} ${size}`}
      fill={color}
    >
      <rect height='128' width='128' fill='#B39952' fillOpacity='.2' rx='64' />
      <path
        d='M75.3 41.367l4.7 9.4c.633 1.3 2.333 2.533 3.767 2.8l8.5 1.4c5.433.9 6.7 4.833 2.8 8.766l-6.634 6.634c-1.1 1.1-1.733 3.266-1.366 4.833l1.9 8.2c1.5 6.467-1.967 9-7.667 5.6l-7.967-4.733c-1.433-.867-3.833-.867-5.266 0L60.1 89c-5.7 3.367-9.167.867-7.667-5.6l1.9-8.2c.367-1.533-.266-3.7-1.366-4.833l-6.634-6.634c-3.9-3.9-2.633-7.833 2.8-8.766l8.5-1.4c1.434-.234 3.134-1.5 3.767-2.8l4.7-9.4c2.5-5.1 6.633-5.1 9.2 0zM50.667 40.667h-20M40.667 87.333h-10M34 64h-3.333'
        stroke='#B39952'
        strokeLinecap='round'
        strokeWidth='3'
      />
    </svg>
  );
};
