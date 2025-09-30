import clsx from 'clsx'

const SponsoredBadge = ({ className }) => {
	return (
		<div
			className={clsx(
				'px-sm py-xs text-sm w-fit text-dark-grey bg-sponsored-background-grey rounded-xs border border-sponsored-border-grey',
				className
			)}
		>
			<span>Gesponsert</span>
		</div>
	)
}

export default SponsoredBadge
