import PopularModel from './PopularModel'

const PopularModelList = ({ list }) => {
	return (
		<ul className='flex flex-col gap-sm'>
			{list?.map((item, i) => (
				<PopularModel key={i} item={item} />
			))}
		</ul>
	)
}

export default PopularModelList
