import styled from '@emotion/styled'

const FlexRow = styled.div`
    min-width: 100%;
    display: flex;
    flex-direction: row;
    flex-wrap: no-wrap;
    align-items: center;
    margin: 0;
`;

const FlexColumn = styled.div`
    width: 65%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
`;
const FlexPage = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;
    align-items: stretch;
    padding-right: 10px;
`;

const SpellPage = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

const CharSheet = styled.form`
    width: 790px;
    height: 1156px;
    margin-left: 10px;
    margin-right: 10px;
    background-color: #fff;
    right: 0;
    left: 0;
    margin-top: 10px;
    padding-left: 5px;
    padding-right: 5px;

    header {
        display: flex;
        align-contents: stretch;
        align-items: stretch;
        margin-top: 10px;
        margin-left: 1px;
        margin-right: 1px;
    };
    ul {
        margin: 0;
        padding: 0;
        li{
            list-style-image: none;
        };
    };
    label {
        text-transform: uppercase;

    };
    
    textarea{
        padding: 10px;
        text-align: left;
        width: calc(100% -18px);
        resize: none;
        overflow: hidden;
        height: 15em;
    };

`;

const Charname = styled.div`
    border: 1px solid black;
    border-radius: 10px 0 0 10px;
    border-right: 0;
    background-color: #eee;
    padding: 5px 0;
    width: 30%;
    display: flex;
    flex-direction: column-reverse;
    bottom: 0;
    top: 0;
    margin: auto;
    margin-top: 16px;

    input {
        padding: 0.5em;
        margin: 5px;
        border: 0;
    };
    label {
        padding-left: 1em;
        font-size: 12px;

    };
`;

const Misc = styled.div`
    width: 70%;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;

    ul {
        padding: 10px 0px 5px 0px;
        display: flex;
        flex-wrap: wrap;
        li {
            width: 33.33333%;
            display: flex;
            flex-direction: column-reverse;

            label {
                margin-bottom: 5px;
                font-size: 12px;
            };

            input {
                border: 0;
                border-bottom: 1px solid #ddd;
            };
            select {
                border: 0;
                border-bottom: 1px solid #ddd;
            };

        };
    };
`;


const MainContent = styled.main`
    display: flex;
    justify-content: space-between;
    margin-top: 10px;
    margin-left: 5px;
    margin-right: 5px;
    > section {
        width: 32%;
        display: flex;
        flex-direction: column;
    };
`;

const Attributes = styled.section`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

`;

const Scores = styled.div`
    width: 80px;
    background-color: #bbb;
    border-radius: 10px;
    padding-bottom: 10px;
    padding-left: 10px;
    padding-right: 10px;

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        align-items: center;
        height: 100%;

        li {
            height: 80px;
            width: 70px;
            background-color: white;
            border: 1px solid black;
            text-align: center;
            display: flex;
            flex-direction: column;
            border-radius: 10px;
            margin-bottom: 7px;
            margin-top: 7px;

            div {
                width: 100%;
                padding: 0;
                border: 0;
            };
        };
    };
`;

const Score = styled.div`
    
    label {
        font-size: 9px;        
        font-weight: bold;
    };
    div {
        text-align: center;
        font-size: 40px;
        padding: 2px 0px 0px 0px;
        background: rgba(0,0,0,0);
    };
`;

const Modifier = styled.div`
    margin-top: -7px;
    input {
        background: white;
        width: 30px;
        height: 20px;
        border: 1px inset black;
        border-radius: 20px;
        text-align: center;
    };
`;

const AttrApplications = styled.div`
    margin-left: 5px;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

const Inspiration = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 10px;

    div {
        margin-top: 8px;

    };

    input {
        width: 30px;
        height: 28px;
        appearance: none;
        border: 1px solid black;
        padding: 15px;
        border-radius: 10px;
        margin-right: 0;
    };


`;

const ProficiencyBonus = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 10px;

    input {
        width: 30px;
        height: 28px;
        border: 1px solid black;
        text-align: center;
        border-radius: 10px;
    };
`;

const LabelContainer = styled.div`
    position: relative;
    width: 100%;
    height: 18px;
    margin-top: 5px;
    border: 1px solid black;
    border-left: 0;
    text-align: center;

    > label {
        position: absolute;
        left: 0;
        top: 1px;
        transform: translate(0%, 50%);
        width: 100%;
        font-size: 8px;
        
    };
`;

