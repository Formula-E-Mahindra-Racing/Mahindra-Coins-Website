import mahindraLogoWhite from "../assets/mahindra racing logo_white.svg"

export default function Header() {
    return (
        <header className="flex w-full h-24">
            <section className="relative w-[15vw] h-[10vh]">
                <div className="absolute h-full -right-[1.5vw] w-[15vw] bg-[#b81d1a] -skew-x-[30deg] p-4 flex justify-center items-center">
                <div className="absolute -left-[2vw] bg-[#b81d1a] -z-10 w-[calc(100%-2vw)] h-full border-blue-500 skew-x-[30deg]"/>
                    <img
                        src={mahindraLogoWhite}
                        className="min-w-[12vw] skew-x-[30deg] absolute top-1/2 left-1/2 -translate-x-[calc(50%+1.5vw)] -translate-y-1/2 border-blue-500"
                    />
                </div>
            </section>
        </header>
    )
}
