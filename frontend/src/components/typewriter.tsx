import { Rubik } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import "./css/typewriter.css";

const rubik = Rubik({
    weight: "variable",
    style: ["italic", "normal"],
    display: "swap",
    subsets: ["latin"],
})

const Typewriter: React.FC = () => {

    const CURSOR_CLASS_NAME = 'show-cursor';

    return (
        <TypeAnimation
            className={`${rubik.className} tagline-label absolute bottom-1 md:bottom-6 left-2 md:left-3 mold-a`}
            highlight={["problem solver", "optimization", "results"]}
            cursor={false}
            sequence={[
                4000,
                (el: HTMLElement) => {
                    if (el)
                        el.classList.add(CURSOR_CLASS_NAME)
                },
                "Obsessive problem solver.",
                2000,
                "Dedicated to optimization.",
                2000,
                "Driven by results.",
                2000,
                " ",
                (el: HTMLElement) => {
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