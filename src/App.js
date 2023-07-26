import './App.css';
import Filters from './components/Filters';
import Reviews from './components/Reviews';
import reviewData from './data';
import { useState } from 'react';
import { DateTime } from 'luxon';

function App() {
  const [reviews, setReviews] = useState(reviewData);

  const handleSubmit = (e) => {
    e.preventDefault();

    let formData = {
      days: e.target.days.value,
      appVersion: e.target.appVersion.value,
      rating: e.target.rating.value,
      reviewType: e.target.reviewType.value,
      deviceType: e.target.deviceType.value,
      likes: e.target.likes.value
    };
    console.log(formData);
    setReviews(filteredData(formData));
  }

  const filteredData = (formData) => {
    const { days, rating, reviewType, deviceType, appVersion, likes } = formData;

    const versionNumber = appVersion.split(" ")[0];

    const filteredReviews = reviewData.filter((review) => {
      const parsedDate = DateTime.fromFormat(review.datePosted, "MMMM d, yyyy h:mm a");
      const today = DateTime.local();
      let daysAgo;
      if (days === '') {
        daysAgo = Infinity;
      } else {
        daysAgo = today.minus({ days: parseInt(days) });
      }

      return (
        ((rating !== '') ? review.starRating === parseInt(rating) : true) &&
        ((reviewType !== '') ? review.reviewType === reviewType : true) &&
        ((deviceType !== '') ? review.deviceType === deviceType : true) &&
        ((likes !== '') ? review.likes === parseInt(likes) : true) &&
        ((appVersion !== '') ? review.appVersion.includes(versionNumber) : true) &&
        ((days !== '') ? (parsedDate >= daysAgo && parsedDate <= today) : true)
      );
    });

    return filteredReviews;
  };

  const handleReset = () => {

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
