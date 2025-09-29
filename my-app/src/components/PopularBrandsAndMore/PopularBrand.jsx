import PopularModelList from './PopularModelList'

const PopularBrand = ({ item }) => {
	return (
		<li>
			<h3 className='text-md font-bold mb-sm'>{item?.brand}</h3>
			<PopularModelList list={item?.list} />
		</li>
	)
}

export default PopularBrand
