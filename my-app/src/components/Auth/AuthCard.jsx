'use client'

import AuthDealerLink from './AuthDealerLink'
import AuthTabs from './AuthTabs'
import AuthTitle from './AuthTitle'
import Divider from './Divider'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'
import SocialAuthButtons from './SocialAuthButtons'
import { useState } from 'react'

const AuthCard = () => {
	const [activeIndex, setActiveIndex] = useState(0)

	return (
		<div>
			<div className='mb-1xl bg-background-light-black border border-grey md:rounded-lg md:border md:border-grey'>
				<AuthTabs activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
				<div className='p-1xl md:p-3xl'>
					<AuthTitle
						title={
							activeIndex === 0
								? 'Hallo! Willkommen zurück!'
								: 'Erstelle Dein mobile.de Konto!'
						}
					/>
					<SocialAuthButtons
						googleLabel={
							activeIndex === 0
								? 'Mit Google anmelden'
								: 'Mit Google registrieren'
						}
						appleLabel={
							activeIndex === 0
								? 'Mit Apple anmelden'
								: 'Mit Apple registrieren'
						}
					/>
					<Divider />

					{activeIndex === 0 ? <LoginForm /> : <RegisterForm />}
				</div>
			</div>

			<AuthDealerLink
				href='/'
				label={
					activeIndex === 0 ? 'Zum Händler-Login' : ' Zur Händler-Registrierung'
				}
			/>
		</div>
	)
}

export default AuthCard
