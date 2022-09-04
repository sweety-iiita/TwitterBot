# TwitterBot

1. Install node version v16.15.1  or more
2. Install npm version 8.11.0
3. Pull this code from terminal and go to directory TwitterBot
4. Install mysql2
5. Run command : node app.js
6. Hit api by application postman or any other with below information : 
  1. postUserstweet
     1.  url : http://localhost:8080/users/tweet  (select POST in postman)
     2. payload : examples
                  {"name": "Narendra Modi", "tweets": "Happy Birthday "}
                  {"name": "Narendra Modi", "tweets": "Jai Hind"}
                  {"name": "Narendra Modi", "tweets": "har ghar tringa"}
                  {"name": "Sweety", "tweets": "God is everywhere"}
                  {"name": "Sanchit", "tweets": "Started new Job"}
                  {"name": "Narendra Modi", "tweets": "Beti padhao Desh bachao"}
                  {"name": "Narendra Modi", "tweets": "Digital Bharat"}

  2.  getUserstweet
       1. url : http://localhost:8080/users/tweet   (select GET in poastman)
       Result for get api : 

       [
       {
        "name": "Narendra Modi",
        "tweets": "Jai Hind"
       },
       {
        "name": "Narendra Modi",
        "tweets": "Happy birthday sweety"
       },
       {
        "name": "Narendra Modi",
        "tweets": "Happy Birthday "
       },
       {
        "name": "Narendra Modi",
        "tweets": "har ghar tringa"
       },
       {
        "name": "Sweety",
        "tweets": "God is everywhere"
       }
      ]

   3. getUsertweet (particular user)
       1. url : http://localhost:8080/users/tweet/Narendra Modi
          Result for get api : 

          [
           {
             "name": "Narendra Modi",
              "tweets": "Jai Hind"
            },
            {
              "name": "Narendra Modi",
              "tweets": "Happy birthday sweety"
            },
             {
               "name": "Narendra Modi",
                "tweets": "Happy Birthday "
             },
              {
                 "name": "Narendra Modi",
                 "tweets": "har ghar tringa"
              },
              {
                  "name": "Narendra Modi",
                   "tweets": "Beti padhao Desh bachao"
                },
              ]

    4. postUserscomment 
         1. url : http://localhost:8080/users/comment
         2. payload : {"name": "sweety", "tweets": "Happy Birthday ", "comments": "thanks"}
                       {"name": "sweety", "tweets": "Jai Hind", "comments": "Jai Bharat"}

    5. getUsersComment
         1. url : http://localhost:8080/users/comment
         Result :
         [
       {
        "name": "sweety",
        "tweets": "Happy birthday sweety",
        "comments": "thanks"
       },
       {
        "name": "sweety",
        "tweets": "Happy Birthday ",
        "comments": "thanks"
      },
      {
        "name": "sweety",
        "tweets": "Jai hind",
        "comments": "Jai Bharat"
       },
       {
        "name": "sweety",
        "tweets": "Jai Hind",
        "comments": "Jai Bharat"
       }
        ]

        6. getUserComment 
          1. http://localhost:8080/users/comment/sweety

          [
       {
        "name": "sweety",
        "tweets": "Happy birthday sweety",
        "comments": "thanks"
       },
       {
        "name": "sweety",
        "tweets": "Happy Birthday ",
        "comments": "thanks"
      },
      {
        "name": "sweety",
        "tweets": "Jai hind",
        "comments": "Jai Bharat"
       },
       {
        "name": "sweety",
        "tweets": "Jai Hind",
        "comments": "Jai Bharat"
       }
        ]

