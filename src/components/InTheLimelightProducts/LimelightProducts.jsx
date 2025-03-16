import React, {useEffect, useState} from 'react';
import ProductCard from "../ProductCard/ProductCard.jsx";
import Container from "../Container/Container.jsx";
import Title from "../Title/Title.jsx";
import './LimelightProducts.css'

const LimelightProducts = () => {
    const [limelightProducts, setLimelightProducts] = useState([])
    const [isLimelightProductsLoading, setIsLimelightProductsLoading] = useState(true);

    useEffect(() => {
        const getLimelightProducts = async () => {
            try {
                await new Promise((resolve) => setTimeout(resolve, 3000));

                setIsLimelightProductsLoading(true)
                const response = await fetch('/limelight-products.json');
                const data = await response.json();
                console.log(data);

                if (data.products) {
                    setLimelightProducts(data.products)
                }
            } catch (error) {
                console.log(error)
            } finally {
                setIsLimelightProductsLoading(false);
            }
        }
        (async () => await getLimelightProducts())()
    }, [])

    return (
        <Container>
            <Title text={'In The Limelight'} color={'purple'}/>
            <div className={'limelight-products-wrapper'}>
                <div className={`limelight-product-loading__container ${isLimelightProductsLoading ? '' : 'hidden'}`}>
                    <p className={'limelight-products-loading'}>Loading...</p>
                </div>

                <div className={`limelight-product-cards-container ${isLimelightProductsLoading ? 'hidden' : ''}`}>
                    {limelightProducts.map(({id, description, image, name, price}) => (
                        <ProductCard
                            key={id}
                            id={id}
                            description={description}
                            imgUrl={image}
                            name={name}
                            price={price}
                        />
                    ))}
                </div>
            </div>
        </Container>
    )
}

export default LimelightProducts;