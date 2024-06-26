import {StyleSheet} from 'react-native';
import {getFontFamily} from '../../assets/fonts/helper';

const style = StyleSheet.create({
	header: {
		marginLeft: 27,
		marginRight: 17,
		marginTop: 30,
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
	},
	messageIcon: {
		padding: 14,
		backgroundColor: '#f9fafb',
		borderRadius: 100,
	},
	messageNumberContainer: {
		backgroundColor: '#f35bac',
		justifyContent: 'center',
		alignItems: 'center',
		flexDirection: 'row',
		width: 10,
		height: 10,
		borderRadius: 100,
		position: 'absolute',
		right: 10,
		top: 12,
	},
	messageNumber: {
		color: 'white',
		fontSize: 6,
		fontFamily: getFontFamily('Inter', '600'),
	},
	userStoryContainer: {
		marginTop: 20,
		marginHorizontal: 28,
	},
	userPostContainer: {
		marginHorizontal: 24,
	},
});

export default style;
