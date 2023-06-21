import { api } from '@/lib/api'
import ProductRFID from './ProductRFID'

interface Historic {
  id: number
  date: Date
  hall: number
  shelf: number
  position: number
  product_identification_id: number
}

export default async function Report() {
  const response = await api.get('/historic')

  const historics: Historic[] = response.data

  if (historics.length === 0) {
    return <div />
  }

  return (
    <div className="h-screen w-full">
      {/* Header */}
      <div className="flex h-auto w-full flex-col justify-start px-6 text-start sm:px-24">
        <h1 className="xs:text-[40px] text-[30px] font-bold sm:text-[50px] md:text-[60px]">
          Histórico de Movimentação
        </h1>
      </div>
      {/* Content */}
      <div className="container mx-auto my-20 flex items-center justify-center">
        <table className="mb-4 table-auto border-separate border-spacing-x-20 border-spacing-y-4 rounded-lg border border-slate-500">
          <thead className="text-2xl">
            <tr>
              <th>Código</th>
              <th>Data de Movimentação</th>
              <th>Corredor</th>
              <th>Prateleira</th>
              <th>Posição</th>
            </tr>
          </thead>
          <tbody className="text-center text-lg">
            {historics.map((historic) => {
              return (
                <tr key={historic.product_identification_id}>
                  {/* @ts-expect-error Asycn Server Component */}
                  <ProductRFID hist={historic.product_identification_id} />
                  <td>{historic.date.toString()}</td>
                  <td>{historic.hall}</td>
                  <td>{historic.shelf}</td>
                  <td>{historic.position}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}
