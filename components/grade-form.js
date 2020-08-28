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
    // --- or --- using getAll(): if only one value, need to specify the postion since it return as an array
    // var name = instanceFormGrade.getAll('name')[0];
    // var course = instanceFormGrade.getAll('course')[0];
    // var grade = instanceFormGrade.getAll('grade')[0];

    // ----- or ---- using .get() : for a single value result
    var name = instanceFormGrade.get('name');
    var course = instanceFormGrade.get('course');
    var grade = instanceFormGrade.get('grade');
    this.createGrade(name, course, grade);
    event.target.reset();
  }

}
