import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';

@NgModule({
  declarations: [AppComponent], // ✅ إزالة RegisterComponent من هنا لأنه Standalone
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule, 
    RegisterComponent // ✅ إضافته هنا
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
