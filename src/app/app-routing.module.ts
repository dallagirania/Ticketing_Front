import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AcceuilComponent } from './acceuil/acceuil.component';
import { SupportComponent } from './support/support.component';
import { ClientComponent } from './client/client.component';
import { DevelopperComponent } from './developper/developper.component';
import { TicketComponent } from './ticket/ticket.component';
import { ProjetComponent } from './projet/projet.component';
import { AddClientComponent } from './add-client/add-client.component';
import { AddSupportComponent } from './add-support/add-support.component';
import { AddDevelopperComponent } from './add-developper/add-developper.component';
import { RegisterComponent } from './register/register.component';
import { AddProjetComponent } from './add-projet/add-projet.component';
import { ProfileComponent } from './profile/profile.component';
import { AddTicketComponent } from './add-ticket/add-ticket.component';
import { OptionComponent } from './option/option.component';
import { ModifierSuppComponent } from './modifier-supp/modifier-supp.component';
import { ModifierDevComponent } from './modifier-dev/modifier-dev.component';
import { ModifierClientComponent } from './modifier-client/modifier-client.component';
import { ModifTicketComponent } from './modif-ticket/modif-ticket.component';
import { AllModifComponent } from './all-modif/all-modif.component';
import { DetailComponent } from './detail/detail.component';
import { DetailDemandeComponent } from './detail-demande/detail-demande.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'acceuil',component:AcceuilComponent},
  {path:'support',component:SupportComponent},
  {path:'client',component:ClientComponent},
  {path:'developper',component:DevelopperComponent},
  {path:'ticket',component:TicketComponent},
  {path:'projet',component:ProjetComponent},
  {path:'addclient',component:AddClientComponent},
  {path:'addsupport',component:AddSupportComponent},
  {path:'adddev',component:AddDevelopperComponent},
  {path:'addprojet',component:AddProjetComponent},
  {path:'addticket',component:AddTicketComponent},
  {path:'register',component:RegisterComponent},
  {path:'profile/:id',component:ProfileComponent},
  {path:'option/:id',component:OptionComponent},
  {path:'ModifierSupp/:id',component:ModifierSuppComponent},
  {path:'ModifierTicket/:id',component:ModifTicketComponent},
  {path:'ModifierDev/:id',component:ModifierDevComponent},
  {path:'ModifierClient/:id',component:ModifierClientComponent},
  {path:'allmofid/:id',component:AllModifComponent},
  {path:'detail/:id',component:DetailComponent},
  {path:'detailDemande/:id',component:DetailDemandeComponent},
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
