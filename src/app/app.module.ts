import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ImagekitioAngularModule } from 'imagekitio-angular';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    ImagekitioAngularModule.forRoot({
    publicKey : "public_xrkpsuyG/dsafuiPH5ucatnYJ2M=",          
    urlEndpoint:"https://ik.imagekit.io/o9u6eekscu",  
    // authenticationEndpoint: "http://localhost:4200/"  ,       
    authenticationEndpoint: "http://www.yourserver.com/auth",
   
    
   })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
