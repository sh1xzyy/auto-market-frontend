import { GiPriceTag } from 'react-icons/gi'
import { IoCarSportOutline } from 'react-icons/io5'
import { MdEnergySavingsLeaf } from 'react-icons/md'
import { TfiWallet } from 'react-icons/tfi'

const SpecialOfferCard = ({ item, openIndex }) => {
	const icons = [
		<GiPriceTag className='var(--color-super-light-violet) min-h-[48px] min-w-[48px]' />,
		<TfiWallet className='var(--color-super-light-violet) min-h-[48px] min-w-[48px]' />,
		<MdEnergySavingsLeaf className='var(--color-super-light-violet) min-h-[48px] min-w-[48px]' />,
		<IoCarSportOutline className='var(--color-super-light-violet) min-h-[48px] min-w-[48px]' />,
	]
	return (
		<div className='max-w-[260px] flex flex-col gap-y-lg p-lg bg-dark-blue rounded-lg'>
			{icons[openIndex]}

			<h3 className='text-lg font-bold'>{item?.title}</h3>
			<p className='text-md font-medium'>{item?.description}</p>
			<button className='bg-light-violet rounded-md h-[36px] py-3md px-2md transition-colors linear duration-300 md:max-w-[231px] hover:bg-dark-violet'>
				<span className='text-md font-bold'>Mehr Angebote</span>
			</button>
		</div>
	)
}

export default SpecialOfferCard
