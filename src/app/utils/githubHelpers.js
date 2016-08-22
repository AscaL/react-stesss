import axios from 'axios';

function getUserInfo(username) {
  return axios.get('http://api.github.com/users/' + username);
}

export const helpers = {
  getPlayersInfo(players) {
    return axios.all(players.map((username) => getUserInfo(username)))
      .then((info) => info.map((user) => user.data))
      .catch((err) => console.log('err in getPlayersInfo: ', err))
  }
}


//module.exports = helpers;
//export { helpers };
