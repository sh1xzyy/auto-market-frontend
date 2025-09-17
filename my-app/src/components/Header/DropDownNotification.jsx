import Image from 'next/image'
import Link from 'next/link'
import { notifications } from './notifications.data'

const DropDownNotification = () => {
	return (
		<nav>
			<ul>
				{notifications.map(
					({ when, thumb, href, title, description, time }, i) => (
						<li key={i}>
							<span className='text-sm text-super-grey px-2lg'>{when}</span>

							<Link
								className='flex gap-2md p-2lg transition-colors linear duration-300 hover:bg-background-dark-black'
								href={href}
							>
								<Image
									className='self-start rounded-lg object-contain'
									src={thumb.src}
									width={60}
									height={60}
									alt={thumb.alt}
								/>

								<div className='flex flex-col gap-2sm leading-5'>
									<span className='text-md font-bold'>{title}</span>
									<p className='text-md font-medium'>{description}</p>
									<span className='text-sm text-dark-grey'>{time}</span>
								</div>
							</Link>
						</li>
					)
				)}
			</ul>
		</nav>
	)
}

export default DropDownNotification
