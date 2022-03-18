import styled from '@emotion/styled'
import { css } from '@emotion/react';
/* 
    c1 - #CB2D38    - light-red
    c2 - #630A10    - dark-red
    c3 - #FCF0C8    - off-white
    c4 - #FACE7F    - beige-yellow

    c5 - #CB2D38    - light-red-hue-shade
    c6 - #B8B3B3    - light-gray
    c7 - #FFC357    - beige-yellow-hue-shade
    c8 - #40060A    - dark-red-hue-shade
 
 */

const breakpoints = {
    sm: 360,
    lg: 1110
};

const Frame = styled.div`
    position: fixed;
    display: flex;
    flex-direction: row;
    background-color: #630A10;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: 0;

    overflow-y: auto;

    ul{ list-style: none; };
`;

const Sidebar = styled.div`
    position: fixed;
    
    width: 15%;
    height: 100vh;
    top: 0;
    z-index: 99;
    margin-top: 0;
    margin-bottom: 0;
    
    background-color: rgba(64,6,10,.6);
    border-right: 10px groove #FFC357;
    box-shadow: 3px 3px 6px -3px rgba(0,0,0,0.7);
    ul { padding: 0; };

    @media(max-width: ${breakpoints.sm}px) {
    };
`;


const Sideaction = styled.button`
    width: 100%;
    margin-bottom: 10px;
    color: ${props => props.active ? '#FACE7F' : '#B8B3B3'};
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
    padding-bottom: 10px;
    height: 50px;
    background-color: rgba(0,0,0,0);
    border: 0;
    border-bottom: 1px solid #FACE7F;
    outline: none;

    &:hover {
        color: #f6a81b;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        font-size: 16px;
    };


    @media(max-width: ${breakpoints.sm}px) {
        font-size: 12px;
        padding-left: 2px;
    };
`;




const Page = styled.div`
    width: 85%;
    padding-left: 15%;
    height: 99%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;

    footer{
        position: fixed;
        bottom: 0;
        right: 0;
        margin-right: 10px;
        width: 25%;
        margin-bottom: 0;
        a{
            color: inherit;
            text-decoration: inherit;
        }
    }
    
    @media(max-width: ${breakpoints.sm}px) {
        text-align: center;
        footer{
            position: fixed;
            bottom: 0;
            left: 0;
            margin: 0;
            display: flex;
            margin-bottom: 0;
            div {margin-bottom: 50px; width: 60%; display: flex; flex-direction: column;};
            
        }
    };
`;

const ButtonDisplay = styled.div`
    justify-content: space-evenly;
    padding: 10px;
    width: 90%;
    height: 10%;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
    margin-bottom: 90px;
`;


const FormDisplay = styled.div`
    width: 80%;
    min-height: 65%;
    background-color: #FACE7F;
    padding: 10px;
    display: flex;
    border-radius: 5px;
    flex-direction: column;
    @media(max-width: ${breakpoints.sm}px) {
        width: 90%;
    };

    form {
        display: flex;
        align-items: center;
        justify-content: space-between;

        input{
            width: 85%;
            height: 50px;
            font-size: 20px;
            padding-left: 5px;
        };

        button{
            color: #FFC357;
            font-size: 20px;
            background-color: #CB2D38;
            border-radius: 10px;
            border: 3px solid #922028;
            box-shadow: 1px 1px 3px dimgray;
            height: 50px;
            width: 10%;

            &:hover {
                color: #CB2D38;
                background-color: #FFC357;
                border: 3px solid #CB2D38;
            };

        };
    };

    h1{
        text-align: left;
        font-size: 26px;
        
    };

    h2 {
        width: 100%;
        padding: 0;
        margin-right: 10px;
        margin-left: 0;
        margin-bottom: 13px;
        margin-top: 30px;
        text-transform: none;
        text-align: left;
        font-size: 20px;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        form {
            input{
                width: 80%;
            };
            button {
                width: 15%;
            }
        }
        h2{
            width: 100%;
            padding: 0;
            margin: 0;
            margin-top: 13px;
            margin-bottom: -5px;
        text-transform: none;
        font-size: 15px;

        };
    };


    @media(max-width: ${breakpoints.sm}px) {
        min-height: 100%;
        overflow-y: auto;
        
        form {
            input{
                height: 30px;
                width: 80%;
                font-size: 11px;
            };
            button {
                width: 20%;
                height: 30px;
                font-size: 10px;
            }
        }
        h2 {
            width: 100%;
            padding: 0;
            margin: 0;
            margin-top: 13px;
            margin-bottom: -5px;
            text-transform: none;
            font-size: 15px;
        };

    };
`;

