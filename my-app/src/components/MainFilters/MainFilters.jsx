'use client'

import clsx from 'clsx'
import Container from '../common/Container/Container'
import { useState } from 'react'
import { Form, Formik } from 'formik'
import {
	eBikes,
	miniTrucks,
	motorBikes,
	other,
	passengerCar,
} from './formFields.data'
import Checkbox from './Checkbox'
import RadioButtons from './RadioButtons'
import SubmitButton from './SubmitButton'
import VehiclesList from './VehiclesList'
import SelectorField from './SelectorField'
import { typeToClass } from './typeToClass.data'
import FilterButtons from './FilterButtons'

const initialValues = {
	brand: '',
	model: '',
	registerDate: '',
	kilometersTo: '',
	paymentMethod: 'cash',
	priceUntil: '',
	cityOrZipCode: '',
	onlyElectricCars: false,
}

const MainFilters = () => {
	const [openIndex, setOpenIndex] = useState(0)

	const vehiclesFields = [passengerCar, motorBikes, eBikes, miniTrucks, other]

	return (
		<Container>
			<div className='md:flex w-full border border-grey md:rounded-2xl'>
				<VehiclesList openIndex={openIndex} setOpenIndex={setOpenIndex} />

				<Formik
					initialValues={initialValues}
					onSubmit={values => console.log(values)}
				>
					<Form className='grid grid-cols-2 gap-2lg w-full items-center bg-background-light-black p-2lg sm:grid-cols-[156px_1fr_1fr_1fr] md:grid-cols-4 md:rounded-br-2xl md:rounded-tr-2xl'>
						{vehiclesFields[openIndex].map(item => (
							<div
								className={clsx(
									typeToClass[item?.type] || typeToClass[item?.id]
								)}
								key={item?.id}
							>
								{item?.type === 'selector' && <SelectorField item={item} />}

								{item?.type === 'checkbox' && <Checkbox item={item} />}

								{item?.type === 'radio' && <RadioButtons item={item} />}

								{item?.type === 'submit' && <SubmitButton item={item} />}

								{item?.type === 'filterButton' && <FilterButtons item={item} />}
							</div>
						))}
					</Form>
				</Formik>
			</div>
		</Container>
	)
}

export default MainFilters
