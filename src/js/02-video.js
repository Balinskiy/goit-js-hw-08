import Player from '@vimeo/player';
import throttle from 'lodash.throttle';

const CURRENT_TIME_KEY = 'videoplayer-current-time';
const iframe = document.querySelector('iframe');
const player = new Player(iframe);


const setLocalStorageThrottled = throttle(function (currentTime) {
    localStorage.setItem(CURRENT_TIME_KEY, currentTime);
}, 1000); 

player.on('timeupdate', function (data) {
    const currentTime = data.seconds;
    console.log('Current time:', currentTime);
    setLocalStorageThrottled(currentTime);
});

const savedTime = localStorage.getItem(CURRENT_TIME_KEY);

if (savedTime !== null) {
    player.setCurrentTime(parseFloat(savedTime));
}
