'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { userDesktopNav, userTabletNav } from './userNav.data'
import Link from 'next/link'
import { useState } from 'react'
import DropDownMenu from './DropDownMenu'
import DropDownNotification from './DropDownNotification'
import DropDownUserInfo from './DropDownUserInfo'
import clsx from 'clsx'

const HeaderUserNavigationList = ({ windowWidth }) => {
	const [openIndex, setOpenIndex] = useState(null)

	const navigationList =
		windowWidth >= 1014
			? userDesktopNav
			: windowWidth > 755 && windowWidth < 1014 && userTabletNav

	return (
		<ul className='flex'>
			{navigationList.map((item, i) => (
				<li className='relative' key={i}>
					{item.hasOwnProperty('src') ? (
						<Link className='block px-md py-md' href={item?.src}>
							{item?.icon}
						</Link>
					) : (
						<button
							className='group flex items-center justify-center gap-sm px-md py-md'
							type='button'
							onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
						>
							{item.icon}
							{windowWidth > 755 && windowWidth < 1014 && i === 1 && (
								<IoIosArrowDown
									className={clsx(
										'fill-light-grey transition linear duration-300 group-hover:fill-light-white',
										openIndex === i && 'rotate-180'
									)}
									size={16}
								/>
							)}
						</button>
					)}

					{openIndex === i && i === 0 && (
						<DropDownMenu
							className='w-[360px] py-lg -right-[60px] max-h-[450px] overflow-y-auto custom-scroll'
							iconClass='right-[18%]'
						>
							<DropDownNotification />
						</DropDownMenu>
					)}

					{openIndex === i && i === 1 && (
						<DropDownMenu
							className='w-[170px] py-md px-2lg right-0'
							iconClass='right-[10%]'
						>
							<DropDownUserInfo />
						</DropDownMenu>
					)}
				</li>
			))}
		</ul>
	)
}

export default HeaderUserNavigationList
