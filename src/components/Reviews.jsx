import React from 'react';
import Review from './Review';
import reviewData from '../data';

const Reviews = () => {
    return (
        <>
            {reviewData.map((review, index) => (
                <Review key={index} {...review} />
            ))}
        </>
    );
};

export default Reviews;
