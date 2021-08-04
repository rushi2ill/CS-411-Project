const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const mysql = require("mysql2");
const cors = require("cors");
const { request } = require("express");

var db = mysql.createConnection({
    host: '34.71.8.176',
    user: 'root',
    database: 'stage3',
});


db.connect();
console.log("database connected");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.json());

/*const sqlSelect1 = "SELECT * FROM races WHERE Year = 2030";

db.query(sqlSelect1, [], (err, result) => {
    console.log("Select statement ");
    console.log(err);
    console.log(result);
    console.log("didnt work ");
});*/

app.listen(3001, () => {
    console.log("running on port 3001");
})

/*app.get("/", (require, response) => {
//    response.json({"hello":"hi"});
        response.sendFile("index.html",{root:__dirname+"/static"});
});
db.end();
*/
app.get("/api/get", (require, response) => {
    const advanced = "(SELECT C1.TeamName as Constructors, SUM(R.Points) as Points FROM constructors C1 LEFT OUTER JOIN races R ON C1.TeamName = R.TeamName WHERE R.Year < 2010 and R.Points = 10 GROUP BY C1.TeamName ) UNION (SELECT C1.TeamName as C, SUM(R.Points) as P FROM constructors C1 LEFT OUTER JOIN races R ON C1.TeamName = R.TeamName WHERE R.Year >= 2010 and R.Points = 25 GROUP BY C1.TeamName)";
    db.query(advanced,[], (err, result) => {
               console.log(err);
               console.log(result);
               response.send(result);
        
           });
       
})
app.get("/api/get2", (require, response) => {
    const advanced = "SELECT D.Country, AVG(R.Points) FROM drivers D LEFT OUTER JOIN races R ON D.FullName= R.DriverName WHERE(R.Year < 2020 AND R.Year > 2009) GROUP BY D.Country";
    db.query(advanced,[], (err, result) => {
               console.log(err);
               console.log(result);
               response.send(result);
        
           });
       
})

app.post("/api/select", (require, response) => {
    const Year = require.body.Year;
    const Racenum = require.body.Racenum;
    const TrackName = require.body.TrackName;
    const TrackNum = require.body.TrackNum;

    const DriverName = require.body.DriverName;
    const TeamName = require.body.TeamName;
    const Laps = require.body.Laps;
    const Points = require.body.Points;

    const Time = require.body.Time;
    const Diff = require.body.Diff;
    const Q1 = require.body.Q1;
    const Q2 = require.body.Q2;
    const Q3 = require.body.Q3;
    const Lap = require.body.Lap;
    const DriverNum = require.body.DriverNum;
    const Country = require.body.Country;
    const TeamBase = require.body.TeamBase;
    const TeamNum = require.body.TeamNum;
    const Database = require.body.Database;

    var sqlSelect = "SELECT * FROM " + Database + " WHERE ";

    lis = []
    if (Year != '') {
        lis.push(Year);
        sqlSelect = sqlSelect + "Year = ? AND ";
    }
    if (Racenum != '') {
        lis.push(Racenum);
        sqlSelect = sqlSelect + "RaceNum = ? AND ";
    }
    if (TrackName != '') {
        lis.push(TrackName);
        sqlSelect = sqlSelect + "TrackName = ? AND ";
    }
    if (DriverName != '') {
        lis.push(DriverName);
        sqlSelect = sqlSelect + "DriverName = ? AND ";
    } if (TeamName != '') {
        lis.push(TeamName);
        sqlSelect = sqlSelect + "TeamName = ? AND ";
    } if (Laps != '') {
        lis.push(Laps);
        sqlSelect = sqlSelect + "Laps = ? AND ";
    } if (Points != '') {
        lis.push(Points);
        sqlSelect = sqlSelect + "Points = ? AND ";
    } if (Time != '') {
        lis.push(Time);
        sqlSelect = sqlSelect + "Time = ? AND ";
    } if (Diff != '') {
        lis.push(Diff);
        sqlSelect = sqlSelect + "Diff = ? AND ";
    } if (Q1 != '') {
        lis.push(Q1);
        sqlSelect = sqlSelect + "Q1 = ? AND ";
    } if (Q1 != '') {
        lis.push(Q2);
        sqlSelect = sqlSelect + "Q2 = ? AND ";
    } if (Q3 != '') {
        lis.push(Q3);
        sqlSelect = sqlSelect + "Q3 = ? AND ";
    } if (Lap != '') {
        lis.push(Lap);
        sqlSelect = sqlSelect + "Lap = ? AND ";
    } if (DriverNum != '') {
        lis.push(DriverNum);
        sqlSelect = sqlSelect + "DriverNum = ? AND ";
    } if (Country != '') {
        lis.push(Country);
        sqlSelect = sqlSelect + "Country = ? AND ";
    } if (TeamBase != '') {
        lis.push(TeamBase);
        sqlSelect = sqlSelect + "TeamBase = ? AND ";
    } if (TeamNum != '') {
        lis.push(TeamNum);
        sqlSelect = sqlSelect + "TeamNum = ? AND ";
    }

    sqlSelect = sqlSelect.slice(0, sqlSelect.length - 5);

    console.log(sqlSelect);
    for (var i = 0; i < lis.length; i++) {
        console.log(lis[i]);
    }
    db.query(sqlSelect, lis, (err, result) => {
 //       console.log(err);
//        console.log(result);
        response.send(result);
        
    });
});



