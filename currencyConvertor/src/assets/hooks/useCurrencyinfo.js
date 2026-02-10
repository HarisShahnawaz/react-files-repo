import { useEffect, useState } from "react"
function useCurrencyinfo(currency) {
    useEffect(() =>  {
    fetch(`https://latest.currency-api.pages.dev/v1/currencies/${currency}.json`)
    .then((res) => res.json())
    .then((res) => setData(res[currency]))
    console.log(data)
    }, [currency])
    console.log(data);
    return data;
    
}

export default useCurrencyinfo