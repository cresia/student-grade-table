//Instantiate your PageHeader, passing in the header element as an argument.
var headerElement = document.querySelector("header");

//---- or: different way for grabbing the headerElement using span element or by creating a class/id on span element under index.html
// var headerElement = document.querySelector('.avgGrades');

var instancePageHeader = new PageHeader(headerElement);


var tableElement = document.querySelector('table');
var instanceGradeTable = new GradeTable(tableElement)

// instantiate your App class
var instanceApp = new App(instanceGradeTable, instancePageHeader);

// call the start method of the resulting object.
instanceApp.start();
