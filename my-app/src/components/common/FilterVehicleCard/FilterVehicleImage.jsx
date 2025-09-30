import Image from 'next/image'

const FilterVehicleImage = ({ item }) => {
	return (
		<div className='relative min-w-[180px] min-h-[135px] lg:min-w-[278px] lg:min-h-[208px]'>
			<Image
				className='rounded-md object-fit'
				src={item?.image}
				alt={item?.name}
				fill
			/>
		</div>
	)
}

export default FilterVehicleImage
