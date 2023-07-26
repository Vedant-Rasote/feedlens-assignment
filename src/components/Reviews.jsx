import React from 'react';
import Review from './Review';

const Reviews = (props) => {
    return (
        <>
            {props.reviews?.map((review, index) => (
                <Review key={index} {...review} />
            ))}
        </>
    );
};

export default Reviews;
