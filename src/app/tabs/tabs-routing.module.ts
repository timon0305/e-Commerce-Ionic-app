import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const productDetailPage = {
  path: 'product-detail/:id', loadChildren: () => import('../product-detail/product-detail.module').then(m => m.ProductDetailPageModule)
};
const productsPage = {
  path: 'products/:id/:name/:type', loadChildren: () => import('../products/products.module').then(m => m.ProductsPageModule)
};

const reviewPage = {
  path: 'reviews/:id', loadChildren: () => import('../reviews/reviews.module').then(m => m.ReviewsPageModule)
};
const addReviewPage = {
  path: 'add-review/:id', loadChildren: () => import('../add-review/add-review.module').then(m => m.AddReviewPageModule)
};
const storePage = {
  path: 'store/:id', loadChildren: () => import('../store/store.module').then(m => m.StorePageModule)
};
const categories = {
  path: 'categories/:parent/:name', loadChildren: () => import('../categorie-pages/categories/categories.module').then(m => m.CategoriesPageModule)
};
const categories2 =
{
  path: 'categories2/:parent/:name', loadChildren: () => import('../categorie-pages/categories2/categories2.module').then(m => m.Categories2PageModule)
};
const categories3 =
{
  path: 'categories3/:parent/:name', loadChildren: () => import('../categorie-pages/categories3/categories3.module').then(m => m.Categories3PageModule)
};
const categories4 =
{
  path: 'categories4/:parent/:name', loadChildren: () => import('../categorie-pages/categories4/categories4.module').then(m => m.Categories4PageModule)
};
const categories5 = {
  path: 'categories5/:parent/:name', loadChildren: () => import('../categorie-pages/categories5/categories5.module').then(m => m.Categories5PageModule)
};
const categories6 =
{
  path: 'categories6/:parent/:name', loadChildren: () => import('../categorie-pages/categories6/categories6.module').then(m => m.Categories6PageModule)
};

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home/home.module').then(m => m.HomePageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home2',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home2/home2.module').then(m => m.Home2PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home3',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home3/home3.module').then(m => m.Home3PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home4',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home4/home4.module').then(m => m.Home4PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home5',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home5/home5.module').then(m => m.Home5PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage,
          categories6
        ]
      },
      {
        path: 'home6',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home6/home6.module').then(m => m.Home6PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6
        ]
      },
      {
        path: 'home7',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home7/home7.module').then(m => m.Home7PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home8',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home8/home8.module').then(m => m.Home8PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'home9',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home9/home9.module').then(m => m.Home9PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6
        ]
      },
      {
        path: 'home10',
        children: [
          {
            path: '', loadChildren: () => import('../home-pages/home10/home10.module').then(m => m.Home10PageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage, productsPage, categories, categories2, categories3, categories4, categories5, categories6
        ]
      },

      {
        path: 'categories',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories/categories.module').then(m => m.CategoriesPageModule)
          },
          categories, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },
      {
        path: 'categories2',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories2/categories2.module').then(m => m.Categories2PageModule)
          },
          categories2, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },
      {
        path: 'categories3',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories3/categories3.module').then(m => m.Categories3PageModule)
          },
          categories3, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },
      {
        path: 'categories4',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories4/categories4.module').then(m => m.Categories4PageModule)
          },
          categories4, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },
      {
        path: 'categories5',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories5/categories5.module').then(m => m.Categories5PageModule)
          },
          categories5, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },
      {
        path: 'categories6',
        children: [
          {
            path: '', loadChildren: () => import('../categorie-pages/categories6/categories6.module').then(m => m.Categories6PageModule)
          },
          categories6, productDetailPage, addReviewPage, storePage, reviewPage, productsPage
        ]
      },

      {
        path: 'cart',
        children: [
          {
            path: '', loadChildren: () => import('../cart/cart.module').then(m => m.CartPageModule)
          },
          {
            path: 'order', loadChildren: () => import('../order/order.module').then(m => m.OrderPageModule)
          },

          {
            path: 'shipping-method', loadChildren: () => import('../shipping-method/shipping-method.module').then(m => m.ShippingMethodPageModule)
          },
          {
            path: 'thank-you', loadChildren: () => import('../thank-you/thank-you.module').then(m => m.ThankYouPageModule)
          },
          {
            path: 'billing-address', loadChildren: () => import('../address-pages/billing-address/billing-address.module').then(m => m.BillingAddressPageModule)
          },
          {
            path: 'shipping-address', loadChildren: () => import('../address-pages/shipping-address/shipping-address.module').then(m => m.ShippingAddressPageModule)
          },
          productDetailPage
        ]
      },
      {
        path: 'search',
        children: [
          {
            path: '', loadChildren: () => import('../search/search.module').then(m => m.SearchPageModule)
          },
          productDetailPage, addReviewPage, storePage, reviewPage,
          productsPage
        ]
      },
      {
        path: 'settings',
        children: [
          {
            path: '', loadChildren: () => import('../settings/settings.module').then(m => m.SettingsPageModule)
          },
          {
            path: 'my-orders', loadChildren: () => import('../my-orders/my-orders.module').then(m => m.MyOrdersPageModule)
          },
          {
            path: 'my-account', loadChildren: () => import('../my-account/my-account.module').then(m => m.MyAccountPageModule)
          },
          {
            path: 'news', loadChildren: () => import('../news/news.module').then(m => m.NewsPageModule)
          },
          {
            path: 'news-detail', loadChildren: () => import('../news-detail/news-detail.module').then(m => m.NewsDetailPageModule)
          },
          {
            path: 'news-list/:id/:name', loadChildren: () => import('../news-list/news-list.module').then(m => m.NewsListPageModule)
          },
          {
            path: 'wish-list', loadChildren: () => import('../wish-list/wish-list.module').then(m => m.WishListPageModule)
          },
          {
            path: 'addresses', loadChildren: () => import('../address-pages/addresses/addresses.module').then(m => m.AddressesPageModule)
          },
          {
            path: 'my-order-detail', loadChildren: () => import('../my-order-detail/my-order-detail.module').then(m => m.MyOrderDetailPageModule)
          },
          {
            path: 'intro', loadChildren: () => import('../intro/intro.module').then(m => m.IntroPageModule)
          },
          {
            path: 'contact-us', loadChildren: () => import('../contact-us/contact-us.module').then(m => m.ContactUsPageModule)
          },
          {
            path: 'about-us', loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsPageModule)
          },
          {
            path: 'downloads', loadChildren: () => import('../downloads/downloads.module').then(m => m.DownloadsPageModule)
          },
          {
            path: 'notifications', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          },
          {
            path: 'reward-points', loadChildren: () => import('../reward-points/reward-points.module').then(m => m.RewardPointsPageModule)
          },
          {
            path: 'scratch-card', loadChildren: () => import('../notifications/notifications.module').then(m => m.NotificationsPageModule)
          },
          productDetailPage
        ]
      },

      // {
      //   path: '',
      //   redirectTo: '/tabs/home',
      //   pathMatch: 'full'
      // }
    ]
  },
  // {
  //   path: '',
  //   redirectTo: '/tabs/home',
  //   pathMatch: 'full'
  // }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {
}
