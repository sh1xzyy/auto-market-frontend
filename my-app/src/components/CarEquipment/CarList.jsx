'use client'

import useWindowWidth from '@/hooks/useWindowWidth'
import clsx from 'clsx'
import { GrFormCheckmark } from 'react-icons/gr'

const CarList = ({ data, isListOpen }) => {
	const { windowWidth } = useWindowWidth()
	return (
		<ul
			className={clsx(
				'lg:grid grid-cols-2 gap-x-lg overflow-y-hidden',
				!isListOpen && 'max-h-[228px]'
			)}
		>
			{data?.equipment.map((value, i) => {
				return (
					<li
						className={clsx(
							'flex items-center justify-between font-bold text-md p-md h-[36px]',
							windowWidth < 1014 && 'even:bg-black',
							(i % 4 === 2 || i % 4 === 3) && 'lg:bg-black'
						)}
						key={i}
					>
						<span>{value}</span>
						<GrFormCheckmark size={22} />
					</li>
				)
			})}
		</ul>
	)
}

export default CarList
