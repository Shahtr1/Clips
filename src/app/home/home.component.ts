import { AfterViewInit, Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements AfterViewInit {
  isMusicPlaying = false;

  musicControlButton?: HTMLVideoElement;

  ngAfterViewInit(): void {
    this.musicControlButton = document.getElementById(
      'videoElement'
    ) as HTMLVideoElement;
  }

  play() {
    this.isMusicPlaying = !this.isMusicPlaying;
    if (this.musicControlButton) this.musicControlButton.play();
  }

  pause() {
    this.isMusicPlaying = !this.isMusicPlaying;

    if (this.musicControlButton) this.musicControlButton.pause();
  }
}
