interface Props {
    children: string;
    color?: string;
    // color?: "primary" | "secondary" | "danger";
    onClick: () => void;
}

// const Button = ({ children, onClick, color = "primary" }: Props) => {
const Button = ({ children, onClick, color }: Props) => {
    return (
        <>
            <button className="btn btn-primary" onClick={onClick}>
                {children}
            </button>

            <button className={"btn btn-" + color} onClick={onClick}>
                {children}
            </button>
        </>
    );
};

export default Button;
