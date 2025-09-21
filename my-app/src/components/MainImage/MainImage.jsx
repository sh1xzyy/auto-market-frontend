import Image from 'next/image'

const MainImage = ({ src, alt }) => {
	return (
		<Image
			className='absolute top-[72px] left-1/2 -translate-x-1/2 h-full max-h-[480px] -z-10 object-cover'
			src={src}
			width={1614}
			height={480}
			alt={alt}
		/>
	)
}

export default MainImage
