import React from "react";
import styles from "../styles/Slider.module.css";
import SliderButton from "../components/SliderButton";
import useCarousel from "../hooks/carousel";
import { faCaretLeft, faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Carousel = ({ images }) => {
    const { slide, isPreviousEnable, isNextEnable, goToPreviousSlide, goToNextSlide } = useCarousel({ slidesNumber: images.length });
    return (
        <section className={styles.sliderContainer}>
            <SliderButton 
                name="previous" 
                icon={faCaretLeft}
                isActive={isPreviousEnable}
                onClick={goToPreviousSlide}
            /> 
            <div className={styles.slider}>
                <div className={styles.imagesContainer} style={{ left: `${-slide * 100}%` }}>
                    {images.map(image => <img key={image} className={styles.image} src={image} />)}
                </div>
            </div>
            <SliderButton 
                name="next" 
                icon={faCaretRight}
                isActive={isNextEnable} 
                onClick={goToNextSlide}
            /> 
        </section>
    );
};
export default Carousel;