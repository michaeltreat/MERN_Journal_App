import { Routes, Route } from "react-router-dom";

import HomeView from './Views/HomeView'
import LandingView from './Views/LandingView';
import JournalsView from './Views/JournalsView';
import NavBar from "./Components/Layout/NavBar";


import './App.css'

import { getJournals } from "./data/data";
// import MenuFlyOut from "./Views/MenuFlyout";

// sample journal data model. This will be received by the server after user login
const dummyJournals =  [
  {
      "_id": "journal-01",
      "visibility" : {
          "public" : false,
          "shared" : true
      },
      "title": "React Study",
      "description" : "This is the first journal Data model!",
      "author": {
          "_id" : "0"
      },
      "entries" : [
          {
              "_id" : "entry01",
              "date" : "05/24/22",
              "description" : "sample from journal 1 entry 1",
              "body" : "Today is 05/24/22. I'm creating a journal app using the MERN stack. Right now I'm testing out the json-server to create some sample data to use during development." ,
              "reactions": [
                  {
                      "thumbsUp": {
                          "users": ["users"]
                      },
                      "heart" : {
                          "users": ["users"]
                      },
                      "smile" : {
                          "users": ["users"]
                      }
                  }
              ],
              "comments" : [
                  {
                      "_id" : "comment01",
                      "author" : "1",
                      "date" : "05/24/22",
                      "body": "So great! I'm proud of you!",
                      "reactions": [
                          {
                              "thumbsUp": {
                                  "users": ["users"]
                              },
                              "heart" : {
                                  "users": ["users"]
                              },
                              "smile" : {
                                  "users": ["users"]
                              }
                          }
                      ]
                  }
              ]

          },
          {
              "_id" : "entry02",
              "date" : "05/23/22",
              "description" : "sample from journal 1 entry 2",
              "body" : "making bacon appcakes, take the bacon and a put it in the appcake.", 
              "reactions": [
                  {
                      "thumbsUp": {
                          "users": ["users"]
                      },
                      "heart" : {
                          "users": ["users"]
                      },
                      "smile" : {
                          "users": ["users"]
                      }
                  }
              ],
              "comments" : [
                  {
                      "_id" : "comment02",
                      "author" : "user392",
                      "date" : "05/23/22",
                      "body": "Noice",
                      "reactions": [
                          {
                              "thumbsUp": {
                                  "users": ["users"]
                              },
                              "heart" : {
                                  "users": ["users"]
                              },
                              "smile" : {
                                  "users": ["users"]
                              }
                          }
                      ]
                  }
              ]
              
          }
      ]
  },
  {
    "_id": "journal-02",
        "visibility" : {
            "public" : false,
            "shared" : true
        },
        "title": "Weight loss log",
        "description" : "Keeping a log of my weight loss journey!",
        "author": {
            "_id" : "0"
        },
        "entries" : [
            {
                "_id" : "entry01",
                "date" : "05/24/22",
                "description" : "sample from journal 2 entry 1",
                "body" : "Today I ate a banana then ordered from door dash. I persisted in an unrelenting shame-state for the remainder of the evening. " ,
                "reactions": [
                    {
                        "thumbsUp": {
                            "users": ["users"]
                        },
                        "heart" : {
                            "users": ["users"]
                        },
                        "smile" : {
                            "users": ["users"]
                        }
                    }
                ],
                "comments" : [
                    {
                        "_id" : "comment01",
                        "author" : "1",
                        "date" : "05/24/22",
                        "body": "So great! I'm proud of you!",
                        "reactions": [
                            {
                                "thumbsUp": {
                                    "users": ["users"]
                                },
                                "heart" : {
                                    "users": ["users"]
                                },
                                "smile" : {
                                    "users": ["users"]
                                }
                            }
                        ]
                    }
                ]

            },
            {
                "_id" : "entry02",
                "date" : "05/23/22",
                "description" : "sample from journal 2 entry 2",
                "body" : "Yeah baby, back to making - making bacon appcakes", 
                "reactions": [
                    {
                        "thumbsUp": {
                            "users": ["users"]
                        },
                        "heart" : {
                            "users": ["users"]
                        },
                        "smile" : {
                            "users": ["users"]
                        }
                    }
                ],
                "comments" : [
                    {
                        "_id" : "comment02",
                        "author" : "user392",
                        "date" : "05/23/22",
                        "body": "Noice",
                        "reactions": [
                            {
                                "thumbsUp": {
                                    "users": ["users"]
                                },
                                "heart" : {
                                    "users": ["users"]
                                },
                                "smile" : {
                                    "users": ["users"]
                                }
                            }
                        ]
                    }
                ]
                
            }
        ]
  
    }
] 

const testJournals = getJournals()

export default function App() {
  return (
    <div >
        {/* <MenuFlyOut /> */}
        <NavBar />
        <Routes>
            <Route path="/" element={<LandingView />}/>
            <Route path="home/" element={<HomeView journals={testJournals} />}/>
            <Route path="journals/*" element={<JournalsView />} />
            <Route path="*" element={<LandingView />} />
        </Routes>

  </div>
  );
}