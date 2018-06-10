import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ApolloModule, Apollo } from 'apollo-angular';
import { HttpLinkModule, HttpLink } from 'apollo-angular-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';


@NgModule({
  declarations: [
    AppComponent,
    ListComponent
  ],
  imports: [
  BrowserModule,
  HttpClientModule,
  ApolloModule,
  HttpLinkModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(
    apollo: Apollo,
    httpLink: HttpLink
  ) {
    apollo.create({
      /** In order to be able to pass a GraphQL server endpoint to httpLink.create({uri: '[URL]'}),
      We need to have a running GraphQL server available **/
      // link: httpLink.create({uri: '[URL]'}),
      link: httpLink.create({ uri: 'https://4rjnjnjvn9.lp.gql.zone/graphql'}),
      cache: new InMemoryCache()
    });
  }
}
