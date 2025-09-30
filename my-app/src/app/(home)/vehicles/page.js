import FilterVehicleCard from '@/components/common/FilterVehicleCard/FilterVehicleCard'
import { carsData } from './carsData.data'
import Container from '@/components/common/Container/Container'

const Page = () => {
	return (
		<section>
			<Container>
				{carsData?.map((item, i) => (
					<FilterVehicleCard key={i} item={item} />
				))}
			</Container>
		</section>
	)
}

export default Page
