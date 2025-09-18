import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'
import { iconsStyle } from './commonStyles'

export const userDesktopNav = [
	{
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
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
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
	},
	{
		icon: FaRegUserCircle,
		ariaLabel: 'Profile button',
	},
]
