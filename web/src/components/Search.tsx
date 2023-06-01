import { BsSearch } from 'react-icons/bs'

const Search = () => {
  return (
    <div className="h-screen w-full">
      {/* Título do página */}
      <div className="flex h-auto w-full flex-col justify-start px-6 text-start sm:px-24">
        <div>
          <h1 className="xs:text-[40px] text-[30px] font-semibold text-black sm:text-[50px] md:text-[60px]">
            Pesquisa
          </h1>
        </div>
      </div>
      {/* Input de pesquisa */}
      <div className="flex h-[calc(100vh-220px)] w-full flex-col items-center justify-center">
        <p className="mb-2 text-center font-medium leading-relaxed">
          Digite o código do produto:
        </p>
        <div className="h-auto w-11/12 rounded-2xl border border-zinc-400 p-2 shadow-2xl md:w-8/12 xl:w-1/2">
          <section className="flex h-8 w-full items-center">
            <span className="flex h-full w-8 items-center">
              {' '}
              <BsSearch size={20} />{' '}
            </span>
            <input
              type="text"
              className="h-full w-full placeholder-gray-400 focus:outline-none md:pl-2"
              placeholder="Ex: dkgalkghafugh"
              required
            />
            <button
              type="submit"
              className="flex h-full w-28 items-center justify-center rounded-xl border border-red-400 bg-red-400 font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500"
            >
              search
            </button>
          </section>
        </div>
      </div>
    </div>
  )
}

export default Search
