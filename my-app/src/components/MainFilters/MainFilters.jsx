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
import MoreFiltersLink from './MoreFiltersLink'
import ResetFiltersButton from './ResetFiltersButton'
import { typeToClass } from './typeToClass.data'

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
			<VehiclesList openIndex={openIndex} setOpenIndex={setOpenIndex} />

			<Formik
				initialValues={initialValues}
				onSubmit={values => console.log(values)}
			>
				<Form className='grid grid-cols-2 gap-2lg bg-background-light-black p-2lg'>
					{vehiclesFields[openIndex].map(item => (
						<div
							className={clsx(typeToClass[item?.type] || typeToClass[item?.id])}
							key={item?.id}
						>
							{item?.type === 'selector' && <SelectorField item={item} />}

							{item?.type === 'checkbox' && <Checkbox item={item} />}

							{item?.type === 'radio' && <RadioButtons item={item} />}

							{item?.type === 'submit' && <SubmitButton item={item} />}

							{item?.type === 'reset' && <ResetFiltersButton item={item} />}

							{item?.type === 'link' && <MoreFiltersLink item={item} />}
						</div>
					))}
				</Form>
			</Formik>
		</Container>
	)
}

export default MainFilters
