import Link from 'next/link'
import { IoIosArrowDown } from 'react-icons/io'

const PopularModel = ({ item }) => {
	return (
		<li>
			<Link className='group flex items-center' href={item?.href}>
				<IoIosArrowDown
					className='-rotate-90 mr-sm'
					color='var(--color-dark-grey)'
					size={16}
				/>
				<span className='font-bold transition-colors linear duration-300 group-hover:text-dark-grey group-hover:underline'>
					{item?.model}
				</span>
			</Link>
		</li>
	)
}

export default PopularModel
