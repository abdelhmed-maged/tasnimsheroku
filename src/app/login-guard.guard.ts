import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { AfService } from './shared/af-service.service';
import { tap, map, take } from 'rxjs/operators';
import { User } from './shared/user';
import 'rxjs/add/operator/do';

@Injectable()
export class LoginGuardGuard implements CanActivate {
  constructor(private af: AfService,
              private router: Router) {}
  user: User;

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
//     return this.af.user$.pipe(
//       take(1),
//       map(user => this.user && this.user.roles.admin ? true : false),
//       tap( isAdmin => {
//         if (!isAdmin) {
//           console.log('Access denied');
//         } else {
//           console.log('Access granted');
//         }
//       })
//     )
//   }
// }
    return this.af.user$
      .take(1)
      .map(user => !!user)
      .do(loggedIn => {
        if (!loggedIn) {
          console.log('access denied');
          this.router.navigate(['/login']);
        }
      });

  }
}
