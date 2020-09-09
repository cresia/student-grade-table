class App {
  constructor(gradeTable, pageHeader, gradeForm) {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
    this.gradeTable = gradeTable;
    this.pageHeader = pageHeader;
    this.gradeForm = gradeForm;

    this.createGrade = this.createGrade.bind(this);
    this.handleCreateGradeError = this.handleCreateGradeError.bind(this);
    this.handleCreateGradeSuccess = this.handleCreateGradeSuccess.bind(this);

    this.deleteGrade = this.deleteGrade.bind(this);
    this.handleDeleteGradeError = this.handleDeleteGradeError.bind(this);
    this.handleDeleteGradeSuccess = this.handleDeleteGradeSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error("test error method", error);
  }

  handleGetGradesSuccess(grades) {
    var avgGradeTotal = 0;
    var result = 0;

    for(var i = 0; i < grades.length; i++) {
      avgGradeTotal+=grades[i].grade;
      result = avgGradeTotal / grades.length;
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

  createGrade(name, course, grade) {
    $.ajax({
      method: "POST",
      url: "https://sgt.lfzprototypes.com/api/grades",
      data: {
        "name": name,
        "course": course,
        "grade": grade
      },
      headers:{
        "X-Access-Token": "BnyD4O8R"
      },
      success: this.handleCreateGradeSuccess,
      error: this.handleCreateGradeError
    });
  }

  handleCreateGradeError(error) {
    console.error("error: ", error);
  }

  handleCreateGradeSuccess() {
    this.getGrades();
  }

  start() {
    this.getGrades();
    this.gradeForm.onSubmit(this.createGrade);
    this.gradeTable.onDeleteClick(this.deleteGrade)
  }

  deleteGrade(id) {
    $.ajax({
      method: "DELETE",
      url: "https://sgt.lfzprototypes.com/api/grades/" + id,
      headers: {
        "X-Access-Token": "BnyD4O8R"
      },
      success: this.handleDeleteGradeSuccess,
      error: this.handleDeleteGradeError,
    });
  }

  handleDeleteGradeError(error) {
    console.error();
  }

  handleDeleteGradeSuccess() {
    this.getGrades();
  }

}
