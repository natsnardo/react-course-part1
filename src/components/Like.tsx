import { FaHeart, FaRegHeart } from "react-icons/fa6";
import { useState } from "react";

interface Props {
    onClick: () => void;
}

const Like = ({ onClick }: Props) => {
    const [liked, setLiked] = useState(true);

    const toggle = () => {
        setLiked(!liked);
        onClick();
    };

    if (liked)
        return (
            <div className="flex flex-col items-center">
                <FaHeart
                    size={100}
                    color="#ff6b81"
                    style={{ cursor: "pointer" }}
                    onClick={toggle}
                />
                <p style={{ color: "red" }}>Thanks for the heart!</p>
            </div>
        );
    return (
        <div className="flex flex-col items-center">
            <FaRegHeart
                size={100}
                color="black"
                onClick={toggle}
                style={{ cursor: "pointer" }}
            />
        </div>
    );
};

export default Like;
