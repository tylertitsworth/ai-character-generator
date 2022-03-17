import React from 'react';
import { Field, StyledSelect } from '../styles/globals'
import { useDispatch, useSelector} from 'react-redux';
import {
	writeClass,
	writeRace,
} from '../redux/actions'
import { getAllClasses, getAllRaces, getClass, getRace } from '../redux/selectors';

export default function Dropdown(props) {
	var currentRace = useSelector(getRace);
	var currentClass = useSelector(getClass);
	var allClasses = useSelector(getAllClasses);
	var allRaces = useSelector(getAllRaces);

	const dispatch = useDispatch();

	return (
		<>
			<Field>
				<StyledSelect value={currentRace} onChange={(event) => { event.preventDefault(); console.log(event.target.value); dispatch(writeRace(event.target.value)) }}> {
					allRaces.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
				</Field>
			<Field>
				<StyledSelect value={currentClass} onChange={(event) => { event.preventDefault(); console.log(event.target.value); dispatch(writeClass(event.target.value)) }}> {
					allClasses.map((opt, i) =>
						<option key={i} value={opt[1].name}>{opt[1].name}</option>
					)
				}
				</StyledSelect>
			</Field>
		</>
	)

}