import React from 'react';


const Main = () => {
    return(
    <section id="main-content">
      <section className="wrapper">
        <div className="row">
          <div className="col-lg-12">
            <h3 className="page-header"><i className="fa fa-laptop"></i> Dashboard</h3>
            <ol className="breadcrumb">
              <li><i className="fa fa-home"></i><a href="/">Home</a></li>
              <li><i className="fa fa-laptop"></i>Dashboard</li>
            </ol>
          </div>
        </div>

        <div className="row">
          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box blue-bg">
              <i className="fa fa-cloud-download"></i>
              <div className="count">6.674</div>
              <div className="title">Download</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box brown-bg">
              <i className="fa fa-shopping-cart"></i>
              <div className="count">7.538</div>
              <div className="title">Purchased</div>
            </div>
          </div>

          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box dark-bg">
              <i className="fa fa-thumbs-o-up"></i>
              <div className="count">4.362</div>
              <div className="title">Order</div>
            </div>
          </div>


          <div className="col-lg-3 col-md-3 col-sm-12 col-xs-12">
            <div className="info-box green-bg">
              <i className="fa fa-cubes"></i>
              <div className="count">1.426</div>
              <div className="title">Stock</div>
            </div>
          </div>

        </div>

        <div className="row">

          <div className="col-lg-9 col-md-12">
            <div className="panel panel-default">
              <div className="panel-heading">
                <h2><i className="fa fa-flag-o red"></i><strong>Registered Users</strong></h2>
              </div>
              <div className="panel-body">
                <table className="table bootstrap-datatable countries">
                  <thead>
                    <tr>
                      <th></th>
                      <th>Country</th>
                      <th>Users</th>
                      <th>Online</th>
                      <th>Performance</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td><img src="assets/img/Germany.png" style={{height:"18px", marginTop:"-2px" }}></img></td>
                      <td>Germany</td>
                      <td>2563</td>
                      <td>1025</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="73" aria-valuemin="0" aria-valuemax="100" style={{width: "73%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="27" aria-valuemin="0" aria-valuemax="100" style={{width: "27%"}}>
                          </div>
                        </div>
                        <span className="sr-only">73%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/India.png" style={{height:"18px", marginTop:"-2px"}}></img></td>
                      <td>India</td>
                      <td>3652</td>
                      <td>2563</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="57" aria-valuemin="0" aria-valuemax="100" style={{width: "57%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="43" aria-valuemin="0" aria-valuemax="100" style= {{width: "43%"}}>
                          </div>
                        </div>
                        <span className="sr-only">57%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/Spain.png" style={{height:"18px",  marginTop:"-2px"}}></img></td>
                      <td>Spain</td>
                      <td>562</td>
                      <td>452</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="93" aria-valuemin="0" aria-valuemax="100" style= {{width: "93%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="7" aria-valuemin="0" aria-valuemax="100" style= {{width: "7%"}}>
                          </div>
                        </div>
                        <span className="sr-only">93%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/India.png" style={{height:"18px", marginTop:"-2px"}}></img></td>
                      <td>Russia</td>
                      <td>1258</td>
                      <td>958</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style= {{width: "20%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style= {{width: "80%"}}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/Spain.png" style={{height:"18px", marginTop:"-2px"}}></img></td>
                      <td>USA</td>
                      <td>4856</td>
                      <td>3621</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style= {{width: "20%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style= {{width: "80%"}}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/Germany.png" style={{height:"18px", marginTop:"-2px"}}></img></td>
                      <td>Brazil</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/Germany.png" style={{height:"18px", marginTop:"-2px"}}></img></td>
                      <td>Coloumbia</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style={{width: "20%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                    <tr>
                      <td><img src="assets/img/Germany.png" style={{height:"18px", marginTop: "-2px"}}></img></td>
                      <td>France</td>
                      <td>265</td>
                      <td>102</td>
                      <td>
                        <div className="progress thin">
                          <div className="progress-bar progress-bar-danger" role="progressbar" aria-valuenow="20" aria-valuemin="0" aria-valuemax="100" style= {{width: "20%"}}>
                          </div>
                          <div className="progress-bar progress-bar-warning" role="progressbar" aria-valuenow="80" aria-valuemin="0" aria-valuemax="100" style={{width: "80%"}}>
                          </div>
                        </div>
                        <span className="sr-only">20%</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

            </div>

          </div>
          <div className="col-md-3">

            <div className="social-box facebook">
              <i className="fa fa-facebook"></i>
              <ul>
                <li>
                  <strong>256k</strong>
                  <span>friends</span>
                </li>
                <li>
                  <strong>359</strong>
                  <span>feeds</span>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-3">

            <div className="social-box google-plus">
              <i className="fa fa-google-plus"></i>
              <ul>
                <li>
                  <strong>962</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>256</strong>
                  <span>circles</span>
                </li>
              </ul>
            </div>

          </div>
          <div className="col-md-3">

            <div className="social-box twitter">
              <i className="fa fa-twitter"></i>
              <ul>
                <li>
                  <strong>1562k</strong>
                  <span>followers</span>
                </li>
                <li>
                  <strong>2562</strong>
                  <span>tweets</span>
                </li>
              </ul>
            </div>

          </div>

        </div>

      </section>
    </section>
    )
}
export default Main;
