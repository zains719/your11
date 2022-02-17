import { HelloWorld } from '../../remotion/src/HelloWorld'
import { Player } from "@remotion/player"
import styles from './CustomiseShirt.module.css'
import { useEffect, useRef, useState } from 'react'
import { customStyles } from '../../lib/selectStyles'
import { shirtOptions } from '../../lib/formation'
import { FaArrowRight } from 'react-icons/fa'
import Select from 'react-select'
import { TwitterPicker } from 'react-color';

const component = [HelloWorld][0]

const colors = [
    '#DA291C', '#034694', '#C8102E', '#f5a700', '#6CABDD', 'black',
]

const CustomiseShirt = ({
    handleNextClick, 
    lineupName,
    lineup,
    shirtSelected,
    setShirtSelected,
    kitColor,
    setKitColor,
    sleeveColor,
    setSleeveColor,
    extraColor,
    setExtraColor,
    ...customiseVideoColors
}) => {
    const [colorOptions, setColorOptions] = useState(null)

    const ref = useRef(null)

    useEffect(() => {
        configureColorOptions()
    }, [shirtSelected])

    const configureColorOptions = () => {
        var colorOptions
        if (shirtSelected.value === "Plain" ) {
            colorOptions = ['Kit Color', 'Sleeve Color']
        } else if (shirtSelected.value === "Stripes") {
            colorOptions = ['Kit Color', 'Sleeve Color', 'Stripes Color']
        } else {
            colorOptions = ['Kit Color', 'Sleeve Color', 'Hoops Color']
        }
        setColorOptions([...colorOptions])
    }

    const handleShirtChange = (option) => {
        setShirtSelected(option)
    }

    useEffect(() => {
        ref.current.seekTo(1150)
    }, [])

    const handleColorChange = (index, color) => {
        if (index === 0) {
            setKitColor(color)
        } else if (index === 1) {
            setSleeveColor(color)
        } else {
            setExtraColor(color)
        }
    }

    return (
        <div className={styles.container}>
            <div className={styles.customisePanel}>
                <Select
                styles={customStyles}
                className={styles.select}
                options={shirtOptions}
                onChange={handleShirtChange}
                value={shirtSelected}
                placeholder="Kit"
                />
                {colorOptions?.map((colorOption, index) => {
                    return (
                    <div className={styles.customiseSection}>
                        <h4>{colorOption}</h4>
                        <TwitterPicker
                        onChange={(color) => handleColorChange(index, color)}
                        triangle="hide"
                        colors={[...colors, 'white']}
                        />
                    </div>
                    )
                })

                }
                <button 
                    className={styles.button}
                    onClick={handleNextClick}
                    >
                        Next <FaArrowRight className={styles.arrow} />
                </button>
            </div>
            <div className={styles.preview}>
                <h3>Double click for full screen!</h3>
                <Player
                ref={ref}
                compositionWidth={480}
                compositionHeight={300}
                fps={30}
                durationInFrames={1350}
                component={component}
                showVolumeControls={false}
                clickToPlay={false}
                autoPlay={false}
                style={{
                    borderRadius: '15px',
                    height: '375px'
                }}
                inputProps={{
                    lineup,
                    lineupName,
                    preview: true,
                    kit: shirtSelected.value,
                    colors: {
                        kitColor,
                        sleeveColor,
                        extraColor,
                        backgroundColor: null,
                        nameBarColor: null,
                        nameTextColor: null,
                        numberBarColor: null,
                        numberTextColor: null,
                        ...customiseVideoColors
                    }
                }}
                doubleClickToFullscreen={true}
                />
            </div>
        </div>
    )
}

export default CustomiseShirt