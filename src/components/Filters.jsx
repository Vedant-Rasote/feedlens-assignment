import React from 'react'
import { Search, StarFill } from 'react-bootstrap-icons';
import Select from 'react-select'

const Filters = (props) => {
    const allOptions = {
        sortOptions: [
            { value: 1, label: <><StarFill /></> },
            { value: 2, label: <><StarFill /><StarFill /></> },
            { value: 3, label: <><StarFill /><StarFill /><StarFill /></> },
            { value: 4, label: <><StarFill /><StarFill /><StarFill /><StarFill /></> },
            { value: 5, label: <><StarFill /><StarFill /><StarFill /><StarFill /><StarFill /></> },
        ],
        dateRangeOptions: [
            { value: -1, label: "Last 1 Day" },
            { value: -7, label: "Last 7 Days" },
            { value: -30, label: "Last 30 Days" },
            { value: -90, label: "Last 3 Months" },
            { value: -180, label: "Last 6 Months" }
        ],
        appVersionOptions: [
            { value: 121, label: '1.2.1' },
            { value: 122, label: '1.2.2' },
            { value: 123, label: '1.2.3' },
            { value: 124, label: '1.2.4' },
            { value: 125, label: '1.2.5' },
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
            <div>
                <div className="input-group mb-3">
                    <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
                    <button className="btn btn-primary" type="button" id="button-addon2"><Search viewBox="0 0 16 18" /></button>
                </div>
            </div>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Sort
                        </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            Sort
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            Date range
                        </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Select
                                isMulti
                                name="Rating"
                                options={allOptions.dateRangeOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            APP version
                        </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Select
                                isMulti
                                name="Rating"
                                options={allOptions.appVersionOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                            Rating
                        </button>
                    </h2>
                    <div id="collapseFour" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Select
                                isMulti
                                name="Rating"
                                options={allOptions.ratingOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFive" aria-expanded="false" aria-controls="collapseFive">
                            Review type
                        </button>
                    </h2>
                    <div id="collapseFive" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Select
                                isMulti
                                name="Rating"
                                options={allOptions.reviewTypeOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSix" aria-expanded="false" aria-controls="collapseSix">
                            Device
                        </button>
                    </h2>
                    <div id="collapseSix" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <Select
                                isMulti
                                name="Rating"
                                options={allOptions.deviceOptions}
                                className="basic-multi-select"
                                classNamePrefix="select"
                            />
                        </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header">
                        <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSeven" aria-expanded="false" aria-controls="collapseSeven">
                            Likes
                        </button>
                    </h2>
                    <div id="collapseSeven" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                        <div className="accordion-body">
                            <label htmlFor="customRange1" className="form-label">Likes</label>
                            <input type="range" className="form-range" id="customRange1" />
                        </div>
                    </div>
                </div>
                <button className="btn btn-primary w-100 mt-1">Apply</button>
                <button className="btn btn-secondary w-100 mt-1">Reset all</button>
            </div>
        </div>
    )
}

export default Filters