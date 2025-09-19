const SubmitButton = ({ item }) => {
	return (
		<button className='flex items-center justify-center gap-2sm w-full h-[36px] text-light-white bg-light-orange rounded-md transition-colors linear duration-300 hover:bg-dark-orange'>
			{item?.icon}
			<span className='font-bold text-md'>2932 {item?.label}</span>
		</button>
	)
}

export default SubmitButton
