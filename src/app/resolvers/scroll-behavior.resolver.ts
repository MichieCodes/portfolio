import { ActivatedRouteSnapshot, Resolve } from '@angular/router';

export class ScrollBehaviorResolver implements Resolve<void> {
  constructor() {}

  async resolve(route : ActivatedRouteSnapshot) : Promise<void> {
    (<HTMLElement>document.body.parentElement).style.scrollBehavior = 'unset';
    await this.clock(0);
  }

  private clock(delay : number) : Promise<void> {
    return new Promise(function(res) {setTimeout(res, delay)});
  }
}