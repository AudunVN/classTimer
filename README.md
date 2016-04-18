# classTimer
Applies a class to selected elements before and/or after a given time.
# Usage
- Add classTimer.js
- Set the times for adding the hideAfter, hiddenAfter, showAfter and shownAfter classes by setting the showAfter and hideAfter data attributes on each element to the appropriate Unix timestamp.
- Assign styles to the classTimer classes; one example use case is shown below:
  - .hiddenAfter, .hiddenBefore {display: none !important;}
  - .shownAfter, .shownBefore {display: block;}
