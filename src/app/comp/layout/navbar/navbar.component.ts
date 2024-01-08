import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {ChipsModule} from "primeng/chips";
import {HomeComponent} from "../home/home.component";
import {ContactMainComponent} from "../../contact/contact-main/contact-main.component";
import {UserMainComponent} from "../../user/user-main/user-main.component";
import {TaskMainComponent} from "../../task/task-main/task-main.component";
import {Router} from "@angular/router";


@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    ChipsModule,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  items: MenuItem[] | undefined;

  constructor(private router: Router) {}

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home',
        component: HomeComponent
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-users',
        component: ContactMainComponent
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user',
        component: UserMainComponent
      },
      {
        label: 'Task',
        icon: 'pi pi-fw pi-calendar',
        component: TaskMainComponent
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off',
      }
    ];
  }
}
