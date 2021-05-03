import React from "react";




function Career() {
  return (
    <>  


<div className="jobs__banner__wrapper">
        <div className="jobs__banner__overlay"></div>
        <h1>Meet Our Team</h1>
      </div>

      <div className="jobsInfo__wrapper">
        <div className="section__heading">
          <h1>About Us</h1>
        </div>
        <div className="jobsInfo__container">
          <div className="jobsInfo__image">
            <img src="assets/img/doctors/doctor-07.jpg" alt="Team Members"/>
          </div>
          <div className="jobsInfo__text">
            <p>
            The pain of pleasure, do elit consequat ut they
            deserted the general cupidatat cupidatat are no
            regions eiusmod them to be none. Let your pleasure
            and exercise, does not excepteur aliquip cupidatat 
            excepteur flee nostrud school district. The pain 
            of pleasure, do elit consequat ut they deserted the
            general cupidatat cupidatat are no regions eiusmod
            them to be none. Let your pleasure and exercise,
             does not excepteur aliquip school district 
             cupidatat excepteur nostrud escape!
            </p>
          </div>
        </div>
      </div>

      <div className="jobsApply__wrapper">
        <div className="section__heading">
          <h1>Apply for Jobs</h1>
        </div>
        <div className="form__wrapper">
          <form>
            <div className="form__field">
              <label>Full Name</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Email Address</label>
              <input type="email" required />
            </div>
            <div className="form__field">
              <label>Experience</label>
              <input type="number" required min="0" />
            </div>
            <div className="form__field">
              <label>Education</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Role</label>
              <input type="text" required />
            </div>
            <div className="form__field">
              <label>Location</label>
              <input type="text" required />
            </div>
            <button>Apply Now</button>
          </form>
          <div className="form__image">
            <img src="assets/img/doctors/doctor-09.jpg" alt="Team Members" />
          </div>
        </div>
      </div>

      
{/*     
      <section class="hme-career-section">
    <div class="hme-career-section--content">
        <div class="hme-career-section--content-text">
            <h2 class="hme-career-section--content-text-title">Coach at Healthify</h2>
            <p class="hme-career-section--content-text-description">Interested in working with us? Check out the openings and see if you’ve got what it takes to become a part of a fun loving, hard working team!</p>
        </div>
        <div class="hme-career-section--content-button-container">
            <a href="/our-coaches/"><button class="hme-button--white" onclick="_ga_coaches('CTA click', 'Career')">VIEW OPENINGS</button></a>
        </div>
    </div>
  </section> */}


</>
);
}

export default Career;
