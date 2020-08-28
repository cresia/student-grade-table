class GradeTable {
  constructor(tableElement) {
    this.tableElement = tableElement;
  }

  updateGrades(grades) {

    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = "";

    for(var i = 0; i < grades.length; i++) {
      var tdName = document.createElement('td');
      tdName.textContent = grades[i].name;

      var tdCourse = document.createElement('td');
      tdCourse.textContent = grades[i].course;

      var tdGrade = document.createElement('td');
      tdGrade.textContent = grades[i].grade;

      var tr = document.createElement('tr');
      tr.append(tdName,tdCourse,tdGrade);

      tbody.append(tr)
    }

  }
}
