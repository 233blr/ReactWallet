import axios from "axios";

const getCurrencyValue = (callBack, url) => {
	axios.get(url)
		.then(response => callBack(response.data.result.toFixed(2)))
		.catch(error => alert(error.message))
}

export default getCurrencyValue;
