import { IoLocationOutline } from 'react-icons/io5'

const VehicleCardLocation = ({ location }) => {
	return (
		<div className='flex items-center gap-sm text-sm text-dark-grey'>
			<IoLocationOutline size={16} />
			{location ? (
				<>
					<span>{location?.index}</span>
					<span>{location?.city}</span>
				</>
			) : (
				'Without location'
			)}
		</div>
	)
}

export default VehicleCardLocation
