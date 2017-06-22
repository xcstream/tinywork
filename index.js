/**
 * Created by xucheng on 2017/6/22.
 */
function setup(){
    window.scribble = new Scribble();
    scribble.bowing = 0
    var b_height = ($(window).height())-20;
    var b_width = ($(window).width())-20;
    createCanvas(b_width, b_height);

    var x1 = 10;
    var x2 = b_width-20;
    var y1 = 10
    var y2 = b_height-20

    stroke( 0, 30, 30 );
    strokeWeight( 5 );

    y3 = y1+100; y4 = y1+100;
    scribble.scribbleLine(x1,y1,x2,y1)
    scribble.scribbleLine(x1,y2,x2,y2)
    scribble.scribbleLine(x1,y1,x1,y2)
    scribble.scribbleLine(x2,y1,x2,y2)
    scribble.scribbleLine(x1,y3,x2,y4)


    var gap = 5;
    var angle = 315;
    strokeWeight( 3 );
    stroke( 0, 50, 180 );
    scribble.scribbleFilling( [x1,x2,x2,x1], [y1,y1,y3,y3] , gap, angle );

}

function draw(){

}