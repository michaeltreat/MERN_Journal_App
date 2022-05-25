# MERN_Journal_App
A journaling app allowing users to login in, create a journal entry, and view others' journal entries.


Frontend uses:

- React
    - React-hook-form

- Input Validation:
    - Yup




I'm thinking about my data model. I have users, and each user has a collection of journals. But I don't want to embed the journals inside the entire user-profile. This means I need to make a collection of journals.

In the collection of journals, I don't want each journal to be free-floating. I want them contained to the user. So, I am thinking that each document in Journals starts with a user object which points to the user_id of the auther of the the journal. 

This way, I am able to seperate the bulky journals from the user profiles, but still contain the journals in the journal collection database by user. 

However, I don't think this is best practice. I am wondering how this will pan out when I start to build the mongo db, and how lookups and insertions will work. Can I find a user by it's id in the journals database, and easily update it with a new journal. 

Also, what about leaving comments and reactions, and sharing. I need to think through the data modeling a bit more before I have these answers, but I will put this on hold for now. 

Right now I am focused on creating just the user models, which I already know, so I will continue with that.

Afterwards, I will store the journals on the user model for now ( during fe development.)

When I begin working on the back-end I will spend more time thinking through the data models and get to MVP. Once I'm there I expect I'll be face to face with the probelm and better able to deal with it then. 
