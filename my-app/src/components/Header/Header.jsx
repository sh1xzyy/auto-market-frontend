'use client'

import Container from '../common/Container/Container'
import MainNavigation from './MainNavigation'
import UserNavigation from './UserNavigation'
import Logo from './Logo'
import ActionButton from './ActionButton'
import { GiHamburgerMenu } from 'react-icons/gi'
import useWindowWidth from '@/hooks/useWindowWidth'
import { FaRegBell } from 'react-icons/fa'
import IconButton from '../common/IconButton/IconButton'

const Header = () => {
	const { windowWidth } = useWindowWidth()
	return (
		<div className='flex items-center h-[72px] bg-background-light-black'>
			<Container>
				<nav className='flex items-center justify-between'>
					<Logo />

					{windowWidth <= 755 && (
						<div>
							{windowWidth > 575 && <IconButton icon={FaRegBell} />}
							<IconButton icon={GiHamburgerMenu} />
						</div>
					)}

					{windowWidth > 755 && (
						<>
							<MainNavigation />
							<div className='flex'>
								<UserNavigation windowWidth={windowWidth} />
								{windowWidth >= 1014 && <ActionButton />}
							</div>
						</>
					)}
				</nav>
			</Container>
		</div>
	)
}

export default Header
