import styles from './styles.module.css'
import Snackbar from '../components/SnackBar'
import Navbar from '../components/Navbar'

export default function Refund() {
	return (
		<div id='home' className={styles['home']}>
			<Snackbar message=' 🎉  Flat ₹2499 off for first 50 people!' />
			<Navbar />
			<div id='memberships' className='margin'>
				<section className={styles['pricing']}>
					<div className={styles['heading-wrapper']}>
						<br />
						<h2>Refund & Cancellation</h2>
					</div>
					<p>
						<b>1.</b> Full payment to be made at time of purchase. <br />
						<br />
						<b>2.</b> Once purchased, no partial or full refund will be provided, unless there is an
						exceptional circumstance which will be decided by Jalabiya on a case to case basis <br />
						<br />
						<b>3.</b> Jalabiya does not store any of your payment information (debit card, credit card, net
						banking, etc.) or such other information restricted by the Reserve Bank of India (RBI) for
						processing payment and has partnered with payment gateways for the payment towards the services
						In case of any other payment, refund or cancellation issues, decisions will be taken on a case
						by case basis and Jalabiya&apos;s decision will be final and binding. <br />
						<br />
						<b>4.</b> For any concerns related to payment or refunds, kindly write to
						helloJalabiya@gmail.com <br />
						<br />
					</p>
					<br />
					<br />
				</section>
			</div>
		</div>
	)
}
