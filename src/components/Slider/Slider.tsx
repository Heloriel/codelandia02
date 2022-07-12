export const Slider = () => {
  return (
    <section className="flex w-full h-[377px] bg-gray-600" style={{ background: "url(/public/assets/images/sliderbg.jpg) center no-repeat", backgroundSize: "cover" }}>
      <div className="bg-black/50 flex flex-1 flex-col">
        <div className="flex flex-col flex-1 w-full md:max-w-[50%] h-full justify-center p-6 md:p-24">
          <div className="mb-4">
            <span className="font-bold font-montserrat text-2xl md:text-3xl text-white">A melhor loja de Jordan</span>
          </div>
          <div>
            <span className="font-montserrat text-base md:text-lg text-white leading-loose">O tênis Jordan é fruto de uma velha e forte parceria entre a Nike e o jogador Michael Jordan.</span>
          </div>
        </div>
      </div>
    </section>
  );
};
