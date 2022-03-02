import React, { useState } from 'react';
import Link from 'next/link';

import Layout from '../components/Layout';
import { Action, FormDisplay } from '../styles/globals'

import store from '../redux/store';
import { Provider } from 'react-redux';
import { useDispatch } from 'react-redux';
import { writeSubclass } from '../redux/actions'

function TestStore() {
    const dispatch = useDispatch();
    dispatch(writeSubclass("--- changed value ---"))
    return 0;
}

function handleSubmit() {
    alert("OpenAI call here")

}

export default function Backstory() {

    var test = TestStore()
    const [toggle, setToggle] = useState(false)
    const [userInput, setUserInput] = useState("")

    if (!toggle) {
        return (
            <Layout>
                <FormDisplay>
                    <form onSubmit={(e) => {
                        if (userInput === '') {
                            e.preventDefault()
                            alert("You must enter a description of your character before proceeding.")
                        }
                        else {
                            e.preventDefault();
                            handleSubmit();
                            setToggle(true)
                        }

                    }}>
                        <input value={userInput} placeholder="Enter a description of your character's story" onChange={(e) => setUserInput(e.target.value)} />
                        <button>Submit</button>
                    </form>
                </FormDisplay>
            </Layout>
        )
    }
    else {
        return (
                <Layout Title="Backstory">
                    <ul>
                        <li>
                            <Link href="/review">
                                <Action>Continue</Action>
                            </Link>
                        </li>
                        <li>
                            <Link href="/">
                                <Action>Go Back</Action>
                            </Link>
                        </li>
                    </ul>
                </Layout>
        )
    }
}