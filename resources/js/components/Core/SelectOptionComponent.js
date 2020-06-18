import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
    getToken,
    getCountries,
    getStates,
    getCities
} from "../../utils/service";

const keyValue = {
    countries: "country",
    states: "state",
    cities: "city"
};
const SelectOptionComponent = ({
    locationKey,
    authToken,
    ddObject,
    onChange,
    defaultObj
}) => {
    const [title, setTitle] = useState(`Choose ${ddObject.label}...`);
    const [dropdownList, setDropdownList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCountries(authToken);
            if (response) {
                setDropdownList(response.data);
            }
        };
        if (authToken !== "" && locationKey === "countries") {
            fetchData();
        }
        if (locationKey === "states") {
            setDropdownList([]);
        }
    }, [authToken]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getStates(
                authToken,
                defaultObj.countries.value
            );

            if (response) {
                setDropdownList(response.data);
                setTitle(`Choose ${ddObject.label}...`);
            }
        };
        if (authToken !== "" && locationKey === "states") {
            fetchData();
        }
        if (locationKey === "cities") {
            setDropdownList([]);
            setTitle(`Choose ${ddObject.label}...`);
        }
    }, [authToken, defaultObj.countries]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await getCities(
                authToken,
                defaultObj.states.value
            );
            if (response) {
                setDropdownList(response.data);
                setTitle(`Choose ${ddObject.label}...`);
            }
        };
        if (authToken !== "" && locationKey === "cities") {
            fetchData();
        }
    }, [authToken, defaultObj.states]);

    const handleOnClick = event => {
        const { value } = event.target;
        setTitle(value);
        onChange("location", { key: locationKey, value });
    };

    return (
        <div className="input-group selectWrapper mb-3" key={locationKey}>
            <select
                className="custom-select"
                id="inputGroupSelect01"
                onChange={handleOnClick}
            >
                <option value={title} key={title}>
                    {title}
                </option>
                {dropdownList.length
                    ? dropdownList.map(list => {
                          const name = `${keyValue[locationKey]}_name`;
                          const listName = list[name];
                          return (
                              <option key={listName} value={listName}>
                                  {listName}
                              </option>
                          );
                      })
                    : null}
            </select>
        </div>
    );
};

SelectOptionComponent.prototype = {
    key: PropTypes.string,
    ddObject: PropTypes.shape({
        key: PropTypes.string,
        label: PropTypes.string,
        value: PropTypes.string
    }),
    defaultObj: PropTypes.shape({
        countries: PropTypes.shape({
            label: PropTypes.shape,
            value: PropTypes.shape,
            error: PropTypes.string
        }),
        states: PropTypes.shape({
            label: PropTypes.shape,
            value: PropTypes.shape,
            error: PropTypes.string
        }),
        cities: PropTypes.shape({
            label: PropTypes.shape,
            value: PropTypes.shape,
            error: PropTypes.string
        })
    }),
    onChange: PropTypes.func,
    authToken: PropTypes.string
};

export default SelectOptionComponent;
