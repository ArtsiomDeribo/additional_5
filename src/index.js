module.exports = function check(str, bracketsConfig) {
  var counter = 0;
  for (var i = 1; i <= str.length; i++){
    for (var a = 0; a < bracketsConfig.length(a); a++){
      for (var b = 0; b < bracketsConfig.length(b); b++){
        if (str.charAt(i) == bracketsConfig[a][0]{
            counter++;
            } else {
            counter--;
        }
      }
    }
  }
  if (counter == 0){
    return true;
        } else {
          return false;
        }
      
           
}
