import { useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const Header = () => {
    const [isMenu, setMenu] = useState<boolean>(false);
    const router = useRouter();
    const pathname = router.pathname;

    return (
        <header className="md:h-[130px] h-[100px] w-full lg:pl-[94px] lg:pr-[77px] pr-[30px] fixed bg-gold flex justify-between font-Mont items-center z-50">
            <Link href={'/#'} className="h-full lg:w-[132px] w-[83px] min-w-[83px] ml-4 flex justify-center items-center">
                <img src="assets/logo.png"/>
            </Link>

            <div className="lg:hidden flex gap-x-12 items-center">
                {/* <Link href={"https://www.linkedin.com/posts/social-aviators_socialaviator-influencermarketingsolutions-activity-7092100514003206144-Ccja/"}>
                    <img className="w-[18px]" src="/assets/icons/linkedin.png" />
                </Link>
                <Link href={"https://www.instagram.com/socialaviators/"}>
                    <img className="w-5" src="/assets/icons/instagram.png" />
                </Link> */}
                <Link href={""}><img src="/assets/svg/whatsapp.svg"/></Link>
                <Link href={""} onClick={() => setMenu(prev => !prev)}><img src="/assets/svg/menu.svg"/></Link>
            </div>

            <div className={`${!isMenu ? "-left-[calc(100%+20px)]" : "left-0"} w-[100vw] h-[100vh] fixed top-[130px] text-xl font-extrabold bg-gold transition-all duration-300 flex flex-col pt-[120px] gap-y-10 items-center uppercase text-secondary`}>
                <Link onClick={() => setMenu(false)} className="" href={"/home"}>home</Link>
                <Link onClick={() => setMenu(false)} className="" href={"/about"}>about</Link>
                <Link onClick={() => setMenu(false)} className="" href={"/services"}>services</Link>
                <Link onClick={() => setMenu(false)} className=""href={"/work/"}>work</Link>
                <Link onClick={() => setMenu(false)} className="" href={"/contact"}>contact</Link>                
            </div>

            <div className="lg:flex hidden justify-between gap-x-[37px] uppercase text-[15px] items-center font-semibold tracking-widest">
                <Link className={`${pathname === '/home' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/home"}>home</Link>
                <Link className={`${pathname === '/about' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/about"}>about</Link>
                <Link className={`${pathname === '/services' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/services"}>services</Link>
                {/* <Link className={`${pathname === '/work' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/work"}>work</Link> */}
                <Link className={`${pathname === '/contact' ? 'text-secondary' : 'text-black'} hover:text-secondary transition-all`} href={"/contact"}>contact</Link>

                <Link href={'/contact'} className="flex items-center justify-center bg-secondary w-[200px] h-[44px] text-white uppercase tracking-widest">
                    Talk To Expert
                </Link>
                {/* <Link href={"https://www.linkedin.com/posts/social-aviators_socialaviator-influencermarketingsolutions-activity-7092100514003206144-Ccja/"}>
                    <img className="w-[18px]" src="/assets/icons/linkedin.png" />
                </Link>
                <Link href={"https://www.instagram.com/socialaviators/"}>
                    <img className="w-5" src="/assets/icons/instagram.png" />
                </Link> */}
            </div>
        </header>
    )
}

export default Header;