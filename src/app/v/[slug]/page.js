import JsonLDPlace from '@/components/jsonld/JsonLDPlace';
import getLocationBySlug from '@/utils/getLocationBySlug';

const Venue = async ({ params }) => {
  const { slug } = params;

  // Fetch the location data
  const location = await getLocationBySlug(slug);

  // Handle location not found
  if (!location) {
    return <div>Location not found</div>;
  }

  // Render the location details
  return (
    <div className='text-white'>
      <h1>{location.name}</h1>
      {location.description && <p>{location.description}</p>}
      {location.imageUrl && <img src={location.imageUrl} alt={location.name} />}
      {/* Display other details as needed */}
      <JsonLDPlace location={location} />
    </div>
  );
};

export default Venue;
