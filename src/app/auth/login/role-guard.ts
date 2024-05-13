// role.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { AuthHttpService } from './auth-http.service';

@Injectable({
    providedIn: 'root'
})
export class RoleGuard implements CanActivate {
    constructor(private authService: AuthHttpService, private router: Router) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
        const userRoles = this.authService.getUserRoles();
        const requiredRole = route.data['requiredRole'];

        if (userRoles.includes(requiredRole)) {
            return true;
        } else {
            return this.router.createUrlTree(['/auth/login']);
        }
    }
}
