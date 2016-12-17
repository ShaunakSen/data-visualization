console.log("Hello!!");

var dataArray = [5, 11, 18];

var svg = d3.select("body").append("svg").attr("height","100%").attr("width","100%");

// We begin by selecting the rectangles
// svg.selectAll("rect") - find svg element and look inside for rect
// if it finds rectangles, return the array of elements
// if it does not returns empty selection
// .data() binds dataArray to the rectangles

// d: datapoint i:index
// i:0 d:5
// i:1 d:11
// i:3 d:18


svg.selectAll("rect")
      .data(dataArray)
      .enter().append("rect")
                .attr("height",function(d,i){ return d*15; })
                .attr("width","50")
                .attr("fill","pink")
                .attr("x",function(d,i){ return 60*i; })
                .attr("y",function(d,i){ return 200-(d*15); });