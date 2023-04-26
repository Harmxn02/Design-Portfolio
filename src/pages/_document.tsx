import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en" className="scroll-smooth">
			<title>Harman Singh</title>
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Harman Singh's Developer Portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/NAME_192.png" />

				<link rel="preconnect" href="https://fonts.googleapis.com" />
				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=DM+Serif+Display:ital@0;1&display=swap"
					rel="stylesheet"
				/>
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
