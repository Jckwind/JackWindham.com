import Image from 'next/image';
import StarSVG from '../../public/star.svg';

export type StarProps = {
    x: number,
    y: number,
    size: number,
    duration: number
};

const Star = ({ x, y, size, duration }: StarProps) => (
  <div
    className="absolute"
    style={{
      position: 'absolute',
      left: `${x}%`,
      top: `${y}%`,
      width: `${size}em`,
      height: `${size}em`,
      borderRadius: '50%',
      background: '#efd5bc',
      filter: 'blur(0.5px)',
      animation: `twinkle ${duration}s infinite`,
    }}
  >
  </div>
);

export default Star;
