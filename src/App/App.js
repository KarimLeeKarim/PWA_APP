import React, { useEffect, useState } from "react";
import { fetchUser, fetchUserList } from "../api/fetchWeather";

const App = () => {
  const [listUser, setListUser] = useState([]);
  useEffect(() => {
    fetchUserList(setListUser)
  }, []);

  const userHandler = (e) => {
    const number = Number(e.target.value);
    if (e.key === 'Enter') {
      fetchUser(setListUser, number);
    }
  };

  return (
    <div className="App">
      <input type="text" placeholder="Number & press Enter" onKeyDown={userHandler} />
      <div style={{ display: 'flex' }}>
        {listUser && listUser?.map((el => (
          <div key={el.id} >
            <h4>
              <span>{el.first_name}</span> <span>{el.last_name}</span>
            </h4>
            <img src={el.avatar} alt={el.first_name} />
          </div>
        )
        ))}
      </div>
    </div>
  );
}

export default App;
