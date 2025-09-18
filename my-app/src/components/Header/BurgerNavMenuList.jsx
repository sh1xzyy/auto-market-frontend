'use client'

import { burgerNavMenu } from './burgerNavMenu.data'
import BurgerNavMenuItem from './BurgerNavMenuItem'
import { useState } from 'react'

const BurgerNavMenuList = () => {
	const [openIndex, setOpenIndex] = useState(null)

	return (
		<nav>
			<ul className='flex flex-col'>
				{burgerNavMenu.map((item, i) => (
					<BurgerNavMenuItem
						key={i}
						item={item}
						i={i}
						openIndex={openIndex}
						setOpenIndex={setOpenIndex}
					/>
				))}
			</ul>
		</nav>
	)
}

export default BurgerNavMenuList
