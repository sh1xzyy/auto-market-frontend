import { IoLocationOutline } from 'react-icons/io5'

const CarCardLocation = ({ location }) => {
	return (
		<div className='flex items-center gap-sm text-sm text-dark-grey'>
			<IoLocationOutline size={16} />
			<span>{location?.index}</span>
			<span>{location?.city}</span>
		</div>
	)
}

export default CarCardLocation
