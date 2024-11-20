import getLocations from "@/utils/getLocations";


const VenuesPage = async () => {
  

  // Fetch the location data
  const locations = await getLocations()

  // Render the location details
  return (
    <div className='text-white'>
      <h1>Venues</h1>
      <pre>
        {JSON.stringify(locations, null, 2)}
      </pre>
      
      
    </div>
  );
};

export default VenuesPage;
