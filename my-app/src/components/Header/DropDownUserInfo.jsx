import Link from 'next/link'
import { userInfo } from './userInfo.data'
import RegisterButton from './RegisterButton'

const DropDownUserInfo = () => {
	return (
		<nav>
			<ul className='flex flex-col'>
				{userInfo.map(({ title, src, icon }, i) => (
					<li key={i} className='flex flex-col border-b border-grey'>
						<Link
							className='transition-colors linear duration-300 group flex items-center gap-2sm p-md text-md font-bold hover:underline'
							href={src}
						>
							<span className='group-hover:text-light-white'>{icon}</span>
							<span className='group-hover:text-light-white'>{title}</span>
						</Link>
					</li>
				))}
			</ul>
			<div className='mt-2lg mb-md'>
				<RegisterButton />
			</div>
		</nav>
	)
}

export default DropDownUserInfo
