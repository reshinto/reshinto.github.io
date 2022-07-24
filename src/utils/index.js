export function formatTitle(s) {
  let result = s.split("-").map((e) => e.toLowerCase());
  if (result.length <= 1) {
    result = s.split("_").map((e) => e.toLowerCase());
  }
  if (result.length <= 1) {
    let temp = s.replace(/([a-z])([A-Z])/g, "$1 $2").toLowerCase();
    result = temp.split(" ");
  }
  if (result.length > 1) {
    result = result.map((e) => capitalizeStr(e)).join(" ");
  } else {
    result = capitalizeStr(s);
  }
  return result;
}

export function capitalizeStr(s) {
  return s[0].toUpperCase() + s.slice(1);
}
