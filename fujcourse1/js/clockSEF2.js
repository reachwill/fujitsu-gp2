//A Javascript self executing anonymous function - the brackets () at the end will actually invoke the function 

(function(){
    
    var div = document.createElement('div');
    document.body.prepend(div);
    div.style.background = 'black';
    div.style.color = 'green';
    div.style.width = '100%';
    div.style.fontSize = '3em';
    div.style.fontFamily = 'courier';
    div.style.textAlign = 'center';
    
    formatNum = function(num){
        if(num < 10){
            num = '0' + num;
        }
        return num;
    }
    updateTime = function(){
        var now = new Date();
        var hours = formatNum(now.getHours());
        var mins = formatNum(now.getMinutes());
        var secs = formatNum(now.getSeconds());

        div.innerHTML = hours + ':' + mins + ':' + secs;
    }
    
    updateTime();
    setInterval(updateTime,1000);
    
    
})()