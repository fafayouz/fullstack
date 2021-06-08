import React, { useState } from 'react'
import './Search.css'

const Search = () => {
  const [wilaya , setWilaya] = useState('')
  const [transaction , setTransaction] = useState('')
  const [type , setType] = useState('')
  const [prixMin , setPrixMin] = useState('')
  const [prixMax , setPrixMax] = useState('')
  const [room , setRoom] = useState(' ')

  const Rechercher = () => {
    localStorage.setItem('wilaya',wilaya);
    localStorage.setItem('transaction',transaction);
    localStorage.setItem('type',type);
    localStorage.setItem('prixmin',prixMin);
    localStorage.setItem('prixmax',prixMax);
    localStorage.setItem('salle',room);
    window.location.href = '/Search'
    setRoom('')
    setWilaya('')

  }
  return (
    <>
      <div className="Search-Container">
          <div className="search-btn-type">
            <span></span>
            <select value={wilaya} onChange={(event) => setWilaya(event.target.value)} className="select-type">
              <option>Wilaya</option>
              <option>Adrar </option>
              <option>Chlef </option>
              <option>Laghouat </option>
              <option>Oum El Bouaghi </option>
              <option>Batna </option>
              <option>Béjaïa </option>
              <option>Biskra </option>
              <option>Béchar </option>
              <option>Blida </option>
              <option>Bouira </option>
              <option>Tamanrasset </option>
              <option>Tébessa </option>
              <option>Tlemcen </option>
              <option>Tiaret </option>
              <option>Tizi Ouzou </option>
              <option>Alger </option>
              <option>Djelfa </option>
              <option>Jijel </option>
              <option>Sétif </option>
              <option>Saïda </option>
              <option>Skikda </option>
              <option>Sidi Bel Abbès </option>
              <option>Annaba </option>
              <option>Guelma </option>
              <option>Constantine </option>
              <option>Médéa </option>
              <option>Mostaganem </option>
              <option>Msila </option>
              <option>Mascara </option>
              <option>Ouargla </option>
              <option>Oran </option>
              <option>El Bayadh </option>
              <option>Illizi </option>
              <option>Bordj Bou Arreridj </option>
              <option>Boumerdès </option>
              <option>El Tarf </option>
              <option>Tindouf </option>
              <option>Tissemsilt </option>
              <option>El Oued </option>
              <option>Khenchela </option>
              <option>Souk Ahras </option>
              <option>Tipaza </option>
              <option>Mila </option>
              <option>Aïn Defla </option>
              <option>Naâma </option>
              <option>Aïn Témouchent </option>
              <option>Ghardaïa </option>
              <option>Relizane </option>
            </select>
          </div>
          <div className="search-btn-type">
            <span></span>
            <select value={transaction} onChange={(event) => setTransaction(event.target.value)} className="select-type">
              <option >Transaction</option>
              <option >Louer</option>
              <option >Vendre</option>
            </select>
          </div>
          <div className="search-btn-type">
            <span></span>
            <select value={type} onChange={(event) => setType(event.target.value)} className="select-type">
              <option >Type</option>
              <option >Appartement</option>
              <option >Bloc</option>
              <option >Duplex</option>
              <option >Hangars</option>
              <option >Locaux</option>
              <option >Niveau de Villa</option>
              <option >Terrain</option>
              <option >Villa</option>
            </select>
          </div>
          <div className="search-btn-type">
            <span></span>
            <select value={prixMax} onChange={(event) => setPrixMax(event.target.value)} className="select-type">
              <option >Prix Max</option>
              <option >1,000DZD</option>
              <option >5,000DZD</option>
              <option >10,000DZD</option>
              <option >50,000DZD</option>
              <option >100,000DZD</option>
              <option >200,000DZD</option>
              <option >300,000DZD</option>
              <option >400,000DZD</option>
              <option >500,000DZD</option>
              <option >600,000DZD</option>
              <option >700,000DZD</option>
              <option >800,000DZD</option>
              <option >900,000DZD</option>
              <option >1,000,000DZD</option>
              <option >1,500,000DZD</option>
              <option >2,000,000DZD</option>
              <option >2,500,000DZD</option>
              <option >3,000,000DZD</option>
              <option >3,500,000DZD</option>
              <option >4,000,000DZD</option>
              <option >4,500,000DZD</option>
              <option >5,000,000DZD</option>
            </select>
          </div>
          <div className="search-btn-type">
            <span></span>
            <select value={prixMin} onChange={(event) => setPrixMin(event.target.value)} className="select-type">
              <option >Prix Min</option>
              <option value="10000">1,0000DZD</option>
              <option value="50000">5,0000DZD</option>
              <option value="1000000">10,000DZD</option>
              <option value="500000">50,000DZD</option>
              <option value="1000000">100,000DZD</option>
              <option value="2000000">200,000DZD</option>
              <option value="3000000">300,000DZD</option>
              <option value="4000000">400,000DZD</option>
              <option value="5000000">500,000DZD</option>
              <option value="6000000" >600,000DZD</option>
              <option value="7000000">700,000DZD</option>
              <option value="8000000">800,000DZD</option>
              <option value="9000000">900,000DZD</option>
              <option value="10000000">1,000,000DZD</option>
              <option value="15000000">1,500,000DZD</option>
              <option value="20000000">2,000,000DZD</option>
              <option value="25000000" >2,500,000DZD</option>
              <option value="30000000">3,000,000DZD</option>
              <option value="35000000">3,500,000DZD</option>
              <option value="40000000">4,000,000DZD</option>
              <option value="45000000">4,500,000DZD</option>
              <option value="50000000">5,000,000DZD</option>
            </select>
          </div>
          <div className="search-btn-type">
            
            <input id="changenum" type="text" placeholder="Superficie Min" />
            
          </div>
          <div className="search-btn-type">
            
            <input
              id="changenum1"
              type="text"
              placeholder="Superficie Max"
            />
          </div>

          <div className="search-btn-type">
            <select value={room} onChange={(event) => setRoom(event.target.value)} className="select-type">
              <option >Pièces</option>
              <option >1</option>
              <option >2</option>
              <option >3</option>
              <option >4</option>
              <option >5</option>
              <option >6</option>
              <option >7</option>
              <option >8</option>
              <option >9</option>
              <option >10</option>
            </select>
          </div>

          <div className=" search">
            <button onClick={Rechercher}>Rechercher</button>
          </div>
      </div>
    </>
  )
}

export default Search
