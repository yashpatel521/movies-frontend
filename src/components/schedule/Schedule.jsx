import React, { useState, useEffect } from "react";
import "./schedule.css";
import Card from "../cards/Cards";
import { API_URL } from "../../constant";

function Schedule() {
  const filterList = [
    {
      id: 1,
      name: "Popular",
      active: true,
    },
    {
      id: 2,
      name: "Trending",
      active: false,
    },
    {
      id: 3,
      name: "Streaming",
      active: false,
    },
    {
      id: 4,
      name: "In Theatre",
      active: false,
    },
    {
      id: 5,
      name: "Free To Watch",
      active: false,
    },
    {
      id: 6,
      name: "For Rent",
      active: false,
    },
  ];

  const [data, setData] = useState([]);
  const [movies, setMovies] = useState([]);
  const [filters, setFilters] = useState(filterList);

  const fetchData = (pageNo) => {
    fetch(`${API_URL}movie?page=${pageNo}`)
      .then((res) => res.json())
      .then((data) => setData(data.data.results))
      .catch((e) => console.log(e.message));
  };
  useEffect(() => {
    fetchData(1);
  }, []);

  useEffect(() => {
    setMovies(data);
  }, [data]);

  const handleFilterMovies = (pageNo) => {
    setFilters(
      filters.map((filter) => {
        filter.active = false;
        if (filter.id === pageNo) {
          filter.active = true;
        }
        return filter;
      })
    );

    fetchData(pageNo);
  };

  return (
    <>
      <section id="schedule" className="schedule">
        <div className="container-fluid">
          <div className="row">
            <h4 className="section-title">Opening This Week</h4>
          </div>
        </div>
        <div className="row">
          <ul className="filters">
            {filters.map((filter, i) => (
              <li
                key={i}
                className={`${filter.active ? "active" : undefined}`}
                onClick={() => {
                  handleFilterMovies(filter.id);
                }}
              >
                {filter.name}
              </li>
            ))}
          </ul>
        </div>

        <div className="row mt-5">
          {movies &&
            movies.length > 0 &&
            movies.map((movie, i) => <Card key={i} movie={movie} />)}
        </div>
      </section>
    </>
  );
}

export default Schedule;
