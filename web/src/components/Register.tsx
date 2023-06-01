import { MyForm } from './MyForm'

const Register = () => {
  return (
    <div className="h-screen w-full">
      {/* Título do página */}
      <div className="flex h-auto w-full flex-col justify-start px-6 text-start sm:px-24">
        <div>
          <h1 className="xs:text-[40px] text-[30px] font-semibold text-black sm:text-[50px] md:text-[60px]">
            Cadastro
          </h1>
        </div>
      </div>

      {/* Informações do Produto */}
      <div className="container mx-auto my-auto">
        <div className="my-4 flex rounded-3xl">
          {/* Caracteristicas do produto */}
          <div className="mx-10 w-4/5 rounded-3xl border border-zinc-200 bg-gray-100 px-10 py-11 shadow-2xl">
            <MyForm />
          </div>
          {/* Dropzone para imagem */}
          <div className="mr-10 flex w-2/5 items-center justify-center rounded-3xl border border-zinc-200 bg-gray-100 px-16 py-14 shadow-2xl">
            <label
              htmlFor="dropzone-file"
              className="dark:hover:bg-bray-800 flex h-64 w-full cursor-pointer flex-col items-center justify-center rounded-lg border-2 border-dashed border-gray-300 bg-gray-50 hover:bg-gray-100 dark:border-gray-300 dark:bg-gray-200 dark:hover:border-gray-400 dark:hover:bg-gray-300"
            >
              <div className="flex flex-col items-center justify-center pb-6 pt-5">
                <svg
                  aria-hidden="true"
                  className="mb-3 h-10 w-10 text-gray-400"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
                  ></path>
                </svg>
                <p className="mb-2 text-sm text-gray-500 dark:text-gray-400">
                  <span className="font-semibold">Click to upload</span> or drag
                  and drop
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  SVG, PNG, JPG (MAX. 800x400px)
                </p>
              </div>
              <input id="dropzone-file" type="file" className="hidden" />
            </label>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register
