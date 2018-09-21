import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators, ValidationErrors} from '@angular/forms';



@Component({
  selector: 'app-guidlines',
  templateUrl: './guidlines.component.html',
  styleUrls: ['./guidlines.component.css']
})
export class GuidlinesComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  // boutton poupour demmarage  capture et faire redirection vers  settings
  Start() {
    this.router.navigateByUrl('/settings');
  }


}