app.post("/api/insert", (require, response) => {
    console.log("Insert was called");
    const Year = require.body.Year;
    const Racenum = require.body.Racenum;
    const TrackName = require.body.TrackName;
    const TrackNum = require.body.TrackNum;

    const DriverName = require.body.DriverName;
    const TeamName = require.body.TeamName;
    const Laps = require.body.Laps;
    const Points = require.body.Points;

    const Time = require.body.Time;
    const Diff = require.body.Diff;
    const Q1 = require.body.Q1;
    const Q2 = require.body.Q2;
    const Q3 = require.body.Q3;
    const Lap = require.body.Lap;
    const DriverNum = require.body.DriverNum;
    const Country = require.body.Country;
    const TeamBase = require.body.TeamBase;
    const TeamNum = require.body.TeamNum;
    const Database = require.body.Database;

    var sqlInsert = "INSERT INTO " + Database + " (";

    lis = []
    if (Year != '') {
        lis.push(Year);
        sqlInsert = sqlInsert + "Year, ";
    }
    if (Racenum != '') {
        lis.push(Racenum);
        sqlInsert = sqlInsert + "RaceNum, ";
    }
    if (TrackNum != '') {
        lis.push(TrackNum);
        sqlInsert = sqlInsert + "TrackNum, ";
    }
    if (TrackName != '') {
        lis.push(TrackName);
        sqlInsert = sqlInsert + "TrackName, ";
    }
    if (DriverName != '') {
        lis.push(DriverName);
        if(Database== 'drivers'){
            sqlInsert = sqlInsert + "FullName, ";
        }
        else{
        sqlInsert = sqlInsert + "DriverName, ";
        }
    }
    if (TeamName != '') {
        lis.push(TeamName);
        sqlInsert = sqlInsert + "TeamName, ";
    }
    if (Laps != '') {
        lis.push(Laps);
        sqlInsert = sqlInsert + "Laps, ";
    }
    if (Points != '') {
        lis.push(Points);
        sqlInsert = sqlInsert + "Points, ";
    }
    if (Time != '') {
        lis.push(Time);
        sqlInsert = sqlInsert + "Time, ";
    } if (Diff != '') {
        lis.push(Diff);
        sqlInsert = sqlInsert + "Diff, ";
    } if (Q1 != '') {
        lis.push(Q1);
        sqlInsert = sqlInsert + "Q1, ";
    } if (Q1 != '') {
        lis.push(Q2);
        sqlInsert = sqlInsert + "Q2, ";
    } if (Q3 != '') {
        lis.push(Q3);
        sqlInsert = sqlInsert + "Q3, ";
    } if (Lap != '') {
        lis.push(Lap);
        sqlInsert = sqlInsert + "Lap, ";
    } if (DriverNum != '') {
        lis.push(DriverNum);
        sqlInsert = sqlInsert + "DriverNum, ";
    } if (Country != '') {
        lis.push(Country);
        sqlInsert = sqlInsert + "Country, ";
    } if (TeamBase != '') {
        lis.push(TeamBase);
        sqlInsert = sqlInsert + "TeamBase, ";
    } if (TeamNum != '') {
        lis.push(TeamNum);
        sqlInsert = sqlInsert + "TeamNum, ";
    }
    sqlInsert = sqlInsert.slice(0, sqlInsert.length - 2) + ") VALUES (";
    for (var i = 0; i < lis.length - 1; i++) {
        sqlInsert = sqlInsert + "?,";
    }
    sqlInsert = sqlInsert + "?)";
    console.log(sqlInsert);
    for (var i = 0; i < lis.length; i++) {
        console.log(lis[i]);
    }
    db.query(sqlInsert, lis, (err, result) => {
        console.log(err);
        console.log(result);
    });
});

