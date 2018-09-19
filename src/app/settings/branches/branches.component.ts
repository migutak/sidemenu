import { Component, OnInit } from '@angular/core';
import { SettingsService } from '../../settings.service';
import {HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-branches',
  templateUrl: './branches.component.html',
  styleUrls: ['./branches.component.css']
})
export class BranchesComponent implements OnInit {

  AttData: any = [];
  url = environment.ecol_apis + '/api/branches';
  constructor(private httpClient: HttpClient) { }

  ngOnInit() {
    this.httpClient.get(this.url).subscribe(data => {
      this.AttData = data;
     // console.log(data);
    }, error => {
      console.log('Internal Server Error status', error.status, error.statusText);
      console.log('Server Error Details', error);
    });
  }

}
