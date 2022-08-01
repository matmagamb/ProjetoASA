import { Header } from "../components/Header";
import { InicialBanner } from "../components/InicialBanner";
import { SocialMidia } from "../components/SocialMidia";
import Personal from "../assets/Personal.png";
import Jump from "../assets/Jump.png";

export function Home() {
    return (
        <>
            <Header />
            <SocialMidia />
            <InicialBanner />
            <section className=" bg-white flex justify-around pt-20  pb-20 ">

                <div className="">
                    <img
                        src={Jump}
                        alt="mulher fazendo exercicio"
                        className=" h-[70vh] border-4 border-dashed " />
                </div>

                <article className="max-w-[32vw] max-h-[70vh] flex flex-col justify-start ">

                    <div className="pb-16 pt-36 " >
                        <img src={Personal} alt="texto Personal Trainer Online" />

                    </div>
                    <p className="text-md font-medium ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet,


                    </p>
                </article>

            </section>


        </>
    )
}