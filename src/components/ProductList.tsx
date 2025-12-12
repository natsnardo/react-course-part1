import React, { useEffect, useState } from "react";

const ProductList = ({ category }: { category: string }) => {
    const [products, setProducts] = useState<string[]>([]);

    useEffect(() => {
        console.log("Fetching Products in", category);
        setProducts(["Clothing", "Household"]);
    }, [category]);

    return <h5>ProductList</h5>;
};

export default ProductList;
