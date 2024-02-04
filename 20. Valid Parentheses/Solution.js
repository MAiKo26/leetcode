/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    
    if (s.length%2 !=0)
        return false;

    if (s[0] != "(" && s[0] != "[" && s[0] != "{")
        return false;
    
    s = s.split("");

    let changed = true;
    
    while(s.length>0){
        changed = false;
        for (let i = 0;i<s.length;i++){
            if ((s[i] == "(") && (s[i+1] == ")")) {s.splice(i,2); changed=true;}
            if ((s[i] == "{") && (s[i+1] == "}")) {s.splice(i,2); changed=true;}
            if ((s[i] == "[") && (s[i+1] == "]")) {s.splice(i,2); changed=true;}
        }
        if (!changed){
            return false;
        } 
    }
    
    
    return true;
  
//     let parn = 0;
//     let brack = 0;
//     let curly = 0;
    
//     for (let i = 0;i<s.length;i++)
//     {
//         console.log(3);
//         if (s[i] == "(")
//             {
//                 console.log(4);
//                 parn++;
//                 let counter = 1;
//                 let state = false;
//                 while (i+counter<s.length){
//                     if (s[i+counter]!=")"){
//                         counter+= 2;
//                         state = true;
//                     }else{
//                         state = false;
//                         break;
//                     }
                    
//                 }
//                 if (state){
//                     return false;
//                 }
//             }
//         if (s[i] == "{")
//             {
//                 console.log(4);
//                 curly++;
//                 let counter = 1;
//                 let state = false;
//                 while (i+counter<s.length){
//                     if (s[i+counter]!="}"){
//                         counter+= 2;
//                         state = true;
//                     }else{
//                         state = false;
//                         break;

//                     }
                    
//                 }
//                 if (state){
//                     return false;
//                 }
//             }
//         if (s[i] == "[")
//             {
//                 console.log(5);
//                 brack++;
//                 let counter = 1;
//                 let state = false;
//                 while (i+counter<s.length){
//                     if (s[i+counter]!="]"){
//                         counter+= 2;
//                         state = true;
//                     }else{
//                         state = false;
//                         break;

//                     }
                    
//                 }
//                 if (state){
//                     return false;
//                 }
//             }
        
//         console.log("before ",brack,curly,parn);

//         if (s[i]=="]") brack--;
//         if (s[i]=="}") curly--;
//         if (s[i]==")") parn--;
//         console.log("after ",brack,curly,parn);
        
        
//         if (brack < 0 || curly < 0 || parn < 0){
//             console.log(6);
//             return false;
//         }
        
//     }
    
//       let queue = [];
//     let reverseQueue = [];
    
//     for (let i =0; i < s.length;i++){
//          if (s[i] == "(")
//              queue.push("(");
//         if (s[i] == "[")
//              queue.push("[");
//         if (s[i] == "{")
//              queue.push("{");
//          if (s[i] == ")")
//              reverseQueue.unshift(")");
//         if (s[i] == "]")
//              reverseQueue.unshift("]");
//         if (s[i] == "}")
//              reverseQueue.unshift("}");       
//     }

    
//     for (let i =0 ; i < s.length/2 ; i++){
        
//         console.log(queue);
//         console.log(reverseQueue);
        
//         let holder = queue.pop() ;
//         let holder2 = reverseQueue.pop();
        
//         console.log(i);
        
//         console.log("holding the poped : " , holder);
//         console.log("holding the poped2 : " , holder2);
        
//         if (holder == "(" && (holder2 != ")")) return false;
//         if (holder == "{" && (holder2 != "}")) return false;
//         if (holder == "[" && (holder2 != "]")) return false;


            
//     }    
    
//     return true ;
        
};
