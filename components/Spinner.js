/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */
import styled from '@emotion/styled'
import React from 'react';

const breakpoints = {
    sm: 360,
    lg: 1110
};

const Bounce1 = styled.div`

    -webkit-animation: sk-Bouncedelay1 1.4s infinite ease-in-out both;
    animation: sk-Bouncedelay1 1.4s infinite ease-in-out both;
    
    -webkit-animation-delay: -0.32s;
    animation-delay: -0.32s;
    
    
    @-webkit-keyframes sk-Bouncedelay1 {
      0%, 80%, 100% { -webkit-transform: scale(0) }
      40% { -webkit-transform: scale(1.0) }
    }
    
    @keyframes sk-Bouncedelay1 {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    };

`;

const Bounce2 = styled.div`


    -webkit-animation: sk-Bouncedelay2 1.4s infinite ease-in-out both;
    animation: sk-Bouncedelay2 1.4s infinite ease-in-out both;

    -webkit-animation-delay: -0.16s;
    animation-delay: -0.16s;

    @-webkit-keyframes sk-Bouncedelay2 {
      0%, 80%, 100% { -webkit-transform: scale(0) }
      40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-Bouncedelay2 {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    };


`;

const Bounce3 = styled.div`
    -webkit-animation: sk-Bouncedelay3 1.4s infinite ease-in-out both;
    animation: sk-Bouncedelay3 1.4s infinite ease-in-out both;

    @-webkit-keyframes sk-Bouncedelay3 {
      0%, 80%, 100% { -webkit-transform: scale(0) }
      40% { -webkit-transform: scale(1.0) }
    }

    @keyframes sk-Bouncedelay3 {
      0%, 80%, 100% {
        -webkit-transform: scale(0);
        transform: scale(0);
      } 40% {
        -webkit-transform: scale(1.0);
        transform: scale(1.0);
      }
    };



`;

const SpinContainer = styled.div`
    justify-content: space-between;
    width: 50%;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    text-align: center;
    > div {
        width: 60px;
        height: 60px;
        background: radial-gradient(#CB2D38 36%, #FFC357);
        box-shadow: 0 0 9px #40060A;
        border: 3px groove #FFC357;
        margin: 10px;

        border-radius: 100%;
        display: inline-block;


    };

    @media(max-width: ${breakpoints.sm}px) {
        > div {
            width: 10px;
            height: 10px;
            border-radius: 100%;
            display: inline-block;
        };
    };
`;

function Spinner({ size, color }) {

    size = size || 12;
    color = color || '#FF83C3';

    return (
        <SpinContainer >
            <Bounce1 />
            <Bounce2 />
            <Bounce3 />
        </SpinContainer>
    );
}

export default Spinner;