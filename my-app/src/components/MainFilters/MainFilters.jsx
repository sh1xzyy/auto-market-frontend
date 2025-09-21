'use client'

import Container from '../common/Container/Container'
import { useState } from 'react'
import VehiclesList from './VehiclesList'
import FiltersForm from './FiltersForm'
import {
	eBikes,
	miniTrucks,
	motorBikes,
	other,
	otherVehicles,
	passengerCar,
} from './formFields.data'
import OtherVehiclesList from './OtherVehiclesList'

const MainFilters = () => {
	const [openIndex, setOpenIndex] = useState(0)
	const [isOtherFiltersOpen, setIsOtherFiltersOpen] = useState(false)

	const vehiclesFields = [
		passengerCar,
		motorBikes,
		eBikes,
		miniTrucks,
		other,
		otherVehicles,
	]

	return (
		<Container>
			<div className='md:flex w-full border border-grey md:rounded-2xl'>
				<VehiclesList
					openIndex={openIndex}
					setOpenIndex={setOpenIndex}
					setIsOtherFiltersOpen={setIsOtherFiltersOpen}
				/>

				{(isOtherFiltersOpen || openIndex !== vehiclesFields.length - 2) && (
					<FiltersForm vehiclesFields={vehiclesFields} openIndex={openIndex} />
				)}

				{openIndex === 4 && !isOtherFiltersOpen && (
					<OtherVehiclesList
						list={vehiclesFields[4]}
						setIsOtherFiltersOpen={setIsOtherFiltersOpen}
					/>
				)}
			</div>
		</Container>
	)
}

export default MainFilters
