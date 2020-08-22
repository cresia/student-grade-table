class App {
  constructor(gradeTable, pageHeader) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
  }

  handleGetGradesError(error) {
    console.error("test error method", error);
  }

  handleGetGradesSuccess(grades) {
    var avgGradeTotal = 0;
    var result;

    for(var i = 0; i < grades.length; i++) {
      avgGradeTotal+=grades[i].grade;
      result = avgGradeTotal/grades.length
    }

    // pass its grades parameter to the updateGrades() method of the gradeTable property of the this object
    // or: Pass the received grades parameter to the updateGrades method of the gradeTable property of the this object.
    this.gradeTable.updateGrades(grades);
    this.pageHeader.updateAverage(result);
  }

  getGrades() {
    $.ajax({
      method: "GET",
      url: "https://sgt.lfzprototypes.com/api/grades",
      headers:{
        "X-Access-Token": "BnyD4O8R"
      },
      success: this.handleGetGradesSuccess,
      error: this.handleGetGradesError,
    });
  }

  start() {
    this.getGrades();
  }
}
