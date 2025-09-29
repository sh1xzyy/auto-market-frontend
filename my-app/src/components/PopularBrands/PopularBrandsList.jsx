import { popularBrands } from './popularBrands.data'
import PopularBrand from './PopularBrand'

const PopularBrandsList = () => {
	return (
		<ul className='grid grid-cols-2 lg:grid-cols-6'>
			{popularBrands?.map((brand, i, arr) => (
				<PopularBrand key={i} index={i} brand={brand} arr={arr} />
			))}
		</ul>
	)
}

export default PopularBrandsList
