import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-one',
  templateUrl: './comp-one.component.html',
  styleUrl: './comp-one.component.css'
})
export class CompOne {
  studentName = "karthik";

  getStudentName() {
    return "reddy";
  }
  studentName1="siri";

  inputtype="password";
  printMessageByTextBox(){
    window.alert("just now u clicked button");
    }
    printMessage(){
      console.log("Textbox keyboardpressed");
  }
  mouseOverChange() {
    this.studentName1="Karthik";
    return this.studentName1;
  }
  mouseLeave(){
    this.studentName1="siri";
    return this.studentName1;
  }
  getVlaueFromTheTeaxBox(event:KeyboardEvent) {
    console.log(event);

  }
}
