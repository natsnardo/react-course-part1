import { useState } from "react";

interface Props {
    children: string;
    maxChars?: number;
}

const ExpandableText = ({ children, maxChars = 100 }: Props) => {
    const [isExpanded, setExpanded] = useState(false);

    if (children.length <= maxChars) return <p>{children}</p>;

    const text = isExpanded ? children : children.substring(0, maxChars);

    return (
        <div className="p-5 border border-gray-500 rounded-xl bg-gray-200">
            {text} ...{" "}
            <button
                className="p-0.5 border border-green-500 rounded bg-green-300 text-white"
                onClick={() => setExpanded(!isExpanded)}
            >
                {isExpanded ? "Less" : "More"}
            </button>
        </div>
    );
};

export default ExpandableText;
