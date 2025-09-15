import Link from 'next/link'
import React from 'react'

const Logo = () => {
	return (
		<Link className='font-black tracking-md text-lg' href='/'>
			Auto<span className='text-light-orange'>Market</span>
		</Link>
	)
}

export default Logo
