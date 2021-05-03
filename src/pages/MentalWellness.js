import React from "react";



function MentalWellness() {
  return (
    <>
        <div class="main">
        <div class="container">
            <div id="header-container">
                <h1 id="page-heading">Healthify for Corporates: One-Stop-Shop for Healthcare</h1>
                <p id="page-sub-heading">
                    Create customized health plans for your employees that cater to their health and wellness needs. Talk to our experts for more details.
                </p>
            </div>
            <br />
            <div class="row">
                <div class="col-lg-4 col-xs-12" align="center" id="form-container-div">
                    <form name="corporate-form" onsubmit="check(event);">
                        <table>
                            <tr>
                                <td id="form-bg-opacity"></td>
                                <td>
                                    <div id="form-container">
                                        <input type="text" class="inputField" id="name" placeholder="Name" />
                                        <br />
                                        <br />
                                        <input type="text" class="inputField" id="organization_name" placeholder="Organization Name" />
                                        <br />
                                        <br />
                                        <input type="text" class="inputField" id="official_email_id" placeholder="Official Email ID" />
                                        <br />
                                        <br />
                                        <input type="text" class="inputField" id="official_phone_no" placeholder="Contact Number" />
                                        <br />
                                        <br />
                                        <button type="submit" id="button-style">
                        Schedule a demo
                      </button>
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </form>
                </div>
                <div class="col-lg-8 col-xs-12"></div>
            </div>
            <div id="thankyou-section" >
            {/* style="display: none; padding-top: 120px; font-size: 32px;" */}
                Thank You. Our team will get in touch with you shortly.
            </div>
        </div>
    </div>

    <div class="container" > 
       {/* style="background:#fff" */}
        <div class="section">
            <h2 class="content-header">Choose the best for you and your employees</h2>
            <table class="benefit-table">
                <tr>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/medicine.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>FLAT 20% off</b><br /> on medicines all year round
                        </div>
                        <div class="benefit-table__item__footer">Free home delivery</div>
                    </td>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/diagnostic.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>FLAT 20% off</b><br /> on diagnostic tests
                        </div>
                        <div class="benefit-table__item__footer">Free home sample collection</div>
                    </td>
                </tr>
                <tr>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/online-consult.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>24/7 Unlimited</b><br /> online doctor consultations across 23+ specialities
                        </div>
                    </td>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/mental-health.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>24/7 Mental Health</b><br /> counselling support
                        </div>
                    </td>
                </tr>
                <tr>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/annual-checkup.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>Exclusive Deals</b><br /> on annual health checkups
                        </div>
                    </td>
                    <td class="content-icon benefit-table__item">
                        <img src="https://www.practostatic.com/subscriptions/images/corporate/roi.png" width="46px" alt="" />
                        <div class="benefit-table__item__description">
                            <b>Guaranteed 3X ROI</b><br /> for you
                        </div>
                    </td>
                </tr>
            </table>
        </div>

        <hr  />
        {/* style="color:#979797;height: 2px;" */}
        <div class="section">
            <h2 class="content-header">Why Healthify?</h2>
            <div class="content-header" >Trusted by 2 crore+ users every month</div>
            {/* style="margin:0 auto 20px auto;width: fit-content;" */}
            <div >
            {/* style="margin: auto; width:fit-content" */}
                <img src="https://www.practostatic.com/subscriptions/images/landingpage/stats/play_store_stats.png" alt="" />
                {/* height="100px"  */}
                {/* style="margin: 20px 0" */}
            </div>
            <div class="row" >
            {/* style="margin-top: 20px" */}
                <div class="col-lg-4 col-md-4 contents-section">
                    <table>
                        <tr>
                            <td class="content-icon">
                                <img src="https://www.practostatic.com/subscriptions/images/landingpage/stats/users.svg" alt="" />
                                {/* width="46px" alt="" */}
                            </td>
                            <td class="content-text">
                                <h3 class="option-main-text">2 Crore+</h3>
                                Monthly Customers
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-lg-4 col-md-4 contents-section">
                    <table>
                        <tr>
                            <td class="content-icon">
                                <img src="https://www.practostatic.com/subscriptions/images/landingpage/stats/doctors.svg"  alt=""/>
                                {/* width="46px" alt=""  */}
                            </td>
                            <td class="content-text">
                                <h3 class="option-main-text">100,000+</h3>
                                <div>Verified Doctors</div>
                            </td>
                        </tr>
                    </table>
                </div>
                <div class="col-lg-4 col-md-4 contents-section">
                    <table>
                        <tr>
                            <td class="content-icon">
                                <img src="https://www.practostatic.com/subscriptions/images/landingpage/stats/appointments.svg" alt="" />
                                {/* width="46px"  */}
                            </td>
                            <td class="content-text">
                                <h3 class="option-main-text">
                                    5 Crore+
                                </h3>
                                <div>Doctor Appointments</div>
                            </td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

        <hr  />
        {/* style="color:#979797;height: 2px;" */}

        <div class="section">
            <div class="row">
                <div class="advantage-section">
                    <div class="col-lg-6 col-md-6 col-sm-6">
                        <h3 class="sub-list-head">Why Heathify’s Corporate Health Plans?</h3>
                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Single destination for complete healthcare—Doctors, Online Consultations, Medicines, and Diagnostic Tests
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                24*7 Customer support for employees and their families
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Better employee engagement through personalized health articles, webinars, and more
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Cashless OPD facility with 4000+ doctors in the top 6 cities
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Health checkups top NABL Accredited lab partners pan India
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Dedicated key account manager to chart out the wellness calendar
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Safe and secure transactions with ISO 27001 certification
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                Data storage on HIPAA compliant servers
                            </div>
                        </div>

                        <div class="list-item-style">
                            <div>
                                <i class="fa fa-check" aria-hidden="true"></i>
                            </div>
                            <div class="list-content">
                                High adoption rates with easy implementation process
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-6  col-md-6  hidden-sm hidden-xs">
                        <img class="display-image" src="assets/img/doctors/doctor-10.jpg" alt="" width="100%" />
                    </div>
                </div>
            </div>
        </div>
        <hr />
        {/* style="color:#979797;height: 2px;"  */}

       
    </div>
    <div id="text-carousel" class="carousel slide" data-ride="carousel" data-interval="10000" >
    
        <div class="row">
            <div class="col-lg-3"></div>
            <div class="col-lg-6 col-xs-12 text-center">
                <img src="https://prod-holonet.s3.amazonaws.com/group-2-2x_2018-12-15-05-46-41-031674.png" width="56px" alt="" />
                <h1 id="testi-heading">Hear it from our customers</h1>
                <div class="carousel-inner">
                    <div class="item active">
                        <div class="carousel-content">
                            <div class="col-md-12">
                                <p class="testi-text">
                                    “We had our corporate annual health check-up with Practo and let me tell you they did a great job right from start to finish. They suggested us with a pre-registration desk which did wonders for us and helped us to engage 28% of the total employee strength
                                    compared to 6% last year. The people collecting blood samples were professional and maintained good hygiene. 97% of the reports were given on or before time. Overall a great experience and looking forward for a collaboration
                                    next year too!”
                                </p>
                                <br />
                                <table align="center">
                                    <tr>
                                        <td>
                                            <img src="https://prod-holonet.s3.amazonaws.com/Neerajkumar-directi_2018-12-18-09-10-00-606799.jpeg" class="test-image" alt=""/>
                                        </td>
                                        <td class="test-name">
                                            <p>-- Neeraj Kumar</p>
                                            <p>
                                                &nbsp;&nbsp;&nbsp;&nbsp;Events Associate - Directi
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="carousel-content">
                            <div class="col-md-12">
                                <p class="testi-text">
                                    “Firstly I would like to thank Practo for arranging the health camp at nuVizz. We wanted to create an awareness among the employees to get their health check for which you and Practo helped us in doing it successfully.Most of employees and there families
                                    got benefited out of the program. Looking forward for a similar camp year on year.”
                                </p>
                                <br />
                                <table align="center">
                                    <tr>
                                        <td>
                                            <img src="https://prod-holonet.s3.amazonaws.com/Nithyamahes-nuvizz_2018-12-18-09-09-57-031218.jpeg" class="test-image" alt="" />
                                        </td>
                                        <td class="test-name">
                                            <p>-- Nithya M Mahesh</p>
                                            <p>
                                                &nbsp;&nbsp;&nbsp;&nbsp;nuVizz Software Solutions Pvt Ltd
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="carousel-content">
                            <div class="col-md-12">
                                <p class="testi-text">
                                    “Since the onset of the Covid-19 pandemic, providing our employees with easy and timely access to healthcare has been a challenge. With physical appointments becoming difficult under current circumstances, the need for online Doctor consultation has been
                                    on the rise. Employees have become more conscious in choosing the healthcare benefits and the services provided by doctors. This has pushed a need for technologically-assisted doctor consulting. Practo’s corporate health
                                    and wellness plans cover all specialties, along with offering a number of benefits. And the best part is that we have received very positive feedback from our employees about these health plans.”
                                </p>
                                <br />
                                <table align="center">
                                    <tr>
                                        <td>
                                            <img src="https://www.practostatic.com/subscriptions/website-images/Hexaware_hr.png" class="test-image" alt="" />
                                        </td>
                                        <td class="test-name">
                                            <p>-- Sanhita Ganguly</p>
                                            <p >
                                                &nbsp;&nbsp;&nbsp;&nbsp;HR Head - Hexaware
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div class="item">
                        <div class="carousel-content">
                            <div class="col-md-12">
                                <p class="testi-text">
                                    “We just wanted to let you know that Practo has made life easy, especially during the current Pandemic. We are glad we decided to work with Practo. The benefits shared by Practo are good and cover all specialties. Telus International has chosen Practo
                                    as a part of the Wellness Program for the Organization and overall feedback from team members is good. We applaud the efforts put in by the Practo team as they have been very helpful in the entire launch process of
                                    Practo and thereafter as well.<br /> Well Done Guys !!”
                                </p>
                                <br />
                                <table align="center">
                                    <tr>
                                        <td>
                                            <img src="https://www.practostatic.com/subscriptions/website-images/Telus_International_hr.png" class="test-image" alt=""/>
                                        </td>
                                        <td class="test-name">
                                            <p>-- Deepika Pillai</p>
                                            <p >
                                                &nbsp;&nbsp;&nbsp;&nbsp;Deepika Pillai - Director HR - Telus International
                                            </p>
                                        </td>
                                    </tr>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
     </>
      );
}

export default MentalWellness;