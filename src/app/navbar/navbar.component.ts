import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent
{
  public isUserLoggedIn: boolean = false;
  public isUserNotLoggedIn: boolean = true;

  constructor (private cookieService: CookieService, private route: Router)
  { }

  ngOnInit(): void
  {
    setTimeout(() => {
      this.isUserNotLoggedIn = (this.cookieService.check("GRAD_PORTAL_USER_SESSION-TOKEN")) ? false : true;
    }, 500);
    
  }

  logout(): void
  {
    this.cookieService.deleteAll();
    this.isUserNotLoggedIn = true;
    this.route.navigate(['/login'], {queryParams: {logoutSuccess: true, sessionToken: "expired"}});
  }
}
