import React, { useState, useEffect } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.css";
import "./CurrencyLabel.css";

function CurrencyLabel(props) {
  const apiKey =
    "e8fdb631f939492140c14ded70df8656d6730d6539cd30bfa14eeb7a1e3fb0a0";
  const topUrl = `https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD&api_key=${apiKey}`;
  let topListString = "";
  let cryptoPriceList = [
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
    { Name: "", Value: "" },
  ];

  let priceUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${topListString}&tsyms=USD,EUR,CAD`;

  const [topList, setTopList] = useState(null);
  const [price, setPrice] = useState(null);

  //fetch top 10 crypto cap, refresh every 120 sec
  useEffect(() => {
    function getTopList() {
      axios.get(topUrl).then((response) => {
        setTopList(response.data);
      });
    }
    getTopList();
    const interval = setInterval(() => getTopList(), 120000);
    return () => {
      clearInterval(interval);
    };
  }, [topUrl]);

  //translate top 10 crypto list to string for priceUrl
  function updateTopUrl() {
    if (topList) {
      topListString = "";
      for (let i = 0; i < 10; i++) {
        topListString += topList.Data[i].CoinInfo.Name;
        cryptoPriceList[i].Name = topList.Data[i].CoinInfo.Name;
        if (i < 9) {
          topListString += ",";
        }
      }
      priceUrl = `https://min-api.cryptocompare.com/data/pricemulti?fsyms=${topListString}&tsyms=USD,EUR,CAD`;
    }
  }

  updateTopUrl();

  //fetch multiple crypto price, refresh every 2 sec
  useEffect(() => {
    function getPrice() {
      axios.get(priceUrl).then((response) => {
        setPrice(response.data);
      });
    }
    getPrice();
    const interval = setInterval(() => getPrice(), 2000);
    return () => {
      clearInterval(interval);
    };
  }, [priceUrl]);

  if (price) {
    for (let i = 0; i < 10; i++) {
      if (price[cryptoPriceList[i].Name] !== undefined) {
        cryptoPriceList[i].Value =
          price[cryptoPriceList[i].Name][props.currency];
      }
    }
  }

  function getCurrencySymbol() {
    switch (props.currency) {
      case "USD":
        return "$";
      case "EUR":
        return "€";
      case "CAD":
        return "C$";
      default:
        return "";
    }
  }

  return (
    <div className="container">
      <div className="row">
        {cryptoPriceList.map((list, index) => (
          <h1 key={index} className="col-sm-12 col-md-6 col-lg-4">
            <span className="badge badge-mine">
              <div className="name">{list.Name}</div>
              <div className="value">
                {getCurrencySymbol()}
                {list.Value}
              </div>
            </span>
          </h1>
        ))}
      </div>
    </div>
  );
}

export default CurrencyLabel;
