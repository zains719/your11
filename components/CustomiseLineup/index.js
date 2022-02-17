import Select from 'react-select'
import { useEffect, useState } from 'react'
import { getFormationOptions, lineupStyleOptions } from '../../lib/formation'
import styles from './CustomiseLineup.module.css'
var _ = require('lodash')
import { FaArrowRight } from 'react-icons/fa'
import { customStyles } from '../../lib/selectStyles'

const configureLineup = (formationSelected) => {
    const lineup = {}
    for (var i = 0; i < formationSelected.length; i ++) {
        const players = formationSelected[i]
        const temp = {}
        for (var playerIndex = 0; playerIndex < parseInt(players); playerIndex ++) {
            temp[playerIndex] = {
                name: null,
                number: null,
            }
        }
        lineup[i] = temp
    }
    return lineup
}

const getLineupStyle = (lineup) => {
    if (!lineup) {
        return null
    }

    const numOfPlayers = Object.keys(lineup).reduce((acc, playerRowIndex) => {
        const playerRow = lineup[playerRowIndex]
        return acc + Object.keys(playerRow ?? {}).length 
    }, 0)

    if (numOfPlayers === 11) {
        return {value: "11-a-side", label: "11-a-side"}
    } else if (numOfPlayers == 7) {
        return {value: "7-a-side", label: "7-a-side"}
    } else {
        return {value: "5-a-side", label: "5-a-side"}
    }
}

const getFormationOptionSelected = (lineup) => {
    if (!lineup) {
        return null
    }

    var formationOption = ''
    Object.keys(lineup).forEach((playerRowIndex) => {
        const playerRowLength = Object.keys(lineup[playerRowIndex]).length
        formationOption += ' ' + playerRowLength   
    })
    formationOption = formationOption.substring(3)
    return {value: formationOption, label: formationOption}
}
  
const CustomiseLineup = ({ 
    handleNextClick, 
    setErrorMessage, 
    lineup, 
    setLineup, 
    lineupName, 
    setLineupName 
}) => {
    const [lineupStyleSelected, setLineupStyleSelected] = useState(getLineupStyle(lineup))

    const [formationOptions, setFormationOptions] = useState(null)
    const [formationOptionSelected, setFormationOptionSelected] = useState(getFormationOptionSelected(lineup))
    const [formation, setFormation] = useState(null)

    useEffect(() => {
        if (lineupStyleSelected) {
            setFormationOptions(getFormationOptions(lineupStyleSelected.value))
        }
    }, [lineupStyleSelected])

    useEffect(() => {
        if (formationOptionSelected) {
            console.log("formation option selected")
            console.log(lineup)
            const formation = configureFormation()
            setFormation(formation)
            if (!lineup) {
                console.log("configuring lineup")
                setLineup(configureLineup(formation))
            }
        }
    }, [formationOptionSelected])

    const handleLineupStyleChange = (option) => {
        setFormationOptionSelected(null)
        setFormation(null)
        setLineup(null)
        setErrorMessage(null)
        setLineupStyleSelected(option)
    }

    const handleFormationChange = (option) => {
        setFormation(null)
        setLineup(null)
        setErrorMessage(null)
        setFormationOptionSelected(option)
    }

    const configureFormation = () => {
        const goalKeeper = ['1']
        const options = formationOptionSelected.value.split(' ')
        const formation = [...goalKeeper, ...options]
        return formation
    }

    const handleNameChange = (playerRowIndex, playerIndex, name) => {
        var lineupTemp = lineup
        lineupTemp[playerRowIndex][playerIndex]['name'] = name
        setLineup({...lineupTemp})
        setErrorMessage(null)
    }

    const handleNumberChange = (playerRowIndex, playerIndex, number) => {
        var lineupTemp = lineup
        lineupTemp[playerRowIndex][playerIndex]['number'] = number
        setLineup({...lineupTemp})
        setErrorMessage(null)
    }

    return (
        <div className={styles.createPanel}>
            <div className={styles.dropdowns}>
                <Select
                styles={customStyles}
                className={styles.select}
                options={lineupStyleOptions}
                onChange={handleLineupStyleChange}
                value={lineupStyleSelected}
                placeholder="Lineup style"
                />
                <Select
                styles={customStyles}
                className={styles.select}
                options={formationOptions ?? []}
                onChange={handleFormationChange}
                value={formationOptionSelected}
                placeholder="Formation"
                />
            </div>
            {formation && (
                <div className={styles.teamInputs}>
                    <input 
                    className={styles.lineupName}
                    type="text" 
                    placeholder="Lineup name" 
                    onChange={(e) => setLineupName(e.target.value)}
                    value={lineupName}
                    />
                    {formation.map((playerRow, playerRowIndex) => {
                        const tempArr = _.fill(Array(parseInt(playerRow)), 0)
                        return (
                            <div className={styles.position}>
                            {tempArr.map((value, playerIndex) => {
                                return (
                                    <div className={styles.inputs}>
                                        <input 
                                        className={styles.name}
                                        type="text"
                                        placeholder="name"
                                        autocomplete="off"
                                        onChange={(e) => {handleNameChange(playerRowIndex, playerIndex, e.target.value)}}
                                        value={lineup[playerRowIndex][playerIndex]['name']}
                                        />
                                        <input 
                                        className={styles.number}
                                        type="number"
                                        placeholder="number"
                                        onChange={(e) => {handleNumberChange(playerRowIndex, playerIndex, e.target.value)}}
                                        value={lineup[playerRowIndex][playerIndex]['number']}
                                        />
                                    </div>
                                )
                            })}
                            </div>
                        )
                    })}
                    <button 
                    className={styles.button}
                    onClick={handleNextClick}
                    >
                        Next <FaArrowRight className={styles.arrow} size="17" />
                    </button>
                </div>
            )}
        </div>
    )
}

export default CustomiseLineup