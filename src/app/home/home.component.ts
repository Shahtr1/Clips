import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  isMusicPlaying = false;

  @ViewChild('videoElement', { static: true }) target?: ElementRef;

  play() {
    this.isMusicPlaying = !this.isMusicPlaying;
    if (this.target) this.target.nativeElement.play();
  }

  pause() {
    this.isMusicPlaying = !this.isMusicPlaying;

    if (this.target) this.target.nativeElement.pause();
  }
}
