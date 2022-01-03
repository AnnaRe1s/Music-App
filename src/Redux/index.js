import { createStore } from "redux";
const DZ = window.DZ;



const data = DZ.api("/chart/0/albums", function (response) {

  // const tracks = response.data.map((track) => {
  //   const durationMin = Math.floor(track.duration / 60);

  //   const durationSec = Math.floor(track.duration % 60);

  //   track.duration = `${durationMin}:${durationSec}`;

  //   track["audio"] = new Audio(track.preview);

  //   return track;
  // });

  return response
});

const INITIAL_STATE = data;

console.log("/////////////",INITIAL_STATE)

function reducer(state = INITIAL_STATE, action) {}

const store = createStore(reducer);

export default store;
