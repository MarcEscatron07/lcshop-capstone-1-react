import React from 'react';

import Template from '../layout/Template';
import Breadcrumb from '../shared/Breadcrumb';

function AboutUs() {
    return (
        <>
            <Template>
                <div className="row">
                    <div className="col-12">
                        <div className="about-header w-100 d-flex justify-content-center align-items-center">
							<h1 className="page-header text-white">ABOUT US</h1>
						</div>
                        <Breadcrumb />
                    </div>
                    <div className="col-12 px-5 py-4">
                        <div className="d-flex m-3 px-5 w-100 flex-wrap justify-content-between">
							<img className="box-shade img-fluid my-2" src="images/abt-lcs-store.jpg" alt="LCS Store" />
							<img className="box-shade img-fluid my-2" src="images/abt-lcs-studio.jpg" alt="LCS Studio" />
						</div>
                        <div className="about-info w-100 bg-white">
                            <p>
								<strong>LCShop</strong> is the official online store of the LoL
								Championship Series (colloquially known as the LCS) &mdash; a North American
								franchised league by Riot Games. The physical store is located 
                                in <a href="https://www.google.com.ph/maps/place/Los+Angeles,+CA,+USA/@34.0207305,-118.6919313,10z/data=!3m1!4b1!4m5!3m4!1s0x80c2c75ddc27da13:0xe22fdf6f254608f4!8m2!3d34.0522342!4d-118.2436849?hl=en&authuser=0" target="_blank" rel="noopener noreferrer">Los 
                                Angeles, United States</a> and is inside the LCS Arena.
								For a bit of our league's history, the LCS was formally known as the NA LCS and was
								changed prior to the EU LCS (European League of Legends Championship Series) rebranding
								as the LEC (League of Legends European Championship) in 2019. The league was launched in 2013
								and is currently the top tier League of Legends competition in North America.
							</p>
							<p>
								The LCShop sells a whole lot of products associated with
								the teams participating the league along with a variety of items &mdash; from
								authentic player jerseys to quality and stylish accessories.
								Our shop sells globally, but we are only limited to the regions allowed within our
								shipping range and capability.
							</p>
                        </div>
                        <div className="d-flex m-3 px-5 w-100 flex-wrap justify-content-center">
							<img className="box-shade img-fluid" src="images/abt-building-entrance.jpg" alt="LCS Building Entrance" />
						</div>
                    </div>
                </div>
            </Template>
        </>
    )
}

export default AboutUs;