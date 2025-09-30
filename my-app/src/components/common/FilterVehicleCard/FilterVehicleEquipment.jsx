import { GrFormCheckmark } from 'react-icons/gr'

const FilterVehicleEquipment = ({ item }) => {
	return (
		<div className='flex flex-wrap gap-3md mt-3md'>
			{item?.equipment?.map((equip, i) => (
				<div className='flex items-center gap-sm' key={i}>
					<GrFormCheckmark size={16} />
					<span className='uppercase font-medium text-md'>{equip}</span>
				</div>
			))}
		</div>
	)
}

export default FilterVehicleEquipment
