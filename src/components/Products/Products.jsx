import React, {useEffect, useState} from 'react';
import Container from "../Container/Container.jsx";
import Title from "../Title/Title.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import './Products.css'

const Products = () => {

    const [products, setProducts] = useState([]);
    const [womanProducts, setWomanProducts] = useState([]);

    const [isManLoading, setIsManLoading] = useState(true);
    const [isWomanLoading, setIsWomanLoading] = useState(true);
    console.log(products)

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsLoading(false)
    //     }, 3000)
    //     return () => clearTimeout(timer);
    //
    // }, [])

    useEffect(() => {
        const getManProducts = async () => {

            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));

                setIsManLoading(true)
                const response = await fetch('/man-products.json');
                const data = await response.json();
                console.log(data);

                if (data.products) {
                    setProducts(data.products)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsManLoading(false);
            }
        }
        (async () => await getManProducts())()
    }, [])

    useEffect(() => {
        const getWomenProducts = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));
                setIsWomanLoading(true)
                const response = await fetch('/women-products.json');
                const data = await response.json();

                if (data.products) {
                    setWomanProducts(data.products)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsWomanLoading(false)
            }
        }
        (async () => await getWomenProducts())()
    }, [])

    return (
        <Container>
            <Title text={'Categories For Men'} color={'purple'} />
            {/*{products.map((p) => {*/}
            {/*    return (*/}
            {/*        <ProductCard id={p.id} desciption={p.description} imgUrl={p.image} name={p.name}/>*/}
            {/*    )*/}
            {/*})}*/}

            <div className={'man-products-wrapper'}>
                <div className={`product-loading__container ${isManLoading ? '' : 'hidden'}`}>
                    <p className={'products-loading'}>Loading...</p>
                </div>

                <div className={`man-product-cards-container ${isManLoading ? 'hidden' : ''}`}>
                    {products.map(({ id, description, image, name }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            description={description}
                            imgUrl={image}
                            name={name}
                        />
                    ))}
                </div>
            </div>

            <Title text={'Categories For Women'} color={'purple'} />
            <div className={'woman-products-wrapper'}>
                <div className={`product-loading__container ${isWomanLoading ? '' : 'hidden'}`}>
                    <p className={'products-loading'}>Loading...</p>
                </div>

                <div className={`woman-product-cards-container ${isWomanLoading ? 'hidden' : ''}`}>
                    {womanProducts.map(({ id, description, image, name }) => (
                        <ProductCard
                            key={id}
                            id={id}
                            description={description}
                            imgUrl={image}
                            name={name}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
};

export default Products;



