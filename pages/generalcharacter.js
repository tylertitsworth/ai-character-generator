import React, { useState, useEffect } from 'react';
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
import { Action, FormDisplay, Field, StyledSelect } from '../styles/globals';
import Dropdown from '../components/Dropdown';

function TestStore(data) {

	// testing values
	var charClass = "Barbarian"
	var subclass = "Berserker"
	var race = "Tiefling"
	var subrace = "Bloodline of Mammon"
	var background = "Acolyte"
	var equipment = ["Club", "Padded Armor"]
	var skills = ["Athletics", "Nature"]

	console.log("Inside", data.classes)
	const obj = Object.values(data.skills)
	console.log("Object: ", obj[0].name)

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

	const [allClasses, setAllClasses] = useState([]);
	const [allRaces, setAllRaces] = useState([]);
	const [allAlignments, setAllAlignments] = useState([]);
	const [allBackgrounds, setAllBackgrounds] = useState([]);

	//if (!loading || error) { //console.log(data); 
	//	TestStore(data)
	//}
	//console.log("-- LOADING: ", loading)
	useEffect(() => {
		if (loading === false) {
			console.log("--- LOADED DATA: ", data)
			//console.log("classes", allClasses)
			//console.log("races", allRaces)
			//console.log("alignments", allAlignments)

			setAllClasses(Object.entries(data.classes))
			setAllRaces(Object.entries(data.races));
			setAllAlignments(Object.entries(data.alignments));
			setAllBackgrounds(Object.entries(data.backgrounds));
		}

	}, [loading, error])

	return (
			<>
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

				{toggle ?
					<>
						<h1>Results: </h1>
						<Dropdown data={allRaces} />
						<Dropdown data={allClasses} />
						<Dropdown data={allAlignments} />
						<Dropdown data={allBackgrounds} />


					</>
					: <h1></h1>
				}
			</FormDisplay>
			{toggle ?
				<ul>
					<li>
						<Link href="/backstory">
							<Action>Continue</Action>
						</Link>
					</li>
				</ul>
				:
				<h1></h1>
			}
			</>
		)
	}