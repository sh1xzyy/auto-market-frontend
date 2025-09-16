import BurgerDropDownMenuCategoryItemList from './BurgerDropDownMenuCategoryItemList'

const BurgerDropDownMenuCategoryList = ({ list }) => {
	return (
		<ul>
			{list.map((item, i) => (
				<li key={i} className='flex flex-col'>
					<span className='block text-sm text-dark-grey px-2xl mt-md'>
						{item.title}
					</span>
					<BurgerDropDownMenuCategoryItemList list={item.list} />
				</li>
			))}
		</ul>
	)
}

export default BurgerDropDownMenuCategoryList
