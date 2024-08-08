import React, { useEffect, useState } from 'react'
import { useAsync } from '../hooks/useAsync'
import { useParams } from 'react-router-dom';
import './ShowCard.css';

export const ShowCard = () => {
  const { id } = useParams();
  const { datos, cargando, setData } = useAsync([]);
  const [extendData, setExtendData] = useState([])
  const [gamesState, setGamesState] = useState({ gamesWiiU: [], games3DS: [], gamesSwitch: [] })

  const obtainData = async (url) => {
    try {
      const response = await fetch(url);

      // Check if the response is OK (status code 200-299)
      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();

      // Ensure the 'amiibo' array exists and has at least one element
      if (data.amiibo && Array.isArray(data.amiibo) && data.amiibo.length > 0) {
        return data.amiibo[0];
      } else {
        console.warn("No amiibo data found");
        return null;
      }

    } catch (error) {
      console.error("Error fetching data: ", error);
      return null;
    }
  };


  useEffect(() => {
    const url = `https://amiiboapi.com/api/amiibo/?id=${id}`;
    setData(url)
  }, [])


  useEffect(() => {
    if (datos) {
      const head = id.substring(0, 8);
      const tail = id.substring(8);
      if (datos.character) {
        const url = `https://www.amiiboapi.com/api/amiibo/?character=${datos.character}&showusage&head=${head}&tail=${tail}`;
        const response = obtainData(url)
        let data = {};
        response.then((allData) => {
          setExtendData(allData)
        })
      }
    }

  }, [datos])

  return (
    !cargando && datos.image && extendData ?
      <div className='content'>
        <header className='show-card-header'>
          <img src={datos.image} className='show-card-img' alt={`${datos.character + " " + datos.gameSeries}`} />
          <div className='datos'>
            <h2>{datos.name}</h2>
            <p className='show-card-attribute'><span>Release: </span>{datos.release && datos.release.jp}</p>
            <p className='show-card-attribute'><span>Game Series: </span>{datos.gameSeries}</p>
            <p className='show-card-attribute'><span>Amiibo’s Series: </span>{datos.amiiboSeries}</p>
          </div>
        </header>
        <section className='games'>
          <h2 className='title'>Compatibility</h2>
          {
            extendData.games3DS && (
              <article>
                <h2>Game 3ds</h2>
                <table className='game'>
                  <thead>
                    <tr>
                      <th>Title</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extendData.games3DS.map((game, index) => {
                      return (
                        <tr key={index}>
                          <td>{game.gameName}</td>
                          <td>{game.amiiboUsage[0].Usage}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </article>
            )
          }
          {
            extendData.gamesSwitch && (
              <article>
                <h2>Game Switch</h2>
                <table className='game'>
                  <thead>
                    <tr>
                      <th>Tittle</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extendData.gamesSwitch.map((game, index) => {
                      return (
                        <tr key={index}>
                          <td>{game.gameName}</td>
                          <td>{game.amiiboUsage[0].Usage}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </article>
            )
          }
          {
            extendData.gamesWiiU && (
              <article>
                <h2>Game WiiU</h2>
                <table className='game'>
                  <thead>
                    <tr>
                      <th>Tittle</th>
                      <th>Use</th>
                    </tr>
                  </thead>
                  <tbody>
                    {extendData.gamesWiiU.map((game, index) => {
                      return (
                        <tr key={index}>
                          <td>{game.gameName}</td>
                          <td>{game.amiiboUsage[0].Usage}</td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </article>
            )
          }
        </section>
      </div>
      :
      <p>Cargando</p>
  )
}
