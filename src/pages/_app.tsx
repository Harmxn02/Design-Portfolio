import "@/styles/globals.css";
import type { AppProps } from "next/app";

import { useEffect } from "react";

export default function App({ Component, pageProps }: AppProps) {
	useEffect(() => {
		if ("serviceWorker" in navigator) {
			window.addEventListener("load", () => {
				navigator.serviceWorker
					.register("/sw.js")
					.then((registration) =>
						console.log("Service worker registered")
					)
					.catch((error) =>
						console.error("Error registering service worker", error)
					);
			});
		}
	}, []);

	return <Component {...pageProps} />;
}