app.post("/api/delete/", (require, response) => {
    const Year = require.body.Year;
    const Racenum = require.body.Racenum;
    const TrackNum = require.body.TrackNum;
    const TrackName = require.body.TrackName;
    const DriverName = require.body.DriverName;
    const TeamName = require.body.TeamName;
    const Laps = require.body.Laps;
    const Points = require.body.Points;

    const Time = require.body.Time;
    const Diff = require.body.Diff;
    const Q1 = require.body.Q1;
    const Q2 = require.body.Q2;
    const Q3 = require.body.Q3;
    const Lap = require.body.Lap;
    const DriverNum = require.body.DriverNum;
    const Country = require.body.Country;
    const TeamBase = require.body.TeamBase;
    const TeamNum = require.body.TeamNum;
    const Database = require.body.Database;

    var sqlDelete = "DELETE FROM " + Database + " WHERE ";

    lis = []
    if (Year != '') {
        lis.push(Year);
        sqlDelete = sqlDelete + "Year = ? AND ";
    }
    if (Racenum != '') {
        lis.push(Racenum);
        sqlDelete = sqlDelete + "RaceNum = ? AND ";
    }
    if (TrackName != '') {
        lis.push(TrackName);
        sqlDelete = sqlDelete + "TrackName = ? AND ";
    }
    if (DriverName != '') {
        lis.push(DriverName);
        sqlDelete = sqlDelete + "DriverName = ? AND ";
    } if (TeamName != '') {
        lis.push(TeamName);
        sqlDelete = sqlDelete + "TeamName = ? AND ";
    } if (Laps != '') {
        lis.push(Laps);
        sqlDelete = sqlDelete + "Laps = ? AND ";
    } if (Points != '') {
        lis.push(Points);
        sqlDelete = sqlDelete + "Points = ? AND ";
    } if (Time != '') {
        lis.push(Time);
        sqlDelete = sqlDelete + "Time = ? AND ";
    } if (Diff != '') {
        lis.push(Diff);
        sqlDelete = sqlDelete + "Diff = ? AND ";
    } if (Q1 != '') {
        lis.push(Q1);
        sqlDelete = sqlDelete + "Q1 = ? AND ";
    } if (Q1 != '') {
        lis.push(Q2);
        sqlDelete = sqlDelete + "Q2 = ? AND ";
    } if (Q3 != '') {
        lis.push(Q3);
        sqlDelete = sqlDelete + "Q3 = ? AND ";
    } if (Lap != '') {
        lis.push(Lap);
        sqlDelete = sqlDelete + "Lap = ? AND ";
    } if (DriverNum != '') {
        lis.push(DriverNum);
        sqlDelete = sqlDelete + "DriverNum = ? AND ";
    } if (Country != '') {
        lis.push(Country);
        sqlDelete = sqlDelete + "Country = ? AND ";
    } if (TeamBase != '') {
        lis.push(TeamBase);
        sqlDelete = sqlDelete + "TeamBase = ? AND ";
    } if (TeamNum != '') {
        lis.push(TeamNum);
        sqlDelete = sqlDelete + "TeamNum = ? AND ";
    }

    sqlDelete = sqlDelete.slice(0, sqlDelete.length - 5);
    console.log(sqlDelete);
    db.query(sqlDelete, lis, (err, result) => {
        console.log(err);
        console.log(result);

    })
});

