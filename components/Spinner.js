/*
 * Spinner derived from https://tobiasahlin.com/spinkit/.
 */
import styled from '@emotion/styled'
import React from 'react';


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
    margin: 100px auto 0;
    width: 100%;
    display: flex;
    justify-content: space-around;
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