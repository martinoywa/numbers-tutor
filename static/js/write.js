(function (root, factory) {
  root.aim = factory();
})(this, function () {
  let mousedown = false,
    domWidth = 0,
    domHeight = 0;
  function isString(v) {
    return typeof v === "string";
  }

  function isArray(v) {
    return Array.isArray(v) || v instanceof Array;
  }

  function isObject(v) {
    return typeof v === "object" && v !== null;
  }

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

  function dom(sel) {
    return isString(sel) ? document.querySelector(sel) : sel;
  }

  function doms(sel) {
    return isString(sel) ? document.querySelectorAll(sel) : [sel];
  }

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

  function on(elem, evt, callback) {
    elem = doms(elem);
    for (var i = 0, ii = len(elem); i < ii; i++) {
      callback.bind(elem[i]);
      elem[i].addEventListener(evt, callback, true);
    }
  }

  function draw(ctx, pos) {
    ctx.strokeStyle = "#000000";
    ctx.lineWidth = 20;
    ctx.lineCap = "round";
    ctx.lineTo(pos.x, pos.y);
    ctx.stroke();
  }

  function resizeCanvas() {
    attr("canvas", "width", (domWidth - 100) / 4);
    attr("canvas", "height", domHeight - 210);
  }

  on("canvas", "mousedown", function (e) {
    e.preventDefault();
    mousedown = true;
  });

  on(document, "mouseup", function (e) {
    e.preventDefault();
    mousedown = false;
  });

  on("canvas", "mouseout", function (e) {
    this.getContext("2d").beginPath();
  });

  on("canvas", "mouseup", function (e) {
    this.getContext("2d").beginPath();
  });

  on("canvas", "mousemove", function (e) {
    e.preventDefault();
    let x = e.offsetX;
    let y = e.offsetY;
    if (mousedown) {
      draw(this.getContext("2d"), { x, y });
    }
  });

  domWidth = window.innerWidth;
  domHeight = window.innerHeight;

  resizeCanvas();
});
