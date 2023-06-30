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
    <div className='grid grid-cols-[auto,auto,auto,auto]    justify-center gap-10 mt-10'>
      {data.map((item: any) => (
        <div>
          <ProductCard item={item} />

        </div>
      ))}

    </div>
  )
}