 // problem - https://www.hackerrank.com/challenges/queens-attack-2/problem
 // Lateral number of squares is always the same, no matter where the queen is. However, we care about the coordinates in case of obstacles.
 function computeLateralCoordinates(top, bottom, left, right, row, col) {
  return (top - row) + (row - bottom - 1) + (col - left - 1) + (right - col)
}

  // Diagonal number of squares depends on the length of the shortest diagonal. There are two diagonals and they are both lines, one going up and one going down. Since the board is always a square, the diagonal can be constrained on any of the four sides, based on which one is the closest to the square the queen is on.
function computePositiveDiagonalCoordinates(top, bottom, left, right, row, col) {
  return Math.min(row - bottom - 1, col - left - 1) + Math.min(top - row, right - col)
}

function computeNegativeDiagonalCoordinates(top, bottom, left, right, row, col) {
  return Math.min(col - left - 1, top - row) + Math.min(right - col, row - bottom - 1)
}

// The queen attacks squares laterally and diagonally.
// Laterally (r_q, i) and (i, c_q), where 0 <= i <= n.
// Diagonally (r_q + i, c_q + i), (r_q + i, c_q - i), (r_q - i, c_q + i), (r_q - i, c_q - i), where 0 <= i <= n.
function queensAttack(n, k, r_q, c_q, obstacles) {
// By default, the queen attacks all the squares laterally and diagonally from itself. // We need to consider each direction separately and define the coordinates that limit
// queen's attack.
  let top = n
  let bottom = 0
  let left = 0
  let right = n
  let topPos = n
  let bottomPos = 0
  let leftPos = 0
  let rightPos = n
  let topNeg = n
  let bottomNeg = 0
  let leftNeg = 0
  let rightNeg = n
  // Now we deal with obstacles. We need to loop through all of them. We can use the same formulae to determine if they are in the queen's path and in that case we reduce the corresponding boundaries.
  obstacles.forEach(obstacle => {
    // Check if there is a horizontal obstacle
    if (obstacle[0] == r_q) {
      if (obstacle[1] >= c_q) {
        if (obstacle[1] < right) {
          right = obstacle[1] - 1
        }
      } else {
        if (obstacle[1] >= left) {
          left = obstacle[1]
        }
      }
      // Check if there is a vertical obstacle
    } else if (obstacle[1] == c_q) {
      if (obstacle[0] > r_q) {
        if (obstacle[0] <= top) {
          top = obstacle[0] - 1
        }
      } else {
        if (obstacle[0] >= bottom) {
          bottom = obstacle[0]
        }
      }
      // Check if there is an obstacle on the positive diagonal
    } else if ((obstacle[1] - c_q) == (obstacle[0] - r_q)) {
      if (obstacle[0] < r_q) {
        if (obstacle[0] > bottomPos) {
          bottomPos = obstacle[0]
          leftPos = obstacle[1]
        }
      } else {
        if (obstacle[0] < topPos) {
          topPos = obstacle[0] - 1
          rightPos = obstacle[1] - 1
        }
      }
      // Check if there is an obstacle on the negative diagonal 
    } else if (Math.abs(obstacle[1] - c_q) == Math.abs(obstacle[0] - r_q)) {
      if (obstacle[0] > r_q) {
        if (obstacle[0] < topNeg) {
          topNeg = obstacle[0] - 1
          leftNeg = obstacle[1]
        }
      } else {
        if (obstacle[0] > bottomNeg) {
          bottomNeg = obstacle[0]
          rightNeg = obstacle[1] - 1
        }
      }
    }
  })
  let lateral = computeLateralCoordinates(top, bottom, left, right, r_q, c_q)
  let posDiag = computePositiveDiagonalCoordinates(topPos, bottomPos, leftPos, rightPos, r_q, c_q)
  let negDiag = computeNegativeDiagonalCoordinates(topNeg, bottomNeg, leftNeg, rightNeg, r_q, c_q)
  return lateral + posDiag + negDiag
}