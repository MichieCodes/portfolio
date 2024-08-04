export function clock(delay : number) {
  return new Promise(function(res) {setTimeout(res, delay)});
}
