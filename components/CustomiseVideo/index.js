import { Player } from "@remotion/player"
import { HelloWorld } from '../../remotion/src/HelloWorld'
import { useEffect, useRef, useState } from 'react'
import styles from './CustomiseVideo.module.css'
import { TwitterPicker } from 'react-color';

const component = [HelloWorld][0]

const colors = [
    '#9c0202', '#1700b0', '#4703a1', '#f5a700', '#007a1b', '#006B76', 'black',
]

const CustomiseVideo = ({ 
    lineupName, 
    lineup,
    shirtSelected,
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
    ...customiseShirtColors
}) => {
    const ref = useRef()

    return (
        <div className={styles.container}>
            <div className={styles.customisePanel}>
                <div className={styles.customiseSection}>
                    <h4>Background Colour</h4>
                    <TwitterPicker
                    onChange={(color) => setBackgroundColor(color)}
                    triangle="hide"
                    colors={colors}
                    />
                </div>
                <div className={styles.customiseSection}>
                    <h4>Name Bar Colour</h4>
                    <TwitterPicker
                    onChange={(color) => setNameBarColor(color)}
                    triangle="hide"
                    colors={[...colors, 'white']}
                    />
                </div>
                <div className={styles.customiseSection}>
                    <h4>Name Text Colour</h4>
                    <TwitterPicker
                    onChange={(color) => setNameTextColor(color)}
                    triangle="hide"
                    colors={[...colors, 'white']}
                    />
                </div>
                <div className={styles.customiseSection}>
                    <h4>Number Bar Colour</h4>
                    <TwitterPicker
                    onChange={(color) => setNumberBarColor(color)}
                    triangle="hide"
                    colors={[...colors, 'white']}
                    />
                </div>
                <div className={styles.customiseSection}>
                    <h4>Number Text Colour</h4>
                    <TwitterPicker
                    onChange={(color) => setNumberTextColor(color)}
                    triangle="hide"
                    colors={[...colors, 'white']}
                    />
                </div>
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
                clickToPlay={true}
                autoPlay={true}
                loop={true}
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
                        backgroundColor,
                        nameBarColor,
                        nameTextColor,
                        numberBarColor,
                        numberTextColor,
                        ...customiseShirtColors
                    }
                }}
                doubleClickToFullscreen={true}
                />
            </div>
        </div>
    )
}

export default CustomiseVideo