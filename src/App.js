import Filters from './components/Filters';
import Reviews from './components/Reviews';
import reviewData from './data';
import { useState } from 'react';
import { DateTime } from 'luxon';

function App() {
  const [reviews, setReviews] = useState(reviewData);

  const handleSubmit = (e) => {
    e.preventDefault();

    const appVersionInputs = e.target.parentElement.querySelectorAll('input[name="appVersion"]')
    const appVersionValues = processInputs(appVersionInputs);

    const ratingInputs = e.target.parentElement.querySelectorAll('input[name="rating"]')
    const ratingValues = processInputs(ratingInputs, true);

    const reviewTypeInputs = e.target.parentElement.querySelectorAll('input[name="reviewType"]')
    const reviewTypeValues = processInputs(reviewTypeInputs);

    const deviceTypeInputs = e.target.parentElement.querySelectorAll('input[name="deviceType"]')
    const deviceTypeValues = processInputs(deviceTypeInputs);

    let formData = {
      appVersion: appVersionValues,
      rating: ratingValues,
      reviewType: reviewTypeValues,
      deviceType: deviceTypeValues,
      likes: e.target.likes.value,
      days: e.target.days.value
    };

    setReviews(filteredData(formData));
  }

  const processInputs = (inputs, convert = false) => {
    let combined = Array.from(inputs).map(input => convert ? parseInt(input.value) : input.value);
    return combined.filter(Boolean).length > 0 ? combined.filter(Boolean) : null;
  }

  const filteredData = (formData) => {
    const { days, rating, reviewType, deviceType, appVersion, likes } = formData;

    const filteredReviews = reviewData.filter((review) => {
      const parsedDate = DateTime.fromFormat(review.datePosted, "MMMM d, yyyy h:mm a");
      const today = DateTime.local();
      let daysAgo = (days === '') ? Infinity : today.minus({ days: parseInt(days) });
      const versionNumber = review.appVersion.split(" ")[0];
      return (
        ((rating != null) ? rating.includes(review.starRating) : true) &&
        ((reviewType != null) ? reviewType.includes(review.reviewType) : true) &&
        ((deviceType != null) ? deviceType.includes(review.deviceType) : true) &&
        ((appVersion != null) ? appVersion.includes(versionNumber) : true) &&
        ((likes !== '') ? review.likes === parseInt(likes) : true) &&
        ((days !== '') ? (parsedDate >= daysAgo && parsedDate <= today) : true)
      );
    });

    return filteredReviews;
  };

  const handleReset = () => {
    window.location.reload(false);
  }

  return (
    <main className="container-fluid">
      <div className="row g-4 mt-1">
        <div className="col-sm-4 col-md-4 col-lg-3">
          <Filters handleSubmit={handleSubmit} handleReset={handleReset} />
        </div>
        <div className="col-sm-8 col-md-8 col-lg-9">
          <Reviews reviews={reviews} />
        </div>
      </div>
    </main>
  );
}

export default App;
