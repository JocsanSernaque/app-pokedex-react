import React from "react";
import { Icon } from '@chakra-ui/react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';


const Pagination = (props) => {
    const { onLeftClick, onRightClick, page, totalPage } = props;
    return (
        <div className="Pagination">
            <button onClick={ onLeftClick } >   
            <Icon as={FaArrowLeft} w={20} h={20} color='#fff' />                 
                            
            </button>
            <div>
                Pág. { page } de { totalPage }
            </div>
            <button onClick={ onRightClick }>
            <Icon as={FaArrowRight} w={20} h={20} color='#fff' /> 
            </button>
        </div>
    )
}
export default Pagination;

