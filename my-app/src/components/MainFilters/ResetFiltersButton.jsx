const ResetFiltersButton = ({ item }) => {
	return (
		<button className='flex items-center justify-center gap-2sm w-full h-[36px] text-light-white '>
			{item?.icon}
			<span className='font-bold text-md'>{item?.label}</span>
		</button>
	)
}

export default ResetFiltersButton
