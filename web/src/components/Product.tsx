import { api } from '@/lib/api'
import Box from '../assets/box.svg'
import Image from 'next/image'

interface Product {
    id: number
    cody_RFID: string
    registration_date: Date
    valide_date: Date
    checked: boolean
    product_id: number
}

type Props = {
  cody: string
}

export async function Product(cody: Props) {
  // const response = await api.get('/productID/', param:{cody})

  // const products: Product[] = response.data

  // if (products.length === 0) {
  //   return <div />
  // }

  return(
  <div className="h-screen w-full">
    <div className="flex h-auto w-full flex-col justify-start px-6 text-start sm:px-24">
        <h1 className="xs:text-[40px] text-[30px] font-bold sm:text-[50px] md:text-[60px]">
          Controle
        </h1>
    </div>
    <div className="relative justify-center items-center gap-4 px-8 py-3">
        {/* {products.map((product) => {
          return (
            <div
              key={product.product_id}
              className="flex flex-col items-center justify-between rounded-md bg-zinc-200 p-2 hover:bg-zinc-300"
            >
              <Image src={Box} alt="Box Image" />
              <p className="py-4 text-lg">{product.cody_RFID}</p>
              <p className="py-4 text-lg">{product.registration_date.toString()}</p>
              <p className="py-4 text-lg">{product.valide_date.toString()}</p>
              {product.checked ? (
                <div className="flex h-4 w-4 rounded-full bg-green-600" />
              ) : (
                <div className="flex h-4 w-4 rounded-full bg-red-600" />
              )}
            </div>
          )
        })} */}
      </div>
  </div>)
}
