function mutation(arr){
  arr[0] = arr[0].toLowerCase();
  arr[1] = arr[1].toLowerCase();
  
  var acc=0; 
  for(var i=0;i<arr[1].length;i++){
    for(var j=0;j<arr[0].length;j++){
      if(arr[1].charAt(i) == arr[0].charAt(j)){
        acc++;
        break;
      }
    }
  }
  if(acc == arr[1].length)
    return true;
  else
    return false;
}

mutation(["floOr", "foR"]); //true
mutation(["Mary", "Aarmy"]); //true
mutation(["hello", "hey"]); //false
mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]); //true
mutation(["Mary", "Army"]); //true
mutation(["Alien", "line"]); //true
mutation(["hello", "neo"]); //false