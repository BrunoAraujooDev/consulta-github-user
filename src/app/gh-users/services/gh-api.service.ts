import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { GhRepo } from '../models/ghRepo';
import { GhUser } from '../models/ghUsers';

@Injectable()
export class GhApiService {

 private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(
    private http: HttpClient
  ) {}

  findUser(username: string): Observable<GhUser>{
      return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findUserRepo(username: string) : Observable<GhRepo[]>{
    return this.http.get<GhRepo[]>(`${this.baseUrl}/${username}/repos`)
  }
}
