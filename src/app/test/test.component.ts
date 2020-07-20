import { Component, OnInit } from '@angular/core';
import { ApiRouterService } from '../api-router.service';
import { Serverdata } from '../Interfaces/ServerData';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
})
export class TestComponent implements OnInit {
  private routing: ApiRouterService;
  public data: Serverdata[];

  constructor(rout: ApiRouterService) {
    this.routing = rout;
  }

  ngOnInit(): void {}

  loadData(): void {
    this.routing.GetAll().subscribe((returndata) => {
      this.data = returndata as Serverdata[];
    });
  }

  testclick(): void {
    // alert('TEST CLICK');
  }
}