app.post("/api/update/", (require, response) => {

    const Year = require.body.Year;
    const Racenum = require.body.Racenum;
    const TrackName =require.body.TrackName;
    const DriverName =require.body.DriverName;
    const TeamName = require.body.TeamName;
    const Laps = require.body.Laps;
    const Points =require.body.Points;

    const Time = require.body.Time;
    const Diff = require.body.Diff;
    const Q1 =require.body.Q1;
    const Q2 =require.body.Q2;
    const Q3 = require.body.Q3;
    const Lap = require.body.Lap;
    const DriverNum =require.body.DriverNum;
    const Country = require.body.Country;
    const TeamBase =require.body.TeamBase;
    const TeamNum = require.body.TeamNum;
    const Database =require.body.Database;

    const Year2 = require.body.Year2;
    const Racenum2 = require.body.Racenum2;
    const TrackName2 =require.body.TrackName2;
    const DriverName2 =require.body.DriverName2;
    const TeamName2 = require.body.TeamName2;
    const Laps2 = require.body.Laps2;
    const Points2 =require.body.Points2;

    const Time2 = require.body.Time2;
    const Diff2 = require.body.Diff2;
    const Q12 =require.body.Q12;
    const Q22 =require.body.Q22;
    const Q32 = require.body.Q32;
    const Lap2 = require.body.Lap2;
    const DriverNum2 =require.body.DriverNum2;
    const Country2 = require.body.Country2;
    const TeamBase2 =require.body.TeamBase2;
    const TeamNum2 = require.body.TeamNum2;
    
    var sqlUpdate = "UPDATE "+Database+" SET ";

    lis = []
    if (Year2 != '') {
        lis.push(Year2);
        sqlUpdate = sqlUpdate + "Year = ?, ";
    }
    if (Racenum2 != '') {
        lis.push(Racenum2);
        sqlUpdate = sqlUpdate + "RaceNum = ?, ";
    }
    if (TrackName2 != '') {
        lis.push(TrackName2);
        sqlUpdate = sqlUpdate + "TrackName = ?, ";
    }
    if (DriverName2 != '') {
        lis.push(DriverName2);
        sqlUpdate = sqlUpdate + "DriverName = ?, ";
    } if (TeamName2 != '') {
        lis.push(TeamName2);
        sqlUpdate = sqlUpdate + "TeamName = ?, ";
    } if (Laps2 != '') {
        lis.push(Laps2);
        sqlUpdate = sqlUpdate + "Laps = ?, ";
    } if (Points2 != '') {
        lis.push(Points2);
        sqlUpdate = sqlUpdate + "Points = ?, ";
    } if (Time2 != '') {
        lis.push(Time2);
        sqlUpdate = sqlUpdate + "Time = ?, ";
    } if (Diff2 != '') {
        lis.push(Diff2);
        sqlUpdate = sqlUpdate + "Diff = ?, ";
    } if (Q12 != '') {
        lis.push(Q12);
        sqlUpdate = sqlUpdate + "Q1 = ?, ";
    } if (Q12 != '') {
        lis.push(Q22);
        sqlUpdate = sqlUpdate + "Q2 = ?, ";
    } if (Q32 != '') {
        lis.push(Q32);
        sqlUpdate = sqlUpdate + "Q3 = ?, ";
    } if (Lap2 != '') {
        lis.push(Lap2);
        sqlUpdate = sqlUpdate + "Lap = ?, ";
    } if (DriverNum2 != '') {
        lis.push(DriverNum2);
        sqlUpdate = sqlUpdate + "DriverNum = ?, ";
    } if (Country2 != '') {
        lis.push(Country2);
        sqlUpdate = sqlUpdate + "Country = ?, ";
    } if (TeamBase2 != '') {
        lis.push(TeamBase2);
        sqlUpdate = sqlUpdate + "TeamBase = ?, ";
    } if (TeamNum2 != '') {
        lis.push(TeamNum2);
        sqlUpdate = sqlUpdate + "TeamNum = ?, ";
    }

    sqlUpdate = sqlUpdate.slice(0, sqlUpdate.length - 2) +" WHERE ";




    if(Year!=''){
        lis.push(Year);
        sqlUpdate = sqlUpdate + "Year = ? AND";
    }
    if(Racenum!=''){
        lis.push(Racenum);
        sqlUpdate = sqlUpdate + "RaceNum = ? AND";
    }
    if(TrackName!=''){
        lis.push(TrackName);
        sqlUpdate = sqlUpdate + "TrackName = ? AND";
    }            if(DriverName!='' && Database == 'races'){
        lis.push(DriverName);
        sqlUpdate = sqlUpdate + "FullName = ? AND";
    }    else if(DriverName!=''){
        lis.push(DriverName);
        sqlUpdate = sqlUpdate + "DriverName = ? AND";
    }   if(TeamName!=''){
        lis.push(TeamName);
        sqlUpdate = sqlUpdate + "TeamName = ? AND";
    }            if(Laps!=''){
        lis.push(Laps);
        sqlUpdate = sqlUpdate + "Laps = ? AND";
    }            if(Points!=''){
        lis.push(Points);
        sqlUpdate = sqlUpdate + "Points = ? AND";
    }            if(Time!=''){
        lis.push(Time);
        sqlUpdate = sqlUpdate + "Time = ? AND";
    }            if(Diff!=''){
        lis.push(Diff);
        sqlUpdate = sqlUpdate + "Diff = ? AND";
    }           if(Q1!=''){
        lis.push(Q1);
        sqlUpdate = sqlUpdate + "Q1 = ? AND";
    }   if(Q1!=''){
        lis.push(Q2);
        sqlUpdate = sqlUpdate + "Q2 = ? AND";
    }          if(Q3!=''){
        lis.push(Q3);
        sqlUpdate = sqlUpdate + "Q = ? AND";
    }            if(Lap!=''){
        lis.push(Lap);
        sqlUpdate = sqlUpdate + "Lap = ? AND";
    }          if(DriverNum!=''){
        lis.push(DriverNum);
        sqlUpdate = sqlUpdate + "DriverNum = ? AND";
    }          if(Country!=''){
        lis.push(Country);
        sqlUpdate = sqlUpdate + "Country = ? AND";
    }       if(TeamBase!=''){
        lis.push(TeamBase);
        sqlUpdate = sqlUpdate + "TeamBase = ? AND";
    }       if(TeamNum!=''){
        lis.push(TeamNum);
        sqlUpdate = sqlUpdate + "TeamNum = ? AND";
    }

    sqlUpdate = sqlUpdate.slice(0,sqlUpdate.length-4);
    console.log(sqlUpdate);
    for (var i = 0; i < lis.length; i++) {
        console.log(lis[i]);
    }
    db.query(sqlUpdate, lis, (err, result) => {
        console.log(err);
        console.log(result);
    })
});


