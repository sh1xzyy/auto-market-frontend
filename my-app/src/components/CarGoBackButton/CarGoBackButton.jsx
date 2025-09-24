'use client'

import { useRouter } from 'next/navigation'
import { FaArrowLeft } from 'react-icons/fa6'

const CarGoBackButton = () => {
	const router = useRouter()

	return (
		<button
			className='flex items-center gap-sm py-lg hover:underline'
			type='button'
			onClick={() => router.back()}
		>
			<FaArrowLeft color="var('')" size={16} />
			<span className='text-md text-dark-grey font-bold'>
				Zurück zu den Suchergebnissen
			</span>
		</button>
	)
}

export default CarGoBackButton
