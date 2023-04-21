import Nav from "./nav"

export default function Intro() {
    return (
        <>
            <div className="bg-main text-tan min-h-screen px-8 md:px-16 lg:px-36">
                <Nav/>

                <div className="mt-36">
                    <h2 className="text-2xl">Hello, I&apos;m Harman</h2>
                    <p className=" text-5xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-dm">I create marketing <br/> strategies for your <br/> business that get <br/> results.</p>
                </div>

                <div>
                    {/* SCROLL FOR MORE */}
                    <a href="Continue"></a>
                </div>

                {/* SCROLL CHECK
                <div className="bg-blue-400 min-h-screen">BLUE</div>
                <div className="bg-green-400 min-h-screen">GREEN</div>
                <div className="bg-red-400 min-h-screen">RED</div> */}
            </div>
        </>
    )
}