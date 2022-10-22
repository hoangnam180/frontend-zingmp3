// eslint-disable-next-line no-extend-native
String.prototype.toHHMMSS = function () {
    let sec_num = parseInt(this, 10); // don't forget the second param
    let hours   = Math.floor(sec_num / 3600);
    let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    let seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (hours   < 10) {hours   = "0"+hours;}
    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours >=1 ? hours  +':' : '' + minutes+':'+seconds;
}

export const formatTime = (timeSeconds) =>{
        if(`${timeSeconds}`.toHHMMSS() !== "NaN:NaN" && `${timeSeconds}`.toHHMMSS() !== "undefined"){
            return `${timeSeconds}`.toHHMMSS() ? `${timeSeconds}`.toHHMMSS() : "00:00"
        }
}