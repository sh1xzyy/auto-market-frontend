import ContentCard from '../common/ContentCard/ContentCard'
import { carSpecsIcons } from './carSpecsIcons.data'

const CarSpecsSummary = ({ data }) => {
	return (
		<ContentCard>
			<ul className='grid grid-cols-2 gap-lg lg:grid-cols-3 lg:gap-xl'>
				{data?.specs.map(({ key, value }) => (
					<li className='flex py-sm gap-3md' key={key}>
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
		</ContentCard>
	)
}

export default CarSpecsSummary
