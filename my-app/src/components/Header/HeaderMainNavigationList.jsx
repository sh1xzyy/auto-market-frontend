'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { mainNav } from './mainNav.data'
import DropDownMenu from './DropDownMenu'
import { searchDropDownMenu } from './searchDropDownMenu.data'
import { sellDropDownMenu } from './sellDropDownMenu.data'
import { infoDropDownMenu } from './infoDropDownMenu.data'
import { useState } from 'react'
import DropDownMainList from './DropDownMainList'
import clsx from 'clsx'

const dropDownByIndex = [searchDropDownMenu, sellDropDownMenu, infoDropDownMenu]

const HeaderMainNavigationList = () => {
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
								className={clsx(
									'fill-light-grey transition linear duration-300 group-hover:fill-light-white',
									openIndex === i && 'rotate-180'
								)}
								size={16}
							/>
						</button>

						{openIndex === i && (
							<DropDownMenu
								className='w-[570px] p-2lg left-1/2 -translate-x-1/2'
								iconClass='left-1/2 -translate-x-1/2'
							>
								<DropDownMainList list={dropDownByIndex[i]} />
							</DropDownMenu>
						)}
					</li>
				)
			})}
		</ul>
	)
}

export default HeaderMainNavigationList
