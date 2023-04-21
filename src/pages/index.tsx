import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"] });


// components
import Intro from "@/components/intro/intro";

export default function Home() {
	return (
		<>
			<Intro/>
		</>
	);
}
