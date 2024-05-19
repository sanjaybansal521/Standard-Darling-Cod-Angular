import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features171',
  templateUrl: 'features171.component.html',
  styleUrls: ['features171.component.css'],
})
export class Features171 {
  @Input()
  feature1Slogan: string =
    'Connect with strangers worldwide through video chats'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1484712401471-05c7215830eb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2MXw&ixlib=rb-4.0.3&q=80&w=1400'
  @Input()
  feature1Description: string =
    'Experience the thrill of meeting new people and making friends through our random video chat feature.'
  @Input()
  feature1Title: string = 'Make new friends'
  @Input()
  feature1ImageAlt: string = 'Random Video Chats Image'
  constructor() {}
}
