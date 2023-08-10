import React from 'react';
import styled from 'styled-components';
import Bamboo from '../../svg/Bamboo';

const VectorContainer = styled.div`
    position: absolute;
    top: 0.5rem;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    height: 95%;
    overflow: hidden;

    svg{
        width: 100%;
        height: 100%;

        @media (max-width: 30em){
            width: 80%;
            height: 90%;
        }
    }

    @media (max-width: 48em){
        left: 6rem;
    }

    @media (max-width: 30em){
        left: 1.5rem;
    }
`

const DrawSvg = () => {
    return(
        <VectorContainer>
            <Bamboo />
        </VectorContainer>
    )
}

export default DrawSvg;