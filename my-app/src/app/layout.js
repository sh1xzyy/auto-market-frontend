import { Inter, Roboto } from 'next/font/google'
import '../styles/globals.css'
import Header from '@/components/Header/Header'

const roboto = Roboto({
	weight: ['400', '500', '600', '700', '800', '900'],
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
			<body className={`${roboto.variable} antialiased`}>
				<Header />
				{children}
			</body>
		</html>
	)
}
