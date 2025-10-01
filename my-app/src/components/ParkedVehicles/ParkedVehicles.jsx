import ContentCard from '../common/ContentCard/ContentCard'
import Container from '../common/Container/Container'
import ParkedVehiclesList from './ParkedVehiclesList'
import ParkedVehiclesHeader from './ParkedVehiclesHeader'

const ParkedVehicles = () => {
	return (
		<Container>
			<ContentCard className='lg:p-xl'>
				<ParkedVehiclesHeader />
				<ParkedVehiclesList />
			</ContentCard>
		</Container>
	)
}

export default ParkedVehicles
