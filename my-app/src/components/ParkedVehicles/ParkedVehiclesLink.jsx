import Link from 'next/link'

const ParkedVehiclesLink = ({ label }) => {
	return (
		<Link
			className='text-md font-bold underline transition-colors linear duration-300 hover:text-light-white'
			href='/park'
		>
			{label}
		</Link>
	)
}

export default ParkedVehiclesLink
