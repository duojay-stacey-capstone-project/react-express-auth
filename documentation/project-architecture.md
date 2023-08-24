# Project Architecture: 

This is the project architecture for lanaguge learning app. The app will have a front-end implemented using React and Typescript, a back-end using Node.js with Express, and a database using PostgreSQL. Here’s how the components will interact and work together:

### Front-End Components (React):
* **User Interface (UI)**: The front-end will consist of the following components:
   *  A quiz
   *  A user would be able to selected the choices to stregth their knowledge 
   *  At the end of the quiz the user will be able to see their progress
   *  If the user have acheieve a score 85% or higher they will be able to go to the second lesson
* **State Management**:
   * The question list component will manage and list out each question for the user depending the lanaguge the user selected and each question will have the quiz question id, answer, three other choices and the quiz id
* **Communication with Back-End**: The front-end will make API calls to the back-end to retrieve quiz_questions, and record the user attempst in the quiz attempts.

### Back-End Components (Node.js with Express):
* **API Endpoints**: The back-end will expose several API endpoints to handle different actions such as fetching all quiz question, quiz topic, and quiz lesson updating a task’s status, and deleting a task. These include:
    * `GET /quiz/:id`
    * `GET /quiz_topic/:id`
    * `GET /lesson-quiz/:id`
    * `GET /quiz-question/:id`
* Quiz Controller: A `quizControllers` module will process incoming API requests, interact with the database, and send appropriate responses back to the front-end.
* Quiz Model: A `quiz` model will define the structure of a `quiz` and the methods to interact with the PostgreSQL database.
* PostgreSQL Connection: The back-end will establish a connection to the PostgreSQL database using Knex to perform CRUD (Create, Read, Update, Delete) operations on tasks.

### Interaction Flow:
* When a user login into the website and click on quiz topic then lesson the front-end will load and send an API request to fetch all quiz questions  from the back-end. 
    * The back-end will retrieve their progress from the database and return them as a response to the front-end.
    * The front-end will display the test.
* When a user finish the quiz, the front-end will send a request to the back-end’s API endpoint to create a new quiz attempts in the database.
    * The back-end will receive the request, ensuring that the required data is provided (user id, quiz id and user_progress). The back-end will generate the quiz id and timestamp and when the user score is greater than 85% it will set thr second lesson to  `true`. It will open the second the lesson and allowing the user to access the second lesson.


