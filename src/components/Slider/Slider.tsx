import ReactTypingEffect from "react-typing-effect";

export const Slider = () => {
  return (
    <section className="flex w-full h-[500px]">
      <div className="w-full max-h-full bg-no-repeat bg-fixed bg-cover bg-center bg-[url(/src/public/assets/images/sliderbg.jpg)]">
        <div className="bg-black/50 flex flex-1 flex-col h-full">
          <div className="flex flex-col flex-1 w-full md:max-w-[50%] h-full justify-center p-6 md:p-24">
            <div className="mb-4">
              <span className="font-bold font-montserrat text-2xl md:text-3xl text-white">A melhor loja de Jordan</span>
            </div>
            <div>
              <span className="font-montserrat text-base md:text-lg text-white leading-loose">
                <ReactTypingEffect speed={50} typingDelay={0} staticText={"O tênis Jordan é fruto de"} text={"uma velha e forte parceria entre a Nike e o jogador Michael Jordan."} eraseSpeed={10} eraseDelay={99999} />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
