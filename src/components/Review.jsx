import React from "react";
import { StarFill, Star, HandThumbsUpFill } from "react-bootstrap-icons";
import humanizeString from "../utils/humanize";

const Review = (props) => {
  const {
    starRating,
    reviewerName,
    datePosted,
    reviewType,
    reviewText,
    likes,
    appVersion,
    deviceName,
    deviceOS,
    deviceType,
    chips
  } = props;

  let reviewHeader = humanizeString(reviewType);
  let reviewColor = {
    featureRequest: "primary",
    bug: "danger",
    appreciation: "success",
  }[reviewType];

  const filledStars = Array.from({ length: starRating }, (_, index) => (
    <StarFill key={index} />
  ));
  const emptyStars = Array.from({ length: 5 - starRating }, (_, index) => (
    <Star key={index} />
  ));

  return (
    <div className="card mb-2">
      <div className="card-body">
        <div className="row">
          <div className="d-flex flex-row justify-content-between">
            <span>
              {filledStars}
              {emptyStars}
            </span>
            <span className="me-auto ps-2">
              <small>
                <strong>{reviewerName}</strong> {datePosted}
                {chips.length > 0 && chips.map((element, index) => (
                  <span key={index} className="border mx-1 p-1 rounded-2">
                    {element}
                  </span>
                ))}
              </small>
            </span>
            <span className={`text-${reviewColor}`}>{reviewHeader}</span>
          </div>
          <span className={`text-${reviewColor}`}>
            <hr />
          </span>
          <div className="col-sm-9">
            <p className="card-text">{reviewText}</p>
          </div>
          <div className="col-sm-3">
            <strong>
              <ul className="list-unstyled fw-medium">
                <li>
                  <span className="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span>{" "}
                  {likes} <HandThumbsUpFill />
                </li>
                <li>
                  <span className="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span>{" "}
                  {appVersion}
                </li>
                <li>
                  <span className="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span>{" "}
                  {deviceName}
                </li>
                <li>
                  <span className="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span>{" "}
                  {deviceOS}
                </li>
                <li>
                  <span className="d-inline-block bg-secondary rounded-circle p-1 mx-2"></span>{" "}
                  {deviceType}
                </li>
              </ul>
            </strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;