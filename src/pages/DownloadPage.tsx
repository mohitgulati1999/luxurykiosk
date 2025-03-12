import React, { useEffect, useState } from 'react';
    import { useParams, Link } from 'react-router-dom';
    import { getPhoto, deletePhoto } from './PhotoPage';

    const DownloadPage = () => {
      const { id } = useParams<{ id: string }>();
      const [photoData, setPhotoData] = useState<string | undefined>();

      useEffect(() => {
        if (id) {
          const data = getPhoto(id);
          if (data) {
            setPhotoData(data);
            deletePhoto(id);
          }
        }
      }, [id]);

      if (!photoData) {
        return (
          <div className="min-h-screen flex flex-col justify-center items-center text-amber-300">
            <h1 className="text-3xl font-bold mb-4">Photo Not Found</h1>
            <p className="text-lg">The photo has either already been downloaded or the link is invalid.</p>
            <Link to="/" className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg text-black text-xl font-semibold hover:from-amber-500 hover:to-amber-300 transition-all duration-300">
              Go Home
            </Link>
          </div>
        );
      }

      return (
        <div className="min-h-screen flex flex-col justify-center items-center">
          <h1 className="text-3xl font-bold mb-8 text-amber-300">Download Your Photo</h1>
          <img src={photoData} alt="Downloaded Selfie" className="max-w-full max-h-80vh rounded-lg shadow-xl" />
          <a
            href={photoData}
            download="selfie.jpg"
            className="mt-8 px-8 py-4 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg text-black text-xl font-semibold hover:from-amber-500 hover:to-amber-300 transition-all duration-300"
          >
            Download
          </a>
          <Link to="/" className="mt-4 px-6 py-2 bg-gradient-to-r from-amber-600 to-amber-400 rounded-lg text-black text-xl font-semibold hover:from-amber-500 hover:to-amber-300 transition-all duration-300">
            Go Home
          </Link>
        </div>
      );
    };

    export default DownloadPage;
