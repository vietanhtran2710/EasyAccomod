import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const baseUrl = 'http://localhost:8080/api/extend';

@Injectable({
  providedIn: 'root'
})
export class ExtendService {

  constructor(private http: HttpClient) { }

  createRequest(data) {
    return this.http.post(baseUrl, data);
  }

  getAllRequest() {
    return this.http.get(`${baseUrl}/`);
  }

  getOneRequest(postID) {
    return this.http.get(`${baseUrl}/${postID}`);
  }

  deleteRequest(postID) {
    return this.http.delete(`${baseUrl}/${postID}`);
  }
}
