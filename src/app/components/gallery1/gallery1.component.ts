import { Component, Input } from '@angular/core'

@Component({
  selector: 'app-gallery1',
  templateUrl: 'gallery1.component.html',
  styleUrls: ['gallery1.component.css'],
})
export class Gallery1 {
  @Input()
  image2Src: string =
    'https://images.unsplash.com/photo-1560785218-893cc779709b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  image1Src: string =
    'https://images.unsplash.com/photo-1562428309-f97fc8e256e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2Mnw&ixlib=rb-4.0.3&q=80&w=1080'
  @Input()
  heading1: string = 'Explore Our Gallery'
  @Input()
  content1: string =
    'Check out some snapshots of our users enjoying video sync name website.'
  @Input()
  image1Alt: string = 'Image 1'
  @Input()
  image2Alt: string = 'Image 2'
  @Input()
  image3Alt: string = 'Image 3'
  @Input()
  image3Src: string =
    'https://images.unsplash.com/photo-1511632765486-a01980e01a18?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w5MTMyMXwwfDF8cmFuZG9tfHx8fHx8fHx8MTcxNjEzMjU2MXw&ixlib=rb-4.0.3&q=80&w=1080'
  constructor() {}
}
