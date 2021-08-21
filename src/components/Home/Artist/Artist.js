import React from 'react';
import { useState, useEffect } from "react";
import ArtistDetails from './ArtistDetails'
import artistData from './ArtistData'

// const addArtist = () => {
//     fetch('https://warm-peak-57266.herokuapp.com/addArtists', {
//         method: 'POST',
//         headers: { 'Content-Type': 'application/json' },
//         body: JSON.stringify(artistData)
//     })
//     .then(res => res.json())
//     .then(data => console.log(data))
// }

const Artist = () => {
  const [artists, setArtists] = useState([]);
  console.log(artists);

  useEffect(() => {
    fetch(`https://warm-peak-57266.herokuapp.com/artists`)
      .then((res) => res.json())
      .then((data) => setArtists(data));
  }, []);

    return (
        <section className="mt-5 m-3 py-5">
          <div className="text-center">
            <h1 style={{ color: "#34b6bf", fontWeight: "500" }}>
            Artist & Photographer
            </h1>
            <p className="text-secondary">
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore.
            </p>
          </div>
          <div className="d-flex justify-content-center">
            <div className="row mx-3 py-4">
            {artists.length !== 0 ? (
            artists.map((artist) => (
              <ArtistDetails artist={artist}></ArtistDetails>
            ))
            ) : (
            <div class="loadingio-spinner-dual-ring-qlmdv3qjtx">
              <div class="ldio-zeqa7nuzur">
                <div></div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
            )}
           </div>
          </div>
        </section>
  );
};

export default Artist;