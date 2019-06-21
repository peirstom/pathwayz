import { Component, OnInit } from '@angular/core';
import { DataService, User } from '../../services/data.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.scss']
})
export class UserProfileComponent implements OnInit {
  public user: User;
  constructor(private dataService: DataService) {
    this.user = this.dataService.getUser();
  }

  ngOnInit() {
  }

}
