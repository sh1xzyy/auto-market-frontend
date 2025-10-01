import FilterVehicleCard from '@/components/common/FilterVehicleCard/FilterVehicleCard'
import { carsData } from './carsData.data'
import SearchPanel from '@/components/SearchPanel/SearchPanel'

const Page = () => {
	return (
		<>
			<section className='mb-lg'>
				<SearchPanel />
			</section>
			<section className='mb-lg'>
				{carsData?.map((item, i) => (
					<FilterVehicleCard key={i} item={item} />
				))}
			</section>
		</>
	)
}

export default Page
