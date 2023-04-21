export default function Nav() {
	return (
		<div className=" sticky top-0 z-10 pt-12 text-white flex justify-between flex-col lg:flex-row">
            <div>
                <h1 className="font-dm text-tan text-3xl">Harman.</h1>
                <div className="flex gap-4">
                    <a className="text-greenish" href="#About">About</a>
                    <a className="text-greenish" href="#Services">Services</a>
                    <a className="text-greenish" href="#Journal">Journal</a>
                    <a className="text-greenish" href="#Contact">Contact</a>
                </div>
            </div>
            <div className="hidden lg:inline">
                <a className="bg-accent px-8 py-6 rounded-md text-main text-lg font-medium" href="#Contact">Let&apos;s work together</a>
            </div>
		</div>
	);
}
