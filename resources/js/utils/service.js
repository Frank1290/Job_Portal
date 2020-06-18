import axios from "axios";

const apiToken =
    "HzE7GStGwW8fec1P4w62BFtXV4vBQCLIL1ZD_-sf8-YhKEzoWDu4iCmHtNI8_sk3KE8";
const tokenUrl = "https://www.universal-tutorial.com/api/getaccesstoken";
const countriesAPI = "https://www.universal-tutorial.com/api/countries/";
const statesAPI = "https://www.universal-tutorial.com/api/states/";
const citiesAPI = "https://www.universal-tutorial.com/api/cities/";

const getToken = () => {
    return axios.get(tokenUrl, {
        headers: {
            Accept: "application/json",
            "api-token": apiToken,
            "user-email": "devechha.ramekar@gmail.com"
        }
    });
};
const getCountries = authToken => {
    return axios.get(countriesAPI, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json"
        }
    });
};
const getStates = (authToken, countryName) => {
    if (!countryName) return;
    return axios.get(`${statesAPI}${countryName}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json"
        }
    });
};
const getCities = (authToken, stateName) => {
    if (!stateName) return;
    return axios.get(`${citiesAPI}${stateName}`, {
        headers: {
            Authorization: `Bearer ${authToken}`,
            Accept: "application/json"
        }
    });
};

export { getToken, getCountries, getStates, getCities };
