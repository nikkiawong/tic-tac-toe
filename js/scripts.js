// BUSINESS LOGIC


const player = 'X';
const computer = 'O';







// USER INTERFACE LOGIC

$(document).ready(function() {

  const grid = [
    [' ', ' ', ' '],
    [' ', ' ', ' '],
    [' ', ' ', ' ']
    ];

  $('.col-md-4').click(function() {
     var $this = $(this);
    $this.html(player);
    const i = $this.data('i');
    const j = $this.data('j');
    console.log(j);
    grid[i][j] = player;
    console.log(player);


});













});
