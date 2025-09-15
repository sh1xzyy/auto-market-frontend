import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

export const userDesktopNav = [
	<FaRegBell
		key='bell'
		className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
		size={20}
	/>,
	<FaRegStar
		key='star'
		className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
		size={20}
	/>,
	<RiParkingBoxLine
		key='parking'
		className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
		size={20}
	/>,
]

export const userTabletNav = [
	<FaRegBell
		key='bell'
		className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
		size={20}
	/>,
	<CgProfile
		key='profile'
		className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
		size={20}
	/>,
]
