import React from 'react';
import { Field, StyledSelect } from '../styles/globals'

export default function Dropdown(props) {

	var dropdownData = props.data
    return (
		<Field>
			<StyledSelect> {
				dropdownData.map((opt, i) =>
					<option key={i} value={opt[1].name}>{opt[1].name}</option>
				)
			}
			</StyledSelect>
		</Field>
    )

}
