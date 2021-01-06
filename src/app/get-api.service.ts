import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class GetApiService {
  add =''

  constructor(
    private http:HttpClient
  ) { }

  GetAddress(address:string){
    this.add = address
  }
  apiCall()
  {
    return this.http.get(this.add)
  }
}
