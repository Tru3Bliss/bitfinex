import axios from "axios";
import React, { useEffect, useState } from "react";

const SingUpPage = () => {

  const [countryList, setCountryList] = useState([])


  const getCountry = async () => {
    const countries = await axios.get('https://api.bitfinex.com/v1/countries')
    setCountryList(countries)
  }
  useEffect(() => {
    getCountry()
  }, []);

  useEffect(()=>{
    console.log(countryList)
  },[countryList])

  return <div></div>;
};

export default SingUpPage;
