import React from 'react';
import { Field, StyledSelect } from '../styles/globals'
import { useDispatch, useSelector} from 'react-redux';
import {
	writeClass,
	writeRace,
} from '../redux/actions'
import { getClass, getRace } from '../redux/selectors';

export default function Dropdown(props) {

	var dropdownData = props.data;
	var currentRace = useSelector(getRace);
	var currentClass= useSelector(getClass);

	const dispatch = useDispatch();

	// currentRace = ;
	// currentClass = ; 
	console.log(dropdownData)
	if (dropdownData[0][1].name != "Elf") {
		
		console.log(">>>>>Class info>> "+ currentClass);
		return (
			<Field>
				<StyledSelect value={currentClass} onChange={(event) => { console.log(event.target.value); dispatch(writeClass(event.target.value))}}> {
					dropdownData.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
			</Field>
		)
	}
	else {
		// current = "Half-Ling";
		
		console.log(">>>>race info>> "+ currentRace);
		return (
			<Field>
				<StyledSelect value={currentRace} onChange={(event) => { console.log(event.target.value); dispatch(writeRace(event.target.value)) }}> {
					dropdownData.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
			</Field>
		)
    }


}
