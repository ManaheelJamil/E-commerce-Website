import Image from 'next/image'
import { Image as IImage } from 'sanity'
import { client } from "../../../lib/client"
import { urlForImage } from '../../../lib/image'
import ProductCard from '../female'
// import Male from './components/Male'
export const getProduct = async () => {
  const res = await client.fetch(`*[_type == 'product']{
    title,
      _id,
      price,
      description,
    image,
      category ->{
        name
      }
   }`);
  return res
}
interface IProduct {
  [x: string]: any
  title: string,
  _id: string,
  price: number,
  description: string,
  image: IImage,
  category: {
    name: string
  }
}
export default async function Home() {
  const data: IProduct = await getProduct()
  console.log(data)
  return (
    <>
     <div className='tablet:flex small:flex w-[90vw] mx-auto justify-around bg-gray-50 py-10 mt-10'>
      <img src='female.jpg' className='tablet:w-[500px] small:w-[400px]'/>
      <h1 className='text-6xl mt-32 text-gray-600 underline font-semibold'>Female Collection</h1>
    </div>
    <div className='grid tablet:grid-cols-[auto,auto,auto,auto] small:grid-cols-[auto,auto,auto]   justify-center gap-10 mt-48'>
      {data.map((item: any) => (
        <div>
          <ProductCard item={item} />

        </div>
      ))}

    </div>
  </>
  )
}