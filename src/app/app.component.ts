import { Component } from '@angular/core';
import {Model , TodoItem} from './model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 
 model= new Model();
 isDisplay=false;
 doneList:any[]=[];
 selectedCheckbox:boolean=false;


 getName() {
   return this.model.user;
 }

 test(item,i){
   debugger;
//    item.description=item.description + " Yapıldı";
//    item.action=true;
//    this.doneList.push(item);
//  this.model.items.splice(i,1);
//    console.log(this.doneList);

   


 }
 
 down(item,i){
  
  item.action=false;
  let description= item.description.replace(" Yapıldı","")
  item.description=description;

  this.model.items.push(item);
  this.doneList.splice(i,1);
  debugger;

 
   console.log(this.model.items)
 }

 selectAll(){
   let index =0;
    this.selectedCheckbox=true;

          
    debugger;
   this.model.items.forEach(item => {
  
          // item.description=item.description + " Yapıldı";
          item.action=true;
          // this.doneList.push(item);
          // this.model.items= this.model.items.splice(index,1);
          // index=index+1;
   });
   

 }

 deselectAll(){
  let index =0;
   this.selectedCheckbox=false;

         
   debugger;
  this.model.items.forEach(item => {
 
         // item.description=item.description + " Yapıldı";
         item.action=false;
         // this.doneList.push(item);
         // this.model.items= this.model.items.splice(index,1);
         // index=index+1;
  });
  

}

 
 getItems(){
   if(this.isDisplay){
     return this.model.items;
   }
   return this.model.items.filter(item=>  !item.action);
 }
 addItem(value){
 
 }
 threeDelete(){
  this.model.items.splice(3,1);
 }


}
