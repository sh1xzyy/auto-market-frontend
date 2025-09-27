import clsx from 'clsx'

const labels = {
	5: 'Sehr guter Preis',
	4: 'Guter Preis',
	3: 'Fairer Preis',
	2: 'Erhöhter Preis',
	1: 'Preis ist zu hoch',
	0: 'Ohne Bewertung',
}

const colors = {
	1: 'bg-dark-orange',
	2: 'bg-light-yellow',
	3: 'bg-light-green',
	4: 'bg-dark-green',
	5: 'bg-super-dark-green',
}

const FairPriceBar = ({ fairPrice, className }) => {
	const fairPriceArr = Array.from({ length: 5 })
	const activeColor = colors[fairPrice]

	return (
		<div>
			<div className='flex items-center gap-sm'>
				{fairPriceArr.map((_, i) => (
					<span
						className={clsx(className, i < fairPrice ? activeColor : 'bg-grey')}
						key={i}
					></span>
				))}
			</div>
			<span className='text-sm font-bold text-dark-grey'>
				{labels[fairPrice]}
			</span>
		</div>
	)
}

export default FairPriceBar
