import React from 'react';
import './Home.css';

const A = [
    {
       value: "011 Nursery and Floriculture Production"
    },
    {
        value: "012 Mushroom and Vegetable Growing"
    },
    {
        value: "013 Fruit and Tree Nut Growing"
    },
    {
        value: "014 Sheep, Beef Cattle and Grain Farming"
    },
    {
        value: "015 Other Crop Growing"
    },
    {
        value: "016 Dairy Cattle Farming"
    },
];

const Home = () => {
    return (
        <div className='home_area'>
            <div className="container">
                <div className="home_inner">
                    <div className="text_up">
                        <p>Thanks for stopping by. We know you'r busy so won't keep you any longer then we have to.</p>
                    </div>

                    <div className="text_down">
                        <p>A valuation works on data. The more information you can supply, then more accurate we can make our estimate of the enterprise value. Try our simple valuation estimator below:</p>
                    </div>

                    <div className="row">
                        <div className="col-md-5">
                            <div className="home_inner_left">
                                <p>Select the appropriate drop-down option</p>
                            
                                <div className="dropdown_area ">
                                    <div className='first_dropdown mb-4'>
                                        
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * Industry top level (i)
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li>
                                                    <a className="dropdown-item" href="#">A. Agriculture, Forestry and Fishing</a>
                                                </li>
                                                <li><a className="dropdown-item" href="#">B. Mining</a></li>
                                                <li><a className="dropdown-item" href="#">C. Manufacturing</a></li>
                                                <li><a className="dropdown-item" href="#">D. Electricity, Gas, Water and Waste Services</a></li>
                                                <li><a className="dropdown-item" href="#">E. Construction</a></li>
                                                <li><a className="dropdown-item" href="#">F. Wholesale Trade</a></li>
                                                <li><a className="dropdown-item" href="#">G. Retail Trade</a></li>
                                                <li><a className="dropdown-item" href="#">H. Accommodation and Food Services</a></li>
                                                <li><a className="dropdown-item" href="#">I. Transport, Postal and Warehousing</a></li>
                                                <li><a className="dropdown-item" href="#">J. Information Media and Telecommunications</a></li>
                                                <li><a className="dropdown-item" href="#">k. Financial and Insurance Services</a></li>
                                                <li><a className="dropdown-item" href="#">L. Rental, Hiring and Real Estate Services</a></li>
                                                <li><a className="dropdown-item" href="#">M. Professional, Scientific and Technical Services</a></li>
                                                <li><a className="dropdown-item" href="#">N. Administrative and Support Services</a></li>
                                                <li><a className="dropdown-item" href="#">O. Public Administration and Safety</a></li>
                                                <li><a className="dropdown-item" href="#">P. Education and Training</a></li>
                                                <li><a className="dropdown-item" href="#">Q. Health Care and Social Assistance</a></li>
                                                <li><a className="dropdown-item" href="#">R. Arts and Recreation</a></li>
                                                <li><a className="dropdown-item" href="#">S. Other Services</a></li>
                                                <li><a className="dropdown-item" href="#">Z. Other</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * Industry Second level
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Action</a></li>
                                                <li><a className="dropdown-item" href="#">Another action</a></li>
                                                <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='second_dropdown mb-4'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * Country company
                                            </button>
                                            <ul className="dropdown-menu text-uppercase" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">00 Multinational</a></li>
                                                <li><a className="dropdown-item" href="#">01 Australia</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown text-uppercase">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * State of Company (i)
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">01 Australian Capital Territory</a></li>
                                                <li><a className="dropdown-item" href="#">02 New South Wales</a></li>
                                                <li><a className="dropdown-item" href="#">03 Northern Territory</a></li>
                                                <li><a className="dropdown-item" href="#">04 Queensland</a></li>
                                                <li><a className="dropdown-item" href="#">05 South Australia</a></li>
                                                <li><a className="dropdown-item" href="#">06 Tasmania</a></li>
                                                <li><a className="dropdown-item" href="#">07 Victoria</a></li>
                                                <li><a className="dropdown-item" href="#">08 Western Australia</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * City of Company (i)
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Melbourne Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Sydney NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Brisbane Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Perth WA</a></li>
                                                <li><a className="dropdown-item" href="#">Adelaide SA</a></li>
                                                <li><a className="dropdown-item" href="#">Gold Coast - Tweed Heeads Qid /NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Newcastle -Queanbeyan  ACT/NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Sunshine Coast NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Central Coast NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Wollongong NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Geelong Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Ipswich QLD</a></li>
                                                <li><a className="dropdown-item" href="#">Hobart Tas</a></li>
                                                <li><a className="dropdown-item" href="#">Townsville Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Cairns Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Toowoomba Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Darwin NT</a></li>
                                                <li><a className="dropdown-item" href="#">Ballarat Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Bendigo Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Albury - Wodonga NSW/Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Launceston Tas</a></li>
                                                <li><a className="dropdown-item" href="#">Mackay Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Rockhampton Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Melton Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Bunbury WA</a></li>
                                                <li><a className="dropdown-item" href="#">Coffs Harbour NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Bundaberg Qld</a></li>
                                                <li><a className="dropdown-item" href="#">Shepparton - Mooroopna Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Mildura - Wentworth Vic/NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Port Macquarie NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Gladstone - Tannum Sands Qid</a></li>
                                                <li><a className="dropdown-item" href="#">Tamworth NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Traralgon - Morwell Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Bowral - Mittagong NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Orange NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Warragul - Drouin Vic</a></li>
                                                <li><a className="dropdown-item" href="#">Albany WA</a></li>
                                                <li><a className="dropdown-item" href="#">Devonport Tas</a></li>
                                                <li><a className="dropdown-item" href="#">Mount Gambier SA</a></li>
                                                <li><a className="dropdown-item" href="#">Kalgoorlie - Boulder WA</a></li>
                                                <li><a className="dropdown-item" href="#">Lismore NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Nelson Bay NSW</a></li>
                                                <li><a className="dropdown-item" href="#">Other</a></li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='third_dropdown mb-4'>
                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * Years Trading (i)
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">Not trading yet (i)</a></li>
                                                <li><a className="dropdown-item" href="#">0 - 1 yr (i)</a></li>
                                                <li><a className="dropdown-item" href="#">1 - 2 Yrs (i)</a></li>
                                                <li><a className="dropdown-item" href="#">2 - 3 Yrs (i)</a></li>
                                                <li><a className="dropdown-item" href="#">3 - 4 Yrs (i)</a></li>
                                                <li><a className="dropdown-item" href="#">4 - 5 Yrs (i)</a></li>
                                                <li><a className="dropdown-item" href="#">5 - 6 Yrs (i)</a></li>
                                                <li><a className="dropdown-item" href="#">6 + Yrs (i)</a></li>
                                            </ul>
                                        </div>

                                        <div className="dropdown">
                                            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                                * Number of
                                            </button>
                                            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                                <li><a className="dropdown-item" href="#">0 Sole trader</a></li>
                                                <li><a className="dropdown-item" href="#">1 employee</a></li>
                                                <li><a className="dropdown-item" href="#">2 employee</a></li>
                                                <li><a className="dropdown-item" href="#">3 employees</a></li>
                                                <li><a className="dropdown-item" href="#">4 employees</a></li>
                                                <li><a className="dropdown-item" href="#">5 employees</a></li>
                                                <li><a className="dropdown-item" href="#">6-10 employees</a></li>
                                                <li><a className="dropdown-item" href="#">11-15 employees</a></li>
                                                <li><a className="dropdown-item" href="#">16-20 employees</a></li>
                                                <li><a className="dropdown-item" href="#">21-30 employees</a></li>
                                                <li><a className="dropdown-item" href="#">31-50 employees</a></li>
                                                <li><a className="dropdown-item" href="#">51-100 employees</a></li>
                                                <li><a className="dropdown-item" href="#">101-200 employees</a></li>
                                                <li><a className="dropdown-item" href="#">201-500 employees</a></li>
                                                <li><a className="dropdown-item" href="#">501-1,000 employees</a></li>
                                                <li><a className="dropdown-item" href="#">1,000+ employees</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>

                                <div className="button_area">
                                    <h5>Click the button to value your company now:</h5>

                                    <button type="submit" className='submit_value'>Value My Company</button>
                                </div>
                            </div>
                        </div>

                        <div className="col-md-7">
                            <div className="home_inner_right">
                                <p>Input the year as well as both revenue and costs in thousands (eg, $10,000 = 10) for each year</p>
                            
                                <table className="table-bordered w-100">
                                    <tbody>
                                        <tr>
                                            <th scope="row">Year (i)</th>
                                            <td  >2016</td>
                                            <td  >2017</td>
                                            <td  >2018</td>
                                            <td  >2019</td>
                                            <td  >2020</td>
                                            <td  >2021</td>
                                            <td  >2022</td>
                                        </tr>
                                        <tr>
                                            <th className="w-30" scope="row">Revenue (i)</th>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td >150</td>
                                            <td >1220</td>
                                            <td >2400</td>
                                            <td >6700</td>
                                        </tr>
                                        <tr>
                                            <th className="w-30" scope="row">Costs (i)</th>
                                            <td ></td>
                                            <td ></td>
                                            <td ></td>
                                            <td >762</td>
                                            <td >522</td>
                                            <td >432</td>
                                            <td >433</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>

                    <div className="row">
                        <div className="col-md-6">
                            <div className="table_inside">
                                <table className="table-bordered w-100 text-center mt-5">
                                    <tbody>
                                        <tr>
                                            <th rowspan="2" className='py-3 px-lg-5 px-md-3 px-2' scope="row">Results</th>
                                            <td>Lower Confidence Limit</td>
                                            <td>Valuation</td>
                                            <td>Upper Confidence Limit</td>
                                        </tr>
                                        <tr style={{backgroundColor: "#c5dbf1"}}>
                                            <td className='py-3'></td>
                                            <td></td>
                                            <td></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="col-md-6">
                            <div className='advanced_area'>
                                <p>The 'fast valuation' makes quite a few assumptions. For a more precise estimate, we need more data. The advanced valuation provides many, many more benefits and is far more precise. Click the button to get your Advanced valuation.</p>
                                <button type="submit" className='advanced_btn'>Advanced Valuation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;