const ListSection = styled.div`
    border: 1px solid black;
    border-radius: 10px;
    padding: 10px 5px;
   
    

    ul li {
            display: flex;
            flex-direction: row;
            align-items: center;

            label {
                text-transform: none;
                width: 70%;
                font-size: 10px;
                text-align: left;
                order: 3;
                
            };
            span {
                text-align: right;
                margin-left: 3px;
                margin-right: 0;
                right: 0;
                color: #bbb;
                order: 4;
            };


        };
    };

    div {
        margin-top: 10px;
        margin-bottom: 10px / 4px;
        text-align: center;
        text-transform: uppercase;
        font-size: 10px;
        font-weight: bold;
    };
`

const ListTextInput = styled.input`
    width: 30px;
    font-size: 12px;
    text-align: center;
    border: 0;
    border-bottom: 1px solid black;
    order: 2;
`;

const ListCheckboxInput = styled.input`
    appearance: checkbox;
    width: 10px;
    height: 10px;
    border: 1px solid black;
    border-radius: 10px;
    border: 1;
`;

const PassivePerception = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
    margin-top: 10px;

    input {
        width: 30px;
        height: 28px;
        text-align: center;
        border: 1px solid black;
        border-radius: 10px;
    };
`;

const OtherProficiencies = styled.div`
    display: flex;
    flex-direction: column-reverse;
    width: 100%;
    align-items: center;
    margin-top: 10px;

    label {
        text-align: center;
        border: 1px solid black;
        border-top: 0;
        font-size: 10px;
        width: 100%;
        border-radius: 0 0 10px 10px;
        padding: 4px 0;
        font-weight: bold;
    }
    
    textarea {
        width: 92.3%;
        height: 17em;
        border: 1px solid black;
    };
`;

const Combat = styled.section`
    margin-left: 5px;

    display: flex;
    flex-wrap: wrap;
    border-radius: 10px;
    background-color: #eee;
`;

const CombatScore = styled.div`
    flex-basis: 33.333%;

    > div {
        display: flex;
        flex-direction: column-reverse;
        align-items: center;
        margin-top: 10px;

        label {
            font-size: 8px;
            width: 50px;
            border: 1px solid black;
            border-top: 0;
            background-color: white;
            text-align: center;
            padding-top: 5px;
            padding-bottom: 5px;
            border-radius: 0 0 10px 10px;
        };
        input {
            height: 70px;
            width: 70px;
            border-radius: 10px;
            border: 1px solid black;
            text-align: center;
            font-size: 30px;
        };
    }

`;

const Hitpoints = styled.div`
    width: 100%;

`;

const RegularHitpoints = styled.div`
    background-color: white;
    border: 1px solid black;
    margin: 10px;
    margin-bottom: 5px;
    border-radius: 10px 10px 0 0;
`;

const MaxHitpoints = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: baseline;

    label {
        font-size: 10px;
        text-transform: none;
        color: #ddd;
    };

    input {
        width: 40%;
        border: 0;
        border-bottom: 1px solid #eee;
        font-size: 12px;
        text-align: center;
    };
`;

const CurrentHitpoints = styled.div`
    display: flex;
    flex-direction: column-reverse;

    label {
        font-size: 10px;
        padding-bottom: 5px;
        text-align: center;
        font-weight: bold;
    };

    input {
        width: 100%;
        border: 0;
        padding: 1em 0;
        font-size: 20px;
        text-align: center;
    };
`;

const TemporaryHitpoints = styled.div`
    margin: 10px;
    margin-top: 0;
    margin-bottom: 0;

    border: 1px solid black;
    border-radius: 0 0 10px 10px;
    display: flex;
    flex-direction: column-reverse;
    background-color: white;

    input {
        padding: 2em 0;
        font-size: 20px;
        border: 0;
        text-align: center;
    };

    label {
        font-size: 10px;
        padding-bottom: 5px;
        text-align: center;
        font-weight: bold;
    };
`;

const HitDice = styled.div`
    width: 40%;
    > div {
        background-color: white;
        margin: 10px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column;
    };
`;

const TotalHitDice = styled.div`
    display: flex;
    align-items: baseline;
    justify-content: space-around;
    padding: 5px 0;
    
    label {
        font-size: 10px;
        color: #bbb;
        margin: 0.25em;
        text-transform: none;
    };

    input {
        font-size: 12px;
        flex-grow: 1;
        border: 0;
        border-bottom: 1px solid #ddd;
        width: 50%;
        margin-right: 0.25em;
        padding: 0 0.25em;
        text-align: center;
    };
`;

const RemainingHitDice = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column-reverse;
    border: 0;
    border-bottom: 1pd solid #ddd;

    label {
        text-align: center;
        padding: 2px;
        font-size: 10px;
    };

    input {
        text-align: center;
        border: 0;
        flex: 1;
        background-color: rgba(0,0,0,0)
    };
