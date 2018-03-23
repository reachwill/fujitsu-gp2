//declare a namespace (DigitalClock) for our functions to avoid possible name conflicts in a larger development. The functions once owned by an object are now called methods of that object.
var DigitalClock = {

    formatNum: function(num){
        if(num < 10){
            num = '0' + num;
        }
        return num;
    },
    updateTime: function(){
        var now = new Date();
        var hours = DigitalClock.formatNum(now.getHours());
        var mins = DigitalClock.formatNum(now.getMinutes());
        var secs = DigitalClock.formatNum(now.getSeconds());

        document.getElementById('clock').innerHTML = hours + ':' + mins + ':' + secs;
    }

}

DigitalClock.updateTime();

setInterval(DigitalClock.updateTime,1000);


