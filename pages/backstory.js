import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import Head from 'next/head'
import Layout from '../components/Layout';
import Spinner from '../components/Spinner';
import { Action, FormDisplay, StoryDisplay, ButtonDisplay, FlexRow, Error } from '../styles/globals'
import store from '../redux/store';
import { Provider, useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import {
	getClass,
    getRace,
    getStory,
    
} from '../redux/selectors'
import { writeStory } from '../redux/actions';

export default function Backstory() {
    const [storyInput, setStoryInput] =  useState("");
    const [storyText, setStoryText]= useState(""); // here is the story after sucessful api retur
    const [toggle, setToggle] = useState(false)
    const [spin, setSpin] = useState(false)
    const [resubmit, setResubmit] = useState(false)

    var charClassStory = useSelector(getClass);
    var charRaceStory = useSelector(getRace);
    var theStory = useSelector(getStory);
    const [redoText, setRedoText] = useState(theStory);

    const dispatch = useDispatch();

    useEffect(() => {
        if (theStory !== undefined) setStoryText(theStory);
    }, [theStory])

    function onChange(e) {
        setStoryText(e.target.value);
        setResubmit(true);
    }

    function onChangeRedo(e) {
        setRedoText(e.target.value);
        setResubmit(true);
    }

    function onReSubmit() {
        dispatch(writeStory(storyText));
        setResubmit(false);
    }
    
    async function onSubmit(event) {
        setToggle(false)
        setSpin(true)
        event.preventDefault();

        var obj ={};
        obj.userStory=storyInput;
        obj.userClass=charClassStory;
        obj.userRace=charRaceStory;

        const response = await fetch("/api/userStory", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(obj),
		});
		const data = await response.json();

        
        var storyCleaner=data.resultThree.replace(/^[^A-Za-z]+/, '');
        console.log("cleaned story ======== "+ storyCleaner);
       
        setStoryText(storyCleaner);
        dispatch(writeStory(storyCleaner));
        setSpin(false);
        setToggle(true);
    }

    return (
        <Layout Title="The Backstory">
            <Head>
                <title>AI Backstory Generator</title>
            </Head>
            {charClassStory !== undefined ? 
                <FormDisplay>
                    <form onSubmit={onSubmit}>
                        <input value={storyInput} placeholder="Enter a description of your character's story" onChange={(e) => setStoryInput(e.target.value)} />
                        <button disabled={!storyInput}>{storyInput ? "Submit" : "Invalid"}</button>
                    </form>
                    {spin ? <Spinner /> : <></>}
                    {toggle || theStory !== undefined ?
                        //stuff
                        <StoryDisplay>
                            <textarea value={storyText} onChange={(e) =>  onChange(e) }></textarea>
                        </StoryDisplay>
                    : <></> }
                    {resubmit ? // If the user wants to resubmit their updated story
                        <ButtonDisplay><Action onClick={onReSubmit}>Save</Action></ButtonDisplay>
                    : <></> }
                </FormDisplay> : <>
                    <Error>
                        <h1>Please start this process from the beginning.</h1>
                            <Link href="/">
                                <Action>To The Beginning</Action>
                            </Link>
                    </Error>
                </>}
                <ButtonDisplay>
                    {toggle || theStory !== undefined ?
                        <Link href="/review">
                            <Action>Continue</Action>
                        </Link>
                    : <></> }
                    <Link href="/">
                        <Action>Go Back</Action>
                    </Link>
                </ButtonDisplay>
        </Layout>
    )
}