const Action = styled.button`
    color: #FFC357;
    font-size: 20px;
    background-color: #CB2D38;
    border-radius: 10px;
    border: 3px solid #922028;
    box-shadow: 1px 1px 3px #40060A;
    height: 50px;
    &:hover {
        color: #CB2D38;
        padding: 10px;
        background-color: #FFC357;
        border: 3px solid #CB2D38;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        font-size: 16px;
    };


    @media(max-width: ${breakpoints.sm}px) {
        font-size: 12px;
    };

`;

const Title = styled.h1`
    color: #CB2D38;
    font-size: 54px;
    justify-content: center;
    text-decoration: underline;

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        font-size: 45px;
    };


    @media(max-width: ${breakpoints.sm}px) {
        font-size: 30px;
    };
`;

const Field = styled.div`
    background-color: white;
    box-shadow: 5px 5px  5px inset #B8B3B3;
    border: 1px solid #40060A;
    width: 100%;
    margin-top: 9px;
    right: 0;

    h3 {
            padding-left: 10px;
            font-weight: normal;
    };

    @media(max-width: ${breakpoints.sm}px) {
        width: 80%;
        align-self: flex-emd;
        max-height: 40px;
    }
`;


const SkillField = styled.div`
    background-color: white;
    box-shadow: 5px 5px  5px inset #B8B3B3;
    border: 1px solid #40060A;
    display: flex;
    width: 45%;
    margin-top: 9px;
    margin-bottom: 10%;

    h3 {
        padding-left: 10px;
        font-weight: normal;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {

    };

    @media(max-width: ${breakpoints.sm}px) {
        width: 45%;
        max-height: 40px;
    };

`;

const StyledSelect = styled.select`
    width: 100%;
    height: 100%;
    padding: .6rem;
    background-color: rgba(0,0,0,0);
    font-size: 20px;
    font-weight: normal;

    option {
        padding-left: 10px;
        font-size: 20px;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        font-size: 15px;
        option {
            font-size: 15px;
        };
    };

    @media(max-width: ${breakpoints.sm}px) {
        font-size: 12px;

            option {font-size: 12px;};
    };
`;
const PageFlex = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: flex-start;
    @media(max-width: ${breakpoints.sm}px) {
        flex-wrap: wrap;
        flex-direction: column;
    };
`;

const FlexColumn = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
    @media(max-width: ${breakpoints.sm}px) {
        height: 60%;
        margin: 0;
        align-items: center;
        flex-wrap: no-wrap;
        align-content: space-between;
        width: 100%;
        label {
            margin-top: 15px;
            font-size: 18px;
            text-decoration: underline;
        };
    };
`;



const FlexRow = styled.div`

    width: 50%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    h2{
        width: 100%;
        margin-top: 15px;
        margin-bottom: 5px;
        padding-left: 10px;
    };
    label {
        width:15%;
        margin-top: 15px;
        font-size: 24px;
        text-decoration: underline;
        text-align: right;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        margin-top: 0;
        width: 100%;
        margin-bottom: 0;
        label {
            margin-top: 15px;
            font-size: 20px;
        };
    };
    @media(max-width: ${breakpoints.sm}px) {
        margin-top: 0;
        width: 100%;
        margin-bottom: 0;
        label {
            margin-top: 15px;
            font-size: 18px;
        };
    };

`;

const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: flex-start;
    margin: 0;
    @media(max-width: ${breakpoints.sm}px) {
        flex-direction: column;
        flex-wrap: wrap;
    };
`;

const ItemContainer = styled.div`
    width: 99%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    margin: 0;
    padding: 0;
    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        margin-top: 0;
        width: 100%;
        margin-bottom: 0;
    };
    @media(max-width: ${breakpoints.sm}px) {
        margin-top: 0;
        width: 100%;
        margin-bottom: 0;
    };

