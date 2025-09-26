'use client'

import { useState } from 'react'
import CarList from './CarList'
import CarTitle from './CarTitle'
import CarActionButton from './CarActionButton'

const CarTechnicalDetails = ({ data }) => {
	const [isListOpen, setIsListOpen] = useState(false)
	return (
		<div className='p-lg pb-0 h-full bg-background-light-black lg:rounded-lg'>
			<CarTitle title='Technische Daten' />
			<CarList data={data} isListOpen={isListOpen} />
			<CarActionButton isListOpen={isListOpen} setIsListOpen={setIsListOpen} />
		</div>
	)
}

export default CarTechnicalDetails
