const buildPyramid= (n) => {
    
    for (var i = 1; i <= n; i++) {
      var s = "";
      for (var j = 1; j <= (2 * n - 1); j++) { ////For every each counter     there exist 2*n-1 value
         (j >= n + 1 - i && j <= n - 1 + i) ? s += "*" : s += " "; //Check   the work book image
       }
      console.log(s);
      console.log("Testing branch in thirsty ");
     }
 
};
console.log("fries here")
 module.exports=buildPyramid(6);