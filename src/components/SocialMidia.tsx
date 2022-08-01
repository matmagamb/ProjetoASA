import { FacebookLogo, InstagramLogo, WhatsappLogo } from 'phosphor-react'
export function SocialMidia() {
    return (
        <div className='flex flex-col h-40 rounded-full justify-around bg-opacity-50 bg-zinc-400 fixed bottom-12 mx-5 px-2 py-4'>
            <a href="https://www.instagram.com/" target="_blank">
                <InstagramLogo size={30} color='#000' className='' />
            </a>

            <a href="" target="_blank" >
                <FacebookLogo size={30} color='#000' />
            </a>

            <a href="" target="_blank">
                <WhatsappLogo size={30} color='#000' />
            </a>
        </div>


    )
}