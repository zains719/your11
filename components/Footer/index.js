import styles from './Footer.module.css'

const Footer = () => {
    return (
        <footer className={styles.container}>
            <img className={styles.logo} src="/images/logo/logo-white.png" height='40px' />
            <div className={styles.icons}>
                <img src="/images/socials/instagram.png" height="23px" />
                <img src="/images/socials/mail.png" height="23px" />
            </div>
        </footer>
    )
}

export default Footer