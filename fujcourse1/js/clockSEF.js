(function(){
    
    var div = document.createElement('div');
    document.body.prepend(div);
    div.style['background-color'] = 'black';
    div.style.color = 'green';
    div.style.width = '100%';
    div.style.textAlign = 'center';
    div.style.fontSize = '3em';
    
    
    
    formatNum= function(num){
        if(num < 10){
            num = '0' + num;
        }
        return num;
    }
    updateTime= function(){
        var now = new Date();
        var hours = formatNum(now.getHours());
        var mins = formatNum(now.getMinutes());
        var secs = formatNum(now.getSeconds());

        div.innerHTML = hours + ':' + mins + ':' + secs;
    }
 
    setInterval(updateTime,1000);
    
})()