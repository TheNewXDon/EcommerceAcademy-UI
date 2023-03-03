import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {

  goUp() {
    setTimeout(
      () => {
        document.getElementById("header")!.scrollIntoView({
          behavior: "smooth",
          block: "start",
          inline: "nearest"
        });
      },500
    )

  }
}
