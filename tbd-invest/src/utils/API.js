import axios from "axios";

const baseUrl = "https://api.iextrading.com/1.0/stock/";
const batch = "/batch?types=quote,news,chart&range=";

export default {
    chart: function(symbol, range) {
        console.log("call success");
        return axios.get(baseUrl + symbol + batch + range);
    },
    // Carousel News API Call
    carou: () => {
        return axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=eeecaf51d140496494590dc75247b963");
    },
    financialData: (symbol) => {
        return axios.get(baseUrl + symbol + "/batch/?types=quote,news,chart,logo,stats")
    },
    saveWatchlist: function(ticker, uid) {
        return axios.post(
            "/api/tickers",
            {
                ticker,
                uid
            }
        );
      }
};
