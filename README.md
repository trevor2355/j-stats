# J Stats
This is a node.js application, that relies on chart.js to allow the user to see an overview of any current Jazz Player's career. The user can select basic stats for each player and see their season averages.  The user also has the option to toggle between two beautiful Jazz themes by clicking the 'J Stats' logo. 

## Getting Started

### Prerequisites
A couple of things that you will need installed on your machine (check out their documentaion for installation instuctions).

1. [Mysql](https://dev.mysql.com/downloads/mysql/)

##### Recommended
* [Nodemon](https://nodemon.io/)

### Installing
When you are located in the root of the project folder run the following command in the terminal:
```
npm install
```

### Intial Set-up

1. Create a .env file in the root of the project with the following key value pairs:
```
DB_PW=(secret password goes here)
DB_USER=(database user)
DB_DB=jstasdb
```
*Note - The App is capable of taking in PORT and DB_HOST variables at runtime.

2. If you would like to populate the database with statistics from the NBA's API, run the following command

```
npm run schema
```
This will create the 'jstatsdb' database and it will also create the two tables that will be holding the data.

Next run the following:
```
node server/db/APIHelpers.js
```
This will populate the players table with basic player stats for each player on the Utah Jazz Roster, it will also populate the stats table with season averages for each year that any given Jazz Player has played on any team in the NBA.

3. If any changes are made to the front-end it will be necesarry to re-build the bundle.js file using the following command

```
npm run webpack
```

## App Features

#### View Stats

![Select Dates Gif](Demo/view-stats.gif)

#### Change Stat

![Guests Gif](Demo/change-stat.gif)

#### Change Players

Notice that the dates selected from early are no longer available after 'Reserve' button is clicked.

![Reserve Gif](Demo/change-player.gif)

#### Change Themes

Notice that the dates selected from early are no longer available after 'Reserve' button is clicked.

![Reserve Gif](Demo/change-theme.gif)

## Deployment

I deployed this project using Docker and AWS. 

## Built With
* Node.js
* Express
* React
* HTML
* CSS
* MySQL
* Docker
* AWS (Deployment)

## License
MIT license [here](https://github.com/trevor2355/j-stats/blob/master/LICENSE)