`;

const DeathSaves = styled.div`
    width: 60%;
    > div {
        border-bottom: 0;
        margin: 10px;
        
        background-color: white;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;

        div {
            margin-top: 4px;
            border-bottom: 0;
            border-right: 0;
        };

        label {
            font-size: 10px;
        };
    }
`;

const Marks = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    justify-content: center;
    
    wrap: no-wrap
`;

const SuccessOrFail = styled.div`
    display: flex;
    align-items: center;
    border-bottom: 0;
    margin-top: 0;
    label {
        margin-top: 10px;
        font-size: 8px;
        text-align: right;
        flex: 1 50%;
    };
`;

const Bubbles = styled.div`
    flex: 1 40%;
    margin-left: 5px;

    input {
        width: 10px;
        height: 10px;
        border: 1px solid black;
        border-radius: 10px;
    };
`;


const AttacksAndSpellcasting = styled.section`
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;

     div {
        margin: 10px;
        display: flex;
        flex-direction: column;

         label {
            order: 3;
            text-align: center;
        };

         table {
            width: 100%;

            th {
                font-size: 10px;
                color: #ddd;
            };
            input {
                width: 60px;
                border: 0;
                background-color: #eee;
                font-size: 10px;
                padding: 3px;
                margin: 3px;
            };
        };
        textarea {
            border: 0;
            height: 1em;

        };
    };
`;

const Equipment = styled.section`
    border: 1px solid black;
    border-radius: 10px;
    margin-top: 10px;

    div {
        padding: 10px;
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        label {
            order: 3
            text-align: center;
            flex: 100%;
        };
        textarea {
            flex: 1;
            border: 0;
        };
    };
`;

const Money = styled.div`

    ul {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        height: 100%;
        li {
            display: flex;
            align-items: center;

            label{
                border: 1px solid black;
                border-radius: 10px 0 0 10px;
                border-right: 0;
                width: 20px;
                font-size: 8px;
                text-align: center;
                padding: 3px 0;
            };

            input {
                border: 1px solid black;
                border-radius: 10px;
                width: 40px;
                padding: 10px 3px;
                font-size: 12px;
                text-align: center;
            };
        };
    };

`;

const Flavor = styled.section`
    padding: 10px;
    background: #bbb;
    border-radius: 10px;
    margin-right: 5px;

    div {
        background: white;
        display: flex;
        flex-direction: column-reverse;
        padding: 5px;
        border: 1px solid black;

        label {
            text-align: center;
            font-size: 10px;
            margin-top: 3px;
        }
        textarea {
            border: 0;
            border-radius: 0;
            height: 4em;
        };
        &:first-of-type {
            border-radius: 10px 10px 0 0;
        }
        &:not(:first-of-type) {
            margin-top: 10px;
        };
        &:last-of-type {
            border-radius: 0 0 10px 10px;
        };
    };
`;

const Features = styled.section`
    padding: 10px;
    margin-right: 5px;

    div {
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;

        label {
            text-align: center;
        };

        textarea {
            border: 0;
            padding: 5px;
            height: 32em;
        };
    };
`;

const CharacterAppearance = styled.section`
    padding: 10px;
    padding-top: 0;
    margin-right: 5px;
    width: 32%;


    div {
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;
        height: 40em;

        label {
            text-align: center;
            margin: 10px;
        };



        textarea {
            border: 0;
            padding: 5px;
        };
    };
`;

const AlliesAndOrganizations = styled.div`
    align-self: flex-start;
    padding: 10px;
    padding-top: 0;
    border: 1px solid black;
    border-radius: 10px;
    width: 67%;

    section {
        border-radius: 10px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        height: 38em;
        label {
            text-align: center;
        };
        textarea {
            align-self: flex-start;
            border: 0;
            padding: 5px;
            width: 50%;
            height: 95%;
        };

    };

`;

const Symbol = styled.div`
    padding: 10px;
    padding-top: 0;
    padding-bottom: 0;
    border: 3px solid #ddd;
    border-style: inset;
    border-radius: 10px;
    width: 40%;
    height: 45%;
    top: 5px;

    border-radius: 10px;
    display: flex;
    justify-content: space-between;
    top: 0;
    flex-direction: column-reverse;
    label {
        text-align: center;
        color: white;
        font-size: 12px;
        
    };
        
    table {
            padding-top: 15px;
            width: 100%;

            th {
                text-align: left;
                padding-left: 5px;
                font-size: 10px;
                color: #bbb;
                
            };
            input {
                width: 95%;
                border: 0;
                background-color: #ddd;
                font-size: 10px;
                padding: 3px;
                margin: 3px;
            };
        };



        textarea {
            border: 0;
            padding: 5px;
            background-color: pink;
            width: 100%;
            height: 40%;
        };

    };

`;

