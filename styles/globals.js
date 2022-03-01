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
    background-color: #40060A;
    ul { padding: 0; };
`;

const Sideaction = styled.button`
    width: 100%;
    margin-bottom: 10px;
    color: #FFC357;
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
`;

const Action = styled.button`
    color: #FFC357;
    font-size: 20px;
    background-color: #CB2D38;
    border-radius: 10px;
    border: 3px solid #922028;
    height: 50px;

`;

const Title = styled.h1`
    color: #CB2D38;
    font-size: 54px;
    padding-top: 10px;
    padding-left: 30px;
`;

export { Frame, Sidebar, Sideaction, Page, Action, Title }