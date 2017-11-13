import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { routes } from './app.router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { RealmComponent } from './realm/realm.component';
import { CharacterInfoComponent } from './character-info/character-info.component';
import { PvpTopComponent } from './pvp-top/pvp-top.component';
import { SearchGuildComponent } from './search-guild/search-guild.component';
import { SearchCharacterComponent } from './search-character/search-character.component';
import { HttpModule } from '@angular/http';
import { GetService } from './get.service';
import { FormsModule } from '@angular/forms';
import { NgxPaginationModule} from 'ngx-pagination';
import { GuildInfoComponent } from './guild-info/guild-info.component';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    RealmComponent,
    CharacterInfoComponent,
    PvpTopComponent,
    SearchGuildComponent,
    SearchCharacterComponent,
    GuildInfoComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routes,
    HttpModule,
    FormsModule,
    NgxPaginationModule
  ],
  providers: [GetService],
  bootstrap: [AppComponent]
})
export class AppModule { }
