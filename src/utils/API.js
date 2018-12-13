import axios from "axios";
import cheerio from "cheerio";

const generateUrl = type => `https://api.iextrading.com/1.0/${type}/`;
const stockUrl =generateUrl('stock');
const stockDataUrl = generateUrl('market');
const batch = "/batch?types=quote,news,chart&range=";
const serverUrl = "http://localhost:3001"
export default {
    chart: function(symbol, range) {
        console.log("call success");
        return axios.get(stockUrl + symbol + batch + range);
    },

    //Indicies Data
    getStockData: function() {
        return axios.get(stockDataUrl);
    },
    // Carousel News API Call
    carou: () => {
        return axios.get("https://newsapi.org/v2/everything?domains=wsj.com&apiKey=eeecaf51d140496494590dc75247b963");
    },
    
    financialData: (symbol) => {
        return axios.get(stockUrl + symbol + "/batch/?types=quote,chart,logo,stats,news&last=5")
    },

    saveWatchlist: function(ticker, uid) {
        return axios.post(
            serverUrl + "/api/tickers",
            {
                ticker,
                uid
            }
        );
      },

      pullWatchlist: function(uid) {
        return axios.get(
            "/api/tickers",
            {
                uid
            }
        );
      },
      
      scrapefinancialTerms: function() {
        return axios.get(
            "/api/tickers/terms",
        ); 
        
    }
};
