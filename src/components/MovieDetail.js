import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";
import styles from "./MovieDetail.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHandPointLeft } from "@fortawesome/free-regular-svg-icons";
function MovieDetail({ year, coverImg, title, description, genres }) {
  const navigate = useNavigate();
  return (
    <div>
      <div
        onClick={() => {
          navigate(-1);
        }}
        className={styles.x}
      >
        <FontAwesomeIcon icon={faHandPointLeft} />
      </div>
      <div className={styles.detail}>
        <img src={coverImg} alt={title} className={styles.movie__img} />
        <div>
          <h2 className={styles.movie__title}>{title}</h2>
          <h3 className={styles.movie__year}>{year}</h3>
          <p>{description}</p>
          <ul className={styles.movie__genres}>
            {genres.map((g) => (
              <li key={g}>{g}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
MovieDetail.propTypes = {
  id: PropTypes.number.isRequired,
  coverImg: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default MovieDetail;
