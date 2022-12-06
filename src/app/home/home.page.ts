import { Component } from '@angular/core';
import { Screenshot } from '@ionic-native/screenshot';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  sImg: any;
  constructor(private screenshot: Screenshot) {}

  takeScreenshot(){
    this.screenshot.URI(80)
    .then((res) => {
      this.sImg = res.Uri;
      console.log(this.sImg);
    },
    () => {
      alert("screenshot failed");
    }

    );
  }
}
