
module.exports = function formatString(string) {

  // Format string:
  // - to lower case
  // - replace spaces with '-'
  // - remove special characters
  let formattedString =
    string.toLowerCase().replaceAll(' ', '-')
      .replaceAll(/[.,\/#!'?$%\^&\*;:{}=\_`~()]/g,"");

  return formattedString;
}