/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function(a, b) {

    a = a.split("");
    b = b.split("");
    al = a.length -1;
    bl = b.length -1;
    let holding = false;
    let c = [];
    
    console.log("al is ",al);
    console.log("bl is", bl);
    console.log(c);
    
    while(al>-1 && bl>-1){
        if (holding){
            console.log("HOLDING");
            if (a[al] == 1 && b[bl] == 1){
                c.unshift("1");
            }else if ((a[al] == 1 && b[bl] == 0) || (a[al] == 0 && b[bl]==1)){
                c.unshift("0");
            }else{
                console.log("GIVING THE HOLDINg");
                c.unshift("1");
                holding = false;
            }
        }else if ((a[al] == 1) && (b[bl] == 1)){
            console.log("1")
            c.unshift("0");
            holding = true;
        }else{
            if (a[al] == 1 || b[bl] == 1){
                console.log(2);
                c.unshift("1");
            }else{
                console.log(3)
                c.unshift("0");
            }
        }
        console.log("al is ",al);
        console.log("bl is", bl);
        console.log(c);
        bl--;
        al--;
    }
    console.log("OUT");
    console.log("al is ",al);
    console.log("bl is", bl);
    console.log(c);

    if (al>-1){
        while (al>-1){
            if (holding){
            console.log("HOLDING");
            if (a[al] == 1){
                c.unshift("0");
                
            }else{
                console.log("GIVING THE HOLDINg");
                c.unshift("1");
                holding = false;
            }
        }else{
            c.unshift(a[al]);
            }
            al--;
        }
    }
    
    if (bl>-1){
        while (bl>-1){
            if (holding){
            console.log("HOLDING");
            if (b[bl] == 1){
                c.unshift("0");
            }else{
                console.log("GIVING THE HOLDINg");
                c.unshift("1");
                holding = false;
            }
        }else{
            c.unshift(b[bl]);
        }
            bl--;
        }
    }
    
    if (holding){
        c.unshift("1");
    }
    

    return c.join("");
    
    
};
