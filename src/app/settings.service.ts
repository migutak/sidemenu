import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SettingsService {

  constructor(private httpClient: HttpClient) { }
  url = environment.ecol_apis + '/api/branches';

  //
  getBranches() {
    return this.httpClient.get(this.url);
  }
}
