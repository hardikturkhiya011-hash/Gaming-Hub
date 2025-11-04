import React from 'react'
import "../Component/top.css"

function Top() {
  return (
    <>
    <div className="topsection">
    </div>
    <div className="top">
        <div className="top_main">
            <div className="header_top">
        <h6 className='tp'>top games</h6>
        <h2 className='mp'>Most Played</h2>
        </div>
        <div className='top_but'></div>
        <button className='view'>VIEW ALL</button>
        </div>
        <div className="bundles">


            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-01.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Adventure</p>
                <h3 className='vb'>Warframe</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>
           
           
            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-02.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Action</p>
                <h3 className='vb'>BGMI</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>


            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-03.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Action</p>
                <h3 className='vb'>Apex Legends</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>


            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-04.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Adventure</p>
                <h3 className='vb'>The Sims 4</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>


            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-05.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Adventure</p>
                <h3 className='vb'>Lostark</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>


            <div className="bundle">
                <img src="https://templatemo.com/templates/templatemo_589_lugx_gaming/assets/images/top-game-06.jpg" alt="card1" className='war'/>
                <div className="text_top">
                <p className='ad'>Action</p>
                <h3 className='vb'>Destiny 2</h3>
                </div>
                <div className="bundle_btn">
                <button className='btn_tops'>Explore</button>
                </div>
            </div>
        </div>
    </div>
    </>
  )
}

export default Top