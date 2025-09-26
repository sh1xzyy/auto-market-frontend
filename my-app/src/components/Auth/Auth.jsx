import { adventures } from './adventures.data'
import BenefitsList from './BenefitsList'
import AuthCard from './AuthCard'

const Auth = () => {
	return (
		<div className='md:grid md:grid-cols-2 md:gap-2lg'>
			<AuthCard />

			<BenefitsList
				title='Deine Vorteile mit einem mobile.de Konto'
				adventures={adventures}
			/>
		</div>
	)
}

export default Auth
