import Title from '../common/Title/Title'
import ContentCard from '../common/ContentCard/ContentCard'
import Container from '../common/Container/Container'
import ParkedVehiclesList from './ParkedVehiclesList'
import ParkedVehiclesLink from './ParkedVehiclesLink'

const ParkedVehicles = () => {
	return (
		<Container>
			<ContentCard>
				<div className='flex justify-between items-center mb-lg'>
					<Title title='Geparkte Fahrzeuge' />
					<ParkedVehiclesLink label='Alle anzeigen' />
				</div>

				<ParkedVehiclesList />
			</ContentCard>
		</Container>
	)
}

export default ParkedVehicles
