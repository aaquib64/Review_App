import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Review = () => {
  const [store, setStore] = useState("");
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Review Submitted!\nStore: ${store}\nRating: ${rating}\nReview: ${review}`);
    setStore("");
    setRating(0);
    setReview("");
  };

  return (
    <div className="container mt-5">
      <h2 className="text-primary text-center">Review a Store</h2>

      <form className="card p-4 shadow-lg mt-3" onSubmit={handleSubmit}>
        {/* Store Selection */}
        <div className="mb-3">
          <label className="form-label">Select Store</label>
          <select className="form-select" value={store} onChange={(e) => setStore(e.target.value)} required>
            <option value="">Choose a store...</option>
            <option value="Tech Haven">Tech Haven</option>
            <option value="Gadget World">Gadget World</option>
            <option value="ShopEase">ShopEase</option>
            <option value="Daily Mart">Daily Mart</option>
          </select>
        </div>

        {/* Star Rating */}
        <div className="mb-3">
          <label className="form-label">Rate the Store</label>
          <div className="d-flex">
            {[1, 2, 3, 4, 5].map((num) => (
              <span
                key={num}
                className={`fs-3 me-2 ${num <= rating ? "text-warning" : "text-secondary"}`}
                style={{ cursor: "pointer" }}
                onClick={() => setRating(num)}
              >
                ★
              </span>
            ))}
          </div>
        </div>

        {/* Review Text */}
        <div className="mb-3">
          <label className="form-label">Write Your Review</label>
          <textarea
            className="form-control"
            rows="4"
            placeholder="Share your experience..."
            value={review}
            onChange={(e) => setReview(e.target.value)}
            required
          ></textarea>
        </div>

        {/* Submit Button */}
        <button type="submit" className="btn btn-primary w-100">
          Submit Review
        </button>
      </form>
    </div>
  );
};

export default Review;
