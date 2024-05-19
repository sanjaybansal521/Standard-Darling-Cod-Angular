import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-features18',
  templateUrl: 'features18.component.html',
  styleUrls: ['features18.component.css'],
})
export class Features18 {
  @Input()
  feature1Description: string =
    'Experience the thrill of meeting new people through random video chats. Connect instantly with individuals from around the world and make new friends.'
  @Input()
  feature1ImageSrc: string =
    'https://images.unsplash.com/photo-1588804748845-4457b097af26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  feature1ImageAlt: string = 'Video Chat Icon'
  @Input()
  feature1Title: string = 'Random Video Chats'
  @Input()
  feature1Slogan: string = 'Connect with Random People Worldwide'
  constructor() {}
}
