'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { mainNav } from './mainNav.data'
import { useState } from 'react'
import DropDownMenu from './DropDownMenu'
import { searchDropDownMenu } from './searchDropDownMenu.data'
import { sellDropDownMenu } from './sellDropDownMenu.data'
import { infoDropDownMenu } from './infoDropDownMenu.data'

const dropDownByIndex = [searchDropDownMenu, sellDropDownMenu, infoDropDownMenu]

const MainNavigation = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<ul className='flex gap-[10px]'>
			{mainNav.map((title, i) => {
				return (
					<li className='relative' key={i}>
						<button
							className='group flex gap-sm items-center h-[36px] font-bold px-[7px] py-[7px] transition linear duration-300 hover:text-light-white'
							type='button'
							onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
						>
							<span>{title}</span>
							<IoIosArrowDown
								className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
								size={16}
							/>
						</button>

						{openIndex === i && <DropDownMenu list={dropDownByIndex[i]} />}
					</li>
				)
			})}
		</ul>
	)
}

export default MainNavigation
