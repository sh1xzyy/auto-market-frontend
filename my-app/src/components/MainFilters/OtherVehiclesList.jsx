import clsx from 'clsx'

const OtherVehiclesList = ({ list, setIsOtherFiltersOpen }) => {
	return (
		<ul className='w-full grid grid-cols-3 items-center md:grid-cols-5 bg-background-light-black md:p-md lg:rounded-tr-2xl lg:rounded-br-2xl'>
			{list.map(({ id, label, icon }, i) => (
				<li
					className={clsx(
						'flex justify-center items-center border-r border-b border-grey md:h-full',
						(i === 2 || i === 5 || i === 8) && 'border-r-0 md:border-r',
						(i === 6 || i === 7 || i === 8) && 'border-b-0',
						i === 5 && 'md:border-b-0',
						i === 4 && 'md:border-r-0'
					)}
					key={id}
				>
					<button
						className='flex flex-col gap-2sm items-center w-full p-2lg transition-colors linear duration-300 md:py-auto md:px-0 hover:bg-black'
						type='button'
						onClick={() => {
							setIsOtherFiltersOpen(true)
						}}
					>
						{icon}
						<span className='text-sm'>{label}</span>
					</button>
				</li>
			))}
		</ul>
	)
}

export default OtherVehiclesList
