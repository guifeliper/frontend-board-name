export default function generateFakeEmail(): string {
  var strValues = "abcdefghijklmno";
  var strEmail = "";
  var strTmp;

  // Name
  for (var i = 0; i < 6; i++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strTmp = "";
  strEmail = strEmail + "@";

  //Provider
  for (var j = 0; j < 4; j++) {
    strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
    strEmail = strEmail + strTmp;
  }
  strEmail = strEmail + ".com";
  return strEmail;
}
