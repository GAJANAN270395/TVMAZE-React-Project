import { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';

// Context
import ShowContext from '../context/shows/ShowsContext';

// Components
import Loader from '../components/Loader';

const Singlepage = ({ match }) => {
  const { getSingleShow, singleShow, loading } = useContext(ShowContext);
  const { id } = useParams();

  useEffect(() => {
    // getSingleShow(match.params.id);
    getSingleShow(id);

    // eslint-disable-next-line
  }, []);

  const removeTags = (text) => {
    if (text === null || text === '') {
      return false;
    } else {
      text = text.toString();
    }
    return text.replace(/(<([^>]+)>)/gi, '');
  };


  return (
    <>
      Single Page
      {
        loading ? (
          <Loader />
        ) : (
          <div className='singleshow'>
            <img
              src={
                singleShow.image
                  ? singleShow.image.medium
                  : "https://img.freepik.com/free-vector/internet-network-warning-404-error-page-file-found-web-page_1150-48326.jpg?w=2000"
              }
              alt={singleShow.name}
            />
            <div className='singleshow__info'>
              <h1>{singleShow.name}</h1>
              {
                singleShow.genres &&
                singleShow.genres.map((genre) => (
                  <span key={genre} className='singleshow__genre'>
                    {genre}
                  </span>
                ))
              }

              <p>
                <strong>Status:</strong>
                {singleShow.status && singleShow.status}
              </p>

              <p>
                <strong>Rating:</strong>{' '}
                {singleShow.rating ? singleShow.rating.average : "No rating"}
              </p>

              <p>
                <strong>Official Site:</strong>{' '}
                {singleShow.officialSite ? (
                  <a
                    href={singleShow.officialSite}
                    target='_blank'
                    rel='noreferrer'
                  >
                    {singleShow.officialSite}
                  </a>
                ) : (
                  "No official site"
                )}
              </p>
              <p>{singleShow.summary &&
                removeTags(singleShow.summary)}</p>
            </div>
          </div>
        )
      }
    </>
  )
}

export default Singlepage