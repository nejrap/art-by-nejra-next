import Image from 'next/image'
import Header from '../../components/Header'
import Footer from '../../components/Footer'
import Galerija from '../../components/Galerija'
import AboutUs from '../../components/About'
import Contact from '../../components/Contact'


export default function Home() {
  
    return (
            <>
        <AboutUs/>
        <Galerija brojSlika={3}/>
        <Contact/>
        </>
        )
}