const Backstory = styled.section`
    padding: 10px;
    margin-right: 5px;
    width: 30.3%;
    align-self: stretch; 
    div {
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;

        label {
            text-align: center;
        };

        textarea {
            border: 0;
            padding: 5px;
            height: 36em;
        };
    };
`;

const AdditionalFeatures = styled.section`
    margin-right: 5px;
    div {
    width: 100%;
        padding: 10px;
        margin-top: 0;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;

        label {
            text-align: center;
        };

        textarea {
            border: 0;
            padding: 5px;
            height: 19em;
        };
    };
`;

const Treasure = styled.section`
    margin-right: 5px;
    div {
    width: 100%;
        padding: 10px;
        border: 1px solid black;
        border-radius: 10px;
        display: flex;
        flex-direction: column-reverse;

        label {
            text-align: center;
        };

        textarea {
            border: 0;
            padding: 5px;
            height: 13em;
        };
    };
`;

const StyledHeader = styled.header`
    display: flex;
    flex-direction: row;
    align-contents: stretch;
    align-items: center;
    margin-top: 10px;
    margin-left: 1px;
    margin-right: 1px;
`;

const SpellMisc = styled.div`
    width: 70%;
    height: 75px;
    border: 1px solid black;
    border-radius: 10px;
    padding-left: 1em;
    padding-right: 1em;
    display: flex;
    justify-content: space-evenly;
    background-color: #bbb;

    div {
        width: 20%;
        display: flex;
        flex-direction: column-reverse;
        label {
            margin-top: 5px;
            margin-bottom: 5px;
            font-size: 9px;
        };

        input {
            height: 50px;
            font-size: 20px;
            text-align: center;
            border: 3px solid #ddd;
            border-radius: 10px;
            border-style: inset;

        };
    };

    
`;

const SpellColumn = styled.div`
    width: 30%;
    display: flex;
    flex-direction: column;
    flex-wrap: no-wrap;

`;

const SpellLevel = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    background-color: #ddd;
    justify-content: space-between;
    align-items: center;
    border: 1px solid black;
    border-radius: 0 30px 30px 0;
    margin-top: 0;
    margin-bottom: 0;
    h1 {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 30px;
        padding-right: 5px;
        padding-top: 5px;
        padding-bottom: 5px;
        width: 10%;
        border: 5px solid #bbb;
        border-style: groove;
        border-radius: 0 30px 30px 0;
        background-color: white;
    };
    label {
        margin-top: 5px;
        margin-bottom: 5px;
        width: 70%;
        border: 3px solid #bbb;
        border-style: inset;
        border-radius: 30px;
        font-size: 16px;
        margin-right: 5px;
        background-color: white;
        padding: 10px;

    };
    input {
        margin-top: 5px;
        margin-bottom: 5px;
        width: 30%;
        border: 3px solid #bbb;
        border-style: inset;
        border-radius: 10px;
        font-size: 10px;
        text-align: center;
        margin-right: 5px;
        background-color: white;
        padding: 10px;

    };

`;

const Cantrips = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-contents: stretch;
    align-items: stretch;

    input {
        height: 13px;
        padding: 5px;
        border: 0;
        border-bottom: 1px solid #ddd;
    };

`;

const KnownSpells = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-contents: stretch;
    align-items: stretch;
`;

const Spell = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    margin-left: 0;
    input {
        height: 13px;
        text-align: center;
        margin-left: 0;
        padding: 0;
        border: 0;
        border-bottom: 1px solid #ddd;
    };

`;

export {
    FlexRow, FlexColumn, FlexPage, SpellPage, CharSheet, Charname, Misc, MainContent, Attributes, Scores, Score, Modifier, AttrApplications,
    Inspiration, LabelContainer, ProficiencyBonus, ListSection, ListTextInput, ListCheckboxInput, PassivePerception,
    OtherProficiencies, Combat, CombatScore, Hitpoints, RegularHitpoints, TemporaryHitpoints, MaxHitpoints,
    CurrentHitpoints, HitDice, TotalHitDice, RemainingHitDice, DeathSaves, Marks, SuccessOrFail, Bubbles,
    AttacksAndSpellcasting, Equipment, Money, Flavor, Features, CharacterAppearance, AlliesAndOrganizations,
    Symbol, Backstory, AdditionalFeatures, Treasure, StyledHeader, SpellMisc, Cantrips, SpellColumn, KnownSpells,
    SpellLevel, Spell
}