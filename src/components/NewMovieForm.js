import React from "react";
import "./NewMovieForm.css";

function NewMovieForm({ toggleShow, additionHandler, newData, setNewData }) {
  return (
    <div className="NewMovieForm">
      <form
        className="AdditionForm"
        onSubmit={(e) => {
          e.preventDefault();
          additionHandler(newData);
        }}
      >
        <fieldset>
          <legend>Add New Movie</legend>
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            required
            placeholder="Movie title..."
            onChange={(e) => setNewData({ ...newData, title: e.target.value })}
          />
          <label htmlFor="imgURL">Poster URL:</label>
          <input
            type="text"
            id="imgURL"
            required
            placeholder="https://..."
            onChange={(e) => setNewData({ ...newData, imgURL: e.target.value })}
          />
          <label htmlFor="rating">Rating:</label>
          <input
            type="number"
            id="rating"
            required
            placeholder="rating / 10.."
            min="1"
            max="10"
            step="0.1"
            onChange={(e) => setNewData({ ...newData, rating: e.target.value })}
          />
          <label htmlFor="releaseDate">Date of Release: (Optional)</label>
          <input
            type="date"
            id="releaseDate"
            onChange={(e) =>
              setNewData({
                ...newData,
                release: e.target.value || "Unavailable",
              })
            }
          />
          <label htmlFor="genres">Genre(s): (Optional)</label>
          <input
            type="text"
            id="genres"
            placeholder="Genres are separated by slashes.."
            value={newData.genres}
            onChange={(e) =>
              setNewData({
                ...newData,
                genres: e.target.value || "Unavailable genres",
              })
            }
          />
          <div className="addBtn">
            <button type="Submit">Add</button>
          </div>
        </fieldset>
      </form>
      <button onClick={toggleShow} id="exit">
        X
      </button>
    </div>
  );
}

export default NewMovieForm;
