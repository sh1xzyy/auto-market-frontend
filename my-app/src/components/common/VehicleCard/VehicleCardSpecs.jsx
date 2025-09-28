const VehicleCardSpecs = ({ item }) => {
	return (
		<ul className='flex flex-wrap gap-3md'>
			{item?.specs?.map((spec, i) => (
				<li className='px-sm bg-black' key={i}>
					<span className='text-md font-bold'>{spec?.value}</span>
				</li>
			))}
		</ul>
	)
}

export default VehicleCardSpecs
