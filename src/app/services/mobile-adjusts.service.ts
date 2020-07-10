import { Injectable } from '@angular/core';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class MobileAdjustsService {

  isMobile: boolean;

  constructor(public breakpointObserver: BreakpointObserver) {
    

   }


}
