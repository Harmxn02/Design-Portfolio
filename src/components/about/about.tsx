import { FaLinkedin } from "react-icons/fa";

export default function About() {
	return (
		<div
			id="ABOUT"
			className="bg-main items-center text-tan min-h-screen mb-64 px-8 md:px-16 lg:px-28"
		>
			<div className="lg:grid lg:grid-cols-2 pt-72 gap-4">
				<div id="about-header">
					<h2 className="text-2xl pb-4 text-accent">About</h2>
					<div className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-dm max-w-[14ch]">
						<p>
							&apos;&apos;ML aficionado&apos;&apos;
						</p>
						<span className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl">
							- ChatGPT
						</span>
					</div>
				</div>
				<div className="text-xl sm:text-2xl 2xl:text-4xl font-dm max-w-[40ch] font-light leading-10">
					<p className="pt-12">
						I started programming in 2020
					</p>
					<p className="pt-8">
						Currently I&apos;m a second-year Computer Science major,
						specializing in Artificial Intelligence.
					</p>
				</div>
			</div>
			<div className="bg-accent mt-8 px-8 py-5 rounded-md max-w-fit text-tan text-md font-medium">
				<a
					href="https://www.linkedin.com/in/harmanpnahal/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center text-main text-sm md:text-lg font-ubuntu"
				>
					<FaLinkedin className="mr-4 text-3xl" /> Find out more on my
					LinkedIn!
				</a>
			</div>

			<div className="mt-64 text-white font-ubuntu font-bold  md:text-4xl text-center">
				<p>
					This portfolio is not yet completed. Visit{" "}
					<a
						href="https://harmanpsingh.vercel.app/"
						title="My Current Portfolio"
						className="text-blue-500 hover:animate-pulse underline underline-offset-4"
					>
						my current Portfolio
					</a>{" "}
					here{" "}
				</p>
			</div>
		</div>
	);
}
