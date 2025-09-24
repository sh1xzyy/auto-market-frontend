'use client'

import Link from 'next/link'
import { IoEyeSharp } from 'react-icons/io5'
import { useState } from 'react'

const CarSellerInfo = ({ company, phone, location }) => {
	const [isPhoneOpen, setIsPhoneOpen] = useState(false)

	return (
		<div className='mb-3md'>
			<Link href='/'>
				<span>{company}</span>
			</Link>

			<div className='text-md'>
				<span className='uppercase'>{location?.country}-</span>
				<span>{location?.postalCode}</span>
				&nbsp;
				<span>{location?.city}</span>
			</div>

			<div className='flex mt-lg'>
				<span>
					Tel: {!isPhoneOpen ? phone.slice(0, -4) + '.... ...' : phone}
				</span>
				{!isPhoneOpen && (
					<button
						className='flex items-center gap-sm underline text-light-orange transition-colors linear duration-300 hover:text-dark-orange'
						type='button'
						onClick={() => setIsPhoneOpen(true)}
					>
						<IoEyeSharp size={16} />
						<span className='text-md'>Einblenden</span>
					</button>
				)}
			</div>
		</div>
	)
}

export default CarSellerInfo
