import React from 'react';
import { useHistory } from 'react-router-dom';

function Decembre({ setDecembre }) {
  const history = useHistory();
  return (
    <>
    <div className="box">
      <h1>Decembre</h1>
      <div className="test">
      <div className="jauges">
        <img className="carbone" src="https://nsa40.casimages.com/img/2021/05/11/210511113247819695.png" alt="carbone"/>
        <img className="phytocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511095541259615.png" alt="phytocenose"/>
        <img className="zoocenose" src="https://nsa40.casimages.com/img/2021/05/11/210511112928892601.png" alt ="zoocenose"/>
        <img className="sol" src="https://nsa40.casimages.com/img/2021/05/11/210511095643310873.png" alt="sol"/>
      </div>
        <div className="capital">
          <p>capital : 94283 €</p>
        </div>
      </div>
    </div>
      <div className="cards">
      <div className="card">
          <p>CONSTRUCTION</p>
          <button className="pbutton">Mur parpaings</button>
          <button className="pbutton">Muret pierres</button>
          <button className="pbutton">Clôture-grillage</button>
          <button className="pbutton">Nichoir</button>
        </div>
        <div className="vegetables">
          <p>VEGETATION</p>
          <button className="pbuttonv">Lière</button>
          <button className="pbuttonv">Plantes and fleurs</button>
          <button className="pbuttonv">Arbres and arbustes</button>
          <button className="pbuttonv">Marre</button>
        </div>
      </div>
      <div className="details">
        <h2>Repos</h2>
        <p>Si certaines régions au climat plus doux peuvent commencer la taille en milieu de mois, c'est une période tout à fait propice au repos.</p>
      </div>
      <button className="meetbutton" type="button" onClick={() => {
          setDecembre('agroforesterie');
          history.push('/seasons');
        }}
        >
          Soutenir avec un don
        </button>
    </>
  )
};

export default Decembre;