`;

const AbilityScore = styled.div`
    width: 45%;
    margin-left: 5px;
    margin-right: 5px;
    background-color: #CB2D38;
    border-radius: 30px;
    display: flex;
    flex-direction: row-reverse;
    justify-content: center;
    align-items: center;

    margin-bottom: 15px;
    box-shadow: 0px 0px 6px 2px rgba(0,0,0,0.7);

    h1{
        margin-bottom: 15px;
        margin-top: 15px;
        padding: 5px;
        width: 20%;
        background-color: white;
        text-align: center; 
        font-size: 30px;
        font-weight: bold;
        border-radius: 3px;
    };
    select{
        margin-top: 0;
        margin-left: 5px;
        margin-right: 5px;
        width: 65%;
        padding: .6rem;
        background-color: rgba(F,F,F,1);
        border-radius: 3px;
        font-size: 20px;
        font-weight: normal;
        border-radius: 10px;

        option {
            padding-left: 10px;
            font-size: 20px;
        };
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        width: 46%;
        max-height: 60px;

        h1{
            width: 15%;
            font-size: 25px;
            margin-right: 10px;
        };
        select{
            width: 95%;
            font-size: 12px;
            margin-left: 5px;
            margin-right: 2px;
            margin-top: 5px;
            margin-bottom: 5px;
            option {
                padding-left: 10px;
                font-size: 18px;
            };
        };

    }

    @media(max-width: ${breakpoints.sm}px) {
        width: 45%;
        max-height: 39px;
        margin-top: 10px;
        
        border-radius: 0;
        flex-direction: row;
        align-items: center;

        h1{
            width: 10%;
            font-size: 13px;
            margin-right: 0;
            margin-left: 5px;
        };
        select{
            width: 90%;
            font-size: 10px;
            padding-left: 0;
            option {
                padding-left: 10px;
                font-size: 13px;
            };
        };
    };
`;


const StoryDisplay = styled.div`
    margin-top: 70px;
    margin-bottom: 0;
    padding-left: 10px;
    padding-right: 10px;
    margin-left: auto;
    margin-right: auto;
    width: 95%;
    height: 70%;
    background-color: white;
    overflow-y: auto;
    border-radius: 3px;

    textarea {
        width: 99%;
        height: 95%;
        text-transform: none;
        font-size: 18px;
        font-weight: normal;
        border: 0;
        resize: none;
        outline: none;
    };
`;

const Error = styled.div`
    width: 100%;
    max-width: 500px;
    margin-top: 30px;
    margin-left: auto;
    margin-right: auto;
    background-color: #40060A;
    border: 6px solid #CB2D38;
    border-radius: 30px;
    color: #CB2D38;
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-items: center;

    h1 {
        margin-left: 15px;
        margin-right: 15px;
        margin-top: 15px;
        text-align: center;
        font-size: 24px;
    };
    h3 {
        margin-top: 0;
        font-size: 18px;
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        width: 70%;
        h1 {
            text-align: center;
            font-size: 17px;
        };
        h3 {
            margin-top: 0;
            font-size: 12px;
        };
    };


    @media(max-width: ${breakpoints.sm}px) {
        width: 50%;
        margin-top: 5px;;
        margin-bottom: 0;
        text-align: center;
        h1 {
            margin-top: 8px;
            margin-left: 0;
            margin-right: 0;
            font-size: 10px;
        };
        h3 {
            margin-top: 0;
            order: 2;
            font-size: 8px;
        };

    };
`;

const FooterDiv = styled.div`
    width: 100%;
    height: 30%;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    text-align: center;
    justify-content: space-between;
    align-items: center;
    color: #FACE7F;
    
    h5 {
        font-size: 13px;
        margin-right: 20px;
        text-transform: none;
        &:first-of-type {text-transform: uppercase; margin-right: 0; font-size: 10px;}
        &:hover {
            &:first-of-type { color: #FACE7f; text-shadow: none;};
            color: #f6a81b;
            text-shadow: 0px 0px 3px rgba(255,255,255,.6), 0px 0px 2px rgba(255,255,255,.3);
    };
   

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {

    };

    @media(max-width: ${ breakpoints.sm }px) {
        width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        text-align: center;
        margin-left: 3px;
        color: #FACE7F;
        font-size: 10px;
        margin-right: 3px;
        margin-top: 3px;
        margin-bottom: 10px;

        h5 {
            width: 100%;
            font-size: 10px;
    };
`;


export {
    Frame, Sidebar, Sideaction, Page, FormDisplay, Action, Title, Field, SkillField,
    ButtonDisplay, StyledSelect, FlexColumn, FlexRow, AbilityScore, ItemContainer,
    StoryDisplay, Error, FooterDiv, PageFlex, ContentContainer
}
