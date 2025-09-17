'use client'

import { useState } from 'react'
import BurgerDropDownMenuCategoryList from './BurgerDropDownMenuCategoryList'
import { IoIosArrowDown } from 'react-icons/io'
import clsx from 'clsx'

const BurgerNavMenuItem = ({ item, i }) => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<li
			className={clsx(
				'flex flex-col justify-center border-b border-grey last:border-0',
				openIndex === i && 'shadow-card'
			)}
		>
			<button
				className='flex items-center justify-between h-[60px] px-2lg w-full font-bold'
				type='button'
				onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
			>
				<span>{item.title}</span>
				<IoIosArrowDown
					className={clsx(
						'fill-light-grey transition linear duration-300',
						openIndex === i && 'rotate-180'
					)}
					size={16}
				/>
			</button>
			{openIndex === i && <BurgerDropDownMenuCategoryList list={item.list} />}
		</li>
	)
}

export default BurgerNavMenuItem
