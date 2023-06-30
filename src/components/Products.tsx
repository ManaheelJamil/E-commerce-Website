// import React from 'react'
import React from 'react'
import { Image } from 'sanity'
import { client } from '../../lib/client'
import { urlForImage } from '../../lib/image'
export const getProduction = async () => {
    const res = await client.fetch(`*[_type == 'pageProduct']{
        title,
          price,
          description,
          _id,
          image,
      }`)
    return res
}
interface Iproduct {
    title: string,
    price: number,
    image: Image,
    _id: string,
}
export default async function Home() {
    const data: Iproduct[] = await getProduction()
    console.log(data)
    const image1 = "image-ed4960c6cf46ac416ae2fa6c0a3accbaa551457e-278x296-png"
    return (
        <div>
            <div>
                <h1 className='text-blue-700 font-bold text-sm text-center mt-32'>PRODUCTS</h1>
                <h1 className='text-4xl font-bold text-center'>Check What We Have
                </h1>
            </div>
            <div className='grid grid-cols-3 max-w-[900px] mx-auto mt-10 '>
                {data.map((x: any) => (
                    <div className=' hover:scale-125 duration-1000'>
                        <img src={urlForImage(x.image).url()} alt='logo' className=' h-80 bg-cover ' />
                        <h1 className='font-semibold text-lg py-3'>{x.description}</h1>
                        <h1 className='text-xl font-bold'>${x.price}</h1>
                    </div>
                ))}
            </div>
        </div>
    )
}

