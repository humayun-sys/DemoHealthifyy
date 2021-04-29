import React from "react";




function OurCoaches() {
  return (
    <>   
                
    <section class="hme-mobile-app-section">
        <div class="container hme-expert-details-section">
            <div class="row hme-mobile-app-features">
                <ul class="nav nav-tabs">
                    <li>
                        <a href="/dietitians">NUTRITION</a>
                    </li>
                    <li class="active">
                        <a href="/fitness-trainers">FITNESS</a>
                    </li>
                    <li>
                        <a href="/yoga-instructors">YOGA</a>
                    </li>
                </ul>
                <div class="tab-content">
                    <div id="fitness" class="tab-pane fade in active">
                        <div class="row">
                            <div class="col-md-12">
                                <h2 class="hme-experts-title">Personal Fitness Trainers</h2>
                                <p class="hme-experts-description">Our internationally certified personal fitness trainers will help you lose weight, build muscle, recover from physical injury, or medical conditions with personalized home and gym based workout plans.</p>
                            </div>
                            <div id="trainerWrapper" class="hme-expert-container">
                            </div>
                        </div>
                        <div id="trainerViewMore" class="view-more-cta">SEE MORE FITNESS TRAINERS
                            <span class="glyphicon glyphicon-chevron-down down-arrow"></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
    </section>
    
    </>
  );
}

export default OurCoaches;
