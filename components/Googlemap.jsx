import { useMemo} from 'react';
import { GoogleMap, useLoadScript, Marker } from "@react-google-maps/api";

export default function Googlemap () {
  const { isLoaded } = useLoadScript({ 
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY
  });

  if (!isLoaded) return <div>Loading...!</div>
  
  return (
    <div className='lg:col-span-2 col-span-1 bg-gray-200 flex justify-between w-full border rounded-lg '>
      <div className='flex flex-col min-w-full p-4'>
        <Map/>
      </div>
    </div>
  )
}

function Map() {

  return <GoogleMap  
           zoom={11}  
           center={{lat: -1.2589281655331093, lng: 36.785689660197995  }}  
           mapContainerClassName='map-container'
           >
          <Marker position={{lat: -1.2589281655331093, lng: 36.785689660197995  }}/> 
          <Marker position={{lat: -1.258435167482621, lng: 36.789462467761766  }}/> 
  </GoogleMap>
}

