import '../assets/fonts/gilroy/stylesheet.css'
import '../styles/variables.css'
import '../styles/global.css'
import Head from 'next/head'
import Footer from '../components/shop/Footer'


function MyApp({ Component, pageProps }) {
	return (
		<div>
			<Head>
				<title>Jalabiya - Ecom</title>
				<link rel='icon' type='image/png' href='/favicon.png'></link>
			</Head>
			<Component {...pageProps} />

			<Footer />

		</div>
	)
}

export default MyApp
