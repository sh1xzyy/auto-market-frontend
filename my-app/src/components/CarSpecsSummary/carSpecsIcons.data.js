import { LuFuel } from 'react-icons/lu'
import { CgPerformance } from 'react-icons/cg'
import { TbAutomaticGearbox } from 'react-icons/tb'
import { GiArchiveRegister } from 'react-icons/gi'
import { FaRegUser } from 'react-icons/fa'
import { FaRoad } from 'react-icons/fa6'

export const carSpecsIcons = {
	mileage: {
		icon: <FaRoad color='var(--color-light-orange)' size={32} />,
		label: 'Kilometerstand',
	},
	performance: {
		icon: <CgPerformance color='var(--color-light-orange)' size={32} />,
		label: 'Leistung',
	},
	fuelType: {
		icon: <LuFuel color='var(--color-light-orange)' size={32} />,
		label: 'Kraftstoffart',
	},
	gearbox: {
		icon: <TbAutomaticGearbox color='var(--color-light-orange)' size={32} />,
		label: 'Getriebe',
	},
	initialRegistration: {
		icon: <GiArchiveRegister color='var(--color-light-orange)' size={32} />,
		label: 'Erstzulassung',
	},
	vehicleOwner: {
		icon: <FaRegUser color='var(--color-light-orange)' size={32} />,
		label: 'Fahrzeughalter',
	},
}
