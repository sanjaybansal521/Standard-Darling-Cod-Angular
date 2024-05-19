import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-cta1',
  templateUrl: 'cta1.component.html',
  styleUrls: ['cta1.component.css'],
})
export class CTA1 {
  @Input()
  action1: string = 'Start Connecting'
  @Input()
  action2: string = 'Join Now'
  @Input()
  heading1: string = 'Connect with Random People Worldwide'
  @Input()
  content1: string =
    'Join our platform to chat and video connect with people from around the globe. Experience the thrill of meeting new friends and expanding your social circle.'
  constructor() {}
}
