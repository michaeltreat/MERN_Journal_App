import Header from './Components/Header';
import Home from './Components/Home'
import SignInForm from './Components/SignInForm';
import Journals from './Components/Journals';
import Journal from './Components/Journal';


import './App.css'

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
  }
] 


export default function App() {
  return <main>
    <Header />
    <SignInForm />
    <Home />
    <Journals journals={dummyJournals}/>
  </main>

;
}