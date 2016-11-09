// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawFrameworksChart);

// Set a callback to run when the Google Visualization API is loaded.
function chooseChart(type){
  if(type=='framework'){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawFrameworksChart);
  }
  else if(type=='language'){
    google.charts.load('current', {'packages':['corechart']});
    google.charts.setOnLoadCallback(drawLanguageChart);
  }
  else if(type=='otherskills'){
    google.charts.load('current', {packages: ['table']});
    google.charts.setOnLoadCallback(drawOtherSkills);
  }
}
// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawFrameworksChart() {

  // Create the data table.
  var data = new google.visualization.arrayToDataTable([
    ['Framework','Confidence',{role:'style'}],
    ['Node.js',5,'blue'],
    ['Angular.js',5,'#5e9bff'],
    ['GoogleCharts',4,'orange'],
    ['Bootstrap',4,'yellow'],
    ['Express.js',3,'red'],
    ['ASP.net',2,'green']
  ]);

  // Set chart options
  var options = {
    vAxis: {minValue:0, maxValue:1000},
    animation: {
      'startup': true,
      duration: 500,
      easing: 'in'
    },
    'legend':'none',
    'chartArea':{left:100,top:20,width:"100%",height:"80%"},
    'width':600,
    'height':400,
    hAxis: {
      minValue: 1,
      ticks: [ 1, 2, 3, 4, 5],
    },
    fontSize: 15,
    fontName: "Lato, sans-serif"
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart'));
  chart.draw(data, options);
}
function drawLanguageChart() {

  // Create the data table.
  var data = new google.visualization.arrayToDataTable([
    ['Language','Confidence',{role:'style'}],
    ['C++',5,'blue'],
    ['C#',5,'#5e9bff'],
    ['Javascript',4,'yellow'],
    ['Unix/Linux',3,'orange']
  ]);
  

  /*data.addColumn('string', 'Languages');
  data.addColumn('number', 'Confidence');
  data.addRows([
    ['C++', 5],
    ['C#', 5],
    ['Unix/Linux', 3],
    ['Javascript', 2],
  ]);*/

  // Set chart options
  var options = {
    vAxis: {minValue:0, maxValue:1000},
    animation: {
      'startup': true,
      duration: 500,
      easing: 'in'
    },
    'legend':'none',
    'chartArea':{left:100,top:20,width:"80%",height:"80%"},
    'width':600,
    'height':400,
    hAxis: {
      minValue: 1,
      ticks: [ 1, 2, 3, 4, 5]
    },
    fontSize: 15,
    fontName: "Lato, sans-serif"
  };

  // Instantiate and draw our chart, passing in some options.
  var chart = new google.visualization.BarChart(document.getElementById('chart'));
  chart.draw(data, options);
}
function drawOtherSkills() {
  var data = new google.visualization.DataTable();
  data.addColumn('string', 'Web-based',{style: 'font-style:bold; font-size:22px;'});
  data.addColumn('string', 'Database',{style: 'font-style:bold; font-size:22px;'});
  data.addColumn('string', 'Source Control',{style: 'font-style:bold; font-size:22px;'});
  data.addColumn('string', 'Embedded Systems',{style: 'font-style:bold; font-size:22px;'});
  data.addRows([
    ['HTML', 'MySQL', 'Git','Arduino'],
    ['CSS', 'SQLite', ' ','Raspberry Pi'],
    ['Rest API', 'MongoDB', ' ',' '],
    ['jQuery', ' ', ' ',' ']
  ]);
  var options = {
    vAxis: {minValue:0, maxValue:1000},
    animation: {
      'startup': true,
      duration: 500,
      easing: 'in'
    },
    'legend':'none',
    'chartArea':{left:100,top:20,width:"80%",height:"80%"},
    'width':600,
    'height':360,
    fontSize: 18,
    fontName: "Lato, sans-serif"
  };
  var table = new google.visualization.Table(document.getElementById('chart'));

  table.draw(data, options);
}
