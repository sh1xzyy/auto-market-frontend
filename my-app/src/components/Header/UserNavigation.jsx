import { IoIosArrowDown } from 'react-icons/io'
import { userDesktopNav, userTabletNav } from './userNav.data'

const UserNavigation = ({ windowWidth }) => {
	const navigationList =
		windowWidth >= 1014
			? userDesktopNav
			: windowWidth > 755 && windowWidth < 1014 && userTabletNav
	return (
		<ul className='flex'>
			{navigationList.map((icon, i) => {
				return (
					<li key={i}>
						<div>
							<button
								className='group flex items-center justify-center gap-xs px-md py-md'
								type='button'
								onClick={() => console.log(i)}
							>
								{icon}
								{windowWidth > 755 && windowWidth < 1014 && i === 1 && (
									<IoIosArrowDown
										className='fill-light-grey transition linear duration-300 group-hover:fill-light-white'
										size={16}
									/>
								)}
							</button>
						</div>
					</li>
				)
			})}
		</ul>
	)
}

export default UserNavigation
