import React from 'react'
import './index.css';
import {Link} from 'react-router-dom';
import web from '../src/Images/web-designing.png';
function Common(props) {
  return (
    <>
    <section id="header" clssName="d-flex align-items-center">
      <div className='container-fluid nav_bg'>
        <div className='row'>
          <div className='col-10 mx-auto'>
            <div className='row  '>
            <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
              <h1>
                {props.firstLine} <br />{props.prepo} <strong className="brand-name">{props.secondLine}</strong>
              </h1>
              <h2 className="mt-3">
                We are a team of talented developer making webistes
              </h2>
              <div className="mt-5">
                <Link to={props.visit} id="btn">{props.btname}</Link>
              </div>
            </div>
            <div className="col-lg-6 order-1 order-lg-2  header-img">
              <img src={web} className="img-fluid animated col-lg-11 " alt="HomePage" />
            </div>
          </div>
        </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Common;