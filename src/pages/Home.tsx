import { Header } from "../components/Header";
import { InicialBanner } from "../components/InicialBanner";
import { SocialMidia } from "../components/SocialMidia";


import Personal from "../assets/Personal.png";
import Jump from "../assets/Jump.png";
import Punch from "../assets/Punch.png";
import Chess from "../assets/chess.png";
import Pilarone from "../assets/Pilarone.png";
import Pilartwo from "../assets/Pilartwo.png";
import Pilarthree from "../assets/pilarthree.png";
import Pilarfour from "../assets/Pilarfour.png";
import Hand from "../assets/hand.png";

import { alunos } from "../teste/teste";

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
                        <div className="mb-16 mt-10">

                            <h1 className="text-3xl font-bold">LOREN IPSUN</h1>
                            <span className="text-2xl font-normal tracking-tighter leading-7 ">Personal trainer & Personal Fight</span>
                        </div>
                        <p className="text-md font-medium">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet,


                        </p>
                        <div className="mt-20 hover:scale-105 transition-all">
                            <a href="#" className="text-xl text-zinc-50 font-normal border rounded-full bg-[#FF5A29] py-1 px-7">Ver planos
                            </a>
                        </div>
                    </div>
                </article>
            </section>

            <section className="flex flex-col justify-center items-center h-[700px] ">
                <div className="w-[900px]">

                    <div className="flex">
                        <img src={alunos.Aluno1.imageURL} alt="" className="w-[100px] rounded-full border-2 border-gray-600" />
                        <div className="ml-8">
                            <h1 className="text-5xl font-semibold text-[#FF6F29] ">{alunos.Aluno1.nome}</h1>
                            <span className="text-3xl font-light leading-8">{alunos.Aluno1.function}</span>
                        </div>
                    </div>

                    <article className="mt-12">
                        <p className="break-words">{alunos.Aluno1.descrip}</p>
                    </article>

                </div>
            </section>

            <section className="flex  justify-around items-center h-[800px] bg-[#FF5A29] " >
                <div>
                    <img src={Chess} alt="" />
                </div>

                <article className="pt-16 w-[700px] h-[500px] text-zinc-100">
                    <div className="mb-16 mt-10">

                        <h1 className="text-3xl font-bold">Proposito</h1>
                        <span className="text-2xl font-light tracking-tighter leading-7 ">Porque fazemos oque fazemos</span>
                    </div>
                    <p className="text-md font-normal">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed accumsan, nisi nec sodales pulvinar, metus erat sollicitudin massa, placerat blandit lorem est imperdiet est. Proin ultrices magna vel mi commodo finibus. Nulla urna ex, imperdiet ut bibendum et, auctor sed mauris. Donec tempus a dolor in porttitor. Quisque ultrices, arcu in viverra vulputate, mi metus posuere mauris, non porttitor justo massa et mi. Donec dignissim nibh dui, et commodo risus lacinia ac. Lorem ipsum dolor sit amet,</p>
                </article>
            </section>


            

        </>
    )
}