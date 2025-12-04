import styles from "./Button.module.css";

interface Props {
    children: string;
    color?: string;
    // color?: "primary" | "secondary" | "danger";
    onClick: () => void;
}

// const Button = ({ children, onClick, color = "primary" }: Props) => {
const Button = ({ children, onClick, color }: Props) => {
    return (
        <div className="p-5 space-x-4">
            <button className="btn btn-primary" onClick={onClick}>
                {children}
            </button>

            <button className={"btn btn-" + color} onClick={onClick}>
                {children}
            </button>

            <button
                className={[styles.btn, styles["btn-" + color]].join(" ")}
                onClick={onClick}
            >
                {children}
            </button>
        </div>
    );
};

export default Button;
