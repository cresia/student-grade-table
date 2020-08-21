class App {
  constructor(gradeTable) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
  }

  handleGetGradesError(error) {
    console.error("test error method", error);
  }

  handleGetGradesSuccess(grades) {
    // pass its grades parameter to the updateGrades() method of the gradeTable property of the this object
    this.gradeTable.updateGrades(grades);
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
