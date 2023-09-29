import { TypeAnimation } from 'react-type-animation'
import "@/components/css/typewriter.css";

type TypewriterProps = {
    text: string;
    toHighlight: string;
    wait?: number;
    classname?: string;
};

const Typewriter: React.FC<TypewriterProps> = ({ text, toHighlight, wait = 0, classname = "tagline-label" }) => {

    const formattedText = text.replace(".", "\n");

    const formattedText = text.replace(".", "\n");

    return (
        <TypeAnimation
            className={`${classname} mold-a`}
            highlight={[toHighlight]}
            cursor={false}
            sequence={[
                wait,
                formattedText
            ]}
            speed={60}
        />
    );
};

export default Typewriter;