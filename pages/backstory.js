import React, { useState } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { Action, FormDisplay, StoryDisplay, ButtonDisplay, FlexRow } from '../styles/globals'

import store from '../redux/store';
import { Provider, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	getClass,
	getRace
} from '../redux/selectors'

export default function Backstory() {
    const [toggle, setToggle] = useState(false)

    var charClassStory=useSelector(getClass);
    var charRaceStory=useSelector(getRace);

    const [storyInput, setStoryInput] =  useState("");
    const [storyText, setStoryText]= useState(""); 
    
    async function onSubmit(event) {
        event.preventDefault();

        var obj ={};
        obj.userStory=storyInput;
        obj.userClass=charClassStory;
        obj.userRace=charRaceStory;

        console.log("the class from store >>>  "+ obj.userClass);
        console.log("the class from store >>>  "+ obj.userRace);

        const response = await fetch("/api/userStory", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		});
		const data = await response.json();

        console.log("Your story begins here >>>>>>>>>>>>>>>>>>>" + data.resultThree);
        
        setStoryText(data.resultThree);
        // send above items to the store
        setToggle(true);
    }
    return (
        <Layout>
            <FormDisplay>
                <form onSubmit={onSubmit }>
                    <input value={storyInput} placeholder="Enter a description of your character's story" onChange={(e) => setStoryInput(e.target.value)} />
                    <button>Submit</button>
                </form>
                {toggle ?
                    <StoryDisplay>
                        <p>{storyText}</p>
                    </StoryDisplay>
                : <></>}
            </FormDisplay>
            {toggle ?
                <ButtonDisplay>
                    <Link href="/review">
                        <Action>Continue</Action>
                    </Link>
                
                    <Link href="/">
                        <Action>Go Back</Action>
                    </Link>
                </ButtonDisplay>
            : <></>}
        </Layout>
    )
}