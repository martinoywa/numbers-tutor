/*

PRODUCT  : DRAWER,
DEVELOPER: AIM MIKEL,
MODIFIED : 03/10/2020,
LICENSE  : MIT,
COPYRIGHT: 2020 AIM MIKEL

___________________OFFICIAL LOGO___________________
___________________________________________________
_________________________0_________________________
________________________000________________________
_______________________00000_______________________
______________________0000000______________________
________________0____0000_0000____0________________
_______________000__0000___0000__000_______________
______________0000 0000_____0000 0000______________
_____________0000 0000_______0000 0000_____________
____________0000 0000_________0000 0000____________
___________0000 0000 0______ 0 0000 0000___________
__________0000 0000 000_____000 0000 0000__________
_________0000 0000__0000___0000__0000 0000_________
_____________0000____0000_0000____0000_____________
____________0000______0000000______0000____________
___________0000________00000________0000___________
__________0000__________000__________0000__________
_________________________0_________________________
___________________________________________________
*/

/**
 * You can include this file after you have included drawer.js file in your html page.
 * This file was added here to show an example of how you can set and interact with drawer.js.
 */

/**
 * The drawer.setBackground() function accepts a string argument consisting of any color value format.
 * Accepted formats are color names eg(white), hexadecimal eg(#00FF99) and rgb e.g(rgb(32,32,53)).
 * This function sets the background of each canvas in document.
 * If this function is called when the canvas is already written on, it will delete all the canvas drawings.
 * The values can come from a user input or something like that.
 */
drawer.setBackground("#cccccc");

/**
 * The drawer.setColor() function accepts a string argument consisting of any color value format.
 * Accepted formats are color names eg(white), hexadecimal eg(#00FF99) and rgb e.g(rgb(32,32,53)).
 * This function sets the drawing color or rather the pen color.
 * If this function is called when the canvas is already written on,
 * it will on change the color when you next write on the canvas.
 * The values can come from a user input or something like that.
 */
drawer.setColor("#000000");

/**
 * The drawer.getImages() method accepts two arguments which are both optional
 * The first argumnet is the image type. This is how you want your image to be saved as.
 * Valid values include "image/png" or "image/jpeg". Default values is image/png.
 * Be informed that jpeg images do not accept transparent backgrounds or rather they do not accept alpha value images.
 * The second argument is a boolean value of whether to save the images in the Download directory.
 * Valid values are true or false. Default is true.
 *
 * This function returns a new promise which is resolved when all the images have been fetched.
 * The resolve function executor accepts one argument which is the data url images that was returned
 * from the canvases in array format.
 * If you want to convert the images to blob, user drawer.toBlob() method.
 * The function is rejected when there is an error.
 */
drawer
  .getImages("image/png", true)
  .then(function (imgs) {})
  .catch(function (err) {
    alert(err);
  });

/**
 * The drawr.toBlob() method takes one argument, the image to be converted to blob as data url.
 * The function is resolved once the image have been converted.
 * The resolve function executor accepts one argument which is the blob object representing the conveted image.
 * The function is rejected when there was an error converting the image.
 */
drawer
  .toBlob()
  .then(function (blob) {})
  .catch(function (err) {
    alert(err);
  });
