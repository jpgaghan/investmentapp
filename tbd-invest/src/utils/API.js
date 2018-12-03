import axios from "axios";

const baseUrl = "https://api.iextrading.com/1.0/stock/";
const batch = "/batch?types=quote,news,chart&range=";

export default {
    chart: function(symbol, range) {
        return axios.get(baseUrl + symbol + batch + range);
    }
};