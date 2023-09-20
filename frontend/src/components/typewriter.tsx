import { Laila } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import "./css/typewriter.css";

const laila = Laila({
    subsets: ['latin'],
    weight: '600',
    display: 'swap',
    variable: '--laila-font',
  })

const Typewriter: React.FC = () => {

    const CURSOR_CLASS_NAME = 'show-cursor';

    return (
        <TypeAnimation
        className={`${laila.className} tagline-label absolute bottom-1 left-1 mold-a`}
        cursor={false}
        sequence={[
          4000,
          (el) => {
            if (el)
              el.classList.add(CURSOR_CLASS_NAME)
          },
          "Obsessive problem solver.",
          2000,
          "Dedicated to optimization.",
          2000,
          "Driven by results.",
          2000,
          "",
          (el) => {
            if (el)
              el.classList.remove(CURSOR_CLASS_NAME)
          },
        ]}
        speed={50}
        repeat={Infinity}
      />
    );
};

export default Typewriter;