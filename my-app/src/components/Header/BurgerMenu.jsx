import BurgerNavMenuList from './BurgerNavMenuList'
import BurgerMenuCloseButton from './BurgerMenuCloseButton'
import RegisterButton from './RegisterButton'

const BurgerMenu = ({ setIsBurgerMenuOpen }) => {
	return (
		<div className='fixed top-0 left-0 w-full h-full bg-overlay z-10'>
			<div className='fixed right-0 top-0 h-full w-[260px] bg-background-light-black flex flex-col'>
				<BurgerMenuCloseButton setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
				<BurgerNavMenuList />
				<div className='absolute bottom-0 left-1/2 -translate-x-1/2 w-full px-2lg pb-xl bg-background-light-black'>
					<RegisterButton />
				</div>
			</div>
		</div>
	)
}

export default BurgerMenu
