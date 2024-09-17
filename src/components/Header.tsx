import mahindraLogoWhite from "../assets/mahindra racing logo_white.svg"
import mahindraLogoMobile from "../assets/mahindra-logo-mobile.png"

export default function Header() {
    return (
        <header className="fixed flex w-dvw h-[10vh]">
            <section className="relative w-[15vw] max-h-[120px]">
                <div className="flex absolute h-[100px] sm:h-full sm:-right-[2vw] min-w-[65px] w-[17.5vw] sm:w-[15vw] bg-[#b81d1a] sm:-skew-x-[30deg] p-4 justify-center items-center">
                <div className="hidden sm:flex absolute -left-[2vw] bg-[#b81d1a] -z-10 w-[calc(100%-2vw)] h-full border-blue-500 sm:skew-x-[30deg]"/>
                    <img
                        src={mahindraLogoWhite}
                        className="hidden sm:block min-w-[12vw] skew-x-[30deg] max-h-[60px] absolute top-1/2 left-1/2 -translate-x-[calc(50%+1.5vw)] -translate-y-1/2 border-blue-500"
                    />
                    <img
                        src={mahindraLogoMobile}
                        className="w-[50px] sm:hidden absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 border-blue-500"
                    />
                </div>
            </section>
        </header>
    )
}
