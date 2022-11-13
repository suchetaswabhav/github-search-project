import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-past-search',
  templateUrl: './past-search.component.html',
  styleUrls: ['./past-search.component.scss']
})
export class PastSearchComponent implements OnInit {

  pastSuccessfulHistory: any[] =[];
  pastUnsuccessfulHistory: any[] =[];

showSuccessfulSearchDiv: boolean = false;
showUnsuccessfulSearchDiv: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  pastSuccessfulSearches(){
    this.showUnsuccessfulSearchDiv = false;
    var storedArray = JSON.parse(sessionStorage.getItem("searchResult")|| '{}');

    this.pastSuccessfulHistory = storedArray;

    if( this.pastSuccessfulHistory.length >0){
      this.showSuccessfulSearchDiv = true;
      // this.showUnsuccessfulSearchDiv = false;
    }
    else{
      this.showSuccessfulSearchDiv = false;
      alert ("There are no successful searches so far!")
    }
  }

  pastUnsuccessfulSearches(){
    this.showSuccessfulSearchDiv = false;
    var storedArray = JSON.parse(sessionStorage.getItem("unsuccessfulSearchResult")|| '{}');

    this.pastUnsuccessfulHistory = storedArray;
    console.log("this.pastUnsuccessfulHistory = ", this.pastUnsuccessfulHistory)

    if( this.pastUnsuccessfulHistory.length >0 ){
      this.showUnsuccessfulSearchDiv = true;
      // this.showSuccessfulSearchDiv = false;
    }
    else{
      this.showUnsuccessfulSearchDiv = false;
      alert ("There are no unsuccessful searches so far!")
    }
  }



  resetPage(){
    this.showSuccessfulSearchDiv = false;
    this.showUnsuccessfulSearchDiv = false;
  }
}
