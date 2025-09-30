import Link from 'next/link'

const FilterVehicleInsurance = ({ item }) => {
	return (
		<div className='lg:mb-lg'>
			<Link
				className='text-md font-bold text-dark-grey underline transition-colors linear duration-300 hover:text-light-white'
				href='/'
			>
				<span>
					Versicherung&nbsp;
					{item?.monthlyRate ? `ab ${item?.monthlyRate} € mtl.` : 'vergleichen'}
				</span>
			</Link>
		</div>
	)
}

export default FilterVehicleInsurance
