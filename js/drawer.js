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

(function (root, factory) {
  if (typeof exports === "object" && typeof module === "object") {
    /**
     * For environments that do not have a `window` with a `document`
     * (such as node.js) expose a factory as module exports.
     */
    module.exports = factory();
  } else if (typeof define === "function" && define.amd) {
    /**
     * AMD. Register as an anonymous module.
     */
    define(["drawer"], factory);
  } else if (typeof exports === "object") {
    /**
     * Export
     */
    exports["drawer"] = factory();
  } else {
    /**
     * For a commonJS and CommonJS-like environments where a proper `window` is present,
     * execute the factory and get drawer.
     */
    root["drawer"] = factory();
  }
})(this, function () {
  let mousedown = false,
    domWidth = window.innerWidth,
    domHeight = window.innerHeight,
    color = "black",
    bg = "white";

  /**
   * Checks whether a given variable is a string.
   * @param {*} v the variable to check.
   * @returns {boolean} returns true if variable is a string otherwise false.
   */
  function isString(v) {
    return typeof v === "string";
  }

  /**
   * Checks if a variable is an array.
   * @param {*} v the variable to check.
   * @returns {boolean} true if variable is an array otherwise false.
   */
  function isArray(v) {
    return Array.isArray(v) || v instanceof Array;
  }

  /**
   * Checks if a given variable is an object.
   * @param {*} v the variable to check.
   * @returns {boolean} true if variable is an object otherwise false.
   */
  function isObject(v) {
    return typeof v === "object" && v !== null;
  }

  /**
   * Get the length of a given variable.
   * @param {*} v the variable to get its length.
   * @returns {int} returns an interger representing the length of the given variable.
   */
  function len(v) {
    if (isArray(v)) {
      return v.length;
    } else if (isObject(v)) {
      return Object.keys(v).length;
    } else if (isString(v)) {
      return v.length;
    }
    return 0;
  }

  /**
   * Selects and gets a single DOM Element. If multiple elements are found, the first one is returned.
   * @param {String | Object} sel string selector or an object representing the actual element.
   * @returns {object | null} returns an object representing the DOM Element or null if the element was not found.
   */
  function dom(sel) {
    return isString(sel) ? document.querySelector(sel) : sel;
  }

  /**
   * Selects and gets all the DOM Element with the given selector.
   * @param {*} sel string selector or an object representing the actual element.
   * @returns {array} returns an array containing the dom list.
   */
  function doms(sel) {
    return isString(sel) ? document.querySelectorAll(sel) : [sel];
  }

  /**
   * Sets or gets the attribute of the given element.
   * If the third parameter is not provided, the function will return the value of the given attribute.
   * When the third parameter is provided, the attribute will be set with the given value.
   * @param {String | Object} elem the element to get or set the attribute.
   * @param {String} attr the attribute of the element.
   * @param {String} val the value to set to the given attribute.
   * @returns {String} the value of the given attribute if the third parameter was not provided.
   */
  function attr(elem, attr, val) {
    if (arguments.length > 2) {
      elem = doms(elem);
      for (var i = 0, ii = len(elem); i < ii; i++) {
        elem[i].setAttribute(attr, val);
      }
    } else {
      return dom(elem).getAttribute(attr);
    }
  }

  /**
   * Sets an event listener to the given element(s).
   * @param {String | Object} elem the element to add an event listener to.
   * @param {String} evt the event to add.
   * @param {Function} callback a callback function to call when the event is triggered.
   */
  function on(elem, evt, callback) {
    elem = doms(elem);
    for (var i = 0, ii = len(elem); i < ii; i++) {
      callback.bind(elem[i]);
      elem[i].addEventListener(evt, callback, true);
    }
  }

  /**
   * Draws a line to the given canvas context.
   * @param {Object} ctx the canvas context to draw a line to.
   * @param {Object} pos an object containg the x and y positions to draw the line.
   */
  function draw(ctx, pos) {
    ctx.strokeStyle = color;
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  /**
   * Sets the canvases width and height respective to the current width and height of the window.
   */
  function resizeCanvas() {
    attr("canvas", "width", (domWidth - 100) / 4);
    attr("canvas", "height", domHeight - 210);
  }

  /**
   * Sets the color of the drawing canvas.
   * @param {String} c the color to set.
   */
  function setColor(c) {
    color = c;
  }

  /**
   * Sets the background color of the canvases.
   * @param {*} c the color to set as the background.
   */
  function setBackground(c) {
    bg = c;
    let canvases = doms("canvas");
    canvases.forEach((canvas) => {
      let ctx = canvas.getContext("2d");
      ctx.fillStyle = c;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    });
  }

  /**
   * Converts a given image url to Blob.
   * @param {*} dataurl the image to convert in data url form.
   * @returns {Promise} returns a new promise that is resolved when the conversion is over or rejected when there is an error.
   */
  function toBlob(dataurl) {
    return new Promise(function (resolve, reject) {
      try {
        if (!dataurl) {
          reject("You did not provide any image to convert");
          return;
        }
        let arr = dataurl.split(","),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
        while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
        }
        resolve(new Blob([u8arr], { type: mime }));
      } catch (e) {
        reject("There was an error converting image to blob" + e.message);
      }
    });
  }

  /**
   * Gets all the images from the canvases.
   * @param {String} type the type of the image you want to be saved as.
   * @param {Boolean} save whether to save the images in the `Downloads` directory.
   * @returns {Promise} returns a new promise that is resolved with an array of corresponding images as
   * data url when all the images has been fetched otherwise rejected when no canvas was found.
   */
  function getImages(type = "image/png", save = true) {
    return new Promise(function (resolve, reject) {
      let canvases = doms("canvas");
      let imgs = [];
      if (canvases) {
        canvases.forEach((canvas, pos) => {
          let url = canvas.toDataURL(type, 1);
          imgs[pos] = url;
          if (save) {
            let a = document.createElement("a");
            a.download = `drawer_${pos + 1}.${type == "image/png" ? "png" : "jpg"}`;
            a.href = url;
            a.click();
          }
        });
        resolve(imgs);
      } else {
        reject("Canvas was not found.");
      }
    });
  }

  /**
   * Set a mousedown event to each of the canvas and set the mousedown variable to true when
   * the event is triggered.
   */
  on("canvas", "mousedown", function (e) {
    e.preventDefault();
    mousedown = true;
  });

  /**
   * Set a mouseup event to each of the canvas and reset the mousedown variable to false when
   * the event is triggered.
   */
  on(document, "mouseup", function (e) {
    e.preventDefault();
    mousedown = false;
  });

  /**
   * Set the mouseout event to each of the canvas.
   * When the event is triggered, we will tell the canvas to begin a new path
   * next time we are drawing a line.
   */
  on("canvas", "mouseout", function (e) {
    this.getContext("2d").beginPath();
  });

  /**
   * Set the mouseup event to each of the canvas.
   * When the event is triggered, we will tell the canvas to begin a new path
   * next time we are drawing a line.
   */
  on("canvas", "mouseup", function (e) {
    this.getContext("2d").beginPath();
  });

  /**
   * Set the mousemove event to each of the canvas.
   * When the event is triggered, this means that we are moving the mouse over to any of the canvas.
   * We will grab the x and y position of the mouse respective to the target canvas.
   * We will then check if the mouse is down and draw a line to the canvas.
   */
  on("canvas", "mousemove", function (e) {
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;
    if (mousedown) {
      draw(this.getContext("2d"), { x, y });
    }
  });

  /**
   * Set the click event to the button.
   * When the button is clicked, we will save all the images from the canvas.
   */
  on("#saveBtn", "click", function () {
    getImages("image/png", true)
      .then(function (imgs) {
        console.log(imgs);
      })
      .catch(function (err) {
        alert(err);
      });
  });

  on(window, "resize", function () {
    (domWidth = window.innerWidth), (domHeight = window.innerHeight);
    resizeCanvas();
    setBackground(bg);
  });

  /**
   * Lets set the default width and height of the canvas.
   * and also set the background of the canvas.
   */
  resizeCanvas();
  setBackground(bg);

  return { getImages, toBlob, setBackground, setColor };
});
