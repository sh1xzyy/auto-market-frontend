'use client'

import { useState } from 'react'
import { Field } from 'formik'
import { FaRegEyeSlash, FaRegEye } from 'react-icons/fa6'

const PasswordField = () => {
	const [isPasswordOpen, setIsPasswordOpen] = useState(false)

	return (
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
	)
}

export default PasswordField
