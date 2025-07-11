var Editor = Editor || {};
var skindex_url =
  window.location.protocol + "//" + window.location.hostname + "/";

/*
 * Mapping the minecraft skin
 */
Editor.Mapping = {
  skin32: {
    width: 64,
    height: 32,
    commands: [
      [40, 0, "top", "headOverlay"],
      [48, 0, "bottom", "headOverlay", !0],
      [32, 8, "right", "headOverlay"],
      [48, 8, "left", "headOverlay"],
      [40, 8, "front", "headOverlay"],
      [56, 8, "back", "headOverlay"],
      [8, 0, "top", "head"],
      [16, 0, "bottom", "head", !0],
      [0, 8, "right", "head"],
      [16, 8, "left", "head"],
      [8, 8, "front", "head"],
      [24, 8, "back", "head"],
      [20, 16, "top", "body"],
      [28, 16, "bottom", "body", !0],
      [16, 20, "right", "body"],
      [28, 20, "left", "body"],
      [20, 20, "front", "body"],
      [32, 20, "back", "body"],
      [4, 16, "top", "legR"],
      [8, 16, "bottom", "legR", !0],
      [8, 20, "left", "legR", !1, !1],
      [0, 20, "right", "legR", !1, !1],
      [4, 20, "front", "legR"],
      [12, 20, "back", "legR"],
      [4, 16, "top", "legL", !1, !0],
      [8, 16, "bottom", "legL", !0, !0],
      [8, 20, "right", "legL", !1, !0],
      [0, 20, "left", "legL", !1, !0],
      [4, 20, "front", "legL", !1, !0],
      [12, 20, "back", "legL", !1, !0],
      [44, 16, "top", "armR"],
      [48, 16, "bottom", "armR", !0],
      [48, 20, "left", "armR"],
      [40, 20, "right", "armR"],
      [44, 20, "front", "armR"],
      [52, 20, "back", "armR"],
      [44, 16, "top", "armL", !1, !0],
      [48, 16, "bottom", "armL", !0, !0],
      [48, 20, "right", "armL", !1, !0],
      [40, 20, "left", "armL", !1, !0],
      [44, 20, "front", "armL", !1, !0],
      [52, 20, "back", "armL", !1, !0],
    ],
  },
  skin64: {
    width: 64,
    height: 64,
    commands: [
      [40, 0, "top", "headOverlay"],
      [48, 0, "bottom", "headOverlay", !0],
      [32, 8, "right", "headOverlay"],
      [48, 8, "left", "headOverlay"],
      [40, 8, "front", "headOverlay"],
      [56, 8, "back", "headOverlay"],
      [8, 0, "top", "head"],
      [16, 0, "bottom", "head", !0],
      [0, 8, "right", "head"],
      [16, 8, "left", "head"],
      [8, 8, "front", "head"],
      [24, 8, "back", "head"],
      [20, 16, "top", "body"],
      [28, 16, "bottom", "body", !0],
      [16, 20, "right", "body"],
      [28, 20, "left", "body"],
      [20, 20, "front", "body"],
      [32, 20, "back", "body"],
      [20, 32, "top", "bodyOverlay"],
      [28, 32, "bottom", "bodyOverlay", !0],
      [16, 36, "right", "bodyOverlay"],
      [28, 36, "left", "bodyOverlay"],
      [20, 36, "front", "bodyOverlay"],
      [32, 36, "back", "bodyOverlay"],
      [4, 16, "top", "legR"],
      [8, 16, "bottom", "legR", !0],
      [8, 20, "left", "legR", !1, !1],
      [0, 20, "right", "legR", !1, !1],
      [4, 20, "front", "legR"],
      [12, 20, "back", "legR"],
      [4, 32, "top", "legROverlay"],
      [8, 32, "bottom", "legROverlay", !0],
      [8, 36, "left", "legROverlay", !1, !1],
      [0, 36, "right", "legROverlay", !1, !1],
      [4, 36, "front", "legROverlay"],
      [12, 36, "back", "legROverlay"],
      [44, 16, "top", "armR"],
      [48, 16, "bottom", "armR", !0],
      [48, 20, "left", "armR"],
      [40, 20, "right", "armR"],
      [44, 20, "front", "armR"],
      [52, 20, "back", "armR"],
      [44, 32, "top", "armROverlay"],
      [48, 32, "bottom", "armROverlay", !0],
      [48, 36, "left", "armROverlay"],
      [40, 36, "right", "armROverlay"],
      [44, 36, "front", "armROverlay"],
      [52, 36, "back", "armROverlay"],
      [4, 48, "top", "legLOverlay"],
      [8, 48, "bottom", "legLOverlay", !0],
      [8, 52, "left", "legLOverlay", !1, !1],
      [0, 52, "right", "legLOverlay", !1, !1],
      [4, 52, "front", "legLOverlay"],
      [12, 52, "back", "legLOverlay"],
      [20, 48, "top", "legL"],
      [24, 48, "bottom", "legL", !0],
      [24, 52, "left", "legL", !1, !1],
      [16, 52, "right", "legL", !1, !1],
      [20, 52, "front", "legL"],
      [28, 52, "back", "legL"],
      [36, 48, "top", "armL"],
      [40, 48, "bottom", "armL", !0],
      [40, 52, "left", "armL", !1, !1],
      [32, 52, "right", "armL", !1, !1],
      [36, 52, "front", "armL"],
      [44, 52, "back", "armL"],
      [52, 48, "top", "armLOverlay"],
      [56, 48, "bottom", "armLOverlay", !0],
      [56, 52, "left", "armLOverlay", !1, !1],
      [48, 52, "right", "armLOverlay", !1, !1],
      [52, 52, "front", "armLOverlay"],
      [60, 52, "back", "armLOverlay"],
    ],
  },
  skin64_3px: {
    width: 64,
    height: 64,
    commands: [
      [40, 0, "top", "headOverlay"],
      [48, 0, "bottom", "headOverlay", !0],
      [32, 8, "right", "headOverlay"],
      [48, 8, "left", "headOverlay"],
      [40, 8, "front", "headOverlay"],
      [56, 8, "back", "headOverlay"],
      [8, 0, "top", "head"],
      [16, 0, "bottom", "head", !0],
      [0, 8, "right", "head"],
      [16, 8, "left", "head"],
      [8, 8, "front", "head"],
      [24, 8, "back", "head"],
      [20, 16, "top", "body"],
      [28, 16, "bottom", "body", !0],
      [16, 20, "right", "body"],
      [28, 20, "left", "body"],
      [20, 20, "front", "body"],
      [32, 20, "back", "body"],
      [20, 32, "top", "bodyOverlay"],
      [28, 32, "bottom", "bodyOverlay", !0],
      [16, 36, "right", "bodyOverlay"],
      [28, 36, "left", "bodyOverlay"],
      [20, 36, "front", "bodyOverlay"],
      [32, 36, "back", "bodyOverlay"],
      [4, 16, "top", "legR"],
      [8, 16, "bottom", "legR", !0],
      [8, 20, "left", "legR", !1, !1],
      [0, 20, "right", "legR", !1, !1],
      [4, 20, "front", "legR"],
      [12, 20, "back", "legR"],
      [4, 32, "top", "legROverlay"],
      [8, 32, "bottom", "legROverlay", !0],
      [8, 36, "left", "legROverlay", !1, !1],
      [0, 36, "right", "legROverlay", !1, !1],
      [4, 36, "front", "legROverlay"],
      [12, 36, "back", "legROverlay"],
      [44, 16, "top", "armR"],
      [47, 16, "bottom", "armR", !0],
      [47, 20, "left", "armR"],
      [40, 20, "right", "armR"],
      [44, 20, "front", "armR"],
      [51, 20, "back", "armR"],
      [44, 32, "top", "armROverlay"],
      [47, 32, "bottom", "armROverlay", !0],
      [47, 36, "left", "armROverlay"],
      [40, 36, "right", "armROverlay"],
      [44, 36, "front", "armROverlay"],
      [51, 36, "back", "armROverlay"],
      [4, 48, "top", "legLOverlay"],
      [8, 48, "bottom", "legLOverlay", !0],
      [8, 52, "left", "legLOverlay", !1, !1],
      [0, 52, "right", "legLOverlay", !1, !1],
      [4, 52, "front", "legLOverlay"],
      [12, 52, "back", "legLOverlay"],
      [20, 48, "top", "legL"],
      [24, 48, "bottom", "legL", !0],
      [24, 52, "left", "legL", !1, !1],
      [16, 52, "right", "legL", !1, !1],
      [20, 52, "front", "legL"],
      [28, 52, "back", "legL"],
      [36, 48, "top", "armL"],
      [39, 48, "bottom", "armL", !0],
      [39, 52, "left", "armL", !1, !1],
      [32, 52, "right", "armL", !1, !1],
      [36, 52, "front", "armL"],
      [43, 52, "back", "armL"],
      [52, 48, "top", "armLOverlay"],
      [55, 48, "bottom", "armLOverlay", !0],
      [55, 52, "left", "armLOverlay", !1, !1],
      [48, 52, "right", "armLOverlay", !1, !1],
      [52, 52, "front", "armLOverlay"],
      [59, 52, "back", "armLOverlay"],
    ],
  },
  skin64_3px_switch: {
    width: 64,
    height: 64,
    commands: [
      [40, 0, "top", "headOverlay"],
      [48, 0, "bottom", "headOverlay", !0],
      [32, 8, "right", "headOverlay"],
      [48, 8, "left", "headOverlay"],
      [40, 8, "front", "headOverlay"],
      [56, 8, "back", "headOverlay"],
      [8, 0, "top", "head"],
      [16, 0, "bottom", "head", !0],
      [0, 8, "right", "head"],
      [16, 8, "left", "head"],
      [8, 8, "front", "head"],
      [24, 8, "back", "head"],
      [20, 16, "top", "body"],
      [28, 16, "bottom", "body", !0],
      [16, 20, "right", "body"],
      [28, 20, "left", "body"],
      [20, 20, "front", "body"],
      [32, 20, "back", "body"],
      [20, 32, "top", "bodyOverlay"],
      [28, 32, "bottom", "bodyOverlay", !0],
      [16, 36, "right", "bodyOverlay"],
      [28, 36, "left", "bodyOverlay"],
      [20, 36, "front", "bodyOverlay"],
      [32, 36, "back", "bodyOverlay"],
      [4, 16, "top", "legR"],
      [8, 16, "bottom", "legR", !0],
      [8, 20, "left", "legR", !1, !1],
      [0, 20, "right", "legR", !1, !1],
      [4, 20, "front", "legR"],
      [12, 20, "back", "legR"],
      [4, 32, "top", "legROverlay"],
      [8, 32, "bottom", "legROverlay", !0],
      [8, 36, "left", "legROverlay", !1, !1],
      [0, 36, "right", "legROverlay", !1, !1],
      [4, 36, "front", "legROverlay"],
      [12, 36, "back", "legROverlay"],
      [45, 16, "top", "armR"],
      [49, 16, "bottom", "armR", !0],
      [48, 20, "left", "armR"],
      [40, 20, "right", "armR"],
      [45, 20, "front", "armR"],
      [52, 20, "back", "armR"],
      [45, 32, "top", "armROverlay"],
      [49, 32, "bottom", "armROverlay", !0],
      [48, 36, "left", "armROverlay"],
      [40, 36, "right", "armROverlay"],
      [45, 36, "front", "armROverlay"],
      [52, 36, "back", "armROverlay"],
      [4, 48, "top", "legLOverlay"],
      [8, 48, "bottom", "legLOverlay", !0],
      [8, 52, "left", "legLOverlay", !1, !1],
      [0, 52, "right", "legLOverlay", !1, !1],
      [4, 52, "front", "legLOverlay"],
      [12, 52, "back", "legLOverlay"],
      [20, 48, "top", "legL"],
      [24, 48, "bottom", "legL", !0],
      [24, 52, "left", "legL", !1, !1],
      [16, 52, "right", "legL", !1, !1],
      [20, 52, "front", "legL"],
      [28, 52, "back", "legL"],
      [36, 48, "top", "armL"],
      [40, 48, "bottom", "armL", !0],
      [40, 52, "left", "armL", !1, !1],
      [32, 52, "right", "armL", !1, !1],
      [36, 52, "front", "armL"],
      [45, 52, "back", "armL"],
      [52, 48, "top", "armLOverlay"],
      [56, 48, "bottom", "armLOverlay", !0],
      [56, 52, "left", "armLOverlay", !1, !1],
      [48, 52, "right", "armLOverlay", !1, !1],
      [52, 52, "front", "armLOverlay"],
      [61, 52, "back", "armLOverlay"],
    ],
  },
  skin64_switch: {
    width: 64,
    height: 64,
    commands: [
      [40, 0, "top", "headOverlay"],
      [48, 0, "bottom", "headOverlay", !0],
      [32, 8, "right", "headOverlay"],
      [48, 8, "left", "headOverlay"],
      [40, 8, "front", "headOverlay"],
      [56, 8, "back", "headOverlay"],
      [8, 0, "top", "head"],
      [16, 0, "bottom", "head", !0],
      [0, 8, "right", "head"],
      [16, 8, "left", "head"],
      [8, 8, "front", "head"],
      [24, 8, "back", "head"],
      [20, 16, "top", "body"],
      [28, 16, "bottom", "body", !0],
      [16, 20, "right", "body"],
      [28, 20, "left", "body"],
      [20, 20, "front", "body"],
      [32, 20, "back", "body"],
      [20, 32, "top", "bodyOverlay"],
      [28, 32, "bottom", "bodyOverlay", !0],
      [16, 36, "right", "bodyOverlay"],
      [28, 36, "left", "bodyOverlay"],
      [20, 36, "front", "bodyOverlay"],
      [32, 36, "back", "bodyOverlay"],
      [4, 16, "top", "legR"],
      [8, 16, "bottom", "legR", !0],
      [8, 20, "left", "legR", !1, !1],
      [0, 20, "right", "legR", !1, !1],
      [4, 20, "front", "legR"],
      [12, 20, "back", "legR"],
      [4, 32, "top", "legROverlay"],
      [8, 32, "bottom", "legROverlay", !0],
      [8, 36, "left", "legROverlay", !1, !1],
      [0, 36, "right", "legROverlay", !1, !1],
      [4, 36, "front", "legROverlay"],
      [12, 36, "back", "legROverlay"],
      [43, 16, "top", "armR"],
      [46, 16, "bottom", "armR", !0],
      [47, 20, "left", "armR"],
      [40, 20, "right", "armR"],
      [43, 20, "front", "armR"],
      [51, 20, "back", "armR"],
      [43, 32, "top", "armROverlay"],
      [46, 32, "bottom", "armROverlay", !0],
      [47, 36, "left", "armROverlay"],
      [40, 36, "right", "armROverlay"],
      [43, 36, "front", "armROverlay"],
      [51, 36, "back", "armROverlay"],
      [4, 48, "top", "legLOverlay"],
      [8, 48, "bottom", "legLOverlay", !0],
      [8, 52, "left", "legLOverlay", !1, !1],
      [0, 52, "right", "legLOverlay", !1, !1],
      [4, 52, "front", "legLOverlay"],
      [12, 52, "back", "legLOverlay"],
      [20, 48, "top", "legL"],
      [24, 48, "bottom", "legL", !0],
      [24, 52, "left", "legL", !1, !1],
      [16, 52, "right", "legL", !1, !1],
      [20, 52, "front", "legL"],
      [28, 52, "back", "legL"],
      [36, 48, "top", "armL"],
      [39, 48, "bottom", "armL", !0],
      [39, 52, "left", "armL", !1, !1],
      [32, 52, "right", "armL", !1, !1],
      [36, 52, "front", "armL"],
      [42, 52, "back", "armL"],
      [52, 48, "top", "armLOverlay"],
      [55, 48, "bottom", "armLOverlay", !0],
      [55, 52, "left", "armLOverlay", !1, !1],
      [48, 52, "right", "armLOverlay", !1, !1],
      [52, 52, "front", "armLOverlay"],
      [58, 52, "back", "armLOverlay"],
    ],
  },
};
var controls;
var renderFunc;
var A, B, C, D;
var undoChange = [],
  redoChange = [];
var rightToggles = $(".right-toggles").is(":visible")
  ? $(".right-toggles")
  : $(".mobile-right-toggles");
var presetBlock = $("#pxs_mobile").is(":visible")
  ? $("#pxs_mobile")
  : $("#pxs");
var presetBlockString = $("#pxs_mobile").is(":visible")
  ? "#pxs_mobile"
  : "#pxs";
var faceColor;
var posC;
var cc = $("#color").val();
var posCur;
var clickT = 0;
var paintArr = [];
var paintArr2 = [[]];
var paintArr3 = [];
var clickedObj = [[]];
var switchAr = [];
var switchArr = [];
var darker = [];
var lighter = [];

var countT = localStorage.getItem("countT");
if (!countT) {
  countT = 0;
  localStorage.setItem("countT", countT);
}
var convArrToObj = function (array) {
  var thisEleObj = new Object();
  if (typeof array === "object") {
    for (var i in array) {
      var thisEle = convArrToObj(array[i]);
      thisEleObj[i] = thisEle;
    }
  } else {
    thisEleObj = array;
  }
  return thisEleObj;
};
var zoom = 0.02;
var redoT = 0;
var undoTrue = 0;
var undoClick;
var picker;
var conv;
var notSwitch = 0;
var uploadedIm = localStorage.getItem("uploadedImage");
if (!localStorage.getItem("selVal")) {
  var selVal = "4px";
  localStorage.setItem("selVal", selVal);
} else {
  var selVal = localStorage.getItem("selVal");
}

if (!localStorage.getItem("pxsSel")) {
  var pxsSel = "4px";
  localStorage.setItem("pxsSel", pxsSel);
} else {
  var pxsSel = localStorage.getItem("pxsSel");
}

var pArr = localStorage.getItem("paintArr");
if (!localStorage.getItem("paintArr")) {
  var output = JSON.stringify(convArrToObj(paintArr));
  localStorage.setItem("paintArr", output);
}
if (typeof uploadedIm !== "undefined") {
  var selVal = selVal;
  var pxsSel = pxsSel;
  var uploadedImage = uploadedIm;
} else {
  var selVal = selVal;
  var pxsSel;
  var uploadedImage;
}
if (!localStorage.getItem("pxsSel")) {
  if (selVal === "4px") {
    var pxsSel = "4px";
    localStorage.setItem("pxsSel", "4px");
  } else {
    var pxsSel = "3px";
    localStorage.setItem("pxsSel", "3px");
  }
}

var uploadIm32 = 0;
var baseImage;

// mousemove vars
var paintArrKey, clickedObjKey, paintI, clickedI;

function createCookie(name, value, days) {
  var expires, date;
  if (days) {
    date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toGMTString();
  } else expires = "";
  document.cookie = name + "=" + value + expires + "; path=/";
}

function readCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(";");
  for (var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == " ") c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

