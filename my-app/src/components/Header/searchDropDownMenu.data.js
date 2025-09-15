export const searchDropDownMenu = [
	{
		title: 'E-Bikes',
		thumb: {
			src: '/common/e-bike.jpg',
			alt: 'E-Bike',
		},
		moreInfo: { label: 'Mehr Erfahren', src: '/artikel/elektromobilitaet' },
	},
	{
		title: 'Fahrzeugsuche',
		list: [
			{ label: 'Gebraucht- und Neuwagen', src: '', isNew: false },
			{ label: 'Elektroautos', src: '', isNew: false },
			{ label: 'Motorräder', src: '', isNew: false },
			{ label: 'E-Bikes', src: '', isNew: true },
			{ label: 'Wohnwagen & -mobile', src: '', isNew: false },
			{ label: 'LKW & Nutzfahrzeuge', src: '', isNew: false },
		],
	},
	{
		title: 'Services',
		list: [
			{ label: 'Leasingangebote', src: '', isNew: false },
			{ label: 'Händler-Suche', src: '', isNew: false },
		],
	},
]
