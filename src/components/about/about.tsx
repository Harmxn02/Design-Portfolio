import { FaLinkedin } from "react-icons/fa";

export default function About() {
	return (
		<div id="ABOUT" className="bg-main items-center text-tan min-h-screen mb-64 px-8 md:px-16 lg:px-28">
			<div className="lg:grid lg:grid-cols-2 pt-72 gap-4">
				<div id="about-header">
					<h2 className="text-2xl pb-4 text-accent">About</h2>
					<p className=" text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-dm max-w-[14ch]">
						An inspiring headline about yourself.
					</p>
				</div>
				<div className="text-xl sm:text-2xl 2xl:text-3xl  max-w-[40ch] font-light leading-10">
					<p className="pt-12">
						I&apos;m a second-year Computer Science major,
						specializing in Artificial Intelligence.
					</p>
					<p className="pt-8">
						I started programming in May of 2020, after discovering
						Harvard&apos;s CS50.
					</p>
				</div>
			</div>
			<div className="bg-accent mt-16 px-8 py-5 rounded-md max-w-fit text-tan text-md font-medium">
				<a
					href="https://www.linkedin.com/in/harmanpnahal/"
					target="_blank"
					rel="noreferrer"
					className="flex items-center justify-center text-sm md:text-lg"
				>
					<FaLinkedin className="mr-4 text-3xl" /> Find out more on my
					LinkedIn!
				</a>
			</div>

			<div className="mt-64 text-white text-4xl text-center">
				<p>This portfolio is not yet completed. Visit my current Portfolio here:	</p>
				<a href="https://harmanpsingh.vercel.app/" className="text-blue-500 underline">https://harmanpsingh.vercel.app/</a>
			</div>
		</div>
	);
}
