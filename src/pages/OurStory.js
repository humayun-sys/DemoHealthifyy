//import { ReactComponent } from '*.svg';
import React from 'react';




class OurStory extends React.Component{


          render(){

            return(
               <>
                     <section class="story_team__grid">
            <div class="heading extra__margin-2 our__story">
                <p>Our Story</p>
            </div>
            <div class="row hidden-md hidden-sm hidden-xs">
                <div class="col-lg-7 col-md-7 col-sm-7 col-xs-12">
                    <p class="our__story__title">The Infallibles</p>
                    <p class="out__story__desc">
                        This is the untold story of the infallibles from India’s startup community. The story of a fledgling company from Bangalore looking to do the unthinkable — of getting Indians to adopt digital health & fitness products.
                    </p>
                    <p class="our__story__hastag">
                        This is our story! #StoryoftheInfallibles
                    </p>
                    <p className="text-align:left">
                        {/* <a target="_blank" href="https://stories.healthify.com/the-story-of-the-infallibles-3f2aeb36e1d6" class="our__story__btn">
                      READ MORE
                  </a> */}
                    </p>
                </div>
                <div class="col-lg-4 col-md-4 col-sm-4 col-xs-12">
                    <img class="our_story_image" src="/static/teamv2/images/Infallibles.106f0a5ce7d3.png" alt="our story" />
                </div>
            </div>
            <div class="row hidden-md hidden-lg hidden-xlg">
                <div class="col-lg-12 col-md-12 col-sm-12 col-xs-12">
                    <img class="our_story_image" src="/static/teamv2/images/Infallibles.106f0a5ce7d3.png" alt="our story" />
                    <p class="our__story__title">The Infallibles</p>
                    <p class="out__story__desc">
                        This is the untold story of the infallibles from India’s startup community. The story of a fledgling company from Bangalore looking to do the unthinkable — of getting Indians to adopt digital health & fitness products.
                    </p>
                    <p class="our__story__hastag">
                        This is our story! #StoryoftheInfallibles
                    </p>
                    <p className="text-align:left1">
                        {/* <a target="_blank" href="https://stories.healthify.com/the-story-of-the-infallibles-3f2aeb36e1d6" class="our__story__btn">
                        READ MORE
                    </a> */}
                    </p>
                </div>
            </div>
        </section>


               </>


                )
  
  }          }
  
  export default OurStory;