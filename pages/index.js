import React, { useState, useEffect } from 'react';
import { ApolloProvider as ApolloProvider2 } from '@apollo/react-components'; // I hate this, why do I have to do this to get around invariant 29?
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client'
import Link from 'next/link';
import { useQuery } from '@apollo/client';
import { query } from '../hooks/qltree';
import Layout from '../components/Layout'
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
import { Action, FormDisplay, FlexColumn, FlexRow, ButtonDisplay } from '../styles/globals';
import Dropdown from '../components/Dropdown';
import SkillDropdown from '../components/SkillDropdown';
import AbilityScoreDisplay from '../components/AbilityScoreDisplay';

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

function GeneralCharacter() {

	const [toggle, setToggle] = useState(false)
	const [userInput, setUserInput] = useState("")
	const { data, loading, error } = useQuery(query);

	const [allAbilityScores, setAllAbilityScores] = useState([])
	const [allSkills, setAllSkills] = useState([]);
	const [allLanguages, setAllLanguages] = useState([])
	const [allAlignments, setAllAlignments] = useState([]);
	const [allBackgrounds, setAllBackgrounds] = useState([]);
	const [allClasses, setAllClasses] = useState([]);
	const [allRaces, setAllRaces] = useState([]);
	const [allSpells, setAllSpells] = useState([])

	const [profChoices, setProfChoices] = useState({
		oneprofchoice: false,
		twoprofchoice: false,
		threeprofchoice: false
	})

	var testClass = [];
	var testClassProf = 0;



	//if (!loading || error) { //console.log(data); 
	//	TestStore(data)
	//}
	//console.log("-- LOADING: ", loading)
    if (!loading || error) {

    }
	useEffect(() => {
		if (loading === false) {
			console.log("--- LOADED DATA: ", data)
			//console.log("classes", allClasses)
			//console.log("races", allRaces)
			//console.log("alignments", allAlignments)
			console.log(Object.entries(data.abilityScores));
			setAllAbilityScores(Object.entries(data.abilityScores));
			setAllSkills(Object.entries(data.skills));
			setAllLanguages(Object.entries(data.languages));
			setAllAlignments(Object.entries(data.alignments));
			setAllBackgrounds(Object.entries(data.backgrounds));
			setAllClasses(Object.entries(data.classes));
			setAllRaces(Object.entries(data.races));
			setAllSpells(Object.entries(data.spells));
		}
		if (toggle === true) {
			testClass = allClasses[2]
			console.log(testClass)

        }
	}, [loading, error, toggle])




	return (
		<Layout Title="Let's Get Started...">        
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

				{toggle ?	// eventually will have to include the loading variable of the OpenAI api call
					<>
						<h1>Results: </h1>
						<FlexRow>
							<FlexColumn>
								<Dropdown data={allRaces} />
								<Dropdown data={allClasses} />
								<SkillDropdown classes={allClasses} />
							</FlexColumn>
							<FlexColumn>
								<AbilityScoreDisplay data={allAbilityScores}/>
							</FlexColumn>
						</FlexRow>
					</>
					: <></>
				}
			</FormDisplay>
			{toggle ?
				<ButtonDisplay>
						<Link href="/backstory">
							<Action>Continue</Action>
						</Link>
					
				</ButtonDisplay>
				:
				<></>
			}
		</Layout>
	)
}

export default function Home() {
    const client = new ApolloClient({
        uri: "https://www.dnd5eapi.co/graphql", 
        cache: new InMemoryCache()
    });
    return (
        <ApolloProvider2 client={client}>
            <ApolloProvider client={client}>
                <GeneralCharacter/>
            </ApolloProvider>
        </ApolloProvider2>
    )
}