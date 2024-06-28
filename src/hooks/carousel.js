import { useEffect, useState, useRef } from "react";
import { getPreviousSlide, getNextSlide } from "../helpers/carousel";
const useCarousel = ({ initialSlide = 0, slidesNumber, interval = 3000, auto = true }) => {
    const [slide, setSlide] = useState(initialSlide);
    const intervalRef = useRef(0); 
    useEffect(() => {
        slideAuto();
        return () => clearInterval(intervalRef.current);
    }, []);
    useEffect(() => {
        if (slide === slidesNumber - 1) {
            clearInterval(intervalRef.current);
        };
    }, [slide]);
    const goToPreviousSlide = () => {
        setSlide(getPreviousSlide);
        slideAuto();
    };
    const goToNextSlide = () => {
        setSlide(getNextSlide);
        slideAuto();
    };
    const slideAuto = () => {
        if (auto) {
            clearInterval(intervalRef.current);
            intervalRef.current = setInterval(() => setSlide(getNextSlide), interval);
        };
    };
    const isPreviousEnable = slide > 0;
    const isNextEnable = slide < slidesNumber - 1;
    return { slide, isPreviousEnable, isNextEnable, goToPreviousSlide, goToNextSlide };
};
export default useCarousel;