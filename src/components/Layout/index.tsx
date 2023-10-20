import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Header from "./header";
import Footer from "./footer";

interface PropsType {
    children: React.ReactNode;
}

const Layout = ({
    children
}: PropsType) => {
    const [scrollPosition, setScrollPosition] = useState(0);

    const pathname = usePathname()

    const handleScroll = () => {
        const position = window.scrollY;
        setScrollPosition(position);
    };

    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: "smooth",
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll, { passive: true });
    
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);
    
    return (
        <div className="relative">
            {pathname !== "/" && <Header />}
            <main>{children}</main>
            {pathname !== "/" && <Footer />}

            <div className={`${scrollPosition !== 0 ? "flex" : "hidden"} fixed bottom-8 right-14 hover:cursor-pointer z-[100]`} onClick={scrollToTop}>
                <img className="w-12 animate-bounce" src="/assets/images/top_arrow.png" alt="arrow"/>
            </div>
        </div>
    )
}

export default Layout;