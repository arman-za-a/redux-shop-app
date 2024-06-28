import useBoolean from "./boolean";
import { useEffect } from "react";
const useModal = () => {
    const { value: isModalVisible, setTrue: showModal, setFalse: hideModal } = useBoolean();
    useEffect(() => {
        setTimeout(showModal, 500);
        setTimeout(hideModal, 2000);
    }, []);
    return { isModalVisible, showModal, hideModal };
};
const useOffcanvas = () => {
    const { value: isOffcanvasVisible, setTrue: showOffcanvas, setFalse: hideOffcanvas } = useBoolean();
    return { isOffcanvasVisible, showOffcanvas, hideOffcanvas };
};
const useToolip = () => {
    const { value: isToolipVisible, setTrue: showToolip, setFalse: hideToolip } = useBoolean();
    return { isToolipVisible, showToolip, hideToolip };
};
const useAccordion = () => {
    const { value: isAccordionVisible, toggle: toggleAccordion } = useBoolean();
    return { isAccordionVisible, toggleAccordion };
};
export { useModal, useOffcanvas, useToolip, useAccordion };