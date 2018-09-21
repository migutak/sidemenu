import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-editbranches',
  templateUrl: './editbranches.component.html',
  styleUrls: ['./editbranches.component.css']
})
export class EditbranchesComponent implements OnInit {

  branchcode: string;
  users: any = [];
  constructor(private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.branchcode = params.branchcode;
      console.log('in branchcode = ' + this.branchcode);
    });
  }

}
