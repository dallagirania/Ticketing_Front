import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { ClientComponent } from './client/client.component';
import { DevelopperComponent } from './developper/developper.component';
import { SupportComponent } from './support/support.component';
import { TicketComponent } from './ticket/ticket.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ProjetComponent } from './projet/projet.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddSupportComponent } from './add-support/add-support.component';
import { AddDevelopperComponent } from './add-developper/add-developper.component';
import { RegisterComponent } from './register/register.component';
import { NgToastModule } from 'ng-angular-popup';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
// import { CKEditorModule } from 'ng2-ckeditor';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { OptionComponent } from './option/option.component';
import { HeaderComponent } from './header/header.component';
import { ModifierDevComponent } from './modifier-dev/modifier-dev.component';
import { ModifierSuppComponent } from './modifier-supp/modifier-supp.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ModifTicketComponent } from './modif-ticket/modif-ticket.component';
import { AllModifComponent } from './all-modif/all-modif.component';
import { DetailComponent } from './detail/detail.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AcceuilComponent,
    ClientComponent,
    DevelopperComponent,
    SupportComponent,
    TicketComponent,
    SidebarComponent,
    ProjetComponent,
    AddClientComponent,
    AddSupportComponent,
    AddDevelopperComponent,
    RegisterComponent,
    AddProjetComponent,
    ProfileComponent,
    AddTicketComponent,
    OptionComponent,
    HeaderComponent,
    ModifierDevComponent,
    ModifierSuppComponent,
    ModifierClientComponent,
    ModifTicketComponent,
    AllModifComponent,
    DetailComponent,
    DetailDemandeComponent
  ],
  imports: [
    BrowserModule,
    Ng2SearchPipeModule,
    NgToastModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CKEditorModule,
    NgxPaginationModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
