import { FaRegBell, FaRegStar } from 'react-icons/fa'
import { RiParkingBoxLine } from 'react-icons/ri'
import { CgProfile } from 'react-icons/cg'

const commonStyle =
	'fill-light-grey transition linear duration-300 group-hover:fill-light-white'

export const userDesktopNav = [
	{
		icon: <FaRegBell key='bell' className={commonStyle} size={20} />,
	},
	{
		src: '',
		icon: <FaRegStar key='star' className={commonStyle} size={20} />,
	},
	{
		src: '',
		icon: <RiParkingBoxLine key='parking' className={commonStyle} size={20} />,
	},
]

export const userTabletNav = [
	{
		icon: <FaRegBell key='bell' className={commonStyle} size={20} />,
	},
	{
		icon: <CgProfile key='profile' className={commonStyle} size={20} />,
	},
]
