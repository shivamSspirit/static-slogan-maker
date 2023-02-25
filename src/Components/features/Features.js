import React from 'react'
import './features.css'
import * as dummyData from '../../db/dummydatabase'

function Features() {
  return (
    <>
      <section className="features-section">
        <div className="features-wrapper py-3">
          {dummyData.featuresData.map((feature) => {
            const { id, icon, label, description } = feature;
            return (
              <div key={id} className="feature">
                <img src={icon} alt={`${label}-feature-icon`} />
                <div className="feature-label py-1 fw-500">{label}</div>
                <p className="feature-description fw-400">{description}</p>
              </div>
            );
          })}
        </div>
      </section>
    </>
  )
}

export default Features
