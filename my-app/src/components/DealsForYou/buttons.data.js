import { MdEnergySavingsLeaf, MdOutlineSell } from 'react-icons/md'
import { TbStars } from 'react-icons/tb'
import { TfiWallet } from 'react-icons/tfi'

export const buttons = [
	{
		icon: <MdOutlineSell className='mr-3md' size={16} />,
		label: 'Top-Preis',
	},
	{
		icon: <TfiWallet className='mr-3md' size={16} />,
		label: 'Leasing',
	},
	{
		icon: <MdEnergySavingsLeaf className='mr-3md' size={16} />,
		label: 'Elektro',
	},
	{
		icon: <TbStars className='mr-3md' size={16} />,
		label: 'Neuwagen',
	},
]
