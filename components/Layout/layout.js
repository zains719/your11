import Footer from "../Footer"
import Header from "../Header"
import styles from './Layout.module.css'

const Layout = ({ children }) => {
    return (
        <div className={styles.container}>
            <Header />
            <main className={styles.main}>
                { children }
            </main>
            <Footer />
        </div>
    )
}

export default Layout