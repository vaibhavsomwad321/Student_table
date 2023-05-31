import { HttpClient } from '@angular/common/http';
import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService implements OnInit{
  baseUrl = "http://localhost:3000/posts";
  constructor(private _http:HttpClient) { }
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  getData(){
    return this._http.get(this.baseUrl)
  }
  getObjData(obj:string){
    return this._http.post(this.baseUrl,obj);
  }
}
