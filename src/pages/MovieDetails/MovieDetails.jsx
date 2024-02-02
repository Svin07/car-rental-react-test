// компонент MovieDetails, сторінка пошуку детальної інформації про фільм
import { useState, useEffect, useRef } from 'react';
import { Suspense } from 'react';
import {
  NavLink,
  Outlet,
  useParams,
  useLocation,
  useNavigate,
} from 'react-router-dom';
import css from './MovieDetails.module.css';
import styled from 'styled-components';
import Loader from '../../components/Loader/Loader';

import { getDetailsMoviesById } from 'API/API/api';

const defaultImg =
  'https://ireland.apollo.olxcdn.com/v1/files/0iq0gb9ppip8-UA/image;s=1000x700';

const StyledLink = styled(NavLink)`
  color: white;

  &.active {
    color: orange;
  }
`;

export default function MovieDetails() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [moviesObj, setMoviesObj] = useState(null);

  const { id } = useParams();
  const basicUrlForImage = 'https://image.tmdb.org/t/p/w500';
  const location = useLocation();
  const navigate = useNavigate();
  const titleRef = useRef();

  useEffect(() => {
    const fetchMoviesDetails = async () => {
      try {
        setIsLoading(true);
        const data = await getDetailsMoviesById(id);
        setMoviesObj(data);
      } catch (error) {
        setError(error.response.data.status_message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchMoviesDetails();
  }, [id]);

  const hendleClickBackBtn = () => {
    navigate(location.state);
  };

  const handleBackClick = () => {
    titleRef.current.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  };

  if (!moviesObj) return;
  const { title, genres, overview, poster_path, release_date, vote_average } =
    moviesObj;

  const genresName = genres.map(genre => genre.name).join(' ');

  return (
    <>
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <div className={css.body}>
        <button
          type="button"
          onClick={hendleClickBackBtn}
          className={css.closingbutton}
        >
          <span>Go back</span>
        </button>
      </div>

      <section className={css.movieCard}>
        <img
          className={css.movieImg}
          src={poster_path ? `${basicUrlForImage}${poster_path}` : defaultImg}
          alt={title}
        />
        <div className={css.movieDescr}>
          <h1 className={css.title}>
            {title} ({release_date.slice(0, 4)})
          </h1>
          <p>User score: {(vote_average * 10).toFixed(0)}%</p>
          <h3 className={css.movieOverview}>Overview</h3>
          <p>{overview}</p>
          <h4 className={css.movieGenres}>Genres</h4>
          <p>{genresName}</p>
        </div>
      </section>
      <section className={css.additionalInformation}>
        <h5>Additional Information</h5>
        <ul>
          <li>
            <StyledLink
              ref={titleRef}
              onClick={handleBackClick}
              to={`cast`}
              state={location.state}
            >
              Cast
            </StyledLink>
          </li>
          <li>
            <StyledLink to={`reviews`} state={location.state}>
              Reviews
            </StyledLink>
          </li>
        </ul>
      </section>

      <Suspense fallback={'Loading...'}>
        <Outlet />
      </Suspense>
    </>
  );
}
