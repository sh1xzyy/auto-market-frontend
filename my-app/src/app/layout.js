import { Inter, Roboto } from 'next/font/google'
import '../styles/globals.css'

const inter = Inter({
	weight: ['400', '500', '600', '700'],
	variable: '--font-inter',
	subsets: ['latin'],
})

const roboto = Roboto({
	weight: ['400', '500', '600', '700'],
	variable: '--font-roboto',
	subsets: ['latin'],
})

export const metadata = {
	title: 'AutoMarket',
	icons: '/favicon.svg',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={`${inter.variable} ${roboto.variable} antialiased`}>
				{children}
			</body>
		</html>
	)
}
