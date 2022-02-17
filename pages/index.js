import Layout from '../components/Layout/layout'
import ShirtHoops from '../public/images/shirts/shirtHoops'
import ShirtPlain from '../public/images/shirts/shirtPlain'
import ShirtStripes from '../public/images/shirts/shirtStripes'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <Layout>
      <div className={styles.container}>
        <ShirtHoops 
        shirtColor='blue'
        sleeveColor='white'
        stripeColor="white"
        />
        <ShirtPlain 
        shirtColor='red'
        sleeveColor='white'
        />
        <ShirtStripes 
        shirtColor='blue'
        sleeveColor='white'
        stripeColor="white"
        />
        {/* <img 
        src="/images/shirts/shirt.svg" /> */}
      </div>
    </Layout>
  )
}
