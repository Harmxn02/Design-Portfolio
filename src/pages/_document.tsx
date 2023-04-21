import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
	return (
		<Html lang="en">
			<Head>
				<link rel="manifest" href="/manifest.json" />
				<meta name="theme-color" content="#000000" />
				<meta
					name="description"
					content="Harman Singh's Developer Portfolio"
				/>
				<link rel="icon" href="/favicon.ico" />
				<link rel="apple-touch-icon" href="/NAME_192.png" />
			</Head>
			<body>
				<Main />
				<NextScript />
			</body>
		</Html>
	);
}
