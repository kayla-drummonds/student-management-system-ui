import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {

  }

  private baseUrl: string = 'http://localhost:8006/api';
  ngOnInit() {
    console.log('Init method works!');
  }

}
