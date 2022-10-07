![Alt text](/client/src/bus_image.jpeg "a title")

# School Bus Tracker
As I wait in the pouring rain to pick up my child from school, I think to myself: "Wouldn't it be great to know where his bus is?" Even on perfectly sunny days, it is less than ideal to wait at the bus stop for 20 minutes. Even worse, there have been times when the bus has broken down or had other issues that has made it an hour+ late. 

To remedy this issue, I have developed a simple school bus tracker.

## Technologies
This system uses Ruby on Rails with a postgres server for the backend as well as React with React Router on the frontend.

## File Structure
### Backend
The backend files are located in the app folder. They consist of the controllers, models, and serializers necessary to fetch Data to/from the database. 
The db folder contains all of the migrations as well as the database schema.
The API routes themselves can be found in routes.rb file, which can be found in the config directory.

### Frontend
The frontend files are stored in the client directory.
App.js contains many of the fetch GET requests in order receive the preliminary data.
All of the React routes are contained in the src/components directory.
    
## Setup
From the school_bus_tracker directory, enter the command: rails s
From the school_bus_tracker/client directory, enter the command: npm start


## Usage
When first using the system, the user can go to the create user page, where s/he enters his/her first name, last name, whether s/he is a parent, driver, or both, and creates a username and password.

Once a user logs into the system s/he is taken to the LoggedInUserHomeScreen. It is from this screen that a parent can go to the form to add a student and a driver can go to the form to add the buses that s/he drives.

** Driver ** - Once a driver has established his/her buses, the home screen will have a link for him/her to log their bus routes. From the subsequent screen, they then select the bus. This will updated the dropdown list of school/bus route combinations (each bus is assigned to a specific route for each school). S/he then selects whether the bus is going to or from school. 

Once the driver presses the "Begin" button, a start time has been created. Then, as the driver completes each stop s/he simply presses the associated button, and the time is displayed.

** Parents ** - When a parent adds a child record, s/he selected the child that the student attends. This populates the list of bus routes. Once a bus route is selected, the parent chooses his/her stop.

When the parent wants to track a bus, from the home screen, s/he can select which child to track and whether the bus is going to or from the school. On the subsequent screen, it will say whether or not the bus has started its route. If so, it will display a list of stops as well as the time the bus arrived at each stop.

If a child transfers from one school to another, the parent can go to his/her profile screen, click the link to update the student's record and enter the new school, bus route, and stop.

If a child graduates or moves out of the district, the parent can click the button to stop tracking, and the student's record is deleted.