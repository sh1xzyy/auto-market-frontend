export const vehicleSearch = {
	title: 'Fahrzeugsuche',
	list: [
		{ label: 'Gebraucht- und Neuwagen', src: '', isNew: false },
		{ label: 'Elektroautos', src: '', isNew: false },
		{ label: 'Motorräder', src: '', isNew: false },
		{ label: 'E-Bikes', src: '', isNew: true },
		{ label: 'Wohnwagen & -mobile', src: '', isNew: false },
		{ label: 'LKW & Nutzfahrzeuge', src: '', isNew: false },
	],
}

export const services = {
	title: 'Services',
	list: [
		{ label: 'Leasingangebote', src: '', isNew: false },
		{ label: 'Händler-Suche', src: '', isNew: false },
	],
}

export const searchDropDownMenu = [
	{
		title: 'E-Bikes',
		thumb: {
			src: '/header/e-bike.jpg',
			alt: 'E-Bike',
		},
		moreInfo: { label: 'Mehr Erfahren', src: '/artikel/elektromobilitaet' },
	},
	vehicleSearch,
	services,
]
