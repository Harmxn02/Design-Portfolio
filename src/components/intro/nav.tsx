export default function Nav() {
	return (
		<div className=" sticky top-0 z-10 pt-12 text-white flex justify-between flex-col md:flex-row md:items-center">
            <div>
                <h1 className="font-dm text-tan text-3xl">Harman.</h1>
                <div className="flex mt-4 sm:mt-0 gap-4 flex-wrap">
                    <a className="text-greenish" href="#About">About</a>
                    <a className="text-greenish" href="#Services">Services</a>
                    <a className="text-greenish" href="#Journal">Journal</a>
                    <a className="text-greenish" href="#Contact">Contact</a>
                </div>
            </div>
            <div className="hidden md:inline">
                <a className="bg-accent px-8 py-4 rounded-md text-main text-md font-medium" href="#Contact">Contact Me</a>
            </div>
		</div>
	);
}
