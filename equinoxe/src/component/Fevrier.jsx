import React from 'react';
import cssFevrier from './css/cssFevrier.css';
import { useHistory } from 'react-router-dom';

function Fevrier({ setFevrier }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Fevrier</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 79283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
        <h2>CONSTRUCTION</h2>
        <h2>VEGETATION</h2>
      </div>
      <div className="details">
        <h2>Préparer et bouturer</h2>
        <p>Il s'agit, en langue vigneron, de faire "pleurer la vigne" : il incise le cep, faisant ainsi apparaître des gouttes de sève et créant un chemin imposé au sarment.</p>
      </div>
      <button type="button" onClick={() => {
          setFevrier('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Fevrier;