/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
	var data = preferences;
  var result = 0;
   data.unshift(0);
   
   for(let a = 1; a < data.length; a++){
       let b = data[a];
       let c = data[b];
       
       result += a == data[c];
   }
   function float2int (value) {
    return value | 0;
}

   return float2int(result/3);

};
