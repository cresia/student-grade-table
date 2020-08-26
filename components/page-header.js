class PageHeader {
  constructor(headerElement) {
    this.headerElement = headerElement;
  }

  updateAverage(newAverage) {
    console.log("newAverage", newAverage);

    // use this when in the main.js .querySelector is header bc it needs to search for descendents
    // e.g: header -> span -> avgResult
    var avgGrades = this.headerElement.querySelector('span');
    avgGrades.textContent = "";

    var createDivAvg = document.createElement("div");
    createDivAvg.textContent = newAverage;

    avgGrades.append(createDivAvg);

    // ------- or by using the tag element directly or by class or id on main.js -------
    //if using the .querySelector("span") directly on main.js, does not need line 11 (comment it out) because
    // it's already on span -> avgResult
    //also comment out line 16
    //this way can use this.headerElement directly to append since this.headerEleemnt is span element
    // this.headerElement.append(createDivAvg);
  }
}
