import Link from 'next/link'
import React from 'react'

const HeaderLogo = () => {
	return (
		<Link className='font-black tracking-md text-lg' href='/'>
			Auto<span className='text-light-orange'>Market</span>
		</Link>
	)
}

export default HeaderLogo
