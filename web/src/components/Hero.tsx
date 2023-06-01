import BoxesCanvas from './canvas/Boxes'

const Hero = () => {
  return (
    <div className={`relative mx-auto h-screen w-full`}>
      {/* Título do página */}
      <div
        className={`absolute inset-0 top-[12px] mx-auto flex max-w-7xl flex-row items-start gap-5 px-6 sm:px-24`}
      >
        <div>
          <h1
            className={`xs:text-[50px] mt-2 text-[40px] font-black text-black sm:text-[60px] lg:text-[80px] lg:leading-[98px]`}
          >
            R<span className="text-red-500">Fly</span>D
          </h1>
        </div>
      </div>
      {/* Caixa 3D */}
      <BoxesCanvas />
    </div>
  )
}

export default Hero
