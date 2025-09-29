import { MdEnergySavingsLeaf } from 'react-icons/md'
import { TfiWallet } from 'react-icons/tfi'
import { FaRegStar } from 'react-icons/fa'
import { GiFullMotorcycleHelmet } from 'react-icons/gi'
import { LuBox } from 'react-icons/lu'
import { PiUmbrellaBold } from 'react-icons/pi'

export const selectedCategories = [
	{
		label: 'Elektro',
		type: 'electro',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/electric.bf2168b735fe4f27d6dd..webp',
		icon: <MdEnergySavingsLeaf color='var(--color-light-white)' size={24} />,
		subtitle: 'Umweltbewusst',
	},
	{
		label: 'Leasing',
		type: 'fuel',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/leasing.07106d4cfc826fc34757..webp',
		icon: <TfiWallet size={24} />,
		subtitle: 'ab 89€ mtl.',
	},
	{
		label: 'Neuwagen',
		type: 'fuel',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/new.e149c0c42309c42dfab6..webp',
		icon: <FaRegStar size={24} />,
		subtitle: 'Frisch & glänzend',
	},
	{
		label: 'E-Bikes',
		type: 'electro',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/ebike.ccfe626a4b98a01f4c11..webp',
		icon: <MdEnergySavingsLeaf color='var(--color-light-white)' size={24} />,
		subtitle: 'Mehr Bewegung',
	},
	{
		label: 'Motorräder',
		type: 'fuel',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/motorbike.68e56c4b4cf024b7a3fd..webp',
		icon: <GiFullMotorcycleHelmet size={24} />,
		subtitle: 'Freiheit spüren',
	},
	{
		label: 'Transporter',
		type: 'fuel',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/transporter.0d4135788f362e37e623..webp',
		icon: <LuBox size={24} />,
		subtitle: 'Nützlich & effektiv',
	},
	{
		label: 'Wohnmobile',
		type: 'fuel',
		href: '/vehicles',
		image:
			'https://static.classistatic.de/consumer-webapp/static/camper.c80cd28a9fcd5f326b70..webp',
		icon: <PiUmbrellaBold size={24} />,
		subtitle: 'Urlaubsreif',
	},
]
