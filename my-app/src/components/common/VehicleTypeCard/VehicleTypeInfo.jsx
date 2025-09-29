import clsx from 'clsx'

const VehicleTypeInfo = ({ item }) => {
	return (
		<div className='flex gap-3md items-center'>
			<div
				className={clsx(
					'flex items-center justify-center rounded-md w-[40px] h-[40px]',
					item?.type === 'electro' ? 'bg-light-blue' : 'bg-grey'
				)}
			>
				{item?.icon}
			</div>
			<div className='flex flex-col'>
				<span className='font-bold'>{item?.label}</span>
				<span className='text-sm text-dark-grey'>{item?.subtitle}</span>
			</div>
		</div>
	)
}

export default VehicleTypeInfo
