'use client'

import { IoIosArrowDown } from 'react-icons/io'
import { userDesktopNav, userTabletNav } from './userNav.data'
import Link from 'next/link'
import { useState } from 'react'

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
							className='group flex items-center justify-center gap-xs px-md py-md'
							type='button'
							onClick={() => setOpenIndex(prev => (prev === i ? null : i))}
						>
							{item?.icon}
							{windowWidth > 755 && windowWidth < 1014 && i === 1 && (
								<IoIosArrowDown
									className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
									size={16}
								/>
							)}
						</button>
					)}
				</li>
			))}
		</ul>
	)
}

export default HeaderUserNavigationList
