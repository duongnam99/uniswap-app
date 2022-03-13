import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Main from '../components/Main'
import TransactionHistory from '../components/TransactionHistory'

const style = {
  wrapper: `h-screen max-h-screen h-min-screen w-screen bg-[#2d3436] text-white select-none flex flex-col`,
}
const Home = () => {
  return (
    <div className={style.wrapper}>
        <Header />
        <Main />
        <TransactionHistory />
    </div>
  )
}

export default Home
