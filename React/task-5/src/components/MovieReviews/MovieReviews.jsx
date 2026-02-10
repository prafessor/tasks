import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { getMovieDetail } from "../../tmdb-api";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    const getCasts = async () => {
      try {
        const response = await getMovieDetail(movieId, "reviews");
        setReviews(response.results);
      } catch (err) {
        console.log(err.message);
      }
    };

    getCasts();
  }, [movieId]);

  return (
    <>
      {reviews.length > 0 ? (
        <div>
          <ul>
            {reviews.map((review) => (
              <li key={review.id}>
                <p>Author: {review.author}</p>
                <p>{review.content}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>We don`t have any reviews for this movie</p>
      )}
    </>
  );
}
