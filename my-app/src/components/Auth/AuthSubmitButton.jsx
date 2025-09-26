const AuthSubmitButton = ({ label }) => {
	return (
		<button
			className='w-full py-2lg px-xl bg-light-orange rounded-md font-bold sm:px-lg sm:py-2md sm:h-[44px] sm:text-md transition-colors linear duration-300 hover:bg-dark-orange'
			type='submit'
		>
			{label}
		</button>
	)
}

export default AuthSubmitButton
