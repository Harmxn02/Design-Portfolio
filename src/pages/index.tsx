import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

// components
import Nav from "@/components/navigation/nav";
import Intro from "@/components/intro/intro";
import About from "@/components/about/about";

export default function Home() {
	return (
		<div className="">
			<Nav />
			<Intro />
			<About />
		</div>
	);
}
