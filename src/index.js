module.exports = function check(str, bracketsConfig) {
var steck = []; 
var counter = 0;



for (var a = 0; a < str.length; a++){
    for (var i = 0; i < bracketsConfig.length; i++){
        
         
        if (bracketsConfig[i][0] == bracketsConfig[i][1]){
                if (bracketsConfig[i][0] == str.charAt(a) && steck[steck.length-1] != bracketsConfig[i][0]){
                    steck.push(str.charAt(a));
                    counter++;
                    break;
                } else if (bracketsConfig[i][0] == str.charAt(a) && steck[steck.length-1] == bracketsConfig[i][0]){
                    steck.pop;
                    counter--;
                    break;
                }         
            } else 
                if (str.charAt(a) == bracketsConfig[i][0]){
                    steck.push(str.charAt(a));
                    counter++
                    break;
                } else if (str.charAt(a) == bracketsConfig[i][1] && steck[steck.length-1] == bracketsConfig[i][0]) {
                    if (counter == 0){
                        return false;
                    }
                    steck.pop;
                    counter--;
                    break;

            }
        
    }
}          
    if (counter == 0){
        return true;
    } else {
        return false;
    }
    
}

