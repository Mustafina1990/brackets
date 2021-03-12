module.exports = function check(str, bracketsConfig) {
  let current = 0;
  let deleteBr = () => {
    current = str.length;
    bracketsConfig.forEach(element => str = str.replace(element.join(""), ""));
    if (current !== str.length) deleteBr();
  };
  deleteBr();
  return !str;
}