function eraseCookie(name) {
  createCookie(name, "", -1);
}
(THREE.WireframeHelper = function (a) {
  for (
    var b = [0, 0],
      c = {},
      d = function (a, b) {
        return a - b;
      },
      e = ["a", "b", "c", "d"],
      f = new THREE.Geometry(),
      g = a.geometry.vertices,
      h = a.geometry.faces,
      i = 0,
      j = h.length;
    j > i;
    i++
  ) {
    for (
      var k = h[i], l = k instanceof THREE.Face4 ? 4 : 3, m = 0;
      l > m;
      m++
    ) {
      (b[0] = k[e[m]]), (b[1] = k[e[(m + 1) % l]]), b.sort(d);
      var n = b.toString();
      void 0 === c[n] &&
        (f.vertices.push(g[b[0]]), f.vertices.push(g[b[1]]), (c[n] = !0));
    }
  }
  THREE.Line.call(
    this,
    f,
    new THREE.LineBasicMaterial({
      color: 16777215,
    }),
    THREE.LinePieces
  ),
    (this.matrixAutoUpdate = !1),
    (this.matrixWorld = a.matrixWorld);
}),
  (THREE.WireframeHelper.prototype = Object.create(THREE.Line.prototype)),
  (THREE.ImmediateRenderObject = function () {
    THREE.Object3D.call(this), (this.render = function () {});
  }),
  (THREE.ImmediateRenderObject.prototype = Object.create(
    THREE.Object3D.prototype
  )),
  (THREE.LensFlare = function (a, b, c, d, e) {
    THREE.Object3D.call(this),
      (this.lensFlares = []),
      (this.positionScreen = new THREE.Vector3()),
      (this.customUpdateCallback = void 0),
      void 0 !== a && this.add(a, b, c, d, e);
  }),
  (THREE.LensFlare.prototype = Object.create(THREE.Object3D.prototype)),
  (THREE.LensFlare.prototype.add = function (a, b, c, d, e, f) {
    void 0 === b && (b = -1),
      void 0 === c && (c = 0),
      void 0 === f && (f = 1),
      void 0 === e && (e = new THREE.Color(16777215)),
      void 0 === d && (d = THREE.NormalBlending),
      (c = Math.min(c, Math.max(0, c))),
      this.lensFlares.push({
        texture: a,
        size: b,
        distance: c,
        x: 0,
        y: 0,
        z: 0,
        scale: 1,
        rotation: 1,
        opacity: f,
        color: e,
        blending: d,
      });
  }),
  (THREE.LensFlare.prototype.updateLensFlares = function () {
    var a,
      b,
      c = this.lensFlares.length,
      d = 2 * -this.positionScreen.x,
      e = 2 * -this.positionScreen.y;
    for (a = 0; c > a; a++)
      (b = this.lensFlares[a]),
        (b.x = this.positionScreen.x + d * b.distance),
        (b.y = this.positionScreen.y + e * b.distance),
        (b.wantedRotation = 0.25 * b.x * Math.PI),
        (b.rotation += 0.25 * (b.wantedRotation - b.rotation));
  }),
  (THREE.Color.prototype.isAlpha = function () {
    return this.g == 1 && this.r == 0 && this.b == 0;
  }),
  (THREE.Color.prototype.setAlpha = function () {
    return (this.r = 0), (this.g = 1), (this.b = 0), this;
  }),
  (THREE.Color.prototype.protectAlpha = function () {
    return this.isAlpha() && (this.g = 0.98), this;
  }),
  (THREE.Object3D.prototype.clear = function () {
    var children = this.children;
    for (var i = children.length - 1; i >= 0; i--) {
      var child = children[i];
      child.clear();
      this.removeChild(child);
    }
  }),
  /*
   * Basic functions to work with canvas and skin
   */
  (Editor.Canvas = function () {
    // "use strict";
    var j,
      k,
      element = document.createElement("canvas"),
      context = element.getContext("2d"),
      n = !1,
      o = !1;

    function a() {
      n && (context.putImageData(j, 0, 0), (n = !1)),
        o &&
          ((j = context.getImageData(0, 0, element.width, element.height)),
          (o = !1));
    }

    // setSize function
    function setSize(width, height) {
      a(), (element.width = width), (element.height = height), (o = !0);
    }

    // setPixelColor function
    function setPixelColor(b, c, d) {
      a();
      var e = 4 * (b + c * j.width);
      (j.data[e + 0] = 256 * d.r),
        (j.data[e + 1] = 256 * d.g),
        (j.data[e + 2] = 256 * d.b),
        (j.data[e + 3] = d.isAlpha() ? 0 : 256),
        (n = !0);
    }

    // setAlphaColor function
    function getAlphaColor(b, c, d) {
      var d = new THREE.Color().setStyle("#c9c8c8");
      return d;
    }

    // getPixelColor function
    // function getPixelColor(b, c) {
    //   a();
    //   var d = new THREE.Color(),
    //     e = 4 * (b + c * j.width);
    //   return d.r = j.data[e + 0] / 256, d.g = j.data[e + 1] / 256, d.b = j.data[e + 2] / 256, d.protectAlpha(), j.data[e + 3] / 256 == 0 && d.setAlpha(), d;
    // }

    function getPixelColor(b, c) {
      a();
      var d = new THREE.Color(),
        e = 4 * (b + c * j.width),
        newJ = j;
      d.r = j.data[e + 0] / 256;
      d.g = j.data[e + 1] / 256;
      d.b = j.data[e + 2] / 256;
      d.protectAlpha();
      var newAlpha = j.data[e + 3] / 256;
      j.data[e + 3] / 256 == 0 && d.setAlpha();

      if (d.r == 0 && d.g == 0 && d.b == 0 && newAlpha > 0 && newAlpha < 0.1) {
        console.log("houston! we got a problem!");
        d.r = 0;
        d.g = 1;
        d.b = 0;
      }

      // var e2 = 4 * (44 + 13 * j.width);
      // var d2 = new THREE.Color;
      // d2.r = j.data[e2 + 0] / 256;
      // d2.g = j.data[e2 + 1] / 256;
      // d2.b = j.data[e2 + 2] / 256;
      // var newAlpha2 = j.data[e2 + 3] / 256;
      //
      // newJ = j;
      // 0 == j.data[e + 3] / 256 && d.setAlpha();
      // if (d.r == 0 && d.g == 0 && d.b >= 0 && d.b <= 0.100) {
      //   console.log('houston! we got a problem!');
      //   d.r = 0;
      //   d.g = 1;
      //   d.b = 0;
      // }
      return d;
    }

    // getImage function
    function getImage() {
      a();
      k = new Image();
      k.src = element.toDataURL("image/png", 1.0);
      return k.src;
    }

    function getCanvasImage() {
      a();
      var image = new Image();
      image.src = element.toDataURL("image/png", 1.0);
      return image;
    }

    // setImage function
    function setImage(c) {
      if (c.height == 32) {
        a(), setSize(c.width, c.height), context.drawImage(c, 0, 0), (o = !0);
      } else {
        a(), setSize(c.width, c.height), context.drawImage(c, 0, 0), (o = !0);
      }
    }

    // resizeClosestSibling function
    function resizeClosestSibling(a) {
      for (
        var c = element.width * a,
          d = element.height * a,
          e = context.getImageData(0, 0, c, d),
          f = 0;
        d > f;
        f++
      ) {
        for (var g = 0; c > g; g++) {
          var h = 4 * (Math.floor(f / a) * element.width + Math.floor(g / a)),
            i = 4 * (f * c + g);
          (e.data[i] = j.data[h]),
            (e.data[i + 1] = j.data[h + 1]),
            (e.data[i + 2] = j.data[h + 2]),
            (e.data[i + 3] = j.data[h + 3]);
        }
      }
      return setSize(c, d), context.putImageData(e, 0, 0), (j = e), element;
    }

    // drawImage function
    function drawImage(b) {
      return a(), context.drawImage(b, 0, 0), (o = !0), element;
    }

    // convert to DataUrl
    function toDataURL() {
      return a(), element.toDataURL();
    }

    return (
      setSize(64, 64),
      {
        setSize: setSize, // b
        setPixelColor: setPixelColor, // c
        getPixelColor: getPixelColor, // d
        getAlphaColor: getAlphaColor, // d
        getImage: getImage, // e
        setImage: setImage, // f
        resizeClosestSibling: resizeClosestSibling, // g
        context: context, // m
        element: element, // l
        drawImage: drawImage, // h
        toDataURL: toDataURL, // i
        getCanvasImage: getCanvasImage,
      }
    );
  }),
  (Editor.Transporter = function (a) {
    "use strict";
    var o = new Editor.Canvas(),
      p = {};

    function getCanvas() {
      return o.getImage();
    }

    function getCanvasImage() {
      return o.toDataURL("image/png");
    }

    function url_redirect(options) {
      var $form = $("<form />");

      $form.attr("action", options.url);
      $form.attr("method", options.method);

      for (var data in options.data) {
        $form.append(
          '<input type="hidden" name="' +
            data +
            '" value="' +
            options.data[data] +
            '" />'
        );
      }

      $("body").append($form);
      $form.submit();
    }

    function b(b, c, d) {
      var e = Editor.Mapping[b];
      return (
        o.setSize(e.width, e.height),
        a.model.loopOverMap(
          e.commands,
          function (b, d, e) {
            if (c === !0)
              var f = a.layerModel.getFaceColor(
                e,
                a.layerModel.getTopLayerOf(e)
              );
            else var f = a.layerModel.getFaceColor(e, c);
            if (typeof f !== "undefined") {
              f.isAlpha() || o.setPixelColor(b, d, f);
            }
            // else {
            //    localStorage.removeItem('layerJson');
            //    window.location.reload();
            // }
            // f.isAlpha() || o.setPixelColor(b, d, f)
            // o.setPixelColor(b, d, f)
            // f.isAlpha()
          },
          d
        ),
        o
      );
    }

    function c(a, c, d) {
      var t = 0;
      if (t === 1) {
        var uploadedIm = localStorage.getItem("uploadedImage");

        uploadedIm = JSON.parse(uploadedIm);
        o.setImage(uploadedIm);
      }
      t = 1;

      return b(a, c, d).getImage();
    }

    function d(b, c, d) {
      var e = $.Deferred(),
        f = new THREE.ImageLoader(),
        g = Editor.Mapping[c];
      // f.setCrossOrigin(!0);
      var h = function (b) {
        var l = localStorage.getItem("uploadedImage");
        // var l32 = localStorage.getItem('uploadedImage32');
        // if (64 == b.height && "skin64" == c && (g = Editor.Mapping.skin64), a.layerModel && a.layerModel.add) var f = a.layerModel.add(d);
        if (c === "skin64_switch" && pxsSel === "3px" && l !== "") {
          o.setImage(b),
            a.model.loopOverMap(g.commands, function (b, c, d) {
              a.layerModel.setFaceColor(d, o.getPixelColor(b, c));

              // Fill the 1 pxl on right arm underlay
              if (
                d.userData.uid === 2944 ||
                d.userData.uid === 2948 ||
                d.userData.uid === 2952 ||
                d.userData.uid === 2956 ||
                d.userData.uid === 2960 ||
                d.userData.uid === 2964 ||
                d.userData.uid === 2968 ||
                d.userData.uid === 2972 ||
                d.userData.uid === 2976 ||
                d.userData.uid === 2980 ||
                d.userData.uid === 2984 ||
                d.userData.uid === 2988
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 2928 ||
                d.userData.uid === 2932 ||
                d.userData.uid === 2936 ||
                d.userData.uid === 2940
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 2912 ||
                d.userData.uid === 2916 ||
                d.userData.uid === 2920 ||
                d.userData.uid === 2924
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 2995 ||
                d.userData.uid === 2999 ||
                d.userData.uid === 3003 ||
                d.userData.uid === 3007 ||
                d.userData.uid === 3011 ||
                d.userData.uid === 3015 ||
                d.userData.uid === 3019 ||
                d.userData.uid === 3023 ||
                d.userData.uid === 3027 ||
                d.userData.uid === 3031 ||
                d.userData.uid === 3035 ||
                d.userData.uid === 3039
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }

              // Fill the 1 px on right arm overlay
              // front
              if (
                d.userData.uid === 2496 ||
                d.userData.uid === 2500 ||
                d.userData.uid === 2504 ||
                d.userData.uid === 2508 ||
                d.userData.uid === 2512 ||
                d.userData.uid === 2516 ||
                d.userData.uid === 2520 ||
                d.userData.uid === 2524 ||
                d.userData.uid === 2528 ||
                d.userData.uid === 2532 ||
                d.userData.uid === 2536 ||
                d.userData.uid === 2540
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // bottom
              if (
                d.userData.uid === 2492 ||
                d.userData.uid === 2488 ||
                d.userData.uid === 2484 ||
                d.userData.uid === 2480
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // top
              if (
                d.userData.uid === 2464 ||
                d.userData.uid === 2468 ||
                d.userData.uid === 2472 ||
                d.userData.uid === 2476
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // back
              if (
                d.userData.uid === 2547 ||
                d.userData.uid === 2551 ||
                d.userData.uid === 2555 ||
                d.userData.uid === 2559 ||
                d.userData.uid === 2563 ||
                d.userData.uid === 2567 ||
                d.userData.uid === 2571 ||
                d.userData.uid === 2575 ||
                d.userData.uid === 2579 ||
                d.userData.uid === 2583 ||
                d.userData.uid === 2587 ||
                d.userData.uid === 2591
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }

              // Fill the 1 px on left arm overlay
              // front
              if (
                d.userData.uid === 2723 ||
                d.userData.uid === 2727 ||
                d.userData.uid === 2731 ||
                d.userData.uid === 2735 ||
                d.userData.uid === 2739 ||
                d.userData.uid === 2743 ||
                d.userData.uid === 2747 ||
                d.userData.uid === 2751 ||
                d.userData.uid === 2755 ||
                d.userData.uid === 2759 ||
                d.userData.uid === 2763 ||
                d.userData.uid === 2767
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // bottom
              if (
                d.userData.uid === 2719 ||
                d.userData.uid === 2715 ||
                d.userData.uid === 2711 ||
                d.userData.uid === 2707
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // top
              if (
                d.userData.uid === 2691 ||
                d.userData.uid === 2695 ||
                d.userData.uid === 2699 ||
                d.userData.uid === 2703
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              // back
              if (
                d.userData.uid === 2768 ||
                d.userData.uid === 2772 ||
                d.userData.uid === 2776 ||
                d.userData.uid === 2780 ||
                d.userData.uid === 2784 ||
                d.userData.uid === 2788 ||
                d.userData.uid === 2792 ||
                d.userData.uid === 2796 ||
                d.userData.uid === 2800 ||
                d.userData.uid === 2804 ||
                d.userData.uid === 2808 ||
                d.userData.uid === 2812
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }

              // Fill the 1 pxl on left arm underlay
              if (
                d.userData.uid === 3171 ||
                d.userData.uid === 3175 ||
                d.userData.uid === 3179 ||
                d.userData.uid === 3183 ||
                d.userData.uid === 3187 ||
                d.userData.uid === 3191 ||
                d.userData.uid === 3195 ||
                d.userData.uid === 3199 ||
                d.userData.uid === 3203 ||
                d.userData.uid === 3207 ||
                d.userData.uid === 3211 ||
                d.userData.uid === 3215
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 3155 ||
                d.userData.uid === 3159 ||
                d.userData.uid === 3163 ||
                d.userData.uid === 3167
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 3139 ||
                d.userData.uid === 3143 ||
                d.userData.uid === 3147 ||
                d.userData.uid === 3151
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              if (
                d.userData.uid === 3216 ||
                d.userData.uid === 3220 ||
                d.userData.uid === 3224 ||
                d.userData.uid === 3228 ||
                d.userData.uid === 3232 ||
                d.userData.uid === 3236 ||
                d.userData.uid === 3240 ||
                d.userData.uid === 3244 ||
                d.userData.uid === 3248 ||
                d.userData.uid === 3252 ||
                d.userData.uid === 3256 ||
                d.userData.uid === 3260
              ) {
                a.layerModel.setFaceColor(d, o.getAlphaColor(b, c));
              }
              conv = 1;
            });
        } else {
          o.setImage(b),
            a.model.loopOverMap(g.commands, function (b, c, d) {
              a.layerModel.setFaceColor(d, o.getPixelColor(b, c));
            });
          conv = 0;
        }
        uploadedImage = o.getImage();
        localStorage.setItem("uploadedImage", uploadedImage);
        if (
          localStorage.getItem("pxsSel") === "32px" ||
          localStorage.getItem("presetDB") === "0" ||
          localStorage.getItem("newuploaded_skin_size") == "32"
        ) {
          uploadedImage = o.getImage();
          var srcImage = uploadedImage;
          $.ajax({
            type: "POST",
            // url: skindex_url + "app_dev.php/uploadOldSkin",
            url: skindex_url + "uploadOldSkin",
            data: {
              oldSkin: srcImage,
            },
            success: function (msg) {
              localStorage.setItem("uploadedImage", msg.base64);
              localStorage.setItem("pxsSel", "4px");
              uploadedImage = msg.base64;
              pxsSel = "4px";
            },
          });
        }

        // localStorage.setItem('uploadedImage32', uploadedImage);

        a.model.render();
        a.layerPresenter.checkpoint(!0);

        var paint = localStorage.getItem("paintArr");
        if (paint) {
          a.transporter.loadFromLocalStorage();
        }
      };
      var i = function () {},
        j = function () {
          e.reject("error");
        };
      return f.load(b, h, i, j), e.promise();
    }

    function e() {
      if (localStorage.getItem("layerJson")) {
        var b = localStorage.getItem("layerJson");
        a.layerModel.parse(b),
          a.layerPresenter && a.layerPresenter.updateAllLayerThumbnails(),
          a.layerModel.renderModel(),
          a.model.render();
      } else a.layerModel.add();
      // localStorage.getItem("edit-save-ref") && localStorage.getItem("edit-id-ref") ? a.transporter.setUVImage(localStorage.getItem("edit-save-ref"), "skin64", localStorage.getItem("edit-id-ref")).done(function () {
      //     a.layerPresenter.checkpoint(!0)
      // }).always(function () {
      //     localStorage.removeItem("edit-save-ref"), localStorage.removeItem("edit-slug-ref")
      // }) : a.layerPresenter && a.layerPresenter.checkpoint(!0)
    }

    function f(a) {
      var c = $.Deferred(),
        d = function (d) {
          d && (p[a.img] = d);
          var e = b(a.uv.name, !0);
          a.uv.scale && a.uv.scale > 1 && e.resizeNearestNeighbor(a.uv.scale);
          var f = new Editor.Canvas();
          f.setSize(p[a.img].width, p[a.img].height);
          for (var h = g(a.shards), j = 0; j < h.length; j++) {
            var k = h[j];
            i(
              e,
              k.uv[0][0],
              k.uv[0][1],
              k.uv[1][0],
              k.uv[1][1],
              k.uv[2][0],
              k.uv[2][1],
              f,
              k.coord[0][0],
              k.coord[0][1],
              k.coord[1][0],
              k.coord[1][1],
              k.coord[2][0],
              k.coord[2][1]
            );
          }
          f.context.drawImage(p[a.img], 0, 0), c.resolve(f);
        },
        e = function () {},
        f = function () {
          c.reject("error");
        };
      if (p[a.img]) d();
      else {
        var h = new THREE.ImageLoader();
        h.setCrossOrigin(!0), h.load(App.URL.root + "assets/" + a.img, d, e, f);
      }
      return c.promise();
    }

    function l() {
      if (selVal === "3px" && pxsSel === "4px") {
        var srcImage = c("skin64_3px");
      } else if (selVal === "4px" && pxsSel === "4px") {
        var srcImage = c("skin64");
      } else if (selVal === "4px" && pxsSel === "3px") {
        var srcImage = c("skin64");
      } else if (pxsSel === "32px" && selVal === "4px") {
        var srcImage = c("skin64");
      } else if (pxsSel === "32px" && selVal === "3px") {
        var srcImage = c("skin64_3px");
      } else if (selVal === "4px" && !pxsSel) {
        var srcImage = c("skin64");
      } else if (selVal === "3px" && !pxsSel) {
        var srcImage = c("skin64_3px");
      } else {
        var srcImage = c("skin64_3px");
      }

      return srcImage;
    }

    function k(a, b, c) {
      var d = document.createElement("form");
      (d.method = "post"),
        (d.action = a),
        d.setAttribute("hidden", !0),
        c && d.setAttribute("target", "_blank");
      for (var e in b) {
        if (b.hasOwnProperty(e)) {
          var f = document.createElement("input");
          f.setAttribute("name", e),
            f.setAttribute("value", b[e]),
            f.setAttribute("type", "hidden"),
            d.appendChild(f);
        }
      }
      document.body.appendChild(d), d.submit(), document.body.removeChild(d);
    }

    function g(a) {
      typeof a === "string" && (a = JSON.parse(a));
      for (var b = [], c = 0; c < a.length; c += 12) {
        b.push({
          uv: [
            [a[c + 0], a[c + 1]],
            [a[c + 2], a[c + 3]],
            [a[c + 4], a[c + 5]],
          ],
          coord: [
            [a[c + 6], a[c + 7]],
            [a[c + 8], a[c + 9]],
            [a[c + 10], a[c + 11]],
          ],
        });
      }
      return b;
    }

    function h(a, b, c) {
      var d,
        e = b.x - a.x,
        f = b.y - a.y,
        g = e * e + f * f;
      g !== 0 &&
        ((d = c / Math.sqrt(g)),
        (e *= d),
        (f *= d),
        (b.x += e),
        (b.y += f),
        (a.x -= e),
        (a.y -= f));
    }

    function i(a, b, c, d, e, f, g, i, j, k, l, m, n, o, p) {
      var q = {
          x: j,
          y: k,
        },
        r = {
          x: l,
          y: m,
        },
        s = {
          x: n,
          y: o,
        };
      h(q, r, 0.5),
        h(r, s, 0.5),
        h(s, q, 0.5),
        (j = q.x),
        (l = r.x),
        (n = s.x),
        (k = q.y),
        (m = r.y),
        (o = s.y),
        i.context.beginPath(),
        i.context.moveTo(j, k),
        i.context.lineTo(l, m),
        i.context.lineTo(n, o),
        i.context.closePath(),
        (l -= j),
        (m -= k),
        (n -= j),
        (o -= k),
        (d -= b),
        (e -= c),
        (f -= b),
        (g -= c);
      var t = 1 / (d * g - f * e),
        u = (g * l - e * n) * t,
        v = (g * m - e * o) * t,
        w = (d * n - f * l) * t,
        x = (d * o - f * m) * t,
        y = j - u * b - w * c,
        z = k - v * b - x * c;
      i.context.save(),
        i.context.transform(u, v, w, x, y, z),
        i.context.clip(),
        i.context.drawImage(a.element, 0, 0),
        p && ((i.context.lineWidth = 1), i.context.stroke()),
        i.context.restore();
    }

    return {
      getUVCanvas: b,
      loadFromLocalStorage: e,
      getCanvas: getCanvas,
      getUVImage: c,
      setUVImage: d,
      download: l,
      getAffineCanvas: f,
      drawTexturedTriangle: i,
      // getCanvasImage: getCanvasImage,
      url_redirect: url_redirect,
      submitter: k,
      getCanvasImage: getCanvasImage,
    };
  }),
  (Editor.LayerModel = function (a) {
    "use strict";

    function b(a) {
      return s.layers[a];
    }

    function c() {
      return s.layers[s.activeLayerId];
    }

    function d(a) {
      Object.keys(s.layers);
      var b = [];
      Object.keys(s.layers).forEach(function (a) {
        b.push(s.layers[a]);
      }),
        b.sort(function (a, b) {
          return a.order - b.order;
        });
      for (var c = 0; c < b.length; c++) {
        if (a(b[c], c, b.length)) return !0;
      }
    }

    function e(b) {
      d(function (a) {
        a.order++;
      });
      var c = {
        id: "i" + Math.random().toString(36).substr(2, 9),
        visible: !0,
        order: 0,
        selected: !0,
        skinId: b,
        faces: [],
      };
      return (
        a.model.loopOverFaces(function () {
          c.faces.push(new THREE.Color().setAlpha());
        }),
        (s.layers[c.id] = c),
        i(c),
        c
      );
    }

    function f() {
      var a = s.activeLayerId,
        b = s.layers[s.activeLayerId].order;
      b == Object.keys(s.layers).length - 1 && b--,
        delete s.layers[a],
        d(function (a, c) {
          b == c && i(a), (a.order = c);
        }),
        Object.keys(s.layers).length == 0 && e(),
        p();
    }

    function g() {
      d(function () {
        f();
      });
    }

    function h(a, b) {
      (a.order = b - 0.5),
        d(function (a, b) {
          a.order = b;
        });
    }

    function i(a) {
      d(function (a) {
        a.selected = !1;
      }),
        (a.selected = !0),
        (s.activeLayerId = a.id);
    }

    function j(a) {
      (s.layers[a].visible = !s.layers[a].visible), p();
    }

    function k() {
      return JSON.stringify(s);
    }

    function l(a) {
      // var bHistory = readCookie('bHistory');
      // var rHistory = readCookie('rHistory');

      s = JSON.parse(a);
      for (var b = Object.keys(s.layers), c = 0; c < b.length; c++) {
        for (var d = s.layers[b[c]], e = 0; e < d.faces.length; e++) {
          var f = d.faces[e];
          d.faces[e] = new THREE.Color().setRGB(f.r, f.g, f.b);
        }
      }

      function conv(startVal, cof, value2, value, index, und) {
        var idCell = (value2 - startVal) / 4;
        if (parseInt(idCell) === 0) {
          var idValue2 = value2 - cof;
        } else {
          if (und !== 0) {
            var idValue2 = value2 - (parseInt(idCell) + cof);
          } else {
            var idValue2 = value2 - cof;
          }
        }
        if (index <= countT - 1) {
          s.layers[Object.keys(s.layers)].faces[idValue2] =
            new THREE.Color().setRGB(
              value[value2].r,
              value[value2].g,
              value[value2].b
            );
        } else if (
          index > countT - 1 &&
          s.layers[Object.keys(s.layers)].faces[idValue2].r === value[value2].r
        ) {
          s.layers[Object.keys(s.layers)].faces[idValue2] =
            new THREE.Color().setRGB(
              s.layers[Object.keys(s.layers)].faces[idValue2].r,
              s.layers[Object.keys(s.layers)].faces[idValue2].g,
              s.layers[Object.keys(s.layers)].faces[idValue2].b
            );
        }
      }

      paintArr3 = localStorage.getItem("paintArr");
      countT = localStorage.getItem("countT");
      if (paintArr3) {
        paintArr3 = JSON.parse(paintArr3);
        var layerJsonl = localStorage.getItem("layerJson");
        var layerJson = JSON.parse(layerJsonl);
        var layerColor;
        for (var b = Object.keys(layerJson.layers), c = 0; c < b.length; c++) {
          layerColor = layerJson.layers[b[c]];
        }
        if (paintArr3 instanceof Object === false) {
        } else {
          paintArr = Object.keys(paintArr3).map(function (key) {
            return paintArr3[key];
          });

          paintArr.forEach(function (value, index) {
            Object.keys(value).forEach(function (value2, index2) {
              if (selVal !== "3px") {
                if (index <= countT - 1) {
                  s.layers[Object.keys(s.layers)].faces[value2] =
                    new THREE.Color().setRGB(
                      value[value2].r,
                      value[value2].g,
                      value[value2].b
                    );
                } else if (
                  index > countT - 1 &&
                  s.layers[Object.keys(s.layers)].faces[value2].r !==
                    value[value2].r
                ) {
                  s.layers[Object.keys(s.layers)].faces[value2] =
                    new THREE.Color().setRGB(
                      s.layers[Object.keys(s.layers)].faces[value2].r,
                      s.layers[Object.keys(s.layers)].faces[value2].g,
                      s.layers[Object.keys(s.layers)].faces[value2].b
                    );
                } else if (
                  index > countT - 1 &&
                  s.layers[Object.keys(s.layers)].faces[value2].r ===
                    value[value2].r
                ) {
                  s.layers[Object.keys(s.layers)].faces[value2] =
                    new THREE.Color().setRGB(0, 1, 0);
                }
              } else {
                // head overlay
                if (value2 < 2368 || value2 > 3263) {
                  if (index <= countT - 1) {
                    s.layers[Object.keys(s.layers)].faces[value2] =
                      new THREE.Color().setRGB(
                        value[value2].r,
                        value[value2].g,
                        value[value2].b
                      );
                  } else if (
                    index > countT - 1 &&
                    s.layers[Object.keys(s.layers)].faces[value2].r !==
                      value[value2].r
                  ) {
                    s.layers[Object.keys(s.layers)].faces[value2] =
                      new THREE.Color().setRGB(
                        s.layers[Object.keys(s.layers)].faces[value2].r,
                        s.layers[Object.keys(s.layers)].faces[value2].g,
                        s.layers[Object.keys(s.layers)].faces[value2].b
                      );
                  }
                }
                /**
                 * Right Arm Overlay
                 */
                if (
                  (value2 >= 2368 && value2 <= 2415) ||
                  (value2 >= 2416 && value2 <= 2463)
                ) {
                  if (index <= countT - 1) {
                    s.layers[Object.keys(s.layers)].faces[value2] =
                      new THREE.Color().setRGB(
                        value[value2].r,
                        value[value2].g,
                        value[value2].b
                      );
                  } else if (
                    index > countT - 1 &&
                    s.layers[Object.keys(s.layers)].faces[value2].r ===
                      value[value2].r
                  ) {
                    // s.layers[Object.keys(s.layers)].faces[value2] = (new THREE.Color).setRGB(0, 1, 0);
                    s.layers[Object.keys(s.layers)].faces[value2] =
                      new THREE.Color().setRGB(
                        s.layers[Object.keys(s.layers)].faces[value2].r,
                        s.layers[Object.keys(s.layers)].faces[value2].g,
                        s.layers[Object.keys(s.layers)].faces[value2].bb
                      );
                  }
                }
                // convert top overlay right arm
                if (value2 >= 2464 && value2 <= 2479) {
                  if (
                    value2 != 2464 &&
                    value2 != 2468 &&
                    value2 != 2472 &&
                    value2 != 2476
                  ) {
                    conv(2464, 1, value2, value, index);
                  }
                }
                // convert bottom overlay right arm
                if (value2 >= 2480 && value2 <= 2495) {
                  if (
                    value2 != 2480 &&
                    value2 != 2484 &&
                    value2 != 2488 &&
                    value2 != 2492
                  ) {
                    conv(2480, 5, value2, value, index);
                  }
                }
                // convert front overlay right arm
                if (value2 >= 2496 && value2 <= 2543) {
                  if (
                    value2 != 2496 &&
                    value2 != 2500 &&
                    value2 != 2504 &&
                    value2 != 2508 &&
                    value2 != 2512 &&
                    value2 != 2516 &&
                    value2 != 2520 &&
                    value2 != 2524 &&
                    value2 != 2528 &&
                    value2 != 2532 &&
                    value2 != 2536 &&
                    value2 != 2540
                  ) {
                    conv(2496, 9, value2, value, index);
                  }
                }
                // convert back overlay right arm
                if (value2 >= 2544 && value2 <= 2591) {
                  if (
                    value2 != 2547 &&
                    value2 != 2551 &&
                    value2 != 2555 &&
                    value2 != 2559 &&
                    value2 != 2563 &&
                    value2 != 2567 &&
                    value2 != 2571 &&
                    value2 != 2575 &&
                    value2 != 2579 &&
                    value2 != 2583 &&
                    value2 != 2587 &&
                    value2 != 2591
                  ) {
                    conv(2544, 20, value2, value, index);
                  }
                }

                /**
                 * Right Arm Underlay
                 */
                // convert right underlay right arm
                if (value2 >= 2816 && value2 <= 2863) {
                  conv(2816, 64, value2, value, index, 0);
                }
                // convert left underlay right arm
                if (value2 >= 2864 && value2 <= 2911) {
                  conv(2864, 64, value2, value, index, 0);
                }
                // convert top underlay right arm
                if (value2 >= 2912 && value2 <= 2927) {
                  if (
                    value2 != 2912 &&
                    value2 != 2916 &&
                    value2 != 2920 &&
                    value2 != 2924
                  ) {
                    conv(2912, 65, value2, value, index);
                  }
                }
                // convert bottom underlay right arm
                if (value2 >= 2928 && value2 <= 2943) {
                  if (
                    value2 != 2928 &&
                    value2 != 2932 &&
                    value2 != 2936 &&
                    value2 != 2940
                  ) {
                    conv(2928, 69, value2, value, index);
                  }
                }
                // convert front underlay right arm
                if (value2 >= 2944 && value2 <= 2991) {
                  if (
                    value2 != 2944 &&
                    value2 != 2948 &&
                    value2 != 2952 &&
                    value2 != 2956 &&
                    value2 != 2960 &&
                    value2 != 2964 &&
                    value2 != 2968 &&
                    value2 != 2972 &&
                    value2 != 2976 &&
                    value2 != 2980 &&
                    value2 != 2984 &&
                    value2 != 2988
                  ) {
                    conv(2944, 73, value2, value, index);
                  }
                }
                // convert back underlay right arm
                if (value2 >= 2992 && value2 <= 3039) {
                  if (
                    value2 != 2995 &&
                    value2 != 2999 &&
                    value2 != 3003 &&
                    value2 != 3007 &&
                    value2 != 3011 &&
                    value2 != 3015 &&
                    value2 != 3019 &&
                    value2 != 3023 &&
                    value2 != 3027 &&
                    value2 != 3031 &&
                    value2 != 3035 &&
                    value2 != 3039
                  ) {
                    conv(2992, 84, value2, value, index);
                  }
                }

                /**
                 * Left Arm Overlay
                 */
                // convert right overlay left arm
                if (value2 >= 2640 && value2 <= 2687) {
                  conv(2640, 32, value2, value, index, 0);
                }
                // convert left overlay left arm
                if (value2 >= 2592 && value2 <= 2639) {
                  conv(2592, 32, value2, value, index, 0);
                }
                // convert top overlay left arm
                if (value2 >= 2688 && value2 <= 2703) {
                  if (
                    value2 != 2691 &&
                    value2 != 2695 &&
                    value2 != 2699 &&
                    value2 != 2703
                  ) {
                    conv(2688, 32, value2, value, index);
                  }
                }
                // convert bottom overlay left arm
                if (value2 >= 2704 && value2 <= 2719) {
                  if (
                    value2 != 2707 &&
                    value2 != 2711 &&
                    value2 != 2715 &&
                    value2 != 2719
                  ) {
                    conv(2704, 36, value2, value, index);
                  }
                }
                // convert front overlay left arm
                if (value2 >= 2720 && value2 <= 2767) {
                  if (
                    value2 != 2723 &&
                    value2 != 2727 &&
                    value2 != 2731 &&
                    value2 != 2735 &&
                    value2 != 2739 &&
                    value2 != 2743 &&
                    value2 != 2747 &&
                    value2 != 2751 &&
                    value2 != 2755 &&
                    value2 != 2759 &&
                    value2 != 2763 &&
                    value2 != 2767
                  ) {
                    conv(2720, 40, value2, value, index);
                  }
                }
                // convert back overlay left arm
                if (value2 >= 2768 && value2 <= 2815) {
                  if (
                    value2 != 2768 &&
                    value2 != 2772 &&
                    value2 != 2776 &&
                    value2 != 2780 &&
                    value2 != 2784 &&
                    value2 != 2788 &&
                    value2 != 2792 &&
                    value2 != 2796 &&
                    value2 != 2800 &&
                    value2 != 2804 &&
                    value2 != 2808 &&
                    value2 != 2812
                  ) {
                    conv(2768, 53, value2, value, index);
                  }
                }

                /**
                 * Left Arm Underlay
                 */
                // convert right underlay left arm
                if (value2 >= 3088 && value2 <= 3135) {
                  conv(3088, 96, value2, value, index, 0);
                }
                // convert left underlay left arm
                if (value2 >= 3040 && value2 <= 3087) {
                  conv(3040, 96, value2, value, index, 0);
                }
                // convert top underlay left arm
                if (value2 >= 3136 && value2 <= 3151) {
                  if (
                    value2 != 3139 &&
                    value2 != 3143 &&
                    value2 != 3147 &&
                    value2 != 3151
                  ) {
                    conv(3136, 96, value2, value, index);
                  }
                }
                // convert bottom underlay left arm
                if (value2 >= 3152 && value2 <= 3167) {
                  if (
                    value2 != 3155 &&
                    value2 != 3159 &&
                    value2 != 3163 &&
                    value2 != 3167
                  ) {
                    conv(3152, 100, value2, value, index);
                  }
                }
                // convert front underlay left arm
                if (value2 >= 3168 && value2 <= 3215) {
                  if (
                    value2 != 3171 &&
                    value2 != 3175 &&
                    value2 != 3179 &&
                    value2 != 3183 &&
                    value2 != 3187 &&
                    value2 != 3191 &&
                    value2 != 3195 &&
                    value2 != 3199 &&
                    value2 != 3203 &&
                    value2 != 3207 &&
                    value2 != 3211 &&
                    value2 != 3215
                  ) {
                    conv(3168, 104, value2, value, index);
                  }
                }
                // convert back underlay left arm
                if (value2 >= 3216 && value2 <= 3263) {
                  if (
                    value2 != 3216 &&
                    value2 != 3220 &&
                    value2 != 3224 &&
                    value2 != 3228 &&
                    value2 != 3232 &&
                    value2 != 3236 &&
                    value2 != 3240 &&
                    value2 != 3244 &&
                    value2 != 3248 &&
                    value2 != 3252 &&
                    value2 != 3256 &&
                    value2 != 3260
                  ) {
                    conv(3216, 117, value2, value, index);
                  }
                }
              }
            });
          });
        }
      }
    }

    function redol(x) {
      s = JSON.parse(x);
      for (var b = Object.keys(s.layers), c = 0; c < b.length; c++) {
        for (var d = s.layers[b[c]], e = 0; e < d.faces.length; e++) {
          var f = d.faces[e];
          d.faces[e] = new THREE.Color().setRGB(f.r, f.g, f.b);
        }
      }
      paintArr = localStorage.getItem("paintArr");
      countT = localStorage.getItem("countT");
      // switchArr = localStorage.getItem('switchArr');
      paintArr = JSON.parse(paintArr);
      // switchArr = JSON.parse(switchArr);

      paintArr = Object.keys(paintArr).map(function (key) {
        return paintArr[key];
      });

      function conv(startVal, cof, value2, value, index, und) {
        var idCell = (value2 - startVal) / 4;
        if (parseInt(idCell) === 0) {
          var idValue2 = value2 - cof;
        } else {
          if (und !== 0) {
            var idValue2 = value2 - (parseInt(idCell) + cof);
          } else {
            var idValue2 = value2 - cof;
          }
        }
        // if (index <= (countT)) {
        s.layers[Object.keys(s.layers)].faces[idValue2] =
          new THREE.Color().setRGB(
            value[value2].r,
            value[value2].g,
            value[value2].b
          );
        // }
      }
      localStorage.setItem("countT", countT);
      var paintArrNew = paintArr.slice(0, parseInt(countT));

      // a.layerModel.parse(x);
      paintArrNew.forEach(function (value, index) {
        Object.keys(value).forEach(function (value2, index2) {
          if (selVal !== "3px") {
            // if (index <= (countT)) {
            s.layers[Object.keys(s.layers)].faces[value2] =
              new THREE.Color().setRGB(
                value[value2].r,
                value[value2].g,
                value[value2].b
              );
            // }
          } else {
            if (value2 < 2368 || value2 > 3263) {
              // if (index <= (countT)) {
              s.layers[Object.keys(s.layers)].faces[value2] =
                new THREE.Color().setRGB(
                  value[value2].r,
                  value[value2].g,
                  value[value2].b
                );
              // }
            }
            /**
             * Right Arm Overlay
             */
            if (
              (value2 >= 2368 && value2 <= 2415) ||
              (value2 >= 2416 && value2 <= 2463)
            ) {
              // if (index <= (countT)) {
              s.layers[Object.keys(s.layers)].faces[value2] =
                new THREE.Color().setRGB(
                  value[value2].r,
                  value[value2].g,
                  value[value2].b
                );
              // }
            }
            // convert top overlay right arm
            if (value2 >= 2464 && value2 <= 2479) {
              if (
                value2 != 2464 &&
                value2 != 2468 &&
                value2 != 2472 &&
                value2 != 2476
              ) {
                conv(2464, 1, value2, value, index);
              }
            }
            // convert bottom overlay right arm
            if (value2 >= 2480 && value2 <= 2495) {
              if (
                value2 != 2480 &&
                value2 != 2484 &&
                value2 != 2488 &&
                value2 != 2492
              ) {
                conv(2480, 5, value2, value, index);
              }
            }
            // convert front overlay right arm
            if (value2 >= 2496 && value2 <= 2543) {
              if (
                value2 != 2496 &&
                value2 != 2500 &&
                value2 != 2504 &&
                value2 != 2508 &&
                value2 != 2512 &&
                value2 != 2516 &&
                value2 != 2520 &&
                value2 != 2524 &&
                value2 != 2528 &&
                value2 != 2532 &&
                value2 != 2536 &&
                value2 != 2540
              ) {
                conv(2496, 9, value2, value, index);
              }
            }
            // convert back overlay right arm
            if (value2 >= 2544 && value2 <= 2591) {
              if (
                value2 != 2547 &&
                value2 != 2551 &&
                value2 != 2555 &&
                value2 != 2559 &&
                value2 != 2563 &&
                value2 != 2567 &&
                value2 != 2571 &&
                value2 != 2575 &&
                value2 != 2579 &&
                value2 != 2583 &&
                value2 != 2587 &&
                value2 != 2591
              ) {
                conv(2544, 20, value2, value, index);
              }
            }

            /**
             * Right Arm Underlay
             */
            // convert right underlay right arm
            if (value2 >= 2816 && value2 <= 2863) {
              conv(2816, 64, value2, value, index, 0);
            }
            // convert left underlay right arm
            if (value2 >= 2864 && value2 <= 2911) {
              conv(2864, 64, value2, value, index, 0);
            }
            // convert top underlay right arm
            if (value2 >= 2912 && value2 <= 2927) {
              if (
                value2 != 2912 &&
                value2 != 2916 &&
                value2 != 2920 &&
                value2 != 2924
              ) {
                conv(2912, 65, value2, value, index);
              }
            }
            // convert bottom underlay right arm
            if (value2 >= 2928 && value2 <= 2943) {
              if (
                value2 != 2928 &&
                value2 != 2932 &&
                value2 != 2936 &&
                value2 != 2940
              ) {
                conv(2928, 69, value2, value, index);
              }
            }
            // convert front underlay right arm
            if (value2 >= 2944 && value2 <= 2991) {
              if (
                value2 != 2944 &&
                value2 != 2948 &&
                value2 != 2952 &&
                value2 != 2956 &&
                value2 != 2960 &&
                value2 != 2964 &&
                value2 != 2968 &&
                value2 != 2972 &&
                value2 != 2976 &&
                value2 != 2980 &&
                value2 != 2984 &&
                value2 != 2988
              ) {
                conv(2944, 73, value2, value, index);
              }
            }
            // convert back underlay right arm
            if (value2 >= 2992 && value2 <= 3039) {
              if (
                value2 != 2995 &&
                value2 != 2999 &&
                value2 != 3003 &&
                value2 != 3007 &&
                value2 != 3011 &&
                value2 != 3015 &&
                value2 != 3019 &&
                value2 != 3023 &&
                value2 != 3027 &&
                value2 != 3031 &&
                value2 != 3035 &&
                value2 != 3039
              ) {
                conv(2992, 84, value2, value, index);
              }
            }

            /**
             * Left Arm Overlay
             */
            // convert right overlay left arm
            if (value2 >= 2640 && value2 <= 2687) {
              conv(2640, 32, value2, value, index, 0);
            }
            // convert left overlay left arm
            if (value2 >= 2592 && value2 <= 2639) {
              conv(2592, 32, value2, value, index, 0);
            }
            // convert top overlay left arm
            if (value2 >= 2688 && value2 <= 2703) {
              if (
                value2 != 2691 &&
                value2 != 2695 &&
                value2 != 2699 &&
                value2 != 2703
              ) {
                conv(2688, 32, value2, value, index);
              }
            }
            // convert bottom overlay left arm
            if (value2 >= 2704 && value2 <= 2719) {
              if (
                value2 != 2707 &&
                value2 != 2711 &&
                value2 != 2715 &&
                value2 != 2719
              ) {
                conv(2704, 36, value2, value, index);
              }
            }
            // convert front overlay left arm
            if (value2 >= 2720 && value2 <= 2767) {
              if (
                value2 != 2723 &&
                value2 != 2727 &&
                value2 != 2731 &&
                value2 != 2735 &&
                value2 != 2739 &&
                value2 != 2743 &&
                value2 != 2747 &&
                value2 != 2751 &&
                value2 != 2755 &&
                value2 != 2759 &&
                value2 != 2763 &&
                value2 != 2767
              ) {
                conv(2720, 40, value2, value, index);
              }
            }
            // convert back overlay left arm
            if (value2 >= 2768 && value2 <= 2815) {
              if (
                value2 != 2768 &&
                value2 != 2772 &&
                value2 != 2776 &&
                value2 != 2780 &&
                value2 != 2784 &&
                value2 != 2788 &&
                value2 != 2792 &&
                value2 != 2796 &&
                value2 != 2800 &&
                value2 != 2804 &&
                value2 != 2808 &&
                value2 != 2812
              ) {
                conv(2768, 53, value2, value, index);
              }
            }

            /**
             * Left Arm Underlay
             */
            // convert right underlay left arm
            if (value2 >= 3088 && value2 <= 3135) {
              conv(3088, 96, value2, value, index, 0);
            }
            // convert left underlay left arm
            if (value2 >= 3040 && value2 <= 3087) {
              conv(3040, 96, value2, value, index, 0);
            }
            // convert top underlay left arm
            if (value2 >= 3136 && value2 <= 3151) {
              if (
                value2 != 3139 &&
                value2 != 3143 &&
                value2 != 3147 &&
                value2 != 3151
              ) {
                conv(3136, 96, value2, value, index);
              }
            }
            // convert bottom underlay left arm
            if (value2 >= 3152 && value2 <= 3167) {
              if (
                value2 != 3155 &&
                value2 != 3159 &&
                value2 != 3163 &&
                value2 != 3167
              ) {
                conv(3152, 100, value2, value, index);
              }
            }
            // convert front underlay left arm
            if (value2 >= 3168 && value2 <= 3215) {
              if (
                value2 != 3171 &&
                value2 != 3175 &&
                value2 != 3179 &&
                value2 != 3183 &&
                value2 != 3187 &&
                value2 != 3191 &&
                value2 != 3195 &&
                value2 != 3199 &&
                value2 != 3203 &&
                value2 != 3207 &&
                value2 != 3211 &&
                value2 != 3215
              ) {
                conv(3168, 104, value2, value, index);
              }
            }
            // convert back underlay left arm
            if (value2 >= 3216 && value2 <= 3263) {
              if (
                value2 != 3216 &&
                value2 != 3220 &&
                value2 != 3224 &&
                value2 != 3228 &&
                value2 != 3232 &&
                value2 != 3236 &&
                value2 != 3240 &&
                value2 != 3244 &&
                value2 != 3248 &&
                value2 != 3252 &&
                value2 != 3256 &&
                value2 != 3260
              ) {
                conv(3216, 117, value2, value, index);
              }
            }
          }
        });
      });
    }

    function undol(x) {
      s = JSON.parse(x);
      for (var b = Object.keys(s.layers), c = 0; c < b.length; c++) {
        for (var d = s.layers[b[c]], e = 0; e < d.faces.length; e++) {
          var f = d.faces[e];
          d.faces[e] = new THREE.Color().setRGB(f.r, f.g, f.b);
        }
      }
      paintArr = localStorage.getItem("paintArr");
      countT = localStorage.getItem("countT");
      paintArr = JSON.parse(paintArr);

      var layerJsonl = localStorage.getItem("layerJson");
      var layerJson = JSON.parse(layerJsonl);
      notSwitch = 1;

      function conv(startVal, cof, value2, value, index, und) {
        var idCell = (value2 - startVal) / 4;
        if (parseInt(idCell) === 0) {
          var idValue2 = value2 - cof;
        } else {
          if (und !== 0) {
            var idValue2 = value2 - (parseInt(idCell) + cof);
          } else {
            var idValue2 = value2 - cof;
          }
        }
        s.layers[Object.keys(s.layers)].faces[value2] =
          new THREE.Color().setRGB(
            value[value2].r,
            value[value2].g,
            value[value2].b
          );
      }

      function conv2(startVal, cof, value2, value, index, und) {
        var idCell = (value2 - startVal) / 4;
        if (parseInt(idCell) === 0) {
          var idValue2 = value2 - cof;
        } else {
          if (und !== 0) {
            var idValue2 = value2 - (parseInt(idCell) + cof);
          } else {
            var idValue2 = value2 - cof;
          }
        }
        s.layers[Object.keys(s.layers)].faces[value2] =
          new THREE.Color().setRGB(
            layerColor.faces[value2].r,
            layerColor.faces[value2].g,
            layerColor.faces[value2].b
          );
      }

      var layerColor;
      for (var b = Object.keys(layerJson.layers), c = 0; c < b.length; c++) {
        layerColor = layerJson.layers[b[c]];
      }

      paintArr = Object.keys(paintArr).map(function (key) {
        return paintArr[key];
      });

      if (countT < 0) {
        countT = 0;
      }
      localStorage.setItem("countT", countT);
      var paintArrNew = paintArr.slice(0, parseInt(countT));
      var paintArrOld = paintArr.slice(
        parseInt(paintArrNew.length),
        parseInt(paintArr.length)
      );
      if (selVal === "4px") {
        a.layerModel.parse(layerJsonl);
      }
      paintArrNew.forEach(function (value, index) {
        Object.keys(value).forEach(function (value2, index2) {
          if (selVal !== "3px") {
            s.layers[Object.keys(s.layers)].faces[value2] =
              new THREE.Color().setRGB(
                value[value2].r,
                value[value2].g,
                value[value2].b
              );
          } else {
            if (value2 < 2368 || value2 > 3263) {
              s.layers[Object.keys(s.layers)].faces[value2] =
                new THREE.Color().setRGB(
                  value[value2].r,
                  value[value2].g,
                  value[value2].b
                );
            }
            /**
             * Right Arm Overlay
             */
            if (
              (value2 >= 2368 && value2 <= 2415) ||
              (value2 >= 2416 && value2 <= 2463)
            ) {
              s.layers[Object.keys(s.layers)].faces[value2] =
                new THREE.Color().setRGB(
                  value[value2].r,
                  value[value2].g,
                  value[value2].b
                );
            }
            // convert top overlay right arm
            if (value2 >= 2464 && value2 <= 2479) {
              if (
                value2 != 2464 &&
                value2 != 2468 &&
                value2 != 2472 &&
                value2 != 2476
              ) {
                conv(2464, 1, value2, value, index);
              }
            }
            // convert bottom overlay right arm
            if (value2 >= 2480 && value2 <= 2495) {
              if (
                value2 != 2480 &&
                value2 != 2484 &&
                value2 != 2488 &&
                value2 != 2492
              ) {
                conv(2480, 5, value2, value, index);
              }
            }
            // convert front overlay right arm
            if (value2 >= 2496 && value2 <= 2543) {
              if (
                value2 != 2496 &&
                value2 != 2500 &&
                value2 != 2504 &&
                value2 != 2508 &&
                value2 != 2512 &&
                value2 != 2516 &&
                value2 != 2520 &&
                value2 != 2524 &&
                value2 != 2528 &&
                value2 != 2532 &&
                value2 != 2536 &&
                value2 != 2540
              ) {
                conv(2496, 9, value2, value, index);
              }
            }
            // convert back overlay right arm
            if (value2 >= 2544 && value2 <= 2591) {
              if (
                value2 != 2547 &&
                value2 != 2551 &&
                value2 != 2555 &&
                value2 != 2559 &&
                value2 != 2563 &&
                value2 != 2567 &&
                value2 != 2571 &&
                value2 != 2575 &&
                value2 != 2579 &&
                value2 != 2583 &&
                value2 != 2587 &&
                value2 != 2591
              ) {
                conv(2544, 20, value2, value, index);
              }
            }

            /**
             * Right Arm Underlay
             */
            // convert right underlay right arm
            if (value2 >= 2816 && value2 <= 2863) {
              conv(2816, 64, value2, value, index, 0);
            }
            // convert left underlay right arm
            if (value2 >= 2864 && value2 <= 2911) {
              conv(2864, 64, value2, value, index, 0);
            }
            // convert top underlay right arm
            if (value2 >= 2912 && value2 <= 2927) {
              if (
                value2 != 2912 &&
                value2 != 2916 &&
                value2 != 2920 &&
                value2 != 2924
              ) {
                conv(2912, 65, value2, value, index);
              }
            }
            // convert bottom underlay right arm
            if (value2 >= 2928 && value2 <= 2943) {
              if (
                value2 != 2928 &&
                value2 != 2932 &&
                value2 != 2936 &&
                value2 != 2940
              ) {
                conv(2928, 69, value2, value, index);
              }
            }
            // convert front underlay right arm
            if (value2 >= 2944 && value2 <= 2991) {
              if (
                value2 != 2944 &&
                value2 != 2948 &&
                value2 != 2952 &&
                value2 != 2956 &&
                value2 != 2960 &&
                value2 != 2964 &&
                value2 != 2968 &&
                value2 != 2972 &&
                value2 != 2976 &&
                value2 != 2980 &&
                value2 != 2984 &&
                value2 != 2988
              ) {
                conv(2944, 73, value2, value, index);
              }
            }
            // convert back underlay right arm
            if (value2 >= 2992 && value2 <= 3039) {
              if (
                value2 != 2995 &&
                value2 != 2999 &&
                value2 != 3003 &&
                value2 != 3007 &&
                value2 != 3011 &&
                value2 != 3015 &&
                value2 != 3019 &&
                value2 != 3023 &&
                value2 != 3027 &&
                value2 != 3031 &&
                value2 != 3035 &&
                value2 != 3039
              ) {
                conv(2992, 84, value2, value, index);
              }
            }

            /**
             * Left Arm Overlay
             */
            // convert right overlay left arm
            if (value2 >= 2640 && value2 <= 2687) {
              conv(2640, 32, value2, value, index, 0);
            }
            // convert left overlay left arm
            if (value2 >= 2592 && value2 <= 2639) {
              conv(2592, 32, value2, value, index, 0);
            }
            // convert top overlay left arm
            if (value2 >= 2688 && value2 <= 2703) {
              if (
                value2 != 2691 &&
                value2 != 2695 &&
                value2 != 2699 &&
                value2 != 2703
              ) {
                conv(2688, 32, value2, value, index);
              }
            }
            // convert bottom overlay left arm
            if (value2 >= 2704 && value2 <= 2719) {
              if (
                value2 != 2707 &&
                value2 != 2711 &&
                value2 != 2715 &&
                value2 != 2719
              ) {
                conv(2704, 36, value2, value, index);
              }
            }
            // convert front overlay left arm
            if (value2 >= 2720 && value2 <= 2767) {
              if (
                value2 != 2723 &&
                value2 != 2727 &&
                value2 != 2731 &&
                value2 != 2735 &&
                value2 != 2739 &&
                value2 != 2743 &&
                value2 != 2747 &&
                value2 != 2751 &&
                value2 != 2755 &&
                value2 != 2759 &&
                value2 != 2763 &&
                value2 != 2767
              ) {
                conv(2720, 40, value2, value, index);
              }
            }
            // convert back overlay left arm
            if (value2 >= 2768 && value2 <= 2815) {
              if (
                value2 != 2768 &&
                value2 != 2772 &&
                value2 != 2776 &&
                value2 != 2780 &&
                value2 != 2784 &&
                value2 != 2788 &&
                value2 != 2792 &&
                value2 != 2796 &&
                value2 != 2800 &&
                value2 != 2804 &&
                value2 != 2808 &&
                value2 != 2812
              ) {
                conv(2768, 53, value2, value, index);
              }
            }

            /**
             * Left Arm Underlay
             */
            // convert right underlay left arm
            if (value2 >= 3088 && value2 <= 3135) {
              conv(3088, 96, value2, value, index, 0);
            }
            // convert left underlay left arm
            if (value2 >= 3040 && value2 <= 3087) {
              conv(3040, 96, value2, value, index, 0);
            }
            // convert top underlay left arm
            if (value2 >= 3136 && value2 <= 3151) {
              if (
                value2 != 3139 &&
                value2 != 3143 &&
                value2 != 3147 &&
                value2 != 3151
              ) {
                conv(3136, 96, value2, value, index);
              }
            }
            // convert bottom underlay left arm
            if (value2 >= 3152 && value2 <= 3167) {
              if (
                value2 != 3155 &&
                value2 != 3159 &&
                value2 != 3163 &&
                value2 != 3167
              ) {
                conv(3152, 100, value2, value, index);
              }
            }
            // convert front underlay left arm
            if (value2 >= 3168 && value2 <= 3215) {
              if (
                value2 != 3171 &&
                value2 != 3175 &&
                value2 != 3179 &&
                value2 != 3183 &&
                value2 != 3187 &&
                value2 != 3191 &&
                value2 != 3195 &&
                value2 != 3199 &&
                value2 != 3203 &&
                value2 != 3207 &&
                value2 != 3211 &&
                value2 != 3215
              ) {
                conv(3168, 104, value2, value, index);
              }
            }
            // convert back underlay left arm
            if (value2 >= 3216 && value2 <= 3263) {
              if (
                value2 != 3216 &&
                value2 != 3220 &&
                value2 != 3224 &&
                value2 != 3228 &&
                value2 != 3232 &&
                value2 != 3236 &&
                value2 != 3240 &&
                value2 != 3244 &&
                value2 != 3248 &&
                value2 != 3252 &&
                value2 != 3256 &&
                value2 != 3260
              ) {
                conv(3216, 117, value2, value, index);
              }
            }
          }
        });
      });
      if (selVal === "3px") {
        a.layerModel.parse(layerJsonl);
      }
    }

    function m(a) {
      return Math.round(1e3 * a) / 1e3;
    }

    function n(d, e, mface) {
      (e.r = m(e.r)), (e.g = m(e.g)), (e.b = m(e.b));
      var f = parseInt(d.userData.uid);
      (c().faces[f] = e),
        c().visible &&
          ((!t[f] || c().order <= b(t[f]).order) &&
            (e.isAlpha() || ((t[f] = c().id), a.model.setFaceColor(d, e))),
          e.isAlpha() && t[f] && t[f] == c().id && o(d));
      a.model.setFaceColor(d, e);
      if (mface) {
        a.model.setFaceColor(mface, e);
      }
    }

    function o(b) {
      var c = parseInt(b.userData.uid),
        e = !1;
      d(function (d) {
        return !q(b, d).isAlpha() && d.visible
          ? ((t[c] = d.id), a.model.setFaceColor(b, q(b, d)), (e = !0), !0)
          : void 0;
      }),
        e ||
          ((t[c] = void 0),
          a.model.setFaceColor(b, new THREE.Color().setAlpha()));
    }

    function p() {
      a.model.loopOverFaces(function (a) {
        o(a);
      });
    }

    function q(a, b) {
      return (b = b || c()), b.faces[parseInt(a.userData.uid)];
    }

    function r(a) {
      var d = parseInt(a.userData.uid);
      return b(t[d]) || c();
    }

    var s = {
        activeLayerId: void 0,
        layers: {},
      },
      fx,
      t = {};

    return {
      add: e,
      get: b,
      remove: f,
      removeAll: g,
      loop: d,
      select: i,
      changeOrder: h,
      active: c,
      toggleVisibility: j,
      renderModel: p,
      getFaceColor: q,
      setFaceColor: n,
      getTopLayerOf: r,
      parse: l,
      undoparse: undol,
      redoparse: redol,
      stringify: k,
    };
  }),
  /*
   * Basic functions to work with model
   */
  (Editor.Model = function (a) {
    "use strict";

    function b(a, b, c, d) {
      (d = d || 0),
        (y[a] = new THREE.Mesh(
          new THREE.CubeGeometry(
            b.width + d,
            b.height + d,
            b.depth + d,
            b.width,
            b.height,
            b.depth
          ),
          new THREE.MeshFaceMaterial(x)
        )),
        (y[a].name = a),
        z.add(y[a]),
        (y[a].position.x = c.x),
        (y[a].position.y = c.y),
        (y[a].position.z = c.z);
    }

    function c(a, b) {
      (y[a].mirrorPart = y[b]), (y[b].mirrorPart = y[a]);
    }

    function d(a, b) {
      (y[a].underlay = y[b]), (y[b].overlay = y[a]);
    }

    function e() {
      (u = a.width()), (v = a.height()), B.setSize(u, v);
    }

    function f(a) {
      var vector = new THREE.Vector3(
        (a.left / u) * 2 - 1,
        -(a.top / v) * 2 + 1,
        0.5
      );
      var projector = new THREE.Projector();
      var ray = projector.pickingRay(vector, C);
      var d = [];

      for (e = 0; e < z.children.length; e++) {
        if (z.children[e].visible) {
          d.push(z.children[e]);
        }
      }

      var intersects = ray.intersectObjects(d);
      if (intersects.length > 0) {
        return intersects[0].face;
      }
    }

    function fnew(a) {
      var vector = new THREE.Vector3(
        (a.left / u) * 2 - 1,
        -(a.top / v) * 2 + 1,
        0.5
      );
      var projector = new THREE.Projector();
      var ray = projector.pickingRay(vector, C);

      var d = [];
      for (e = 0; e < z.children.length; e++) {
        if (z.children[e].visible) {
          d.push(z.children[e]);
        }
      }

      return ray.intersectObjects(d);
    }

    function fold(a) {
      var b = new THREE.Vector3(
        2 * (a.left / u) - 1,
        2 * -(a.top / v) + 1,
        0.5
      );
      A.unprojectVector(b, C);
      for (
        var c = new THREE.Raycaster(C.position, b.sub(C.position).normalize()),
          d = [],
          e = 0;
        e < z.children.length;
        e++
      )
        z.children[e].visible && d.push(z.children[e]);
      var f = c.intersectObjects(d);
      return f;
    }

    function g(a) {
      (z.rotation.y -= 0.02 * a.y), (z.rotation.x -= 0.02 * a.x);
    }

    function h(a) {
      // setTimeout( function () {
      requestAnimationFrame(h);
      // controls.update();
      // }, 1000 / 30 );
    }

    function j(a, b) {
      (a.materialIndex = 1),
        b.isAlpha() && (a.materialIndex = 0),
        (a.color = b);
    }

    function k(a) {
      return a.color;
    }

    function l(a, b) {
      var c = b.geometry.depth / b.geometry.depthSegments;
      c += c / 4;
      for (
        var d = [], e = b.geometry.faces, f = a.centroid, g = 0;
        g < e.length;
        g++
      ) {
        var h = e[g].centroid,
          i = Math.sqrt(
            (f.x - h.x) * (f.x - h.x) +
              (f.y - h.y) * (f.y - h.y) +
              (f.z - h.z) * (f.z - h.z)
          );
        c >= i && d.push(e[g]);
      }
      return d;
    }

    function side(a, b) {
      var c = b.geometry.widthSegments;
      for (
        var d = [], e = b.geometry.faces, f = a.centroid, g = 0;
        g < e.length;
        g++
      ) {
        if (
          e[g].normal.x == a.normal.x &&
          e[g].normal.y == a.normal.y &&
          e[g].normal.z == a.normal.z
        ) {
          d.push(e[g]);
        }
      }
      return d;
    }

    function m(a) {
      var b = a.object;
      // var b = a;
      if (a.object.mirrorPart) var b = a.object.mirrorPart;
      var c = b.geometry.widthSegments,
        d = b.geometry.heightSegments;
      if (
        b.name !== "body" &&
        b.name !== "head" &&
        b.name !== "headOverlay" &&
        b.name !== "bodyOverlay"
      ) {
        if (
          (b.name != "torso" ||
            (a.face.normal.x != 1 && a.face.normal.x != -1) ||
            (c = b.geometry.depthSegments),
          a.face.normal.z == 1 ||
            a.face.normal.z == -1 ||
            a.face.normal.y == 1 ||
            a.face.normal.y == -1)
        )
          var e = a.faceIndex - (2 * ((a.faceIndex % c) - c / 2) + 1);
        // else if (1 == a.face.normal.x || -1 == a.face.normal.x) var e = a.faceIndex - c * d * -a.face.normal.x - (2 * (a.faceIndex % c - c / 2) + 1);
        else if (a.face.normal.x == 1 || a.face.normal.x == -1)
          var e =
            a.faceIndex -
            4 * d * -a.face.normal.x -
            (2 * ((a.faceIndex % 4) - 4 / 2) + 1);
        return b.geometry.faces[e];
      } else {
        var e = a.faceIndex;
        return b.geometry.faces[e];
      }
    }

    function n(a, b, c) {
      for (var d = z.children.length - 1; d >= 0; d--) {
        var e = {};
        if (!c || c == z.children[d]) {
          for (var f = 0; f < z.children[d].geometry.faces.length; f++) {
            var g = z.children[d].geometry.faces[f];
            if (JSON.stringify(e) != JSON.stringify(g.normal)) {
              e = g.normal;
              var h = 0,
                i = 0,
                j = z.children[d].geometry.depthSegments,
                k = z.children[d].geometry.heightSegments;
              (Math.abs(e.z) > 0 || Math.abs(e.y) > 0) &&
                ((j = z.children[d].geometry.widthSegments),
                (k = z.children[d].geometry.depthSegments));
            }
            for (var l = 0; l < a.length; l++) {
              if (
                z.children[d].name == a[l][3] &&
                ((a[l][2] == "front" && g.normal.z == 1) ||
                  (a[l][2] == "back" && g.normal.z == -1) ||
                  (a[l][2] == "left" && g.normal.x == 1) ||
                  (a[l][2] == "right" && g.normal.x == -1) ||
                  (a[l][2] == "top" && g.normal.y == 1) ||
                  (a[l][2] == "bottom" && g.normal.y == -1))
              ) {
                var m = h + a[l][0],
                  n = i + a[l][1];
                a[l][4] && (n = 2 * (k / 2 - i) - 1 + a[l][1] + i),
                  a[l][5] && (m -= 2 * ((m % j) - j / 2) + 1),
                  b(m, n, g);
              }
            }
            h++, h > j - 1 && ((h = 0), i++);
          }
        }
      }
    }

    function o(a) {
      for (var b = 0; b < z.children.length; b++) {
        for (var c = 0; c < z.children[b].geometry.faces.length; c++)
          a(z.children[b].geometry.faces[c], z.children[b], b, c);
      }
    }

    function p(a) {
      for (var b = 0; b < z.children.length; b++) a(z.children[b]);
    }

    function redraw(a) {
      D.remove(z);

      (w = !1),
        (x = [
          new THREE.MeshBasicMaterial({
            color: 4473924,
            wireframe: !0,
            wireframeLinewidth: 0.3,
          }),
          new THREE.MeshBasicMaterial({
            color: 16777215,
            vertexColors: THREE.FaceColors,
            overdraw: 0.5,
          }),
        ]),
        (y = {}),
        (z = new THREE.Object3D());

      if (selVal === "3px") {
        px3();
        for (var E = 0, F = 0; F < z.children.length; F++) {
          z.children[F].groupIndex = F;
          for (var G = 0; G < z.children[F].geometry.faces.length; G++) {
            var H = z.children[F].geometry.faces[G];
            (H.materialIndex = 0),
              (H.groupIndex = F),
              (H.faceIndex = G),
              (H.color = new THREE.Color().setAlpha()),
              (H.userData = {
                uid: E,
              }),
              E++;
          }
        }
      } else {
        px4();
        for (var E = 0, F = 0; F < z.children.length; F++) {
          z.children[F].groupIndex = F;
          for (var G = 0; G < z.children[F].geometry.faces.length; G++) {
            var H = z.children[F].geometry.faces[G];
            (H.materialIndex = 0),
              (H.groupIndex = F),
              (H.faceIndex = G),
              (H.color = new THREE.Color().setAlpha()),
              (H.userData = {
                uid: E,
              }),
              E++;
          }
        }
      }
      z.position.setY(2);
      D.add(z);
      // C.position.z = 800;
    }

    function q(a) {
      return y[a];
    }

    function r(a) {
      if (void 0 == a.offsetX) {
        var b = a.pageX - J.left,
          c = a.pageY - J.top;
      } else {
        var b = a.offsetX,
          c = a.offsetY;
      }
      return {
        left: b,
        top: c,
      };
    }

    function boost() {
      for (var a = 0; a < z.children.length; a++) {
        var b = z.children[a],
          c = new THREE.Vector3();
        c.getPositionFromMatrix(b.matrixWorld),
          (b.zBoost = c.distanceTo(C.position)),
          b.underlay && (b.zBoost += -0.05);
      }
    }

    function s() {
      var a,
        b,
        children = z.children.length,
        c = new THREE.Vector3();
      for (a = 0; a < children; a++) {
        b = z.children[a];
        c.getPositionFromMatrix(b.matrixWorld);
        b.zBoost = c.distanceTo(C.position);
        b.underlay && (b.zBoost += -0.05);
      }
      B.render(D, C);
    }

    function s1() {
      B.render(D, C);
    }

    function t() {
      x[0].wireframe = false;
      x[0].transparent = true;
      x[0].opacity = 0;
    }

    function t1() {
      x[0].wireframe = true;
      x[0].transparent = false;
      x[0].opacity = 1;
    }

    function px3() {
      b(
        "headOverlay",
        {
          width: 8,
          height: 8,
          depth: 8,
        },
        {
          x: 0,
          y: 10,
          z: 0,
        },
        0.5
      ),
        b(
          "bodyOverlay",
          {
            width: 8,
            height: 12,
            depth: 4,
          },
          {
            x: 0,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "legROverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -2,
            y: -12,
            z: 0,
          },
          0.5
        ),
        b(
          "legLOverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 2,
            y: -12,
            z: 0,
          },
          0.5
        ),
        b(
          "head",
          {
            width: 8,
            height: 8,
            depth: 8,
          },
          {
            x: 0,
            y: 10,
            z: 0,
          }
        ),
        b(
          "body",
          {
            width: 8,
            height: 12,
            depth: 4,
          },
          {
            x: 0,
            y: 0,
            z: 0,
          }
        ),
        b(
          "legR",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -2,
            y: -12,
            z: 0,
          }
        ),
        b(
          "legL",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 2,
            y: -12,
            z: 0,
          }
        ),
        b(
          "armROverlay",
          {
            width: 3,
            height: 12,
            depth: 4,
          },
          {
            x: -5.5,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "armLOverlay",
          {
            width: 3,
            height: 12,
            depth: 4,
          },
          {
            x: 5.5,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "armR",
          {
            width: 3,
            height: 12,
            depth: 4,
          },
          {
            x: -5.5,
            y: 0,
            z: 0,
          }
        ),
        b(
          "armL",
          {
            width: 3,
            height: 12,
            depth: 4,
          },
          {
            x: 5.5,
            y: 0,
            z: 0,
          }
        ),
        c("legR", "legL"),
        c("legROverlay", "legLOverlay"),
        d("headOverlay", "head"),
        d("bodyOverlay", "body"),
        d("legLOverlay", "legL"),
        d("legROverlay", "legR"),
        c("armR", "armL"),
        c("armROverlay", "armLOverlay"),
        d("armROverlay", "armR"),
        d("armLOverlay", "armL");
    }

    function px4() {
      b(
        "headOverlay",
        {
          width: 8,
          height: 8,
          depth: 8,
        },
        {
          x: 0,
          y: 10,
          z: 0,
        },
        0.5
      ),
        b(
          "bodyOverlay",
          {
            width: 8,
            height: 12,
            depth: 4,
          },
          {
            x: 0,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "legROverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -2,
            y: -12,
            z: 0,
          },
          0.5
        ),
        b(
          "legLOverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 2,
            y: -12,
            z: 0,
          },
          0.5
        ),
        b(
          "head",
          {
            width: 8,
            height: 8,
            depth: 8,
          },
          {
            x: 0,
            y: 10,
            z: 0,
          }
        ),
        b(
          "body",
          {
            width: 8,
            height: 12,
            depth: 4,
          },
          {
            x: 0,
            y: 0,
            z: 0,
          }
        ),
        b(
          "legR",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -2,
            y: -12,
            z: 0,
          }
        ),
        b(
          "legL",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 2,
            y: -12,
            z: 0,
          }
        ),
        b(
          "armROverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -6,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "armLOverlay",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 6,
            y: 0,
            z: 0,
          },
          0.5
        ),
        b(
          "armR",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: -6,
            y: 0,
            z: 0,
          }
        ),
        b(
          "armL",
          {
            width: 4,
            height: 12,
            depth: 4,
          },
          {
            x: 6,
            y: 0,
            z: 0,
          }
        ),
        c("legR", "legL"),
        c("legROverlay", "legLOverlay"),
        d("headOverlay", "head"),
        d("bodyOverlay", "body"),
        d("legLOverlay", "legL"),
        d("legROverlay", "legR"),
        c("armR", "armL"),
        c("armROverlay", "armLOverlay"),
        d("armROverlay", "armR"),
        d("armLOverlay", "armL");
    }

    var u = a.width(),
      v = a.height(),
      w = !1,
      x = [
        new THREE.MeshBasicMaterial({
          color: 4473924,
          wireframe: !0,
          wireframeLinewidth: 0.3,
        }),
        new THREE.MeshBasicMaterial({
          color: 16777215,
          vertexColors: THREE.FaceColors,
          overdraw: 0.5,
        }),
      ],
      y = {},
      z = new THREE.Object3D();
    if (selVal === "3px") {
      px3();
      for (var E = 0, F = 0; F < z.children.length; F++) {
        z.children[F].groupIndex = F;
        for (var G = 0; G < z.children[F].geometry.faces.length; G++) {
          var H = z.children[F].geometry.faces[G];
          (H.materialIndex = 0),
            (H.groupIndex = F),
            (H.faceIndex = G),
            (H.color = new THREE.Color().setAlpha()),
            (H.userData = {
              uid: E,
            }),
            E++;
        }
      }
    } else {
      px4();
      for (var E = 0, F = 0; F < z.children.length; F++) {
        z.children[F].groupIndex = F;
        for (var G = 0; G < z.children[F].geometry.faces.length; G++) {
          var H = z.children[F].geometry.faces[G];
          (H.materialIndex = 0),
            (H.groupIndex = F),
            (H.faceIndex = G),
            (H.color = new THREE.Color().setAlpha()),
            (H.userData = {
              uid: E,
            }),
            E++;
        }
      }
    }
    A = new THREE.Projector();
    B = new THREE.CanvasRenderer();
    B.sortObjects = !1;

    var cachedWidth = $(window).width();
    var cachedMetawidth = currentOrientation();
    console.log(cachedMetawidth);

    window.addEventListener("resize", onWindowResize, false);
    z.position.setY(2);
    var correctionW = 1.7,
      correctionH = 1.7;
    // Check if not a phone device
    if (!md.phone()) {
      if (u <= "360") {
        B.domElement.height = 550;
        $("#editor").css("height", "550px");
        u = "360";
        v = "550";
      } else {
        B.domElement.height = 810;
        $("#editor").css("height", "810px");
        u = $("#editor").width();
        v = $("#editor").height();
      }
      C = new THREE.OrthographicCamera(
        -zoom * u * correctionW,
        zoom * u * correctionW,
        zoom * v * correctionH,
        -zoom * v * correctionH,
        1,
        10000
      );
    } else {
      C = new THREE.OrthographicCamera(
        -zoom * u * correctionW,
        zoom * u * correctionW,
        zoom * v * correctionH,
        -zoom * v * correctionH,
        1,
        10000
      );
    }

    C.position.z = 800;
    controls = new THREE.OrbitControls(C, B.domElement);
    controls.userRotateSpeed = 3;
    controls.noPan = true;
    controls.noZoom = true;
    D = new THREE.Scene();
    D.add(z);
    var I = $(B.domElement).attr({
      id: "model-render",
    });
    $("#editor").append(I), e();
    // If user change device mode (portrait/landscape) change data for camera, renderer etc.
    function onWindowResize() {
      var newWidth = $(window).width();
      var newMetawidth = currentOrientation();
      if (newWidth !== cachedWidth && newMetawidth === cachedMetawidth) {
        // DO RESIZE HERE
        cachedWidth = newWidth;
        if (u <= "360") {
          B.domElement.height = 550;
          $("#editor").css("height", "550px");
          u = "360";
          v = "550";
        } else {
          (u = $("#editor").width()), (v = $("#editor").height());
        }
        C.left = -zoom * u * correctionW;
        C.right = zoom * u * correctionW;
        C.top = zoom * v * correctionH;
        C.bottom = -zoom * v * correctionH;
        C.updateProjectionMatrix();
        B.setSize(u, v);
        s();
      }
    }

    var J = I.offset();
    return {
      pingIntersets: f,
      pingIntersetsNew: fnew,
      rotateTo: g,
      getFaceColor: k,
      setFaceColor: j,
      getMirroredFace: m,
      getAdjacentFaces: l,
      getSideFaces: side,
      loopOverFaces: o,
      loopOverMap: n,
      loopOverParts: p,
      redrawModel: redraw,
      getPart: q,
      $dom: I,
      offset: J,
      cursorOffset: r,
      render: s,
      render1: s1,
      turnOffGrid: t,
      turnOnGrid: t1,
      animateTo: h,
      b: b,
      c: c,
      px4: px4,
      px3: px3,
    };
  }),
  (Editor.Toolbar = function (a, b) {
    "use strict";

    function c() {
      d(h);
    }

    function d(c) {
      g && g.getName() != "ecmUndo" && (h = g.getName());
      for (var d = 0; d < i.length; d++) {
        if (i[d].getName() == c) {
          return (g = i[d]);
        }
      }
    }

    function e() {
      d("ecmPaint");
    }

    function f() {
      d("ecmImport");
    }

    var g = !1,
      h = "ecmPaint",
      i = [];
    i.push(Editor.PaintMode(b));
    return {
      getModeObj: function () {
        return g;
      },
      getPaintMethod: i,
      switchToPrevMode: c,
      changeMode: d,
      changeToDefault: e,
      changeToStart: f,
    };
  }),
  (Editor.Toolbox = function (a, b) {
    "use strict";

    function c(b, c) {
      return d.push([b, c]), (e[b] = c), a;
    }

    var d = [],
      e = {};
    return {
      refs: e,
      add: c,
      show: function (a) {
        typeof a === "string" && (a = [a]);
        for (var b = 0; b < d.length; b++) {
          for (var c = 0; c < a.length; c++) a[c] == d[b][0] && d[b][1].show();
        }
      },
      hideAll: function () {
        for (var a = 0; a < d.length; a++) d[a][1].hide();
      },
    };
  }),
  (Editor.Editor = function (a, b, c) {
    "use strict";
    var aOld = a;

    function skin_redraw() {
      g.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      }),
        (paintArr = []),
        (countT = 0),
        (baseImage = g.transporter.download());
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      selVal = localStorage.getItem("selVal");
      presetBlock.val(selVal);
      g.model.redrawModel(function (a) {});
      if (selVal === "3px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else {
        g.transporter.setUVImage(uploadedImage, "skin64");
      }
    }

    function skin_redraw_after_reload() {
      g.model.redrawModel(function (a) {});
      if (selVal === "3px" && pxsSel === "4px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px_switch");
      } else if (selVal === "4px" && pxsSel === "4px") {
        g.transporter.setUVImage(uploadedImage, "skin64");
      } else if (selVal === "4px" && pxsSel === "3px") {
        g.transporter.setUVImage(uploadedImage, "skin64_switch");
      } else if (selVal === "3px" && pxsSel === "32px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else if (selVal === "3px" && pxsSel === "3px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else if (selVal === "4px" && pxsSel === "32px") {
        g.transporter.setUVImage(uploadedImage, "skin64");
      } else {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      }
      g.modelToggles.toggle();
    }

    function d(a, b) {
      return Math.sqrt(
        Math.pow(b.left - a.left, 2) + Math.pow(b.top - a.top, 2)
      );
    }

    function e(a, b) {
      return Math.atan2(b.left - a.left, b.top - a.top);
    }

    // function to set user cursor class to grabbing-cursor or grab or cursor
    function f(a) {
      l != a &&
        ((l = a),
        a == "grab"
          ? (g.model.$dom.removeClass("grabbing-cursor"),
            g.model.$dom.addClass("grab-cursor"),
            g.model.$dom.css("cursor", ""))
          : a == "grabbing"
          ? (g.model.$dom.addClass("grabbing-cursor"),
            g.model.$dom.removeClass("grab-cursor"),
            g.model.$dom.css("cursor", ""))
          : g.model.$dom.css("cursor", a));
    }

    var g = {};
    (g.model = new Editor.Model(a, g)),
      (g.modelToggles = new Editor.ModelToggles(a, g)),
      (g.layerPresenter = new Editor.LayerPresenter(b, g)),
      (g.layerModel = new Editor.LayerModel(g)),
      (g.canvas = new Editor.Canvas()),
      (g.PaintMode = new Editor.PaintMode(g)),
      (g.undo = new Editor.Undo(a, g)),
      (g.redo = new Editor.Redo(a, g)),
      (g.toolbox = new Editor.Toolbox(c, g)),
      (g.toolbar = new Editor.Toolbar(b, g)),
      (g.transporter = new Editor.Transporter(g)),
      g.transporter.loadFromLocalStorage(),
      (g.filebutton = new Editor.FileButton(a, g));
if (localStorage.getItem("paintArr") == null) {
  // window.location.reload(); 
}

    // if (localStorage.getItem('presetDB')) {
    //     // skin_redraw_after_reload();
    //     skin_redraw();
    // }

    var t = 0;
    if (t === 0) {
      baseImage = g.transporter.getCanvas();
      t++;
    }

    var c = document.getElementById("uploadCanvas");
    var uploadCanvasData = c.toDataURL("image/png");
    var ctx = c.getContext("2d");
    ctx.clearRect(0, 0, 64, 64);
    // ctx.drawImage(localStorage.getItem('uploadedImage'), 0, 0);

    var image = new Image();
    if (localStorage.getItem("newuploaded_skin")) {
      image.src = localStorage.getItem("newuploaded_skin");
    } else {
      image.src = localStorage.getItem("uploadedImage");
    }
    image.onload = function () {
      ctx.drawImage(image, 0, 0);
    };

    var resAll = localStorage.getItem("resetAll");
    if (!localStorage.getItem("layerJson")) {
      g.layerPresenter.checkpoint(!0);
    }

    var dom = $($("#toggles-template").html());
    var modelBodyHTML = dom.find(".model-body").html();
    localStorage.setItem("basicModelBody", modelBodyHTML);

    if (localStorage.getItem("model-underlay") === "0") {
      $(".controls .underlay").addClass("unchecked");
    }

    if (localStorage.getItem("model-overlay") === "0") {
      $(".controls .overlay").addClass("unchecked");
    }

    g.modelToggles.toggle();

    if (
      !localStorage.getItem("uploadedImage") &&
      !localStorage.getItem("presetDB")
    ) {
      g.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      });
      g.model.render();
      (baseImage = g.transporter.download()), (countT = 0), (paintArr = []);
      localStorage.setItem("selVal", "4px");
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      localStorage.setItem("switchArr", []);
      localStorage.setItem("countT", 0);
      localStorage.setItem("uploadedImage", baseImage);
      g.transporter.setUVImage(baseImage, "skin64");
    }

    var isInIframe = function inIframe() {
      try {
        return window.self !== window.top;
      } catch (e) {
        return true;
      }
    };

    var x;
    setInterval(function () {
      x = readCookie("bHistory");
      if (!x && !isInIframe) {
        g.model.loopOverParts(function (a) {
          for (var c = a.geometry.faces, d = 0; d < c.length; d++)
            g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
        });
        g.model.render();
        (baseImage = g.transporter.download()),
          (countT = 0),
          (paintArr = []),
          (uploadedImage = baseImage);
        localStorage.setItem("selVal", "4px");
        var output = JSON.stringify(convArrToObj(paintArr));
        localStorage.setItem("paintArr", output);
        localStorage.setItem("switchArr", []);
        localStorage.setItem("countT", 0);
        localStorage.setItem("uploadedImage", baseImage);
        window.location.href = skindex_url + "./index3.html";
      }
    }, 3000);
    x = readCookie("bHistory");
    if (pxsSel === "32px") {
      uploadedImage = localStorage.getItem("uploadedImage");
    }

    if (!x) {
      g.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      });
      g.model.render();
      (baseImage = g.transporter.download()), (countT = 0), (paintArr = []);
      localStorage.setItem("selVal", "4px");
      localStorage.setItem("switchArr", []);
      localStorage.setItem("countT", 0);
      selVal = "4px";
      g.model.redrawModel(function (a) {});
      if (selVal === "3px" && pxsSel === "4px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px_switch");
      } else if (selVal === "4px" && pxsSel === "4px") {
        g.transporter.setUVImage(uploadedImage, "skin64");
      } else if (selVal === "4px" && pxsSel === "3px") {
        g.transporter.setUVImage(uploadedImage, "skin64_switch");
      } else if (selVal === "3px" && pxsSel === "32px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else if (selVal === "3px" && pxsSel === "3px") {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else if (selVal === "4px" && pxsSel === "32px") {
        g.transporter.setUVImage(uploadedImage, "skin64");
      } else {
        g.transporter.setUVImage(uploadedImage, "skin64_3px");
      }
      g.modelToggles.toggle();
    }

    if (selVal === "3px") {
      presetBlock.val("3px").change();
    } else {
      presetBlock.val("4px").change();
    }
    var upImag = localStorage.getItem("newuploaded_skin");
    var upImagPath = localStorage.getItem("newuploaded_skin_path");
    var upImagSize = localStorage.getItem("newuploaded_skin_size");
    var presetDB = localStorage.getItem("presetDB");
    var reloadP = localStorage.getItem("reloadP");
    var editorSkinUrl = localStorage.getItem("editorSkinUrl");
    var editorSkinReload = localStorage.getItem("editorSkinReload");
    if (presetDB && reloadP !== "1") {
      if (parseInt(presetDB) === 3) {
        if (localStorage.getItem("selVal") === "4px") {
          presetBlock.val("4px").change();
          selVal = "4px";
          g.model.redrawModel(function (a) {});
          g.model.loopOverParts(function (a) {
            for (var c = a.geometry.faces, d = 0; d < c.length; d++)
              g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
          });
          g.transporter.setUVImage(upImag, "skin64_switch");
        } else {
          presetBlock.val("3px").change();
          selVal = "3px";
          g.model.redrawModel(function (a) {});
          g.model.loopOverParts(function (a) {
            for (var c = a.geometry.faces, d = 0; d < c.length; d++)
              g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
          });
          g.transporter.setUVImage(upImag, "skin64_3px");
        }
      } else {
        g.model.redrawModel(function (a) {});
        if (parseInt(upImagSize) === 32) {
          g.model.loopOverParts(function (a) {
            for (var c = a.geometry.faces, d = 0; d < c.length; d++)
              g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
          });
          localStorage.setItem("presetDB", "0");
          g.transporter.setUVImage(upImag, "skin32");
        } else {
          if (localStorage.getItem("selVal") === "3px") {
            presetBlock.val("3px").change();
            selVal = "3px";
            g.model.loopOverParts(function (a) {
              for (var c = a.geometry.faces, d = 0; d < c.length; d++)
                g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
            });
            g.transporter.setUVImage(upImag, "skin64_3px");
          } else {
            presetBlock.val("4px").change();
            selVal = "4px";
            g.model.loopOverParts(function (a) {
              for (var c = a.geometry.faces, d = 0; d < c.length; d++)
                g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
            });
            g.transporter.setUVImage(upImag, "skin64");
          }
        }
      }
      localStorage.setItem("reloadP", "1");
      var stringifyLayer = g.layerModel.stringify();
      g.layerModel.parse(stringifyLayer);
      g.layerModel.renderModel();
      g.model.render();
    }

    var rel = localStorage.getItem("reload");
    var selV = localStorage.getItem("selVal");

    $(".avatar-creator").on("change", presetBlockString, function () {
      if (selVal !== presetBlock.val()) {
        // save data to user localstorage
        if (paintArr.length > 0) {
          var output = JSON.stringify(convArrToObj(paintArr));
          localStorage.setItem("paintArr", output);
          localStorage.setItem("countT", countT);
        }

        selVal = presetBlock.val();
        localStorage.setItem("selVal", selVal);

        if (notSwitch !== 1) {
          var sel = {};
          if (countT) {
            sel[countT] = selVal;
          } else {
            if (!localStorage.getItem("paintArr")) {
              localStorage.removeItem("switchArr");
            }
            sel[0] = selVal;
          }
          // var switchArr = [];
          var switchArr = localStorage.getItem("switchArr");

          if (switchArr) {
            switchArr = JSON.parse(switchArr);
          } else {
            var switchAr = [];
            switchAr.push(sel);
            switchAr = JSON.stringify(switchAr);
            localStorage.setItem("switchArr", switchAr);
          }
        }

        skin_redraw_after_reload();
      } else {
        selVal = presetBlock.val();
      }
      localStorage.setItem("countT", countT);
    });
    var h,
      i,
      j,
      k = "",
      t,
      l = "drag",
      clicking = false,
      sel = false,
      curPos,
      mirrorFace,
      cNew,
      hexColor;

    // mousemove event
    var cmove, bmove;

    // mouseup event
    var cup, bup;

    // mobile vars
    var touches = "",
      first = "";

    var c = document.getElementById("uploadCanvas");
    var uploadCanvasData = c.toDataURL("image/png");
    var ctx = c.getContext("2d");

    g.model.$dom
      .mousedown(function (a) {
        a.preventDefault();
        if (!$(".skin-body-overlay-content").is(".open")) {
          var b = g.model.cursorOffset(a),
            c = g.model.pingIntersets(b);
          clicking = true;
          if (typeof c === "undefined") {
            k = "grabbing";
            !mobileEvent &&
              $("#model-render")
                .removeClass("crosshair")
                .css("cursor", "")
                .addClass("grabbing-cursor");
          } else {
            !mobileEvent &&
              $("#model-render")
                .addClass("crosshair")
                .removeClass("grabbing-cursor")
                .css("cursor", "crosshair");
            var cNew = g.model.pingIntersetsNew(b);
            if ($("#pickcolor").hasClass("active")) {
              if (c.color.r === 0 && c.color.g === 1 && c.color.b === 0) {
                c = cNew[1].face;
                if (c.color.r === 0 && c.color.g === 1 && c.color.b === 0) {
                  c.color.r = 0;
                  c.color.g = 0;
                  c.color.b = 0;
                }
              }
              var rgbColor = [c.color.r, c.color.g, c.color.b];
              console.log("rgbColor - ", rgbColor);
              var picker = $.farbtastic("#colorpicker");
              var pHex = rgbToHex(c.color.r, c.color.g, c.color.b);
              console.log("pHex - ", pHex);
              var pHsl = rgb2hsl(c.color.r, c.color.g, c.color.b);
              console.log("pHsl - ", pHsl);
              hexColor = picker.pack(rgbColor);
              console.log("hexColor - ", hexColor);
              picker.setColor(hexColor);
              $("#colorholder_div").css("background", hexColor);
              var rgb = tinycolor($("#color").val()).darken(15).toString();
              $("#color").css({
                "border-color": rgb,
                "border-width": "1px !important",
                "border-style": "solid",
                "border-radius": "50%",
              });
            } else {
              // if eraser active and model pixel is blank dont draw
              if (
                $("#erasepixel").hasClass("active") &&
                c.color.r === 0 &&
                c.color.g === 1 &&
                c.color.b === 0
              ) {
                return;
              }

              k = "drawing";
              cc = $("#color").val();
              faceColor = c.color;
              posCur = c;
              if ($(".avatar-creator a").hasClass("mirrorToolOn")) {
                mirrorFace = g.model.getMirroredFace(cNew[0]);
              }
              g.toolbar.getPaintMethod[0].mousedown(
                c,
                b,
                curPos,
                cNew,
                mirrorFace
              );
              g.toolbar.getPaintMethod[0].mouseup(
                c,
                b,
                curPos,
                cNew,
                mirrorFace
              );
              posC = c;
              curPos = posCur;
            }
          }
        }
      })
      .mousemove(function (a) {
        a.preventDefault();
        if ($("#pickcolor").hasClass("active")) {
          var bmove = g.model.cursorOffset(a),
            cmove = g.model.pingIntersets(bmove);
          posCur = cmove;
          if (typeof cmove !== "undefined" && !clicking) {
            k = "drawing";
            !mobileEvent &&
              $("#model-render").hasClass("grabbing-cursor") &&
              $("#model-render")
                .addClass("crosshair")
                .removeClass("grabbing-cursor")
                .css("cursor", "crosshair");
          } else {
            !mobileEvent &&
              $("#model-render").hasClass("crosshair") &&
              $("#model-render")
                .removeClass("crosshair")
                .css("cursor", "")
                .addClass("grabbing-cursor");
          }
        } else {
          if (clicking && a.which == "1" && k == "grabbing") {
            g.model.animateTo();
            g.model.render();
          } else {
            var bmove = g.model.cursorOffset(a),
              cmove = g.model.pingIntersets(bmove);
            posCur = cmove;
            if (typeof cmove !== "undefined" && !clicking) {
              k = "drawing";
              !mobileEvent &&
                $("#model-render").hasClass("grabbing-cursor") &&
                $("#model-render")
                  .addClass("crosshair")
                  .removeClass("grabbing-cursor")
                  .css("cursor", "crosshair");
            } else if (
              typeof cmove !== "undefined" &&
              k == "drawing" &&
              clicking
            ) {
              controls.enabled = false;
              if (!curPos) curPos = cmove;
              if (
                curPos.userData.uid !== cmove.userData.uid &&
                !$("#bucket").hasClass("active")
              ) {
                // if eraser active and model pixel is blank dont draw
                if (
                  $("#erasepixel").hasClass("active") &&
                  cmove.color.r === 0 &&
                  cmove.color.g === 1 &&
                  cmove.color.b === 0
                ) {
                  return;
                }
                if ($(".avatar-creator a").hasClass("mirrorToolOn")) {
                  cNew = g.model.pingIntersetsNew(bmove);
                  mirrorFace = g.model.getMirroredFace(cNew[0]);
                }
                g.toolbar.getPaintMethod[0].mousemove(
                  cmove,
                  bmove,
                  curPos,
                  cNew,
                  mirrorFace
                );
                g.toolbar.getPaintMethod[0].mouseup(
                  cmove,
                  bmove,
                  curPos,
                  cNew,
                  mirrorFace
                );
              }
              posC = cmove;
              curPos = posCur;
            } else {
              !mobileEvent &&
                $("#model-render").hasClass("crosshair") &&
                $("#model-render")
                  .removeClass("crosshair")
                  .css("cursor", "")
                  .addClass("grabbing-cursor");
            }
          }
        }
      })
      .mouseup(function (a) {
        controls.enabled = true;
        clicking = false;
        if (!mobileEvent) {
          typeof c !== "undefined"
            ? $("#model-render")
                .removeClass("grabbing-cursor")
                .addClass("crosshair")
            : $("#model-render")
                .removeClass("crosshair")
                .css("cursor", "")
                .addClass("grabbing-cursor");
        }
        var output = JSON.stringify(convArrToObj(paintArr));
        localStorage.setItem("paintArr", output);
        localStorage.setItem("countT", countT);
        g.transporter.loadFromLocalStorage();
        resetPicker(hexColor);
        clickT = 0;
      })
      .mouseout(function (a) {
        if (countT == 0) {
          var srcImage = g.transporter.download();
          ctx.clearRect(0, 0, 64, 64);
          var image = new Image();
          image.onload = function () {
            ctx.drawImage(image, 0, 0);
          };
          image.src = srcImage;
          localStorage.setItem("uploadedImage", srcImage);
        } else {
          if (paintArr.length > 0 && paintArr !== countT) {
            var srcImage = g.transporter.download();
            ctx.clearRect(0, 0, 64, 64);
            var image = new Image();
            image.onload = function () {
              ctx.drawImage(image, 0, 0);
            };
            image.src = srcImage;
            localStorage.setItem("uploadedImage", srcImage);
          }
        }
      });

    var mobileEvent = false,
      touchEvent = {
        touchstart: "mousedown",
        touchmove: "mousemove",
        touchend: "mouseout",
      };

    function touchHandler(event) {
      if (event.touches.length < 2) {
        mobileEvent = true;
        touches = event.changedTouches;
        first = touches[0];
        // Create mouse event
        var simulatedEvent = document.createEvent("MouseEvent");
        simulatedEvent.initMouseEvent(
          touchEvent[event.type],
          true,
          true,
          window,
          1,
          first.screenX,
          first.screenY,
          first.clientX,
          first.clientY,
          false,
          false,
          false,
          false,
          0,
          null
        );
        first.target.dispatchEvent(simulatedEvent);
        event.preventDefault();
        if (touchEvent[event.type] === "mouseout") {
          controls.enabled = true;
          clicking = false;
          clickT = 0;
          var output = JSON.stringify(convArrToObj(paintArr));
          localStorage.setItem("paintArr", output);
          localStorage.setItem("countT", countT);
          g.transporter.loadFromLocalStorage();
          mobileEvent = false;
          resetPicker(hexColor);
        }
      }
    }

    function resetPicker(hexColor) {
      if (hexColor && $("#pickcolor").hasClass("active")) {
        setTimeout(function () {
          $(".tools").removeClass("active");
          $("#model-render").removeClass("dropper");
          k = "drag";
          $(".left-toolbar #colorholder_chose")
            .addClass("active")
            .removeClass("outlineYellow")
            .removeClass("activeHide");
          $(".left-toolbar-tablet #colorholder_chose")
            .addClass("active")
            .removeClass("outlineYellow")
            .removeClass("activeHide");
          $(".left-toolbar-mobile #colorholder_chose")
            .addClass("active")
            .removeClass("outlineYellow")
            .removeClass("activeHide");
          console.info("picker tool deactivated");
        }, 100);
      }
    }

    // Mobile Events
    var mobileModel = document.getElementById("model-render");

    mobileModel.addEventListener("touchstart", touchHandler, false);
    mobileModel.addEventListener("touchmove", touchHandler, false);
    mobileModel.addEventListener("touchend", touchHandler, false);
    mobileModel.addEventListener("touchcancel", touchHandler, false);

    // disable zoom in/out for tablet device on editor page.
    // if (!md.tablet()) {
    $(".zoom-in").on("click", function () {
      if (zoom >= 0.0095) {
        zoomModel(false, 1.5);
      }
    });

    $(".zoom-out").on("click", function () {
      if (zoom <= 0.0305) {
        zoomModel(true, 1.5);
      }
    });

    function zoomModel(isZoomOut, scale) {
      var width = C.right / zoom;
      var height = C.top / zoom;

      if (isZoomOut) {
        zoom += scale * 0.001;
      } else {
        zoom -= scale * 0.001;
      }

      C.left = -zoom * width;
      C.right = zoom * width;
      C.top = zoom * height;
      C.bottom = -zoom * height;

      C.updateProjectionMatrix();
      B.render(D, C);
    }
    // }

    $(".editor_btn2new").on("click", function () {
      var srcImage = g.transporter.download();
      $.ajax({
        type: "POST",
        url: skindex_url + "includes/renderskin.php",
        // url: "http://minecraft.dev/includes/renderskinfordownload.php",
        data: {
          image: srcImage,
        },
        success: function (msg) {
          // window.location.replace("http://minecraft.dev/download.php?file=" + msg);
          window.location.replace(skindex_url + "download.php?file=" + msg);
        },
      });
    });

    function isCanvasBlank(canvas) {
      var blank = document.createElement("canvas");
      blank.width = canvas.width;
      blank.height = canvas.height;

      return canvas.toDataURL() == blank.toDataURL();
    }

    $(".icon-download").on("click", function () {
      var blank = isCanvasBlank($("#uploadCanvas")[0]);
      setTimeout(function () {
        if (!blank) {
          $(".uploadError").hide();
          $(".downloadError").hide();
          var srcImage = g.transporter.download();
          srcImage = srcImage.split(";");
          srcImage = srcImage[1].split(",");
          $("#imageVal").val(srcImage[1]);
          $("#downloadForm").submit();
        } else {
          $(".uploadError").hide();
          $(".downloadError").show();
          setTimeout(function () {
            $(".downloadError").hide();
          }, 2000);
        }
      }, 100);
    });

    $(".upload-to-site").on("click", function () {
      var blank = isCanvasBlank($("#uploadCanvas")[0]);
      if (!blank) {
        var srcImage = g.transporter.download();
        setTimeout(function () {
          if (srcImage !== "") {
            $("#imageEditor").val(srcImage);
            $("#imageEditorPreset").val(
              localStorage.getItem("pxsSel").charAt(0)
            );
            $("#imageEditorPresetSelected").val(
              localStorage.getItem("selVal").charAt(0)
            );
            $("#skinUploadToSiteForm").submit();
          }
        }, 2000);
      }
    });

    $(".editor_btn1new").on("click", function () {
      // var srcImage = g.transporter.getCanvas();
      var srcImage = g.transporter.download();
      g.transporter.url_redirect({
        url: skindex_url + "upload_fromeditor.php",
        // g.transporter.url_redirect({url: "http://minecraft.dev/upload_fromeditor.php",
        method: "post",
        data: {
          image: srcImage,
        },
      });
    });

    $(".avatar-creator #reset").on("click", function () {
      if (confirm("Todo o trabalho será perdido! Tem certeza?")) {
        g.model.loopOverParts(function (a) {
          for (var c = a.geometry.faces, d = 0; d < c.length; d++)
            g.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
        });
        g.model.render();
        sessionStorage.setItem(
          "basicModelBody",
          localStorage.getItem("basicModelBody")
        );

        localStorage.clear(),
          (rel = ""),
          (paintArr = []),
          (pxsSel = ""),
          (countT = 0),
          (baseImage = g.transporter.download()),
          (uploadedImage = baseImage),
          (document.getElementById("files").value = "");
        localStorage.setItem("selVal", "4px");
        localStorage.setItem("psxSel", "4px");
        var output = JSON.stringify(convArrToObj(paintArr));
        localStorage.setItem("paintArr", output);
        localStorage.setItem("switchArr", []);
        localStorage.setItem("countT", 0);
        localStorage.setItem("uploadedImage", baseImage);

        localStorage.removeItem("presetDB");
        localStorage.removeItem("previewModelArm");
        localStorage.removeItem("newuploaded_skin");
        localStorage.removeItem("newuploaded_skin_path");
        localStorage.removeItem("newuploaded_skin_size");
        localStorage.removeItem("reloadP");

        localStorage.setItem(
          "basicModelBody",
          sessionStorage.getItem("basicModelBody")
        );
        rightToggles
          .find(".avatar-creator #toggles")
          .find(".model-body")
          .empty();
        rightToggles
          .find(".avatar-creator #toggles")
          .find(".model-body")
          .html(localStorage.getItem("basicModelBody"));
        rightToggles
          .find(".avatar-creator #toggles")
          .find(".controls div")
          .removeClass("unchecked")
          .removeClass("ed_gridbtn_overlay_clicked")
          .removeClass("ed_gridbtn_body_clicked");

        localStorage.setItem("model-underlay", "1");
        localStorage.setItem("model-overlay", "1");
        // localStorage.setItem('editor-reload', '1');

        g.modelToggles.toggle();

        for (var i = D.children.length - 1; i >= 0; i--) {
          var obj = D.children[i];
          D.remove(obj);
        }
        window.location.href = skindex_url + "./index3.html";
      }
    });

    var versionNav = (navigator.sayswho = (function () {
      var ua = navigator.userAgent,
        tem,
        M =
          ua.match(
            /(opera|chrome|safari|firefox|msie|trident(?=\/))\/?\s*(\d+)/i
          ) || [];
      if (/trident/i.test(M[1])) {
        tem = /\brv[ :]+(\d+)/g.exec(ua) || [];
        return "IE " + (tem[1] || "");
      }
      if (M[1] === "Chrome") {
        tem = ua.match(/\bOPR\/(\d+)/);
        if (tem != null) return "Opera " + tem[1];
      }
      M = M[2] ? [M[1], M[2]] : [navigator.appName, navigator.appVersion, "-?"];
      if ((tem = ua.match(/version\/(\d+)/i)) != null) M.splice(1, 1, tem[1]);
      return M.join(" ");
    })());

    var ua = navigator.userAgent.toLowerCase();

    if (versionNav === "Safari 5") {
      if (ua.indexOf("safari") != -1) {
        if (ua.indexOf("chrome") > -1) {
        } else {
          $(".editor_btn1new").css({
            "margin-top": "4px",
          });
        }
      }
    }

    if (ua.indexOf("chrome") > -1) {
      $("#grabBtn").css({
        "margin-top": "4.4px",
        height: "26px",
      });
    }

    function findPos(obj) {
      var curleft = 0,
        curtop = 0;
      if (obj.offsetParent) {
        do {
          curleft += obj.offsetLeft;
          curtop += obj.offsetTop;
        } while ((obj = obj.offsetParent));
        return {
          x: curleft,
          y: curtop,
        };
      }
      return undefined;
    }

    function rgbToHex(r, g, b) {
      if (r > 255 || g > 255 || b > 255) {
        throw "Invalid color component";
      }
      return ((r << 16) | (g << 8) | b).toString(16);
    }

    function rgb2hsl(r, g, b) {
      var r1 = r / 255;
      var g1 = g / 255;
      var b1 = b / 255;

      var maxColor = Math.max(r1, g1, b1);
      var minColor = Math.min(r1, g1, b1);
      // Calculate L:
      var L = (maxColor + minColor) / 2;
      var S = 0;
      var H = 0;
      if (maxColor != minColor) {
        // Calculate S:
        if (L < 0.5) {
          S = (maxColor - minColor) / (maxColor + minColor);
        } else {
          S = (maxColor - minColor) / (2.0 - maxColor - minColor);
        }
        // Calculate H:
        if (r1 == maxColor) {
          H = (g1 - b1) / (maxColor - minColor);
        } else if (g1 == maxColor) {
          H = 2.0 + (b1 - r1) / (maxColor - minColor);
        } else {
          H = 4.0 + (r1 - g1) / (maxColor - minColor);
        }
      }

      L = L * 100;
      S = S * 100;
      H = H * 60;
      if (H < 0) {
        H += 360;
      }
      var result = [H, S, L];
      return result;
    }

    createCookie("bHistory", "1", 7);
    g.model.render();
    g.layerModel.renderModel();
    g.layerPresenter.checkpoint(!0);
  }),
  (Editor.FileButton = function (a, b) {
    "use strict";

    var grabSpanText = $("#grabSpanText");
    $("#grabText").val("");

    function getPixel(imgData, index) {
      var i = index * 4,
        d = imgData.data;
      return [d[i], d[i + 1], d[i + 2], d[i + 3]]; // returns array [R,G,B,A]
    }

    var grabSkinHeight, imgData;

    $("#grabText").keydown(function () {
      grabSpanText.hide();
      grabSpanText.val("Please enter username from a Minecraft.net account");
    });

    $("#grabber").on("click", "#grabBtn", function () {
      var grabText = $("#grabText").val();

      if (grabText === "") {
        grabSpanText.show();
      } else {
        grabText = $.trim(grabText);
        $("#grabText").val(grabText);
        // get base64 format image from binary code
        toDataUrl(
          "http://cors-anywhere.herokuapp.com/https://skins.minecraft.net/MinecraftSkins/" +
            grabText +
            ".png",
          function (base64Img) {
            grabSpanText.hide();
            resetBeforeUpload();
            if (grabSkinHeight == "32") {
              load32pxSkin(base64Img);
            } else {
              uploadedImage = base64Img;

              var _URL = window.URL || window.webkitURL;
              var image0;
              image0 = new Image();
              image0.src = uploadedImage;
              image0.onload = function () {
                var c = document.getElementById("uploadCanvas");
                var uploadCanvasData = c.toDataURL("image/png");
                var ctx = c.getContext("2d");
                ctx.clearRect(0, 0, 64, 64);
                ctx.drawImage(image0, 0, 0);
                var imgData = ctx.getImageData(0, 0, 64, 64);
                // basic getting pixel color
                var pix = getPixelXY(imgData, 46, 52);
                var pix1 = getPixelXY(imgData, 47, 52);
                var pix2 = getPixelXY(imgData, 46, 53);
                var pix3 = getPixelXY(imgData, 47, 53);

                // bad model first example fix
                var pix10 = getPixelXY(imgData, 54, 20);
                var pix11 = getPixelXY(imgData, 55, 20);
                var pix12 = getPixelXY(imgData, 54, 21);
                var pix13 = getPixelXY(imgData, 55, 21);

                load64pxSkin(pix, pix1, pix2, pix3, pix10, pix11, pix12, pix13);
              };
            }
          }
        );
      }
    });
    // send request to minecraft.net server with proxy cors-anywhere.
    function toDataUrl(src, callback, outputFormat) {
      var img = new Image();
      img.crossOrigin = "Anonymous";
      img.onload = function () {
        var canvas = document.createElement("CANVAS");
        var ctx = canvas.getContext("2d");
        var dataURL;
        grabSkinHeight = this.height;
        canvas.height = this.height;
        canvas.width = this.width;

        ctx.clearRect(0, 0, 64, 64);
        ctx.drawImage(this, 0, 0);
        dataURL = canvas.toDataURL(outputFormat);
        callback(dataURL);
      };
      img.onerror = function () {
        grabSpanText.text(
          "Unable to grab skin, please ensure username entered is correct"
        );
        grabSpanText.show();
      };
      img.src = src;
    }

    function load32pxSkin(image) {
      localStorage.setItem("selVal", "4px");
      localStorage.setItem("pxsSel", "32px");
      pxsSel = "32px";
      selVal = "4px";

      b.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          b.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      }),
        (paintArr = []),
        (countT = 0),
        (baseImage = b.transporter.download());
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      localStorage.setItem("countT", countT);
      selVal = localStorage.getItem("selVal");
      presetBlock.val(selVal);
      $("#selectpxs").remove();

      b.transporter.setUVImage(image, "skin32");

      b.model.redrawModel(function (a) {});

      rightToggles.find("#toggles").find(".model-body").empty();
      rightToggles
        .find("#toggles")
        .find(".model-body")
        .html(localStorage.getItem("basicModelBody"));
      rightToggles
        .find("#toggles")
        .find("div")
        .removeClass("unchecked")
        .removeClass("disabled")
        .removeClass("ed_gridbtn_overlay_clicked")
        .removeClass("ed_gridbtn_body_clicked");

      var d = $($("#toggles-template").html());
      var modelBodyHTML = d.find(".model-body").html();
      localStorage.setItem("model-body", modelBodyHTML);

      localStorage.setItem("basicModelBody", modelBodyHTML);
      sessionStorage.setItem("basicModelBody", modelBodyHTML);

      localStorage.setItem("model-underlay", "1");
      localStorage.setItem("model-overlay", "1");
      b.modelToggles.toggle();
      localStorage.setItem("editor-reload", "1");
    }

    function load64pxSkin(pix, pix1, pix2, pix3, pix10, pix11, pix12, pix13) {
      tryMessage();
      $("body").on("click", "#lt #decideForMe", function () {
        if (
          pix[0] === 0 &&
          pix[1] === 0 &&
          pix[2] === 0 &&
          pix[3] === 0 &&
          pix1[0] === 0 &&
          pix1[1] === 0 &&
          pix1[2] === 0 &&
          pix1[3] === 0 &&
          pix2[0] === 0 &&
          pix2[1] === 0 &&
          pix2[2] === 0 &&
          pix2[3] === 0 &&
          pix3[0] === 0 &&
          pix3[1] === 0 &&
          pix3[2] === 0 &&
          pix3[3] === 0
        ) {
          localStorage.setItem("selVal", "3px");
          localStorage.setItem("pxsSel", "3px");
          pxsSel = "3px";
          selVal = "3px";
          skin_redraw();
          // b.transporter.setUVImage(URL.createObjectURL(a.target.files[0]), "skin64_3px");
        } else if (
          pix10[0] === 0 &&
          pix10[1] === 0 &&
          pix10[2] === 0 &&
          pix10[3] === 255 &&
          pix11[0] === 0 &&
          pix11[1] === 0 &&
          pix11[2] === 0 &&
          pix11[3] === 255 &&
          pix12[0] === 0 &&
          pix12[1] === 0 &&
          pix12[2] === 0 &&
          pix12[3] === 255 &&
          pix13[0] === 0 &&
          pix13[1] === 0 &&
          pix13[2] === 0 &&
          pix13[3] === 255
        ) {
          localStorage.setItem("selVal", "3px");
          localStorage.setItem("pxsSel", "3px");
          pxsSel = "3px";
          selVal = "3px";
          skin_redraw();
          // b.transporter.setUVImage(URL.createObjectURL(a.target.files[0]), "skin64_3px");
        } else if (
          pix[0] === 255 &&
          pix[1] === 255 &&
          pix[2] === 255 &&
          pix[3] === 255 &&
          pix1[0] === 255 &&
          pix1[1] === 255 &&
          pix1[2] === 255 &&
          pix1[3] === 255 &&
          pix2[0] === 255 &&
          pix2[1] === 255 &&
          pix2[2] === 255 &&
          pix2[3] === 255 &&
          pix3[0] === 255 &&
          pix3[1] === 255 &&
          pix3[2] === 255 &&
          pix3[3] === 255
        ) {
          localStorage.setItem("selVal", "3px");
          localStorage.setItem("pxsSel", "3px");
          pxsSel = "3px";
          selVal = "3px";
          skin_redraw();
          // b.transporter.setUVImage(URL.createObjectURL(a.target.files[0]), "skin64_3px");
        } else if (
          pix10[0] === 255 &&
          pix10[1] === 255 &&
          pix10[2] === 255 &&
          pix10[3] === 255 &&
          pix11[0] === 255 &&
          pix11[1] === 255 &&
          pix11[2] === 255 &&
          pix11[3] === 255 &&
          pix12[0] === 255 &&
          pix12[1] === 255 &&
          pix12[2] === 255 &&
          pix12[3] === 255 &&
          pix13[0] === 255 &&
          pix13[1] === 255 &&
          pix13[2] === 255 &&
          pix13[3] === 255
        ) {
          localStorage.setItem("selVal", "3px");
          localStorage.setItem("pxsSel", "3px");
          pxsSel = "3px";
          selVal = "3px";
          skin_redraw();
          // b.transporter.setUVImage(URL.createObjectURL(a.target.files[0]), "skin64_3px");
        } else {
          localStorage.setItem("selVal", "4px");
          localStorage.setItem("pxsSel", "4px");
          pxsSel = "4px";
          selVal = "4px";
          skin_redraw();
          // b.transporter.setUVImage(URL.createObjectURL(a.target.files[0]), "skin64");
        }
        close_popup();
        // f.click();
      });

      $("body").on("click", "#lt #steve", function () {
        localStorage.setItem("selVal", "4px");
        localStorage.setItem("pxsSel", "4px");
        pxsSel = "4px";
        selVal = "4px";
        skin_redraw();
        close_popup();
        // f.click();
      });

      $("body").on("click", "#lt #alex", function () {
        localStorage.setItem("selVal", "3px");
        localStorage.setItem("pxsSel", "3px");
        pxsSel = "3px";
        selVal = "3px";
        skin_redraw();
        close_popup();
        // f.click();
      });
      localStorage.setItem("editor-reload", "1");
    }

    function resetBeforeUpload() {
      b.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          b.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      });
      b.model.render();
      sessionStorage.setItem(
        "basicModelBody",
        localStorage.getItem("basicModelBody")
      );

      localStorage.clear();
      var rel = "",
        paintArr = [],
        pxsSel = "",
        countT = 0,
        baseImage = b.transporter.download(),
        uploadedImage = baseImage;
      localStorage.setItem("selVal", "4px");
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      localStorage.setItem("switchArr", []);
      localStorage.setItem("countT", 0);
      localStorage.setItem("uploadedImage", baseImage);

      localStorage.setItem(
        "basicModelBody",
        sessionStorage.getItem("basicModelBody")
      );
      rightToggles.find("#toggles").find(".model-body").empty();
      rightToggles
        .find("#toggles")
        .find(".model-body")
        .html(localStorage.getItem("basicModelBody"));
      rightToggles
        .find("#toggles")
        .find(".controls div")
        .removeClass("unchecked")
        .removeClass("ed_gridbtn_overlay_clicked")
        .removeClass("ed_gridbtn_body_clicked");

      localStorage.setItem("model-underlay", "1");
      localStorage.setItem("model-overlay", "1");

      b.modelToggles.toggle();

      for (var i = D.children.length - 1; i >= 0; i--) {
        var obj = D.children[i];
        D.remove(obj);
      }
    }

    // AND/OR

    function getPixelXY(imgData, x, y) {
      return getPixel(imgData, y * imgData.width + x);
    }
    var c,
      d,
      e = $(".editor_btn3new");
    var download = $(".editor_btn2new");
    var f = $('<input style="visibility: hidden;"  id="files" type="file" />');
    var tryMessage = function () {
      document.getElementById("lt").innerHTML =
        '<div id="light" class="popup_contentbody_skin"><div style="margin-left:275px;margin-top:-10px;font-size:12px;"></div><div style="margin-top:15px;text-align:center;font-size:20px;color:#e8b901;font-weight: 700;"><span style="display:block;font-size:20px;">Que tipo de skin é esta? </span><br/><a id="decideForMe" href="javascript:void(0);"><span style="font-weight:bold;color:#8B1616;font-weight:700;font-size:15px;display:block;">Decidir Por Mim</span></a><a id="steve" href="javascript:void(0);"><span style="font-size:15px;color:#e8b901;font-weight:700;display:block;margin-top:10px;">Longa Steve (4px)</span></a><a id="alex" href="javascript:void(0);"><span style="font-size:15px;color:#e8b901;font-weight:700;display:block;margin-top:10px;">Fina Alex (3px)</span></a></div></div>';
      document.getElementById("lt").style.height = "700px";
      document.getElementById("lt").style.width = "900px";
      document.getElementById("lt").style.position = "absolute";
      document.getElementById("lt").style.display = "block";
    };

    function close_popup() {
      document.getElementById("lt").innerHTML = "";
      document.getElementById("lt").style.height = "1px";
      document.getElementById("lt").style.width = "1px";
      document.getElementById("lt").style.position = "absolute";
      document.getElementById("lt").style.display = "none";
    }

    function skin_redraw() {
      b.model.loopOverParts(function (a) {
        for (var c = a.geometry.faces, d = 0; d < c.length; d++)
          b.layerModel.setFaceColor(c[d], new THREE.Color().setAlpha());
      }),
        (paintArr = []),
        (countT = 0),
        (baseImage = b.transporter.download());
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      selVal = localStorage.getItem("selVal");
      presetBlock.val(selVal);
      $("#selectpxs").remove();
      b.model.redrawModel(function (a) {});
      if (selVal === "3px") {
        b.transporter.setUVImage(uploadedImage, "skin64_3px");
      } else {
        b.transporter.setUVImage(uploadedImage, "skin64");
      }

      // TODO: Add reset model-body
      rightToggles.find("#toggles").find(".model-body").empty();
      rightToggles
        .find("#toggles")
        .find(".model-body")
        .html(localStorage.getItem("basicModelBody"));
      rightToggles
        .find("#toggles")
        .find("div")
        .removeClass("unchecked")
        .removeClass("disabled")
        .removeClass("ed_gridbtn_overlay_clicked")
        .removeClass("ed_gridbtn_body_clicked");

      var d = $($("#toggles-template").html());
      var modelBodyHTML = d.find(".model-body").html();
      localStorage.setItem("model-body", modelBodyHTML);

      localStorage.setItem("basicModelBody", modelBodyHTML);
      sessionStorage.setItem("basicModelBody", modelBodyHTML);

      localStorage.setItem("model-underlay", "1");
      localStorage.setItem("model-overlay", "1");
      b.modelToggles.toggle();
    }

    return (
      e.on("click", function () {
        // c && c(), download, f.click();
        f.click();
        // tryMessage();
      }),
      f.change(function (a) {
        var rounded = Math.round((a.target.files[0].size / 1024) * 10) / 10;
        var fileSizeLimit = e.data("assert");
        var type = a.target.files[0].type;

        var _URL = window.URL || window.webkitURL;
        var image0, file0;

        if ((file0 = a.target.files[0])) {
          image0 = new Image();
          image0.src = _URL.createObjectURL(file0);
          image0.onload = function () {
            var errors = 0;
            var errMess = "";

            if (!type.match("image/png")) {
              errMess += "<p>Somente as imagens .png são permitidas</p>";
              errors++;
            } else {
              if (
                (this.width !== 64 || this.height !== 32) &&
                (this.width !== 64 || this.height !== 64)
              ) {
                errMess +=
                  "<p>Apenas as imagens 64x64 e 64x32 .png são permitidas</p>";
                errors++;
              }
            }
            if (rounded > fileSizeLimit) {
              errMess +=
                "<p>Tamanho Máximo Permitido Do Arquivo É " +
                fileSizeLimit +
                "KB</p>";
              errors++;
            }
            if (errors) {
              showNotify(errMess);
            } else {
              resetBeforeUpload();

              var c = document.getElementById("uploadCanvas");
              var uploadCanvasData = c.toDataURL("image/png");
              var ctx = c.getContext("2d");
              ctx.clearRect(0, 0, 64, 64);
              ctx.drawImage(image0, 0, 0);
              var imgData = ctx.getImageData(0, 0, 64, 64);
              // basic getting pixel color
              var pix = getPixelXY(imgData, 46, 52);
              var pix1 = getPixelXY(imgData, 47, 52);
              var pix2 = getPixelXY(imgData, 46, 53);
              var pix3 = getPixelXY(imgData, 47, 53);

              // bad model first example fix
              var pix10 = getPixelXY(imgData, 54, 20);
              var pix11 = getPixelXY(imgData, 55, 20);
              var pix12 = getPixelXY(imgData, 54, 21);
              var pix13 = getPixelXY(imgData, 55, 21);

              if (this.height == 64) {
                load64pxSkin(pix, pix1, pix2, pix3, pix10, pix11, pix12, pix13);
                uploadedImage = image0.src;
              } else {
                load32pxSkin(URL.createObjectURL(a.target.files[0]));
              }
              document.getElementById("files").value = "";
            }
          };
        }
      }),
      a.append(f)
    );
  }),
  (Editor.ModelToggles = function (a, b) {
    function c() {
      var a = !d.find(".overlay").hasClass("unchecked"),
        c = !d.find(".underlay").hasClass("unchecked");
      b.model.loopOverParts(function (a) {
        a.visible = !1;
      }),
        d
          .find(".model-body div")
          .not(".disabled")
          .each(function (d, e) {
            for (
              var f = $(e).data("parts").split(","), d = 0;
              d < f.length;
              d++
            ) {
              var g = b.model.getPart(f[d]);
              ((g.underlay && a) ||
                (g.overlay && c) ||
                (!g.overlay && !g.underlay)) &&
                (g.visible = !0);
            }
          });

      b.model.render();
    }

    function grid() {
      var g = d.find(".grid").hasClass("unchecked");
      if (g) {
        b.model.turnOffGrid();
        $(".grid").addClass("ed_gridbtn_grid_clicked");
      } else {
        b.model.turnOnGrid();
        $(".grid").removeClass("ed_gridbtn_grid_clicked");
      }
      b.model.render();
    }

    var d = $($("#toggles-template").html());

    d.on("click", ".model-body div", function () {
      $(this).toggleClass("disabled");
      c();
      $(this).find("a").toggleClass("check_a");
      var modelBodyHTML = d.find(".model-body").html();
      localStorage.setItem("model-body", modelBodyHTML);
    });

    d.on("click", ".controls .underlay", function () {
      $(this).toggleClass("unchecked");
      c();
      $(".underlay").toggleClass("ed_gridbtn_body_clicked");
    });
    d.on("click", ".controls .overlay", function () {
      $(this).toggleClass("unchecked");
      c();
      $(".overlay").toggleClass("ed_gridbtn_overlay_clicked");
    });
    d.on("click", ".controls .grid", function () {
      $(this).toggleClass("unchecked");
      grid();
    });

    var modelBody = localStorage.getItem("model-body");
    if (modelBody) {
      var d = $($("#toggles-template").html());
      d.find(".model-body").empty();
      d.find(".model-body").html(modelBody);
      c();
      d.on("click", ".model-body div", function () {
        $(this).toggleClass("disabled");
        c();
        $(this).find("a").toggleClass("check_a");
        var modelBodyHTML = d.find(".model-body").html();
        localStorage.setItem("model-body", modelBodyHTML);
      });

      d.on("click", ".controls .underlay", function () {
        $(this).toggleClass("unchecked");
        c();
        if ($(this).hasClass("unchecked")) {
          localStorage.setItem("model-underlay", 0);
        } else {
          localStorage.setItem("model-underlay", 1);
        }
        $(".underlay").toggleClass("ed_gridbtn_body_clicked");
      });
      d.on("click", ".controls .overlay", function () {
        $(this).toggleClass("unchecked");
        c();
        if ($(this).hasClass("unchecked")) {
          localStorage.setItem("model-overlay", 0);
        } else {
          localStorage.setItem("model-overlay", 1);
        }
        $(".overlay").toggleClass("ed_gridbtn_overlay_clicked");
      });
    }
    rightToggles.append(d);

    return {
      toggle: c,
    };
  }),
  (Editor.LayerPresenter = function (a, b) {
    "use strict";

    function c() {}

    function d(a) {
      (a = a || b.layerModel.active()),
        (i[a.id] = b.transporter.getUVImage("skin64", a).src);
    }

    function e() {
      c(),
        b.layerModel.loop(function (a) {
          d(a, !0);
        });
    }

    function f(a) {
      a === !0
        ? b.layerPresenter.updateLayerThumbnail()
        : a && b.layerPresenter.updateLayerThumbnail(a),
        a && b.layerPresenter.render(),
        b.model.render();
      var c = b.layerModel.stringify();
      localStorage.setItem("layerJson", c);
      var lastEl = JSON.stringify(h[h.length - 1]);
      var newEl = JSON.stringify(c);
      var emptyEl =
        '{"activeLayerId":"inwbuabmlt","layers":{"inwbuabmlt":{"id":"inwbuabmlt","visible":true,"order":0,"selected":true,"faces":[{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0},{"r":0,"g":1,"b":0}]}}}';
      if (lastEl !== newEl && newEl !== emptyEl) {
        h.push(c);
      }
    }

    function g() {
      var stringifyLayer = b.layerModel.stringify();
      b.layerModel.undoparse(stringifyLayer);
      b.layerModel.renderModel();
      b.model.render();

      var stringifyLayer = {};
      undoClick = 1;
    }

    function o() {
      var stringifyLayer = b.layerModel.stringify();
      b.layerModel.redoparse(stringifyLayer);
      b.layerModel.renderModel();
      b.model.render();
      var stringifyLayer = {};
    }

    function resetArr() {
      h = [];
      h2 = [];
      var c = b.layerModel.stringify();
      localStorage.setItem("layerJson", c);
      h.push(c);
      b.layerModel.renderModel(), b.model.render();
    }

    var h = [],
      h2 = [],
      i = {},
      t2,
      t3,
      count,
      j = $('<div id = "layers" ></div>'),
      k = $('<li title="Add a new layer" class= "add"></li>'),
      l = $('<li title="Delete this layer" class= "delete"></li></ul>'),
      m = $('<ul class = "button-group top-heavy" ></ul>'),
      n = $("<ul></ul>");
    return {
      updateAllLayerThumbnails: e,
      render: c,
      undo: g,
      redo: o,
      checkpoint: f,
      updateLayerThumbnail: d,
      resetArr: resetArr,
    };
  }),
  (Editor.PaintMode = function (a) {
    var f;
    var curRGB;
    // var picker = $.farbtastic('#colorpicker');
    var paintCcolor;

    function fillMode(b, c, l, cNew, mFace) {
      // clear array data
      clickedObj[countT] = [];
      if (typeof cNew[0] !== "undefined") {
        // if (cNew.length !== 4) {
        //   (cNew[0].object.visible) ? cNew = cNew[0] : cNew = cNew[1];
        // } else {
        //   if ((cNew[0].object.name !== 'armROverlay' && cNew[0].object.name !== 'armLOverlay') &&
        //       (cNew[0].object.name !== 'legROverlay' && cNew[0].object.name !== 'legLOverlay')) {
        //         (cNew[2].object.visible) ? cNew = cNew[2] : cNew = cNew[3];
        //   } else {
        //     (cNew[0].object.visible) ? cNew = cNew[0] : cNew = cNew[1];
        //   }

        // }
        cNew[0].object.visible ? (cNew = cNew[0]) : (cNew = cNew[1]);
        f = a.layerModel.getFaceColor(cNew.face);
        fillModePaint(cNew.face, cNew.object);
        var d = cNew.object.geometry.faces;
        e = 0;
        for (d, e; e < d.length; e++) {
          d[e].touched = !1;
        }
      }
      // a.layerPresenter.checkpoint(!0);
    }

    function fillModePaint(b, d) {
      var faceIndex;
      b.touched = !0;
      paintCcolor = new THREE.Color().setStyle($("#color").val());
      for (
        var sides = a.model.getSideFaces(b, d), g = 0;
        g < sides.length;
        g++
      ) {
        if (typeof sides !== "undefined") {
          a.layerModel.setFaceColor(sides[g], paintCcolor),
            sides[g].touched || fillModePaint(sides[g], d);
          if (selVal === "3px") {
            // convert new faceIndex userDataUid
            faceIndex = faceIndexConv(sides[g].userData.uid);
          } else {
            faceIndex = sides[g].userData.uid;
          }
          clickedObj[countT][faceIndex] = paintCcolor;
        }
      }
    }

    function b(a, b, l, cNew, mFace) {
      // clear array data
      if ($("#bucket").hasClass("active")) {
        fillMode(a, b, l, cNew, mFace);
      } else {
        if ($("#erasepixel").hasClass("active")) {
          paintCcolor = new THREE.Color().setAlpha();
        } else if ($("#colorholder_chose").hasClass("active")) {
          paintCcolor = new THREE.Color().setStyle($("#color").val());
        }
        c(a, b, l, cNew, mFace, picker);
      }
    }

    function c(b, c, l, cNew, mFace, picker) {
      if ($("#autotone").hasClass("active")) {
        var cc = $("#color").val();
        var clickPosC;
        var faceColor = b.color;
        // picker = $.farbtastic('#colorpicker');
        var stringValueToUse = randomIntFromInterval(-10, 10);
        stringValueToUse.charAt(0) === "-"
          ? (curRGB = ColorLuminance(cc, stringValueToUse, "darker"))
          : (curRGB = ColorLuminance(cc, stringValueToUse, "lighter"));
        paintCcolor = new THREE.Color().setStyle(curRGB);
        // picker.setColor(curRGB);
        if (faceColor.r === 0 && faceColor.g === 1 && faceColor.b === 0) {
          clickPosC = posCur;
          MirrorPaint(a, mFace, b);
          clickT = 1;
        } else if (
          posCur !== posC &&
          typeof posC !== "undefined" &&
          posCur.userData.uid !== l.userData.uid
        ) {
          MirrorPaint(a, mFace, b);
          clickT = 1;
        } else {
          if (clickT === 0) {
            paintCcolor = new THREE.Color().setStyle(cc);
          }
        }
      } else {
        if ($("#color").val() == "#00ff00") {
          paintCcolor = new THREE.Color().setStyle("#00ff0f");
        }
        MirrorPaint(a, mFace, b);
      }
    }

    function MirrorPaint(a, mFace, b) {
      $(".avatar-creator a").hasClass("mirrorToolOn")
        ? a.layerModel.setFaceColor(b, paintCcolor, mFace)
        : a.layerModel.setFaceColor(b, paintCcolor);
    }

    function randomIntFromInterval(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min).toString();
    }

    function ColorLuminance(hex, lum, tonik) {
      if (tonik === "darker") {
        return tinycolor(hex).darken(lum).toString();
      } else {
        return tinycolor(hex).lighten(lum).toString();
      }
    }

    function arrays_equal(a, b) {
      return JSON.stringify(a) == JSON.stringify(b);
    }

    function conv(startVal, cof, value2, und) {
      var idCell = (value2 - startVal) / 3;
      if (parseInt(idCell) === 0) {
        var idValue2 = value2 + cof;
      } else {
        if (und !== 0) {
          var idValue2 = value2 + (parseInt(idCell) + cof);
        } else {
          var idValue2 = value2 + cof;
        }
      }
      return idValue2;
    }

    function faceIndexConv(faceIndex) {
      if (faceIndex >= 2464 && faceIndex <= 3135) {
        /**
         * Convert 3px model uid to 4px model
         * Right arm Overlay
         */
        // convert top overlay right arm
        if (faceIndex >= 2464 && faceIndex <= 2475) {
          var faceIn = conv(2464, 1, faceIndex);
        }
        // convert bottom overlay right arm
        if (faceIndex >= 2476 && faceIndex <= 2487) {
          var faceIn = conv(2476, 5, faceIndex);
        }
        // convert front overlay right arm
        if (faceIndex >= 2488 && faceIndex <= 2523) {
          var faceIn = conv(2488, 9, faceIndex);
        }
        // convert back overlay right arm
        if (faceIndex >= 2524 && faceIndex <= 2559) {
          var faceIn = conv(2524, 20, faceIndex);
        }

        /**
         * Convert 3px model uid to 4px model
         * Right arm Underlay
         */
        // convert right underlay right arm
        if (faceIndex >= 2752 && faceIndex <= 2799) {
          var faceIn = conv(2752, 64, faceIndex, 0);
        }
        // convert left underlay right arm
        if (faceIndex >= 2800 && faceIndex <= 2847) {
          var faceIn = conv(2800, 64, faceIndex, 0);
        }
        // convert top underlay right arm
        if (faceIndex >= 2848 && faceIndex <= 2859) {
          var faceIn = conv(2848, 65, faceIndex);
        }
        // convert bottom underlay right arm
        if (faceIndex >= 2860 && faceIndex <= 2871) {
          var faceIn = conv(2860, 69, faceIndex);
        }
        // convert front underlay right arm
        if (faceIndex >= 2872 && faceIndex <= 2907) {
          var faceIn = conv(2872, 73, faceIndex);
        }
        // convert back underlay right arm
        if (faceIndex >= 2908 && faceIndex <= 2943) {
          var faceIn = conv(2908, 84, faceIndex);
        }

        /**
         * Left Arm Overlay
         */
        // convert right overlay left arm
        if (faceIndex >= 2608 && faceIndex <= 2655) {
          var faceIn = conv(2608, 32, faceIndex, 0);
        }
        // convert left overlay left arm
        if (faceIndex >= 2560 && faceIndex <= 2607) {
          var faceIn = conv(2560, 32, faceIndex, 0);
        }
        // // convert front overlay left arm
        if (faceIndex >= 2680 && faceIndex <= 2715) {
          var faceIn = conv(2680, 40, faceIndex);
        }
        // convert back overlay left arm
        if (faceIndex >= 2716 && faceIndex <= 2751) {
          var faceIn = conv(2716, 53, faceIndex);
        }
        // convert top overlay left arm
        if (faceIndex >= 2656 && faceIndex <= 2667) {
          var faceIn = conv(2656, 32, faceIndex);
        }
        // convert bottom overlay left arm
        if (faceIndex >= 2668 && faceIndex <= 2679) {
          var faceIn = conv(2668, 36, faceIndex);
        }

        /**
         * Left Arm Underlay
         */
        // convert front underlay left arm
        if (faceIndex >= 3064 && faceIndex <= 3099) {
          var faceIn = conv(3064, 104, faceIndex);
        }
        // convert back underlay left arm
        if (faceIndex >= 3100 && faceIndex <= 3135) {
          var faceIn = conv(3100, 117, faceIndex);
        }
        // convert right underlay left arm
        if (faceIndex >= 2992 && faceIndex <= 3039) {
          var faceIn = conv(2992, 96, faceIndex, 0);
        }
        // convert left underlay left arm
        if (faceIndex >= 2944 && faceIndex <= 2991) {
          var faceIn = conv(2994, 96, faceIndex, 0);
        }
        // convert top underlay left arm
        if (faceIndex >= 3040 && faceIndex <= 3051) {
          var faceIn = conv(3040, 96, faceIndex);
        }
        // convert bottom underlay left arm
        if (faceIndex >= 3052 && faceIndex <= 3063) {
          var faceIn = conv(3052, 100, faceIndex);
        }
        // var faceIndex = faceIn;
        return faceIn;
      }
      return faceIndex;
    }

    function getLocalStorageData(paintArr2) {
      paintArr2 = JSON.parse(paintArr2);
      paintArr2 = Object.keys(paintArr2).map(function (key) {
        return paintArr2[key];
      });

      var el = [];
      paintArr2.forEach(function (value, index) {
        el[Object.keys(value)] = value[Object.keys(value)];
        paintArr.push(el);
      });
      countT = paintArr.length - 1;
    }

    function d(b, c, l, cNew, mFace) {
      B.render(D, C);
      if (selVal === "3px") {
        // convert new faceIndex userDataUid
        var faceIndex = faceIndexConv(b.userData.uid);
      } else {
        var faceIndex = b.userData.uid;
      }

      var faceColor = b.color;

      // if erase create alpha color, if not normal color
      if ($("#erasepixel").hasClass("active")) {
        // clear array data
        clickedObj[countT] = [];
        var paintCcolor = new THREE.Color().setAlpha();
        clickedObj[countT][faceIndex] = paintCcolor;
        if ($(".avatar-creator a").hasClass("mirrorToolOn")) {
          if (selVal === "3px") {
            var faceIndex = faceIndexConv(mFace.userData.uid);
          } else {
            var faceIndex = mFace.userData.uid;
          }
          clickedObj[countT][faceIndex] = faceColor;
          //clickedObj[countT][mFace.userData.uid] = paintCcolor;
        }
      } else {
        if ($("#bucket").hasClass("active")) {
        } else {
          clickedObj[countT] = [];
          clickedObj[countT][faceIndex] = faceColor;
          if ($(".avatar-creator a").hasClass("mirrorToolOn")) {
            if (selVal === "3px") {
              var faceIndex = faceIndexConv(mFace.userData.uid);
            } else {
              var faceIndex = mFace.userData.uid;
            }
            clickedObj[countT][faceIndex] = faceColor;
          }
        }
      }

      // save data action to paintArr
      paintArr.splice(countT, paintArr.length - countT, clickedObj[countT]);
      countT++;
    }

    var firstEl = 0;
    return {
      getName: function () {
        return "ecmPaint";
      },
      getTitle: function () {
        return "Paint Tool";
      },
      getKey: function () {
        return "p";
      },
      mousedown: b,
      mousemove: c,
      mouseup: d,
      getCursorHoverUrl: function () {
        return "crosshair";
      },
      getCursorDownUrl: function () {
        return "crosshair";
      },
    };
  }),
  (Editor.Undo = function (a, b) {
    if (localStorage.getItem("paintArr")) {
      $(".avatar-creator #undo").click(function () {
        countT--;
        if (countT < 0) {
          countT = 0;
        }
        localStorage.setItem("countT", countT);
        b.layerPresenter.undo();
      });
      $("body").on("keydown", function (e) {
        if (e.keyCode === 85) {
          if (paintArr.length > 0) {
            var output = JSON.stringify(convArrToObj(paintArr));
            localStorage.setItem("paintArr", output);
            localStorage.setItem("countT", countT);
            countT--;
            if (countT < 0) {
              countT = 0;
            }
            localStorage.setItem("countT", countT);
            b.layerPresenter.undo();
          }
        }
      });
    }
    return true;
  }),
  (Editor.Redo = function (a, b) {
    if (localStorage.getItem("paintArr")) {
      $(".avatar-creator #redo").click(function () {
        countT++;
        if (countT > paintArr.length) {
          countT = paintArr.length;
        }
        localStorage.setItem("countT", countT);
        b.layerPresenter.redo();
        redoT = 1;
      });
      $("body").on("keydown", function (e) {
        if (e.keyCode === 82) {
          if (paintArr.length > 0) {
            var output = JSON.stringify(convArrToObj(paintArr));
            localStorage.setItem("paintArr", output);
            localStorage.setItem("countT", countT);
            countT++;
            if (countT > paintArr.length) {
              countT = paintArr.length;
            }
            localStorage.setItem("countT", countT);
            b.layerPresenter.redo();
            redoT = 1;
          }
        }
      });
    }
    return true;
  }),
  $(window).on("beforeunload", function (e) {
    countT = countT--;
    if (conv === 1) {
      localStorage.setItem("reload", "reload");
    } else {
      localStorage.removeItem("reload");
    }
    localStorage.removeItem("reloadP");
    localStorage.removeItem("editorSkinUrl");
    if (paintArr.length > 0) {
      var output = JSON.stringify(convArrToObj(paintArr));
      localStorage.setItem("paintArr", output);
      localStorage.setItem("countT", countT);
    }
    localStorage.setItem("selVal", selVal);

    // for (var i = D.children.length - 1; i >= 0; i--) {
    //     var obj = D.children[i];
    //     D.remove(obj);
    // }
    // g.layerPresenter.checkpoint(!0);
  });

var convArrToObj = function (array) {
  var thisEleObj = new Object();
  if (typeof array === "object") {
    for (var i in array) {
      var thisEle = convArrToObj(array[i]);
      thisEleObj[i] = thisEle;
    }
  } else {
    thisEleObj = array;
  }
  return thisEleObj;
};
/*
 * init Editor when page is load
 */
$(function () {
  Editor.Editor($("#editor"), $("#toolbar"), $("#toolbox"));
  $("body").addClass("loaded");
  $("#model-render").addClass("grabbing-cursor");
});
