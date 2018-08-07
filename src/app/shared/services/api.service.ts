import { environment } from './../../../environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  baseUrl: string = environment.apiUrl;
  constructor(private http: HttpClient) { }


}
