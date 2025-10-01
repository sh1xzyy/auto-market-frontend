import Title from '../common/Title/Title'
import ParkedVehiclesLink from './ParkedVehiclesLink'

const ParkedVehiclesHeader = () => {
	return (
		<div className='flex justify-between items-center mb-lg'>
			<Title className='text-xl' title='Geparkte Fahrzeuge' />
			<ParkedVehiclesLink label='Alle anzeigen' />
		</div>
	)
}

export default ParkedVehiclesHeader
