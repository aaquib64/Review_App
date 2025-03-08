import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Searchbar.css"; // Import the CSS file

const stores = [
  { id: 1, name: "Tech Haven", rating: 4.5, reviews: 120 },
  { id: 2, name: "Gadget World", rating: 4.2, reviews: 90 },
  { id: 3, name: "ShopEase", rating: 4.8, reviews: 150 },
  { id: 4, name: "Daily Mart", rating: 3.9, reviews: 80 },
];

function SearchBar() {
  const [search, setSearch] = useState("");
  const navigate = useNavigate();


  const filteredStores = stores.filter((store) =>
    store.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      {/* Search Section with Background Image */}
      <div className="search-container">
        <h1 className="Heading">Uncover the Best-Rated Stores</h1>
        <div className="search-box">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search for stores..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <button className="btn btn-primary search-btn"  onClick={() => navigate("/stores")}>Search</button>
        </div>
      </div>

      {/* Store Results Below the Image */}
      <div className="store-results">
        {filteredStores.length > 0 ? (
          <div className="row mt-4 p-4">
            {filteredStores.map((store) => (
              <div key={store.id} className="col-md-6 mb-3">
                <div className="card p-3">
                  <h5>{store.name}</h5>
                  <p>⭐ {store.rating} ({store.reviews} reviews)</p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center mt-4">No stores found.</p>
        )}
      </div>
    </>
  );
}

export default SearchBar;
