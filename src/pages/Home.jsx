import React, {useContext} from "react";

import { ProductContext } from "../contexts/ProductContext";

import Product from "../components/Product";

import Banner from "../components/Banner";

const Home = () => {
    const { product } = useContext(ProductContext);

  // Verificacion si el product es undefined o null antes de llamar al filtro (filter)
    const filteredProducts = product ? product.filter((item) => {
        return (
            item.category === "men's clothing" || item.category === "electronics"
        );
        })
    : [];

    return <div>
        <Banner />
        <section className="py-16">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-[30px]
                max-w-sm mx-auto md:max-w-none md:mx-0">
                    {filteredProducts.map((product) => {
                        return <Product product={product} key={product.id}/>
                    })}
                </div>
            </div>
        </section>
    </div>;
};


export default Home;
