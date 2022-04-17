// https://developer.spotify.com/documentation/web-playback-sdk/quick-start/#
export const authEndpoint = "https://accounts.spotify.com/authorize";

const redirectUri = "https://joohila-spotify-clone.web.app/";

const clientId="5b81d39e11ec45e28f6c459358f4edf4";

const scopes = [
    "user-read-currently-playing",
    "user-read-recently-played",
    "user-read-playback-state",
    "user-top-read",
    "user-modify-playback-state",
];

export const getTokenFromUrl = ()=>{
    return window.location.hash.substring(1).split('&').reduce((initial,item)=>{
        //#accessToken=mysupersecretkey&name=
        let parts=item.split('=');
        initial[parts[0]]=decodeURIComponent(parts[1])
        return initial;
    },{});
}

export const logout = () => {
const url = 'https://accounts.spotify.com/en/logout'                                                                                                                                                                                                                                                                               
const spotifyLogoutWindow = window.open(url, 'Spotify Logout', 'width=700,height=500,top=40,left=40')                                                                                                
setTimeout(() => spotifyLogoutWindow.close(), 2000)
}

export const loginUrl = `${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&scope=${scopes.join(
    "%20"
  )}&response_type=token&show_dialog=true`;
