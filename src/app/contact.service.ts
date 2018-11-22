import { Injectable } from '@angular/core';
import { Contact } from './contact';
import { CONTACTS } from './mock-contacts';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  serveUrl = 'http://localhost:3000/api/v1';
  constructor(private httpClient: HttpClient) { }

  getContacts(): Observable<Contact[]> {
    const url = this.serveUrl + "/contacts";
    return this.httpClient.get<Contact[]>(url);
  }

}
