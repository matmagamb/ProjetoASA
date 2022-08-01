import { Header } from "../components/Header";
import { InicialBanner } from "../components/InicialBanner";
import { SocialMidia } from "../components/SocialMidia";
import Personal from "../assets/Personal.png";
import Jump from "../assets/Jump.png";
import Punch from "../assets/Punch.png";

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
                        className=" h-[702px] min-w-[544px] border-4 border-dashed " />
                </div>

                <article className="max-w-[500px] min-w-[500px] max-h-[700px] flex flex-col justify-start ">

                    <div className="pb-16 pt-36 " >
                        <img src={Personal} alt="texto Personal Trainer Online" />

                    </div>
                    <p className="text-md font-medium ">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet,


                    </p>
                </article>

            </section>

            <section className="flex bg-[#E8E8E8]">
                <div className="">
                    <img src={Punch} alt="" className="" />
                </div>
                <article className="flex flex-1 justify-center items-center" >

                    <div className="w-[500px] h-[500px] ">
                        <div className="mb-8 mt-20">

                            <h1 className="text-3xl font-bold">LOREN IPSUN</h1>
                            <span className="text-2xl font-normal tracking-tighter leading-7 ">Personal trainer & Personal Fight</span>
                        </div>
                        <p className="text-md font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet,


                        </p>
                    </div>
                </article>

            </section>


        </>
    )
}