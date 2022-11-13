import { Component, OnInit } from '@angular/core';
import { DataService } from './../data.service'

@Component({
  selector: 'app-history-page',
  templateUrl: './history-page.component.html',
  styleUrls: ['./history-page.component.scss'],
  providers: [DataService]
})
export class HistoryPageComponent implements OnInit {

  showDiv: boolean = false;
  historyData : any = [];


  //---------



  constructor(private dataService: DataService) { }

  ngOnInit(): void {

// this.dataService.allPassedData.subscribe((allPassedData)=>{
// this.historyData = allPassedData;
// console.log('JSON.stringify (this.historyData))',
// (this.historyData));


// this.historyData = this.dataService.retrievePassedObject()
// debugger;

// this.dataService.allPassedData$.subscribe((data)=>{
//   console.log("data = ", data);
//   this.historyData = data;
// })
// var storedArray = JSON.parse(localStorage.getItem('searchResult')|| '{}');


var storedArray = JSON.parse(sessionStorage.getItem('searchResult')|| '{}');


console.log("storedArray = ", storedArray);

this.historyData = storedArray;

console.log("historyData = ", this.historyData);

if(this.historyData.length>0){
  this.showDiv = true;
}
else{
  this.showDiv = false;
}

// this.dataService.sharedParam.subscribe(param=>console.log(param))
  }

//  myFunction(parameter:any){
//     console.log("history = ", parameter);
//   }



deleteEntry(indexVal:any){

// this.historyData.find((element:any, index:any)=> index===indexVal)

this.historyData.forEach((element:any, index:any )=>{

  if(index== indexVal){
    console.log("Inside index match")
    // delete this.historyData[index]; //doesn't acoomodate or update the index.
    this.historyData.splice(index,1);
    window.sessionStorage.setItem("searchResult",  JSON.stringify(this.historyData))
  }

  console.log("After deleting, historyData = ", this.historyData)
})

}
}
