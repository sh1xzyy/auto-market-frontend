'use client'

import CarDetailsHeader from './CarDetailsHeader'
import CarPriceInfo from './CarPriceInfo'
import CarFinancing from './CarFinancing'
import CarContactActions from './CarContactActions'
import useWindowWidth from '@/hooks/useWindowWidth'
import { IoEyeSharp } from 'react-icons/io5'
import Link from 'next/link'
import { useState } from 'react'

const CarDetailsBasicInfo = ({
	data: {
		name,
		description,
		grossPrice,
		netPrice,
		rentPrice,
		phone,
		company,
		location: { country, postalCode, city },
	},
}) => {
	const { windowWidth } = useWindowWidth()
	const [isPhoneOpen, setIsPhoneOpen] = useState(false)

	return (
		<div className='p-lg font-bold bg-background-light-black lg:rounded-lg'>
			<CarDetailsHeader
				name={name}
				description={description}
				windowWidth={windowWidth}
			/>

			<CarPriceInfo grossPrice={grossPrice} netPrice={netPrice} />

			<CarFinancing rentPrice={rentPrice} />

			{windowWidth >= 1014 && <hr className='my-lg text-grey' />}

			<div className='mb-3md'>
				<Link href='/'>
					<span>{company}</span>
				</Link>

				<div className='text-md'>
					<span className='uppercase'>{country}-</span>
					<span>{postalCode}</span>
					&nbsp;
					<span>{city}</span>
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

			<CarContactActions phone={phone} windowWidth={windowWidth} />
		</div>
	)
}

export default CarDetailsBasicInfo
