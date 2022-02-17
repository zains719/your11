import styles from './MenuBar.module.css'
import { RiTeamFill, RiTShirt2Line } from 'react-icons/ri'
import { TiVideo } from 'react-icons/ti'

const customiseLineup = 1
const customiseShirt = 2
const customiseVideo = 3

const MenuBar = ({ 
    isCurrentTab, 
    handleTabClick
}) => {
    return (
        <div className={styles.container}>
            <RiTeamFill 
            onClick={() => handleTabClick(customiseLineup)}
            className={isCurrentTab(customiseLineup) ? styles.selectedIcon : styles.icon} size="40" 
            />
            <span />
            <RiTShirt2Line 
            onClick={() => handleTabClick(customiseShirt)}
            className={isCurrentTab(customiseShirt) ? styles.selectedIcon : styles.icon} size="40" 
            />
            <span />
            <TiVideo
            onClick={() => handleTabClick(customiseVideo)}
            className={isCurrentTab(customiseVideo) ? styles.selectedIcon : styles.icon} size="40" 
            />
        </div>
    )
}

export default MenuBar