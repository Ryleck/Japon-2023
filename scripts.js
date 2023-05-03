/**
 * Created by phili on 2023-05-01.
 */
import 'https://flackr.github.io/scroll-timeline/dist/scroll-timeline.js';

const animateTitle = document.querySelector("#divTitle");

const animatedTitleTimeline = new ScrollTimeline({
    
    scrollOffsets: [CSS.percent(0), CSS.percent(100)]
});

animateTitle.animate({
    transform: ['height(1)','height(0)']
});