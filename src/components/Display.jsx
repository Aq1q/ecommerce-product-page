import { useContext, useState, useEffect } from "react";
import Image1 from '../assets/image-product-1.jpg';
import Image2 from '../assets/image-product-2.jpg';
import Image3 from '../assets/image-product-3.jpg';
import Image4 from '../assets/image-product-4.jpg';
import Thumbnail1 from '../assets/image-product-1-thumbnail.jpg';
import Thumbnail2 from '../assets/image-product-2-thumbnail.jpg';
import Thumbnail3 from '../assets/image-product-3-thumbnail.jpg';
import Thumbnail4 from '../assets/image-product-4-thumbnail.jpg';
import Cart from '../assets/icon-cart-white.svg';
import Plus from '../assets/icon-plus.svg';
import Minus from '../assets/icon-minus.svg';
import Close from '../assets/icon-close.svg';
import Next from '../assets/icon-Next.svg';
import Previous from '../assets/icon-Previous.svg';
import '../styles/main.scss';
import { CartContext } from "../App";

export const Display = () => {
    const [mainImage, setMainImage] = useState(Image1);
    const [lightboxImage, setLightboxImage] = useState(Image1);
    const [amountToAdd, setAmountToAdd] = useState(0);
    const [imgNumber, setImgNumber] = useState(0);
    const [showLightbox, setShowLightbox] = useState(false);
    const { addToCart } = useContext(CartContext);

    const thumbnailClick = (image) => {
        setMainImage(image)
    }

    const lbThumbnailClick = (image) => {
        setLightboxImage(image)
    }

    const handlePlus = () => {
        setAmountToAdd(amountToAdd + 1);
    }
    const handleMinus = () => {
        if(amountToAdd != 0) setAmountToAdd(amountToAdd - 1);
    }
    const updateCart = () => {
        addToCart(amountToAdd);
    }

    useEffect(() => {
        // Accessing scss variable "lightbox-display"
        // and changing the same according to the state of "darkTheme"
        const root = document.documentElement;
        root?.style.setProperty(
            "--lightbox-display",
            showLightbox ? "flex" : "none"
        );
    }, [showLightbox]);
   

    const changeThumbnail = (imgValue) => {
        let images = [Image1, Image2, Image3, Image4];
        if (imgNumber + imgValue < 0) {
            setImgNumber(3);
        } else if (imgNumber + imgValue > 3) {
            setImgNumber(0);
        } else {
            setImgNumber(imgNumber + imgValue)
        }
        setLightboxImage(images[imgNumber])
    }

    return (
        <div className="main" aria-label="main">
            <div className="photos">
                <div className="image-box">
                    <img className="main-image" onClick={() => {setShowLightbox(!showLightbox)}} src={mainImage} alt="" />
                </div>
                <div className="thumbnail-box">
                    <div className="thumbnail">
                        <img className="thumb-img" onClick={() => {thumbnailClick(Image1)}} src={Thumbnail1} alt="thumbnail 1" />
                    </div>
                    <div className="thumbnail">
                        <img className="thumb-img" onClick={() => {thumbnailClick(Image2)}} src={Thumbnail2} alt="thumbnail 2" />
                    </div>
                    <div className="thumbnail">
                        <img className="thumb-img" onClick={() => {thumbnailClick(Image3)}} src={Thumbnail3} alt="thumbnail 3" />
                    </div>
                    <div className="thumbnail">
                        <img className="thumb-img" onClick={() => {thumbnailClick(Image4)}} src={Thumbnail4} alt="thumbnail 4" />
                    </div>
                </div>
            </div>
            <div className="description">
                <h3 className="company-name">SNEAKER COMPANY</h3>
                <h1 className="product-name">Fall Limited Edition Sneakers</h1>
                <p className="description-text">
                    These low-profile sneakers are your perfect casual wear companion. Feature a durable rubber outer sole, they&apos;ll withstand everything the weather can offer.
                </p>
                <div className="price-box">
                    <div className="discount-box">
                        <h2 className="price">$125.00</h2>
                        <p className="discount">50%</p>
                    </div>
                    <p className="old-price">$250</p>
                </div>
                <div className="add">
                    <div className="select">
                        <div className="minus" onClick={handleMinus}>
                            <img className="minus-img" src={Minus} alt="Minus" />
                        </div>
                        <p>{amountToAdd}</p>
                        <div className="plus" onClick={handlePlus}>
                            <img className="plus-img" src={Plus} alt="Plus" />
                        </div>
                    </div>
                    <button onClick={updateCart} className="add-button">
                        <img src={Cart} alt="" />
                        Add to cart
                    </button>
                </div>
            </div>
            <div className="lightbox">
                <div className="lightbox-container">
                    <div className="close-container" onClick={() => {setShowLightbox(!showLightbox)}}>
                        <img className="close" onClick={() => {setShowLightbox(!showLightbox)}} src={Close} alt="" />
                    </div>
                    <div className="main-lightbox-img">
                        <img className="lightbox-img" src={lightboxImage} alt="" />
                    </div>
                    <div className="lightbox-thumbnails">
                        <div className="thumbnail">
                            <img className="thumb-img" onClick={() => {lbThumbnailClick(Image1)}} src={Thumbnail1} alt="thumbnail 1" />
                        </div>
                        <div className="thumbnail">
                            <img className="thumb-img" onClick={() => {lbThumbnailClick(Image2)}} src={Thumbnail2} alt="thumbnail 2" />
                        </div>
                        <div className="thumbnail">
                            <img className="thumb-img" onClick={() => {lbThumbnailClick(Image3)}} src={Thumbnail3} alt="thumbnail 3" />
                        </div>
                        <div className="thumbnail">
                            <img className="thumb-img" onClick={() => {lbThumbnailClick(Image4)}} src={Thumbnail4} alt="thumbnail 4" />
                        </div>
                    </div>
                </div>
                <div className="switch-buttons-container">
                    <div className="change-btn chg-left">
                        <img src={Previous} className="" alt="" onClick={() => {changeThumbnail(-1)}} />
                    </div>
                    <div className="change-btn chg-right">
                        <img src={Next} alt="" className="" onClick={() => {changeThumbnail(1)}} />
                    </div>
                </div>
            </div>
        </div>
    )
}