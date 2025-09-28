import AIHelperIntro from '@/components/AIHelperIntro/AIHelperIntro'
import DealsForYou from '@/components/DealsForYou/DealsForYou'
import LastViewed from '@/components/LastViewed/LastViewed'
import MainFilters from '@/components/MainFilters/MainFilters'
import MainImage from '@/components/MainImage/MainImage'
import ParkedVehicles from '@/components/ParkedVehicles/ParkedVehicles'

export default function Home() {
	return (
		<>
			<h1 className='visually-hidden'>
				Go mobile. Find what&apos;s best for you - on Germany&apos;s biggest
				vehicle marketplace
			</h1>

			<MainImage
				src='/mainImage/main.jpg'
				alt='go mobile. find whats best for you - on germans biggest vehicle marketplace'
			/>

			<section className='py-2sm mt-[405px]'>
				<MainFilters />
			</section>

			<section className='py-2sm'>
				<AIHelperIntro />
			</section>

			<section className='py-2sm'>
				<DealsForYou />
			</section>

			<section className='py-2sm'>
				<ParkedVehicles />
			</section>

			<section className='py-2sm'>
				<LastViewed />
			</section>
		</>
	)
}
