import React, { Component } from 'react';
import ReactDOM from 'react-dom';

//import dumb components later
import Footer from './Footer.js';
import Products from './Products.js'

//import any use of link, hashhistory, etc....

class Frame extends React.Component {

// add props/super/local state as necessary later

// the dumb HTML/JSV
  render() {

    return (
          <div className="container-fluid no-overflow">

          {/* header for log-in */}
            <div className="row logoHeader pad20 bshadow">

              <div className="col-xs-10 col-sm-9 col-lg-8 logo">
                <h1 className="hidden-xs offwhite CoreMagic tshadowl"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h1>
                <h4 className="hidden-sm hidden-md hidden-lg white CoreMagic"><span className="EvelethShapes">r</span> Hops of Grace <span className="EvelethShapes">s</span></h4>
              </div>

              {/* nav bar core functions - full screen */}
              <div className="hidden-xs hidden-sm hidden-md col-lg-4 navL block-center">
                <div className="col-lg-4 navL">
                  <button className="btn btn-default btxt" type="">barter?</button>
                </div>

                <div className="col-lg-4 navL block-center">
                  <button className="btn btn-default btxt" type="">login/logout</button>
                </div>

                <div className="col-lg-4 navL block-center">
                  <button className="btn btn-default btxt" type="">cart</button>
                </div>
              </div>

              {/* nav bar core functions - mobile screen */}
              <div className="col-xs-2 col-sm-3 hidden-lg navsm">
                <p>collapse menu</p>
              </div>

            </div>

          {/* navigation bar with mini search box, 6 spaces ?...iterate through later */}
            <div className="row pad10 nav">
              {/* <form> how do we want to have these work options or something else*/}
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Brew Type</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Flavors</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Origins</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <select className="form-control brown btxt">
                    <option>Brewery</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </select>
                </div>
                <div className="col-sm-12 col-lg-2">
                  <span className="glyphicon glyphicon-search brown" aria-hidden="true"></span>
                </div>

                <div className="col-sm-12 col-lg-2">
                </div>
              {/*</form>*/}
            </div>

          {/* splash image with main search */}
            {/* on products - likely main photo/info .... break down this into smaller sections*/}
            <div className="row pad20 backgroundBeer search">

                <div className="col-sm-12 col-lg-4">
                  <form className="form-inline">
                    <div className="form-group white">
                      <label className="sr-only">Search your Favorite Brew</label>
                      <div className="input-group">
                        <div className="input-group-addon"><span className="EvelethShapes">J</span></div>
                        <input type="text" className="form-control" id="exampleInputAmount" placeholder="find microbrews"></input>
                        <div className="input-group-addon"><span className="EvelethShapes">K</span></div>
                      </div>
                    </div>
                    <button type="submit" className="btn btn-default of20 Choplin-Medium">Search</button>
                  </form>

                </div>
                <div className="col-sm-12 col-lg-8 text-center">
                  <h1 className="white CoreMagic tshadow">brew & barter</h1>
                  <h2 className="white EvelethShapes tshadow">" " " " " " " "</h2>
                  <h3 className="white ThirstyRoughReg tshadow"><span className="white EvelethShapes">u </span> discover great small batch beer <span className="white EvelethShapes"> v</span> </h3>
                </div>

            </div>

          <Products />
          <Footer />
          </div>
    )
  }
}

export default Frame;
