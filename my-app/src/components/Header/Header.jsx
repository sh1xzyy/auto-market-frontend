'use client'

import Container from '../common/Container/Container'
import RegisterButton from './RegisterButton'
import { GiHamburgerMenu } from 'react-icons/gi'
import useWindowWidth from '@/hooks/useWindowWidth'
import { FaRegBell } from 'react-icons/fa'
import IconButton from '../common/IconButton/IconButton'
import { useState } from 'react'
import BurgerMenu from './BurgerMenu'
import HeaderMainNavigationList from './HeaderMainNavigationList'
import HeaderUserNavigationList from './HeaderUserNavigationList'
import HeaderLogo from './HeaderLogo'

const Header = () => {
	const [isBurgerMenuOpen, setIsBurgerMenuOpen] = useState(false)
	const { windowWidth } = useWindowWidth()
	return (
		<>
			{isBurgerMenuOpen && (
				<BurgerMenu setIsBurgerMenuOpen={setIsBurgerMenuOpen} />
			)}
			<div className='flex items-center h-[72px] bg-background-light-black'>
				<Container className='px-2lg'>
					<nav className='flex items-center justify-between'>
						<HeaderLogo />

						{windowWidth <= 755 && (
							<div>
								{windowWidth > 575 && (
									<IconButton
										icon={FaRegBell}
										className='px-md py-md'
										ariaLabel='Notifications button'
									/>
								)}
								<IconButton
									icon={GiHamburgerMenu}
									className='px-md py-md'
									onClick={() => setIsBurgerMenuOpen(true)}
									ariaLabel='Burger Menu button'
								/>
							</div>
						)}

						{windowWidth > 755 && (
							<>
								<HeaderMainNavigationList />
								<div className='flex'>
									<HeaderUserNavigationList windowWidth={windowWidth} />
									{windowWidth >= 1014 && (
										<div className='ml-lg'>
											<RegisterButton />
										</div>
									)}
								</div>
							</>
						)}
					</nav>
				</Container>
			</div>
		</>
	)
}

export default Header
