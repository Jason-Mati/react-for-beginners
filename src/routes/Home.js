import { useState, useEffect } from "react";
import Loading from "../components/Loading";
import Movie from "../components/Movie";
import styles from "./Home.module.css";

function Home() {
  const [loading, setLoading] = useState(true);
  const [header, setHeader] = useState(false);
  const [movies, setMovies] = useState([]);
  const getMovies = async () => {
    const json = await (
      await fetch(
        `https://yts.mx/api/v2/list_movies.json?minimum_rating=9.0&sort_by=year`
      )
    ).json();

    setMovies(json.data.movies);
    setLoading(false);
    setHeader(true);
  };

  useEffect(() => {
    getMovies();
  }, []);
  console.log(movies);
  return (
    <div>
      <div>
        {!header ? null : (
          <header>{`The Most High Perform Movies (Refence date : ${new Date().getFullYear()}. ${
            new Date().getMonth() + 1
          }. ${new Date().getDate()}
          )`}</header>
        )}
      </div>

      <div className={styles.container}>
        {loading ? (
          <div className={styles.loader}>
            <Loading />
          </div>
        ) : (
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie
                key={movie.id}
                id={movie.id}
                year={movie.year}
                coverImg={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        )}
      </div>
      <footer>Made by Jason.Choi @2023.Jan</footer>
      <div className={styles.under_footer}></div>
    </div>
  );
}

export default Home;
