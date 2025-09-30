'use client'

import { Field } from 'formik'
import Link from 'next/link'
import { GrFormCheckmark } from 'react-icons/gr'
import { useState } from 'react'
import clsx from 'clsx'

const CheckboxField = () => {
	const [isChecked, setIsChecked] = useState(false)

	return (
		<div className='mb-2lg'>
			<label
				className='grid grid-cols-[auto_auto] items-start gap-x-2sm cursor-pointer'
				htmlFor='checkbox'
			>
				<div
					className={clsx(
						'flex justify-center items-center w-[20px] h-[20px] border border-light-grey rounded-xs  transition-colors linear duration-300',
						isChecked && 'bg-light-violet border-0'
					)}
				>
					{isChecked && <GrFormCheckmark size={20} />}
				</div>
				<span className='text-md font-bold leading-[20px]'>
					Ich stimme der Nutzung meiner Daten zum Erhalt personalisierter
					E-Mail-Werbung von mobile.de (einschließlich E-Mail-Analyse) zu, wie
					in der&nbsp;
					<Link className='text-light-orange underline' href='/'>
						Einwilligungserklärung
					</Link>
					näher beschrieben. Ich kann diese Einwilligung jederzeit widerrufen.
				</span>
				<Field
					className='visually-hidden'
					value={isChecked}
					type='checkbox'
					onClick={() => setIsChecked(prev => !prev)}
					id='checkbox'
				/>
			</label>
		</div>
	)
}

export default CheckboxField
