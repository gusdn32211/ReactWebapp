import { createSelector } from 'reselect'

export const fetchDataSelector = (state) => state.fetchData.users;

export const fetchDataUser = createSelector(
	fetchDataSelector,
	(data) => {
		if (data[0]) {
			return data[0].name
		}
		else return ""
	}
)