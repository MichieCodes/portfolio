export function AnimateElement(el : HTMLElement, cb : Function, className : string, animationName = className) : void {
  el.classList.add(className);

  let onAnimationEnd = function(e : AnimationEvent) {
    if(e.animationName === animationName) {
      cb();
      el.removeEventListener('animationend', onAnimationEnd);
    }
  }

  el.addEventListener('animationend', onAnimationEnd);
}