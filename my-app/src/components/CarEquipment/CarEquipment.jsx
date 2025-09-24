'use client'

import clsx from 'clsx'
import { useState } from 'react'
import CarList from './CarList'
import CarTitle from './CarTitle'
import CarActionButton from './CarActionButton'

const CarEquipment = ({ data }) => {
	const [isListOpen, setIsListOpen] = useState(false)
	return (
		<div
			className={clsx(
				'p-lg pb-0 h-full bg-background-light-black lg:rounded-lg'
			)}
		>
			<CarTitle title='Ausstattung' />
			<CarList data={data} isListOpen={isListOpen} />
			<CarActionButton isListOpen={isListOpen} setIsListOpen={setIsListOpen} />
		</div>
	)
}

export default CarEquipment
