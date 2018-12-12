import axios from "axios";
import cheerio from "cheerio";
const baseUrl = "https://api.iextrading.com/1.0/stock/";
const batch = "/batch?types=quote,news,chart&range=";
const serverUrl = "http://localhost:3001"
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
        return axios.get(baseUrl + symbol + "/batch/?types=quote,chart,logo,stats,news&last=5")
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
        return axios.get("https://www.zacks.com/help/glossary/index.php?fbclid=IwAR12gFtr8rS2Rw-AWUuMgGTzgoLI5qwnGNiq_vroGUWRhebzhsP-SFSf0rc").then(function(response) {
            let $ = cheerio.load(response.data);
            const results = [];
            $("section.glossary_content").each(function(i, element) {
                let term = $(element).children("h1").children("a").text();
                console.log(term)
                let definition = $(element).children("p").text();
                console.log(definition)
                results.push({
                    term: term,
                    definition: definition
                  });
            })
        })
    }
};
