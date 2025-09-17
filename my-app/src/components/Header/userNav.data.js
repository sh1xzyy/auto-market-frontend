import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'
import { iconsStyle } from './commonStyles'

export const userDesktopNav = [
	{
		icon: <FaRegBell key='bell' className={iconsStyle} size={20} />,
	},
	{
		src: '',
		icon: <FaRegStar key='star' className={iconsStyle} size={20} />,
	},
	{
		src: '',
		icon: <RiParkingBoxLine key='parking' className={iconsStyle} size={20} />,
	},
]

export const userTabletNav = [
	{
		icon: <FaRegBell key='bell' className={iconsStyle} size={20} />,
	},
	{
		icon: <CgProfile key='profile' className={iconsStyle} size={20} />,
	},
]
