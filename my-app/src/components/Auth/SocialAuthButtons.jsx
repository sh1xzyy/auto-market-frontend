'use client'

import { DiApple } from 'react-icons/di'
import { FcGoogle } from 'react-icons/fc'

const SocialAuthButtons = ({ googleLabel, appleLabel }) => {
	return (
		<div className='flex flex-col gap-md mb-md'>
			<button
				className='flex items-center justify-center gap-2sm py-2lg px-xl border-2 border-super-light-violet  rounded-md text-super-violet sm:px-lg sm:py-2md sm:h-[44px] transition-colors linear duration-300 hover:border-light-violet'
				type='button'
				onClick={() => console.log(googleLabel)}
			>
				<FcGoogle size={18} />
				<span className='font-bold sm:text-md'>{googleLabel}</span>
			</button>
			<button
				className='flex items-center justify-center gap-2sm py-2lg px-xl border-2 border-super-light-violet  rounded-md text-super-violet sm:px-lg sm:py-2md sm:h-[44px] transition-colors linear duration-300 hover:border-light-violet'
				type='button'
				onClick={() => console.log(appleLabel)}
			>
				<DiApple color='var(--color-light-white)' size={18} />
				<span className='font-bold sm:text-md'>{appleLabel}</span>
			</button>
		</div>
	)
}

export default SocialAuthButtons
