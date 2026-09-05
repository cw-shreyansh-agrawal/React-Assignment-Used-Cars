import { useState } from "react";

export const ProductCard = ({product}) => {

    const [currentImage, setCurrentImage] = useState(0);

    const images = product.stockImages || [];

    const nextImage = () => {
        setCurrentImage((current) =>
            current === images.length - 1 ? 0 : current + 1
        );
    };

    const previousImage = () => {
        setCurrentImage((current) =>
            current === 0 ? images.length - 1 : current - 1
        );
    };

    return (
        <div className="product-card">

            <div className="image-container">
                <img
                    src={images[currentImage]}
                    alt={product.carName}
                    className="product-card-image"
                />

                {images.length > 1 && (
                    <>
                        <button
                            className="carousel-button previous"
                            onClick={previousImage}
                        >
                            ‹
                        </button>

                        <button
                            className="carousel-button next"
                            onClick={nextImage}
                        >
                            ›
                        </button>
                    </>
                )}

            </div>

            <div className="product-info">
                <h2>{product.carName}</h2>
                <p>
                    {product.km} km | {product.fuel} | {product.cityName}
                </p>
                <h2>₹ {product.formattedPrice}</h2>
                <button>Get Seller Details</button>
            </div>
            
        </div>
    )
}
