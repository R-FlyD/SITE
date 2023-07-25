'use client'
import { api } from '@/lib/api'
import {useState} from 'react'
import React from 'react'

interface Carrega {
  id: number
  relay: boolean
}

export default async function Charge() {
  const [clickedButton, setClickedButton] = useState()

  async function buttonHandler(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await api.put('mode', { relay: false})
    console.log('false')
  }

  async function buttonHandler2(event: React.MouseEvent<HTMLButtonElement>) {
    event.preventDefault();
    await api.put('modes', { relay: true})
    console.log('true')
  }
 
  return (
    <div className="h-screen w-full">
      <div className="flex h-auto w-full flex-col justify-start px-6 text-start sm:px-24">
        <h1 className="xs:text-[40px] text-[30px] font-bold sm:text-[50px] md:text-[60px]">
          Modos de Operação
        </h1>
      </div>
      <div className="container mx-auto my-auto">
        <div className="mt-20 flex rounded-3xl justify-evenly ">
          <button type='button' onClick={buttonHandler2} className="flex w-96 h-96 items-center justify-center rounded-3xl border border-zinc-200 bg-orange-200 shadow-2xl hover:bg-orange-300 text-3xl focus:ring-2 focus:ring-orange-400">
            Carregamento
          </button>
          <button type='button' onClick={buttonHandler} className="flex w-96 items-center justify-center rounded-3xl border border-zinc-200 bg-cyan-200 shadow-2xl hover:bg-cyan-300 text-3xl focus:ring-2 focus:ring-cyan-400">
            Leitor RFID
          </button>
        </div>
      </div>
    </div>
  )
}
