import { Header } from "../components/Header";
import { InicialBanner } from "../components/InicialBanner";
import { SocialMidia } from "../components/SocialMidia";

export function Home() {
    return (
        <>
            <Header />
            <SocialMidia />
            <InicialBanner />
            <section className=" bg-white flex flex-auto justify-around my-20 ">
                
                <div className=" flex h-[70vh]">
                    <img src="src/assets/Jump.png" alt="mulher fazendo exercicio" className="border-4 border-dashed" />
                </div>
               
                <article className="max-w-[32vw] max-h-[70vh] flex flex-col justify-start ">
                    
                    <div className="pb-16 pt-36 " >
                       <img src="src\assets\PersonaltrainerOnline.png" alt="texto Personal Trainer Online" />

                    </div>
                    <p className="text-md font-medium ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet, 


                    </p>
                </article>

            </section>

            
        </>
    )
}