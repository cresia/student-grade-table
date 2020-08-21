var tableElement = document.querySelector('table');

var instanceGradeTable = new GradeTable(tableElement)

// instantiate your App class
var instanceApp = new App(instanceGradeTable);

// call the start method of the resulting object.
instanceApp.start();
