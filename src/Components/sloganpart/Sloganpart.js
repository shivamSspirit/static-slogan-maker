import React, { useState } from 'react'
import { IoClose } from "react-icons/io5";
import Pagination from '../pagination/Pagination';
import Slogans from '../slogans/slogans';
import './sloganpart.css'

function SloganPart() {
    const [sloganInput, setSloganInput] = useState("cozy")
    return (
        <div className='slogan-block-container'>
            <div className='slogan-maker-container'>
                <h1 className="slogan-maker-title fw-600">Free slogan maker</h1>
                <p className="slogan-term fw-400">
                    Simply enter a term that describes your business, and get up to
                    1,000 relevant slogans for free.
                </p>
                <div className='slogan-maker'>
                    <div className='slogan-maker-box'>
                        <label
                            htmlFor="slogan-input"
                            className="slogan-label fw-400"
                        >
                            Word for your slogan
                        </label>
                        <div className="slogan-input-box">
                            <input
                                onChange={(e) => setSloganInput(e.target.value)}
                                value={sloganInput}
                                type="text"
                                placeholder="Enter slogan keyword"
                                id="slogan-input"
                            />
                            {sloganInput.length > 0 && (
                                <IoClose
                                    onClick={() => setSloganInput("")}
                                    className="close-icon"
                                    color="#4d4d4d"
                                />
                            )}
                        </div>
                        <div className="slogan-btn-box">
                            <button className="btn slogan-btn">Generate Slogans</button>
                        </div>
                    </div>
                    <hr className="divider" />
                    <Slogans />
                    <hr className="divider" />
                    <Pagination />
                </div>
            </div>
        </div>
    )
}

export default SloganPart
