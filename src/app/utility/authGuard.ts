import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Injectable({providedIn: 'root'})
export class AuthGuard implements CanActivate
{
    constructor(private router: Router, private cookieService: CookieService)
    {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot)
    {
        if (this.cookieService.check("GRAD_PORTAL_USER_SESSION-TOKEN")) return true;
        else
        {
            this.router.navigate(['/login'], {queryParams: {returnUrl: state.url, sessionToken: "?", userId: "" }});
            return false;
        }
    }
}