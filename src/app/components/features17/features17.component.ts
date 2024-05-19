import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features17',
  templateUrl: 'features17.component.html',
  styleUrls: ['features17.component.css'],
})
export class Features17 {
  @Input()
  feature1Title: string = 'Make Connections'
  @Input()
  feature1Slogan: string = 'Connect with strangers through video chats'
  @Input()
  feature1Description: string =
    'Experience the thrill of meeting new people from around the world through live video chats.'
  @Input()
  feature1ImageAlt: string = 'Random Video Chats Image'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1604881990409-b9f246db39da?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
