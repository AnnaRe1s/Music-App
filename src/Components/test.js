import { useState, useEffect } from "react";
const DZ = window.DZ;

export default function Music() {
  
  const [data, setData] = useState([]);

  useEffect(() => {
    DZ.api("/user/4773009162", function (response) {
      console.log("Name of user id 4773009162: ", response.name);
      console.log(response);
      console.log(response.tracklist);
      setData([...response]);
      DZ.api("user/4773009162/albums", function (resp) {
        console.log("=============================");
        console.log(resp);
        console.log("=============================");
      });
    });


  }, []);

  console.log(data);

  return (
    <>
      <h1>to aqui!</h1>
    </>
  );
}
