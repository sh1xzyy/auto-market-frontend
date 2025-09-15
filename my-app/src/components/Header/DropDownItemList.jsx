import DropDownSubItem from './DropDownSubItem'

const DropDownItemList = ({ list }) => {
	return (
		<ul>
			{list.map((el, i) => (
				<DropDownSubItem key={i} el={el} />
			))}
		</ul>
	)
}

export default DropDownItemList
