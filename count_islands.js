var map = [
  [1, 1, 0, 1, 1, 0, 0, 1],
  [0, 0, 0, 1, 0, 0, 0, 1],
  [0, 0, 0, 1, 0, 1, 0, 1],
  [0, 0, 1, 1, 0, 1, 1, 1],
  [0, 1, 1, 1, 0, 0, 0, 0],
];

//Just prints the map
function print_map (map){
  var arrText = '';
  console.log(arrText);
  for (var i = 0; i < map.length; i++) {
    for (var j = 0; j < map[i].length; j++) {
        arrText = arrText + map[i][j]+' ';
    }
    console.log(arrText);
  arrText='';
  }
}

//Main Function
function count_islands (map) {
  var num_islands = 0;
  for (var x = 0; x < map.length; x++) {
    for (var y = 0; y < map[x].length; y++) {
      if (map[x][y]) num_islands = num_islands + dfs(map, x, y);
    }
  }
  return num_islands;
}

//Recursive dfs
function dfs (map, x, y){
  if (x < 0 || x >= map.length || y < 0 || y >= map[x].length || map[x][y] == '0') return 0;

  map[x][y] = '0';
  //print_map(map);
  dfs(map, x + 1, y);
  dfs(map, x - 1, y);
  dfs(map, x, y + 1);
  dfs(map, x, y - 1);
  return 1;
}

print_map(map);

console.log(count_islands(map));
