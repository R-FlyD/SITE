import { api } from '@/lib/api'

type Props = {
  hist: number
}

interface Product {
  id: number
  cody_RFID: string
  registration_date: Date
  valide_date: Date
  checked: boolean
  product_id: number
}

export default async function ProductRFID({ hist }: Props) {
  const response = await api.get(`/productID/${hist}`)

  const product: Product = response.data
  return (
    <>
      <td>{product.cody_RFID}</td>
    </>
  )
}
