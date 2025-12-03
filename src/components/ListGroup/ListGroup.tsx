import { useState } from "react";
// import "./ListGroup.css";
// import styles from "./ListGroup.module.css";
import styled from "styled-components";
import { AiFillChrome } from "react-icons/ai";

const List = styled.ul`
    list-style: none;
    padding: 0;
`;

interface ListItemPRrops {
    active: boolean;
}

const ListItem = styled.li<ListItemPRrops>`
    border-radius: 5px;
    border: 1px solid teal;
    cursor: pointer;
    margin: 20px;
    padding: 10px;
    background: ${(props) => (props.active ? "lightblue" : "lightgrey")};
`;

interface Props {
    items: string[];
    heading: string;
    onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <>
            <h1 className="p-5 font-bold flex items-center justify-center text-2xl text-blue-500">
                <AiFillChrome className="mr-2" />
                {heading}
            </h1>
            {items.length === 0 && <p>No item found</p>}
            {/* <ul className="list-group"> */}
            {/* <ul className={[styles.listGroup, styles.container].join(" ")}> */}
            {/* <ul className="list-group" style={{ backgroundColor: "lightblue" }}> */}
            <ul className="list-none p-5">
                {items.map((item, index) => (
                    <li
                        // className={
                        //     selectedIndex === index
                        //         ? "list-group-item active"
                        //         : "list-group-item"
                        // }
                        className={
                            selectedIndex === index
                                ? "p-3 m-2 border rounded cursor-pointer bg-blue-500 text-white"
                                : "p-3 m-2 border rounded cursor-pointer hover:bg-cyan-100"
                        }
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </li>
                ))}
            </ul>

            <List>
                {items.map((item, index) => (
                    <ListItem
                        active={selectedIndex === index}
                        key={item}
                        onClick={() => {
                            setSelectedIndex(index);
                            onSelectItem(item);
                        }}
                    >
                        {item}
                    </ListItem>
                ))}
            </List>
        </>
    );
}

export default ListGroup;
