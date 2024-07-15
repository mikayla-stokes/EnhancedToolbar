import React, { useState } from 'react';

function RateMovieButton({ movie }) {
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleRatingSubmit = (ratingValue) => {
    setRating(ratingValue);
    setSubmitted(true);
  };

  return (
    <div>
      <h2>{movie}</h2>
      <div>
        {[1, 2, 3, 4, 5].map((star) => (
          <button key={star} onClick={() => handleRatingSubmit(star)}>
            {star} Star{star > 1 && 's'}
          </button>
        ))}
      </div>
      {submitted && <p>Thank you for rating {movie} with {rating} stars!</p>}
    </div>
  );
}

export default RateMovieButton;