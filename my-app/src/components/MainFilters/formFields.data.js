import { IoSearch } from 'react-icons/io5'
import { MdEnergySavingsLeaf, MdFrontLoader } from 'react-icons/md'
import { RiResetLeftFill } from 'react-icons/ri'
import { VscSettings } from 'react-icons/vsc'
import { PiTruck, PiWarningCircleLight } from 'react-icons/pi'
import { HiMiniTruck } from 'react-icons/hi2'
import { FaBus, FaTractor, FaTruckMoving, FaTrailer } from 'react-icons/fa'
import { IoIosConstruct } from 'react-icons/io'

const filterButton = {
	id: 'filterButton',
	type: 'filterButton',
	actionButton: {
		label: 'Zurücksetzen',
		icon: <RiResetLeftFill size={18} />,
	},
	navigationButton: {
		label: 'Weitere Filter',
		href: '/moreFilters',
		icon: <VscSettings size={18} />,
	},
}

export const passengerCar = [
	{
		id: 'brand_passenger',
		name: 'brand',
		label: 'Marke',
		type: 'selector',
	},
	{
		id: 'model_passenger',
		name: 'model',
		label: 'Modell',
		type: 'selector',
	},
	{
		id: 'registerDate_passenger',
		name: 'registerDate',
		label: 'Erstzulassung ab',
		type: 'selector',
	},
	{
		id: 'kilometersTo_passenger',
		name: 'kilometersTo',
		label: 'Kilometer bis',
		type: 'selector',
	},
	{
		id: 'paymentMethod_passenger',
		label: 'Zahlungsart',
		type: 'radio',
		radioList: [
			{
				id: 'paymentMethod_passenger_cash',
				name: 'paymentMethod',
				value: 'cash',
				label: 'Kaufen',
				type: 'radio',
			},
			{
				id: 'paymentMethod_passenger_finance',
				name: 'paymentMethod',
				value: 'finance',
				label: 'Leasen',
				type: 'radio',
			},
		],
	},
	{
		id: 'priceUntil_passenger',
		name: 'priceUntil',
		label: 'Preis bis',
		type: 'selector',
	},
	{
		id: 'cityOrZipCode_passenger',
		name: 'cityOrZipCode',
		label: 'Ort oder PLZ',
		type: 'selector',
	},
	{
		id: 'onlyElectricCars_passenger',
		name: 'onlyElectricCars',
		label: 'Nur Elektroautos',
		type: 'checkbox',
		icon: <MdEnergySavingsLeaf color='var(--color-dark-blue)' size={16} />,
	},
	{
		id: 'submit_passenger',
		label: 'Angebote',
		type: 'submit',
		icon: <IoSearch size={18} />,
	},
	filterButton,
]

export const motorBikes = [
	{
		id: 'category_motorBike',
		name: 'category',
		label: 'Kategorie',
		type: 'selector',
	},
	{
		id: 'brand_motorBike',
		name: 'brand',
		label: 'Marke',
		type: 'selector',
	},
	{
		id: 'model_motorBike',
		name: 'model',
		label: 'Modell',
		type: 'selector',
	},
	{
		id: 'registerDate_motorBike',
		name: 'registerDate',
		label: 'Erstzulassung ab',
		type: 'selector',
	},
	{
		id: 'kilometersTo_motorBike',
		name: 'kilometersTo',
		label: 'Kilometer bis',
		type: 'selector',
	},
	{
		id: 'priceUntil_motorBike',
		name: 'priceUntil',
		label: 'Preis bis',
		type: 'selector',
	},
	{
		id: 'cityOrZipCode_motorBike',
		name: 'cityOrZipCode',
		label: 'Ort oder PLZ',
		type: 'selector',
	},
	{
		id: 'submit_motorBike',
		label: 'Angebote',
		type: 'submit',
		icon: <IoSearch size={18} />,
	},
	filterButton,
]

export const eBikes = [
	{
		id: 'category_eBike',
		name: 'category',
		label: 'E-Bike Kategorie',
		type: 'selector',
	},
	{
		id: 'brand_eBike',
		name: 'brand',
		label: 'Marke',
		type: 'selector',
	},
	{
		id: 'model_eBike',
		name: 'model',
		label: 'Modell',
		type: 'selector',
	},
	{
		id: 'frameSize_eBike',
		name: 'frameSize',
		label: 'Rahmengröße',
		labelIcon: PiWarningCircleLight,
		ariaLabel: 'frame size',
		type: 'selector',
	},
	{
		id: 'batteryCapacity_eBike',
		name: 'batteryCapacity',
		label: 'Akkukapazität ab',
		labelIcon: PiWarningCircleLight,
		ariaLabel: 'battery capacity',
		type: 'selector',
	},
	{
		id: 'priceUntil_eBike',
		name: 'priceUntil',
		label: 'Preis bis',
		type: 'selector',
	},
	{
		id: 'cityOrZipCode_eBike',
		name: 'cityOrZipCode',
		label: 'Ort oder PLZ',
		type: 'selector',
	},
	{
		id: 'submit_eBike',
		label: 'Angebote',
		type: 'submit',
		icon: <IoSearch size={18} />,
	},
	filterButton,
]

