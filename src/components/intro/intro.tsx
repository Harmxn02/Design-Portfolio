import { ArrowDownIcon } from "@heroicons/react/24/outline";

export default function Intro() {
	return (
		<>
			<div className="bg-main text-tan px-8 md:px-16 lg:px-28">

				<div>
					{/* LEFT PART */}
					<div className="mt-36">
						<h2 className="text-2xl pb-4">Hello, I&apos;m Harman</h2>
						<p className=" text-4xl sm:text-6xl md:text-6xl lg:text-7xl xl:text-8xl font-dm max-w-[17ch]">
							I create websites and ML models on the internet
						</p>
					</div>

					<div className="mt-12 flex gap-4 items-center">
						{/* SCROLL FOR MORE */}
						<div className="border rounded-3xl border-accent p-3">
							<ArrowDownIcon className="h-4" />
						</div>
						<a href="" className="text-xl font-light">
							Scroll for more
						</a>
					</div>
				</div>

				{/* SCROLL CHECK
                <div className="bg-blue-400 min-h-screen">BLUE</div>
                <div className="bg-green-400 min-h-screen">GREEN</div>
                <div className="bg-red-400 min-h-screen">RED</div> */}
			</div>
		</>
	);
}
