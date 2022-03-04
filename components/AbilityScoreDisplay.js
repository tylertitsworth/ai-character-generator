import React from 'react';
import { AbilityScore, FlexRow } from '../styles/globals'

export default function AbilityScoreDisplay(props) {

	var abilityData = props.data
	return (
		<FlexRow>
			{
				abilityData.map((ability, i) =>
					<AbilityScore key={i}>
						<h1>##</h1>
						<h2>{ability[1].full_name}</h2>
					</AbilityScore>
				)
			}
		</FlexRow>
    )

}