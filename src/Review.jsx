// import "./App.css";

const Review=()=> {
  const rev = [
    {
      id: 1,
      name: "ZOHO",
      rating: 5,
      comment: "Very good to work!"
    },
    {
      id: 2,
      name: "TCS",
      rating: 4,
      comment: "Nice but Danger."
    },
    {
      id: 3,
      name: "IBM",
      rating: 3,
      comment: "Average experience."
    }
  ];

  return (
    <div className="container">
      <h1>Customer Reviews</h1>

      {rev.map((revi) => (
        <div className="review-card" key={revi.id}>
          <h2>{revi.name}</h2>
          <p className="rating">Rating: {revi.rating} ⭐</p>
          <p className="comment">{revi.comment}</p>
        </div>
      ))}
    </div>
  );
}

export default Review;
