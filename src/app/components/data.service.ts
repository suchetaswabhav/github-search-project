import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject,Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  // allPassedData: BehaviorSubject<any> = new BehaviorSubject<any>([]);


  // allPassedData: any

  //---------------------

  // private paramSource = new BehaviorSubject(null);
  // sharedParam = this.paramSource.asObservable();


private allPassedData = new BehaviorSubject<any>(null);
allPassedData$ = this.allPassedData.asObservable();



  constructor() { }

storePassedObject(passedData:any){
  this.allPassedData.next(passedData);
}

retrievePassedObject(){
  return this.allPassedData;
}


//-------------

// changeParam(param: any) {
//   this.paramSource.next(param)
// }

setPassedData(retrievedData: any){
  this.allPassedData.next(retrievedData);
}


}
