import React, { useState, useEffect } from "react";
import Axios from 'axios';
import Dropdown from 'react-dropdown';


function App() {
  const [to_show, setto_show] = useState([]);
  const [final_to_show, setfinal_to_show] = useState([]);
  var data = [];

  //races
  const [Year, setYear] = useState('');
  const [Racenum, setRacenum] = useState('');
  const [TrackNum, setTrackNum] = useState('');
  const [TrackName, setTrackName] = useState('');
  const [DriverName, setDriverName] = useState('');
  const [TeamNum, setTeamNum] = useState('');
  const [TeamBase, setTeamBase] = useState('');
  const [TeamName, setTeamName] = useState('');
  const [Laps, setLaps] = useState('');
  const [Points, setPoints] = useState('');
  const [Time, setTime] = useState('');
  const [Diff, setDiff] = useState('');
  const [Q1, setQ1] = useState('');
  const [Q2, setQ2] = useState('');
  const [Q3, setQ3] = useState('');
  const [Lap, setLap] = useState('');
  const [DriverNum, setDriverNum] = useState('');
  const [Country, setCountry] = useState('');


  const [Year2, setYear2] = useState('');
  const [Racenum2, setRacenum2] = useState('');
  const [TrackNum2, setTrackNum2] = useState('');
  const [TrackName2, setTrackName2] = useState('');
  const [DriverName2, setDriverName2] = useState('');
  const [TeamNum2, setTeamNum2] = useState('');
  const [TeamBase2, setTeamBase2] = useState('');
  const [TeamName2, setTeamName2] = useState('');
  const [Laps2, setLaps2] = useState('');
  const [Points2, setPoints2] = useState('');
  const [Time2, setTime2] = useState('');
  const [Diff2, setDiff2] = useState('');
  const [Q12, setQ12] = useState('');
  const [Q22, setQ22] = useState('');
  const [Q32, setQ32] = useState('');
  const [Lap2, setLap2] = useState('');
  const [DriverNum2, setDriverNum2] = useState('');
  const [Country2, setCountry2] = useState('');

  const clean_up = () => {
    setYear('');
    setRacenum('');
    setTrackNum('');
    setTrackName('');
    setDriverName('');
    setTeamNum('');
    setTeamBase('');
    setTeamName('');
    setLaps('');
    setPoints('');
    setTime('');
    setDiff('');
    setQ1('');
    setQ2('');
    setQ3('');
    setLap('');
    setDriverNum('');
    setCountry('');
    setYear2('');
    setRacenum2('');
    setTrackNum2('');
    setTrackName2('');
    setDriverName2('');
    setTeamNum2('');
    setTeamBase2('');
    setTeamName2('');
    setLaps2('');
    setPoints2('');
    setTime2('');
    setDiff2('');
    setQ12('');
    setQ22('');
    setQ32('');
    setLap2('');
    setDriverNum2('');
    setCountry2('');
  }
  const advanced_query1 = () => {
    Axios.get('http://localhost:3001/api/get').then((response) => {
      console.log("hello??");
      var lis = [];
      data=[];
      for (let [key, value] of Object.entries(response.data[0])) {
        lis.push(key);
      }
      data.push(lis);

      //console.log(to_show);
      for (var i = 0; i < response.data.length; i++) {
        lis = [];
        //        console.log(response.data[i]);
        for (let [key, value] of Object.entries(response.data[i])) {
          lis.push(value);
        }
        data.push(lis);
      }
      setfinal_to_show(data);
    })

 }
 const advanced_query2 = () => {
  Axios.get('http://localhost:3001/api/get2').then((response) => {
    console.log("hello??");
    var lis = [];
    data=[];
    for (let [key, value] of Object.entries(response.data[0])) {
      lis.push(key);
    }
    data.push(lis);

    //console.log(to_show);
    for (var i = 0; i < response.data.length; i++) {
      lis = [];
      //        console.log(response.data[i]);
      for (let [key, value] of Object.entries(response.data[i])) {
        lis.push(value);
      }
      data.push(lis);
    }
    setfinal_to_show(data);
  })

}

  const donee = () => {
    if (actions == 'insert') {
      submitReview();
    }
    if (actions == 'delete') {
      deleteReview();
    }
    if (actions == 'update') {
      updateReview();
    }
    if (actions == 'select') {
      selectReview();
    }
    clean_up();
  }

  const submitReview = () => {
    Axios.post('http://localhost:3001/api/insert', {
      Database: defaultOption,
      Year: Year,
      Racenum: Racenum,
      TrackName: TrackName,
      TrackNum: TrackNum,
      DriverName: DriverName,
      TeamName: TeamName,
      Laps: Laps,
      Points: Points,
      Time: Time,
      Diff: Diff,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Lap: Lap,
      DriverNum: DriverNum,
      Country: Country,
      TeamBase: TeamBase,
      TeamNum: TeamNum
    });
  };
  const selectReview = () => {
    Axios.post('http://localhost:3001/api/select', {
      Database: defaultOption,
      Year: Year,
      Racenum: Racenum,
      TrackName: TrackName,
      TrackNum: TrackNum,
      DriverName: DriverName,
      TeamName: TeamName,
      Laps: Laps,
      Points: Points,
      Time: Time,
      Diff: Diff,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Lap: Lap,
      DriverNum: DriverNum,
      Country: Country,
      TeamBase: TeamBase,
      TeamNum: TeamNum
    }).then((response) => {
      console.log("hi");
      //setto_show(response.data);
      var lis = [];
      for (let [key, value] of Object.entries(response.data[0])) {
        lis.push(key);
      }
      data.push(lis);

      //console.log(to_show);
      for (var i = 0; i < response.data.length; i++) {
        lis = [];
        //        console.log(response.data[i]);
        for (let [key, value] of Object.entries(response.data[i])) {
          lis.push(value);
        }
        data.push(lis);
      }
      setfinal_to_show(data);
    });


  };

  useEffect(() => {
    setfinal_to_show(data);
    
  }, [])


  const deleteReview = () => {
    Axios.post('http://localhost:3001/api/delete', {
      Database: defaultOption,
      Year: Year,
      Racenum: Racenum,
      TrackName: TrackName,
      TrackNum: TrackNum,
      DriverName: DriverName,
      TeamName: TeamName,
      Laps: Laps,
      Points: Points,
      Time: Time,
      Diff: Diff,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Lap: Lap,
      DriverNum: DriverNum,
      Country: Country,
      TeamBase: TeamBase,
      TeamNum: TeamNum
    });
  };

  const updateReview = () => {
    Axios.post('http://localhost:3001/api/update', {
      Database: defaultOption,
      Year: Year,
      Racenum: Racenum,
      TrackName: TrackName,
      TrackNum: TrackNum,
      DriverName: DriverName,
      TeamName: TeamName,
      Laps: Laps,
      Points: Points,
      Time: Time,
      Diff: Diff,
      Q1: Q1,
      Q2: Q2,
      Q3: Q3,
      Lap: Lap,
      DriverNum: DriverNum,
      Country: Country,
      TeamBase: TeamBase,
      TeamNum: TeamNum,
      Year2: Year2,
      Racenum2: Racenum2,
      TrackName2: TrackName2,
      TrackNum2: TrackNum2,
      DriverName2: DriverName2,
      TeamName2: TeamName2,
      Laps2: Laps2,
      Points2: Points2,
      Time2: Time2,
      Diff2: Diff2,
      Q12: Q12,
      Q22: Q22,
      Q32: Q32,
      Lap2: Lap2,
      DriverNum2: DriverNum2,
      Country2: Country2,
      TeamBase2: TeamBase2,
      TeamNum2: TeamNum2
    });
  };
  const options = [
    'races', 'outputPracticeTwo', 'outputPracticeThree', 'outputOne', 'outputQualifying', 'outputFastestLaps', 'tracks', 'drivers', 'constructors'
  ];
  const options_to_do = [
    'select', 'insert', 'delete', 'update'
  ];
  const data2 = [
    ["0.122584", "0.785882", "0.954039", "0.353008"],
    ["1", "2", "0.954039", "0.353008"],
  ];

  const [defaultOption, setdefaultOption] = useState(options[0]);
  const [actions, setactions] = useState(options_to_do[0]);
  return (
    <div className="App">
      <h1> CRUD APPLICATIONS</h1>
      <Dropdown options={options} onChange={(e) => {
        setdefaultOption(e.value)
      }} value={defaultOption} placeholder="Select an option" />

      <Dropdown options={options_to_do} onChange={(e) => {
        setactions(e.value)
      }} value={actions} placeholder="Select an Action" />

      <div className="form">
        {defaultOption == 'races' &&
          <div className="races">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName(e.target.value)
            }} />
            <label> Laps:</label>
            <input type="text" name="laps" onChange={(e) => {
              setLaps(e.target.value)
            }} />
            <label> Points:</label>
            <input type="text" name="points" onChange={(e) => {
              setPoints(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'drivers' &&
          <div className="drivers">
            <label> DriverNum:</label>

            <input type="text" name="drivernum" onChange={(e) => {
              setDriverNum(e.target.value)
            }} />
            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName(e.target.value)
            }} />
            <label> Country:</label>
            <input type="text" name="country" onChange={(e) => {
              setCountry(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'constructors' &&
          <div className="constructors">
            <label> TeamNum:</label>
            <input type="text" name="teamnum" onChange={(e) => {
              setTeamNum(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName(e.target.value)
            }} />
            <label> TeamBase:</label>
            <input type="text" name="teambase" onChange={(e) => {
              setTeamBase(e.target.value)
            }} />

          </div>
        }

        {defaultOption == 'tracks' &&
          <div className="tracks">
            <label> TrackNum:</label>
            <input type="text" name="tracknum" onChange={(e) => {
              setTrackNum(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName(e.target.value)
            }} />
          </div>
        }
        {((defaultOption == 'outputOne') || (defaultOption == 'outputPracticeTwo') || (defaultOption == 'outputPracticeThree')) &&
          <div className="practices">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName(e.target.value)
            }} />
            <label> Time:</label>
            <input type="text" name="time" onChange={(e) => {
              setTime(e.target.value)
            }} />
            <label> Diff:</label>
            <input type="text" name="diff" onChange={(e) => {
              setDiff(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'outputQualifying' &&
          <div className="qualifying">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName(e.target.value)
            }} />
            <label> Q1:</label>
            <input type="text" name="Q1" onChange={(e) => {
              setQ1(e.target.value)
            }} />
            <label> Q2:</label>
            <input type="text" name="Q2" onChange={(e) => {
              setQ2(e.target.value)
            }} />
            <label> Q3:</label>
            <input type="text" name="Q3" onChange={(e) => {
              setQ3(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'outputFastestLaps' &&
          <div className="fastest">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName(e.target.value)
            }} />
            <label> Lap:</label>
            <input type="text" name="Lap" onChange={(e) => {
              setLap(e.target.value)
            }} />
            <label> Time:</label>
            <input type="text" name="time" onChange={(e) => {
              setTime(e.target.value)
            }} />

          </div>
        }
      </div>

      <div className="form2">

        {defaultOption == 'races' && actions == 'update' &&
          <div className="races">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear2(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum2(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName2(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName2(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName2(e.target.value)
            }} />
            <label> Laps:</label>
            <input type="text" name="laps" onChange={(e) => {
              setLaps2(e.target.value)
            }} />
            <label> Points:</label>
            <input type="text" name="points" onChange={(e) => {
              setPoints2(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'drivers' && actions == 'update' &&
          <div className="drivers">
            <label> DriverNum:</label>

            <input type="text" name="drivernum" onChange={(e) => {
              setDriverNum2(e.target.value)
            }} />
            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName2(e.target.value)
            }} />
            <label> Country:</label>
            <input type="text" name="country" onChange={(e) => {
              setCountry2(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'constructors' && actions == 'update' &&
          <div className="constructors">
            <label> TeamNum:</label>
            <input type="text" name="teamnum" onChange={(e) => {
              setTeamNum2(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName2(e.target.value)
            }} />
            <label> TeamBase:</label>
            <input type="text" name="teambase" onChange={(e) => {
              setTeamBase2(e.target.value)
            }} />

          </div>
        }

        {defaultOption == 'tracks' && actions == 'update' &&
          <div className="tracks">
            <label> TrackNum:</label>
            <input type="text" name="tracknum" onChange={(e) => {
              setTrackNum2(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName2(e.target.value)
            }} />
          </div>
        }
        {actions == 'update' && ((defaultOption == 'outputOne') || (defaultOption == 'outputPracticeTwo') || (defaultOption == 'outputPracticeThree')) &&
          <div className="practices">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear2(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum2(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName2(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName2(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName2(e.target.value)
            }} />
            <label> Time:</label>
            <input type="text" name="time" onChange={(e) => {
              setTime2(e.target.value)
            }} />
            <label> Diff:</label>
            <input type="text" name="diff" onChange={(e) => {
              setDiff2(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'outputQualifying' && actions == 'update' &&
          <div className="qualifying">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear2(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum2(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName2(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName2(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName2(e.target.value)
            }} />
            <label> Q1:</label>
            <input type="text" name="Q1" onChange={(e) => {
              setQ12(e.target.value)
            }} />
            <label> Q2:</label>
            <input type="text" name="Q2" onChange={(e) => {
              setQ22(e.target.value)
            }} />
            <label> Q3:</label>
            <input type="text" name="Q3" onChange={(e) => {
              setQ32(e.target.value)
            }} />
          </div>
        }
        {defaultOption == 'outputFastestLaps' && actions == 'update' &&
          <div className="fastest">

            <label> Year:</label>
            <input type="text" name="year" onChange={(e) => {
              setYear2(e.target.value)
            }} />
            <label> RaceNum:</label>
            <input type="text" name="racenum" onChange={(e) => {
              setRacenum2(e.target.value)
            }} />
            <label> TrackName:</label>
            <input type="text" name="trackname" onChange={(e) => {
              setTrackName2(e.target.value)
            }} />

            <label> DriverName:</label>
            <input type="text" name="drivername" onChange={(e) => {
              setDriverName2(e.target.value)
            }} />
            <label> TeamName:</label>
            <input type="text" name="teamname" onChange={(e) => {
              setTeamName2(e.target.value)
            }} />
            <label> Lap:</label>
            <input type="text" name="Lap" onChange={(e) => {
              setLap2(e.target.value)
            }} />
            <label> Time:</label>
            <input type="text" name="time" onChange={(e) => {
              setTime2(e.target.value)
            }} />

          </div>
        }
      </div>



      <button onClick={donee}> Submit</button>

      <button onClick={clean_up}> Clean Up</button>
      <button onClick={advanced_query1}> Advanced Query1</button>
      <button onClick={advanced_query2}> Advanced Query2</button>

      <table>
        <tbody>
          {
            final_to_show.map((numList, i) => (
              <tr key={i}>
                {
                  numList.map((num, j) =>
                    <td key={j}>{num}</td>
                  )
                }
              </tr>
            ))
          }
        </tbody>
      </table>
    </div>
  );
}

export default App;
