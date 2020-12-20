import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";

import { Observable } from 'rxjs';


@Injectable()
export class IndelecApiService {

  private apiUrl = "http://bkmcmaq.cluster024.hosting.ovh.net"

  constructor(private http: HttpClient) {}

  registerUser(userInfo: { email:string, newsletter: boolean }): Observable<any> {
    return this.http.post(`${this.apiUrl}/users`, {
      email: userInfo.email,
      newsletter: userInfo.newsletter,
    });
  }

  changeUserInfo(userInfo: {email: string, newsletter: boolean }): Observable<any> {
    return this.http.put(`${this.apiUrl}/users`, {
      email: userInfo.email,
      newsletter: userInfo.newsletter
    })
  }

  sendMessage(userMessage: { email: string, message: string }): Observable<any> {
    return this.http.post(`${this.apiUrl}/message`, {
      email: userMessage.email,
      message: userMessage.message,
    })
  }

}
