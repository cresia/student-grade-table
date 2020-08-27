class GradeForm {
  constructor(formElement) {
    this.formElement = formElement;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.formElement.addEventListener('submit', this.handleSubmit);
  }

  onSubmit(createGrade) {
    this.createGrade = createGrade;
  }

  handleSubmit(event) {
    //handleSubmit takes one parameter, event and calls the preventDefault() method on the event
    //and logs a test message (like "hi") to the console.
    event.preventDefault();

    var instanceFormGrade = new FormData(event.target);
    // var result = instanceFormGrade.getAll('name', 'course', 'grade');
    var name = instanceFormGrade.get('name');
    var course = instanceFormGrade.get('course');
    var grade = instanceFormGrade.get('grade');
    // this.createGrade(result);
    this.createGrade(name, course, grade);
    event.target.reset();
  }

}
