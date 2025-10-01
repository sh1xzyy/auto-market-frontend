import Image from 'next/image'
import Title from '../common/Title/Title'
import { RiResetLeftFill } from 'react-icons/ri'
import { FaRegStar } from 'react-icons/fa6'

const SearchPanelHeader = ({ data }) => {
	return (
		<div className='flex justify-between mb-2md'>
			<div className='flex items-center gap-3md'>
				{data?.brandLogo && (
					<div className='flex items-center justify-center w-[40px] h-[40px] bg-light-white rounded-md'>
						<Image
							src={data?.brandLogo}
							width={33}
							height={40}
							alt={data?.brand}
						/>
					</div>
				)}

				<Title
					className='text-lg font-bold'
					title={`${data?.numberOfCars} ${data?.brand}`}
				/>
			</div>

			<div className='flex gap-3md'>
				<button className='group flex items-center justify-center gap-2sm min-w-[200px] text-light-white transition-colors linear duration-300 hover:text-light-grey'>
					<RiResetLeftFill className='-rotate-90' size={18} />
					<span className='font-bold text-md group-hover:underline'>
						Filter zurücksetzen
					</span>
				</button>
				<button className='flex items-center justify-center gap-2sm max-h-[44px] text-light-white bg-light-orange rounded-md px-lg py-2md transition-colors linear duration-300 hover:bg-dark-orange'>
					<FaRegStar size={16} />
					<span className='font-bold text-md'>Suche speichern</span>
				</button>
			</div>
		</div>
	)
}

export default SearchPanelHeader
