import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Menu from '../public/components/Menu'
import Principal from '../public/components/Principal'
import Rodape from '../public/components/Rodape'



export default function Home() {
  return (
    <div>
      <Head>
        <title>Tche Games Switch</title>

      </Head>

      
      <main>   
        <Menu />

        <Principal />
      </main>


      <footer>
        <Rodape />  
      </footer>
    </div>
  )
}
