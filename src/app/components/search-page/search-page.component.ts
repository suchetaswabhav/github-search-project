import { Component, OnInit ,ErrorHandler , ViewChild} from '@angular/core';
import { HttpClient, HttpParams, HttpRequest, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';

import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

import {map} from 'rxjs/operators';
import { Observable, throwError, of   } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { NgxSpinnerService } from "ngx-spinner";
import { DataService } from '../data.service';

import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.scss'],
  providers: [DataService]
})
export class SearchPageComponent implements OnInit {


  gitSearchForm : FormGroup;
  showDiv:any = false;
  searchResultObject ={};
  allSearchResultArray : any[]= [];
  unsuccessfulSearchResultArray: any[]= [];

  array: any = [];
  @Output() passArray = new EventEmitter<any>();


    constructor(private fb: FormBuilder, private httpClient: HttpClient, private dataService :DataService) {

      this.gitSearchForm = this.fb.group({
        "gitUsername": ['', Validators.required]
      })
     }





  ngOnInit(): void {
  }

  githubSearch(username:any){

    console.log("username = ", username);

    let usernameVal = username.gitUsername;

let params = new HttpParams();

params = params.append('client_id', "60b9f23dedffbdfc476c");
params = params.append('client_secret', "d1c186c6373f96571c0bfcf76b84e4dc6fd0c15a");


return new Promise((resolve, reject) => {

  this.httpClient.get("https://api.github.com/users/"+ usernameVal, ({params:params}))

  .pipe(map(Response => Response))

  .pipe(catchError(error => {
    return throwError(() => {
      new Error('Something went wrong ');
    alert("Please enter a correct Username");
    var unsuccessfulSearchUnsername = usernameVal;
    this.unsuccessfulSearchResultArray.push(unsuccessfulSearchUnsername);
    window.sessionStorage.setItem("unsuccessfulSearchResult", JSON.stringify(this.unsuccessfulSearchResultArray));
    this.gitSearchForm.reset();
    this.showDiv = false;
  });
  }))
  .subscribe((res: any) => {

    // this.spinner.show();

    console.log("this.spinner show");
    console.log("XXXXXXXXXXXX Response on /users", res);

    console.log("this.spinner-hide")
    this.showDiv = true;
    this.searchResultObject = res;
    // this.allSearchResultArray.push(this.searchResultObject);
    // this.spinner.hide();

    console.log("this.writeItOutput is an object")

   console.log("url - https://api.github.com/users/",{params:params})

   //-----------
   console.log("1, this.allSearchResultArray = ", this.allSearchResultArray);

   var storedArray :any= [];
   this.allSearchResultArray= [];
  //  storedArray = JSON.parse(localStorage.getItem("searchResult")|| '{}');  //localStorage

  storedArray = JSON.parse(sessionStorage.getItem("searchResult")|| '{}');


   console.log("storedArray = ", storedArray);
   Array.from(storedArray).forEach((element:any)=> {
    this.allSearchResultArray.push(element)

   });

   this.allSearchResultArray.push(res);

   console.log("2,this.allSearchResultArray = ", this.allSearchResultArray);
   this.gitSearchForm.reset();
  // this.array = this.allSearchResultArray;

  // this.emitArray(this.allSearchResultArray);

// window.localStorage.setItem("searchResult", JSON.stringify(this.allSearchResultArray)) //localStorage.

window.sessionStorage.setItem("searchResult", JSON.stringify(this.allSearchResultArray))


    resolve(this.searchResultObject );

});

  });
}

// passDataToService(){
//   this.dataService.allPassedData.next(this.allSearchResultArray);
// }


// emitArray(allSearchResultArray:any) {
//   this.array = allSearchResultArray;
//   this.passArray.emit(this.array);
//   console.log("Inside emitArray");
//   console.log("this.passArray = ", this.passArray);
// }


// passDataToService(){
//   this.dataService.setPassedData(this.allSearchResultArray);
// }

}
