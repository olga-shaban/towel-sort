
// You should implement your task here.

module.exports = function towelSort (matrix) {
 if (matrix === undefined){
  return [];
 }
 else if (matrix.length===0) {
  return [];
 }     
 else if (matrix.length>0)  { 
     for (i=1; i<matrix.length; i=i+2)
    {
        matrix[i] = matrix[i].reverse();
        }    
       
    matrix = matrix.join(',').split(',');
      return matrix;   
}
}
