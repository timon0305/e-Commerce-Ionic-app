import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Observable } from 'rxjs/internal/Observable';
import { Subscription } from 'rxjs/internal/Subscription';

@Injectable({
  providedIn: 'root'
})
export class AppEventsService {

  openCategoryPage$: Observable<any>;
  private openCategoryPage: Subject<any> = new Subject();

  openDeepLink$: Observable<any>;
  private openDeepLink: Subject<any> = new Subject();

  openHomePage$: Observable<any>;
  private openHomePage: Subject<any> = new Subject();

  openShippingAddressPage$: Observable<any>;
  private openShippingAddressPage: Subject<any> = new Subject();


  setting$: Observable<any>;
  private setting: Subject<any> = new Subject();

  showAd$: Observable<any>;
  private showAd: Subject<any> = new Subject();

  settingsLoaded$: Observable<any>;
  private settingsLoaded: Subject<any> = new Subject();

  recentDeleted$: Observable<any>;
  private recentDeleted: Subject<any> = new Subject();

  cartChange$: Observable<any>;
  private cartChange: Subject<any> = new Subject();

  wishListUpdate$: Observable<any>;
  private wishListUpdate: Subject<any> = new Subject();

  openThankYouPage$: Observable<any>;
  private openThankYouPage: Subject<any> = new Subject();


  openSubcategoryPage$: Observable<any>;
  private openSubcategoryPage: Subject<any> = new Subject();

  countryChange$: Observable<any>;
  private countryChange: Subject<any> = new Subject();

  stateChange$: Observable<any>;
  private stateChange: Subject<any> = new Subject();

  cardScratched$: Observable<any>;
  private cardScratched: Subject<any> = new Subject();

  updateSideMenu$: Observable<any>;
  private updateSideMenu: Subject<any> = new Subject();



  private subscriptions: Subscription = new Subscription();

  constructor() {
    this.openCategoryPage$ = this.openCategoryPage.asObservable();
    this.openDeepLink$ = this.openDeepLink.asObservable();
    this.openHomePage$ = this.openHomePage.asObservable();
    this.openShippingAddressPage$ = this.openShippingAddressPage.asObservable();
    this.setting$ = this.setting.asObservable();
    this.recentDeleted$ = this.recentDeleted.asObservable();
    this.settingsLoaded$ = this.settingsLoaded.asObservable();
    this.cartChange$ = this.cartChange.asObservable();
    this.wishListUpdate$ = this.wishListUpdate.asObservable();
    this.showAd$ = this.showAd.asObservable();
    this.openThankYouPage$ = this.openThankYouPage.asObservable();
    this.openSubcategoryPage$ = this.openSubcategoryPage.asObservable();
    this.countryChange$ = this.countryChange.asObservable();
    this.stateChange$ = this.stateChange.asObservable();
    this.cardScratched$ = this.cardScratched.asObservable();
    this.updateSideMenu$ = this.updateSideMenu.asObservable();

  }

  public publish(eventName, eventData: any) {

    if (eventName == "openCategoryPage") this.openCategoryPage.next(eventData);
    if (eventName == "openDeepLink") this.openDeepLink.next(eventData);
    if (eventName == "openHomePage") this.openHomePage.next(eventData);
    if (eventName == "openShippingAddressPage") this.openShippingAddressPage.next(eventData);
    if (eventName == "setting") this.setting.next(eventData);
    if (eventName == "settingsLoaded") this.settingsLoaded.next(eventData);
    if (eventName == "recentDeleted") this.recentDeleted.next(eventData);
    if (eventName == "cartChange") this.cartChange.next(eventData);
    if (eventName == "wishListUpdate") this.wishListUpdate.next(eventData);
    if (eventName == "showAd") this.showAd.next(eventData);
    if (eventName == "openThankYouPage") this.openThankYouPage.next(eventData);
    if (eventName == "openSubcategoryPage") this.openSubcategoryPage.next(eventData);
    if (eventName == "countryChange") this.countryChange.next(eventData);
    if (eventName == "stateChange") this.stateChange.next(eventData);
    if (eventName == "cardScratched") this.cardScratched.next(eventData);
    if (eventName == "updateSideMenu") this.updateSideMenu.next(eventData);


  }

  public subscribe(eventName) {
    if (eventName == "openCategoryPage") return { subscriptions: this.subscriptions, event: this.openCategoryPage$ }
    if (eventName == "openDeepLink") return { subscriptions: this.subscriptions, event: this.openDeepLink$ }
    if (eventName == "openHomePage") return { subscriptions: this.subscriptions, event: this.openHomePage$ }
    if (eventName == "setting") return { subscriptions: this.subscriptions, event: this.setting$ }
    if (eventName == "settingsLoaded") return { subscriptions: this.subscriptions, event: this.settingsLoaded$ }
    if (eventName == "recentDeleted") return { subscriptions: this.subscriptions, event: this.recentDeleted$ }
    if (eventName == "cartChange") return { subscriptions: this.subscriptions, event: this.cartChange$ }
    if (eventName == "wishListUpdate") return { subscriptions: this.subscriptions, event: this.wishListUpdate$ }
    if (eventName == "showAd") return { subscriptions: this.subscriptions, event: this.showAd$ }
    if (eventName == "openShippingAddressPage") return { subscriptions: this.subscriptions, event: this.openShippingAddressPage$ }
    if (eventName == "openThankYouPage") return { subscriptions: this.subscriptions, event: this.openThankYouPage$ }
    if (eventName == "openSubcategoryPage") return { subscriptions: this.subscriptions, event: this.openSubcategoryPage$ }
    if (eventName == "countryChange") return { subscriptions: this.subscriptions, event: this.countryChange$ }
    if (eventName == "stateChange") return { subscriptions: this.subscriptions, event: this.stateChange$ }
    if (eventName == "cardScratched") return { subscriptions: this.subscriptions, event: this.cardScratched$ }
    if (eventName == "updateSideMenu") return { subscriptions: this.subscriptions, event: this.updateSideMenu$ }

  }
}
