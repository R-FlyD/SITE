'use client'
import { api } from '@/lib/api'
import { useRouter } from 'next/navigation'
import { FormEvent } from 'react'

export function MyForm() {
  const router = useRouter()

  async function handleCreatProduct(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)

    await api.post('products', {
      cody_RFID: formData.get('cody_RFID'),
      type: formData.get('type'),
      cost: formData.get('cost'),
      description: formData.get('description'),
      // "checked": false,
      //   "cody_RFID": "3f165ad1f5",
      //   "id": 1,
      //   "product_id": 1,
      //   "registration_date": "2023-01-01T00:00:00.000Z",
      //   "valide_date":
    })

    router.push('/control')
  }

  return (
    <form onSubmit={handleCreatProduct}>
      <div className="grid grid-cols-2">
        <div>
          {/* Tipo do produto */}
          <div>
            <p className="mb-1 font-semibold text-red-500">Tipo do produto:</p>
            <input
              type="text"
              name="type"
              placeholder="Computador"
              className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
              required
            />
          </div>
          {/* Nome do produto */}
          <div>
            <p className="mb-1 font-semibold text-red-500">Nome do produto:</p>
            <input
              type="text"
              // name="name"
              placeholder="Dell Inspiron"
              className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
              required
            />
          </div>
        </div>
        {/* Descrição do produto */}
        <div className="ml-1.5">
          <p className="mb-1 font-semibold text-red-500">
            Descrição do produto:
          </p>
          <textarea
            // type="text"
            placeholder="Descrição do produto em questão"
            rows={4}
            className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
          />
        </div>
      </div>
      <div className="grid grid-cols-2">
        {/* Rfid do produto */}
        <div>
          <p className="mb-1 font-semibold text-red-500">RFID do produto:</p>
          <input
            type="text"
            name="cody_RFID"
            placeholder="fb21fd3f"
            className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
            required
          />
        </div>
        {/* Preço do produto */}
        <div className="ml-1.5">
          <p className="mb-1 font-semibold text-red-500">Preço do produto:</p>
          <input
            type="number"
            name="cost"
            className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 text-gray-400 shadow-xl"
            required
          />
        </div>
      </div>
      <div className=" grid grid-cols-2">
        {/* Data de entrada */}
        <div>
          <p className="mb-1 font-semibold text-red-500">Data de entrada:</p>
          <input
            type="date"
            // name="registration_date"
            className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 text-gray-400"
            required
          />
        </div>
        {/* Validade */}
        <div className="ml-1.5">
          <p className="mb-1 font-semibold text-red-500">Validade:</p>
          <input
            type="date"
            // name="valide_date"
            className="mb-4 w-56 rounded-xl border border-zinc-400 p-1.5 text-gray-400 shadow-xl"
            required
          />
        </div>
      </div>
      {/* Localização do produto - tabela de historico */}
      <div>
        <p className="mb-1 font-semibold text-red-500">Localização:</p>
        <div className="grid grid-cols-3 justify-between">
          {/* Corredor */}
          <input
            type="text"
            // name="hall"
            placeholder="Corredor: 1"
            className="mb-4 mr-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
            size={20}
            required
          />
          {/* Prateleira */}
          <input
            type="text"
            // name="shelf"
            placeholder="Prateleira: 2"
            className="mb-4 mr-4 w-56 rounded-xl border border-zinc-400 p-1.5 shadow-xl"
            required
          />
          {/* Posição */}
          <input
            type="text"
            // name="position"
            placeholder="Posição: 3"
            className="mb-4 rounded-xl border border-zinc-400 p-1.5"
            required
          />
        </div>
      </div>
      {/* Save button */}
      <button
        type="submit"
        className="dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]] hover:bg-primary-600 focus:bg-primary-600 active:bg-primary-700 inline-block w-full rounded-xl bg-red-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
        data-te-ripple-init
        data-te-ripple-color="light"
      >
        Save
      </button>
    </form>
  )
}
