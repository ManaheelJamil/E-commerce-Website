// import Image from 'next/image'
// import Navbar from './components/Navbar'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Section1 from './components/Section1'
// import Section2 from './components/Section2'
// import Section3 from './components/section3'
// export default function Home() {
//   return (
//   <>
//  <Navbar/>
//  <Header/>/
//  <Section1/>
//  <Section2/>
//  <Section3/>
//  <Footer/>
//   </>
//   )
// }
// "use client"
import React from 'react'
import { Image } from 'sanity'
import { client } from '../../lib/client'
import { Interface } from 'readline'
export const getProduction = async () => {
  const res = await client.fetch(`*[_types == product]
`)
  return res
}
interface IProduct {
  title: string
}
export default async function Home() {
  const data:any = await getProduction()
  console.log(data)
  return (
    <div>
      {data.map((x:any) => (
        <h1>{x.title}</h1>
      ))}
    </div>
  )
}

