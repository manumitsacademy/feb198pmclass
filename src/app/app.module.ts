import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { AddStudentComponent } from './add-student/add-student.component';
import { LoginComponent } from './login/login.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    RegisterComponent,
    AddStudentComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      [
        {
          path:'abc',
          component:HomeComponent
        },
        {
          path:'xyz',
          component:AboutusComponent
        },
        {
          path:'reg',
          component:RegisterComponent
        },
        {
          path:'addStudent',
          component:AddStudentComponent
        }
      ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
