const colorTabler = (fr, unt) => {
  let separator = (unt - fr)/ 10
  let s = fr
  let opac = 0
  let res = []
  let i = 0
  while(i++ < 10){
    res.push({val: s, opa: opac})
    s += separator
    opac += 1/10
  }
  return res
}
export default colorTabler