export const miniTrucks = [
	{
		id: 'miniTruckCategory',
		category: 'field',
		name: 'category',
		label: 'Kategorie',
		type: 'selector',
	},
	{
		id: 'miniTruckBrand',
		category: 'field',
		name: 'brand',
		label: 'Marke',
		type: 'selector',
	},
	{
		id: 'miniTruckModel',
		category: 'field',
		name: 'model',
		label: 'Modell',
		type: 'selector',
	},
	{
		id: 'miniTruckRegisterDate',
		category: 'field',
		name: 'registerDate',
		label: 'Erstzulassung ab',
		type: 'selector',
	},
	{
		id: 'miniTruckKilometersTo',
		category: 'field',
		name: 'kilometersTo',
		label: 'Kilometer bis',
		type: 'selector',
	},
	{
		id: 'miniTruckPriceUntil',
		category: 'field',
		name: 'priceUntil',
		label: 'Preis bis',
		type: 'selector',
	},
	{
		id: 'miniTruckCityOrZipCode',
		category: 'field',
		name: 'cityOrZipCode',
		label: 'Ort oder PLZ',
		type: 'selector',
	},
	{
		id: 'miniTruckSubmit',
		category: 'submitButton',
		label: 'Angebote',
		type: 'submit',
		icon: <IoSearch size={18} />,
	},
	filterButton,
]

export const otherVehicles = [
	{
		id: 'brand_other_vehicles',
		name: 'brand',
		label: 'Marke',
		type: 'selector',
	},
	{
		id: 'model_other_vehicles',
		name: 'model',
		label: 'Modell',
		type: 'selector',
	},
	{
		id: 'registerDate_other_vehicles',
		name: 'registerDate',
		label: 'Erstzulassung ab',
		type: 'selector',
	},
	{
		id: 'kilometersTo_other_vehicles',
		name: 'kilometersTo',
		label: 'Kilometer bis',
		type: 'selector',
	},
	{
		id: 'pricing_other_vehicles',
		label: 'Preisangabe',
		type: 'radio',
		radioList: [
			{
				id: 'pricing_other_vehicles_brutto',
				name: 'pricing',
				value: 'brutto',
				label: 'Brutto',
				type: 'radio',
			},
			{
				id: 'pricing_other_vehicles_netto',
				name: 'pricing',
				value: 'netto',
				label: 'Netto',
				type: 'radio',
			},
		],
	},
	{
		id: 'priceUntil_other_vehicles',
		name: 'priceUntil',
		label: 'Preis bis',
		type: 'selector',
	},
	{
		id: 'cityOrZipCode_other_vehicles',
		name: 'cityOrZipCode',
		label: 'Ort oder PLZ',
		type: 'selector',
	},
	{
		id: 'submit_other_vehicles',
		label: 'Angebote',
		type: 'submit',
		icon: <IoSearch size={18} />,
	},
	filterButton,
]

export const other = [
	{
		id: 'other_lkw',
		category: 'iconButton',
		label: 'Lkw über 7,5 t',
		type: 'iconButton',
		icon: <PiTruck color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_trailer',
		category: 'iconButton',
		label: 'Anhänger',
		type: 'iconButton',
		icon: <FaTrailer color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_transporter',
		category: 'iconButton',
		label: 'Transporter bis 7,5 t',
		type: 'iconButton',
		icon: <HiMiniTruck color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_semiTruck',
		category: 'iconButton',
		label: 'Sattelzüge',
		type: 'iconButton',
		icon: <FaTruckMoving color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_semitrailer',
		category: 'iconButton',
		label: 'Auflieger',
		type: 'iconButton',
		icon: <FaTrailer color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_bus',
		category: 'iconButton',
		label: 'Busse',
		type: 'iconButton',
		icon: <FaBus color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_tractor',
		category: 'iconButton',
		label: 'Agrar',
		type: 'iconButton',
		icon: <FaTractor color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_constructionMachine',
		category: 'iconButton',
		label: 'Baumaschinen',
		type: 'iconButton',
		icon: <IoIosConstruct color='var(--color-light-orange)' size={45} />,
	},
	{
		id: 'other_stacker',
		category: 'iconButton',
		label: 'Stapler',
		type: 'iconButton',
		icon: <MdFrontLoader color='var(--color-light-orange)' size={45} />,
	},
]
