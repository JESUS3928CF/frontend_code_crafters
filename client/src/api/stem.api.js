import axios from "axios"

//request to create a new recommendation
//waits for the object to create the recommendation
export const createRecommendation = (recommendation) => {
    return axios.post('http://localhost:8000/api/v1/recommendation/', recommendation)
  }