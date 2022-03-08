import styled from '@emotion/styled'

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
    sm: 720,
    lg: 1024
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

    overflow-y: auto;
    ul { list-style: none; };

`;

const Sidebar = styled.div`
    width: 15%;
    height: 100%;
    background-color: rgba(64,6,10,.6);
    box-shadow: 3px 3px 6px -3px rgba(0,0,0,0.7);
    ul { padding: 0; };

    Link:active {
        color: #FFC357;
    };
`;

const Sideaction = styled.button`
    width: 100%;
    margin-bottom: 10px;
    color: #B8B3B3;
    font-size: 20px;
    text-align: left;
    padding-left: 20px;
    height: 50px;
    background-color: rgba(0,0,0,0);
    border: 0;

`;

const Page = styled.div`
    width: 85%;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ButtonDisplay = styled.div`
    justify-content: space-evenly;
    padding: 10px;
    width: 90%;
    height: 10%;
    display: flex;
    flex-direction: row-reverse;
    align-items: flex-end;
`;

const FormDisplay = styled.div`
    margin-left: auto;
    margin-right: auto;
    width: 80%;
    height: 65%;
    background-color: #FACE7F;
    padding: 10px;
    display: flex;
    flex-direction: column;


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
        };
    };

    @media(max-width: ${breakpoints.sm}px) {
        form {
            button {
                width: 15%;
                font-size: 15px;
            }
        }
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

`;

const Title = styled.h1`
    color: #CB2D38;
    font-size: 54px;
    justify-content: center;
`;

const Field = styled.div`
    background-color: white;
    box-shadow: 5px 5px  5px inset #B8B3B3;
    border: 1px solid #40060A;
    width: 100%;

    margin-top: 9px;

    h3 {
            padding-left: 10px;
            font-weight: normal;
       
    };
`;

const SkillField = styled.div`
    background-color: white;
    box-shadow: 5px 5px  5px inset #B8B3B3;
    border: 1px solid #40060A;
    display: flex;

    margin-top: 9px;

    h3 {
            padding-left: 10px;
            font-weight: normal;
       
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
`;

const FlexColumn = styled.div`
    width: 45%;
    margin: 10px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;


`;

const FlexRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-evenly;


`;

const AbilityScore = styled.div`
    width: 46%;
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
        margin-right: 5px;

        width: 20%;
        background-color: white;
        text-align: center; 
        font-size: 39px;
        font-weight: bold;
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

            option {
                padding-left: 10px;

                font-size: 20px;
            };
    };

    @media (min-width: ${breakpoints.sm + 1}px) and (max-width: ${breakpoints.lg}px) {
        width: 100%;
    }

    @media(max-width: ${breakpoints.sm}px) {
        width: 100%;
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


    p {
        font-size: 20px;
    };
`;

export {
    Frame, Sidebar, Sideaction, Page, FormDisplay, Action, Title, Field, SkillField,
    ButtonDisplay, StyledSelect, FlexColumn, FlexRow, AbilityScore,
    StoryDisplay
}