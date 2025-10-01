'use client'

import { useRouter } from 'next/navigation'

const FilterVehicleInsurance = ({ item }) => {
	const router = useRouter()

	return (
		<div className='lg:mb-lg'>
			<span
				className='text-md font-bold text-dark-grey underline transition-colors linear duration-300 hover:text-light-white'
				onClick={() => router.push('/')}
			>
				<span>
					Versicherung&nbsp;
					{item?.monthlyRate ? `ab ${item?.monthlyRate} € mtl.` : 'vergleichen'}
				</span>
			</span>
		</div>
	)
}

export default FilterVehicleInsurance
