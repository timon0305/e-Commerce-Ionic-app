import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },

  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'about-us', loadChildren: './about-us/about-us.module#AboutUsPageModule' },
  { path: 'add-review/:id', loadChildren: './add-review/add-review.module#AddReviewPageModule' },
  { path: 'cart', loadChildren: './cart/cart.module#CartPageModule' },
  { path: 'contact-us', loadChildren: './contact-us/contact-us.module#ContactUsPageModule' },
  { path: 'downloads', loadChildren: './downloads/downloads.module#DownloadsPageModule' },
  { path: 'intro', loadChildren: './intro/intro.module#IntroPageModule' },
  { path: 'my-account', loadChildren: './my-account/my-account.module#MyAccountPageModule' },
  { path: 'my-orders', loadChildren: './my-orders/my-orders.module#MyOrdersPageModule' },
  { path: 'news', loadChildren: './news/news.module#NewsPageModule' },
  { path: 'news-detail', loadChildren: './news-detail/news-detail.module#NewsDetailPageModule' },
  { path: 'news-list/:id/:name', loadChildren: './news-list/news-list.module#NewsListPageModule' },
  { path: 'notifications', loadChildren: './notifications/notifications.module#NotificationsPageModule' },
  { path: 'order', loadChildren: './order/order.module#OrderPageModule' },
  { path: 'product-detail/:id', loadChildren: './product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'products/:id/:name/:type', loadChildren: './products/products.module#ProductsPageModule' },
  { path: 'reviews/:id', loadChildren: './reviews/reviews.module#ReviewsPageModule' },
  { path: 'reward-points', loadChildren: './reward-points/reward-points.module#RewardPointsPageModule' },
  { path: 'search', loadChildren: './search/search.module#SearchPageModule' },
  { path: 'settings', loadChildren: './settings/settings.module#SettingsPageModule' },
  { path: 'shipping-method', loadChildren: './shipping-method/shipping-method.module#ShippingMethodPageModule' },

  { path: 'store/:id', loadChildren: './store/store.module#StorePageModule' },

  { path: 'thank-you', loadChildren: './thank-you/thank-you.module#ThankYouPageModule' },
  { path: 'wish-list', loadChildren: './wish-list/wish-list.module#WishListPageModule' },
  { path: 'addresses', loadChildren: './address-pages/addresses/addresses.module#AddressesPageModule' },
  { path: 'billing-address', loadChildren: './address-pages/billing-address/billing-address.module#BillingAddressPageModule' },
  { path: 'shipping-address', loadChildren: './address-pages/shipping-address/shipping-address.module#ShippingAddressPageModule' },
  { path: 'categories/:parent/:name', loadChildren: './categorie-pages/categories/categories.module#CategoriesPageModule' },
  { path: 'categories2/:parent/:name', loadChildren: './categorie-pages/categories2/categories2.module#Categories2PageModule' },
  { path: 'categories3/:parent/:name', loadChildren: './categorie-pages/categories3/categories3.module#Categories3PageModule' },
  { path: 'categories4/:parent/:name', loadChildren: './categorie-pages/categories4/categories4.module#Categories4PageModule' },
  { path: 'categories5/:parent/:name', loadChildren: './categorie-pages/categories5/categories5.module#Categories5PageModule' },
  { path: 'categories6/:parent/:name', loadChildren: './categorie-pages/categories6/categories6.module#Categories6PageModule' },
  { path: 'home', loadChildren: './home-pages/home/home.module#HomePageModule' },
  { path: 'home2', loadChildren: './home-pages/home2/home2.module#Home2PageModule' },
  { path: 'home3', loadChildren: './home-pages/home3/home3.module#Home3PageModule' },
  { path: 'home4', loadChildren: './home-pages/home4/home4.module#Home4PageModule' },
  { path: 'home5', loadChildren: './home-pages/home5/home5.module#Home5PageModule' },
  { path: 'home6', loadChildren: './home-pages/home6/home6.module#Home6PageModule' },
  { path: 'home7', loadChildren: './home-pages/home7/home7.module#Home7PageModule' },
  { path: 'home8', loadChildren: './home-pages/home8/home8.module#Home8PageModule' },
  { path: 'home9', loadChildren: './home-pages/home9/home9.module#Home9PageModule' },
  { path: 'home10', loadChildren: './home-pages/home10/home10.module#Home10PageModule' },
  { path: 'my-order-detail', loadChildren: './my-order-detail/my-order-detail.module#MyOrderDetailPageModule' },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
