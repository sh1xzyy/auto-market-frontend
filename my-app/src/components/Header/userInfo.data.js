import { CgProfile } from 'react-icons/cg'
import { FaRegStar } from 'react-icons/fa'
import { iconsStyle } from './commonStyles'

export const userInfo = [
	{
		title: 'Meine Suchen',
		src: '',
		icon: <FaRegStar key='star' className={iconsStyle} size={16} />,
	},
	{
		title: 'Parkplatz',
		src: '',
		icon: <CgProfile key='profile' className={iconsStyle} size={16} />,
	},
]
