import React, { useState } from 'react';
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { query } from '../hooks/qltree';

import { useDispatch } from 'react-redux';
import {
	writeClass,
	writeSubclass,
	writeRace,
	writeSubrace,
	writeEquipment,
	writeBackground,
	writeSkills
} from '../redux/actions'
import { X } from '../node_modules/@emotion-icons/octicons/index';
import { Action, FormDisplay, Field } from '../styles/globals'

function TestStore(data) {

	// testing values
	var charClass = "Barbarian"
	var subclass = "Berserker"
	var race = "Tiefling"
	var subrace = "Bloodline of Mammon"
	var background = "Acolyte"
	var equipment = ["Club", "Padded Armor"]
	var skills = ["Athletics", "Nature"]

	console.log("Inside", data)

	const dispatch = useDispatch()
	dispatch(writeRace(race))
	dispatch(writeSubrace(subrace))
	dispatch(writeClass(charClass))
	dispatch(writeSubclass(subclass))
	dispatch(writeBackground(background))
	dispatch(writeEquipment(equipment))
	dispatch(writeSkills(skills))

}

function handleSubmit() {
	alert("OpenAI call here")

}

export default function GeneralCharacter() {

	const [toggle, setToggle] = useState(false)
	const [userInput, setUserInput] = useState("")
	const { data, loading, error } = useQuery(query);
	if (!loading || error) { console.log(data); }

	TestStore(data)

	if (!toggle) {
		return (
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
					<input value={userInput} placeholder="Enter a description of your character" onChange={(e) => setUserInput(e.target.value) }/>
					<button>Submit</button>
				</form>
			</FormDisplay>
		)
	}
	else {
		return (
			<div>
				<FormDisplay>
					<Field>
						<h3>Race</h3>					
					</Field>
					<Field>
						<h3>Class</h3>
					</Field>
					<Field>
						<h3>Subclass</h3>
					</Field>
					<Field>
						<h3>Alignment</h3>
					</Field>
					<Field>
						<h3>Background</h3>
					</Field>
					<Field>
						<h3>Weapon</h3>
					</Field>
				</FormDisplay>
				<ul>
					<li>
						<Link href="/backstory">
							<Action>Continue</Action>
						</Link>
					</li>
				</ul>
			</div>
		)
    }
}