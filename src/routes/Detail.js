import { useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";
import Loading from "../components/Loading";
import MovieDetail from "../components/MovieDetail";
import styles from "./Detail.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [detail, setDetail] = useState([]);
  const { id } = useParams();
  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json.data.movie);
    setDetail(json.data.movie);
    setLoading(false);
  };
  useEffect(() => {
    getMovie();
  }, []);
  return (
    <div>
      {loading ? (
        <div className={styles.loader}>
          <Loading />
        </div>
      ) : (
        <div>
          <MovieDetail
            key={detail.id}
            id={detail.id}
            backgroundImg={detail.background_image}
            year={detail.year}
            coverImg={detail.medium_cover_image}
            title={detail.title}
            description={detail.description_full}
            genres={detail.genres}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
