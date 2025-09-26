'use client'

import { Field, Form, Formik } from 'formik'
import Link from 'next/link'
import { useState } from 'react'
import { FaRegEye, FaRegEyeSlash } from 'react-icons/fa6'
import AuthSubmitButton from './AuthSubmitButton'

const LoginForm = () => {
	const [isPasswordOpen, setIsPasswordOpen] = useState(false)

	return (
		<Formik
			initialValues={{ email: '', password: '' }}
			onSubmit={(values, actions) => {
				console.log(values)
				actions.resetForm()
			}}
		>
			{() => (
				<Form>
					<div className='mb-2lg'>
						<label className='block mb-sm text-md font-bold' htmlFor='email'>
							E-Mail-Adresse
						</label>
						<Field
							className='px-2lg h-[56px] border border-super-grey rounded-md w-full sm:px-lg sm:py-2md sm:h-[44px] sm:text-md transition-colors linear duration-300 hover:border-dark-white'
							type='text'
							name='email'
							id='email'
						/>
					</div>
					<div className='mb-md'>
						<label className='block mb-sm text-md font-bold' htmlFor='password'>
							Passwort
						</label>
						<div className='relative'>
							<Field
								className='px-2lg h-[56px] border border-super-grey rounded-md w-full sm:px-lg sm:py-2md sm:h-[44px] sm:text-md transition-colors linear duration-300 hover:border-dark-white'
								type={isPasswordOpen ? 'text' : 'password'}
								name='password'
								id='password'
							/>
							<button
								className='absolute top-1/2 right-[18px] -translate-y-1/2'
								type='button'
								onClick={() => setIsPasswordOpen(prev => !prev)}
							>
								{isPasswordOpen ? (
									<FaRegEyeSlash size={16} />
								) : (
									<FaRegEye size={16} />
								)}
							</button>
						</div>
					</div>

					<Link className='block text-md font-bold underline mb-2lg' href='/'>
						Passwort vergessen?
					</Link>

					<AuthSubmitButton label='Anmelden' />
				</Form>
			)}
		</Formik>
	)
}

export default LoginForm
