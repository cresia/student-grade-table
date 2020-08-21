class App {
  constructor() {
    this.handleGetGradesError = this.handleGetGradesError.bind(this);
    this.handleGetGradesSuccess = this.handleGetGradesSuccess.bind(this);
  }

  handleGetGradesError(error) {
    console.error("test error method", error);
    // console.log("test error method");
  }

  handleGetGradesSuccess(grades) {
    console.log("test log method of success grade", grades);
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
    // console.log("testing start method");
  }


}
