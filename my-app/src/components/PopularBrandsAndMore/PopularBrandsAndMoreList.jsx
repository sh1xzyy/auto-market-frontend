import PopularBrand from './PopularBrand'
import { popularBrandsAndMore } from './popularBrandsAndMore.data'

const PopularBrandsAndMoreList = () => {
	return (
		<ul className='grid grid-cols-2 gap-3md lg:grid-cols-4 lg:gap-y-xl'>
			{popularBrandsAndMore?.map((item, i) => (
				<PopularBrand key={i} item={item} />
			))}
		</ul>
	)
}

export default PopularBrandsAndMoreList
