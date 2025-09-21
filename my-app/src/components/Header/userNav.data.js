import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { FaRegUserCircle } from 'react-icons/fa'
import { iconsStyle } from './commonStyles'

export const userDesktopNav = [
	{
		type: 'button',
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
	},
	{
		type: 'link',
		src: '',
		icon: <FaRegStar key='star' className={iconsStyle} size={20} />,
		ariaLabel: 'my favorites link',
	},
	{
		type: 'link',
		src: '',
		icon: <RiParkingBoxLine key='parking' className={iconsStyle} size={20} />,
		ariaLabel: 'parking link',
	},
]

export const userTabletNav = [
	{
		type: 'button',
		icon: FaRegBell,
		ariaLabel: 'Notifications button',
	},
	{
		type: 'button',
		icon: FaRegUserCircle,
		ariaLabel: 'Profile button',
	},
]
