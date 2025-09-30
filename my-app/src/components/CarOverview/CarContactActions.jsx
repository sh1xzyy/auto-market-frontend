import clsx from 'clsx'
import Link from 'next/link'
import { FiPhone } from 'react-icons/fi'
import { IoShareSocial } from 'react-icons/io5'
import { MdOutlineEmail } from 'react-icons/md'
import { RiParkingBoxLine } from 'react-icons/ri'

const CarContactActions = ({ phone, isDesktop }) => {
	return (
		<div className='grid grid-cols-2 gap-3md'>
			{!isDesktop && (
				<address className='col-span-2'>
					<a
						className='flex items-center justify-center gap-3md rounded-md h-[44px] bg-light-orange transition-colors linear duration-300 hover:bg-dark-orange'
						href={`tel:${phone}`}
					>
						<FiPhone size={16} />
						<span>Anbieter Kontaktieren</span>
					</a>
				</address>
			)}

			<Link
				className={clsx(
					'flex items-center justify-center gap-3md rounded-md h-[44px] px-2md bg-light-orange transition-colors linear duration-300 hover:bg-dark-orange',
					isDesktop && 'col-span-2'
				)}
				href=''
			>
				<MdOutlineEmail size={16} />
				<span>E-mail {isDesktop && 'schreiben'}</span>
			</Link>

			<button
				className='flex items-center justify-center gap-3md rounded-md border border-super-light-violet text-super-light-violet h-[44px] transition-colors linear duration-300 hover:border-light-violet hover:text-light-violet'
				type='button'
			>
				<RiParkingBoxLine size={16} />
				<span>Parken</span>
			</button>

			{isDesktop && (
				<button
					className='flex items-center justify-center gap-3md rounded-md border border-super-light-violet text-super-light-violet h-[44px] transition-colors linear duration-300 hover:border-light-violet hover:text-light-violet'
					type='button'
				>
					<IoShareSocial size={16} />
					<span>Teilen</span>
				</button>
			)}
		</div>
	)
}

export default CarContactActions
