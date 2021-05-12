/*Copyright and licenses see https://www.dynatrace.com/company/trust-center/customers/reports/*/
(function () {
  if (typeof window !== "undefined" && window.setTimeout) {
    window.setTimeout = window.setTimeout;
  }
  var Promise = (this.dT_ && dT_.prm && dT_.prm()) || this.Promise;
  (function () {
    function nb() {
      document.cookie = "__dTCookie=1;SameSite=Lax";
      var Pa = -1 !== document.cookie.indexOf("__dTCookie");
      document.cookie = "__dTCookie=1; expires=Thu, 01-Jan-1970 00:00:01 GMT";
      return Pa;
    }
    function qb() {
      return void 0 === wb.dialogArguments
        ? navigator.cookieEnabled || nb()
        : nb();
    }
    function jb() {
      var Pa;
      if (qb() && !window.dT_) {
        var Ya =
          ((Pa = {}),
          (Pa.cfg =
            "app=81992a422cc37f76|cors=1|rcdec=1209600000|featureHash=A27SVfqrux|vcv=2|reportUrl=https://bf77680jwl.bf.dynatrace.com/bf|rdnt=1|uxrgce=1|srcss=1|bp=3|srmcrv=10|cuc=g78nuzlr|chw=https://pxotpqva5a.execute-api.eu-west-1.amazonaws.com|mel=100000|dpvc=1|ssv=4|lastModification=1620823911952|dtVersion=10215210506134511|srmcrl=1|tp=500,50,0,1|uxdcw=1500|vs=2|featureHash=A27SVfqrux|async=1|agentUri=https://js-cdn.dynatrace.com/jstag/148709fdc4b/ruxitagent_A27SVfqrux_10215210506134511.js|auto=|domain=|rid=RID_|rpid=|app=81992a422cc37f76"),
          (Pa.iCE = qb),
          Pa);
        window.dT_ = Ya;
      }
    }
    var wb = "undefined" !== typeof window ? window : self,
      gb;
    wb.dT_
      ? (null === (gb = wb.console) || void 0 === gb
          ? void 0
          : gb.log(
              "Duplicate agent injection detected, turning off redundant initConfig."
            ),
        (wb.dT_.di = 1))
      : jb();
  })();
}.call(this));
(function () {
  if (typeof window !== "undefined" && window.setTimeout) {
    window.setTimeout = window.setTimeout;
  }
  var Promise = (this.dT_ && dT_.prm && dT_.prm()) || this.Promise;
  (function () {
    function nb() {}
    function qb(p, D, K) {
      void 0 === K && (K = 0);
      var pa = -1;
      D &&
        (null === p || void 0 === p ? 0 : p.indexOf) &&
        (pa = p.indexOf(D, K));
      return pa;
    }
    function jb() {
      var p;
      return !(null === (p = Ga.console) || void 0 === p || !p.log);
    }
    function wb(p, D) {
      if (!D) return "";
      var K = p + "=";
      p = qb(D, K);
      if (0 > p) return "";
      for (; 0 <= p; ) {
        if (0 === p || " " === D.charAt(p - 1) || ";" === D.charAt(p - 1))
          return (
            (K = p + K.length),
            (p = qb(D, ";", p)),
            0 <= p ? D.substring(K, p) : D.substr(K)
          );
        p = qb(D, K, p + K.length);
      }
      return "";
    }
    function gb(p) {
      return wb(p, document.cookie);
    }
    function Pa() {
      var p = 0;
      try {
        p = Math.round(Ga.performance.timeOrigin);
      } catch (K) {}
      if (0 >= p || isNaN(p) || !isFinite(p)) {
        p = Ga.dT_;
        var D = 0;
        try {
          D = Ga.performance.timing.navigationStart;
        } catch (K) {}
        p = 0 >= D || isNaN(D) || !isFinite(D) ? p.gAST() : D;
      }
      jc = p;
      Pc = Ya;
      return jc;
    }
    function Ya() {
      return jc;
    }
    function lb() {
      return Pc();
    }
    function ca() {
      var p,
        D = 0;
      if (
        null === (p = null === Ga || void 0 === Ga ? void 0 : Ga.performance) ||
        void 0 === p
          ? 0
          : p.now
      )
        try {
          D = Math.round(Ga.performance.now());
        } catch (K) {}
      return 0 >= D || isNaN(D) || !isFinite(D)
        ? new Date().getTime() - Pc()
        : D;
    }
    function H(p, D) {
      void 0 === D && (D = document.cookie);
      return wb(p, D);
    }
    function da() {}
    function L(p, D) {
      return function () {
        p.apply(D, arguments);
      };
    }
    function fa(p) {
      if (!(this instanceof fa))
        throw new TypeError("Promises must be constructed via new");
      if ("function" !== typeof p) throw new TypeError("not a function");
      this.Y = 0;
      this.cb = !1;
      this.da = void 0;
      this.ka = [];
      S(p, this);
    }
    function Da(p, D) {
      for (; 3 === p.Y; ) p = p.da;
      0 === p.Y
        ? p.ka.push(D)
        : ((p.cb = !0),
          fa.W(function () {
            var K = 1 === p.Y ? D.Rc : D.Sc;
            if (null === K) (1 === p.Y ? qa : Wa)(D.Ha, p.da);
            else {
              try {
                var pa = K(p.da);
              } catch (Na) {
                Wa(D.Ha, Na);
                return;
              }
              qa(D.Ha, pa);
            }
          }));
    }
    function qa(p, D) {
      try {
        if (D === p)
          throw new TypeError("A promise cannot be resolved with itself.");
        if (D && ("object" === typeof D || "function" === typeof D)) {
          var K = D.then;
          if (D instanceof fa) {
            p.Y = 3;
            p.da = D;
            ka(p);
            return;
          }
          if ("function" === typeof K) {
            S(L(K, D), p);
            return;
          }
        }
        p.Y = 1;
        p.da = D;
        ka(p);
      } catch (pa) {
        Wa(p, pa);
      }
    }
    function Wa(p, D) {
      p.Y = 2;
      p.da = D;
      ka(p);
    }
    function ka(p) {
      2 === p.Y &&
        0 === p.ka.length &&
        fa.W(function () {
          p.cb || fa.ra(p.da);
        });
      for (var D = 0, K = p.ka.length; D < K; D++) Da(p, p.ka[D]);
      p.ka = null;
    }
    function ja(p, D, K) {
      this.Rc = "function" === typeof p ? p : null;
      this.Sc = "function" === typeof D ? D : null;
      this.Ha = K;
    }
    function S(p, D) {
      var K = !1;
      try {
        p(
          function (pa) {
            K || ((K = !0), qa(D, pa));
          },
          function (pa) {
            K || ((K = !0), Wa(D, pa));
          }
        );
      } catch (pa) {
        K || ((K = !0), Wa(D, pa));
      }
    }
    function Z() {
      fa.W = function (p) {
        if ("string" === typeof p)
          throw Error("Promise polyfill called _immediateFn with string");
        p();
      };
      fa.ra = function () {};
      return fa;
    }
    function za(p, D, K, pa) {
      "undefined" === typeof pa && (pa = Ba(D, !0));
      "boolean" === typeof pa && (pa = Ba(D, pa));
      if (p === Ga) Ic ? Ic(D, K, pa) : Jh && Jh("on" + D, K);
      else if (fg && Ga.dT_.iIO(p, 21)) dh.call(p, D, K, pa);
      else if (p.addEventListener)
        if (p === Ga.document || p === Ga.document.documentElement)
          wi.call(p, D, K, pa);
        else
          try {
            Ic.call(p, D, K, pa);
          } catch (va) {
            p.addEventListener(D, K, pa);
          }
      else p.attachEvent && p.attachEvent("on" + D, K);
      pa = !1;
      for (var Na = Mf.length; 0 <= --Na; ) {
        var Qb = Mf[Na];
        if (Qb.object === p && Qb.event === D && Qb.H === K) {
          pa = !0;
          break;
        }
      }
      pa || Ga.dT_.apush(Mf, { object: p, event: D, H: K });
    }
    function oa(p, D, K, pa) {
      for (var Na = Mf.length; 0 <= --Na; ) {
        var Qb = Mf[Na];
        if (Qb.object === p && Qb.event === D && Qb.H === K) {
          Mf.splice(Na, 1);
          break;
        }
      }
      "undefined" === typeof pa && (pa = Ba(D, !0));
      "boolean" === typeof pa && (pa = Ba(D, pa));
      p === Ga
        ? Vc
          ? Vc(D, K, pa)
          : Jh && Jh("on" + D, K)
        : p.removeEventListener
        ? p === Ga.document || p === Ga.document.documentElement
          ? nj.call(p, D, K, pa)
          : Vc.call(p, D, K, pa)
        : p.detachEvent && p.detachEvent("on" + D, K);
    }
    function Ba(p, D) {
      var K = !1;
      try {
        var pa = Ga.dT_;
        if (Ic && -1 < pa.aIOf(xi, p)) {
          var Na = Object.defineProperty({}, "passive", {
            get: function () {
              K = !0;
            },
          });
          Ic("test", nb, Na);
        }
      } catch (Qb) {}
      return K ? { passive: !0, capture: D } : D;
    }
    function T() {
      for (var p = Mf, D = p.length; 0 <= --D; ) {
        var K = p[D];
        oa(K.object, K.event, K.H);
      }
      Mf = [];
      Ga.dT_.cx();
    }
    function sa() {
      return bf
        ? new bf()
        : Me
        ? new Me("MSXML2.XMLHTTP.3.0")
        : Ga.XMLHttpRequest
        ? new Ga.XMLHttpRequest()
        : new Ga.ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    function R() {
      Me = bf = void 0;
    }
    function Ka() {
      for (var p = 0, D = 0, K = arguments.length; D < K; D++)
        p += arguments[D].length;
      p = Array(p);
      var pa = 0;
      for (D = 0; D < K; D++)
        for (var Na = arguments[D], Qb = 0, va = Na.length; Qb < va; Qb++, pa++)
          p[pa] = Na[Qb];
      return p;
    }
    function Xa(p) {
      return (
        "function" === typeof p &&
        /{\s+\[native code]/.test(Function.prototype.toString.call(p))
      );
    }
    function Jb(p, D) {
      for (var K, pa = [], Na = 2; Na < arguments.length; Na++)
        pa[Na - 2] = arguments[Na];
      return void 0 !== Function.prototype.bind && Xa(Function.prototype.bind)
        ? (K = Function.prototype.bind).call.apply(K, Ka([p, D], pa))
        : function () {
            for (var Qb = 0; Qb < arguments.length; Qb++);
            return p.apply(
              D,
              (pa || []).concat(Array.prototype.slice.call(arguments) || [])
            );
          };
    }
    function xb() {
      if (yi) {
        var p = new yi();
        if (Ne)
          for (var D = 0, K = Nf; D < K.length; D++) {
            var pa = K[D];
            void 0 !== Ne[pa] && (p[pa] = Jb(Ne[pa], p));
          }
        return p;
      }
      return Kh
        ? new Kh("MSXML2.XMLHTTP.3.0")
        : Ga.XMLHttpRequest
        ? new Ga.XMLHttpRequest()
        : new Ga.ActiveXObject("MSXML2.XMLHTTP.3.0");
    }
    function Nb(p) {
      -1 < Ga.dT_.io(p, "^") &&
        ((p = p.split("^^").join("^")),
        (p = p.split("^dq").join('"')),
        (p = p.split("^rb").join(">")),
        (p = p.split("^lb").join("<")),
        (p = p.split("^p").join("|")),
        (p = p.split("^e").join("=")),
        (p = p.split("^s").join(";")),
        (p = p.split("^c").join(",")),
        (p = p.split("^bs").join("\\")));
      return p;
    }
    function Za() {
      return gg;
    }
    function Ia(p) {
      gg = p;
    }
    function Ca(p) {
      var D = Ga.dT_,
        K = D.scv("rid");
      D = D.scv("rpid");
      K && (p.rid = K);
      D && (p.rpid = D);
    }
    function Va(p) {
      if ((p = p.xb)) {
        p = Nb(p);
        try {
          gg = new RegExp(p);
        } catch (D) {}
      } else gg = void 0;
    }
    function Ua(p) {
      var D = p,
        K = Math.pow(2, 32);
      return function () {
        D = (1664525 * D + 1013904223) % K;
        return D / K;
      };
    }
    function ma(p, D) {
      return isNaN(p) || isNaN(D)
        ? Math.floor(33 * kd())
        : Math.floor(kd() * (D - p + 1)) + p;
    }
    function ab(p, D) {
      return parseInt(p, D || 10);
    }
    function eb(p) {
      return document.getElementsByTagName(p);
    }
    function ob(p) {
      var D = p.length;
      if ("number" === typeof D) p = D;
      else {
        D = 0;
        for (var K = 2048; p[K - 1]; ) (D = K), (K += K);
        for (var pa = 7; 1 < K - D; )
          (pa = (K + D) / 2), p[pa - 1] ? (D = pa) : (K = pa);
        p = p[pa] ? K : D;
      }
      return p;
    }
    function Sb(p) {
      p = encodeURIComponent(p);
      var D = [];
      if (p)
        for (var K = 0; K < p.length; K++) {
          var pa = p.charAt(K);
          Cb(D, Of[pa] || pa);
        }
      return D.join("");
    }
    function Qa(p) {
      if (!p) return "";
      var D = Ga.crypto || Ga.msCrypto;
      if (D && -1 === qb(navigator.userAgent, "Googlebot"))
        D = D.getRandomValues(new Uint8Array(p));
      else {
        D = [];
        for (var K = 0; K < p; K++) D.push(ma(0, 32));
      }
      p = [];
      for (K = 0; K < D.length; K++) {
        var pa = Math.abs(D[K] % 32);
        p.push(String.fromCharCode(pa + (9 >= pa ? 48 : 55)));
      }
      return p.join("");
    }
    function Ob() {
      return 0 <= Ga.dT_.io(navigator.userAgent, "RuxitSynthetic");
    }
    function Ea(p) {
      var D = {};
      p = p.split("|");
      for (var K = 0; K < p.length; K++) {
        var pa = p[K].split("=");
        2 === pa.length &&
          (D[pa[0]] = decodeURIComponent(pa[1].replace(/\+/g, " ")));
      }
      return D;
    }
    function sb() {
      var p = ra("csu");
      return (
        (p.indexOf("dbg") === p.length - 3 ? p.substr(0, p.length - 3) : p) +
        "_" +
        ra("app") +
        "_Store"
      );
    }
    function W(p, D, K) {
      D = D || {};
      var pa = 0;
      for (p = p.split("|"); pa < p.length; pa++) {
        var Na = p[pa],
          Qb = Na,
          va = qb(Na, "=");
        -1 === va
          ? (D[Qb] = "1")
          : ((Qb = Na.substring(0, va)),
            (D[Qb] = Na.substring(va + 1, Na.length)));
      }
      !K &&
        ((K = D), (pa = K.spc)) &&
        ((p = document.createElement("textarea")),
        (p.innerHTML = pa),
        (K.spc = p.value));
      return D;
    }
    function Fa(p) {
      var D;
      return null !== (D = Fc[p]) && void 0 !== D ? D : pd[p];
    }
    function Ra(p) {
      p = Fa(p);
      return "false" === p || "0" === p ? !1 : !!p;
    }
    function U(p) {
      var D = Fa(p);
      D = ab(D);
      isNaN(D) && (D = pd[p]);
      return D;
    }
    function ra(p) {
      return String(Fa(p) || "");
    }
    function xa(p, D) {
      Fc[p] = String(D);
    }
    function kb(p) {
      Fc = p;
      p = hg;
      for (var D in p) p.hasOwnProperty(D) && p[D] && (Fc[D] = p[D]);
      return Fc;
    }
    function yb(p) {
      Fc[p] = 0 > qb(Fc[p], "#" + p.toUpperCase()) ? Fc[p] : "";
    }
    function Ib(p) {
      var D = p.agentUri;
      D &&
        -1 < qb(D, "_") &&
        (D = /([a-zA-Z]*)[0-9]{0,4}_([a-zA-Z_0-9]*)_[0-9]+/g.exec(D)) &&
        D.length &&
        2 < D.length &&
        ((p.csu = D[1]), (p.featureHash = D[2]));
    }
    function Fb(p) {
      var D = p.domain || "";
      var K =
        (K = location.hostname) && D
          ? K === D || -1 !== K.indexOf("." + D, K.length - ("." + D).length)
          : !0;
      if (!D || !K) {
        p.domainOverride ||
          ((p.domainOverride = location.hostname + "," + D), delete p.domain);
        var pa = Sa();
        pa && (p.domain = pa);
        K ||
          Cb(Dd, {
            type: "dpi",
            severity: "Warning",
            text:
              'Configured domain "' +
              D +
              '" is invalid for current location "' +
              location.hostname +
              '". Agent will use "' +
              p.domain +
              '" instead.',
          });
      }
    }
    function Ha(p, D) {
      Fb(p);
      Fc.pVO && (p.pVO = Fc.pVO);
      D || ((D = p.bp || pd.bp), p.bp2 && (D = 2), (p.bp = String(D)));
    }
    function E() {
      return Fc;
    }
    function M(p) {
      return pd[p] === Fa(p);
    }
    function V() {
      var p = Ga.dT_;
      return !p.bcv("coo") || p.bcv("cooO") || p.iSM();
    }
    function P(p, D) {
      if (V() && (!Ga.dT_.overloadPrevention || Ob()))
        return p.apply(this, D || []);
    }
    function x(p, D) {
      try {
        var K = xf;
        K && K.setItem(p, D);
      } catch (pa) {}
    }
    function A(p, D) {
      P(x, [p, D]);
    }
    function I(p) {
      try {
        var D = xf;
        if (D) return D.getItem(p);
      } catch (K) {}
      return null;
    }
    function O(p) {
      try {
        var D = xf;
        D && D.removeItem(p);
      } catch (K) {}
    }
    function ha(p) {
      document.cookie =
        p +
        '="";path=/' +
        (ra("domain") ? ";domain=" + ra("domain") : "") +
        "; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    }
    function la(p, D, K) {
      var pa = 1,
        Na = 0;
      do
        (document.cookie =
          p +
          '=""' +
          (D ? ";domain=" + D : "") +
          ";path=" +
          K.substr(0, pa) +
          "; expires=Thu, 01 Jan 1970 00:00:01 GMT;"),
          (pa = K.indexOf("/", pa)),
          Na++;
      while (-1 !== pa && 5 > Na);
    }
    function Sa() {
      var p = document.domain || "";
      if (!p) return "";
      p = p.split(".").reverse();
      var D = p.length;
      if (1 >= D) return "";
      for (var K = p[0], pa = "", Na = 1; Na <= D; Na++)
        if (gb("dTValidationCookie")) {
          pa = K;
          break;
        } else {
          p[Na] && (K = p[Na] + "." + K);
          var Qb =
            "dTValidationCookie=dTValidationCookieValue;path=/;domain=" + K;
          Qb += Mb();
          document.cookie = Qb;
        }
      la("dTValidationCookie", pa, "/");
      return pa;
    }
    function pb(p, D, K, pa) {
      Lh = !0;
      D || 0 === D
        ? ((D = String(D).replace(/[;\n\r]/g, "_")),
          (p =
            p +
            "=" +
            D +
            ";path=/" +
            (ra("domain") ? ";domain=" + ra("domain") : "")),
          K && (p += ";expires=" + K.toUTCString()),
          (p += Mb()),
          pa && "https:" === location.protocol && (p += ";Secure"),
          (document.cookie = p))
        : ha(p);
      Lh = !1;
    }
    function Mb() {
      var p = ra("cssm");
      return "n" === p || "s" === p || "l" === p ? ";SameSite=" + Jd[p] : "";
    }
    function Pb(p, D, K, pa) {
      P(pb, [p, D, K, pa]);
    }
    function bc(p) {
      return 2 < (null === p || void 0 === p ? void 0 : p.split("$").length)
        ? !1
        : /^[0-9A-Za-z_=:\$\+\/\.\-\*%\|]*$/.test(p);
    }
    function Zb() {
      var p = gb("dtCookie");
      p || ((p = I("dtCookie")) && bc(p) ? ta(p) : (p = ""));
      return bc(p) ? p : "";
    }
    function ta(p) {
      Pb("dtCookie", p, void 0, Ra("ssc"));
    }
    function La(p) {
      return 32 === p.length || 12 >= p.length ? p : "";
    }
    function cb(p) {
      p = p.replace("-2D", "-");
      if (!isNaN(Number(p))) {
        var D = ab(p);
        if (-99 <= D && 99 >= D) return p;
      }
      return "";
    }
    function mb(p) {
      var D = { sessionId: "", rb: "", Ga: 0 },
        K = qb(p, "|"),
        pa = p;
      -1 !== K && (pa = p.substring(0, K));
      K = qb(pa, "$");
      -1 !== K
        ? ((D.sessionId = La(pa.substring(K + 1))),
          (D.rb = cb(pa.substring(0, K))))
        : (D.sessionId = La(pa));
      return D;
    }
    function Db(p) {
      var D = { sessionId: "", rb: "", Ga: 0 };
      p = p.split("v" === p.charAt(0) ? "_" : "=");
      if (2 < p.length && 0 === p.length % 2) {
        var K = Number(p[1]);
        if (isNaN(K) || 3 > K) return D;
        K = {};
        for (var pa = 2; pa < p.length; pa++) (K[p[pa]] = p[pa + 1]), pa++;
        K.sn ? (D.sessionId = La(K.sn)) : (D.sessionId = "hybrid");
        K.srv && (D.rb = cb(K.srv));
        p = Number(K.ol);
        1 === p &&
          ((K = Ob()),
          (pa = Ga.dT_),
          K ||
            (A("dtDisabled", "true"),
            (pa.disabled = !0),
            (pa.overloadPrevention = !0)));
        0 <= p && 2 >= p && (D.Ga = p);
      }
      return D;
    }
    function hc() {
      try {
        cf.apply(Ga.parent, arguments);
      } catch (p) {}
    }
    function vc() {
      try {
        df.apply(Ga.top, arguments);
      } catch (p) {}
    }
    function Qc(p) {
      var D = Array.prototype.slice.call(arguments, 1);
      try {
        oj.apply(p, D);
      } catch (K) {}
    }
    function Jc(p) {
      var D = Array.prototype.slice.call(arguments, 1);
      try {
        Mh.apply(p, D);
      } catch (K) {}
    }
    function Ac() {
      var p = Ga.dT_;
      Promise = Z();
      bf = Ga.XMLHttpRequest;
      Me = Ga.ActiveXObject;
      var D;
      yi = Ga.XMLHttpRequest;
      Kh = Ga.ActiveXObject;
      var K =
        null === (D = Ga.XMLHttpRequest) || void 0 === D ? void 0 : D.prototype;
      if (K) {
        Ne = {};
        D = 0;
        for (var pa = Nf; D < pa.length; D++) {
          var Na = pa[D];
          void 0 !== K[Na] && (Ne[Na] = K[Na]);
        }
      }
      Ic = Ga.addEventListener;
      Vc = Ga.removeEventListener;
      wi = Ga.document.addEventListener;
      nj = Ga.document.removeEventListener;
      eh = Ga.setTimeout;
      Cg = Ga.setInterval;
      ig || ((Pf = Ga.clearTimeout), (jg = Ga.clearInterval));
      p = p.iCE ? p.iCE() : navigator.cookieEnabled;
      K = 1 === Db(H("dtAdkSettings")).Ga;
      jb();
      if (p) {
        if (
          K ||
          !(
            "complete" !== document.readyState ||
            (Ga.performance && Ga.performance.timing)
          )
        )
          return !1;
      } else return !1;
      return !0;
    }
    function Gc() {
      return Kd();
    }
    function cd(p, D) {
      function K() {
        delete Ed[Qb];
        p.apply(this, arguments);
      }
      for (var pa = [], Na = 2; Na < arguments.length; Na++)
        pa[Na - 2] = arguments[Na];
      if ("apply" in eh) {
        pa.unshift(K, D);
        var Qb = eh.apply(Ga, pa);
      } else Qb = eh(K, D);
      Ed[Qb] = !0;
      return Qb;
    }
    function Nc(p) {
      delete Ed[p];
      "apply" in Pf ? Pf.call(Ga, p) : Pf(p);
    }
    function Cb(p) {
      for (var D = [], K = 1; K < arguments.length; K++)
        D[K - 1] = arguments[K];
      p.push.apply(p, D);
    }
    function Wc(p) {
      Cb(Qf, p);
    }
    function pc(p) {
      for (var D = Qf.length; D--; )
        if (Qf[D] === p) {
          Qf.splice(D, 1);
          break;
        }
    }
    function Bc() {
      return Qf;
    }
    function zb(p, D) {
      return Cg(p, D);
    }
    function Ad(p) {
      jg(p);
    }
    function wc(p, D) {
      if (!Dg || !ge) return "";
      p = new Dg([p], { type: D });
      return ge(p);
    }
    function kc(p, D) {
      return zi ? new zi(p, D) : void 0;
    }
    function Xc(p) {
      "function" === typeof p && Cb(Nh, p);
    }
    function Xb() {
      return Nh;
    }
    function hd() {
      return fh;
    }
    function Sd(p) {
      return function () {
        for (var D = [], K = 0; K < arguments.length; K++) D[K] = arguments[K];
        if ("number" !== typeof D[0] || !Ed[D[0]])
          try {
            return p.apply(this, D);
          } catch (pa) {
            return p(D[0]);
          }
      };
    }
    function De() {
      return Dd;
    }
    function re() {
      Pc = Pa;
      Ga.performance &&
        (Kd = function () {
          return Math.round(Pc() + ca());
        });
      if (!Kd || isNaN(Kd()) || 0 >= Kd() || !isFinite(Kd()))
        Kd = function () {
          return new Date().getTime();
        };
    }
    function ef() {
      ig && ((Ga.clearTimeout = Pf), (Ga.clearInterval = jg), (ig = !1));
    }
    function sd(p) {
      if ((p = p || Zb())) {
        var D = p.charAt(0);
        return "v" === D || "=" === D ? Db(p) : mb(p);
      }
      return { sessionId: "", rb: "", Ga: 0 };
    }
    function dd(p) {
      return sd(p).rb;
    }
    function Ee(p) {
      return sd(p).sessionId;
    }
    function qd() {
      return ff;
    }
    function Fd() {
      se(function () {
        if (!Ee()) {
          var p = -1 * ma(2, 99),
            D = Qa(32),
            K = U("ssv");
          ta(
            4 === K
              ? "v_4_srv_" + p + "_sn_" + D
              : 3 === K
              ? "=3=srv=" + p + "=sn=" + D
              : p + "$" + D
          );
        }
        ff = dd() || "";
      });
    }
    function ld() {
      return kg;
    }
    function te() {
      var p = document.cookie,
        D = U("vs"),
        K = vd(p);
      2 <= D && -1 === K ? (K = 0) : 1 === D && -1 < K && (K = -1);
      ed(Hc(!0, p), void 0, K, p);
    }
    function Rc(p, D) {
      var K = document.cookie;
      D = Hc(D, K);
      for (var pa = !1, Na = 0; Na < D.length; Na++) {
        var Qb = D[Na];
        Qb.frameId === kg && ((Qb.D = p), (pa = !0));
      }
      pa || Cb(D, { frameId: kg, D: p, Fb: -1, visitId: "" });
      ed(D, void 0, void 0, K);
    }
    function ed(p, D, K, pa) {
      var Na = U("pcl");
      Na = p.length - Na;
      0 < Na && p.splice(0, Na);
      if (p) {
        Na = [];
        for (var Qb = 0; Qb < p.length; Qb++)
          if ("-" !== p[Qb].D) {
            0 < Qb && 0 < Na.length && Cb(Na, "p");
            var va = ff;
            va && (Cb(Na, va), Cb(Na, "$"));
            Cb(Na, p[Qb].frameId);
            Cb(Na, "h");
            Cb(Na, String(p[Qb].D));
          }
        Na.length ||
          (Fe && (Q(!0, "a", !1, pa), Dc(!1)),
          (ff = dd() || ""),
          Cb(Na, ff),
          Cb(Na, "$"),
          Cb(Na, kg),
          Cb(Na, "h-"));
        p = D || he(pa);
        Cb(Na, "v");
        Cb(Na, p);
        p = null !== K && void 0 !== K ? K : vd(pa);
        0 <= p && (Cb(Na, "e"), Cb(Na, String(p)));
        p = Na.join("");
      } else p = "";
      p ||
        (Fe && (Q(!0, "a", !1, pa), Dc(!1)),
        (ff = dd() || ""),
        (K = null !== K && void 0 !== K ? K : vd(pa)),
        (p = ff + "$" + kg + "h-v" + (D || he(pa) + (0 <= K ? "e" + K : ""))));
      Pb("dtPC", p || "-", void 0, Ra("ssc"));
    }
    function Hc(p, D) {
      void 0 === D && (D = document.cookie);
      var K = H("dtPC", D);
      D = [];
      if (K && "-" !== K) {
        var pa = K.split("p");
        var Na = "";
        var Qb = null;
        for (K = 0; K < pa.length; K++) {
          var va = pa[K],
            mc = p;
          var Cc = qb(va, "$");
          var Ld = qb(va, "h"),
            xd = qb(va, "v"),
            Bd = qb(va, "e");
          Cc = va.substring(Cc + 1, Ld);
          Ld = -1 !== xd ? va.substring(Ld + 1, xd) : va.substring(Ld + 1);
          Na =
            Na || -1 !== xd
              ? -1 !== Bd
                ? va.substring(xd + 1, Bd)
                : va.substring(xd + 1)
              : "";
          Qb = Qb || -1 !== Bd ? va.substring(Bd + 1) : null;
          va = null;
          mc ||
            ((mc = ab(Cc.split("_")[0])),
            (xd = Kd() % Oh),
            xd < mc && (xd += Oh),
            (mc = mc + 9e5 > xd));
          mc &&
            (va = {
              frameId: Cc,
              D: "-" === Ld ? "-" : ab(Ld),
              Fb: -1,
              visitId: "",
            });
          (Cc = va) && D.push(Cc);
        }
        for (K = 0; K < D.length; K++) {
          D[K].visitId = Na;
          p = D[K];
          pa = ab(Qb || "");
          isNaN(pa) && (pa = ab(I(lg) || ""));
          if (isNaN(pa) || -1 > pa || pa > U("mel")) pa = 2 <= U("vs") ? 0 : -1;
          p.Fb = pa;
        }
      }
      return D;
    }
    function tc(p, D) {
      try {
        Ga.localStorage && Ga.localStorage.setItem(p, D);
      } catch (K) {}
    }
    function Ge(p) {
      try {
        if (Ga.localStorage) return Ga.localStorage.getItem(p);
      } catch (D) {}
      return null;
    }
    function Td(p) {
      try {
        Ga.localStorage && Ga.localStorage.removeItem(p);
      } catch (D) {}
    }
    function he(p) {
      return Ud(p) || Q(!0, "c", !1, p);
    }
    function Ud(p) {
      if (Vb(p) <= Kd()) return Q(!0, "t", !1, p);
      var D = Gd(p);
      if (!D) return Q(!0, "c", !1, p);
      var K = Rf.exec(D);
      if (!K || 3 !== K.length || 32 !== K[1].length || isNaN(ab(K[2])))
        return Q(!0, "i", !1, p);
      A(Sf, D);
      return D;
    }
    function He(p, D) {
      var K = Kd();
      D = tb(D).Cc;
      p && (D = K);
      hb(K + gf + "|" + D);
      ya();
    }
    function Gd(p) {
      var D, K;
      return null !==
        (K =
          null === (D = Hc(!0, p)[0]) || void 0 === D ? void 0 : D.visitId) &&
        void 0 !== K
        ? K
        : I(Sf);
    }
    function ue(p, D) {
      if (
        p &&
        (p = Gd(D)) &&
        (p = Rf.exec(p)) &&
        3 === p.length &&
        isFinite(Number(p[2]))
      )
        return p[1] + "-" + (Number(p[2]) + 1);
      p = Qa(32);
      p = p.replace(/[0-9]/g, function (K) {
        K = 0.1 * ab(K);
        return String.fromCharCode(Math.floor(25 * K + 65));
      });
      return p + "-0";
    }
    function Ie(p, D) {
      var K = Hc(!1, D),
        pa = 2 <= U("vs") ? 0 : -1;
      ed(K, p, pa, D);
      A(Sf, p);
      A(lg, String(pa));
      He(!0);
    }
    function z(p, D, K, pa) {
      return Q(D, K, pa);
    }
    function J(p, D, K, pa) {
      return Q(p, D, K, pa);
    }
    function Q(p, D, K, pa) {
      p && (Oe = !0);
      p = Gd(pa);
      K = ue(K);
      Ie(K);
      for (pa = 0; pa < mg.length; pa++) mg[pa](K, Oe, D, p);
      return K;
    }
    function X(p) {
      mg.push(p);
    }
    function ya(p) {
      Eg && Nc(Eg);
      Eg = cd($a, Vb(p) - Kd());
    }
    function $a() {
      var p = document.cookie;
      if (Vb(p) <= Kd() && V()) {
        var D = "t" + (Kd() - Vb(p)),
          K = Gd(p),
          pa = ue(!1, p);
        Ie(pa, p);
        for (p = 0; p < mg.length; p++) mg[p](pa, Oe, D, K);
        return !0;
      }
      se(ya);
      return !1;
    }
    function hb(p) {
      Pb("rxvt", p, void 0, Ra("ssc"));
      A("rxvt", p);
    }
    function db(p, D) {
      (D = H(p, D)) || (D = I(p) || "");
      return D;
    }
    function Bb() {
      var p = Ud() || "";
      A(Sf, p);
      p = db("rxvt");
      hb(p);
      Kc();
    }
    function tb(p) {
      var D = { Kd: 0, Cc: 0 };
      if ((p = db("rxvt", p)))
        try {
          var K = p.split("|");
          2 === K.length &&
            ((D.Kd = parseInt(K[0], 10)), (D.Cc = parseInt(K[1], 10)));
        } catch (pa) {}
      return D;
    }
    function Vb(p) {
      p = tb(p);
      return Math.min(p.Kd, p.Cc + ng);
    }
    function Ec(p) {
      gf = p;
    }
    function Dc(p) {
      void 0 === p && (p = !0);
      Fe = p;
    }
    function ae() {
      var p = Oe;
      Oe = !1;
      return p;
    }
    function Md() {
      $a() || He(!1);
    }
    function Nd() {
      var p, D;
      if (-1 !== vd(void 0) && 2 <= U("vs")) {
        var K = vd();
        if (K >= U("mel")) Q(!1, "e" + K, !0);
        else {
          K++;
          ed(Hc(!1), "", K);
          A(lg, String(K));
          try {
            null ===
              (D =
                null === (p = Ga.MobileAgent) || void 0 === p
                  ? void 0
                  : p.incrementActionCount) || void 0 === D
              ? void 0
              : D.call(p);
          } catch (pa) {}
        }
      }
    }
    function vd(p) {
      p = Hc(!0, p);
      if (1 <= p.length && !isNaN(p[0].Fb)) return p[0].Fb;
      p = I(lg) || "";
      p = ab(p);
      return isNaN(p) ? (2 <= U("vs") ? 0 : -1) : p;
    }
    function Kc() {
      Td(lg);
      Td(Sf);
      Td("rxvt");
    }
    function se(p) {
      V() ? p() : (hf || (hf = []), Cb(hf, p));
    }
    function ve(p) {
      return P(p);
    }
    function Pe() {
      if (Ra("coo") && !V()) {
        for (var p = 0; p < hf.length; p++) cd(hf[p], 0);
        hf = [];
        xa("cooO", !0);
      }
    }
    function Od() {
      if (Ra("coo") && V()) {
        xa("cooO", !1);
        ha("dtCookie");
        ha("dtPC");
        ha("dtLatC");
        ha("dtSa");
        ha("dtAdk");
        ha("rxVisitor");
        ha("rxvt");
        try {
          O(lg);
          O(Sf);
          O("rxvt");
          Kc();
          var p = xf;
          p && (p.removeItem("rxVisitor"), p.removeItem("dtCookie"));
          (p = gh) && p.removeItem(sb());
        } catch (D) {}
      }
    }
    function v(p) {
      return document.cookie ? document.cookie.split(p + "=").length - 1 : 0;
    }
    function r(p) {
      var D = v(p);
      if (1 < D) {
        var K = ra("domain") || Ga.location.hostname,
          pa = Ga.location.hostname,
          Na = Ga.location.pathname,
          Qb = 0,
          va = 0;
        rd.push(p);
        do {
          var mc = pa.substr(Qb);
          if (mc !== K || "/" !== Na) {
            la(p, mc === K ? "" : mc, Na);
            var Cc = v(p);
            Cc < D && (rd.push(mc), (D = Cc));
          }
          Qb = pa.indexOf(".", Qb) + 1;
          va++;
        } while (0 !== Qb && 10 > va && 1 < D);
        ra("domain") && 1 < D && la(p, "", Na);
      }
    }
    function u() {
      r("dtPC");
      r("dtCookie");
      r("dtLatC");
      r("rxvt");
      0 < rd.length &&
        Cb(Dd, {
          severity: "Error",
          type: "dcn",
          text:
            "Duplicate cookie name" +
            (1 !== rd.length ? "s" : "") +
            " detected: " +
            rd.join(", "),
        });
      Wc(function (p, D, K, pa) {
        0 < rd.length && !D && (p.av(pa, "dCN", rd.join(",")), (rd = []));
        0 < og.length && !D && (p.av(pa, "eCC", og.join(",")), (og = []));
      });
    }
    function B(p, D) {
      if (!p || !p.length) return -1;
      if (p.indexOf) return p.indexOf(D);
      for (var K = p.length; K--; ) if (p[K] === D) return K;
      return -1;
    }
    function F(p) {
      p &&
        (null === p || void 0 === p ? 0 : p.configurable) &&
        p.set &&
        p.get &&
        Object.defineProperty(document, "cookie", {
          get: function () {
            return p.get.call(document);
          },
          set: function (D) {
            var K = D.split("=")[0];
            p.set.call(document, D);
            Lh
              ? 1 < v(K) && rd.push(K)
              : -1 < B(pg, K) &&
                (og.push(K),
                -1 === B(nc, K) &&
                  (Cb(nc, K),
                  Cb(Dd, {
                    severity: "Error",
                    type: "ecm",
                    text:
                      "Invalid modification of agent cookie " +
                      K +
                      " detected. Modifying Dynatrace cookies may result in missing or invalid data.",
                  })));
          },
        });
    }
    function ea() {
      var p = gb("rxVisitor");
      (p && 45 === (null === p || void 0 === p ? void 0 : p.length)) ||
        ((p = Ge("rxVisitor") || I("rxVisitor")),
        45 !== (null === p || void 0 === p ? void 0 : p.length) &&
          ((we = !0), (p = String(Kd())), (p += Qa(45 - p.length))));
      Oa(p);
      return p;
    }
    function Oa(p) {
      if (Ra("dpvc") || Ra("pVO")) A("rxVisitor", p);
      else {
        var D = new Date();
        var K = D.getMonth() + Math.min(24, Math.max(1, U("rvcl")));
        D.setMonth(K);
        P(tc, ["rxVisitor", p]);
      }
      Pb("rxVisitor", p, D, Ra("ssc"));
    }
    function ib() {
      return we;
    }
    function ub(p) {
      var D = gb("rxVisitor");
      ha("rxVisitor");
      O("rxVisitor");
      Td("rxVisitor");
      xa("pVO", !0);
      Oa(D);
      p && P(tc, ["dt-pVO", "1"]);
      Bb();
    }
    function rb() {
      Td("dt-pVO");
      Ra("pVO") && (xa("pVO", !1), ea());
      O("rxVisitor");
      Bb();
    }
    function Gb(p, D, K, pa, Na) {
      var Qb = document.createElement("script");
      Qb.setAttribute("src", p);
      D && Qb.setAttribute("defer", "defer");
      K && (Qb.onload = K);
      pa && (Qb.onerror = pa);
      Na && Qb.setAttribute("id", Na);
      Qb.setAttribute("crossorigin", "anonymous");
      p = document.getElementsByTagName("script")[0];
      p.parentElement.insertBefore(Qb, p);
    }
    function uc(p, D) {
      return (
        Fg +
        "/" +
        (D || jf) +
        "_" +
        p +
        "_" +
        (U("buildNumber") || Ga.dT_.version) +
        ".js"
      );
    }
    function ad(p, D) {
      void 0 === D && (D = []);
      if (!p || ("object" !== typeof p && "function" !== typeof p)) return !1;
      var K = "number" !== typeof D ? D : [],
        pa = null,
        Na = [];
      switch ("number" === typeof D ? D : 5) {
        case 0:
          pa = "Array";
          Na = ["push"];
          break;
        case 1:
          pa = "Boolean";
          break;
        case 2:
          pa = "Number";
          break;
        case 3:
          pa = "String";
          break;
        case 4:
          pa = "Function";
          break;
        case 5:
          pa = "Object";
          break;
        case 6:
          pa = "Date";
          Na = ["getTime"];
          break;
        case 7:
          pa = "Error";
          Na = ["name", "message"];
          break;
        case 8:
          pa = "Element";
          break;
        case 9:
          pa = "HTMLElement";
          break;
        case 10:
          pa = "HTMLImageElement";
          Na = ["complete"];
          break;
        case 11:
          pa = "PerformanceEntry";
          break;
        case 12:
          pa = "PerformanceTiming";
          break;
        case 13:
          pa = "PerformanceResourceTiming";
          break;
        case 14:
          pa = "PerformanceNavigationTiming";
          break;
        case 15:
          pa = "CSSRule";
          Na = ["cssText", "parentStyleSheet"];
          break;
        case 16:
          pa = "CSSStyleSheet";
          Na = ["cssRules", "insertRule"];
          break;
        case 17:
          pa = "Request";
          Na = ["url"];
          break;
        case 18:
          pa = "Response";
          Na = ["ok", "status", "statusText"];
          break;
        case 19:
          pa = "Set";
          Na = ["add", "entries", "forEach"];
          break;
        case 20:
          pa = "Map";
          Na = ["set", "entries", "forEach"];
          break;
        case 21:
          pa = "Worker";
          Na = ["addEventListener", "postMessage", "terminate"];
          break;
        case 22:
          (pa = "XMLHttpRequest"), (Na = ["open", "send", "setRequestHeader"]);
      }
      D = pa;
      if (!D) return !1;
      Na = Na.length ? Na : K;
      try {
        var Qb = !!Ga[D] && p instanceof Ga[D],
          va = Object.prototype.toString.call(p);
        if (!K.length && (Qb || va === "[object " + D + "]")) return !0;
      } catch (mc) {}
      for (K = 0; K < Na.length; K++)
        if (
          ((Qb = Na[K]),
          ("string" !== typeof Qb &&
            "number" !== typeof Qb &&
            "symbol" !== typeof Qb) ||
            !(Qb in p))
        )
          return !1;
      return !!Na.length;
    }
    function dc() {
      var p,
        D = Ga.dT_;
      Ga.dT_ =
        ((p = {}),
        (p.di = 0),
        (p.version = "10215210506134511"),
        (p.cfg = D ? D.cfg : ""),
        (p.iCE = D
          ? D.iCE
          : function () {
              return navigator.cookieEnabled;
            }),
        (p.ica = 1),
        (p.disabled = !1),
        (p.overloadPrevention = !1),
        (p.gx = sa),
        (p.cx = R),
        (p.mp = hc),
        (p.mtp = vc),
        (p.mi = Qc),
        (p.mw = Jc),
        (p.gAST = hd),
        (p.ww = kc),
        (p.stu = wc),
        (p.nw = Gc),
        (p.apush = Cb),
        (p.st = cd),
        (p.si = zb),
        (p.aBPSL = Wc),
        (p.rBPSL = pc),
        (p.gBPSL = Bc),
        (p.aBPSCC = Xc),
        (p.gBPSCC = Xb),
        (p.buildType = "dynatrace"),
        (p.gSSV = I),
        (p.sSSV = A),
        (p.rSSV = O),
        (p.rvl = Td),
        (p.pn = ab),
        (p.iVSC = bc),
        (p.p3SC = Db),
        (p.pLSC = mb),
        (p.io = qb),
        (p.dC = ha),
        (p.sC = Pb),
        (p.esc = Sb),
        (p.gSId = dd),
        (p.gDtc = Ee),
        (p.gSC = Zb),
        (p.sSC = ta),
        (p.gC = gb),
        (p.cRN = ma),
        (p.cRS = Qa),
        (p.gEL = ob),
        (p.gEBTN = eb),
        (p.cfgO = E),
        (p.pCfg = Ea),
        (p.pCSAA = W),
        (p.cFHFAU = Ib),
        (p.sCD = Ha),
        (p.bcv = Ra),
        (p.ncv = U),
        (p.scv = ra),
        (p.stcv = xa),
        (p.rplC = kb),
        (p.cLSCK = sb),
        (p.gFId = ld),
        (p.gBAU = uc),
        (p.iS = Gb),
        (p.eWE = se),
        (p.oEIE = ve),
        (p.oEIEWA = P),
        (p.eA = Pe),
        (p.dA = Od),
        (p.gcSId = qd),
        (p.iNV = ib),
        (p.gVID = ea),
        (p.dPV = ub),
        (p.ePV = rb),
        (p.sVIdUP = Dc),
        (p.sVTT = Ec),
        (p.sVID = Ie),
        (p.rVID = Ud),
        (p.gVI = he),
        (p.gNVIdN = J),
        (p.gNVId = z),
        (p.gARnVF = ae),
        (p.cAUV = Md),
        (p.uVT = He),
        (p.aNVL = X),
        (p.gPC = Hc),
        (p.cPC = Rc),
        (p.sPC = ed),
        (p.clB = ef),
        (p.ct = Nc),
        (p.aRI = Ca),
        (p.iXB = Va),
        (p.gXBR = Za),
        (p.sXBR = Ia),
        (p.de = Nb),
        (p.cCL = jb),
        (p.gEC = vd),
        (p.iEC = Nd),
        (p.rnw = ca),
        (p.gto = lb),
        (p.ael = za),
        (p.rel = oa),
        (p.sup = Ba),
        (p.cuel = T),
        (p.iAEPOO = V),
        (p.iSM = Ob),
        (p.aIOf = B),
        (p.gxwp = xb),
        (p.iIO = ad),
        (p.prm = Z),
        (p.cI = Ad),
        (p.gidi = De),
        (p.iDCV = M),
        (p.gCF = H),
        p);
    }
    function $b() {
      try {
        if (!Ac()) return !1;
        dc();
        try {
          (gh = Ga.localStorage), (xf = Ga.sessionStorage);
        } catch (kf) {}
        re();
        fh = Kd();
        Qf = [];
        Dd = [];
        Ed = {};
        ig ||
          ((Ga.clearTimeout = Sd(Pf)), (Ga.clearInterval = Sd(jg)), (ig = !0));
        var p = Math.random(),
          D = Math.random();
        Tf = 0 !== p && 0 !== D && p !== D;
        if (-1 !== qb(navigator.userAgent, "Googlebot")) {
          var K = performance.getEntriesByType("navigation")[0];
          p = 1;
          if (K) {
            for (var pa in K)
              if ("number" === typeof K[pa] && K[pa]) {
                var Na = K[pa];
                p = 1 === p ? Na : p + Na;
              }
            var Qb = Math.floor(1e4 * p);
          } else Qb = p;
          kd = Ua(Qb);
        } else Tf ? (kd = Math.random) : (kd = Ua(Kd()));
        kg = (fh % Oh) + "_" + ab(ma(0, 1e3) + "");
        var va;
        pd =
          ((va = {}),
          (va.ade = ""),
          (va.aew = !0),
          (va.agentLocation = ""),
          (va.agentUri = ""),
          (va.uana = "data-dtname,data-dtName"),
          (va.app = ""),
          (va.async = !1),
          (va.ase = !1),
          (va.auto = !1),
          (va.bp1 = !1),
          (va.bp2 = !1),
          (va.bp = 1),
          (va.bs = !1),
          (va.buildNumber = 0),
          (va.csprv = !0),
          (va.cepl = 16e3),
          (va.cls = !0),
          (va.ccNcss = !1),
          (va.cg = !1),
          (va.coo = !1),
          (va.cooO = !1),
          (va.cssm = "0"),
          (va.cors = !1),
          (va.csu = ""),
          (va.cuc = ""),
          (va.cux = !1),
          (va.dataDtConfig = ""),
          (va.debugName = ""),
          (va.dvl = 500),
          (va.dASXH = !1),
          (va.disableCookieManager = !1),
          (va.disableLogging = !1),
          (va.dmo = !1),
          (va.doel = !1),
          (va.dpch = !1),
          (va.dpvc = !1),
          (va.disableXhrFailures = !1),
          (va.domain = ""),
          (va.domainOverride = ""),
          (va.doNotDetect = ""),
          (va.ds = !0),
          (va.dsndb = !1),
          (va.dsss = !1),
          (va.dssv = !0),
          (va.eni = !0),
          (va.euf = !1),
          (va.evl = ""),
          (va.extblacklist = ""),
          (va.exteventsoff = !1),
          (va.fau = !0),
          (va.fa = !1),
          (va.featureHash = ""),
          (va.ffi = !1),
          (va.hvt = 216e5),
          (va.lastModification = 0),
          (va.lupr = !0),
          (va.imm = !1),
          (va.iqvn = !1),
          (va.initializedModules = ""),
          (va.ign = ""),
          (va.instr = ""),
          (va.iub = ""),
          (va.lab = !1),
          (va.legacy = !1),
          (va.lt = !0),
          (va.mb = ""),
          (va.md = ""),
          (va.mdp = ""),
          (va.mdl = ""),
          (va.mdn = 5e3),
          (va.bismepl = 2e3),
          (va.mel = 200),
          (va.mepp = 10),
          (va.moa = 30),
          (va.mrt = 3),
          (va.mpl = 1024),
          (va.mmds = 2e4),
          (va.msl = 3e4),
          (va.mhl = 4e3),
          (va.ncw = !1),
          (va.ntd = !1),
          (va.oat = 180),
          (va.ote = !1),
          (va.owasp = !1),
          (va.perfbv = 1),
          (va.prfSmpl = 0),
          (va.pcl = 20),
          (va.pt = !0),
          (va.pui = !1),
          (va.pVO = !1),
          (va.raxeh = !0),
          (va.rdnt = 0),
          (va.reportUrl = "dynaTraceMonitor"),
          (va.restoreTimeline = !1),
          (va.rid = ""),
          (va.ridPath = ""),
          (va.rpid = ""),
          (va.rcdec = 12096e5),
          (va.rt = 1e4),
          (va.rtl = 0),
          (va.rtp = 2),
          (va.rtt = 1e3),
          (va.rtu = 200),
          (va.rvcl = 24),
          (va.sl = 100),
          (va.spc = ""),
          (va.srbbv = 1),
          (va.srbw = !0),
          (va.srad = !0),
          (va.srmr = 100),
          (va.srms = "1,1,,,"),
          (va.srsr = 1e5),
          (va.srtbv = 3),
          (va.srtd = 1),
          (va.srtr = 500),
          (va.srvr = ""),
          (va.srvi = 0),
          (va.srwo = !1),
          (va.srre = ""),
          (va.ssc = !1),
          (va.st = 3e3),
          (va.svNB = !1),
          (va.syntheticConfig = !1),
          (va.tal = 0),
          (va.tp = "500,50,3"),
          (va.tt = 100),
          (va.tvc = 3e3),
          (va.uam = !1),
          (va.uxdce = !1),
          (va.uxdcw = 1500),
          (va.uxrgce = !0),
          (va.uxrgcm = "100,25,300,3;100,25,300,3"),
          (va.usrvd = !0),
          (va.vcfi = !0),
          (va.vcit = 1e3),
          (va.vct = 50),
          (va.vcx = 50),
          (va.vs = 1),
          (va.vncm = 1),
          (va.xb = ""),
          (va.chw = ""),
          (va.xt = 0),
          (va.srcss = !1),
          (va.srmcrl = 1),
          (va.srmcrv = 10),
          (va.ssv = 1),
          (va.nosr = !1),
          (va.bisaoi = !1),
          (va.bisCmE = ""),
          (va.mcepsl = 100),
          (va.erjdw = !0),
          (va.fvdi = !1),
          (va.srif = !1),
          (va.srmt = !0),
          (va.vscl = 0),
          (va.dsa = !1),
          (va.exp = !1),
          (va.vrt = !1),
          (va.peti = !1),
          (va.expw = !1),
          (va.earxa = !0),
          va);
        a: {
          var mc = Ga.dT_.cfg;
          Fc = {
            reportUrl: "dynaTraceMonitor",
            initializedModules: "",
            csu: "dtagent",
            dataDtConfig: "string" === typeof mc ? mc : "",
          };
          Ga.dT_.cfg = Fc;
          Fc.csu = "ruxitagentjs";
          var Cc = Fc.dataDtConfig;
          Cc &&
            -1 === qb(Cc, "#CONFIGSTRING") &&
            (W(Cc, Fc), yb("domain"), yb("auto"), yb("app"), Ib(Fc));
          var Ld = eb("script"),
            xd = ob(Ld),
            Bd = -1 === qb(Fc.dataDtConfig || "", "#CONFIGSTRING") ? Fc : null;
          if (0 < xd)
            for (Qb = 0; Qb < xd; Qb++)
              b: {
                K = void 0;
                var Gg = Ld[Qb];
                pa = Bd;
                if (Gg.attributes) {
                  var yf = Fc.csu + "_bootstrap.js";
                  Na = /.*\/jstag\/.*\/.*\/(.*)_bs(_dbg)?.js$/;
                  va = pa;
                  var Vd = Gg.src,
                    zf = null === Vd || void 0 === Vd ? void 0 : Vd.indexOf(yf),
                    Uf = Gg.attributes.getNamedItem("data-dtconfig");
                  if (Uf) {
                    mc = void 0;
                    Cc = Vd;
                    var Hg = Uf.value;
                    p = {};
                    Fc.legacy = "1";
                    D = /([a-zA-Z]*)_([a-zA-Z_0-9]*)_([0-9]+)/g;
                    Cc &&
                      ((mc = D.exec(Cc)),
                      null === mc || void 0 === mc ? 0 : mc.length) &&
                      ((p.csu = mc[1]),
                      (p.featureHash = mc[2]),
                      (p.agentLocation = Cc.substr(0, qb(Cc, mc[1]) - 1)),
                      (p.buildNumber = mc[3]));
                    if (Hg) {
                      W(Hg, p, !0);
                      var Ai = p.agentUri;
                      !Cc &&
                        Ai &&
                        ((mc = D.exec(Ai)),
                        null === mc || void 0 === mc ? 0 : mc.length) &&
                        (p.csu = mc[1]);
                    }
                    Fb(p);
                    K = p;
                    if (!pa) va = K;
                    else if (!K.syntheticConfig) {
                      Bd = K;
                      break b;
                    }
                  }
                  K || (K = Fc);
                  if (0 < zf) {
                    var hh = zf + yf.length + 5;
                    K.app =
                      Vd.length > hh ? Vd.substr(hh) : "Default%20Application";
                  } else if (Vd) {
                    var xe = Na.exec(Vd);
                    xe && (K.app = xe[1]);
                  }
                  Bd = va;
                } else Bd = pa;
              }
          if (Bd)
            for (var Wb in Bd)
              Bd.hasOwnProperty(Wb) && ((Ld = Wb), (Fc[Ld] = Bd[Ld]));
          var lf = sb();
          try {
            var pj = (Bd = gh) && Bd.getItem(lf);
            if (pj) {
              var Wd = Ea(pj),
                be = W(Wd.config || ""),
                Qe = Fc.lastModification || "0",
                Je = ab(
                  (be.lastModification || Wd.lastModification || "0").substr(
                    0,
                    13
                  )
                ),
                Ig = "string" === typeof Qe ? ab(Qe.substr(0, 13)) : Qe;
              if (!Qe || Je >= Ig)
                if (
                  ((be.csu = Wd.name),
                  (be.featureHash = Wd.featureHash),
                  be.agentUri && Ib(be),
                  Ha(be, !0),
                  Va(be),
                  Ca(be),
                  Je > (Fc.lastModification || 0))
                ) {
                  var Re = Fc.auto,
                    qj = Fc.legacy;
                  Fc = kb(be);
                  Fc.auto = Re;
                  Fc.legacy = qj;
                }
            }
          } catch (kf) {}
          Ha(Fc);
          try {
            var wd = Fc.ign;
            if (wd && new RegExp(wd).test(Ga.location.href)) {
              document.dT_ = Ga.dT_ = void 0;
              var Cd = !1;
              break a;
            }
          } catch (kf) {}
          if (Ob()) {
            var ih = navigator.userAgent,
              Ph = qb(ih, "RuxitSynthetic") + 14 + 5,
              Pd = ih.substring(Ph);
            if (-1 !== qb(Pd, " c")) {
              var Qd = Pd.split(" ");
              for (lf = 0; lf < Qd.length; lf++) {
                var Se = Qd[lf];
                if ("c" === Se.charAt(0)) {
                  var Vf = Se.substr(1),
                    Zd = Vf.indexOf("="),
                    mf = Vf.substring(0, Zd),
                    Jg = Vf.substring(Zd + 1);
                  mf && Jg && (hg[mf] = Jg);
                }
              }
            }
            kb(Fc);
          }
          Cd = !0;
        }
        if (!Cd) return !1;
        u();
        try {
          Bi = Ga.dT_.disabled || !!I("dtDisabled");
        } catch (kf) {}
        var Te;
        if (!(Te = ra("agentLocation")))
          a: {
            var Af = ra("agentUri");
            if (Af || document.currentScript) {
              var ie = Af || document.currentScript.src;
              if (ie) {
                Cd = ie;
                var Ci =
                    -1 === qb(Cd, "_bs") &&
                    -1 === qb(Cd, "_bootstrap") &&
                    -1 === qb(Cd, "_complete")
                      ? 1
                      : 2,
                  qg = ie.lastIndexOf("/");
                for (Cd = 0; Cd < Ci && -1 !== qg; Cd++)
                  (ie = ie.substr(0, qg)), (qg = ie.lastIndexOf("/"));
                Te = ie;
                break a;
              }
            }
            var je = location.pathname;
            Te = je.substr(0, je.lastIndexOf("/"));
          }
        Fg = Te;
        jf = ra("csu") || "ruxitagentjs";
        "true" === gb("dtUseDebugAgent") &&
          0 > jf.indexOf("dbg") &&
          (jf = ra("debugName") || jf + "dbg");
        if (!Ra("auto") && !Ra("legacy") && !Bi) {
          var Bf = ra("agentUri") || uc(ra("featureHash")),
            Kg;
          if (!(Kg = Ra("async") || "complete" === document.readyState)) {
            var Wf = Ga.navigator.userAgent,
              Qh = Wf.indexOf("MSIE ");
            Kg =
              0 < Qh
                ? 9 >= parseInt(Wf.substring(Qh + 5, Wf.indexOf(".", Qh)), 10)
                : !1;
          }
          Kg
            ? Gb(Bf, Ra("async"), void 0, void 0, "dtjsagent")
            : (document.write(
                '<script id="dtjsagentdw" type="text/javascript" src="' +
                  Bf +
                  '">\x3c/script>'
              ),
              document.getElementById("dtjsagentdw") ||
                Gb(Bf, Ra("async"), void 0, void 0, "dtjsagent"));
        }
        gb("dtCookie") && xa("cooO", !0);
        Fd();
        xa("pVO", !!Ge("dt-pVO"));
        se(ea);
        gf = 18e5;
        ng = U("hvt") || 216e5;
        P(te);
        P(Rc, [1]);
        nc = [];
        pg = "dtCookie dtLatC rxvt dtAdk dtAdkSettings dtPC".split(" ");
        if (Ra("cg"))
          try {
            F(
              Object.getOwnPropertyDescriptor(Document.prototype, "cookie") ||
                Object.getOwnPropertyDescriptor(
                  HTMLDocument.prototype,
                  "cookie"
                )
            );
          } catch (kf) {}
      } catch (kf) {
        return !1;
      }
      return !0;
    }
    var Ga = "undefined" !== typeof window ? window : self,
      jc,
      Pc,
      Sc = setTimeout;
    fa.prototype["catch"] = function (p) {
      return this.then(null, p);
    };
    fa.prototype.then = function (p, D) {
      var K = new this.constructor(da);
      Da(this, new ja(p, D, K));
      return K;
    };
    fa.prototype["finally"] = function (p) {
      var D = this.constructor;
      return this.then(
        function (K) {
          return D.resolve(p()).then(function () {
            return K;
          });
        },
        function (K) {
          return D.resolve(p()).then(function () {
            return D.reject(K);
          });
        }
      );
    };
    fa.all = function (p) {
      return new fa(function (D, K) {
        function pa(mc, Cc) {
          try {
            if (Cc && ("object" === typeof Cc || "function" === typeof Cc)) {
              var Ld = Cc.then;
              if ("function" === typeof Ld) {
                Ld.call(
                  Cc,
                  function (xd) {
                    pa(mc, xd);
                  },
                  K
                );
                return;
              }
            }
            Na[mc] = Cc;
            0 === --Qb && D(Na);
          } catch (xd) {
            K(xd);
          }
        }
        if (!p || "undefined" === typeof p.length)
          throw new TypeError("Promise.all accepts an array");
        var Na = Array.prototype.slice.call(p);
        if (0 === Na.length) return D([]);
        for (var Qb = Na.length, va = 0; va < Na.length; va++) pa(va, Na[va]);
      });
    };
    fa.resolve = function (p) {
      return p && "object" === typeof p && p.constructor === fa
        ? p
        : new fa(function (D) {
            D(p);
          });
    };
    fa.reject = function (p) {
      return new fa(function (D, K) {
        K(p);
      });
    };
    fa.race = function (p) {
      return new fa(function (D, K) {
        for (var pa = 0, Na = p.length; pa < Na; pa++) p[pa].then(D, K);
      });
    };
    fa.W =
      ("function" === typeof setImmediate &&
        function (p) {
          setImmediate(p);
        }) ||
      function (p) {
        Sc(p, 0);
      };
    fa.ra = function (p) {
      "undefined" !== typeof console &&
        console &&
        console.warn("Possible Unhandled Promise Rejection:", p);
    };
    var Ic,
      Vc,
      wi,
      nj,
      Jh = Ga.attachEvent,
      fg = Ga.Worker,
      dh = fg && fg.prototype.addEventListener,
      Mf = [],
      xi = ["touchstart", "touchend", "scroll"],
      bf,
      Me,
      yi,
      Kh,
      Nf =
        "abort getAllResponseHeaders getResponseHeader open overrideMimeType send setRequestHeader".split(
          " "
        ),
      Ne,
      gg,
      kd,
      Tf,
      Of = new ((function () {
        return function () {
          this["!"] = "%21";
          this["~"] = "%7E";
          this["*"] = "%2A";
          this["("] = "%28";
          this[")"] = "%29";
          this["'"] = "%27";
          this.$ = "%24";
          this[";"] = "%3B";
          this[","] = "%2C";
        };
      })())(),
      hg = {},
      pd,
      Fc = {},
      Ke,
      Jd = ((Ke = {}), (Ke.l = "Lax"), (Ke.s = "Strict"), (Ke.n = "None"), Ke),
      Lh = !1,
      oj = Ga.postMessage,
      Mh = Ga.Worker && Ga.Worker.prototype.postMessage,
      cf = Ga.parent.postMessage,
      df = Ga.top.postMessage,
      zi = Ga.Worker,
      Dg = Ga.Blob,
      ge = Ga.URL && Ga.URL.createObjectURL,
      Pf,
      jg,
      eh,
      Cg,
      ig = !1,
      Qf,
      Nh = [],
      Dd = [],
      fh,
      gh,
      xf,
      Ed = {},
      Kd,
      ff,
      kg,
      Oh = 6e8,
      lg = "rxec",
      Sf = "rxvisitid",
      Rf = /([A-Z]+)-([0-9]+)/,
      mg = [],
      gf,
      ng,
      Oe = !1,
      Eg,
      Fe = !1,
      hf = [],
      rd = [],
      og = [],
      pg = [],
      nc = [],
      we = !1,
      Bi,
      Fg,
      jf;
    (function (p) {
      var D, K;
      p =
        p ||
        0 >
          (null === (D = navigator.userAgent) || void 0 === D
            ? void 0
            : D.indexOf("RuxitSynthetic"));
      if (
        !Ga.dT_ ||
        !Ga.dT_.cfg ||
        "string" !== typeof Ga.dT_.cfg ||
        ("initialized" in Ga.dT_ && Ga.dT_.initialized)
      )
        null === (K = Ga.console) || void 0 === K
          ? void 0
          : K.log(
              "InitConfig not found or agent already initialized! This is an injection issue."
            ),
          Ga.dT_ && (Ga.dT_.di = 3);
      else if (p && !$b()) {
        try {
          delete Ga.dT_;
        } catch (pa) {
          Ga.dT_ = void 0;
        }
        jb() && Ga.console.log("JsAgent initCode initialization failed!");
      }
    })(!1);
  })();
}.call(this));
