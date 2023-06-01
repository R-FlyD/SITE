'use client'
import Link from 'next/link'
import React, { useState } from 'react'
import { AiOutlineHome } from 'react-icons/ai'
import { BsBoxes, BsSearch } from 'react-icons/bs'
import { FiMenu } from 'react-icons/fi'
import { HiOutlineDocumentReport } from 'react-icons/hi'
import { MdAppRegistration } from 'react-icons/md'

const menus = [
  { name: 'Início', link: '/hero', icon: AiOutlineHome },
  { name: 'Controle', link: '/control', icon: BsBoxes },
  { name: 'Pesquisa', link: '/search', icon: BsSearch },
  { name: 'Cadastro', link: '/register', icon: MdAppRegistration },
  { name: 'Relatórios', link: '/report', icon: HiOutlineDocumentReport },
]

export default function Sidebar() {
  const [open, setOpen] = useState(true)

  return (
    <div
      className={`min-h-screen bg-red-400 
             ${open ? 'w-72' : 'w-14'} mr-auto
             rounded-r-xl px-3 text-gray-100 duration-300 hover:shadow-black`}
    >
      <div className="flex justify-end py-4">
        <FiMenu
          size={26}
          className="cursor-pointer"
          onClick={() => setOpen(!open)}
        />
      </div>
      <div className="relative mt-8 flex flex-col gap-4">
        {menus?.map((menu, i) => (
          <Link
            href={menu.link}
            key={i}
            className="flex items-center gap-3 rounded-xl p-2 text-sm
                         font-medium hover:bg-red-500"
          >
            <div>{React.createElement(menu?.icon, { size: 20 })}</div>
            <div
              style={{ transitionDelay: `${i + 1}00ms` }}
              className={`whitespace-pre duration-500 
                         ${
                           !open && 'translate-x-28 overflow-hidden opacity-0'
                         }`}
            >
              {menu?.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
