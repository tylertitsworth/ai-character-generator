import React from 'react';
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
import { Action } from '../styles/globals'

function TestStore() {

    // testing values
    var charClass = "Barbarian"
    var subclass = "Berserker"
    var race = "Tiefling"
    var subrace = "Bloodline of Mammon"
    var background = "Acolyte"
    var equipment = ["Club", "Padded Armor"]
    var skills = ["Athletics", "Nature"]

    const dispatch = useDispatch()
    dispatch(writeRace(race))
    dispatch(writeSubrace(subrace))
    dispatch(writeClass(charClass))
    dispatch(writeSubclass(subclass))
    dispatch(writeBackground(background))
    dispatch(writeEquipment(equipment))
    dispatch(writeSkills(skills))

    return 0;
}

export default function GeneralCharacter() {
    var test = TestStore()
    const { data, loading, error } = useQuery(query);
    if(!loading || error) { console.log(data); }
    return (
        <div>
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