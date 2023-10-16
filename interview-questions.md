# ASSESSMENT 6: Interview Practice Questions

Answer the following questions.

First, without external resources. Challenge yourself to answer from memory.

Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn. Write your researched answer in your OWN WORDS.

Type your initials here to confirm you read the instructions: AS

1. As a Rails developer, I am creating an application with a model called Cohort and a model called Student. The relationship between these models is that a cohort has_many students, but OOPS! I forgot to add the foreign key. How can I fix this mistake? What is the name of the foreign key? Would the foreign key be on the Cohort model or the Student model?

Your answer: The foreign key is named Student. The way to fix this mistake is by: defining that the Student "belongs_to" the Cohort. 

Researched answer: The way to fix this mistake is by migrating to add the foreign key to the student table - you do this by: opening terminal and navigating to rails appp directory, rails g migration AddCohortToStudents cohort:references, then run the migration in the database with rails db:migrate. The migrate command lets you have a "cohrt_id" in the student table. Allowing for access to "cohort_id" by using "student.cohort"

2. Which RESTful routes must always be passed params?

Your answer: All of the http verbs. 

Researched answer: The RESTful routes that need to be passed through the params are HTTP verbs (get-shows the route, post-creates the route, put-updates the route, delete). You also have to add in a specification which entry you want to allow to pass params. 

3. Name three rails generator commands. What is created by each?

Your answer: 3 rails generator commands are: "rails db:migrate" = saves your work, "rails g" = generates your model, "rails s" = starts your server. Generate new code (short-cut alias: "g") console Start the Rails console (short-cut alias: "c") server Start the Rails server (short-cut alias: "s") 

Researched answer: 3 rails generator commands are: "rails db:migrate" = saves your work, "rails g" = generates your model, "rails s" = starts your server. Generate new code (short-cut alias: "g") console Start the Rails console (short-cut alias: "c") server Start the Rails server (short-cut alias: "s"). All of these generator commands assist in the development process for ruby by creating the appropriate files and boilerplate codes for your future application. 

4. Consider the Rails routes below. What is the name of the controller method that would be called by each route? What action would each of the controller methods perform? 

action: "GET" location: /students
CONTROLLER METHOD: showing action
ACTION PERFORMED: retrieving or reading data regarding students

action: "POST" location: /students
CONTROLLER METHOD: creating action
ACTION PERFORMED: creating or adding new data on the server, creation of a new student record or resource

action: "GET" location: /students/new
CONTROLLER METHOD: showing action
ACTION PERFORMED: retrieving or reading data for a new student record

action: "GET" location: /students/2
CONTROLLER METHOD: showing action
ACTION PERFORMED: retrieving or reading data for a new student record 


action: "GET" location: /students/2/edit
CONTROLLER METHOD: showing action
ACTION PERFORMED: editing data aassociated with the ID of 2

action: "PATCH" location: /students/2
CONTROLLER METHOD: updating action
ACTION PERFORMED: apply changes or modification data for a new student record

action: "DELETE" location: /students/2
CONTROLLER METHOD: destoying an existing resource
ACTION PERFORMED: removing or deleting the specific student ID of 2.

5. As a developer, you are making an application to manage your to do list. Create 10 user stories that will help you get your application started. [Here is a resource](https://www.atlassian.com/agile/project-management/user-stories) to help you create your user stories.

INITIATIVE...CREATE A: MANAGE YOUR TO DO LIST APP:
brainstorming:
-the user needs to be able to document a "date" for the to-do list
-the user needs to be able to document a "name" for the to-do list
-the user needs to be able to choose how many "to-do's" they want to add to that specific list
-the user needs to be able to have the ability to add details to each specific task(limit 6 details)
-there needs to be a "Add a task" button (just one)
-there needs to be a "Completed task" button which will remove the task from the list...(for each task documented)
-3 categories of tasks (quicks, personal, professional) -seperate to 3 user stories-
-once all tasks are completed the screen turns to fireworks so that the user can feel great about finishing everything they've desired. 


STORY 1: 
CRITERIA: 
the functionality needs to be interactive
they want to document a date to maintain a record of their to-do lists
they want it because it helps them stay organized



STORY 2:
CRITERIA: 
the functionality needs to be interactive
they want to document a name to personalize a record of their to-do lists
they want it because it makes to-do lists more appealing



STORY 3:
CRITERIA: 
the functionality needs to be interactive
they want to document potentially many of their to-do lists 
they want it to maximize efficiency



STORY 4:
CRITERIA: 
the functionality needs to be interactive
they want to add specific details regarding each task they want to achieve
they want it because it helps maintain organization



STORY 5:
CRITERIA: 
the functionality needs to be "link_to" (a button)
they want to easily add a new task to their list
they want it because it's user friendly, convinient 



STORY 6:
CRITERIA: 
the functionality needs to be  "link_to" (a button) 
they want to easily remove the task they have completed
they want it because it lets the user know their task is complete



STORY 7:
CRITERIA: 
the functionality needs to be a table that seperated each task to fall under the category of :personal
they want to organize their tasks so that they can prioritize their time better
they want it because it lets the user gain a sense of prioritization and time-management



STORY 8:
CRITERIA: 
the functionality needs to be a table that seperated each task to fall under the category of :quicks 
they want to organize their tasks so that they can prioritize their time better
they want it because it lets the user gain a sense of prioritization and time-management



STORY 9:
CRITERIA: 
the functionality needs to be a table that seperated each task to fall under the category of :professional
they want to organize their tasks so that they can prioritize their time better
they want it because it lets the user gain a sense of prioritization and time-management



STORY 10:
the functionality needs to be an automatic response designed in the backend of the application that is triggered once the user has clicked on all of the "completed task" buttons
they want to feel accomplished
they want it because fireworks are associated celebratory emotions


