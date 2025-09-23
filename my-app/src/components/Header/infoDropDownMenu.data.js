export const toKnow = {
	title: 'Wissen',
	list: [
		{ label: 'Auto-Magazin', src: '', isNew: false },
		{ label: 'Ratgeber und Service', src: '', isNew: false },
		{ label: 'Themen A-Z', src: '', isNew: false },
		{ label: 'Sicherheit bei mobile.de', src: '', isNew: false },
	],
}

export const counselor = {
	title: 'Ratgeber',
	list: [
		{ label: 'Marken & Modelle', src: '', isNew: false },
		{ label: 'Bestenlisten & Tests', src: '', isNew: false },
		{ label: 'Brand Portal', src: '', isNew: true },
	],
}

export const infoDropDownMenu = [
	{
		title: 'Elektromobilität',
		thumb: {
			src: '/header/fueling-сar.jpg',
			alt: 'fueling-car',
		},
		moreInfo: { label: 'Mehr Erfahren', src: '/artikel/elektromobilitaet' },
	},
	toKnow,
	counselor,
]
