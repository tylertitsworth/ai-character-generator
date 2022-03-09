import React from 'react';
import { Field, StyledSelect } from '../styles/globals'
import { useDispatch } from 'react-redux';
import {
	writeClass,
	writeRace,
} from '../redux/actions'

export default function Dropdown(props) {

	var dropdownData = props.data
	var current = props.currValue
	const dispatch = useDispatch()

	console.log(dropdownData)
	if (dropdownData[0][1].name != "Elf") {
		console.log("Not race info")
		return (
			<Field>
				<StyledSelect value={current} onChange={(event) => { console.log(event.target.value); dispatch(writeClass(event.target.value))}}> {
					dropdownData.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
			</Field>
		)
	}
	else {
		return (
			<Field>
				<StyledSelect value={current} onChange={(event) => { console.log(event.target.value); dispatch(writeRace(event.target.value)) }}> {
					dropdownData.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
			</Field>
		)
    }


}
