import Link from 'next/link'
import React from 'react'
import classNames from 'classnames'
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

type Props = {
  collapsed: boolean
  setCollapsed(collapsed: boolean): void
}

export default function Sidebar({ collapsed, setCollapsed }: Props) {
  return (
    <div className={'z-20 rounded-r-xl bg-red-400 text-zinc-50'}>
      <div className="flex h-full flex-col justify-between">
        <div
          className={classNames({
            'flex items-center border-b border-b-red-500': true,
            'justify-between p-4': !collapsed,
            'justify-center py-4': collapsed,
          })}
        >
          {!collapsed && (
            <span className="whitespace-nowrap text-xl">RFlyD</span>
          )}
          <button
            className={classNames({
              'grid place-content-center': true, // position
              'hover:bg-red-500': true, // colors
              'h-10 w-10 rounded-full': true, // shape
            })}
            // 👇 set the collapsed state on click
            onClick={() => setCollapsed(!collapsed)}
          >
            <FiMenu size={26} />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className="my-2 flex flex-col items-stretch gap-2">
            {menus?.map((menu, i) => (
              <Link
                href={menu?.link}
                key={i}
                className={classNames({
                  'flex gap-2 text-red-100 hover:bg-red-500': true,
                  'transition-colors duration-300': true,
                  'mx-3 gap-4 rounded-md p-2': !collapsed,
                  'mx-3 h-10 w-10 rounded-full p-2': collapsed,
                })}
              >
                <div className="items-center">
                  {React.createElement(menu?.icon, { size: 24 })}
                </div>{' '}
                <span>{!collapsed && menu?.name}</span>
              </Link>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  )
}

