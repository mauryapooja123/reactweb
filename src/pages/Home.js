import React, { useEffect } from "react";
//import axios from "axios";

function Home() {
  const [userData, setUserData] = useEffect();
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
      </table>
    </div>
  );
}
export default Home;
