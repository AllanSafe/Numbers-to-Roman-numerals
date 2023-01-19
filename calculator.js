function convertToRoman(num) {
    let strExit = "";
    let strs = new Map();
     strs.set(1,"I");
     strs.set(4,"IV");
     strs.set(5,"V");
     strs.set(9,"IX");
     strs.set(10,"X");
     strs.set(40,"XL");
     strs.set(50,"L");
     strs.set(90,"XC");
     strs.set(100,"C");
     strs.set(400,"CD");
     strs.set(500,"D");
     strs.set(900,"CM");
     strs.set(1000,"M");
   
     function addStr(str,numStr) {
       while(numStr > 0) {
         strExit += strs.get(str);
         numStr--;
       }
     }
   
     function breakNum(numDig, next) {
       if(strs.get(numDig) == "X"){
         addStr(1,1)
         addStr(next,1)
       } else if (strs.get(numDig) == "C") {
         addStr(100,1)
         addStr(next,1)
       } else if (strs.get(numDig) == "M") {
         addStr(1000,1)
         addStr(next,1)
       }
     }
   
     function start(x) {
       strExit += strs.get(x)
     }
   
     function to10(x) {
       if(parseInt(x/10) <=3){
         addStr(10,parseInt(x/10))
       } else {
         breakNum(10,50)
       }
       return x%10
     }
   
     function to50(x) {
       if(parseInt(x/50) <=3){
         addStr(50,parseInt(x/50))
       } else {
         breakNum(50,100)
       }
       return x%50
     }
   
     function to100(x) {
       if(parseInt(x/100) <=3){
         addStr(100,parseInt(x/100))
       } else {
         breakNum(100,500)
       }
       return x%100
     }
   
     function to500(x) {
       if(parseInt(x/500) <=3){
         addStr(500,parseInt(x/500))
       }
       return x%500
     }
   
     function to1000(x) {
       if(parseInt(x/1000) <=3){
         addStr(1000,parseInt(x/1000))
       } else {
         breakNum(1000,5000)
       }
       return x%1000
     }
   
     while (num > 0) {
       if(num >=1 && num <=10){
         num = start(num);
       }
       if(num >=10 && num <=50){
         num = to10(num);
       }
       if(num >=50 && num <=50){
         num = to50(num)
       }
       if(num >=100 && num <=100){
         num = to100(num)
       }
       if(num >=500 && num <=500){
         num = to500(num)
       }
       if(num >=1000 && num <=1000){
         num = to1000(num)
       }
     }
     return strExit
   }