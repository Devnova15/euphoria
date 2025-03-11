import React, {useEffect, useState} from 'react';
import Container from "../Container/Container.jsx";
import Title from "../Title/Title.jsx";
import ProductCard from "../ProductCard/ProductCard.jsx";
import './Products.css'

const Products = () => {
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(false)
    console.log(products)
    useEffect(() => {

        const getProducts = async () => {

            try {
                setIsLoading(true)
                const response = await fetch('/products.json')
                const data = await response.json()
                console.log(data)

                if (data.products) {
                    setProducts(data.products)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        }
        (async () => await getProducts())()
    }, [])

    return (
        <Container>
            <Title text={'Categories For Men'} color={'purple'}/>
            {/*{products.map((p) => {*/}
            {/*    return (*/}
            {/*        <ProductCard id={p.id} desciption={p.description} imgUrl={p.image} name={p.name}/>*/}
            {/*    )*/}
            {/*})}*/}
            <div className={'products-wrapper'}>
                {isLoading && <p>Loading...</p>}
                {products.map(({id, description, image, name}) =>
                    <ProductCard id={id} desciption={description} imgUrl={image} name={name}/>)}
            </div>
        </Container>
    )
};

export default Products;



