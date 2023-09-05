import { useState } from "react";
import Image1 from '../assets/image-product-1.jpg';
import Image2 from '../assets/image-product-2.jpg';
import Image3 from '../assets/image-product-3.jpg';
import Image4 from '../assets/image-product-4.jpg';
import Thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import Thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import Thumbnail4 from '../assets/image-product-4-thumbnail.jpg';
import Cart from '../assets/icon-cart.svg';
import Plus from '../assets/icon-plus.svg';
import Minus from '../assets/icon-minus.svg';


export const Display = () => {
    const [mainImage, setMainImage] = useState(Image1);
    const [amountToAdd, setAmountToAdd] = useState(0);

    const thumbnailClick = (image) => {
        setMainImage(image)
    }

    const handlePlus = () => {
        setAmountToAdd(amountToAdd + 1);
    }
    const handleMinus = () => {
        if(amountToAdd != 0) setAmountToAdd(amountToAdd - 1);
    }

    return (
        <div style={{marginTop: '90px', marginLeft: '165px', marginRight: '165px', display: 'flex', gap: '125px'}} aria-label="main">
            <div className="photos" style={{display: 'flex', flexDirection: 'column', gap: '32px'}}>
                <div className="image-box" style={{height: '445px'}}>
                    <img className="main-image" style={{width: '445px', borderRadius: '20px'}} src={mainImage} alt="" />
                </div>
                <div className="thumbnail-box" style={{display: 'flex', justifyContent: 'space-between'}}>
                    <img onClick={() => {thumbnailClick(Image1)}} className="thumbnail" style={{width: "92px", height: "92px", borderRadius: '10px'}} src={Thumbnail1} alt="thumbnail 1" />
                    <img onClick={() => {thumbnailClick(Image2)}} className="thumbnail" style={{width: "92px", height: "92px", borderRadius: '10px'}} src={Thumbnail2} alt="thumbnail 2" />
                    <img onClick={() => {thumbnailClick(Image3)}} className="thumbnail" style={{width: "92px", height: "92px", borderRadius: '10px'}} src={Thumbnail3} alt="thumbnail 3" />
                    <img onClick={() => {thumbnailClick(Image4)}} className="thumbnail" style={{width: "92px", height: "92px", borderRadius: '10px'}} src={Thumbnail4} alt="thumbnail 4" />
                </div>
            </div>
            <div className="description">
                <h3 className="company-name">SNEAKER COMPANY</h3>
                <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                <p className="description-text">
                    These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
                </p>
                <div>
                    <div>
                        <h2 className="price">$125.00</h2>
                        <p className="discount">50%</p>
                    </div>
                    <p className="old-price">$250</p>
                </div>
                <div>
                    <div>
                        <div onClick={handlePlus}>
                            <img src={Plus} alt="Plus" />
                        </div>
                        <p>{amountToAdd}</p>
                        <div onClick={handleMinus}>
                            <img src={Minus} alt="Minus" />
                        </div>
                    </div>
                    <button>
                        <img src={Cart} alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
        </div>
    )
}