// contact.page.ts

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-contact',
  templateUrl: 'contact.page.html',
  styleUrls: ['contact.page.scss'],
})
export class ContactPage implements OnInit {
  data: any = [];
  name: string = '';
  surname: string = '';
  phoneNumber: string = '';
  email: string = '';

  constructor(private dataService: DataService, private http: HttpClient) {}


  onSubmit() {
    // Create an object with the user's data
    const userData = {
      name: this.name,
      surname: this.surname,
      phoneNumber: this.phoneNumber,
      email: this.email,
    };
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.dataService.getData().subscribe((res: any) => {
      this.data = res;
      console.log(res)
    })
  }
}
