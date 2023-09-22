import { Rubik } from 'next/font/google'
import { TypeAnimation } from 'react-type-animation'
import "./css/typewriter.css";

const rubik = Rubik({
    weight: "variable",
    style: ["italic", "normal"],
    display: "swap",
    subsets: ["latin"],
})

type TypewriterProps = {
    text: string;
    toHighlight: string;
    wait?: number;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, toHighlight, wait = 0 }) => {

    const CURSOR_CLASS_NAME = 'show-cursor';

    const formattedText = text.replace(".", "\n");

    return (
        <TypeAnimation
            className={`${rubik.className} tagline-label mold-a`}
            highlight={[toHighlight]}
            cursor={false}
            sequence={[
                wait,
                formattedText
            ]}
            speed={50}
        />
    );
};

export default Typewriter;