import { Field, useFormikContext } from 'formik'
import { GrFormCheckmark } from 'react-icons/gr'

const Checkbox = ({ item }) => {
	const { values } = useFormikContext()
	const isChecked = values[item.name]

	return (
		<>
			<label className='col-span-2 inline-flex items-center gap-2sm font-bold text-md cursor-pointer'>
				<Field
					className='visually-hidden'
					type={item?.type}
					name={item?.name}
					checked={isChecked}
				/>
				<div className='flex justify-center items-center w-[20px] h-[20px] rounded-sm border border-dark-grey'>
					{isChecked && <GrFormCheckmark size={20} />}
				</div>
				{item?.label}
				{item?.icon}
			</label>
		</>
	)
}

export default Checkbox
