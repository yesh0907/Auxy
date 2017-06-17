import React, { Component } from 'react';

let axios = require('axios');
let baseUrl = 'https://auxy-ahsg.herokuapp.com/';

let pastIllnesses = [
  {
    illnessName: 'Lymphoma Cancer',
    illnessDate: 'December 27, 2016',
    numberOfSymptoms: '4',
    symptoms: 'Fever, Night Sweats, Fatigue, Weight Loss'
  },
  {
    illnessName: 'Common Cold',
    illnessDate: 'January 6, 2016',
    numberOfSymptoms: '3',
    symptoms: 'Runny Nose, Sore Throat, Cough'
  },
  {
    illnessName: 'Diarrhea',
    illnessDate: 'March 15, 2015',
    numberOfSymptoms: '5',
    symptoms: 'Cramps, Watery Stools, Nausea, Throwing Up, Urgent Feelings of Bowel Movement'
  }
]

class IllnessFeed extends Component {


  render() {
    return (
      <div>
        <Feed>

        </Feed>
      </div>
    );
  }
}

export default IllnessFeed;
