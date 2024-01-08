import {Component, OnInit} from '@angular/core';
import {MenubarModule} from "primeng/menubar";
import {MenuItem} from "primeng/api";
import {ChipsModule} from "primeng/chips";

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    MenubarModule,
    ChipsModule
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent  implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
    this.items = [
      {
        label: 'Home',
        icon: 'pi pi-fw pi-home'
      },
      {
        label: 'Contact',
        icon: 'pi pi-fw pi-users'
      },
      {
        label: 'User',
        icon: 'pi pi-fw pi-user'
      },
      {
        label: 'Task',
        icon: 'pi pi-fw pi-calendar'
      },
      {
        label: 'Logout',
        icon: 'pi pi-fw pi-power-off'
      }
    ];
  }
}
