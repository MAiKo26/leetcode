/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    
    var total = 0;
    for (var i = 0 ; i < s.length ; i++){
console.log(total+" " + s[i]) ;
        
        if (s[i] == "I")
            if (s[i+1] == "V" || s[i+1] == "X")
                total-- ;
         else
             total++;
        
           if (s[i] == "C")
            if (s[i+1] == "D" || s[i+1] == "M")
                total=total-100; 
         else
             total=total+100;
        
        
           if (s[i] == "X")
            if (s[i+1] == "L" || s[i+1] == "C")
                total=total-10;
         else
             total=total+10;
                     
        

           if (s[i] == "V")
                total=total+5;
        
            if (s[i] == "L")
                total=total+50;
        
            if (s[i] == "M")
            total=total+1000;
        
            if (s[i] == "D")
                total=total+500;
        
    }
  return total ;
};
