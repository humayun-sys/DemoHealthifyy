import React from "react";

import { Layout } from "antd";

import Sidebar from "../components/Sidebar";
import Topbar from "../components/Topbar";
//import Header from "../components/Header";

const { Content } = Layout;

function HomeLayout(props) {
  return (
    <Layout style={{ minHeight: "100vh" }}>
      <Sidebar />
    
      <Layout className="site-layout">
        <Topbar />
        
     
        <Content>
          <div className="site-layout-background">{props.children}</div>
        </Content>

        {/* <Footer style={{ textAlign: "center" }}>
          Company ©2021 Created by Qloron Technology
        </Footer> */}

        <footer class="footer">
            <div class="contact">
                <div class="contact__navigation">
                    <span class="contact__heading"> Links </span>
                    <ul class="contact__list">
                        <li>
                            <a class="contact__link" href="https://plans.healthify.com/">Healthify Premium Plans</a>
        
      </li>
      <li>
        <a class="contact__link" href="https://www.healthify.com/blog/"
          >Blog</a>
        
      </li>
      <li>
        <a class="contact__link" href="https://www.healthify.com/dietitians/"
          >Dietitians</a>
        
      </li>
      <li>
        <a
          class="contact__link"
          href="https://www.healthify.com/fitness-trainers/"
          >Fitness Trainers</a>
        
      </li>
      <li>
        <a class="contact__link" href="healthify.com/yoga-instructors/"
          >Yoga Instructors</a>
        
      </li>
      <li>
        <a
          class="contact__link"
          href="https://www.healthify.com/terms-of-use/"
          >Terms and Conditions</a>
        
      </li>
      <li>
        <a
          class="contact__link"
          href="https://www.healthify.com/corporate-wellness/"
          >Corporate Wellness</a>
        
      </li>
      <li>
        <a class="contact__link" href="https://www.healthify.com/team/"
          >Meet the Team</a>
        
      </li>
    </ul>
  </div>
  <div class="contact__numbers">
    <span class="contact__heading"> Contact us </span>
    <span class="contact__sub-heading"> Email: </span>
    <ul class="contact__list">
      <li>
        <a href="mailto:support@healthify.com" class="contact__link"
          >Support@healthify.com</a>
        
      </li>
    </ul>
    <span class="contact__sub-heading"> Address: </span>
    <ul class="contact__list">
      <li>
        
        Plot NO 92, Gajanan Nagar,
        Khobragade Layout, Omkar N,
        Nagpur, Maharashtra, India - 440027
      </li>
      <li>


        
        SY.NO.1, Sandhu Nivas,
        Mallikarjuna Nagar Colony Rd,
        Anitha Nagar, Vanasthalipuram
        Hyderabad, Telengana, India - 500070
      </li>
    </ul>
  </div>
  <div class="contact__media-handles">
    <span class="contact__heading"> FOLLOW US </span>
    <ul class="contact__list">
      <li>
        <a
          href="https://www.facebook.com/Healthify/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="facebook"
          title="facebook"
        >
          <img
            data-src="https://healthify.imgix.net/static/images/home_website/Icon-facebook.png"
            class="contact__icon contact__icon--facebook lazyload"
            alt="Take me to healthify facebook"
          />
        </a>
                        </li>

                        <li>
                            <a href="https://twitter.com/healthify" target="_blank" rel="noopener noreferrer" aria-label="twitter" title="twitter">
          <img
            data-src="https://healthify.imgix.net/static/images/home_website/Icon-twitter.png"
            class="contact__icon contact__icon--twitter lazyload"
            alt="Take me to healthify twitter"
          />
        </a>
                        </li>

                        <li>
                            <a href="https://www.youtube.com/channel/UCVpKsV04t5WzWJcxqRax7rA" target="_blank" rel="noopener noreferrer" aria-label="youtube" title="youtube">
          <img
            data-src="https://healthify.imgix.net/static/images/home_website/Icon-youtube.png"
            class="contact__icon contact__icon--youtube lazyload"
            alt="Take me to healthify youtube page"
          />
        </a>
                        </li>

                        <li>
                            <a href="https://www.instagram.com/explore/tags/healthify/ " target="_blank" rel="noopener noreferrer" aria-label="instagram" title="instagram">
          <img
            data-src="https://healthify.imgix.net/static/images/home_website/Icon-instagram.png"
            class="contact__icon contact__icon--facebook lazyload"
            alt="Take me to healthify instagram page"
          />
        </a>
                        </li>
                    </ul>
                </div>
            </div>

            <hr />
            <span class="copyright">Copyright © Qloron Private Limited</span>

        </footer>
      </Layout>
    </Layout>
  );
}

export default HomeLayout;
