import './OrderSummaryCard.css'
export const OrderSummaryCard = ({ product, increaseQuantity, decreaseQuantity, removeFromCart }) => {
    const discountAmount = product.price * (product.discount / 100) * product.quantity;

    const finalPrice = (product.price * product.quantity) - discountAmount;

    return (
        <div className="order-summary-card">


            <div className="product-image-container">
                <img
                    src={product.image || product.imgUrl || "/api/placeholder/100/100"}
                    alt={product.name}
                    className="product-image"
                />
            </div>

            <div className="product-info">
                <h3 className="product-name">{product.name}</h3>

                {product.color && <p className="product-color">{product.color}</p>}

                {product.discount > 0 && (
                    <p className="product-discount">Скидка {product.discount}%</p>
                )}
            </div>

            <div className="price-info">
                <div className="final-price">${finalPrice.toFixed(2)}</div>

                {product.discount > 0 && (
                    <div className="original-price">${(product.price * product.quantity).toFixed(2)}</div>
                )}

            </div>




            <div className="quantity-controls">
                <button
                    className="decrease-button"
                    disabled={product.quantity <= 1}
                    onClick={() => decreaseQuantity(product.id)}
                >-
                </button>
                <span className="quantity-value">{product.quantity}</span>
                <button
                    className="increase-button"
                    onClick={() => increaseQuantity(product.id)}
                >+
                </button>
            </div>

            <button className='remove-product-button'
                    onClick={()=> removeFromCart(product.id)}>
                x
            </button>
        </div>
    );
};