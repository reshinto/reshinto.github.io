export const capsStr = (oldStr) => {
  const strArr = oldStr.split(/(?=[A-Z])/);
  const newStrArr = [];
  strArr.forEach(strElement => {
    newStrArr.push(strElement.charAt(0).toUpperCase() + strElement.slice(1));
  });
  return newStrArr.join(" ");
}
