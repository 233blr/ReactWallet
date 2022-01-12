import { Image } from "react-native";
import icons from "../constans/icons";
import colors from "../constans/colors";

const tabBarIcon = ({focused}) => (
	<Image
		source={icons.transactionIcon}
		resizeMode='contain'
		style={{
			width: 25,
			height: 25,
			tintColor: focused ? colors.blue : colors.grey,
		}}
	/>
);

export default tabBarIcon;
