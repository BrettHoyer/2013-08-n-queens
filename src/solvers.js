// IMPLEMENTING NAIVE SOLUTION FOR N QUEENS...almost there after much failure this sprint

var findNQueens = function(n) {
  var queenCount = 0;

  var traverse = function(placements) {
    for(var col=0; col<n; col++) {
      if(!hasAnyConflictsPeriod(placements, col)) {
        traverse(placements.concat([col]));
      } else {
        queenCount++;
      }
    }
  };

  traverse([]);

  return queenCount;
};
var hasAnyConflictsPeriod = function(placements, col){
  if(hasAnyColConflicts(placements, col) || hasAnyMajorDiagConflicts(placements, col) || hasAnyMinorDiagConflicts(placements,col)){
    return true
  } else {
    return false
  }
}


var hasAnyColConflicts = function(placements, col) {
  for(var i=0; i<col; i++) {
    if(placements[i] === col) {
      return true;
    }
  }
  return false;
};

var hasAnyMajorDiagConflicts = function(placements, col) {
  for(var i=0; i<col; i++) {
    if(placements.length - i + placements[i] === col) {
      return true;
    }
  }
  return false;  
};

var hasAnyMinorDiagConflicts = function(placements, col) {
  for(var i=0; i<placements.length; i++) {
    if(i + placements[i] === col + placements.length) {
      return true;
    }
  }
  return false;  
};










// // Write code here that will find the solution count for a board of any size.
// // hint: you'll need to do a full-search of all possible arrangements of pieces!
// // (There are also optimizations that will allow you to skip a lot of the dead search space)

// window.findNRooksSolution = function(n){
//   // if n is 3
//   // create a 3x3 chessboard
//   // [[0,0,0]
//   //  [0,0,0]
//   //  [0,0,0]]
//   // creates 3 rooks
//   var solution = [];
//   for(var i = 0; i < n; i++){
//     solution.push(new Array(n));
//   }

//   for(var j = 0; j < n.length; j++){
//     for(var k = 0; k < n.length; k++){
//       if(noRookCollisions(solution, j, k)){
//         solution[j][k] = 1;
//       }
//     }
//   }
//   var noRookCollisions = function(solution, yPos, xPos){
//     if(_.contains(solution[yPos], 1)){
//       return false;
//     } else {
//       for(var i = 0; i < solution[yPos].length; i++) {
//         if(solution[i][xPos] === 1){
//           return false;
//         }
//       }
//       return true;
//     }
//   };


//   console.log('Single solution for ' + n + ' rooks:', solution);
//   return solution;
// };

// window.countNRooksSolutions = function(n){
//   // var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
//   return solutionCount;
// };

// window.findNQueensSolution = function(n){
//   // var solution = undefined; //fixme

//   console.log('Single solution for ' + n + ' queens:', solution);
//   return solution;
// };

// window.countNQueensSolutions = function(n){
//   // var solutionCount = undefined; //fixme

//   console.log('Number of solutions for ' + n + ' queens:', solutionCount);
//   return solutionCount;
// };


// // This function uses a board visualizer lets you view an interactive version of any piece matrix.

// window.displayBoard = function(matrix){
//   $('body').html(
//     new BoardView({
//       model: new Board(matrix)
//     }).render()
//   );
// };
