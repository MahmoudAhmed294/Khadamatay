import { SvgIconProps } from './iconsType';

export const CostIcon = ({ size = 25, color = 'currentColor' }: SvgIconProps) => {
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
        d='M84.133 69.167a6.695 6.695 0 00-2 5.433c.3 3.6 3.6 6.233 7.2 6.233h6.334V84.8c0 6.9-5.634 12.533-12.534 12.533H44.867c-6.9 0-12.534-5.633-12.534-12.533V62.367c0-6.9 5.634-12.534 12.534-12.534h38.266c6.9 0 12.534 5.634 12.534 12.534v4.8h-6.734c-1.866 0-3.566.733-4.8 2z'
        stroke='#B39952'
        strokeLinecap='round'
        strokeWidth='3'
      />
      <path
        d='M32.333 65.367V50.133c0-3.966 2.434-7.5 6.134-8.9l26.466-10c4.134-1.566 8.567 1.5 8.567 5.934v12.666M99.196 70.567v6.867c0 1.833-1.467 3.333-3.333 3.4h-6.534c-3.6 0-6.9-2.633-7.2-6.233-.2-2.1.6-4.067 2-5.434 1.234-1.266 2.934-2 4.8-2h6.934c1.866.067 3.333 1.567 3.333 3.4zM47.333 64h23.334'
        stroke='#B39952'
        strokeLinecap='round'
        strokeWidth='3'
      />
    </svg>
  );
};
