import { useState } from 'react'
import CustomiseLineup from '../../components/CustomiseLineup'
import CustomiseShirt from '../../components/CustomiseShirt'
import CustomiseVideo from '../../components/CustomiseVideo'
import Layout from '../../components/Layout/layout'
import MenuBar from '../../components/MenuBar'
import { lineupValid } from '../../lib/lineup'
import styles from './Create.module.css'

const customiseLineup = 1
const customiseShirt = 2
const customiseVideo = 3

const Create = () => {
    const [currentTab, setCurrentTab] = useState(customiseLineup)
    const [errorMessage, setErrorMessage] = useState(null)

    const [lineupName, setLineupName] = useState(null)
    const [lineup, setLineup] = useState(null)

    const [shirtSelected, setShirtSelected] = useState({value: "Plain", label: "Plain"})
    const [kitColor, setKitColor] = useState(null)
    const [sleeveColor, setSleeveColor] = useState(null)
    const [extraColor, setExtraColor] = useState(null)

    const [backgroundColor, setBackgroundColor] = useState(null)
    const [nameBarColor, setNameBarColor] = useState(null)
    const [nameTextColor, setNameTextColor] = useState(null)
    const [numberBarColor, setNumberBarColor] = useState(null)
    const [numberTextColor, setNumberTextColor] = useState(null)

    const customiseShirtColors = {
        shirtSelected,
        setShirtSelected,
        kitColor,
        setKitColor,
        sleeveColor,
        setSleeveColor,
        extraColor,
        setExtraColor
    }

    const customiseVideoColors = {
        backgroundColor,
        setBackgroundColor,
        nameBarColor,
        setNameBarColor,
        nameTextColor,
        setNameTextColor,
        numberBarColor,
        setNumberBarColor,
        numberTextColor,
        setNumberTextColor,
    }

    const isCurrentTab = (tab) => {
        return currentTab === tab
    }

    const canAdvanceFromLineup = () => {
        return currentTab !== customiseLineup || lineupValid(lineupName, lineup)
    }

    const handleTabClick = (tab) => {
        if (!canAdvanceFromLineup()) {
            setErrorMessage("Please ensure all fields are entered correctly. Kit numbers must be from 1-99.")
        } else {
            setCurrentTab(tab)
        }
    }

    const handleNextClick = () => {
        if (!canAdvanceFromLineup()) {
            setErrorMessage("Please ensure all fields are entered correctly. Kit numbers must be from 1-99.")
        } else {
            setCurrentTab(currentTab + 1)
        }
    }

    return (
        <Layout>
            <div className={styles.container}>
                <div className={styles.createBox}>
                    <MenuBar 
                    isCurrentTab={isCurrentTab}
                    handleTabClick={handleTabClick}
                    />
                    {isCurrentTab(customiseLineup) && (
                        <CustomiseLineup 
                        handleNextClick={handleNextClick}
                        setErrorMessage={setErrorMessage}
                        lineup={lineup}
                        setLineup={setLineup}
                        lineupName={lineupName}
                        setLineupName={setLineupName}
                        />
                    )}
                    {isCurrentTab(customiseShirt) && (
                        <CustomiseShirt
                        handleNextClick={handleNextClick}
                        lineup={lineup}
                        lineupName={lineupName}
                        {...customiseVideoColors}
                        {...customiseShirtColors}
                        />                        
                    )}
                    {isCurrentTab(customiseVideo) && (
                        <CustomiseVideo
                        lineupName={lineupName}
                        lineup={lineup}
                        {...customiseShirtColors}
                        {...customiseVideoColors}
                        />
                    )}
                    {!!errorMessage && (
                    <p>{errorMessage}</p>
                    )}
                </div>
            </div>
        </Layout>
    )
}

export default Create
  