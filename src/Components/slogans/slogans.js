import React from 'react'
import './slogans.css'
import { Slogan } from '../slogan/Slogan';
import * as dummyData from '../../db/dummydatabase'

function Slogans() {
  return (
    <>
      <div className="generated-slogans-header my-3">
        <div className="generated-slogans-title">We have generated 1,023 slogans for “cozy”</div>
        <button className="btn download-outline-btn">Download all</button>
      </div>
      <div className="generated-slogans">
        {dummyData.slogansData.map(({ id, slogan }) => {
          return <Slogan key={id} slogan={slogan} />;
        })}
      </div>
    </>
  )
}

export default Slogans
