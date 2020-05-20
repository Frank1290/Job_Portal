import React from 'react';
import ReactDOM from 'react-dom';

function Example() {
    return (
        <div>
           <header className="masthead">
            <div classNameName="container">
                <div className="row align-items-center justify-content-center text-center">
                    <div className="col-lg-10 ">
                        <h1 className="text-uppercase text-white font-weight-bold">Welcome to Job Portal</h1>
                        <hr className="divider my-4" />
                    </div>
                    <div className="col-lg-8 align-self-baseline">
                        <a className="button-space btn btn-primary btn-xl js-scroll-trigger" href="#">Add Job</a>
                        <a className="button-space btn btn-light btn-xl js-scroll-trigger" href="#">Search Job</a>
                    </div>
                </div>
            </div>
        </header>
        </div>
    );
}

export default Example;

if (document.getElementById('example')) {
    ReactDOM.render(<Example />, document.getElementById('example'));
}
