import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { LoginPageModule } from '../pages/login/login.module';

import { NewsFeedPage } from '../pages/news-feed/news-feed';
import { NewsFeedPageModule } from '../pages/news-feed/news-feed.module';

import { FingerprintAIO } from '@ionic-native/fingerprint-aio/ngx';
import { SettersandgettersProvider } from '../providers/settersandgetters/settersandgetters';
import { UtilityProvider } from '../providers/utility/utility';
import { ServiceProvider } from '../providers/service/service';

import { HeaderComponent } from '../components/header/header';
import { HeaderComponentModule } from '../components/header/header.module';
import { ScrollableTabs } from '../components/scrollable-tabs/scrollable-tabs';
import { HttpModule, Http } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { FileChooser } from '@ionic-native/file-chooser';
import { IOSFilePicker } from '@ionic-native/file-picker';
import { FilePath } from '@ionic-native/file-path';
import { File } from '@ionic-native/file/ngx';
import { Chooser } from '@ionic-native/chooser/ngx';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { Loader } from '../providers/loader/loader';
import { Alert } from '../providers/alert/alert';
import { Base64 } from '@ionic-native/base64';
import { DatePicker } from '@ionic-native/date-picker';
import { Calendar } from '@ionic-native/calendar';
import { Ionic2RatingModule } from 'ionic2-rating';
import { ProgressBarComponent } from '../components/progress-bar/progress-bar';
import { ProgressBarComponentModule } from '../components/progress-bar/progress-bar.module';

import { IonicStorageModule } from '@ionic/storage';
import { Device } from '@ionic-native/device';
import { FileOpener } from '@ionic-native/file-opener/ngx';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@NgModule({
  declarations: [
    MyApp,
    ScrollableTabs,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    LoginPageModule,
    HttpModule,
    HttpClientModule,
    Ionic2RatingModule,
    ProgressBarComponentModule,
    IonicStorageModule.forRoot(),
    NewsFeedPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    ProgressBarComponent,
    NewsFeedPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SettersandgettersProvider,
    FingerprintAIO,
    UtilityProvider,
    ServiceProvider,
    FileChooser,
    IOSFilePicker,
    FilePath,
    File,
    Chooser,
    Camera,
    Loader,
    Alert,
    Base64,
    DatePicker,
    Calendar,
    Device,
    FileOpener,
    InAppBrowser
  ]
})
export class AppModule {}
