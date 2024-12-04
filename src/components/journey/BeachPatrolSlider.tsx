import React from 'react';
import ImageSlider from '../ImageSlider';

const beachPatrolImages = [
  {
    url: "https://aqua.org/assets/people/_figure_2x/1377923/2017-11-29_cold-stun_3-people-combing-the-shoreline-of-cape-cod-for-sea-turtles_right-center_001.webp",
    caption: "Volunteers searching Cape Cod shoreline for cold-stunned turtles",
    credit: "Aqua.org"
  },
  {
    url: "https://web.massaudubon.org/images/content/pagebuilder/WB-volunteer-pulling-large-sea-turtle-on-sled_1140.jpg",
    caption: "Volunteer transporting rescued turtle on beach sled",
    credit: "Mass Audubon"
  },
  {
    url: "https://www.fisheries.noaa.gov/s3//styles/original/s3/2024-06/Cold-stunned-sea-turtle-rescued-Credit-Mass-Audubon-Wellfleet-Bay.jpg",
    caption: "Rescuer preparing turtle for transport",
    credit: "NOAA Fisheries"
  },
  {
    url: "https://www.massaudubon.org/var/site/storage/images/6/1/8/2/2052816-1-eng-US/290b35f6bc72-ST2022_Kathy-Herrick-ands-turtles.jpg",
    caption: "Transportation to triage center",
    credit: "Mass Audubon"
  }
];

const BeachPatrolSlider = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <ImageSlider images={beachPatrolImages} />
    </div>
  );
};

export default BeachPatrolSlider;