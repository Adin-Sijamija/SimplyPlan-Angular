import { Component, OnInit, Input } from '@angular/core';
import { ProjectSubmitDTO } from '../Classes/ProjectSubmitDTO';
import { FormsModule } from '@angular/forms';
import { ApiRouterService } from '../api-router.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-form',
  templateUrl: './project-form.component.html',
  styleUrls: ['./project-form.component.css'],
})
export class ProjectFormComponent implements OnInit {
  constructor(private ApiRouter: ApiRouterService) {}

  model = new ProjectSubmitDTO('', '');
  submitted = false;
  Created: boolean;

  ngOnInit(): void {}
  onSubmit(): void {
    // this.submitted = true;
    this.ApiRouter.PostData(this.model).subscribe((answer) => {
      console.log(answer);
    });
  } 
}
