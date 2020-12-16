import { Link } from 'react-router';

const url = 'https://www.google.co.in/maps/@16.4177453,73.994756,15z';

const FullItinerary = () => {
  return (
    <Link className='itinerary' target="_blank" to={url} >Check Location</Link>
  )
};

export default FullItinerary;
