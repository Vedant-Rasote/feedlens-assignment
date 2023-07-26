import React from 'react'
import { Search, StarFill } from 'react-bootstrap-icons';
import Select from 'react-select'

const Filters = (props) => {
    const allOptions = {
        dateRangeOptions: [
            { value: 1, label: "Last 1 Day" },
            { value: 7, label: "Last 7 Days" },
            { value: 30, label: "Last 30 Days" },
            { value: 90, label: "Last 3 Months" },
            { value: 180, label: "Last 6 Months" }
        ],
        appVersionOptions: [
            { value: '1.2.1', label: '1.2.1' },
            { value: '1.2.2', label: '1.2.2' },
            { value: '1.2.3', label: '1.2.3' },
            { value: '1.2.4', label: '1.2.4' },
            { value: '1.2.5', label: '1.2.5' },
        ],
        ratingOptions: [
            { value: 1, label: <><StarFill /></> },
            { value: 2, label: <><StarFill /><StarFill /></> },
            { value: 3, label: <><StarFill /><StarFill /><StarFill /></> },
            { value: 4, label: <><StarFill /><StarFill /><StarFill /><StarFill /></> },
            { value: 5, label: <><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></> },
        ],
        reviewTypeOptions: [
            { value: 'featureRequest', label: 'Feature Request' },
            { value: 'bug', label: 'Bug' },
            { value: 'appreciation', label: 'Appreciation' }
        ],
        deviceOptions: [
            { value: "mobile", label: "Mobile" },
            { value: "laptop", label: "Laptop" },
            { value: "tablet", label: "Tablet" },
            { value: "desktop", label: "Desktop" },
            { value: "smartwatch", label: "Smartwatch" }
        ]
    }

    return (
        <div className="position-sticky" style={{ top: "1rem" }}>
            <form onSubmit={props.handleSubmit}>

                <div>
                    <div className="input-group mb-3">
                        <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                        <button className="btn btn-primary" type="button" id="button-addon2"><Search viewBox="0 0 16 18" /></button>
                    </div>
                </div>
                <div className="accordion">
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseTwo" aria-expanded="true" aria-controls="panelsStayOpen-collapseTwo">
                                Date range
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseTwo" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Select
                                    isMulti
                                    name="days"
                                    options={allOptions.dateRangeOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseThree" aria-expanded="true" aria-controls="panelsStayOpen-collapseThree">
                                APP version
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseThree" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Select
                                    isMulti
                                    name="appVersion"
                                    options={allOptions.appVersionOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFour" aria-expanded="true" aria-controls="panelsStayOpen-collapseFour">
                                Rating
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFour" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Select
                                    isMulti
                                    name="rating"
                                    options={allOptions.ratingOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseFive" aria-expanded="true" aria-controls="panelsStayOpen-collapseFive">
                                Review type
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseFive" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Select
                                    isMulti
                                    name="reviewType"
                                    options={allOptions.reviewTypeOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSix" aria-expanded="true" aria-controls="panelsStayOpen-collapseSix">
                                Device type
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSix" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <Select
                                    isMulti
                                    name="deviceType"
                                    options={allOptions.deviceOptions}
                                    className="basic-multi-select"
                                    classNamePrefix="select"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item">
                        <h2 className="accordion-header">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#panelsStayOpen-collapseSeven" aria-expanded="true" aria-controls="panelsStayOpen-collapseSeven">
                                Likes
                            </button>
                        </h2>
                        <div id="panelsStayOpen-collapseSeven" className="accordion-collapse collapse show">
                            <div className="accordion-body">
                                <div className="accordion-body">
                                    <input type="number" className="form-control" name="likes" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <button className="btn btn-primary w-100 mt-1">Apply</button>
                    <button className="btn btn-secondary w-100 mt-1">Reset all</button>
                </div>
            </form>
        </div>
    )
}

export default Filters