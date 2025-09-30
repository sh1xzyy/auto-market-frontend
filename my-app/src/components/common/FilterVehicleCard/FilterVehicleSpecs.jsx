const FilterVehicleSpecs = ({ item }) => {
	return (
		<div className='flex mt-3md font-bold text-md lg:mt-0 lg:mb-lg'>
			{item?.specs?.map((spec, i, arr) => (
				<div key={i}>
					<span>{spec?.value}</span>
					{i !== arr.length - 1 && <span>&nbsp;•&nbsp;</span>}
				</div>
			))}
		</div>
	)
}

export default FilterVehicleSpecs
