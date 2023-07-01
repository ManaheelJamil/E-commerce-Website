
import Image from 'next/image'
import { Image as IImage } from 'sanity'
import { client } from "../../../lib/client"
import { urlForImage } from '../../../lib/image'
import ProductCard from '../female'
import Male from '../male'
import Kids from '../kids'
export const getProduct = async () => {
  const res = await client.fetch(`*[_type == 'kids']{
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
    <div className='tablet:flex small:flex justify-around bg-gray-50 py-10 mt-10'>
      <img src='kid.jpg' className='tablet:w-[500px] small:w-[400px]'/>
      <h1 className='text-6xl mt-32 text-gray-600 underline font-semibold'>Kids Collection</h1>
    </div>
    <div className='grid tablet:grid-cols-[auto,auto,auto,auto] small:grid-cols-[auto,auto,auto]   justify-center gap-10 mt-44'>
      {data.map((item: any) => (
        <div>
          <Kids item={item} />

        </div>
      ))}

    </div>
  </>
  )

}