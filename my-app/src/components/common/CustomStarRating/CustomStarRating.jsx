'use client'

import clsx from 'clsx'
import { Rating } from 'react-simple-star-rating'
import css from './CustomStarRating.module.css'

const CustomStarRating = ({ rating, size = 20, isReadonly }) => {
	return (
		<div className={clsx('flex items-center gap-sm', css.wrapper)}>
			<Rating
				initialValue={3.3}
				size={size}
				readonly={isReadonly}
				fillColor='var(--color-light-yellow)'
				emptyColor='var(--color-background-dark-black)'
				allowFraction={false}
				iconsCount={5}
			/>
		</div>
	)
}

export default CustomStarRating
