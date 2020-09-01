import { Component } from '@angular/core';
import { Model, TodoItem } from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  model = new Model();
  isDisplay = false;
  doneList: any[] = [];


  getName() {
    return this.model.user;
  }

  test(item, i) {
    item.description = item.description + " Yapıldı";
    item.action = true;
    this.doneList.push(item);
    this.model.items.splice(i, 1);
    console.log(this.doneList);
  }


  testUndo(item, i) {
    debugger;
    item.action = false;
    let description = item.description.replace(" Yapıldı", " ");
    item.description = description;
    this.model.items.push(item);
    // this.doneList.shift();
    this.doneList.splice(i, 1);


  }

  getItems() {
    if (this.isDisplay) {
      return this.model.items;
    }
    return this.model.items.filter(item => !item.action);
  }
  addItem(value) {
    if (value != "") {
      this.model.items.push(new TodoItem(value, false))
    }
  }
  threeDelete() {
    this.model.items.splice(3, 1);
  }


}
