import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const stores = [
  { id: 1, name: "Tech Haven", rating: 4.5, reviews: 120 },
  { id: 2, name: "Gadget World", rating: 4.2, reviews: 90 },
  { id: 3, name: "ShopEase", rating: 4.8, reviews: 150 },
  { id: 4, name: "Daily Mart", rating: 3.9, reviews: 80 },
  { id: 5, name: "Quick Buy", rating: 4.1, reviews: 95 },
  { id: 6, name: "Urban Styles", rating: 4.6, reviews: 130 },
  { id: 7, name: "Grocery Hub", rating: 4.3, reviews: 110 },
  { id: 8, name: "Smart Deals", rating: 4.7, reviews: 145 },
  { id: 9, name: "Electro Mart", rating: 3.8, reviews: 75 },
  { id: 10, name: "Fashion Forward", rating: 4.4, reviews: 125 },
  { id: 11, name: "Home Essentials", rating: 4.2, reviews: 85 },
  { id: 12, name: "Super Savings", rating: 4.9, reviews: 200 },
  { id: 13, name: "Fresh Market", rating: 4.0, reviews: 100 },
  { id: 14, name: "Techno World", rating: 4.5, reviews: 135 },
  { id: 15, name: "Game Zone", rating: 4.6, reviews: 140 },
];

const Dashboard = () => {
  const [search, setSearch] = useState("");

  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="container py-4">
      <h1 className="text-center mb-4">📊 Store Review </h1>

      {/* Search Bar */}
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Search stores..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>

      {/* Summary Cards */}
      <div className="row text-center mb-4">
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Stores</h5>
            <p>{stores.length}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Total Reviews</h5>
            <p>{stores.reduce((sum, s) => sum + s.reviews, 0)}</p>
          </div>
        </div>
        <div className="col-md-4">
          <div className="card p-3">
            <h5>Avg. Rating</h5>
            <p>
              {(
                stores.reduce((sum, s) => sum + s.rating, 0) / stores.length
              ).toFixed(1)}
            </p>
          </div>
        </div>
      </div>

      {/* Store List */}
      <div className="row">
        {filteredStores.map((store) => (
          <div key={store.id} className="col-md-6 mb-3">
            <div className="card p-3">
              <h5>{store.name}</h5>
              <p>
                ⭐ {store.rating} ({store.reviews} reviews)
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;
