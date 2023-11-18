import { BsFacebook, BsInstagram, BsTwitter, BsYoutube } from 'react-icons/bs'
import Link from 'next/link'
import styles from './footer.module.css'

export default function Footer() {
	return (
		<footer className={styles['footer']}>
			<div className={styles['top']}>
				<div className={styles['left']}>
					<Link href='/' passHref >
						{/* <img style={{visibility:'hidden'}} className={styles['logo']} src='/images/logo-white.svg' height='32px' width='auto' /> */}
						<h3 style={{fontSize:'30px',color:'#fff',fontWeight:'800'}}>JALABIYA</h3> 
					</Link>
					{/* <span className={styles['copyright']}>&copy; 2022 - All rights reserved</span> */}
				</div>
				<div className={styles['right']}>
					<div className={styles['link-group']}>
						<h3>Site</h3>
						<ul>
							<li>
								<Link href='/'>
									<a>Home</a>
								</Link>
							</li>
							<li>
								<Link href='/about'>
									<a>About us</a>
								</Link>
							</li>
							<li>
								<Link href='/#memberships'>
									<a>Memberships</a>
								</Link>
							</li>
							<li>
								<Link href='/#faqs'>
									<a>FAQs</a>
								</Link>
							</li>
						</ul>
					</div>

					<div className={styles['link-group']}>
						<h3>Social</h3>
						<ul>
							<li>
								<a
									href='#'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsInstagram className={styles['social-icon']} />
										<span>Instagram</span>
									</div>
								</a>
							</li>
							<li>
								<a
									href='#'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsYoutube className={styles['social-icon']} />
										<span>Youtube</span>
									</div>
								</a>
							</li>
							<li>
								<a
									href='#'
									rel='noreferrer'
									target='_blank'
								>
									<div className={styles['social-wrapper']}>
										<BsFacebook className={styles['social-icon']} />
										<span>Facebook</span>
									</div>
								</a>
							</li>
							<li>
								<a href='#' rel='noreferrer' target='_blank'>
									<div className={styles['social-wrapper']}>
										<BsTwitter className={styles['social-icon']} />
										<span>Twitter</span>
									</div>
								</a>
							</li>
						</ul>
					</div>
					<div className={styles['link-group']}>
						<h3>Company</h3>
						<ul>
							<li>
								<Link href='/privacy-policy'>
									<a>Privacy Policy</a>
								</Link>
							</li>
							<li>
								<Link href='/terms-of-service'>
									<a>Terms of Service</a>
								</Link>
							</li>
							<li>
								<Link href='/payment-refund-and-cancellation-policy'>
									<a>Refund &amp; Cancellation</a>
								</Link>
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className={styles['bottom']}>
				<p>Build with ❤️ for 🇮🇳 </p>
			</div>
		</footer>
	)
}
