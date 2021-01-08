function position(el) {
  var rect = el.getBoundingClientRect(),
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  return { top: rect.top + scrollTop, left: rect.left + scrollLeft }
}

export function resumeScrollControl(y) {
  if (!process.browser) return 'questions';
  
  let breakpointId = ['questions', 'working-experience', 'projects', 'education', 'skills']
  let breakpoints = [];

  let chomtanaAnchor = window.document.getElementById('chomtana');

  if (chomtanaAnchor && chomtanaAnchor.offsetParent) {
    breakpointId.unshift("chomtana")
  }

  if (y <= 0) return breakpointId[0];

  let firstTop = position(window.document.getElementById(breakpointId[0])).top;

  for (let id of breakpointId) {
    breakpoints.push(position(window.document.getElementById(id)).top - firstTop);
  }

  breakpoints.push(100000000);

  for (let i = 0; i < breakpoints.length - 1; i++) {
    if (breakpoints[i] <= y && y <= breakpoints[i+1]) return breakpointId[i];
  }
}