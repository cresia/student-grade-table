class GradeTable {
  constructor(tableElement, noGradesElement) {
    this.tableElement = tableElement;
    this.noGradesElement = noGradesElement;
  }

  updateGrades(grades) {

    var tbody = this.tableElement.querySelector('tbody');
    tbody.textContent = "";

    for(var i = 0; i < grades.length; i++) {
     var tr = this.renderGradeRow(grades[i], this.deleteGrade);
      tbody.append(tr);
    }


    // Explanations: for if else hide/show the text messages, when "No Grades Recorded"
    // grades = [];
    // unhide the element of text message
    // grades = [1,2,3]
    // hide the text
    // ----- bootrsap element to hide: d-none ------

    if(grades.length === 0) {
      var pElement = this.noGradesElement;
      pElement.classList.remove("d-none")
    } else {
      var pElement = this.noGradesElement;
      pElement.classList.add("d-none");
    }

  }

  onDeleteClick(deleteGrade) {
    this.deleteGrade = deleteGrade;
  }

  renderGradeRow(data, deleteGrade) {
    console.log(data);
    // data will be a single grade object,
    // deleteGrade will be a function.
    // renderGradeRow is responsible for the following:
    //populating the < td > elements with properties of the data object
    var tr = document.createElement("tr")
    var tdName = document.createElement("td");
    var tdCourse = document.createElement("td");
    var tdGrade = document.createElement("td");

    tdName.textContent = data.name;
    tdCourse.textContent = data.course;
    tdGrade.textContent = data.grade;

    var tdButton = document.createElement("td");
    var tdDeleteBtn = document.createElement("button");
    tdDeleteBtn.textContent = "DELETE";
    // adding a 'click' event listener to the delete button element.
    //The event listener's code block should pass data.id to the deleteGrade function
    tdDeleteBtn.addEventListener("click",function(){deleteGrade(data.id)});

    tr.append(tdName,tdCourse,tdGrade, tdDeleteBtn);

    return tr;

  }
}
