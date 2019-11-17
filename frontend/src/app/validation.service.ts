import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ValidationService {

  apiURL = 'http://localhost:5000/API/contact';
  status;

  constructor(private http: HttpClient) {}

  validateForm(inputs) {
    this.http.post(this.apiURL, inputs).subscribe(
      res => {
        this.status = res;
        alert(this.status.message);
        console.log(this.status);
      },
      err => {
        this.status = {status: err.status, message: err.error.details[0].message};
        alert(this.status.message);
        console.log(this.status);
      }
    )
  }
}
