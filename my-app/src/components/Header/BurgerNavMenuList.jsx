import { burgerNavMenu } from './burgerNavMenu.data'
import BurgerNavMenuItem from './BurgerNavMenuItem'

const BurgerNavMenuList = () => {
	return (
		<nav>
			<ul className='flex flex-col'>
				{burgerNavMenu.map((item, i) => (
					<BurgerNavMenuItem key={i} item={item} i={i} />
				))}
			</ul>
		</nav>
	)
}

export default BurgerNavMenuList
