import { CustomSelector } from '../common/CustomSelector/CustomSelector'

const SelectorField = ({ item }) => {
	return (
		<>
			<label className='block font-bold text-md mb-sm' htmlFor={item?.id}>
				{item?.label}
			</label>
			<CustomSelector name={item?.name} id={item?.id} placeholder='Beliebig' />
		</>
	)
}

export default SelectorField
