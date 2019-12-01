import iextrading from "../api/iextrading";


// Fetching functions that grab information from IEXTrading. 




// accepts a stock code and returns with the correspond stock quote from iextrading.
export const fetchStockData = async code => {
  const result = await iextrading.get(
    `/stable/stock/${code}/quote?token=Tpk_1b4edfd075444fd28f41baa8dec27c89`
  );
  return result.data;
};

// takes an array of stocks and returns with an array of updated stocks!
export async function updateStocksData(stocks) {
  const promiseArray = stocks.map(async stock => {
    const response = await fetchStockData(stock.symbol);
    return response;
  });
  const updatedStocks = await Promise.all(promiseArray);
  return updatedStocks;
}
