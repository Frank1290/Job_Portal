import React from "react";
import ButtonComponent from "../Button/ButtonComponent";

const SearchBarComponent = () => {
    return (
        <div className="search-bar-wrapper">
            <div className="search-bar-section">
                <div className="row">
                    <div className="col-sm-5">
                        <input
                            type="text"
                            className="form-style "
                            placeholder="What jobs you want?"
                        />
                    </div>

                    <div className="col-sm-5 ">
                        <input
                            type="text"
                            className="form-style"
                            placeholder="Location"
                        />
                    </div>
                    <div className="col-sm-2">
                        {/* <ButtonComponent
                            name="Search"
                            classNames="text-white btn-brown" */}

                        <input
                            type="submit"
                            placeholder="Search"
                            className="search-job-style btn-brown"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};
export default SearchBarComponent;
