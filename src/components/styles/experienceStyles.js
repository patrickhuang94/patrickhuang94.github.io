export const cardContainer = {
	display: 'flex',
	width: '100%',
	// margin: '25px 0px',
	marginBottom: '40px',
	'@media screen and (max-width: 899px)': {
		justifyContent: 'center'
	}
}

export const cardTopContainer = {
	display: 'flex',
	justifyContent: 'space-between',
	'@media screen and (max-width: 649px)': {
		flexDirection: 'column'
	}
}

export const titleAndRoleContainer = {
	display: 'flex',
	flexDirection: 'column'
}

export const marginTopStyle = {
	marginTop: '8px'
}

export const descriptionContainer = {
	margin: '20px 0px 0px 0px'
}

export const hideWhenSmall = {
	'@media screen and (max-width: 649px)': {
		display: 'none'
	}
}

export const iconStyle = {
	margin: '0px 8px',
	width: '25px',
	height: '25px',
}

export const iconAndLocationContainer = {
	display: 'flex',
	flexDirection: 'column',
	'@media screen and (max-width: 649px)': {
		marginTop: '8px'
	}
}

export const iconAndLocationStyle = {
	display: 'flex',
	'@media screen and (max-width: 649px)': {
		fontSize: '16px'
	}
}

export const locationContainer = {
	display: 'flex',
	flexDirection: 'column'
}

export const tagsContainer = {
	display: 'flex',
	flexWrap: 'wrap',
	alignItems: 'center'
}

export const tagStyle = {
	border: '2px solid #1FBDC2',
	borderRadius: '10px',
	padding: '2px 5px',
	margin: '5px 12px 5px 0px',
	fontSize: '14px'
}
