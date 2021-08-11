import { Component, OnInit } from '@angular/core';
import { frameworks } from "../../../../data/frameworks";
import { versions } from "../../../../data/versions"; // TODO: get rid of these relative imports by mapping
import {Framework} from "../../../../interfaces/framework.interface";

@Component({
  selector: 'app-framework-select',
  templateUrl: './framework-select.component.html',
  styleUrls: ['./framework-select.component.scss']
})
export class FrameworkSelectComponent implements OnInit {
  versions = versions;
  frameworks: Framework[] = frameworks;

  constructor() { }

  ngOnInit(): void {
    console.log(this.versions);
    console.log(this.frameworks);
  }
}
