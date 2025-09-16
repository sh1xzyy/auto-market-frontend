import { counselor, toKnow } from './infoDropDownMenu.data'
import { buy, overview, sell } from './myMobileDe.data'
import { services, vehicleSearch } from './searchDropDownMenu.data'
import {
	dealerAreaList,
	privateAndCommercialList,
} from './sellDropDownMenu.data'

export const burgerNavMenu = [
	{ title: 'Mein mobile.de', list: [overview, buy, sell] },
	{ title: 'Suchen', list: [vehicleSearch, services] },
	{ title: 'Verkaufen', list: [privateAndCommercialList, dealerAreaList] },
	{ title: 'Informieren', list: [toKnow, counselor] },
]
