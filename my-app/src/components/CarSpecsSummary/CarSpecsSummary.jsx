import { carSpecsIcons } from './carSpecsIcons.data'

const CarSpecsSummary = ({ data }) => {
	return (
		<div className='p-lg bg-background-light-black lg:rounded-lg'>
			<ul className='grid grid-cols-2 gap-lg lg:grid-cols-3 lg:gap-xl'>
				{data?.specs.map(({ key, value }) => (
					<li className='flex py-sm lg:gap-3md' key={key}>
						{carSpecsIcons[key].icon}
						<div className='flex flex-col'>
							<span className='text-sm text-dark-grey'>
								{carSpecsIcons[key].label}
							</span>
							<span className='text-md font-bold'>{value}</span>
						</div>
					</li>
				))}
			</ul>
		</div>
	)
}

export default CarSpecsSummary
