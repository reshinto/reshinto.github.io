"use strict";
(self.webpackChunkportfolio = self.webpackChunkportfolio || []).push([
  [12],
  {
    3905: (e, n, t) => {
      t.d(n, {Zo: () => u, kt: () => d});
      var a = t(7294);
      function i(e, n, t) {
        return (
          n in e
            ? Object.defineProperty(e, n, {
                value: t,
                enumerable: !0,
                configurable: !0,
                writable: !0,
              })
            : (e[n] = t),
          e
        );
      }
      function r(e, n) {
        var t = Object.keys(e);
        if (Object.getOwnPropertySymbols) {
          var a = Object.getOwnPropertySymbols(e);
          n &&
            (a = a.filter(function (n) {
              return Object.getOwnPropertyDescriptor(e, n).enumerable;
            })),
            t.push.apply(t, a);
        }
        return t;
      }
      function l(e) {
        for (var n = 1; n < arguments.length; n++) {
          var t = null != arguments[n] ? arguments[n] : {};
          n % 2
            ? r(Object(t), !0).forEach(function (n) {
                i(e, n, t[n]);
              })
            : Object.getOwnPropertyDescriptors
            ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t))
            : r(Object(t)).forEach(function (n) {
                Object.defineProperty(
                  e,
                  n,
                  Object.getOwnPropertyDescriptor(t, n)
                );
              });
        }
        return e;
      }
      function o(e, n) {
        if (null == e) return {};
        var t,
          a,
          i = (function (e, n) {
            if (null == e) return {};
            var t,
              a,
              i = {},
              r = Object.keys(e);
            for (a = 0; a < r.length; a++)
              (t = r[a]), n.indexOf(t) >= 0 || (i[t] = e[t]);
            return i;
          })(e, n);
        if (Object.getOwnPropertySymbols) {
          var r = Object.getOwnPropertySymbols(e);
          for (a = 0; a < r.length; a++)
            (t = r[a]),
              n.indexOf(t) >= 0 ||
                (Object.prototype.propertyIsEnumerable.call(e, t) &&
                  (i[t] = e[t]));
        }
        return i;
      }
      var s = a.createContext({}),
        m = function (e) {
          var n = a.useContext(s),
            t = n;
          return e && (t = "function" == typeof e ? e(n) : l(l({}, n), e)), t;
        },
        u = function (e) {
          var n = m(e.components);
          return a.createElement(s.Provider, {value: n}, e.children);
        },
        c = {
          inlineCode: "code",
          wrapper: function (e) {
            var n = e.children;
            return a.createElement(a.Fragment, {}, n);
          },
        },
        p = a.forwardRef(function (e, n) {
          var t = e.components,
            i = e.mdxType,
            r = e.originalType,
            s = e.parentName,
            u = o(e, ["components", "mdxType", "originalType", "parentName"]),
            p = m(t),
            d = i,
            h = p["".concat(s, ".").concat(d)] || p[d] || c[d] || r;
          return t
            ? a.createElement(h, l(l({ref: n}, u), {}, {components: t}))
            : a.createElement(h, l({ref: n}, u));
        });
      function d(e, n) {
        var t = arguments,
          i = n && n.mdxType;
        if ("string" == typeof e || i) {
          var r = t.length,
            l = new Array(r);
          l[0] = p;
          var o = {};
          for (var s in n) hasOwnProperty.call(n, s) && (o[s] = n[s]);
          (o.originalType = e),
            (o.mdxType = "string" == typeof e ? e : i),
            (l[1] = o);
          for (var m = 2; m < r; m++) l[m] = t[m];
          return a.createElement.apply(null, l);
        }
        return a.createElement.apply(null, t);
      }
      p.displayName = "MDXCreateElement";
    },
    6861: (e, n, t) => {
      t.r(n),
        t.d(n, {
          assets: () => s,
          contentTitle: () => l,
          default: () => c,
          frontMatter: () => r,
          metadata: () => o,
          toc: () => m,
        });
      var a = t(7462),
        i = (t(7294), t(3905));
      const r = {},
        l = "PROGRAMMING LANGUAGE SYNTAX COMPARISON",
        o = {
          unversionedId: "readme",
          id: "readme",
          title: "PROGRAMMING LANGUAGE SYNTAX COMPARISON",
          description:
            "A syntax summary, which also compares the differences between each programming language.",
          source: "@site/docs/readme.md",
          sourceDirName: ".",
          slug: "/",
          permalink: "/docs/",
          draft: !1,
          editUrl:
            "https://github.com/reshinto/programming_language_syntax_comparison/blob/master/readme.md",
          tags: [],
          version: "current",
          frontMatter: {},
          sidebar: "tutorialSidebar",
          previous: {
            title: "Gradle",
            permalink: "/docs/projectManagementTools/gradle/",
          },
        },
        s = {},
        m = [
          {value: "c++", id: "c", level: 3},
          {value: "groovy", id: "groovy", level: 3},
          {value: "assembly", id: "assembly", level: 3},
          {value: "Comments", id: "comments", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3", level: 3},
          {value: "javascript", id: "javascript-1", level: 3},
          {value: "ruby", id: "ruby-1", level: 3},
          {value: "java", id: "java-1", level: 3},
          {value: "c#", id: "c-1", level: 3},
          {value: "c++", id: "c-2", level: 3},
          {value: "assembly", id: "assembly-1", level: 3},
          {value: "Data types", id: "data-types", level: 2},
          {value: "python", id: "python", level: 3},
          {value: "8 main data types", id: "8-main-data-types", level: 4},
          {value: "javascript", id: "javascript-2", level: 3},
          {
            value: "1 primitive structural root",
            id: "1-primitive-structural-root",
            level: 4,
          },
          {value: "2 Structual types", id: "2-structual-types", level: 4},
          {
            value: "6 basic primitive data types",
            id: "6-basic-primitive-data-types",
            level: 4,
          },
          {value: "java 8", id: "java-8", level: 3},
          {value: "2 major data types", id: "2-major-data-types", level: 4},
          {
            value: "Variable declaration int",
            id: "variable-declaration-int",
            level: 2,
          },
          {value: "python 2", id: "python-2-1", level: 3},
          {value: "python 3", id: "python-3-1", level: 3},
          {value: "javascript ES5", id: "javascript-es5", level: 3},
          {value: "javascript ES6", id: "javascript-es6", level: 3},
          {value: "typescript", id: "typescript", level: 3},
          {value: "ruby", id: "ruby-2", level: 3},
          {value: "java", id: "java-2", level: 3},
          {value: "c#", id: "c-3", level: 3},
          {value: "c++", id: "c-4", level: 3},
          {
            value: "Variable declaration float",
            id: "variable-declaration-float",
            level: 2,
          },
          {value: "python 2 &amp; 3", id: "python-2--3-1", level: 3},
          {value: "javascript ES5", id: "javascript-es5-1", level: 3},
          {value: "javascript ES6", id: "javascript-es6-1", level: 3},
          {value: "typescript", id: "typescript-1", level: 3},
          {value: "ruby", id: "ruby-3", level: 3},
          {value: "java:", id: "java-3", level: 3},
          {value: "c#", id: "c-5", level: 3},
          {value: "c++", id: "c-6", level: 3},
          {
            value: "Variable declaration None",
            id: "variable-declaration-none",
            level: 2,
          },
          {value: "python 2 &amp; 3", id: "python-2--3-2", level: 3},
          {value: "javascript", id: "javascript-3", level: 3},
          {value: "typescript", id: "typescript-2", level: 3},
          {value: "ruby", id: "ruby-4", level: 3},
          {value: "java", id: "java-4", level: 3},
          {value: "c#", id: "c-7", level: 3},
          {value: "c++", id: "c-8", level: 3},
          {value: "Strings", id: "strings", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-3", level: 3},
          {value: "javascript ES5", id: "javascript-es5-2", level: 3},
          {
            value: "javascript ES6  // Almost all of ES5 are included in ES6",
            id: "javascript-es6---almost-all-of-es5-are-included-in-es6",
            level: 3,
          },
          {value: "typescript", id: "typescript-3", level: 3},
          {value: "ruby", id: "ruby-5", level: 3},
          {value: "java", id: "java-5", level: 3},
          {value: "c#", id: "c-9", level: 3},
          {value: "c++", id: "c-10", level: 3},
          {value: "Boolean", id: "boolean", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-4", level: 3},
          {value: "javascript ES5", id: "javascript-es5-3", level: 3},
          {value: "javascript ES6", id: "javascript-es6-2", level: 3},
          {value: "typescript", id: "typescript-4", level: 3},
          {value: "ruby", id: "ruby-6", level: 3},
          {value: "java", id: "java-6", level: 3},
          {value: "c#", id: "c-11", level: 3},
          {value: "c++: 8 bits", id: "c-8-bits", level: 3},
          {value: "Arithmetic Operators", id: "arithmetic-operators", level: 2},
          {value: "python 2", id: "python-2-2", level: 3},
          {value: "python 3", id: "python-3-2", level: 3},
          {value: "javascript", id: "javascript-4", level: 3},
          {value: "ruby", id: "ruby-7", level: 3},
          {value: "java", id: "java-7", level: 3},
          {value: "c#", id: "c-12", level: 3},
          {value: "c++", id: "c-13", level: 3},
          {value: "Comparison Operators", id: "comparison-operators", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-5", level: 3},
          {value: "javascript", id: "javascript-5", level: 3},
          {value: "ruby", id: "ruby-8", level: 3},
          {value: "java", id: "java-9", level: 3},
          {value: "c#", id: "c-14", level: 3},
          {value: "c++", id: "c-15", level: 3},
          {value: "Logical Operators", id: "logical-operators", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-6", level: 3},
          {value: "javascript", id: "javascript-6", level: 3},
          {value: "ruby", id: "ruby-9", level: 3},
          {value: "java", id: "java-10", level: 3},
          {value: "c#", id: "c-16", level: 3},
          {value: "c++", id: "c-17", level: 3},
          {value: "Getting Input", id: "getting-input", level: 2},
          {value: "python 2", id: "python-2-3", level: 3},
          {value: "python 3", id: "python-3-3", level: 3},
          {value: "javascript", id: "javascript-7", level: 3},
          {value: "ruby", id: "ruby-10", level: 3},
          {value: "java", id: "java-11", level: 3},
          {value: "c#", id: "c-18", level: 3},
          {value: "c++", id: "c-19", level: 3},
          {value: "Bitwise Operators", id: "bitwise-operators", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-7", level: 3},
          {value: "javascript", id: "javascript-8", level: 3},
          {value: "ruby", id: "ruby-11", level: 3},
          {value: "java", id: "java-12", level: 3},
          {value: "c#", id: "c-20", level: 3},
          {value: "c++", id: "c-21", level: 3},
          {value: "Increment", id: "increment", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-8", level: 3},
          {value: "javascript", id: "javascript-9", level: 3},
          {value: "ruby", id: "ruby-12", level: 3},
          {value: "java", id: "java-13", level: 3},
          {value: "c#", id: "c-22", level: 3},
          {value: "c++", id: "c-23", level: 3},
          {value: "Arrays and Lists", id: "arrays-and-lists", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-9", level: 3},
          {value: "javascript", id: "javascript-10", level: 3},
          {value: "typescript", id: "typescript-5", level: 3},
          {value: "ruby", id: "ruby-13", level: 3},
          {value: "java", id: "java-14", level: 3},
          {value: "c#", id: "c-24", level: 3},
          {value: "c++", id: "c-25", level: 3},
          {
            value: "Conditional Statement",
            id: "conditional-statement",
            level: 2,
          },
          {value: "python 2 &amp; 3", id: "python-2--3-10", level: 3},
          {value: "javascript", id: "javascript-11", level: 3},
          {value: "ruby", id: "ruby-14", level: 3},
          {value: "java", id: "java-15", level: 3},
          {value: "c#", id: "c-26", level: 3},
          {value: "c++", id: "c-27", level: 3},
          {value: "Loops", id: "loops", level: 2},
          {value: "python 2", id: "python-2-4", level: 3},
          {value: "python 3", id: "python-3-4", level: 3},
          {value: "javascript ES5", id: "javascript-es5-4", level: 3},
          {
            value: "javascript ES6: Use let in loops when declaring",
            id: "javascript-es6-use-let-in-loops-when-declaring",
            level: 3,
          },
          {value: "ruby", id: "ruby-15", level: 3},
          {value: "java", id: "java-16", level: 3},
          {value: "c#", id: "c-28", level: 3},
          {value: "c++", id: "c-29", level: 3},
          {value: "Instantiation", id: "instantiation", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-11", level: 3},
          {value: "javascript", id: "javascript-12", level: 3},
          {value: "ruby", id: "ruby-16", level: 3},
          {value: "java", id: "java-17", level: 3},
          {value: "c#", id: "c-30", level: 3},
          {value: "c++", id: "c-31", level: 3},
          {value: "Functions", id: "functions", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-12", level: 3},
          {value: "javascript ES5", id: "javascript-es5-5", level: 3},
          {value: "javascript ES6", id: "javascript-es6-3", level: 3},
          {value: "typescript", id: "typescript-6", level: 3},
          {value: "ruby", id: "ruby-17", level: 3},
          {value: "java", id: "java-18", level: 3},
          {value: "c#", id: "c-32", level: 3},
          {value: "c++", id: "c-33", level: 3},
          {
            value: "Higher order functions",
            id: "higher-order-functions",
            level: 2,
          },
          {value: "python 2", id: "python-2-5", level: 3},
          {value: "python 3", id: "python-3-5", level: 3},
          {value: "javascript", id: "javascript-13", level: 3},
          {value: "ruby", id: "ruby-18", level: 3},
          {value: "java", id: "java-19", level: 3},
          {value: "c++", id: "c-34", level: 3},
          {value: "Hash Tables", id: "hash-tables", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-13", level: 3},
          {value: "javascript ES5", id: "javascript-es5-6", level: 3},
          {value: "javascript ES6", id: "javascript-es6-4", level: 3},
          {value: "typescript", id: "typescript-7", level: 3},
          {value: "ruby", id: "ruby-19", level: 3},
          {value: "java", id: "java-20", level: 3},
          {value: "c#", id: "c-35", level: 3},
          {value: "c++", id: "c-36", level: 3},
          {value: "Destructuring", id: "destructuring", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-14", level: 3},
          {value: "javascript ES6", id: "javascript-es6-5", level: 3},
          {value: "typescript", id: "typescript-8", level: 3},
          {value: "ruby", id: "ruby-20", level: 3},
          {value: "java", id: "java-21", level: 3},
          {value: "c++", id: "c-37", level: 3},
          {value: "Spread Operator", id: "spread-operator", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-15", level: 3},
          {value: "javascript ES6", id: "javascript-es6-6", level: 3},
          {value: "ruby", id: "ruby-21", level: 3},
          {value: "java", id: "java-22", level: 3},
          {value: "c++", id: "c-38", level: 3},
          {value: "Rest parameters", id: "rest-parameters", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-16", level: 3},
          {value: "javascript ES6", id: "javascript-es6-7", level: 3},
          {value: "ruby", id: "ruby-22", level: 3},
          {value: "java", id: "java-23", level: 3},
          {value: "c#", id: "c-39", level: 3},
          {value: "c++", id: "c-40", level: 3},
          {value: "Class", id: "class", level: 2},
          {value: "python 2", id: "python-2-6", level: 3},
          {value: "python 3", id: "python-3-6", level: 3},
          {value: "javascript ES5", id: "javascript-es5-7", level: 3},
          {value: "javascript ES6", id: "javascript-es6-8", level: 3},
          {value: "typescript", id: "typescript-9", level: 3},
          {value: "ruby", id: "ruby-23", level: 3},
          {value: "java", id: "java-24", level: 3},
          {value: "c#", id: "c-41", level: 3},
          {value: "c++", id: "c-42", level: 3},
          {value: "Importing Libraries", id: "importing-libraries", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-17", level: 3},
          {value: "javascript ES5", id: "javascript-es5-8", level: 3},
          {value: "javascript ES6", id: "javascript-es6-9", level: 3},
          {value: "ruby", id: "ruby-24", level: 3},
          {value: "java", id: "java-25", level: 3},
          {value: "c++", id: "c-43", level: 3},
          {value: "Type Conversions", id: "type-conversions", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-18", level: 3},
          {value: "javascript", id: "javascript-14", level: 3},
          {value: "ruby", id: "ruby-25", level: 3},
          {value: "java", id: "java-26", level: 3},
          {value: "c#", id: "c-44", level: 3},
          {value: "c++", id: "c-45", level: 3},
          {value: "Find Data Type", id: "find-data-type", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-19", level: 3},
          {value: "javascript", id: "javascript-15", level: 3},
          {value: "ruby", id: "ruby-26", level: 3},
          {value: "java", id: "java-27", level: 3},
          {value: "c#", id: "c-46", level: 3},
          {value: "c++", id: "c-47", level: 3},
          {value: "String Concatenation", id: "string-concatenation", level: 2},
          {value: "python 2", id: "python-2-7", level: 3},
          {value: "python 3", id: "python-3-7", level: 3},
          {value: "javascript ES5", id: "javascript-es5-9", level: 3},
          {value: "javascript ES6", id: "javascript-es6-10", level: 3},
          {value: "ruby", id: "ruby-27", level: 3},
          {value: "java", id: "java-28", level: 3},
          {value: "c#", id: "c-48", level: 3},
          {value: "c++", id: "c-49", level: 3},
          {value: "JSON", id: "json", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-20", level: 3},
          {value: "javascript", id: "javascript-16", level: 3},
          {value: "ruby", id: "ruby-28", level: 3},
          {value: "java", id: "java-29", level: 3},
          {value: "c++", id: "c-50", level: 3},
          {value: "Program Entry Point", id: "program-entry-point", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-21", level: 3},
          {value: "javascript", id: "javascript-17", level: 3},
          {value: "ruby", id: "ruby-29", level: 3},
          {value: "java", id: "java-30", level: 3},
          {value: "c#", id: "c-51", level: 3},
          {value: "c++", id: "c-52", level: 3},
          {value: "Swapping values", id: "swapping-values", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-22", level: 3},
          {value: "javascript ES5", id: "javascript-es5-10", level: 3},
          {value: "javascript ES6", id: "javascript-es6-11", level: 3},
          {value: "ruby", id: "ruby-30", level: 3},
          {value: "java", id: "java-31", level: 3},
          {value: "c++", id: "c-53", level: 3},
          {value: "Error Handling", id: "error-handling", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-23", level: 3},
          {value: "javascript", id: "javascript-18", level: 3},
          {value: "ruby", id: "ruby-31", level: 3},
          {value: "java", id: "java-32", level: 3},
          {value: "c#", id: "c-54", level: 3},
          {value: "c++", id: "c-55", level: 3},
          {value: "Custom Error", id: "custom-error", level: 2},
          {value: "python 2 &amp; 3", id: "python-2--3-24", level: 3},
          {value: "javascript", id: "javascript-19", level: 3},
          {value: "ruby", id: "ruby-32", level: 3},
          {value: "java", id: "java-33", level: 3},
          {value: "c#", id: "c-56", level: 3},
          {value: "c++", id: "c-57", level: 3},
          {value: "Asynchronous", id: "asynchronous", level: 2},
          {value: "python", id: "python-1", level: 3},
          {value: "javascript ES5", id: "javascript-es5-11", level: 3},
          {value: "javascript ES6", id: "javascript-es6-12", level: 3},
          {value: "javascript ES8", id: "javascript-es8", level: 3},
          {value: "ruby", id: "ruby-33", level: 3},
          {value: "java", id: "java-34", level: 3},
          {value: "c#", id: "c-58", level: 3},
          {value: "c++", id: "c-59", level: 3},
          {value: "Math", id: "math", level: 2},
          {value: "python 3", id: "python-3-8", level: 3},
          {value: "javascript", id: "javascript-20", level: 3},
          {value: "ruby", id: "ruby-34", level: 3},
          {value: "java", id: "java-35", level: 3},
          {value: "c#", id: "c-60", level: 3},
          {value: "c++", id: "c-61", level: 3},
          {value: "Date and Time", id: "date-and-time", level: 2},
          {value: "python3", id: "python3", level: 3},
          {value: "javascript", id: "javascript-21", level: 3},
          {value: "ruby", id: "ruby-35", level: 3},
          {value: "java", id: "java-36", level: 3},
          {value: "c#", id: "c-62", level: 3},
          {value: "c++", id: "c-63", level: 3},
          {value: "File System", id: "file-system", level: 2},
          {value: "python", id: "python-4", level: 3},
          {value: "javascript", id: "javascript-22", level: 3},
          {value: "ruby", id: "ruby-36", level: 3},
          {value: "java", id: "java-37", level: 3},
          {value: "c#", id: "c-64", level: 3},
          {value: "c++", id: "c-65", level: 3},
          {value: "Access modifier", id: "access-modifier", level: 2},
          {value: "python", id: "python-5", level: 3},
          {value: "javascript", id: "javascript-23", level: 3},
          {value: "typescript", id: "typescript-10", level: 3},
          {value: "ruby", id: "ruby-37", level: 3},
          {value: "java", id: "java-38", level: 3},
          {value: "c#", id: "c-66", level: 3},
          {value: "c++", id: "c-67", level: 3},
          {value: "Iterators", id: "iterators", level: 2},
          {value: "python", id: "python-6", level: 3},
          {value: "javascript", id: "javascript-24", level: 3},
          {value: "ruby", id: "ruby-38", level: 3},
          {value: "java", id: "java-39", level: 3},
          {value: "c#", id: "c-68", level: 3},
          {value: "c++", id: "c-69", level: 3},
          {value: "Generators", id: "generators", level: 2},
          {value: "python", id: "python-7", level: 3},
          {value: "javascript", id: "javascript-25", level: 3},
          {value: "ruby", id: "ruby-39", level: 3},
          {value: "java", id: "java-40", level: 3},
          {value: "c#", id: "c-70", level: 3},
          {value: "c++", id: "c-71", level: 3},
          {value: "Fetching Web Data", id: "fetching-web-data", level: 2},
          {value: "python", id: "python-8", level: 3},
          {value: "Javascript", id: "javascript-26", level: 3},
          {value: "ruby", id: "ruby-40", level: 3},
          {value: "java", id: "java-41", level: 3},
          {value: "c#", id: "c-72", level: 3},
          {value: "c++", id: "c-73", level: 3},
          {value: "Enum", id: "enum", level: 2},
          {value: "python 3", id: "python-3-9", level: 3},
          {value: "Javascript", id: "javascript-27", level: 3},
          {value: "Typescript", id: "typescript-11", level: 3},
          {value: "ruby", id: "ruby-41", level: 3},
          {value: "java", id: "java-42", level: 3},
          {value: "c#", id: "c-74", level: 3},
          {value: "c++", id: "c-75", level: 3},
          {value: "Language Specific", id: "language-specific", level: 2},
          {value: "python", id: "python-9", level: 3},
          {value: "javascript", id: "javascript-28", level: 3},
          {value: "typescript", id: "typescript-12", level: 3},
          {value: "ruby", id: "ruby-42", level: 3},
          {value: "java", id: "java-43", level: 3},
          {value: "c#", id: "c-76", level: 3},
          {value: "c++", id: "c-77", level: 3},
        ],
        u = {toc: m};
      function c(e) {
        let {components: n, ...t} = e;
        return (0, i.kt)(
          "wrapper",
          (0, a.Z)({}, u, t, {components: n, mdxType: "MDXLayout"}),
          (0, i.kt)(
            "h1",
            {id: "programming-language-syntax-comparison"},
            "PROGRAMMING LANGUAGE SYNTAX COMPARISON"
          ),
          (0, i.kt)(
            "blockquote",
            null,
            (0, i.kt)(
              "p",
              {parentName: "blockquote"},
              "A syntax summary, which also compares the differences between each programming language."
            ),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "List of languages",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Python, Javascript (Typescript), Ruby, Kotlin, Java, C#, C/C++, Groovy"
                  )
                )
              )
            ),
            (0, i.kt)(
              "h2",
              {parentName: "blockquote", id: "table-of-contents"},
              "Table of Contents"
            ),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#interpreted-language"},
                  "Interpreted Language"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#compiled-language"},
                  "Compiled Language"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {
                    parentName: "li",
                    href: "#both-interpreted-and-compiled-language",
                  },
                  "Both Interpreted And Compiled Language"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#hello-world"},
                  "Hello World"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#comments"},
                  "Comments"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#data-types"},
                  "Data types"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#variable-declaration-int"},
                  "Variable declaration int"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#variable-declaration-float"},
                  "Variable declaration float"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#variable-declaration-none"},
                  "Variable declaration None"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#strings"}, "Strings")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#boolean"}, "Boolean")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#arithmetic-operators"},
                  "Arithmetic Operators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#comparison-operators"},
                  "Comparison Operators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#logical-operators"},
                  "Logical Operators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#getting-input"},
                  "Getting Input"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#bitwise-operators"},
                  "Bitwise Operators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#increment"},
                  "Increment"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#arrays-and-lists"},
                  "Arrays and Lists"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#conditional-statement"},
                  "Conditional Statement"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#loops"}, "Loops")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#instantiation"},
                  "Instantiation"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#functions"},
                  "Functions"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#higher-order-functions"},
                  "Higher order functions"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#hash-tables"},
                  "Hash Tables"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#destructuring"},
                  "Destructuring"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#spread-operator"},
                  "Spread Operator"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#rest-parameters"},
                  "Rest parameters"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#class"}, "Class")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#importing-libraries"},
                  "Importing Libraries"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#type-conversions"},
                  "Type Conversions"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#find-data-type"},
                  "Find Data Type"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#string-concatenation"},
                  "String Concatenation"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#json"}, "JSON")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#program-entry-point"},
                  "Program Entry Point"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#swapping-values"},
                  "Swapping values"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#error-handling"},
                  "Error Handling"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#custom-error"},
                  "Custom Error"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#asynchronous"},
                  "Asynchronous"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#math"}, "Math")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#date-and-time"},
                  "Date and Time"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#access-modifier"},
                  "Access modifier"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#file-system"},
                  "File System"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#iterators"},
                  "Iterators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#generators"},
                  "Generators"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#fetching-web-data"},
                  "Fetching Web Data"
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("a", {parentName: "li", href: "#enum"}, "Enum")
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)(
                  "a",
                  {parentName: "li", href: "#language-specific"},
                  "Language Specific"
                )
              )
            ),
            (0, i.kt)(
              "h2",
              {parentName: "blockquote", id: "interpreted-language"},
              "Interpreted Language"
            ),
            (0, i.kt)(
              "h3",
              {
                parentName: "blockquote",
                id: "dynamically-typed-language-resolution-of-types-members-properties-methods-are-done-at-run-time",
              },
              "Dynamically-typed Language: resolution of types, members, properties, methods are done at run-time"
            ),
            (0, i.kt)(
              "h4",
              {
                parentName: "blockquote",
                id: "lose-compile-time-checking-have-to-write-more-unit-tests-to-ensure-app-behaves-properly-at-run-time",
              },
              "lose compile-time checking, have to write more unit tests to ensure app behaves properly at run-time"
            ),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)("li", {parentName: "ul"}, "Python"),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "Javascript",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Features",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "based on ECMAScript standard"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "not compiled, interpreted at runtime"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "no native function calls in browser"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "runtime differ between environments"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "restricted to browser sandbox"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "managed memory access"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "prototype-based inheritance"
                      )
                    )
                  )
                )
              ),
              (0, i.kt)("li", {parentName: "ul"}, "Ruby")
            ),
            (0, i.kt)(
              "h2",
              {parentName: "blockquote", id: "compiled-language"},
              "Compiled Language"
            ),
            (0, i.kt)(
              "h3",
              {
                parentName: "blockquote",
                id: "statically-typed-language-resolution-of-types-members-properties-methods-are-done-at-compile-time",
              },
              "Statically-typed Language: resolution of types, members, properties, methods are done at compile-time"
            ),
            (0, i.kt)(
              "h4",
              {
                parentName: "blockquote",
                id: "trying-to-access-a-method-that-is-not-defined-in-an-object-when-compiling-the-app-will-get-an-immediate-error-feedback",
              },
              "trying to access a method that is not defined in an object when compiling the app will get an immediate error feedback"
            ),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "Java: compiled to bytecode then interpreted by Java virtual machine into machine code",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Features",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "not compatible with other languages"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "calls to native functions go through Java Native Interface (JNI)"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "write once, run anywhere"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "runs in a protected Java Virtual Machine (JVM)"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "managed memory access"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "limited to single inheritance"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "class-based inheritance"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Types",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "Java Platform, Standard Edition (SE)",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Core language and Java Runtime Environment (JRE)"
                          )
                        )
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "Java Platform, Enterprise Edition (EE)",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Recommendation for industrial-strength web applications"
                          )
                        )
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "Java Platform, Micro Edition (ME)",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Microcontrollers, sensors, mobile devices, telephone sim cards"
                          ),
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "A subset of Java SE"
                          )
                        )
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "Java FX",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Desktop appication framework (windows, mac, linux)"
                          )
                        )
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Automatic memory management",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "memory for objects are allocated automatically"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "local variables & function calls are stored in stack"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "objects & member variables are stored in heap"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "objects are retained in memory until dereferenced"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "object is eligible for collection when all references expire",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "when do references expire",
                            (0, i.kt)(
                              "ul",
                              {parentName: "li"},
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "variables local to methods or code blocks expire with scope"
                              )
                            ),
                            (0, i.kt)(
                              "pre",
                              {parentName: "li"},
                              (0, i.kt)(
                                "code",
                                {parentName: "pre", className: "language-java"},
                                'void changeString() {\n  String localVar = "Won\'t be around for long!";\n  System.out.println("In function: " + localVar);\n}\n'
                              )
                            ),
                            (0, i.kt)(
                              "ul",
                              {parentName: "li"},
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "explicitly dereference variables with null keyword"
                              )
                            ),
                            (0, i.kt)(
                              "pre",
                              {parentName: "li"},
                              (0, i.kt)(
                                "code",
                                {parentName: "pre", className: "language-java"},
                                'void changeString() {\n  String localVar = "Won\'t be around for long!";\n  tempVar = null;\n}\n'
                              )
                            )
                          )
                        )
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "when Java Virtual Machine runs out of memory for a newly requested object",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "the system throws ",
                            (0, i.kt)(
                              "inlineCode",
                              {parentName: "li"},
                              "OutOfMemoryError"
                            )
                          ),
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Tips for managing memory",
                            (0, i.kt)(
                              "ul",
                              {parentName: "li"},
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "minimize the number of objects created"
                              ),
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "find out how much memory is available & is currently in used in the virtual machine",
                                (0, i.kt)(
                                  "ul",
                                  {parentName: "li"},
                                  (0, i.kt)(
                                    "li",
                                    {parentName: "ul"},
                                    (0, i.kt)(
                                      "inlineCode",
                                      {parentName: "li"},
                                      "Runtime.maxMemory()"
                                    ),
                                    " & ",
                                    (0, i.kt)(
                                      "inlineCode",
                                      {parentName: "li"},
                                      "Runtime.totalMemory()"
                                    )
                                  )
                                )
                              ),
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "setting available memory",
                                (0, i.kt)(
                                  "ul",
                                  {parentName: "li"},
                                  (0, i.kt)(
                                    "li",
                                    {parentName: "ul"},
                                    "use command line options to manage amount of available heap memory",
                                    (0, i.kt)(
                                      "ul",
                                      {parentName: "li"},
                                      (0, i.kt)(
                                        "li",
                                        {parentName: "ul"},
                                        "set inital heap size ",
                                        (0, i.kt)(
                                          "inlineCode",
                                          {parentName: "li"},
                                          "java -Xms256s HelloWord"
                                        )
                                      ),
                                      (0, i.kt)(
                                        "li",
                                        {parentName: "ul"},
                                        "set max heap size ",
                                        (0, i.kt)(
                                          "inlineCode",
                                          {parentName: "li"},
                                          "java -Xmx256m HelloWord"
                                        )
                                      ),
                                      (0, i.kt)(
                                        "li",
                                        {parentName: "ul"},
                                        "set heap size for new objects ",
                                        (0, i.kt)(
                                          "inlineCode",
                                          {parentName: "li"},
                                          "java -Xmn256n HelloWord"
                                        )
                                      )
                                    )
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Java Garbage Collector",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "runs in its own thread"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "allocates & deallocates memory"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "can destroy dereferenced objects, but not required"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "garbage collection is managed by the Virtual Machine"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "cannot force garbage collection as it is an automatic process",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "Can run System methods to call garbage collection",
                            (0, i.kt)(
                              "ul",
                              {parentName: "li"},
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "Methods ",
                                (0, i.kt)(
                                  "inlineCode",
                                  {parentName: "li"},
                                  "System.gc()"
                                ),
                                " & ",
                                (0, i.kt)(
                                  "inlineCode",
                                  {parentName: "li"},
                                  "Runtime.gc()"
                                ),
                                " can request garbage collection",
                                (0, i.kt)(
                                  "ul",
                                  {parentName: "li"},
                                  (0, i.kt)(
                                    "li",
                                    {parentName: "ul"},
                                    "but there is no guarantee it will happen"
                                  )
                                )
                              )
                            )
                          )
                        )
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Identifiers and Keywords",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "Keywords can't be used as class or other identifiers"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "class, method, field, and other names are identifiers"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "identifiers must start with alpha character or underscore"
                      )
                    )
                  ),
                  (0, i.kt)("li", {parentName: "ul"}, "Identifier conventions"),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "classes are always Pascal case ",
                    (0, i.kt)(
                      "inlineCode",
                      {parentName: "li"},
                      "class MyClass {}"
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "methods and variables are Camel case ",
                    (0, i.kt)(
                      "inlineCode",
                      {parentName: "li"},
                      "void doSomething(String withThis) {}"
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "constants are all uppercase ",
                    (0, i.kt)(
                      "inlineCode",
                      {parentName: "li"},
                      'public static final String FIRSTNAME="Myname";'
                    ),
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        (0, i.kt)("inlineCode", {parentName: "li"}, "final"),
                        " means once it has been set, it can't be changed"
                      )
                    )
                  )
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "C#: compiled to an Intermediate Language (IL), which is then translated by the Common Language Runtime (CLR) into machine code",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "from .NET 4, dynamic capability was added to improve interoperability with COM & Dynamic languages"
                  )
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "C++: compiled into native machine language",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "Features",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "compatible with C language"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "allows calls to native system libraries"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "requires porting to other platforms"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "exposes low-level system functions"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "explicit memory management"
                      ),
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "allows multiple inheritance"
                      )
                    )
                  )
                )
              )
            ),
            (0, i.kt)(
              "h2",
              {
                parentName: "blockquote",
                id: "both-interpreted-and-compiled-language",
              },
              "Both Interpreted And Compiled Language"
            ),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "Groovy",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "it is a Java-syntax-compatible object-oriented programming language for the Java platform"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "is both a static and dynamic language with features similar to those of Python"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "can be used as both a programming language and a scripting language for the Java Platform, is compiled to Java virtual machine (JVM) bytecode",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "interoperates seamlessly with other Java code and libraries"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "allows optionally-typed dynamic capabilities",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "do not need to spell out the type of field"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "allows advance programming",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "metaprogramming, functional programming, closures"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "supports authoring of domain-sepcific languages",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "jenkins file: to create a built pipeline with jenkins"
                      ),
                      (0, i.kt)("li", {parentName: "ul"}, "gradle build script")
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "requires installation of Java Development Kit (JDK) to work"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "allows duck typing: provides the option to use the ",
                    (0, i.kt)("inlineCode", {parentName: "li"}, "def"),
                    " keyword to determine the type at runtime"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "can also have a variable assign a concrete type",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "can tell groovy compiler to enforce static typing if needed"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "auto generates getter and setter methods at runtime for class members"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "contains Abstract Syntax Tree (AST) transformations: provides annotations for generating methods at runtime ",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "such as defining contructors, equals, hashCode, toString methods"
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "automatically imports commonly-used packages",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "like ",
                        (0, i.kt)(
                          "inlineCode",
                          {parentName: "li"},
                          "java.util.*"
                        ),
                        " and ",
                        (0, i.kt)("inlineCode", {parentName: "li"}, "java.io.*")
                      )
                    )
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "makes the default modifier as public, leading to less verbose code"
                  ),
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "semicolons are optional, only required if want to define more than 1 statement on a single line"
                  )
                )
              )
            ),
            (0, i.kt)(
              "h2",
              {parentName: "blockquote", id: "hello-world"},
              "Hello World"
            ),
            (0, i.kt)(
              "h3",
              {parentName: "blockquote", id: "python-2"},
              "python 2"
            ),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-python"},
                'print "Hello World"\n'
              )
            ),
            (0, i.kt)(
              "h3",
              {parentName: "blockquote", id: "python-3"},
              "python 3"
            ),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-python"},
                'print("Hello World")  # "Hello World\\n"\nprint("Hello", "World", sep="/")  # "Hello/World"\nprint("Hello World", end="")  # "Hello World"\n'
              )
            ),
            (0, i.kt)(
              "h3",
              {parentName: "blockquote", id: "javascript"},
              "javascript"
            ),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-javascript"},
                'console.log("Hello World");  // "Hello World"\nconsole.log("Hello", "World");  // "Hello World"\n'
              )
            ),
            (0, i.kt)("h3", {parentName: "blockquote", id: "ruby"}, "ruby"),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-ruby"},
                'print "Hello World"  # takes whatever you give it and prints it to the screen\nputs "Hello World"  # adds a new (blank) line after the thing you want it to print\np "Hello World"  # same as puts\n'
              )
            ),
            (0, i.kt)("h3", {parentName: "blockquote", id: "kotlin"}, "kotlin"),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-kotlin"},
                '// fun for function declaration\nfun main() {  // main method, a must to have\n    println("Hello, world")  // adds new line after printing\n}\n'
              )
            ),
            (0, i.kt)("h3", {parentName: "blockquote", id: "java"}, "java"),
            (0, i.kt)(
              "ul",
              {parentName: "blockquote"},
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "java classes are typically organized into packages",
                (0, i.kt)(
                  "ul",
                  {parentName: "li"},
                  (0, i.kt)(
                    "li",
                    {parentName: "ul"},
                    "package is a global unique string that usually starts with your domain name in reverse domain order",
                    (0, i.kt)(
                      "ul",
                      {parentName: "li"},
                      (0, i.kt)(
                        "li",
                        {parentName: "ul"},
                        "ensures globally unique identifiers (e.g.: Main)",
                        (0, i.kt)(
                          "ul",
                          {parentName: "li"},
                          (0, i.kt)(
                            "li",
                            {parentName: "ul"},
                            "if there are more than 1 class named Main in an app",
                            (0, i.kt)(
                              "ul",
                              {parentName: "li"},
                              (0, i.kt)(
                                "li",
                                {parentName: "ul"},
                                "can be distinguished by using the package"
                              )
                            )
                          )
                        )
                      )
                    )
                  )
                )
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                "each source code file will contain 1 public class"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "public"),
                " visible to all classes"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "protected"),
                " visible to class they belong and any subclasses"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "private"),
                " (most restricted): visible only to class they belong"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "static"),
                " can be accessed without creating a class instance"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "final"),
                " constant value, value cannot be changed"
              ),
              (0, i.kt)(
                "li",
                {parentName: "ul"},
                (0, i.kt)("inlineCode", {parentName: "li"}, "void"),
                " means that the method doesn't return any value"
              )
            ),
            (0, i.kt)(
              "pre",
              {parentName: "blockquote"},
              (0, i.kt)(
                "code",
                {parentName: "pre", className: "language-java"},
                "package com.example;  // package declaration\n"
              )
            )
          ),
          (0, i.kt)(
            "p",
            null,
            '// class declaration\npublic class HelloWorld {\n// main method: always have the 3 keywords (public, static, void)\n// must also receive an array of strings as an argument\npublic static void main(String[] args) {\n// executable code\nSystem.out.println("Hello World");  // adds new line after printing\nSystem.out.print("Hello World");  // no new line is added after\n}\n}'
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre"},
              '### c#\n```c#\npublic class HelloWorld {\n  public static void Main() {\n    System.Console.WriteLine("Hello World");  // adds new line after printing\n    System.Console.Write("Hello World");  // no new line is added after printing\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              '#include <iostream>\n\nint main() \n{\n    std::cout << "Hello, World!";\n    return 0;\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "groovy"}, "groovy"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "using dynamic type method")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-groovy"},
              'println "Hello World"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "using static type method")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-groovy"},
              'class HelloWorld {\n  static void main(String[] args) {\n    println("Hello World");\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "assembly"}, "assembly"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-assembly"},
              '; x86 32 bit Mac OSX\n; to run file, compile and run with the following command\n; nasm -f macho hello_world32.asm && ld -macosx_version_min 10.7.0 -o hello_world32 hello_world32.o && ./hello_world32\n\nglobal start\n\nsection .text\nstart:\n    push    dword msg.len\n    push    dword msg\n    push    dword 1\n    mov     eax, 4\n    sub     esp, 4\n    int     0x80\n    add     esp, 16\n\n    push    dword 0\n    mov     eax, 1\n    sub     esp, 12\n    int     0x80\n\nsection .data\n\nmsg:    db      "Hello, world!", 10\n.len:   equ     $ - msg\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-assembly"},
              '; x86_64 64 bit Mac OSX\n; to run file, compile and run with the following command\n; nasm -f macho64 hello_world64.asm && ld -macosx_version_min 10.7.0 -lSystem -o hello_world64 hello_world64.o && ./hello_world64\n\nglobal start\n\nsection .text\n\nstart:\n    mov     rax, 0x2000004 ; write\n    mov     rdi, 1 ; stdout\n    mov     rsi, msg\n    mov     rdx, msg.len\n    syscall\n\n    mov     rax, 0x2000001 ; exit\n    mov     rdi, 0\n    syscall\n\nsection .data\n\nmsg:    db      "Hello, world!", 10\n.len:   equ     $ - msg\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "comments"}, "Comments"),
          (0, i.kt)("h3", {id: "python-2--3"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Single line comment\n    \n"""\nmulti-line comments\n"""\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-1"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Single line comment\n\n/*\nmulti-line comments\n*/\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-1"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "# Single line comment\n    \n=begin\nmulti-line comments\n=end\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-1"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// Single line comment\n\n/*\nmulti-line comments\n*/\n\n/**\n * javadoc <b>comments</b> for classes, javadocs can be used to auto generate documentation documents for code commented with javadocs\n */\n \n /**\n * javadoc <b>comments</b> for methods with parameters - example main method\n * @param args - an array of string values\n */\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-1"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// Single line comment\n\n/*\nmulti-line comments\n*/\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-2"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// Single line comment\n\n/*\nmulti-line comments\n*/\n"
            )
          ),
          (0, i.kt)("h3", {id: "assembly-1"}, "assembly"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-assembly"},
              "; Single line comment\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "data-types"}, "Data types"),
          (0, i.kt)("h3", {id: "python"}, "python"),
          (0, i.kt)("h4", {id: "8-main-data-types"}, "8 main data types"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Text type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "str"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = "Hello World"\t'
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = str("Hello World")'
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Numeric types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "int"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = 20\t"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = int(20)")
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "float"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = 20.5"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = float(20.5)")
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "complex"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = 1j"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = complex(1j)")
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Sequence types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "list"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = ["apple", "banana", "cherry"]'
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = list(("apple", "banana", "cherry"))'
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "tuple"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = ("apple", "banana", "cherry")'
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = tuple(("apple", "banana", "cherry"))'
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "range"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = range(6)"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = range(6)")
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Mapping type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "dict"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = {"name" : "John", "age" : 36}'
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = dict(name="John", age=36)'
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Set types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "set"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = {"apple", "banana", "cherry"}'
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    'x = set(("apple", "banana", "cherry"))'
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "frozenset",
                  (0, i.kt)("inlineCode", {parentName: "li"}, ", "),
                  'x = frozenset({"apple", "banana", "cherry"})',
                  (0, i.kt)("inlineCode", {parentName: "li"}, ", "),
                  'x = frozenset(("apple", "banana", "cherry"))```'
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Boolean type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "bool"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = True"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = bool(5)")
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Binary types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "bytes"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, 'x = b"Hello"'),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = bytes(5)")
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "bytearray"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "x = bytearray(5)"
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "x = bytearray(5)"
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "memoryview"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "x = memoryview(bytes(5))"
                  ),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "x = memoryview(bytes(5))"
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "None type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "None"),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "x = None")
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "javascript-2"}, "javascript"),
          (0, i.kt)(
            "h4",
            {id: "1-primitive-structural-root"},
            "1 primitive structural root"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "null",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "unknown values \u2013 a standalone type that has a single value null"
                )
              )
            )
          ),
          (0, i.kt)("h4", {id: "2-structual-types"}, "2 Structual types"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "object",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "for more complex data structures"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "new Object, new Array, new Map, new Set, new WeakMap, new Date, new ..."
                )
              )
            )
          ),
          (0, i.kt)(
            "h4",
            {id: "6-basic-primitive-data-types"},
            "6 basic primitive data types"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "number"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "for numbers of any kind: integer or floating-point, integers are limited by \xb1(2^53-1) === \xb19007199254740991"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "contain",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "regular numbers ",
                      (0, i.kt)(
                        "pre",
                        {parentName: "li"},
                        (0, i.kt)(
                          "code",
                          {parentName: "pre", className: "language-javascript"},
                          "let n = 123;\n"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "floats ",
                      (0, i.kt)(
                        "pre",
                        {parentName: "li"},
                        (0, i.kt)(
                          "code",
                          {parentName: "pre", className: "language-javascript"},
                          "let n = 1.23;\n"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "special numeric values",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "Infinity",
                          (0, i.kt)(
                            "pre",
                            {parentName: "li"},
                            (0, i.kt)(
                              "code",
                              {
                                parentName: "pre",
                                className: "language-javascript",
                              },
                              "let n = 1 / 0;\nlet n2 = Infinity;\n"
                            )
                          )
                        ),
                        (0, i.kt)("li", {parentName: "ul"}, "-Infinity"),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "NaN",
                          (0, i.kt)(
                            "pre",
                            {parentName: "li"},
                            (0, i.kt)(
                              "code",
                              {
                                parentName: "pre",
                                className: "language-javascript",
                              },
                              'let n = "not a number" / 2;  // NaN\n'
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "bigint"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "no maximum limit to a BigInt"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  "let bigInt = 1234567890123456789012345678901234567890n;  // ends with n\n"
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "string"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "may have zero or more characters, there\u2019s no separate single-character type"
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "boolean"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)("li", {parentName: "ul"}, "true / false.")
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "undefined"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "unassigned values \u2013 a standalone type that has a single value undefined"
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "symbol"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)("li", {parentName: "ul"}, "for unique identifiers")
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  '// id is a new symbol\nlet id = Symbol();\n\n// can give symbol a description (also called a symbol name), mostly useful for debugging purposes\nlet _id = Symbol("id2");\n\n// symbol in an object literal\nlet obj = {\n  [_id]: 123 // not "id": 123\n};\n\n// guaranteed to be unique\nlet id1 = Symbol("id");\nlet id2 = Symbol("id");\nconsole.log(id1 == id2);  // false\n\n// convert symbol to string\nid1.toString();  // "Symbol(id)"\n\n// get symbol description\nid1.description;  // "id"\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Symbols allow us to create \u201chidden\u201d properties of an object, that no other part of code can accidentally access or overwrite"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  'let user = { // belongs to another code\n  name: "John"\n};\n\nlet id = Symbol("id");\nuser[id] = 1;\nconsole.log(user[id]);  // 1\nconsole.log(user);  // { name: \'John\', [Symbol(id)]: 1 }\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "benefit of using symbol over string",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "objects belongs to another code, and that code also works with them, we shouldn\u2019t just add any fields to it"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "symbol cannot be accessed accidentally, the third-party code probably won\u2019t even see it"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Symbols are skipped by for...in loop"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  'let id = Symbol("id");\nlet user = {\n  name: "John",\n  age: 30,\n  [id]: 123\n};\n\nfor (let key in user) console.log(key);  // name age undefined\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Symbol can be cloned with Object.assign"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  'let id = Symbol("id");\nlet user = {\n  [id]: 123\n};\n\nlet clone = Object.assign({}, user);\nconsole.log(clone);  // { [Symbol(id)]: 123 }\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "global symbols",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "use if want same-named symbols to be same entities"
                    )
                  )
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-javascript"},
                  '// get symbol by name\nlet id1 = Symbol.for("id");\nlet id2 = Symbol.for("id");\n\nconsole.log(id1 === id2);  // true\n\n// get name by symbol, can only use for global symbol\nconsole.log(Symbol.keyFor(id1));  // "id"\n'
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "java-8"}, "java 8"),
          (0, i.kt)("h4", {id: "2-major-data-types"}, "2 major data types"),
          (0, i.kt)(
            "ol",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ol"},
              (0, i.kt)("p", {parentName: "li"}, "Primitive data types"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "stored in fastest available memory"
                ),
                (0, i.kt)("li", {parentName: "ul"}, "names are all camel case"),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Java class library includes helper classes for each primitive",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "helper classes support conversion and formatting tools"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      (0, i.kt)(
                        "inlineCode",
                        {parentName: "li"},
                        "import java.lang.Byte;"
                      ),
                      "  import not required from java.lang libraries"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "all primitive numeric variables default to 0"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-java"},
                  "public class Main {\n  private static int myInt;  // must be declared as static of a class to have default value\n\n  public static void main(String args[]) {\n    System.out.println(myInt);  // 0\n  }\n}\n"
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "data types",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "numbers",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "byte",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "8 bits"),
                            (0, i.kt)("li", {parentName: "ul"}, "-128 to 127"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, "0")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Byte"
                              )
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "short",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "16 bits"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "-32,768 to 32,767"
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, "0")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Short"
                              )
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "int",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "32 bits"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "-2,147,483,648 to 2,147,483,647"
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, "0")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Integer"
                              )
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "long",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "64 bits"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "-9.22337E+18 to 9.22337E+18"
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, "0L")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Long"
                              )
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "float",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "32 bits"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "0.0f"
                              ),
                              " or ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "0.0F"
                              ),
                              " or ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                ".0f"
                              ),
                              " or ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, ".0F")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Float"
                              )
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "double",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)("li", {parentName: "ul"}, "64 bits"),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "default value ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "0.0d"
                              ),
                              " or ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "0.0D"
                              ),
                              " or ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                ".0d"
                              ),
                              " or ",
                              (0, i.kt)("inlineCode", {parentName: "li"}, ".0D")
                            ),
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "helper class ",
                              (0, i.kt)(
                                "inlineCode",
                                {parentName: "li"},
                                "Double"
                              )
                            )
                          ),
                          (0, i.kt)(
                            "pre",
                            {parentName: "li"},
                            (0, i.kt)(
                              "code",
                              {parentName: "pre", className: "language-java"},
                              "double doubleValue = 156.5d;\nDouble doubleObj = new Double(doubleValue);  // declare instance of the double class\nint intValue = doubleObj.intValue();  // 156, use helper object to convert to desired numeric data type\n"
                            )
                          )
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "characters",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "'\\u0000' (or 0) to '\\uffff' (or 65,535 inclusive)"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "default value ",
                          (0, i.kt)(
                            "inlineCode",
                            {parentName: "li"},
                            "'\\u0000'"
                          )
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "booleans",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "default value ",
                          (0, i.kt)("inlineCode", {parentName: "li"}, "false")
                        )
                      )
                    )
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ol"},
              (0, i.kt)("p", {parentName: "li"}, "Objects"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "an object is an instance of a class"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "nonprimitive variables are references to objects"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "objects can have multiple references"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Object data types",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "String",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)("li", {parentName: "ul"}, "a complex object"),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "is an instance of the string class"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "is an array of characters"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "string objects are immutable"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "reasigning the string value creates a new object",
                          (0, i.kt)(
                            "ul",
                            {parentName: "li"},
                            (0, i.kt)(
                              "li",
                              {parentName: "ul"},
                              "the old object can be cleared from memory thrown garbage collection process"
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "helper class is ",
                          (0, i.kt)(
                            "inlineCode",
                            {parentName: "li"},
                            "java.lang.String"
                          ),
                          ", thus import not required"
                        )
                      ),
                      (0, i.kt)(
                        "pre",
                        {parentName: "li"},
                        (0, i.kt)(
                          "code",
                          {parentName: "pre", className: "language-java"},
                          'String string1 = new String("Hello");\n'
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)(
            "h2",
            {id: "variable-declaration-int"},
            "Variable declaration int"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "integer ...-2, -1, 0, 1, 2...")
          ),
          (0, i.kt)("h3", {id: "python-2-1"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# int: -2147483648 ~ 2147483647\ninteger_name = 123\n# long: -9223372036854775808L ~ 9223372036854775807L\nlong_name = 123L  # int beyond int size will automatically be converted to long\n"
            )
          ),
          (0, i.kt)("h3", {id: "python-3-1"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# python 3: int and long are combined into int\ninteger_name = 123\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// method 1\nvar integer_name;\ninteger_name = 123;  // accessible within the function\n\n// method 2\nvar integer_name = 123;\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// method 1\nlet integer_name;\ninteger_name = 123;  // accessible only within the block {}\n\n// method 2\nlet integer_name = 123;\n\n// method 3\nconst integer_name = 123;  // variable value cannot be reassigned\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              "let integer_name: number = 123;  // method 1\nlet integer_name2 = 123;  // method 2, not required to declare type if assigning to value\nlet integer_name3: number;  // must declare the value type\ninteger_name3 = 123;\n\nlet decimal: number = 6;\nlet hex: number = 0xf00d;\nlet binary: number = 0b1010;\nlet octal: number = 0o744;\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-2"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "integer_name = 123\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-2"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// public/private/protected static final byte/short/int/long integerName = 123;\n/* \npublic: visible to all classes\nprotected: visible to class they belong and any subclasses\nprivate (most restricted): visible only to class they belong\nstatic: can be accessed without creating a class instance\nfinal: constant value, value cannot be changed\n*/\n\n// byte: -128 ~ 127, 8 bits\nbyte byteName = 123;\n\n// short: -32768 ~ 32767, 16 bits\nshort shortName = 123;\n\n// int: -2147483648 ~ 2147483647, -2_147_483_648 ~ 2_147_483_647, 32 bits\nint integerName; integerName = 123;\nint integerName2 = 123;  // default is visible within the same package\n\n// long: -9223372036854775808L ~ 9223372036854775807L, can use _ same as int, 64 bits\nlong longName1 = 123l;  // 123\nlong longName2 = 123L;  // 123\nlong longName3 = 10_000;  // 10000, introduced in java 7, just makes it easier to read\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-3"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// var can be used to handle declarations when the data type is unknown\n// once a variable is declared with var, the variable cannot be reassigned to a different data type\nvar variableName = 123;\nvariableName = \"123\";  // error CS0029: Cannot implicitly convert type `string' to `int'\n\n// byte: -128 ~ 127, 8 bits\nbyte byteName = 123;  // type Byte\nSystem.Byte byteName2 = 123;\n\n// short: -32768 ~ 32767, 16 bits\nshort shortName = 123;  // type Int16\nSystem.Int16 shortName2 = 123;\n\n// int: -2,147,483,648 ~ 2,147,483,647\nint integerName1 = 123;  // type Int32\nint integerName2 = int.MaxValue;  // 2147483647\nSystem.Int32 integerName3 = 123;\n\n// Add const before variable declaration to make it a constant\nconst int integerName3 = 123;\n\n// long: -9,223,372,036,854,775,808 ~ 9,223,372,036,854,775,807\nlong longName1 = 123;  // type Int64\nlong longName2 = long.MaxValue;  // 9223372036854775807\nSystem.Int64 longName3 = 123;\n\n// decimal: max value 79,228,162,514,264,337,593,543,950,335\ndecimal decimalName1 = 123;  // type Decimal\ndecimal decimalName2 = 123m;\ndecimal decimalName3 = decimal.MaxValue;  // 79228162514264337593543950335\nSystem.Decimal decimalName4 = 123;\n\n// use System.Numerics.BigInteger for larger values (need add references to System.Numerics.dll)\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-4"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              '// const unsigned char/short/int/long/long long integer_name = 123;\n/* \nconst: constant value, value cannot be changed\ninteger are signed by default: can assign both positive & negative values\nunsigned integer (use when dealing with bit values): 0 ~ ...\n  e.g. char: -128 ~ 127\n  e.g. unsigned char: 0 ~ 255  // 128 + 127 = 255\n*/\n\n// char: 1 byte, -128 ~ 127, use C code to print "#include\uff1cstdio.h\uff1e printf("%d", char_name);"\n// 1 char has 8 bits\nchar char_name;\nchar_name = 123;\n\n// similar to the rest of int variable declaration\n\n// short/short int: 16 bits, 2 bytes, -32768 ~ 32767\nshort short_name;\nshort_name = 123;\n\nshort int short_name; short_name = 123;\n\n// similar to the rest of int variable declaration\n\n// int: 16 bits, 4 bytes, -2147483648 ~ 2147483647\nint integer_name;\ninteger_name = 123;  // uninitialized\n\nint integer_name = 123;  // C-like initialization\n\nint integer_name (123);  // Constructor initialization\n\nint age {123};  // C++11 list initialization syntax\n\n// long/long int: 32 bits, 4 bytes, -2147483648 ~ 2147483647 bytes\nlong long_name;\nlong_name = 123;\n\nlong int long_name;\nlong_name = 123;\n\n// similar to the rest of int variable declaration\n\n// long long/long long int: 64 bits, 8 bytes, -9223372036854775808 ~ 9223372036854775807\nlong long long_name;\nlong_name = 123;\n\nlong long int long_name; long_name = 123;\n\n// similar to the rest of int variable declaration\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)(
            "h2",
            {id: "variable-declaration-float"},
            "Variable declaration float"
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "float, double")
          ),
          (0, i.kt)("h3", {id: "python-2--3-1"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "float_name = 1.123\nfloat_name = 0.1123e1  # equals to 1.123\nfloat_name = 0.1123E1  # equals to 1.123\nfloat_name = 1123e-3  # equals to 1.123\nfloat_name = 1123E-3  # equals to 1.123\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "float have inaccurate values")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'print(.1 + .2 + .3)  # 0.6000000000000001\n# use the decimal library to make it accurate\nfrom decimal import *\n\n# do not do this\nDecimal(.1) + Decimal(.2) + Decimal(.3)  # Decimal(\'0.6000000000000000055511151231\')\n\n# do this: convert float to a string first\nx = Decimal(".1") + Decimal(".2") + Decimal(".3")  # Decimal(\'0.6\')\nf"{x}"  # "0.6\nprint(type(x))  # <class \'decimal.Decimal\'>\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-1"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "var float_name = 1.123;\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-1"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "let float_name = 1.123;\nconst float_name = 1.123;\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-1"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              "let float_name: number = 1.123;\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-3"}, "ruby"),
          (0, i.kt)("h3", {id: "java-3"}, "java:"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// float: 32 bits, 4 bytes\nfloat float_name = 1.123f;  // 1.123, have 7 decimal digits\nfloat float_name = (float) 1.123;\n\n// double: 64 bits, 8 bytes\ndouble double_name = 1.123d;  // 1.123, have 16 decimal digits\ndouble double_name = 1.123;\n\n// using BigDecimal math class\nimport java.math.BigDecimal;\n\npublic class Main {\n\n  public static void main(String[] args) {\n    double value = .012;\n    double pSum = value + value + value;\n    System.out.println(pSum);  // 0.036000000000000004\n    \n    String strValue = Double.toString(value);\n    System.out.println(strValue);  // 0.012\n\n    BigDecimal bigValue1 = new BigDecimal(value);\n    BigDecimal bSum1 = bigValue1.add(bigValue1).add(bigValue1);\n    System.out.println(bSum1.toString());  // 0.0360000000000000007494005416219806647859513759613037109375\n      \n    BigDecimal bigValue2 = new BigDecimal(strValue);\n    BigDecimal bSum2 = bigValue2.add(bigValue2).add(bigValue2);\n    System.out.println(bSum2.toString());  // 0.036\n  }\n}\n\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-5"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// float: 32 bit max value with 7 decimals of precision 3.402823E+38\nfloat floatName1 = 1.123f;  // type Single\nfloat floatName2 = float.MaxValue;  // 3.402823E+38\nSystem.Single floatName3 = 1.123f;\n\n// double: 64 bit max value with 15 decimals of precision 1.79769313486232E+308\ndouble doubleName1 = 1.123d;  // type Double\ndouble doubleName2 = 1.123;  // all floats are double by default\ndouble doubleName3 = double.MaxValue;  // 1.79769313486232E+308\nSystem.Double doubleName4 = 1.123;\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-6"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// float: 4 bytes\nfloat float_name;\nfloat_name = 1.123;  // have 7 decimal digits\n\n// similar to the rest of int variable declaration\n\n// double: 8 bytes\ndouble double_name;\ndouble_name = 1.123;  // have 15 decimal digits\n\n// similar to the rest of int variable declaration\n\n// long double: 12 bytes\nlong double double_name;\ndouble_name = 1.123;  // have 19 decimal digits\n\n// similar to the rest of int variable declaration\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)(
            "h2",
            {id: "variable-declaration-none"},
            "Variable declaration None"
          ),
          (0, i.kt)("h3", {id: "python-2--3-2"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "variable_name = None\n\n# nan in python\nimport math\nmath.inf - math.inf  # nan\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-3"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// undefined is reserved for variables whose values have not yet been set.\nlet variable_name; // undefined\n\n//null is reserved for variables whose values are explicitly nothing \u2014 instead of just \u201cnot yet defined.\u201d\nlet variable_name2 = null;\n\n// NaN is a special numeric value meaning \u201cNot a Number\u201d\nlet variable_name3 = NaN;\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-2"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              "let variable_name: void = undefined;  // method 1\nlet variable_name2 = undefined;  // method 2\nlet variable_name: undefined;  // method 3\n\nlet variable_name2: void = null;\nlet variable_name3: number = NaN;\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-4"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "variable_name = nil  # nil is returned when no values are assigned, but nothing is displayed on screen\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-4"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "String stringName = null;\n\n// NaN is produced if a floating point operation\nfloat floatName = Float.NaN;  // NaN\ndouble doubleName = Double.NaN;  // NaN\n\nDouble x = new Double(-2.0/0.0);  // -Infinity\nDouble y = new Double(0.0/0.0);  // NaN\nx.isNaN();  // false\ny.isNaN();  // true\n\nSystem.out.println(2.0 / 0);  // Infinity\n\n// set infinity value\ndouble inf = Double.POSITIVE_INFINITY;  // Infinity\ndouble inf = Double.NEGATIVE_INFINITY;  // -Infinty\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-7"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "string stringName = null;\nstring stringName2 = String.Empty;\n\n// method 1: use the nullable method\nNullable<int> integerName1 = null;\n\n// method 2: value type requires ? during declaration\nint? integerName2 = null;\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-8"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "strings"}, "Strings"),
          (0, i.kt)("h3", {id: "python-2--3-3"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'string_name = "string"\nstring_name = \'string\'\n# back slash not required, but will produce a new line if not given\nstring_name = """multi-line \\\nstring\\\n"""\n\n# raw strings (ignore escape characters)\nstring_name = r"\\n raw string"  # "\\n raw string"\n\nlen(string_name)  # 6\n\n# Character unicode point\n# only accepts 1 character\nord("b")  # 98\n\n# reverse string\nstring_name = string_name[::-1]  # "gnirts"\n\nstring_name = "Gnirts"\nstring_name = string_name.swapcase()  # "gNIRTS"\nstring_name = string_name.upper()  # "GNIRTS"\nstring_name = string_name.lower()  # "gnirts"\n\n# casefold: it is more aggressive than lower(), it removes all case distinctions even in unicode\nstring_name_casefold = "Hello World \xdf"\nstring_name_casefold.casefold()  # "hello world ss"\n\n# capitalize string\nstring_name_caps = "test me"\nstring_name_caps.title()  # "Test Me"\nstring_name_caps.capitalize()  # "Test me"\n\n# Replace string in string, string_name.replace(old, new, max)\nstring_name = string_name.replace("g", "xxx")  # "xxxnirts"\nstring_name = string_name.replace("x", "g", 1)  # "gxxnirts"\n\n# Find character or string in string and return the index of the 1st character, return -1 if not found\nstring_name.find("x")  # 1\nstring_name.find("v")  # -1\n\n# string slicing\n# extract characters from a string, from start position to but not including end position\nnew_string_name = string_name[1:4]  # "xxn"\n\n# Split strings, string_name.split(separator, max)\nstring_name = string_name.split()  # ["gxxnirts"]  only works for string without spaces\nstring_name = "test string"\nstring_name1 = string_name.split()  # ["test", "string"]\nstring_name2 = string_name.split("s")  # ["te", "t ", "tring"]\nstring_name3 = string_name.split("s", 1)  # ["te", "t string"]\n\n# Split string into an array of letters\nstring_name4 = list(string_name)  # [\'t\', \'e\', \'s\', \'t\', \' \', \'s\', \'t\', \'r\', \'i\', \'n\', \'g\']\n\n# Remove empty spaces\nstring_name = "    string    "\n# remove all left spaces\nstring_name1 = string_name.lstrip()  # "string    "\n# remove all right spaces\nstring_name2 = string_name.rstrip()  # "    string"\n# remove all spaces\nstring_name3 = string_name.strip()  # "string"\n\n# Check if string has alphabet and integer characters\nstring_name3.isalnum()  # False\nstring_name = "123"\nstring_name.isalnum()  # True\nstring_name = "s 123"\nstring_name.isalnum()  # False\nstring_name = "s123"\nstring_name.isalnum()  # True\n\n# Check if string has all alphabet characters\nstring_name3.isalpha()  # True\nstring_name = "A e"\nstring_name.isalpha()  # False\nstring_name = "a2"\nstring_name.isalpha()  # False\n\n# Check if string has all digit characters\nstring_name = "123"\nstring_name.isdigit()  # True\nstring_name = "12 3"\nstring_name.isdigit()  # False\nstring_name = "12d"\nstring_name.isdigit()  # False\n\n# Join an array of string elements\narr = ["a", "b"]\n"_".join(arr)  # "a_b"\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-2"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'var stringName = "string";\nvar stringName = \'string\';\n// back slash required\nvar stringName = "multi-line \\\nstring";\n\nstringName.length;  // 6\n\n// Character unicode point\nstring.charCodeAt(stringIndex)\n"abc".charCodeAt(1)  // 98\n\n// reverse string\nstringName.split("").reverse().join("");  // "gnirts"\n\nstringName = stringName.toUpperCase();  // "GNIRTS"\nstringName = stringName.toLowerCase();  // "gnirts"\n\n// capitalize string\nstringName = stringName.charAt(0).toUpperCase() + stringName.slice(1);  // "Gnirts"\n\n// replace 1 string occurance with string, stringName.replace(old, new)\nstringName = stringName.replace("G", "xxx");  // "xxxnirts"\n\nlet stringName0 = "test_test_123";\n// replace all string occurances with string, stringName.replaceAll(old, new)\nstringName0 = stringName0.replaceAll("_", " ");  // "test test 123"\n\n// extract characters from a string, from start position to but not including end position\nnewStringName = stringName.substring(1, 4); // "xxn"\n    \n// Split string into arrays\nstringName = "test string"\nstringName1 = stringName.split()  // ["test string"]\nstringName2 = stringName.split("")  // [\'t\', \'e\', \'s\', \'t\', \' \', \'s\', \'t\', \'r\', \'i\', \'n\', \'g\']\nstringName3 = stringName.split("s")  // ["te", "t ", "tring"]\n'
            )
          ),
          (0, i.kt)(
            "h3",
            {id: "javascript-es6---almost-all-of-es5-are-included-in-es6"},
            "javascript ES6  // Almost all of ES5 are included in ES6"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// back slash not required, but will produce a new line if not given\nvar stringName = `multi-line \\\nstring`;\nlet stringName = "string";\nconst stringName = "string";\n\n// raw strings (ignore escape characters)\nString.raw`\\n raw string`;  // "\\n raw string"\n'
            )
          ),
          (0, i.kt)("h3", {id: "typescript-3"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              'let stringName: string = "string";\n\n// declare string and/or other types\nlet strOrNum: (string | number);\nstrOrNum = "abc";\nstrOrNum = 123;  // can be reassigned to a declared type\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-5"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              'string_name = <<EOM\nthis is a\n  multi line string\nEOM\nstring_name = <<eom\nthis is a\n  multi line string\neom\nstring_name = \'string\'\nstring_name = "string"\n    \nstring_name.length  # 6\n    \nstring_name = string_name.reverse  # "gnirts"\n    \nstring_name = string_name.upcase  # "GNIRTS"\nstring_name = string_name.swapcase  # "gnirts"\nstring_name = string_name.swapcase  # "GNIRTS"\nstring_name = string_name.downcase  # "gnirts"\n\n    \nstring_name = string_name.capitalize  # "Gnirts"\n    \n# replace string in string, string_name.gsub!(/old/, new)\nstring_name = string_name.gsub!(/G/, "xxx")  # "xxxnirts"\n    \n# Split strings into an array\nstring_name = string_name.split("i")  # ["xxxn", "rts"]\nstring_name = "string"\nstring_name = string_name.split("")  # ["s", "t", "r", "i", "n", "g"]\n\n# check if a string exists within a string\nnameExist = "full name"\nnameExist.include?("name")  # returns true\n\n# search and count the total number of declared alphabets that exist in the string\nnameExist.count("l")  # returns 2\nnameExist.count("ln")  # (l + l + n) therefore returns 3\n\n# search and count the total number of the opposite of the declared alphabets that exist in the string\nnameExist.count("^l")  # returns everything except "l", therefore returns 7\n\n# check if a string that starts with the declared string exists\nnameExist.start_with?("ful")  # returns true\nnameExist.start_with?("nam")  # returns false\n\n# find the index of a searched string, returns the index of the first searched letter\nnameExist.index("ll")  # returns 2\n\n# remove empty spaces from string\nremoveStr = "   string   "\nremoveStr.lstrip  # "string   "\nremoveStr.rstrip  # "   string"\nremoveStr.strip  # "string"\n\n# format string\nmoveString = "string"\nmoveString.rjust(10, ".")  # "....string"\nmoveString.ljust(10, ".")  # "string...."\nmoveString.center(10, ".")  # "..string.."\n\n# Slice end of string\nnewStr = "string"\nnewStr.chop  # "strin"\n# state the last letters to remove from string\nnewStr.chomp("ng")  # "stri"\n\n# remove all listed letters from string\nremoveStr = "sstring"\nremoveStr.delete("si")  # "trng"\n\n# SYMBOLS: strings that are immutable, must use letters or underscores (_)\n# used mainly for memory conservation or speed string comparison\n# use a symbol if need a string to be immutable and not need to access string methods\n# commonly used in hashed for keys\nvariable_name = :symbolStringWithoutQuotes\nputs variable_name  # symbolStringWithoutQuotes\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-5"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// character: 16 bits, 2 bytes, only 1 letter or symbol, must use single quotes \'\'\nchar charName1 = \'a\';\nchar charName2 = \'\\u0061\';  // unicode character for the letter a\n\n// modify character cases\nCharacter.toUpperCase(charName1);  // \'A\'\nCharacter.toLowerCase(charName1);  // \'a\'\n\n// convert Char Array to a string\nchar[] chars = {\'H\', \'e\', \'l\', \'l\', \'o\'};\nString s = new String(chars);  // "Hello"\n\n// convert string to char array\nchar[] chars2 = s.toCharArray();\nfor (char c : chars2) {  // for each loop\n  System.out.print(c);  // "Hello"\n}\n\n// convert primitive values to string\nint intValue = 42;\nString fromInt = Integer.toString(intValue);  // "42"\n\nboolean boolValue = true;\nString fromBool = Boolean.toString(boolValue);  // "true"\n\n\n// strings: must use double quotes ""\nString stringName = new String("Hello");  // method 1\nString stringName1 = "string";  // method 2\nString stringName2 = "multi-line " +\n                     "string";\n\n\n// get character of string with index\nchar indexChar = stringName1.charAt(0);  // \'s\'\n\n\n// modify string cases\nString stringName3 = stringName1.toUpperCase();  // "STRING"\nString stringName4 = stringName3.toLowerCase();  // "string"\n\n\n// get length of string\nstringName4.length();  // 6\n\n// get index of substring\nint index = stringName4.indexOf("ng");  // 4\n\n// get substring with index\nString sub1 = stringName4.substring(4);  // "ng"\nString sub2 = stringName4.substring(4, 6);  // "ng" from starting index to but exclude last index\n\n// trim whitespaces from beginning and ending of string\nString trimStr = "  test  ";\nString newStr = trimStr.trim();  // "test"\n\n\n// toString method: convert primitive numeric values to string\ndouble doubleValue = .5d;\nString stringName5 = Double.toString(doubleValue);  // "0.5"\n\n// comparing strings\nString str1 = "Hello";  // object 1\nString str2 = "Hello";  // str2 points to str1, thus is still object 1\nstr1 == str2;  // true\n\nString part1 = "Hello ";\nString part2 = "World";\nString str3 = part1 + part2;  // object 1\nString str4 = "Hello World";  // object 2\nstr3 == str4;  // false\n// need to use .equals()\nstr3.equals(str4);  // true\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-9"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Strings (immutable)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "each operation that appears to be modifying a string is actually creating a new string"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "modifying a string repeatedly can cause a significant performance penalty"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "when to use string",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when number of changes that your app will make to a string is small",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "string builder might offer negligible or no performance improvement"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when performing a fixed number of concatenation operations is required",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "compiler might combine the concatenation operations into a single operation"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when performing extensive search operations while building a string is required",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "string builder lacks search methods (IndexOf, StartsWith)"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "thus will need to convert string builder to a string for these operations"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "this can negate the performance benefit from using string builder"
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// character: 16 bits\nchar charName1 = \'a\';  // type Char\nchar charName2 = \'\\u0061\';  // unicode character for the letter a\nSystem.Char charName3 = \'a\';\n\n// strings\nstring stringName = "string";  // type String\nSystem.String stringName2 = "string";\n\n// multiline strings\n// method 1\nstring multilineString1 = "multi-line\\n"\n+ "string";\n// method 2\nstring multilineString2 = @"multi-line\nstring";\n// method 3\nstring multilineString3 = System.String.Join(\n  System.Environment.NewLine,\n  "multi-line",\n  "string"\n);\n\n\n// raw strings (ignore escape characters\nstring rawString = @"\\n raw string";  // "\\n raw string"\n\n\n// check if string is empty\nString.IsNullOrEmpty(stringName);  // False\nString.IsNullOrEmpty("");  // True\n\n// check for white space or empty\nString.IsNullOrWhiteSpace(stringName); // False\nString.IsNullOrWhiteSpace("  "); // True\nString.IsNullOrWhiteSpace(""); // True\nString.IsNullOrWhiteSpace(" test "); // False\n\n\n// get length of a string\nstringName.Length;  // 6\n\n\n// get index of the 1st character or word in a string\nstringName.IndexOf("s");  // 0\nstringName.IndexOf("unknown");  // -1\n\n\n// convert string to uppercase\nstringName.ToUpper();  // "STRING"\n\n\n// convert string to lowercase\nstringName.ToLower();  // "string"\n\n\n// split string to an array of characters\nstringName.ToCharArray();  // [\'s\', \'t\', \'r\', \'i\', \'n\', \'g\']\n\n\n// split string into an array of strings (must have separator)\nstringName.Split(\'r\');  // ["st", "ing"]\n\n\n// get substring from a string (if length is not declared, the entire string from startIndex onwards will be returned)\nint startIndex = 0;\nint length = 2;\nstringName.Substring(startIndex, length);  // "str"\n\n\n// replace string with another string, stringName.Replace(old, new);\nstringName.Replace("test", "newTest");  // "  newTest  "\n\n\n// comparing strings\nstring s1 = "test";\nstring s2 = "test";\nstring s3 = "test1".Substring(0, 4);\nobject s4 = s3;\nConsole.WriteLine("{0} {1} {2}", object.ReferenceEquals(s1, s2), s1 == s2, s1.Equals(s2));  // True True True\nConsole.WriteLine("{0} {1} {2}", object.ReferenceEquals(s1, s3), s1 == s3, s1.Equals(s3));  // False True True\nConsole.WriteLine("{0} {1} {2}", object.ReferenceEquals(s1, s4), s1 == s4, s1.Equals(s4));  // False False True\n\n\n// check if a string starts with a character or words\nstring sampleString = "some random words";\nsampleString.StartsWith("some");  // True\n\n// check if a string ends with a character or words\nsampleString.EndsWith("words");  // True\n\n\n// remove white spaces from both left and right\nstring stringName3 = "  test  ";\nstringName3.Trim();  // "test"\n// remove white spaces from left\nstringName3.TrimStart();  // "test  "\n// remove white spaces from right\nstringName3.TrimEnd();  // "  test"\n\n\n// string slicing from start index\n// count is the number of characters to delete from the start index\nint startIndex = 3;\nint count = 3;\nstringName.Remove(startIndex, count);  // "str"\nstringName.Remove(startIndex);  // "str"\nstringName.Remove(startIndex, 2);  // "strg"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "String builder (muttable)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "maintains a buffer to accommodate expansions to the string"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "new data is appended to the buffer if room is available",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "otherwise, a larger buffer is allocated"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "data from the original buffer is copied to the new buffer"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "then the new data is appended to the new buffer"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "when to use string builder",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when expecting an unknown number of changes to a string at design time (when using a loop to concatenate a random number of strings that contain user input)"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when expecting to make a significant number of changes to a string"
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Declaration\n// method 1\nSystem.Text.StringBuilder builder = new System.Text.StringBuilder();  // \'\'\n// method 2\nusing System.Text;  // import the prefix\nvar builder2 = new StringBuilder();  // \'\'\n// method 3\nvar builder3 = new StringBuilder("starting string");  // "starting string"\n\n\n// check if string builder is empty\n// method 1\nif (builder == 0) System.Console.WriteLine("true");  // "true"\n// method 2\nif (System.String.IsNullOrEmpty(builder.ToString())) \n  System.Console.WriteLine("true");  // "true"\n\n\n// append an array of similar characters\nbuilder.Append(\'-\', 3);  // "---"\n\n// append a new line in string\nbuilder.AppendLine();  // new line is counted as 1 character\n\n// append a string\nbuilder.Append("Header");\n/*\n"---\nHeader"\n*/\n\n\n// replace a character with a new character or a string with new string\nbuilder.Replace(\'-\', \'+\');\nbuilder.Replace("er", "ing");\n/*\n"+++\nHeading"\n*/\n\n\n// remove characters from startIndex for totalCharacters\nint startIndex = 0;\nint totalCharacters = 3;\nbuilder.Remove(startIndex, totalCharacters);\n/*\n"\nHeading"\n*/\n\n\n// insert an array of similar characters at index\nbuilder.Insert(startIndex, new string(\'+\', 4));\n/*\n"++++\nHeading"\n*/\n\n\n// get character of string builder at index\nbuilder[0];  // \'+\'\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-10"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// character: only have 1 character, must use single quotes ''\nchar charName;\ncharName = 'a';\n\nchar charName = 'a';\nchar charName ('a');\nchar charName {'a'};\n\n// strings\n// C-style strings: an ARRAY of characters, must use double quotes \"\"\n// THIS IS NOT A TRUE STRING, IT IS AN ARRAY OF CHARACTERS!!!!!!!\nchar * stringName = \"string\";\nconst char * stringName = \"string\";  // const is normally used\nchar stringName[] = \"string\";  // creates array of 7 chars, last char is null \"\\0\"\nchar stringName[7] = \"string\";  // need give 7 slots for chars and null char\nchar stringName[7] = {'s', 't', 'r', 'i', 'n', 'g', 0};  // no 0 = error\nchar stringName[7] = {'s', 't', 'r', 'i', 'n', 'g', '\\0'};  // no '\\0' = error\n\n//C++ strings: must add at the top \"#include\uff1cstring\uff1e\", must use double quotes \"\"\n#include\uff1cstring\uff1e\nstd::string stringName;\nstringName = \"string\";\n\n// back slash not required, but can use if want to\nstd::string stringName = \"multi-line\"\n                          \"string\";\nstd::string stringName (\"string\");\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "boolean"}, "Boolean"),
          (0, i.kt)("h3", {id: "python-2--3-4"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "boolean_name = True\nboolean_name = False\nnot True  # False\nnot False  # True\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-3"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "var boolean_name; boolean_name = true;\nvar boolean_name = false;\n!true  // false\n!false  // true\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              'truthy: "xxx", 1, -1, 2.5, true'
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              'falsey: false, 0, "", null, undefined, NaN'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-2"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "let boolean_name; boolean_name = true;\nlet boolean_name = false;\nconst boolean_name = true;\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-4"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              "let isDone: boolean = false;\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-6"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "boolean_name = true\nboolean_name = false\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, 'truthy: true, 0, 1, -1, "", '),
            (0, i.kt)("li", {parentName: "ul"}, "falsey: false, nil"),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Check if method exist",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "obj.respond_to?(:method)",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "example 1",
                      (0, i.kt)(
                        "blockquote",
                        {parentName: "li"},
                        (0, i.kt)(
                          "p",
                          {parentName: "blockquote"},
                          "[1, 2, 3]",
                          ".respond_to?(:push)  # true"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "example 2",
                      (0, i.kt)(
                        "blockquote",
                        {parentName: "li"},
                        (0, i.kt)(
                          "p",
                          {parentName: "blockquote"},
                          "123.respond_to?(:next)  # true"
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "example 3: false because array can't be turned into a symbol",
                      (0, i.kt)(
                        "blockquote",
                        {parentName: "li"},
                        (0, i.kt)(
                          "p",
                          {parentName: "blockquote"},
                          "[1, 2, 3]",
                          ".respond_to?(:to_sym) # false"
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "java-6"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'boolean booleanName1 = true;\nboolean booleanName2 = false;\nboolean booleanName3 = !booleanName2;  // true\n\nString sBoolean = "true";\nboolean booleanName4 = Boolean.parseBoolean(sBoolean);  // true\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-11"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "type Boolean\nbool booleanName = true;  // displayed as True when printed\nbool booleanName = false;  // displayed as False when printed\nSystem.Boolean booleanName = false;\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-8-bits"}, "c++: 8 bits"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "bool boolean_name; boolean_name = true;  // produces a 1 output\nbool boolean_name = false;  // produces a 0 output\nbool boolean_name (true);\nbool boolean_name {false};\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "arithmetic-operators"}, "Arithmetic Operators"),
          (0, i.kt)("h3", {id: "python-2-2"}, "python 2"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "3.0/2  # output 1.5, 3/2 output 1"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "**")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3//2  # output 1")
            )
          ),
          (0, i.kt)("h3", {id: "python-3-2"}, "python 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3/2  # output 1.5")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3//2  # output 1")
            )
          ),
          (0, i.kt)("h3", {id: "javascript-4"}, "javascript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3/2  // output 1.5")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "**")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "Math.floor(3/2)  // output 1"
              )
            )
          ),
          (0, i.kt)("h3", {id: "ruby-7"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "3.0/2  # output 1.5, 3/2 output 1"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "**")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3/2.floor")
            )
          ),
          (0, i.kt)("h3", {id: "java-7"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "double double_name = 3.0/2;  // output 1.5, 3/2 output 1"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "Math.pow(3, 2);  // output 9"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "int integer_name = 3/2;  // output 1"
              )
            )
          ),
          (0, i.kt)("h3", {id: "c-12"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "3.0/2;  // output 1.5, 3/2 output 1"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "Math.Pow(3, 2);  // output 9"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3/2;  // output 1")
            )
          ),
          (0, i.kt)("h3", {id: "c-13"}, "c++"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "addition: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "+")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "subtraction: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "-")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "multiplication: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "*")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "division: ",
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "double double_name = 3.0/2  // output 1.5, 3/2 output 1"
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "modulus: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "%")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "exponent:",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "must add this to the top ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "#include\uff1ccmath\uff1e"
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "int integer_name = pow(3, 2);  // output 9"
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "floor division: ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "3/2  // output 1")
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "comparison-operators"}, "Comparison Operators"),
          (0, i.kt)("h3", {id: "python-2--3-5"}, "python 2 & 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "=="),
              " condition is True if both operand have equal contents"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "list1 = []\nlist2 = []\nlist1 == list2  # True\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "is"),
              " condition is True if both operand points to the same identical object"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "list1 = []\nlist2 = []\nlist1 is list2  # False\n\nlist1 = None\nlist2 = None\nlist1 is list2  # True\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!="),
              " condition is True if both operand do not have equal contents"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "is not"),
              " condition is True if both operand do not points to the same identical object"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<>"),
              " py2 only, condition is True if both operands do not equal contents"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">"),
              " condition is True if right operand is less than left operand"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<"),
              " condition is True if left operand is less than right operand"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">="),
              " condition is True if right operand is less than or equal to left operand"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<="),
              " condition is True is left operand is less than or equal to right operand"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-5"}, "javascript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "=="),
              " not type-safe, e.g.: string or int will be automatically converted before comparison, only checks the value"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'var x = 5;\nx == 5;  // is true\nx == "5"  // is also true\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "==="),
              " string or int will NOT be converted before comparison, checks both the value and type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "NaN and NaN comparison are not equal"
                ),
                (0, i.kt)("li", {parentName: "ul"}, "+0 and -0 are equal")
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'var x = 5;\nx === 5;  // is true\nx === "5"  // is false\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "Object.is(var1, var2);"
              ),
              " similar to ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "==="),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "NaN and NaN comparison are equal"
                ),
                (0, i.kt)("li", {parentName: "ul"}, "+0 and -0 are not equal")
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!==")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "??"),
              " Nullish coalescing operator: returns right-hand side operand when left-hand side operand is null or undefined, and otherwise returns its left-hand side operand"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "const foo = null ?? 'default string';\nconsole.log(foo);\n// expected output: \"default string\"\n\nconst baz = 0 ?? 42;\nconsole.log(baz);\n// expected output: 0\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-8"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "==")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=>"),
              "  Combined Comparison Operator"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)(
                "inlineCode",
                {parentName: "li"},
                "object1.equal?object2"
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              'string1 = "string"\nstring2 = "string"\nstring1 == string2  # returns true\nstring1.equal?string2  # returns false\nstring1.equal?string1  # returns true\n\nnum1 = 2\nnum2 = 5\nputs num1 <=> num2  # -1\nputs num2 <=> num1  # 1\nnum1 = 3\nnum2 = 3\nputs num1 <=> num2 # 0\n    \nstring1 = "b"  # looks at only the 1st letter, "bz" will not change the outcome, unless both strings start with the same 1st letter\nstring2 = "e"\nputs string1 <=> string2  # -1\nputs string2 <=> string1  # 1\nstring1 = "c"\nstring2 = "c"\nputs string1 <=> string2  # 0\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-9"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "=="),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)("li", {parentName: "ul"}, "reference comparison")
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-java"},
                  'String s1 = new String("string value");\nString s2 = new String("string value");\nSystem.out.println(s1 == s2);  // false\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "use equals method to compare string values"
                )
              ),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-java"},
                  'String s1 = new String("string value");\nString s2 = new String("string value");\nSystem.out.println(s1.equals(s2));  // true  \n'
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "instanceof"),
              " class membership"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'String s = "Hello";\nif (s instanceof java.lang.String) {\n  System.out.println(true);\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-14"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "==")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=")
            )
          ),
          (0, i.kt)("h3", {id: "c-15"}, "c++"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "==")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, ">=")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "<=")
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "logical-operators"}, "Logical Operators"),
          (0, i.kt)("h3", {id: "python-2--3-6"}, "python 2 & 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "and")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "or")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "not")
            )
          ),
          (0, i.kt)("h3", {id: "javascript-6"}, "javascript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "&&"),
              " and"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "||"),
              " or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!"),
              " not"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "truthy and falsey examples",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "truthy1 && truthy2"
                  ),
                  " truthy2"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "falsey && truthy"
                  ),
                  " falsey"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "truthy && falsey"
                  ),
                  " falsey"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "falsey1 && falsey2"
                  ),
                  " falsey1"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "truthy1 || truthy2"
                  ),
                  " truthy1"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "truthy || falsey"
                  ),
                  " truthy"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "falsey1 || falsey2"
                  ),
                  " falsey2"
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "ruby-9"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "&&"),
              " and"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "||"),
              " or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!"),
              " not"
            )
          ),
          (0, i.kt)("h3", {id: "java-10"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "&&"),
              " and"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "||"),
              " or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "^"),
              " exclusive or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!"),
              " not"
            )
          ),
          (0, i.kt)("h3", {id: "c-16"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "&&"),
              " and"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "||"),
              " or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "^"),
              " exclusive or"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "!"),
              " not"
            )
          ),
          (0, i.kt)("h3", {id: "c-17"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "getting-input"}, "Getting Input"),
          (0, i.kt)("h3", {id: "python-2-3"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'raw_input("What\'s your name?")\n\n# input must be the same data type as xxx else return an error\ninput(xxx)\n'
            )
          ),
          (0, i.kt)("h3", {id: "python-3-3"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'input("What\'s your name?")\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-7"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// install readline-sync package locally via npm i readline-sync\nvar readlineSync = require('readline-sync'); // import package\nvar getInput = readlineSync.question(\"What's your name?\");\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-10"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# print question\nprint "What\'s your name?"\n# get input\nname = gets.chomp\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-11"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "must import scanner library ")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "import java.util.Scanner;\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// print question\nSystem.out.println(\"What's your name?\");\n\n// get raw input\nScanner scanner = new Scanner(System.in);\n// convert raw value to string type\n// can read the input only till the space\n// It can't read two words separated by a space\n// places the cursor in the same line after reading the input\nString input = scanner.next();\n// reads input including space between the words till the end of line \\n\n// Once the input is read, positions the cursor in the next line\nString input1 = scanner.nextLine();\n// convert raw value to int type\nInt input2 = scanner.nextInt();\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-18"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// print question\nSystem.Console.WriteLine("What\'s your name?");\n// get input\nstring name = System.Console.ReadLine();\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-19"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "bitwise-operators"}, "Bitwise Operators"),
          (0, i.kt)("h3", {id: "python-2--3-7"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# Each digit is 1 bit, all bitwise operators converts to signed 32-bit integers, except for zero-fill right shift which results to unsigned 32 bit integer\na = 60  # 60 = ...0011 1100\nb = 13  # 13 = ...0000 1101\nc = 9  # 9 = ...0000 1001\n# & is binary AND, return 1 if both a and b are 1\na & b  # 12 = ...0000 1100\n\n# | is binary OR, return 1 if either a and or b HAVE a 1\na | b  # 61 = ...0011 1101\n\n# ^ is binary XOR, return 1 if both a and b are not 1 or 0\na ^ b  # 49 = ...0011 0001\n\n# ~ is binary ones complement, invert everything, 1 change to 0 and vice versa\n~a  # -61 = ...1100 0011\n\n# << is binary left shift, shift everything to the left by n digit(s)\na << 2  # 240 = ...1111 0000\n\n# >> is binary right shift, shift everything to the right by n digit(s)\na >> 2  # 15 = ...0000 1111\nc >> 2  # 3 = ...0000 0010, count the 1s\nc = -9  # -9 = ...1111 0111\nc >> 2  # -3 = ...1111 1101, count the 0s\n\n# Zero fill right shift, shift everything to the right by n digits(s), leftmost will add n 0s\ndef zero_fill_right_shift(val, n):\n    return (val >> n) if val >= 0 else ((val + 0x100000000) >> n)\nzero_fill_right_shift(9, 2)  # 2 = ...0000 0010, count the 1s\nc = -9  # -9 = ...1111 0111\nzero_fill_right_shift(-9, 2)  # 1073741821 = 0011...1111 1101, count the 0s\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-8"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Each digit is 1 bit, all bitwise operators converts to signed 32-bit integers, except for zero-fill right shift which results to unsigned 32 bit integer\nlet a = 60  // 60 = ...0011 1100\nlet b = 13  // 13 = ...0000 1101\nlet c = 9  // 9 = ...0000 1001\n// & is binary AND, return 1 if both a and b are 1, count the 1s\na & b  // 12 = ...0000 1100\n    \n// | is binary OR, return 1 if either a and or b HAVE a 1\na | b  // 61 = ...0011 1101\n    \n// ^ is binary XOR, return 1 if both a and b are not 1 or 0\na ^ b  // 49 = ...0011 0001\n    \n// ~ is binary ones complement, invert everything, 1 change to 0 and vice versa, count the 0s\n~a  // -61 = ...1100 0011\n    \n// << is binary left shift, shift everything to the left by n digit(s)\na << 2  // 240 = ...1111 0000\n    \n// >> is Sign-propagating right shift, a binary right shift, shift everything to the right by n digit(s)\na >> 2  // 15 = ...0000 1111\nc >> 2  // 3 = ...0000 0010, count the 1s\nc = -9  // -9 = ...1111 0111\nc >> 2  // -3 = ...1111 1101, count the 0s\n    \n// >>> is Zero fill right shift, shift everything to the right by n digits(s), leftmost will add n 0s\nc >>> 2  // 2 = ...0000 0010, count the 1s\nc = -9  // -9 = ...1111 0111\nc >>> 2  // 1073741821 = 0011...1111 1101, count the 0s\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-11"}, "ruby"),
          (0, i.kt)("h3", {id: "java-12"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// & is binary AND, return 1 if both a and b are 1, count the 1s\na & b  // 12 = ...0000 1100\n    \n// | is binary OR, return 1 if either a and or b HAVE a 1\na | b  // 61 = ...0011 1101\n    \n// ^ is binary XOR, return 1 if both a and b are not 1 or 0\na ^ b  // 49 = ...0011 0001\n    \n// ~ is binary ones complement, invert everything, 1 change to 0 and vice versa, count the 0s\n~a  // -61 = ...1100 0011\n    \n// << is binary left shift, shift everything to the left by n digit(s)\na << 2  // 240 = ...1111 0000\n    \n// >> is Sign-propagating right shift, a binary right shift, shift everything to the right by n digit(s)\na >> 2  // 15 = ...0000 1111\nc >> 2  // 3 = ...0000 0010, count the 1s\nc = -9  // -9 = ...1111 0111\nc >> 2  // -3 = ...1111 1101, count the 0s\n    \n// >>> is Zero fill right shift, shift everything to the right by n digits(s), leftmost will add n 0s\nc >>> 2  // 2 = ...0000 0010, count the 1s\nc = -9  // -9 = ...1111 0111\nc >>> 2  // 1073741821 = 0011...1111 1101, count the 0s\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-20"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// & is binary AND, return 1 if both a and b are 1, count the 1s\na & b  // 12 = ...0000 1100\n    \n// | is binary OR, return 1 if either a and or b HAVE a 1\na | b  // 61 = ...0011 1101\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-21"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "increment"}, "Increment"),
          (0, i.kt)("h3", {id: "python-2--3-8"}, "python 2 & 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1"),
              " increment"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1")
            )
          ),
          (0, i.kt)("h3", {id: "javascript-9"}, "javascript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1;"),
              " add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1;"),
              " add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "++x;"),
              " preincrement, add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x++;"),
              " postincrement, display without addition now then add 1 later when called again"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-12"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1"),
              " increment"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1")
            )
          ),
          (0, i.kt)("h3", {id: "java-13"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "++x;"),
              " preincrement, add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x++;"),
              " postincrement, display without addition now then add 1 later when called again"
            )
          ),
          (0, i.kt)("h3", {id: "c-22"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "++x;"),
              " preincrement, add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x++;"),
              " postincrement, display without addition now then add 1 later when called again"
            )
          ),
          (0, i.kt)("h3", {id: "c-23"}, "c++"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x = x + 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x += 1;")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "++x;"),
              " preincrement, add 1 now"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "x++;"),
              " postincrement, display without addition now then add 1 later when called again"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "arrays-and-lists"}, "Arrays and Lists"),
          (0, i.kt)("h3", {id: "python-2--3-9"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Empty list\nlist_name = []\n# List with elements\nlist_name = [1, "one", True]\n# Nested lists\nlist_name = [1, ["two", 3]]\n\n\n# Find list size\nlen(list_name)\n\n\n# Get index of element, return ValueError if element does not exist\nlist_name.index(element)\n\n\n# Add element to list (left to right)\nlist_name.append(element)\n\n# Add element to list at index\nlist_name.insert(index, element)\n\n# Extends list by appending elements from the iterable\nlist_name = [1, 2]\nlist_name.extend([3, 4])  # [1, 2, 3, 4]\n\n\n# Access an element\nlist_name[index]\n\n# Modify an element\nlist_name[index] = element\n\n\n# Remove element from list (right to left)\nlist_name.pop()\n\n# Remove element from list at index\nlist_name.pop(index)\n\n# Remove any element from list at element\nlist_name.remove(element)\n\n# Method 1: remove all elements\ndel list_name[:]\n# Method 2: remove all elements\nlist_name = []\n# Method 3: remove all elements, only in python 3\nlist_name.clear()\n\n\nSlice notation\n# items start through stop-1\nlist_name[start:stop]\n\n# items start through the rest of the array\nlist_name[start:]\n\n# items from the beginning through stop-1\nlist_name[:stop]\n\n# a copy of the whole array\nlist_name[:]\n\n# start through not past stop, by step\nlist_name[start:stop:step]\nlist_name = [1, 2, 3, 4, 5]\nlist_name[::2]  # [1, 3, 5]\n\n# last item in the array\nlist_name[-1]\n\n# last two items in the array\nlist_name[-2:]\n\n# everything except the last two items\nlist_name[:-2]\n\n# all items in the array, reversed\nlist_name[::-1]\n\n# the first two items, reversed\nlist_name[1::-1]\n\n# the last two items, reversed\nlist_name[:-3:-1]\n\n# everything except the last two items, reversed\nlist_name[-3::-1] \n\n\n# Reverse an array\nlist_name.reverse()\n\n\n# Merge 2 or more arrays together\nnew_list = list_name + list_name2\n\n\n# Sort an array in ascending order\nlist_name = [2, 3, 1, 4]\n# method 1\nlist_name2 = sorted(list_name)  # [1, 2, 3, 4]\n# method 2\nlist_name.sort()  # [1, 2, 3, 4]\n\n# sort an array of dictionaries in ascending order\ndict_name = [{"key_name": value1}, {"key_name": value2}]\n# sort by value\ndict_name2 = sorted(dict_name, key=lambda k: k["key_name"])\n\n\n# Sort an array in descending order\n# method 1\nlist_name2 = sorted(list_name2, reverse=True)  # [4, 3, 2, 1]\n# method 2\nlist_name.sort(reverse=True)  # [4, 3, 2, 1]\n\n# sort an array of dictionaries in descending order\n# sort by value\ndict_name2 = sorted(dict_name, key=lambda k: k["key_name"], reverse=True)\n\n# Join array into a string\nlist_name = ["a", "b", "c"]\nx = ", ".join(list_name)\nprint(x)  # "a, b, c"\n\n# Split string into an array\ny = x.split(", ")\nprint(y)  # [\'a\', \'b\', \'c\']\n\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-10"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Method 1: empty list\nvar list_name = [];\n// Method 2: empty list\nvar list_name = new Array();\n// create list of empty elements\nvar list_name = new Array(3); // [undefined, undefined, undefined]\nvar list_name = Array.from({ length: 3});  // [undefined, undefined, undefined]\n// List with elements\nvar list_name = [1, "one", true];\nvar list_name = new Array(3).fill("-") // ["-", "-", "-"]\n// Nested lists\nvar list_name = [1, ["two", 3]];\nvar list_name = new Array(3).fill(new Array(2).fill("-")) // [["-", "-"], ["-", "-"], ["-", "-"]]\n    \n    \n// Modify an element\nlist_name[index] = element;\n    \n// Access an element\nlist_name[index];\n    \n    \n// Remove element from list (right to left)\nlist_name.pop();\n// Remove element from list (left to right)\nlist_name.shift();\n// Remove number of elements (left to right) from index and insert new elements (left to right)\nlist_name.splice(index, number_of_element);\n\n    \n// Add element to list (left to right)\nlist_name.push(element);\n// Add element to list (right to left)\nlist_name.unshift(element);\n// Add element to list at index (left to right)\nlist_name.splice(index, 0, new_element1, new_element2...);\n// Add & Remove elements to & from list at index (left to right)\nlist_name.splice(index, number_of_element, new_element1, new_element2...);\n    \n    \n// Return the selected elements in an array, as a new array object\nlist_name.slice();\n// Return the elements starting at the given 1st argument,\n// and ends at, but does not include, the given 2nd argument\nlist_name.slice(1, 3);\nlist_name.slice(1);  // if 1 argument is given, return all elements from array from the 1st argument index\n    \n    \n// Find list size\nlist_name.length;\n// Remove all elements\nlist_name = [];\n    \n    \n// Merge 2 or more arrays together\nlist_name1 = [1, 2, 3];\nlist_name2 = [4, 5, 6];\nnew_list = list_name1.concat(list_name2);\n    \n    \n// Get index of element, return -1 if not present\nlist_name = ["element1", "element2", "element1"]\nlist_name.indexOf("element1")  // returns index of 0\nlist_name.indexOf("element1", 1);  // returns index of 2\nlist_name.indexOf("element1", 2);  // also returns index of 2\nlist_name.indexOf("element1", 0);  // returns index of 0\n    \n    \n// Sort array in ascending order\nlist_name = [2, 3, 1, 4];\nlist_name.sort();  // [1, 2, 3, 4]  work only only positive integers and strings\n\nlist_name = [2, -1, 4, 3];\nlist_name.sort((a, b) => a - b);  // [ -1, 2, 3, 4 ] work for negative and positive integers\n    \n// Sort array in descending order\nlist_name.sort((a, b) => (b - a));  // [4, 3, 2, 1] work for negative and positive integers\nlist_nameStr = ["b", "a", "c"];\n// method 1: most optimal\nlist_nameStr.sort().reverse(); // ["c", "b", "a"]\n// method 2\nlist_nameStr.sort((a, b) => (a > b ? -1 : 1));\n// method 3\nlist_nameStr.sort((a, b) => b.localeCompare(a));\n    \n    \n// Determine whether an array contains a specified element\nlist_name = ["a", "b", "c", "a"]\nconsole.log(list_name.includes("b"))  // true\n    \n// Determine whether an array contains a specified element from starting index\nconsole.log(list_name.includes("b", 2)  // false\nconsole.log(list_name.includes("a", 2)  // true\n\n// Flatten nested arrays\nlist_name = [1, 2, [3, 4]];\nlist_name.flat() // [1, 2, 3, 4]\n\n// Check if all elements in array pass the conditional check\nfunction helper(currentValue) {\n return currentValue < 3;\n}\nlist_name = [1, 2, 3, 4];\nlist_name.every(helper); // false\nlist_name = [1, 2];\nlist_name.every(helper); // true\n'
            )
          ),
          (0, i.kt)("h3", {id: "typescript-5"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              '// method 1\nlet numArr: number[] = [1, 2, 3];\nlet strArr: string[] = ["a", "bc", "def"];\n\n// method 2\nlet numArr2: Array<number> = [1, 2, 3];\nlet strArr2: Array<string> = ["a", "bc", "def"];\n\n// declare more than 1 type\n// with tuples\nlet strOrNumArr1: [string, number] = ["a", 1];  // must follow and limited to declared format\n// with union\nlet strOrNumArr2: (string | number)[];  // allows unlimited mixture of number and/or string values in 1 array\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-13"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# Empty list\nlist_name = []  # method 1\nlist_name = Array.new  # method 2\n# List with elements\nlist_name = [1, "one", True]\nlist_name = Array.new(3)  # creates 3 slots of nil in array [nil, nil, nil]\nlist_name = Array.new(3, "new")  # creates 3 slots of object in array ["new", "new", "new"]\n# Nested lists\nlist_name = [1, ["two", 3]]\n\n# join elements in array at index into a string (to join all elements, all indexes must be listed)\nlist_name.values_at(0, 1).join(", ")  # "1, two, 3"\n\n# join all elements in array into a string\nlist_name.join(", ")  # "1, two, 3"\n    \n# Add element to list (left to right)\n# method 1\nlist_name.push(element);\n# method 2\nlist_name << element;\n\n# Add element to list (right to left)\nlist_name.unshift("new")  # ["new", 1, ["two", 3]]\n\n# delete element from list (right to left)\nlist_name.pop()  # ["new", 1]\n\n# delete element from list (left to right)\nlist_name.shift()  # [1]\n\n# concat 2 arrays\n# method 1\n[1] + [2]  # [1, 2]\n# method 2\n[1].concat([2])  # [1, 2]\n\n# find length of array\n[1, 2].size  # 2\n\n# check if element exist in array\n[1, 2].include?(1)  # true\n\n# count how many similar elements are in the array\n[1, 2, 1].count(1)  # 2\n\n# check if array is empty\n[1, 2].empty?  # false\n    \n# Add 0 to 10 to an array\n(0..10).to_a  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\n# Add 0 to 10 excluding 10 to an array\n(0...10).to_a  # [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n    \n# Access an elment\nlist_name[index]\n    \n# Sort an array in ascending\nlist_name = [3, 4, 1, 2]\n# method 1\nlist_name1 = list_name.sort  # [1, 2, 3, 4]\n# method 2\nlist_name.sort!  # [1, 2, 3, 4]\n# Reverse sort an array, only works on already sorted array\n# arrays that are not sorted will be reversed without sorting\n# method 1 (modify list_name temporarily)\nlist_name1 = list_name.reverse  # [4, 3, 2, 1]\n# method 2 (directly modify list_name)\nlist_name.reverse!\n\n# Modifies every value in an array\n# (modify list_name temporarily)\n# method 1\nlist_name2 = list_name.collect {|num| num * 2}  # [8, 6, 4, 2]\n# method 2\nlist_name2 = list_name.map {|num| num * 2}  # [8, 6, 4, 2]\n# (directly modify list_name)\n# method 1\nlist_name.collect! {|num| num * 2}  # [8, 6, 4, 2]\n# method 2\nlist_name.map! {|num| num / 2}  # [4, 3, 2, 1]\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-14"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// Arrays: can only have 1 data type: string, int, etc.\n// printing this only shows the memory\n// Empty string array of desired array size\nString[] string_array = new String[length_of_desired_array];\n// New string array with elements inside\nString [] string_array = new String [] {string1, string2,...};  // Method 1\nString[] string_array = {string1, string2,...};  // Method 2\n\n// Add string array element, limited to array size\n// Modify string array element value\nstring_array[index] = element;\n\n// Access an element\nstring_array[index];\n\n// Find array size\nstring_array.length;\n\n// Sort array, can sort numbers, strings, etc.\n// must import\n// import java.util.Arrays;\nString[] sourceArr = {"orange", "apple", "pear"};\nArrays.sort(sourceArr);  // {"apple", "orange", "pear"}\n\n// Copy array\nint sourceArrStartingIndex = 1;\nint destinationArrStartingIndex = 0;\nint copiedArrLen = 2;\nString[] copiedArr = new String[copiedArrLen];\nSystem.arraycopy(sourceArr, sourceArrStartingIndex, copiedArr, destinationArrStartingIndex, copiedArrLen);  // {"apple", "pear"}\n\n// multidimensional array\nString[][] states = new String[3][2];\nstates[0][0] = "Japan";\nstates[0][1] = "Tokyo";\n\n\n// Arraylists: it is a class, extends the AbstractList class and implements List interface\n// can be instantiated\n// used to create a dynamic array that contains objects\n// creates an array of objects where the array can grow dynamically\n// can only have 1 data type: string, int, etc.\n// import java.util.ArrayList;  // Must import to use\n\n// Empty string arrayList\nArrayList<String> arrayList = new ArrayList<String>();\n\n// Add element to string arrayList (left to right)\narrayList.add(element);\n\n// Modify an element at index\narrayList.set(index, element);\n\n// Access an element\narrayList.get(index);\n\n// Remove element from arrayList at index\narrayList.remove(index);\n\n// Find arrayList size\narrayList.size();\n\n// Remove all elements\narrayList.clear();\n\n\n// List: it is an interface, extends the Collection framework\n// cannot be instantiated\n// used to create a list of elements(objects) which are associated with their index numbers\n// creates a collection of elements that are stored in a sequence and they are identified and accessed using the index\n// print this shows the actual array\n// import java.util.List;  // must import to use\n// import java.util.ArrayList;  // Must import to use\nList<String> list = new ArrayList<>();  // from java 7 onwards redundent <String> is not required, can just use <>\n\n// Add element to string List (left to right)\nlist.add(element);\n\n// Remove element from list at index\nlist.remove(index);\n\n// Access an element\nlist.get(index);\n\n// Find index of an element\nlist.indexOf(element);\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-24"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Arrays: can only have 1 data type: string, int, etc. (size cannot be modified after declaration)"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Empty string array of desired array size\nstring[] stringArray = new string[lengthOfDesiredArray];\n// New string array with elements inside\nstring [] stringArray2 = new string [] {string1, string2, ...};  // Method 1, size is determined by number of elements declared\nstring [] stringArray2 = new string [2] {string1, string2};  // Method 2, size is determined by the array size declared\nstring[] stringArray3 = {string1, string2, ...};  // Method 3, size is determined by number of elements declared\nstring[] stringArray5 = new[] {string1, string2, ...};  // Method 4\nvar stringArray6 = new[] {string1, string2, ...};  // Method 5, use var to auto determine data type\n\n// Multi-dimensional Rectangular Arrays\nint[] rectArray = new int[3, 5];\nint[] rectArray2 = new int[3, 5] {\n  {1, 2, 3, 4, 5},\n  {6, 7, 8, 9, 10},\n  {11, 12, 13, 14, 15}\n};\n\n// Multi-dimensional Jagged Arrays\nint[] jaggedArray = new int[3][];  // create an array of 3 empty arrays\njaggedArray[0] = new int[4];  // create an array of size 4\njaggedArray[1] = new int[5];  // create an array of size 5\njaggedArray[2] = new int[3];  // create an array of size 3\n\n// Add string array element, limited to array size\n// Modify string array element value\nstringArray[index] = element;\n\n\n// Access an element\nstringArray[index];\nrectArray2[index1, index2];\njaggedArray[0][0];\n\n\n// Find array size\nstring[] strArr = {"a", "b", "c"};\nstrArr.Length;  // 3\n\n\n// Find index of an element in an array\nstring element = "a";\nint index = System.Array.IndexOf(strArr, element);  // 0\n\n\n// Clear the element in the array (0 for int, false for bool, null for other objects), exclude the endIndex value\nint startIndex = 0;\nint endIndex = 1;\nSystem.Array.Clear(strArr, startIndex, endIndex);\n\n\n// Copy the elements into a new array\nint firstFewElem = 3;\nstring[] copiedStrArr = new string[3];\nSystem.Array.Copy(strArr, copiedStrArr, firstFewElem);\n\n\n// Sort (ascending order)\nSystem.Array.Sort(strArr);\n\n\n// Reverse (only works on sorted arrays)\nSystem.Array.Reverse(strArr);  // ["c", "b", "a"]\nSystem.Array.Reverse(strArr);  // ["a", "b", "c"]\n\n\n// Join elements of an array into a string\nSystem.String.Join("", strArr);  // "abc"\nSystem.String.Join(",", strArr);  // "a,b,c"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "List (dynamic array)")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// Empty int array of desired array size\nSystem.Collections.Generic.List<int> intList = new System.Collections.Generic.List<int>();  // empty list\nSystem.Collections.Generic.List<int> intList2 = new System.Collections.Generic.List<int>() {1, 2, 3, 4};  // list with values\n// import to write less code when declaring\nusing System.Collections.Generic;\nList<int> intList3 = new List<int>();  // empty list\nList<int> intList4 = new List<int>() {1, 2, 3, 4};  // list with values\n\n\n// Add 1 new element to the list (left to right)\nintList4.Add(5);  // [1, 2, 3, 4, 5]\n\n// Add a range of elements to the list with an array\nintList4.AddRange(new int[3] {6, 7, 8});  // [1, 2, 3, 4, 5, 6, 7, 8]\n\n\n// Find index of an element in a list (return -1 if element is not found)\nintList4.IndexOf(2);  // 1\n\n// Find last index of elements with similar values in a list\nint[] intList5 = new List<int>() {1, 2, 1, 3};\nintList5.LastIndexOf(1);  // 2\n\n\n// Get length of list\nintList4.Count;  // 8\n\n\n// Remove an element at element in list\nintList4.Remove(2);  // [1, 3, 4, 5, 6, 7, 8]\n\n\n// Remove an element at index of list\nintList4.RemoveAt(0);  // [3, 4, 5, 6, 7, 8]\n\n\n// Remove all elements from the list\nintList4.Clear();  // [];\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "ArrayList (dynamic list of multiple data types, does not offer the best performance)"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Empty array list\nSystem.Collections.ArrayList list = new System.Collections.ArrayList();  // empty list\n\n\n// Add 1 new element to the list (left to right)\nlist.Add(1);  // [1]\nlist.Add("abc")  // [1, "abc"]\n\n// methods are similar to List\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-25"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// Arrays\n// Empty int array of desired array size\nint int_array[length_of_desired_array];\n// New int array with elements inside\nint int_array [length_of_desired_array] {element1, element2,...};  // size declared\nint int_array[] = {element1, element2,...};  // size automatically calculated\n\n// Assign int element, limited to array size\n// Modify int element value\nint_array[index] = element;\n\n// Access an element\nint_array[index];\n\n// Find array size: size of array (bytes) / size of an element of an array (bytes)\nsizeof(int_array) / sizeof(int_array[0]);\n\n\n// Vectors: a type of dynamic array\n#include <vector>  // Must import to use\n\n// Empty int vector of desired vector size, each element of 0 value will automatically be included\nstd::vector <int> int_vector (length_of_desired_array);\n// New int vector with elements inside\nstd::vector <int> int_vector {element1, element2,...};\n// New int vector with length of desired array and all value in parameter\n// Method 1\nstd::vector <int> int_vector (length_of_desired_array, constant_value_for_all_elements);\n// Method 2\nstd::vector <int> int_vector;\nint_vector.assign(length_of_desired_array, constant_value_for_all_elements);\n\n// Assign int element\nint_vector[index] = element;\n\n// Access an element\nint_vector[index];\nint_vector.at(index);\n\n// Add element to vector (left to right), vector size will automatically increase\nint_vector.push_back(element);\n// Add element to vector at index\nstd::vector<int>::iterator it;  // Must create iterator for inserting or emplacing to work\nit = int_vector.begin()  // Set it at index 0\n// insert method: copies or moves the elements into the container by calling copy constructor or move constructor\nint_vector.insert(it + index, element);  // Add element at index\n// emplace method: elements are constructed in place, no copy or move operations are performed (better performance)\nint_vector.emplace(it + index, element);  // Add element at index\n\n// Remove element from vector at index\nstd::vector<int>::iterator it;  // Must create iterator for erase to work\nit = int_vector.begin()  // Set it at index 0\nint_vector.erase(it + index)  // Remove element at index\nint_vector.erase(it + index, it + index)  // Remove a range of elements in the vector\n// Remove element from vector (right to left)\nint_vector.pop_back();  // does not return value\n\n// Find vector size\nint_vector.size();\n\n// Resize vector\nint_vector.resize(length_of_desired_array);\n\n// Remove all elements\nint_vector.clear();\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)(
            "h2",
            {id: "conditional-statement"},
            "Conditional Statement"
          ),
          (0, i.kt)("h3", {id: "python-2--3-10"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# If else statement\nif condition_a:\n    do_A\nelif condition_b:\n    do_B\nelse:\n    do_something_else\n\n\n# Ternary operator\ndo_A if condition_a else do_B\n\n\n# Switch Statement is not available in python, but can create similar function\ndef switch(choice):\n    case = {\n        1: do_A,\n        2: do_B,\n    }\n    case.get(choice, do_something_else)\n    \n \n# comparing between 2 objects (array, dictionaries, etc.) is allowed\nx = [1, 2, 3]\ny = [1, 2, 3]\nx == y  # returns True\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-11"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// If else statement\nif (condition_a) {\n    do_A;\n} else if (condition_b) {\n    do_B;\n} else {\n    do_something_else;\n}\n\n\n// Ternary operator\ncondition_a ? do_A : do_B;\n\n\n// Switch statement\nswitch(choice) {\n    case choice_A:\n        do_A;\n        break;\n    case choice_B:\n        do_B;\n        break;\n    default:\n        do_something_else;\n}\n\n// comparing between 2 objects (array, object, etc.) is NOT allowed\nvar x = [1, 2, 3]\nvar y = [1, 2, 3]\nx === y ? true : false;  // returns false\n// solution: use JSON.stringify()\nJSON.stringify(x) === JSON.stringify(y) ? true : false  // return true\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-14"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# If else statement\nif condition_a\n    do_A\nelsif condition_b\n    do_B\nelse\n    do_something_else\nend\n\n\n# Unless statement\ncondition_variable = boolValue\ndo_A unless condition_variable\n\n# Unless else statement\n# Check if something is false\nunless condition_a\n    do_A\nelse\n    do_something_else\nend\n\n\n# check if a string exist in a string\nif word.include? alphabet\n    do_something\nend\n\n\n# check if value is nil, if not nil return false\nobject.nil?  # if object != nil returns false, else returns true\n\n# check if array, hash, set, string is empty, return true if empty else false\nobject.empty?  # if object == [] or {} or "" or Set.new, return true\n\n\n# Ternary operator\ncondition_a ? (do_A) : (do_B);\n# example 1\nputs true ? "yes" : "no"\n# example 2\ntrue ? (puts "yes") : (puts "no")\n\n# Simpler if\ndo_A if condition_a\n\n# One line Unless\ndo_A unless condition_a  # do_A if condition_a is false\n\n\n# Case expression (similar to switch statement)\ncase choice\nwhen choice_A:\n    do_A;\nwhen choice_B:\n    do_B;\nelse\n    do_something_else\nend\n\n\n# Conditional Assignment: assign only if variable is nil\nfavorite_book = nil\nfavorite_book ||= "book 1"\nputs favorite_book # "book 1"\nfavorite_book ||= "book 2"\nputs favorite_book # "book 1"\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-15"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// If else statement\nif (condition_a) {\n    do_A;\n} else if (condition_b) {\n    do_B;\n} else {\n    do_something_else;\n}\n\n\n// {} not required if statement is a single line\nif (condition_a)\n    do_A;  // Single line statement\nelse if (condition_b)\n    do_B;  // Single line statement\nelse\n    do_something_else;  // Single line statement\n\n\n// Ternary operator\ncondition_a ? do_A : do_B;\n\n\n// Switch statement\nswitch(choice) {  // choice value can only be primitive values in java 7, since java 8 strings are also accepted\n    case choice_A:\n        do_A;\n        break;\n    case choice_B:\n        do_B;\n        break;\n    default:\n        do_something_else;\n        break;  // not required, but good to have in Java\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-26"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// If else statement\nif (condition_a) {\n    do_A;\n} else if (condition_b) {\n    do_B;\n} else {\n    do_something_else;\n}\n\n\n// Ternary operator\ncondition_a ? do_A : do_B;\n\n\n// Switch statement\nswitch(choice) {\n  case choiceA:\n    doA;\n    break;\n  case choiceB:\n    doB;\n    goto doSomethingSpecial;  // go to a special case that is written outside the switch statement and run it (not advised to use it\n  default:\n    do_something_else;\n    break;\n}\n\ndoSomethingSpecial:\n  doingSomething;\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-27"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// If else statement\nif (condition_a) {\n    do_A;\n} else if (condition_b) {\n    do_B;\n} else {\n    do_something_else;\n}\n\n\n// {} not required if statement is a single line\nif (condition_a)\n    do_A;  // Single line statement\nelse if (condition_b)\n    do_B;  // Single line statement\nelse\n    do_something_else;  // Single line statement\n\n\n// Ternary operator\ncondition_a ? do_A : do_B;\n\n\n// Null coalescing operator\nreturn_this_variable_value_if_not_null ?? else_return_this_value\n\n\n// Switch statement\nswitch(choice) {\n    case choice_A:\n        do_A;\n        break;\n    case choice_B:\n        do_B;\n        break;\n    default:\n        do_something_else;\n}\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "loops"}, "Loops"),
          (0, i.kt)("h3", {id: "python-2-4"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# While loop\n# declare_initial_conditional_value\ni = 0\n# Set condition\nwhile i<5:  # Start from 0 to 4\n    do_this\n    # Include condition_increment_or_decrement\n    i += 1\n    # Can use break, continue, and pass statements to add additional functionality, or not use any\n    break  # Breaks out of the current closest enclosing loop\n    continue  # Goes to the top of the closest enclosing loop\n    pass  # Does nothing at all\n\n\n# For loop\n# range() creates a list in python 2\n# Looping with xrange()\nfor i in xrange(5):  # Starts from 0 to 4 (5 - 1)\n    do_this\n    # Can use break, continue, and pass statements to add additional functionality, or not use any\n    break  # Breaks out of the current closest enclosing loop\n    continue  # Goes to the top of the closest enclosing loop\n    pass  # Does nothing at all\n    \n# Looping with xrange() and multiple parameters\nfor i in xrange(0, 5, 2):  # Start from 0 to 4 at every 2 steps (0,2,4)\n    do_this\n    \n# Reverse loop\nfor i in xrange(4, -1, -1):  # Start from 4 to 0 at every -1 steps\n    do_this\n\n\n# Looping and getting each value\nfor value in list_name:  # [i1_value, i2_value, i3_value,...]\n    print value\n\n\n# Looping and getting index and value\nfor index, value in enumerate(list_name):\n    print index, value  # output index, value\n"
            )
          ),
          (0, i.kt)("h3", {id: "python-3-4"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# For loop\n# Looping with range()\nfor i in range(5):  # Starts from 0 to (5 - 1)\n    do_this\n    # Can use break, continue, and pass statements to add additional functionality, or not use any\n    break  # Breaks out of the current closest enclosing loop\n    continue  # Goes to the top of the closest enclosing loop\n    pass  # Does nothing at all\n    \n# Looping with range() and multiple parameters\nfor i in range(0, 5, 2):  # Start from 0 to 4 at every 2 steps (0,2,4)\n    do_this\n    \n# Reverse loop\nfor i in range(4, -1, -1):  # Start from 4 to 0 at every -1 steps\n    do_this\n\n\n# Looping and getting each value\nfor value in list_name:  # [value1, value2, value3,...]\n    print(value)\n\n\n# Looping and getting index and value\nfor index, value in enumerate(list_name):\n    print(index, value)  # output index, value\n    \n    \n# Loops and getting both key and value of a dict\nx = { "one": 1, "two": 2}\nfor k, v in x.items():\n    print(f"k: {k}, v: {v}")\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-4"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// While loop\n// declare_initial_conditional_value\nvar i = 0;\n// Set condition\nwhile (i<5) {  // Start from 0 to 4\n    do_this;\n    // Include condition_increment_or_decrement;\n    i++;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n\n// Do While loop\nvar i = 0;\ndo {\n  do_this;\n  i++;\n} while (i<5);\n\n// For loop\nfor (var i=0; i<5; i++) {  // Start from 0 to 4\n    do_this;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n\n// Reverse loop\nfor (var i=4; i>=0; i--) {  // Start from 4 to 0\n    do_this;\n}\n\n// forEach loop\n// Looping through a list while calling a function\nlist_name.forEach(function(value, index, list){  // do not need to include all 3 parameters, but must be in order\n    console.log(index, value, list);  // outputs index value list\n});\n"
            )
          ),
          (0, i.kt)(
            "h3",
            {id: "javascript-es6-use-let-in-loops-when-declaring"},
            "javascript ES6: Use let in loops when declaring"
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// For of loop\n// Looping and getting each value\nfor (let value of list_name) {  // [value1, value2, value3,...]\n    console.log(value);  // output value\n}\n// Looping and getting index and value\nfor (let index_and_value of list_name.entries()) {\n    console.log(index_and_value);  // output a list [index, value]\n}\n\n// For in loop\nfor (let index in list_name) {\n    console.log(list_name[index]);\n}\n// For in loop normally used to get values from objects (hash table, dictionaries) than to arrays\n// object = {key1:value1, key2:value2,...}\nfor (let key in object) {\n    console.log(object[key]);  // outputs value, normally calling this way will not output value from objects\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-15"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# While loop\n# declare_initial_conditional_value\ni = 0\n# Set condition\nwhile i<5 do  # Start from 0 to 4, do keyword is not mandatory\n    do_this\n    # Include condition_increment_or_decrement\n    i += 1\nend\n\n# Until loop, backward while loop\ni = 0\nuntil i == 4  # Start from 0 to 4\n    i += 1\nend\n\n# For loop, with ... (3 dots)\nfor i in numStart...numEnd  # for i in the range numStart up to but don\'t include numEnd\n    do_this\nend\n\n# For loop, with .. (2 dots)\nfor i in numStart..numEnd  ## for i in the range numStart up to and include numEnd\n    dot_this\nend\n\n# Loop method, an infinite loop, requireds break to stop loop\ni = 4\nloop do\n    i -= 1\n    break if i ==0  # Breaks out of the current closest enclosing loop\nend\n\n# Next keyword: used to skip over certain steps in loop\nfor i in 0...5\n    next if i % 2 == 0   # do not do anything if i is an even number\n    do_this\nend\n\n# Each Iterator\narray = [1, 2, 3, 4, 5]\narray2 = []\narray.each { |value|  # Method 1: using {}\n    value += 10\n    array2.push(value)\n}\nputs array2  # [11, 12, 13, 14, 15]\n\narray3 = []\narray2.each do |value|  # Method 2: using do keyword\n    value -= 10\n    array3.push(value)\nend\nputs array3  # [1, 2, 3, 4, 5]\n\n# Iterating over Multidimensional Arrays with Each Iterator\nmultiArray = [[1, 2], [3, 4], [5, 6]]\nmultiArray.each { \n    |sub_array| sub_array.each { \n        |value| do_something\n    }\n}\n\n# Times Iterator\nn.times { do_this }  # do_this will repeat n times\n\n# Upto Iterator\n# method 1: number\n0.upto(5) { |num| print num, " " }  # 0 1 2 3 4 5\n# method 2: alphabet\n"A".upto("D") { |letter| prints letter, " " }  # A B C D\n\n# Downto Iterator, "string" don\'t work\n100.downto(95) { |num| print num, " " }  # 100 99 98 97 96 95\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-16"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// While loop\n// declare_initial_conditional_value\nint i = 0;\n// Set condition\nwhile (i<5) {  // Start from 0 to 4\n    doThis;\n    // Include condition_increment_or_decrement;\n    i++;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n\n// Do while loop: execute first before setting conditions\n// declare_initial_conditional_value\nint i = 0;\ndo {  // Start from 0 to 4\n    doThis;\n    // Include condition_increment_or_decrement;\n    i++;\n// Set condition\n} while (i<5);\n\n// For loop\nfor (int i=0; i<5; i++) {  // Start from 0 to 4\n    doThis;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n// Reverse loop\nfor (int i=4; i>=0; i--) {  // Start from 4 to 0\n    doThis;\n}\n\n// for each loop, can also loop collections with iterators\nchar[] chars = {'H', 'e', 'l', 'l', 'o'};  // an array can only have a single data type\nfor (char c : chars) {  // for each element in the array\n  doThis;\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-28"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// While loop\n// declare_initial_conditional_value\nint i = 0;\n// Set condition\nwhile (i<5) {  // Start from 0 to 4\n  do_this;\n  // Include condition_increment_or_decrement;\n  i++;\n  // Can use break or continue to add additional functionality, or not use any\n  break;  // Breaks out of the current closest enclosing loop\n  continue;  // Goes to the top of the closest enclosing loop\n}\n\n\n// Do while loop: execute first before setting conditions\n// declare_initial_conditional_value\nint i = 0;\ndo {  // Start from 0 to 4\n  do_this;\n  // Include condition_increment_or_decrement;\n  i++;\n// Set condition\n} while (i<5);\n\n\n// For loop\nfor (int i=0; i<5; i++) {  // Start from 0 to 4\n  do_this;\n  // Can use break or continue to add additional functionality, or not use any\n  break;  // Breaks out of the current closest enclosing loop\n  continue;  // Goes to the top of the closest enclosing loop\n}\n// Reverse loop\nfor (int i=4; i>=0; i--) {  // Start from 4 to 0\n  do_this;\n}\n\n\n// For each loop: cycles through every item in an array or collection (List)\n// Modifications of an array or collection is not allowed, need to use normal loops\nstring stringName = "a random string of characters";\n\nforeach(char c in stringName) {\n  do_this;\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-29"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              '// While loop\n// declare_initial_conditional_value\nint i = 0;\n// Set condition\nwhile (i<5) {  // Start from 0 to 4\n    do_this;\n    // Include condition_increment_or_decrement;\n    i++;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n\n// Do while loop: execute first before setting conditions\n// declare_initial_conditional_value\nint i = 0;\ndo {  // Start from 0 to 4\n    do_this;\n    // Include condition_increment_or_decrement;\n    i++;\n// Set condition\n} while (i<5);\n\n// For loop\nfor (int i=0; i<5; i++) {  // Start from 0 to 4\n    do_this;\n    // Can use break or continue to add additional functionality, or not use any\n    break;  // Breaks out of the current closest enclosing loop\n    continue;  // Goes to the top of the closest enclosing loop\n}\n// Reverse loop\nfor (int i=4; i>=0; i--) {  // Start from 4 to 0\n    do_this;\n}\n\n// Range-based for loop\n// Looping and getting each value\nfor (int value : int_array) {\n    cout << value << endl;  // output value per line\n}\n// Use auto to automatically detect array data type\nfor (auto value : array_name) {\n    cout  << value << endl;\n}\n\n// Infinite for loops\nfor (;;)\n    cout << "This will print forever" << endl;\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "instantiation"}, "Instantiation"),
          (0, i.kt)("h3", {id: "python-2--3-11"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "t = Thing()  # everything\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-12"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "v = getValue();  // plain function\nt = new Thing();  // instantiation\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-16"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "t = thing.new  # instantiation\nt = thing.new(argument)  # instantiation with arguments\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-17"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'public class ClassName {\n  public String type;  // instance variable\n  \n  public static void main(String[] args) {\n    ClassName t = new ClassName();  // instantiation\n    t.type = "something";\n    t.display();\n    \n    doSomething();  // can call static method directly\n  }\n  \n  // instance method\n  private void display() {}\n  \n  // static method\n  static void doSomething() {}\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-30"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// method 1\nClassName t = new ClassName();  // instantiation\nClassName t = new ClassName(argument);  // instantiation with arguments\n// method 2\nvar t = new ClassName();  // instantiation\nvar t = new ClassName(argument);  // instantiation with arguments\n\n\npublic class Person {\n  public int Age;\n}\n\npublic class Program {\n  public static void Main() {\n    Person person = new Person() {Age=20};  // instantiation & assigning value\n    increment(person);\n    System.Console.WriteLine(person.Age);\n  }\n\n  public static void increment(Person person) {\n    person.Age += 10;\n  }\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-31"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "functions"}, "Functions"),
          (0, i.kt)("h3", {id: "python-2--3-12"}, "python 2 & 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Function returns None by default if return statement is not declared"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# Normal function, use return to return values\ndef myFunction():\n    do_something\n\n# Normal function with parameters\ndef myFunction(a):\n    do_something_with_a\n    \n# Default parameters\ndef myFunction(a=value):\n    do_something_with_a\n    \n# Lambda function: a small anonymous function\n# can take any number of arguments, but can only have 1 expression\nmyFunction = lambda a : do_something_with_a\nmyFunction = lambda a, b : do_something_with_a_and_b\n\n# Function annotation (python 3)\ndef get_sum(num1: int, num2: int):\n    return num1 + num2\n    \n# Function annotation with default parameters (python 3)\ndef get_sum(num1: int=1, num2: int=2):\n    return num1 + num2\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-5"}, "javascript ES5"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Function returns undefined by default if return statement is not declared"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Normal function, use return to return values\nfunction myFunction() {\n    do_something;\n}\n// Normal function with parameters\nfunction myFunction(a) {\n    do_something_with_a;\n}\n\n// Function expression\nlet myFunction = function() {\n    do_something;\n}\n// Function expression with parameters\nlet myFunction = function(a) {\n    do_something_with_a;\n}\n\n// Arrow function: do not have their own "this" keyword\n// 1 line arrow function\nlet myFunction = () => do_something;  // () at (do_something) not necessary if on single line\n// 1 line arrow function with arguments\nlet myFunction = (a) => (\n    do_something_with_a\n);\n// arrow function, must use return keyword\nlet myFunction = () => {\n    return do_something\n};\n// arrow function with arguments\nlet myFunction = (a) => {\n    return do_something_with_a\n};\n\n// Immediately Invoked Function Expressions (IIFE)\n// method 1\n(function() {\n    do_something;\n})();\n// method 2\n(function() {\n    do_something;\n}());\n// method 3: no returning of value\n!function() {\n    do_something;\n}();\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-3"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Default parameters\nfunction myFunction(a=value) {\n    do_something_with_a;\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-6"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              '// return void\nfunction greetByName(name: string): void {\n  console.log(\'Well hi there,\', name);\n}\n\nfunction makeGreen(name: string): string {\n  const newName = `Green ${name}`;\n  return newName;\n}\n\nfunction getStr(): string {\n  return "string";\n}\n\nfunction getNum(): number {\n  return 123;\n}\n\nfunction getArr(): object {\n  return [1, "string"];\n}\n\n// accept multiple types in the parameter with "|"\nfunction totalLength(x: string | any[], y: string | any[]): number {  // allow mix of string and array parameters\n  let total: number = x.length + y.length;\n  return total;\n}\n\n// function overloading\nfunction totalLength(x: string, y: string): number;  // allows either only string parameters\nfunction totalLength(x: any[], y: any[]): number;  // or only array parameters\nfunction totalLength(x: string | any[], y: string | any[]): number {  // does not allow mix of string and array parameters\n  var total: number = x.length + y.length;\n  return total;\n}\n\n// using anonymous types\nfunction totalLength(x: {length: number}, y: {length: number}): number { // in this case, allow any parameter types that is able to calculate length (string, array)\n  var total: number = x.length + y.length;\n  return total;\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-17"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Function returns result regardless of whether return statement is declared or not",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Reason: ruby applies Implicit Return feature"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# Normal function, use return to return values\ndef myFunction\n    do_something\nend\n\n\n# Normal function with parameters\ndef myFunction(parameter)\n    do_something\nend\n\n# Default parameters\ndef myFunction(a=value)\n    do_something_with_a\nend\n\n\n# Blocks: nameless methods, similar to anonymous functions in JavaScript or lambdas in Python\n# can replace "do" and "end" with {}\n# 1st type\n# original way\narrayName.each do |num|\n    do_something_with_num\nend\n# blocks way\narrayName.each { |num| do_something_with_num }\n\n\n# 2nd type: Yield\ndef myFunction\n    yield  # can have multpile yield\n    yield\nend\nmyFunction { print "test" }  # "testtest"\n\ndef myFunction\n    yield(1)  # can pass any number of arguments to yield\n    yield 2  # () is not a must\nend\nmyFunction { |num| print num * 10 }  # 1020\n\n\n# Explicit Blocks\ndef myFunction(&blockName)  # & is used to define the block\'s name\n    blockName.call\nend\nmyFunction { print "test" }  # "test"\n\n\n# Lambda\n# lambda checks the number of arguments passed to it\n# when a lambda returns, it passes control back to the calling method\n# method 1\nmyFunction = -> { puts "test" }\nmyFunction.call  # "test", call is required to call the lambda function\n\n# method 2\nmyFunction = lambda { puts "test" }\nmyFunction.call\n\n\n# Procs: a saved block\n# it is a full-fledged objects, so they have all the powers and abilities of objects (blocks do not)\n# Unlike blocks, procs can be called over and over without rewriting them\n# procs does not checks the number of arguments passed to it\n# when a proc returns, it does so immediately, without going back to the calling method\nblockName = Proc.new do |n|\n    do_something_with_n\nend\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-18"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// Normal functions\npublic static void myFunction() {\n  do_something;\n}\n\n\n// Normal function with parameters\npublic static void myFunction(dataType a){\n  do_something_with_a\n}\n\n\n// Normal function with return value (change void to data type to return)\npublic static int sum(int a){\n  return a + 1;\n}\n\n\n// lamda\n// store returning function\ninterface StringFunction {\n  String run(String str);\n}\n\nStringFunction strFunc = (s) -> s;\nstrFunc.run("test");  // "test"\n\n// store non returning function\n// import java.util.ArrayList;\n// import java.util.function.Consumer;  // must import\nArrayList<Integer> numbers = new ArrayList<Integer>();\nnumbers.add(5);\nConsumer<Integer> method = (n) -> { System.out.println(n); };\nnumbers.forEach( method );\n\n// using inside forEach loop\nnumbers.forEach( (n) -> { System.out.println(n); } );\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "method overloading")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "static double addValues(String s1, String s2) {\n  double d1 = Double.parseDouble(s1);\n  double d2 = Double.parseDouble(s2);\n  double result = d1 + d2;\n  return result;\n}\n\nstatic double addValues(String s1, String s2, String s3) {\n  double d1 = Double.parseDouble(s1);\n  double d2 = Double.parseDouble(s2);\n  double d3 = Double.parseDouble(s3);\n  double result = d1 + d2 + d3;\n  return result;\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-32"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// Normal functions\npublic static void MyFunction() {\n  do_something\n}\n\n\n// Normal function with parameters\npublic static void MyFunction(dataType a){\n  do_something_with_a\n}\n\n\n// Normal function with default parameters\npublic static void MyFunction(dataType a=value) {\n  do_something_with_a;\n}\n\n\n// Normal function with return value (change void to data type to return)\npublic static int Sum(int a){\n  return a + 1;\n}\n\n\n// Lambda  expression\npublic static void MyFunction() => do_something;\n\n\n// Lambda expression with parameters\npublic static void MyFunction(dataType a) => do_something_with_a;\n\n// () not required if single input, use {} if have multi-lines\nvar MyFunction = (dataType a) => do_something_with_a;\nvar MyFunction = dataType a => do_something_with_a;\nvar MyFunction = (dataType a) => { do_something_with_a; };\nvar MyFunction = dataType a => { do_something_with_a; };\n\n// dataType not required if data type is obvious\nvar MyFunction = a => do_something_with_a;\nvar MyFunction = a => { do_something_with_a; };\n\n// Lambda expression with default parameters\npublic static void MyFunction(dataType a=someValue) => do_something_with_a;\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-33"}, "c++"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Function Signature: return type | name of function | (parameters)"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Signature / prototype",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Normally add these in a .hpp or .h file then #include it into the .cpp file"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "public void functionName();\n\npublic void functionName2(int arg1, int arg2);\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Function definition")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "void functionName()\n{\n   // do something\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Function prototype")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// prototype\nint sumTwoNumbers(int a, int b);\n\nint main()\n{\n   int result = sumTwoNumbers(2, 2);\n   return 0;\n}\n\n// function definition\nint sumTwoNumbers(int a, int b)\n{\n   return a + b;\n}\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)(
            "h2",
            {id: "higher-order-functions"},
            "Higher order functions"
          ),
          (0, i.kt)("h3", {id: "python-2-5"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# Map: applies a given function to each item of an iterable (list, tuple etc.) and returns a list of the results\n# map(function, iterable, ...)\narr = [1, 2, 3]\ndef add(n):\n    return n + n\nmap(add, arr)  # return <map object at 0x10473e518>\nlist(map(add, arr))  # return [2, 4, 6]\n\n\n# Filter: filter and return a new array based on the conditions\n# filter(function, iterable)\narr = [1, 2, 3]\ndef condition(n):\n    if n < 3:\n        return n\nfilter(condition, arr)  # return <filter object at 0x10473e550>\nlist(filter(condition, arr))  # return [1, 2]\n\n\n# Reduce: executes a function on each element, resulting in a single output value\narr = [1, 2, 3]\ndef compute(n, m):\n    return n * m\nreduce(compute, arr)  # return 6\n\n# Zip: combines 2 arrays or tuples into an array of tuples\narr1 = [1, 2, 3]\narr2 = [\"1\", \"2\", \"3\"]\nzpp(arr1, arr2)  # [(1, '1'), (2, '2'), (3, '3')]\n"
            )
          ),
          (0, i.kt)("h3", {id: "python-3-5"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# Reduce: executes a function on each element, resulting in a single output value\narr = [1, 2, 3]\ndef compute(n, m):\n    return n * m\nfrom functools import reduce  # requires import in python 3\nreduce(compute, arr)  # return 6\n\n# Zip: must call a list() or tuple() on the zip method\nlist(zip(s, t))  # [(1, '1'), (2, '2'), (3, '3')]\ntuple(zip(s, t)) # ((1, '1'), (2, '2'), (3, '3'))\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-13"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Map: create a new array from a current array\n// array.map(element, currentIndex, originalArray)\nconst companies = [\n    {name: "company1", category: "industry1"},\n    {name: "company2", category: "industry2"}\n];\n// callback method\nconst companyNames = companies.map(function(company) {\n    return company.name;\n}\n// arrow function method\nconst companynames = companies.map((company) => company.name);\n\n\n// Filter: creates a new array with all elements that pass the condition implemented by the provided function\n// array.filter(element, currentIndex, originalArray)\nconst ages = [age1, age2, age3];\n// callback method\nconst canDrink = ages.filter(function(age) {\n    if (condition) {\n        return true;\n    }\n}\n// arrow function method\nconst canDrink = ages.filter(age => condition);\n\n\n// Reduce: executes a function on each element of the array, resulting in a single output value\n// array.reduce(function(accumulator, currentValue){ do_something }, initialValue)\nlet arr = [1, 2, 3];\n// no initial value\narr.reduce(function(accumulator, currentValue) {\n    return accumulator + currentValue;\n});  // returns a value of 6\n/*\naccumulator | currentValue | returned value\n    1       |       2      |        3\n    3       |       3      |        6\n*/\n\n// initial value included\narr.reduce(function(accumulator, currentValue) {\n    return accumulator + currentValue;\n}, 10);  // returns a value of 16\n/*\naccumulator | currentValue | returned value\n    10      |       1      |        11\n    11      |       2      |        13\n    13      |       3      |        16\n*/\n\n\n// Sort: sorts the elements of an array in place and returns the sorted array\n// array.sort(compareFunction)\n// if compareFunction is not used, all sorted elements will be sorted based on it\'s string value\nlet array = ["1", 30, 4, 21, 100000];\narray.sort();  // returns ["1", 100000, 21, 30, 4]\n\n// sort in ascending order\narray.sort((a, b) => a - b);  // returns ["1", 4, 21, 30, 100000]\n\n// sort in descending order\narray.sort((a, b) => b - a);  // returns [100000, 30, 21, 4, "1"]\n\n// Zip is not available in Javascript, use Maps instead\nconst arr1 = [1, 2, 3];\nconst arr2 = ["1", "2", "3"];\nfunction zip(arrays) {\n    return arrays[0].map(function(_,i){\n        return arrays.map(function(array){return array[i]})\n    });\n}\nzip([arr1, arr2]);  // [[1, \'1\'], [2, \'2\'], [3, \'3\']]\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-18"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "# Zip: combine 2 arrays\narr1 = [1, 2, 3]\narr2 = [\"1\", \"2\", \"3\"]\nputs arr1.zip(arr2)  # [[1, '1'], [2, '2'], [3, '3']]\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-19"}, "java"),
          (0, i.kt)("h3", {id: "c-34"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "hash-tables"}, "Hash Tables"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Hash Tables, Dictionaries, Objects"
            )
          ),
          (0, i.kt)("h3", {id: "python-2--3-13"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Create dictionary\nnewDict = {}\n\n# Create dictionary and assign key value pairs\n# method 1\nnewDict = {\n    "key1": "value1",\n    "key2": 123,\n    "key3": True,\n    "key4": myFunction\n}\n# method 2\nnewDict = dict(key1="value1", key2="value2")\n\n# Add or reassign key value pair\nnewDict["Key"] = "Value"  # method 1\nnewDict.update({"key": "value"})  # method 2\n\n# Set multiple keys with a similar value\nnewKeys = ("key1", "key2", "key3")\nnewValue = value\nnewDict = dict.fromkeys(newKeys, newValue)\n\n# Return value of the item with the specified key\n# If the key does not exist, insert the key, with the specified value\nnewVariable = newDict.setdefault("key", "newValue")\n\n# Get value\nnewDict["key"]  # method 1 # return KeyError if key does not exist\nnewDict.get("key")  # method 2 # return None if key does not exist\n\n# Get list of keys\nlist(newDict.keys())\n\n# Get list of values\nlist(newDict.values())\n\n# Get list of key value tuples\nlist(newDict.items())\n\n# Loop through Dictionary and get each key\n# method 1\nfor key in newDict:\n    print(key)\n# method 2\nfor key in newDict.keys():\n    print(key)\n    \n# Loop through Dictionary and get each value\n# method 1\nfor key in newDict:\n    print(newDict[key])\n# method 2\nfor value in newDict.values():\n    print(value)\n    \n# Loop through both keys and values\nfor key, value in newDict.items():\n    print(key, value)\n    \n# Check if key exists\nif "key" in newDict:\n    return True\n    \n# Get dictionary length\nlen(newDict)\n\n# Copy dictionary\n# cannot copy just from dict2 = dict1 as it is just referencing to dict1\n# method 1\nnewDict2 = newDict.copy()\n# method 2\nnewDict2 = dict(newDict)\n\n# Remove items\nnewDict.pop("key")  # method 1\ndel newDict["key1"]  # method 2\n\n# Remove last inserted item\nnewDict.popitem()\n\n# Delete entire dictionary\ndel newDict  # method 1\nnewDict.clear()  # method 2\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-6"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Objects\n// Create object\nlet newObj = new Object();  // method 1\nlet newObj = {};  // method 2, literal notation\n\n// Create object and assign values\n// keys can only be strings without quotes\nlet newObj = {\n    key1: "stringValue",\n    key2: 123,\n    key3: true,\n    key4: ["array", "array2"],\n    key5: {anotherKey: anotherValue},\n    key6: function(arg){return do_something_with_arg}\n};\n\n// dynamic key\nlet myKey = "emotion"\nlet newObj2 = {\n  [myKey]: "Happy",\n};  // key = "emotion"\n\n// Creates a new object, using an existing object as the prototype of the newly created object\n// method 1\nnewObj2 = Object.create(newObj);  // copies the prototype of newObj, key value pairs will become inherited\nlet newObj2pt2 = Object.create(null, {  // creates a new object but without default object properties, default object properties can\'t be used\n  key1: value,\n});\nlet newObj2pt3 = Object.create(null, {  // set object configuration\n  key: {\n    value: "something",\n    writable: true,\n    enumerable: true,\n    configurable: true,\n  }\n});\nlet newObj2pt4 = Object.create(Object.prototype, {  // creates a new object with all default object properties\n  key: {\n    value: "something",\n    writable: true,\n    enumerable: true,\n    configurable: true,\n  }\n});\n// method 2: merge 2 object together\nnewObj2 = Object.assign(oldObj, newObj);\n\n// Assign and Reassign values\nnewObj["key1"] = "newString";  // method 1, bracket notation\nnewObj.key1 = "newString2";  // method 2, dot notation\n\n// Copy the values of all enumerable own properties from one or more source objects to a target object\n// return the target object\nconst target = { a: 1, b: 2 };\nconst source = { b: 4, c: 5 };\nconst newObj = Object.assign(target, source);  // newObj, target = { a: 1, b: 4, c: 5 }\n\n// Copy without mutating the target source\nconst target2 = { a: 1, b: 2 };\nconst source2 = { b: 4, c: 5 };\nconst newObj2 = Object.assign({}, target2, source2);  // newObj2 = { a: 1, b: 4, c: 5 }, target2 = { a: 1, b: 2 }\n\n// Get value\nnewObj["key1"];  // method 1\nnewObj.key1;  // method 2\n\n// Get an array of keys\nObject.keys(newObj);\n\n// Get an array of values\nObject.values(newObj);\n\n// Loop through all key value pairs\n// must be (key, value)\nfor (let [key, value] of Object.entries(newObj)) {console.log(`Key: ${key}, Value: ${value}`);}\n\n// Defines a new property directly on an object, or modifies an existing property on an object, and returns the object\n// Object.defineProperty(obj, propertyName, descriptor)\nObject.defineProperty(newObj, "property1", {\n  value: "123",\n  writable: true,\n  enumerable: true,\n  configurable: false,\n});  // newObj.property1 = 123\n\nlet descriptor = Object.getOwnPropertyDescriptor(newObj, "property1");\nconsole.log(descriptor);\n/*\n{\n  value: 123,\n  writable: true,  // if false cannot reassign new primitive values, but can reassign values of an object\n  enumerable: true,  // if false will skip this property when looping\n  configurable: true,  // if false cannot delete and redefine property (except writable); once set to false, cannot change back to true\n}\n*/\n\n// Seals an object\n// prevent addition of properties, however defined properties still can be changed\nObject.seal(newObj);\n\n// Freeze an object\n// makes the object immutable, meaning no change to defined property allowed, unless they are objects.\nObject.freeze(newObj);\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-4"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Merge 2 objects\nconst target = { a: 1, b: 2 };\nconst source = { b: 4, c: 5 };\nconst newObj = {...target, ...source};  // { a: 1, b: 4, c: 5 }\n\n// Maps or Hash tables\n// Create new Map or hash table\nconst newDict = new Map();\n\n// Add key value pair data\n// keys does not need to be strings, can be numbers, booleans, etc.\nnewDict.set(key1, value1);\nnewDict.set(key2, value2);\n\n// Get all keys\nnewDict.keys();\n\n// Get all values\nnewDict.values();\n\n// Iterate over Maps to get each key\nfor (let key of newDict.keys()) {\n    console.log(key);\n}\n\n// Iterate over Maps to get each value\nfor (let value of newDict.values()) {\n    console.log(value);\n}\n\n// Get value\nnewDict.get(key);\n\n// Get hash table size\nnewDict.size;\n\n// Check if key value pair exist with key input\nnewDict.has(key);\n\n// Loop through all key value pairs\n// method 1, must be (value, key)\nnewDict.forEach((value, key) => console.log(`Key: ${key}, Value: ${value}`));\n// method 2, must be (key, value)\nfor (let [key, value] of newDict.entries()) {console.log(`Key: ${key}, Value: ${value}`);}\n\n// Delete key value pair\nnewDict.delete(key);\n// Delete all key value pairs\nnewDict.clear()\n\n\n// WeakMap: similar to Map, but all keys must be objects\n// Create new weak map\nconst newDict = new WeakMap();\n\n// Add key value pair data\n// key MUST be and Object\nnewDict.set(obj1, value1);\nnewDict.set(obj2, value2);\n\n// Get value\nnewDict.get(obj);\n\n// Delete key value pair\nnewDict.delete(obj);\n\n// Check if key value pair exist with key input\nnewDict.has(obj);\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-7"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              '// object is a type that represents the non-primitive type, i.e. anything that is not number, string, boolean, symbol, null, or undefined\nlet objName: object = {\n  key1: 123,\n  key2: "string"\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-19"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# Hash literal notation, OLD SYNTAX\nhash_name = {\n    key1 => value1,\n    "name" => "myName",\n    "age" => 123,\n    "hungry?" => true,\n    111 => "one one one",\n    false => "weird"\n}\n\n# NEW SYNTAX\n# keys are symbols in this case\nhash_name = {\n    key1: value1,\n    name: "myName",\n    age: 123,\n    hungry: true,\n}\n\n# Hash constructor notation\n# Create a new empty hash\nhash_name = Hash.new\n\n\n# Adding to a Hash\nhash_name["newKey"] = "new value"\n\n\n# Accessing hash value\nhash_name["hungry"]  # true\n\n\n# Delete a key value pair\nhash_name.delete(key)\n\n\n# Update hash (duplicates will be removed)\nhash_name.update(hash_name2)\n\n\n# Merge hash (duplicates will not be removed)\nhash_name.merge(hash_name2)\n\n\n# Check if key exist\nhash_name.has_key?("keyName")\n\n\n# Check if value exit\nhash_name.has_value?("valueName")\n\n\n# Check if hash is empty\nhash_name.empty?\n\n\n# Get hash size\nhash_name.size\n\n\n# Iterating over Hashes\nhash_name.each do [keyName, valueName|\n    do_something_with_keyName_and_valueName\nend\n\n\n# sort_by: Maps Hash into an array and then sort them via values in ascending order\ncolors = {\n    "blue" => 3,\n    "green" => 1,\n    "red" => 2\n}\ncolors = colors.sort_by do |color, count|\n    count\nend\nputs colors  # [["green", 1], ["red", 2], ["blue", 3]]\n\n\n# nil does not display anything\nmyHash = Hash.new()\nputs myHash  # {}\nputs myHash["nonexistent key"] # display nothing\n# Replace nil and Set default value when key does not exist\nmyHash = Hash.new("no such key")\nputs myHash  # {}\nputs myHash["nonexistent key"]  # "no such key"\n\n\n# Symbols used in Hashes\nmyHash = {\n    :cat => "meow",\n    :number => 123\n}\n\n\n# Select method: Grab specific value(s) from a hash with key or value\ngrades = {\n    alice: 100,\n    bob: 92,\n    chris: 95,\n    dave: 97\n}\nnewHash = grades.select { |nameKey, gradeValue| gradeValue < 97 }  # Grab values with value\nputs newHash  # { :bob => 92, :chris => 95 }\n\nnewHash = grades.select { |nameKey, gradeValue| nameKey == :alice }  # Grab values with key\nputs newHash  # { :alice => 100 }\n\n\n# Loop all keys\ngrades.each_key { |key| print key, " " }  # alice bob chris dave\n\n# Loop all values\ngrades.each_value { |value| print value, " " }  # 100 92 95 97\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-20"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// Map: it is an interface used to store data in key-value pair\n// import java.util.Map;  // must import\n\n// HashMap: it is the implementation class of the Map interface\n// import java.util.HashMap;  // must import\n\n// declaration\nMap<String, String> map = new HashMap<>();\n\n// add key value pair\nmap.put("jp", "Japan");\nmap.put("sg", "Singapore");\nmap.put("usa", "United States");\nSystem.out.println(map);  // { jp=Japan, sg=Singapore, usa=United States }\n\n// get value with key\nmap.get("jp");  // "Japan"\n\n// remove key value pair with key\nmap.remove("sg");  // { jp=Japan, usa=United States }\n\n// get a set of keys\n// import java.util.Set;  // must import\nSet<String> keys = map.keySet();  // [ usa, jp ]\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-35"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// method 1 (can be used within a method)\nSystem.Collections.Generic.Dictionary<string, string> _dictionary = new System.Collections.Generic.Dictionary<string, string>();  // declaration\n_dictionary["name"] = "xyz" // assigning key value pairs\nSystem.Console.WriteLine(_dictionary["name"]);  // getting value with key\n\n\n// method 2: indexer (need to create a class)\npublic class Person {\n  private readonly System.Collections.Generic.Dictionary<string, string> _dictionary = new System.Collections.Generic.Dictionary<string, string>();\n \n  public string this[string key] {  // this keyword is required\n    get { return _dictionary[key]; }\n    set { _dictionary[key] = value; }  // value is a keyword\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Person p = new Person();\n    p["name"] = "xyz";\n    System.Console.WriteLine(p["name"]);  // "xyz"\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-36"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "destructuring"}, "Destructuring"),
          (0, i.kt)("h3", {id: "python-2--3-14"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Tuples\nxVariable, yVariable = (xValue, yValue)\n\n# Arrays\nxVariable, yVariable = [xValue, yValue]\n\n# String\nxVariable, yVariable = "xy"\n\n# Dictionaries\nxKey, yKey = {"xKey": xValue, "yKey": yValue}\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-5"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Arrays\nconst [xVariable, yVariable] = [xValue, yValue];\n\n// Objects\nconst obj = {\n    xKey: xValue,\n    yKey: yValue\n}\n// declaring variables\nconst {xKey, yKey} = obj;  // variable names must be the same as object key names\n\n// assigning different variable names\nconst {xKey: xNewKey, yKey: yNewKey} = obj;\n\n// Set default values if extracted variables does not exist\nconst { xKey, yKey, zKey="test" } = obj;\n\n// Use optional chaining for async code where data type will change\nlet data = null;  // value before fetch\nconst { a="", b="" } = data?.[0] || [];  // checks if data is undefined or null, then checks if there is value inside array\nconsole.log(a);  // ""\n\ndata = [{ a: "hello", b: "world" }];  // value after fetch\nconst { a="", b="" } = data?.[0] || [];  // checks if data is undefined or null, then checks if there is value inside array\nconsole.log(a);  // "hello"\n'
            )
          ),
          (0, i.kt)("h3", {id: "typescript-8"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              "type myFunctionProps = {\n  arg1: string,\n  [k: string]: any,  // to enable ...rest\n};\n\nfunction myFunction({arg1, ...rest}: myFunctionProps) {\n  let argsObj = rest;  // args is an object of arguments\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-20"}, "ruby"),
          (0, i.kt)("h3", {id: "java-21"}, "java"),
          (0, i.kt)("h3", {id: "c-37"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "spread-operator"}, "Spread Operator"),
          (0, i.kt)("h3", {id: "python-2--3-15"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# *args (splat)\n# Takes an array and transform (unpacks) it into single values\n# Must utitlize all of the element of the array to work\nmyFunction(a, b, c)  # normal method\nmyFunction(*Tuple)  # (a, b, c)\nmyFunction(*List)  # [a, b, c]\nmyFunction(*String)  # "abc"\nmyFunction(*Dict)  # {"a": value1, "b": value2}  only utilize the keys\n\n# **kwargs\nmyFunction(**Dict) # {"a": value1, "b": value2}  utilize both keys and values\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-6"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Takes an array and transform (unpacks) it into single values\n// Must utitlize all of the element of the array to work\nlet arr = [a, b, c];\nmyFunction(a, b, c);  // normal method\nmyFunction.apply(null, arr)  // using the apply() method\nmyFunction(...arr);  // spread method\n\n// join multiple arrays together\nlet arr1 = [a, b, c];\nlet arr2 = [d, e, f];\nlet totalArr = arr1.concat(arr2);  // concat method\nlet totalArr = [...arr1, ...arr2];\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-21"}, "ruby"),
          (0, i.kt)("h3", {id: "java-22"}, "java"),
          (0, i.kt)("h3", {id: "c-38"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "rest-parameters"}, "Rest parameters"),
          (0, i.kt)("h3", {id: "python-2--3-16"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# *args\n# Receive a couple of single values and transform them into an array\ndef myFunction(*args):\n    newArr = args  # args is an array of arugments\n\n# **kwargs\n# Receive a couple of keys and values and transform them into a dictionary\ndef myFunction(**kwargs):\n    newDict = kwargs  # kwargs is a dictionary of keys and values\n# calling example\nmyFunction(var1=value1, var2=value2)\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-7"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// Receive a couple of single values and transform them into an array\nfunction myFunction(...args) {\n    let argsArr = args;  // args is an array of arguments\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-22"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "# *parameter\n# Receive a couple of single values and transform them into an array\ndef myFunction(*parameter):\n    newArr = args  # args is an array of arugments\nend\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-23"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "static double myFunction(String ... args) {\n  String[] argsArr = args;  // args is an array of arguments\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-39"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// hard coded method\npublic class Calculator1 {\n  public in Add(int n1, int n2){\n    return n1 + n2;\n  }\n  public in Add(int n1, int n2, int n3){\n    return n1 + n2 + n3;\n  }\n}\n\n\n// dynamic method\npublic class Calculator2 {\n  public in Add(int[] numbers){\n    int result = 0;\n    foreach (int num in numbers)\n      result += num\n    return result;\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Calculator cal = new Calculator2();\n    int result = cal.Add(new int[]{1, 2});  // need to initialize a new array\n  }\n}\n\n\n// Using Params Modifier\npublic class Calculator3 {\n  public in Add(params int[] numbers){  // add params keyword\n    int result = 0;\n    foreach (int num in numbers)\n      result += num\n    return result;\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Calculator cal = new Calculator3();\n    int result = cal.Add(new int[]{1, 2});  // method 1: initialize a new array\n    int result2 = cal.Add(1, 2);  // method 2: only possible if used params keyword\n  }\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-40"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "class"}, "Class"),
          (0, i.kt)("h3", {id: "python-2-6"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "class MathClass:\n    def __init__(self, arg1, arg2):\n        self.arg1 = arg1\n        self.arg2 = arg2\n        self.total = self.outterAdd(arg1, arg2)\n        \n    def innerAdd(self, arg3):\n        return self.arg1 + self.arg2 + arg3\n        \n    # Static method knows nothing about the class and just deals with the parameters\n    def outterAdd(number1, number2):\n        return number1 + number2\n    outterAdd = staticmethod(outterAdd)\n    \n    \ntest = MathClass(2, 4)\nprint (test.total)  # 6\nprint (test.innerAdd(2))  # 8\nprint (test.outterAdd(3, 7))  # 10\nprint (MathClass.outterAdd(4, 5)  # 9\n"
            )
          ),
          (0, i.kt)("h3", {id: "python-3-6"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'class MathClass:\n    def __init__(self, arg1, arg2):\n        self.arg1 = arg1\n        self.arg2 = arg2\n        self.total = self.outterAdd(arg1, arg2)\n        \n    def innerAdd(self, arg3):\n        return self.arg1 + self.arg2 + arg3\n        \n    # Static method knows nothing about the class and just deals with the parameters\n    @staticmethod\n    def outterAdd(number1, number2):\n        return number1 + number2\n    \n    \ntest = MathClass(2, 4)\nprint(test.total)  # 6\nprint(test.innerAdd(2))  # 8\nprint(test.outterAdd(3, 7))  # 10\nprint(MathClass.outterAdd(4, 5))  # 9\n\n\n# Using classmethod: method 1\nclass Person:\n    name = "Default name"\n    \n    @classmethod\n    def change_name(clas, new_name):\n        cls.name = new_name\n        \n        \nperson1 = Person()\nprint(person1.name)  # Default name\nperson1.change_name("New name")\nprint(person1.name)  # New name\n\n\n# Using classmethod: method 2\nclass Person2:\n    def __init__(self, name):\n        self.name = name\n    \n    @classmethod\n    def use_default_name(cls):\n        return cls("Default name")\n        \n     \nperson2 = Person2("My name")\nprint(person2.name)  # My name\nperson3 = Person2.use_default_name()\nprint(person3.name)  # Default name\n\n\n# Inheritance\nclass Employee:  # parent\n    raise_amt = 1.04\n    \n    def __init__(self, first, last, pay):\n        self.first = first\n        self.last = last\n        self.pay = pay\n        \n    def apply_raise(self):\n        self.pay = int(self.pay * self.raise_amt)\n\n\nclass Developer(Employee):  # child\n    raise_amt = 1.1\n    \n    def __init__(self, first, last, pay, prog_lang):\n        super().__init__(first, last, pay)  # method 1: implement parent class init method\n        Employee.__init__(self, first, last, pay)  # method 2: implement parent class init method\n        self.prog_lang = prog_lang\n\n\ndev = Developer("abc", "xyz", 5000, "Python")\nprint(dev.pay)  # 5000\ndev.apply_raise()\nprint(dev.pay)  # 5500\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "python magic method guide",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "https://rszalski.github.io/magicmethods/",
                    },
                    "https://rszalski.github.io/magicmethods/"
                  )
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-7"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// method 1\nvar MathClass = {\n  arg1: 2,\n  arg2: 0,\n  \n  get getTotal() {\n    return this.arg1 + this.arg2;\n  },\n  \n  set getTotal(arg2) {  // can only have 1 parameter\n    this.arg2 = arg2;\n  },\n}\n\nMathClass.getTotal; // 2\nMathClass.getTotal = 4;\nMathClass.getTotal; // 6\n\n// method 2\n// Constructor\nvar MathClass = function(arg1) {\n  this.arg1 = arg1;\n  this.arg2 = 0;\n}\n\n// Instantiation\nvar test = new MathClass(2);\n\n// Add method\nMathClass.prototype.innerAdd = function(arg3) {\n  return this.arg1 + this.arg2 + arg3;\n}\n\ntest.innerAdd(4);  // 6\n\n// Add getter and setter\nObject.defineProperty(MathClass.prototype, "getTotal", {\n  get: function() {\n    return this.arg1 + this.arg2;\n  },\n  set: function(arg2) {  // can only have 1 parameter\n    this.arg2 = arg2;\n  }\n});\n\nvar total = new MathClass(2);\ntotal.getTotal;  // 2\ntotal.getTotal = 4;\ntotal.getTotal;  // 6\n\n\n// inheritance\nfunction Employee(first, last, pay) {\n  this.raiseAmt = 1.04;\n  this.first = first;\n  this.last = last;\n  this.pay = pay;\n}\n\nEmployee.prototype.applyRaise = function() {\n  this.pay = parseInt(this.pay * this.raiseAmt);\n}\n\nfunction Developer(first, last, pay, progLang) {\n  Employee.call(this, first, last, pay);\n  this.raiseAmt = 1.1;\n  this.progLang = progLang;\n}\n\nDeveloper.prototype = Object.create(Employee.prototype);\n\nDeveloper.prototype.constructor = Developer;\n\nconst dev = new Developer("abc", "xyz", 5000, "Javascript")\nconsole.log(dev.pay)  // 5000\ndev.applyRaise()\nconsole.log(dev.pay)  // 5500\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-8"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Case 1: normal javascript way\nclass MathClass {\n  #privateVariable  // required if want to declare private variable\n  \n  constructor(arg1, arg2) {\n    this.arg1 = arg1;\n    this.arg2 = arg2;\n    this.#privateVariable = "this is a real private variable";  // cannot be accessed directly\n    this.total = this.constructor.outterAdd(arg1, arg2);\n  }\n  \n  innerAdd(arg3) {\n    return this.arg1 + this.arg2 + arg3;\n  }\n  \n  // Static method knows nothing about the class and just deals with the parameters\n  static outterAdd(number1, number2) {\n    return number1 + number2;\n  }\n  \n  get privateVariable() {\n    return this.#privateVariable;\n  }\n  \n  set privateVariable(newValue) {  // can only have 1 parameter\n    this.#privateVariable = newValue;\n  }\n}\n\nconst test = new MathClass(2, 4);\nconsole.log(test.total);  // 6\nconsole.log(test.innerAdd(2));  // 8\nconsole.log(test.constructor.outterAdd(3, 7));  // 10\nconsole.log(MathClass.outterAdd(4, 5));  // 9\n\nconsole.log(test.privateVariable);  // "this is a real private variable"\ntest.privateVariable = "changed private variable value";\nconsole.log(test.privateVariable);  // "changed private variable value"\n\n// Case 2: event handlers in React\nclass MathClass {\n  constructor() {\n    this.arg1 = 2;\n    this.arg2 = 4;\n    this.innerAdd = this.innerAdd.bind(this);  // this is required to prevent TypeError\n  }\n  \n  innerAdd(arg3) {\n    return this.arg1 + this.arg2 + arg3;\n  }\n}\nconst test = new MathClass();\nconsole.log(test.innerAdd(2));  // 8\n\n\n// Inheritance\nclass Employee {  // parent\n  raiseAmt = 1.04;\n    \n  constructor(first, last, pay) {\n    this.first = first;\n    this.last = last;     \n    this.pay = pay;\n  }\n        \n  applyRaise() {\n    this.pay = parseInt(this.pay * this.raiseAmt);\n  }\n}\n\n\nclass Developer extends Employee {  // child\n  raiseAmt = 1.1;\n    \n  constructor(first, last, pay, progLang) {\n    super(first, last, pay)  // implement parent class init method\n    this.progLang = progLang;\n  }\n}\n\n\nconst dev = new Developer("abc", "xyz", 5000, "Javascript")\nconsole.log(dev.pay)  // 5000\ndev.applyRaise()\nconsole.log(dev.pay)  // 5500\n'
            )
          ),
          (0, i.kt)("h3", {id: "typescript-9"}, "typescript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              'class Person {\n  name: string;\n  age: number;\n  isWorking: boolean;\n}\n\nclass Page {\n  private content: string;\n\n  constructor(content: string = \'\') {\n    this.content = content;\n  }\n\n  public getContent(): string {\n    return this.content;\n  }\n}\n\nclass Book {\n  private pages: Page[] = [];\n\n  public add(page: Page): void {\n    this.pages.push(page);\n  }\n}\n\n\n// Interface\ninterface ClockInterface {\n  h: number;\n  m: number;\n  tick(): void;\n}\n\nclass DigitalClock implements ClockInterface {\n  h: number;  // must be declared to use "this.h"\n  m: number;\n\n  constructor(h: number, m: number) {\n    this.h = h;\n    this.m = m;\n  }\n\n  tick(): void {\n    console.log(`beep beep ${this.h}:${this.m}`);\n  }\n}\n\nclass AnalogClock implements ClockInterface {\n  h: number;\n  m: number;\n\n  constructor(h: number, m: number) {\n    this.h = h;\n    this.m = m;\n  }\n\n  tick(): void {\n    console.log(`tick tok ${this.h}:${this.m}`);\n  }\n}\n\nconst digital = new DigitalClock(12, 17);\nconst analog = new AnalogClock(7, 32)\ndigital.tick();\nanalog.tick();\n\n\n// abstract\nabstract class Department {\n  constructor(public name: string) {}\n\n  printName(): void {\n    console.log(`Department name: ${this.name}`);\n  }\n\n  abstract printMeeting(): void; // must be implemented in derived classes\n}\n\nclass AccountingDepartment extends Department {  // must use all and only methods declared in the abstract class\n  constructor() {\n    super("Accounting and Auditing"); // constructors in derived classes must call super()\n  }\n\n  printMeeting(): void {  // methods can be customized and modified\n    console.log("The Accounting Department meets each Monday at 10am.");\n  }\n\n  generateReports(): void {  // does not exist in the abstract class, will produce an error if run\n    console.log("Generating accounting reports...");\n  }\n}\n\nlet department: Department; // ok to create a reference to an abstract type\n//department = new Department(); // error: cannot create an instance of an abstract class\ndepartment = new AccountingDepartment(); // ok to create and assign a non-abstract subclass\ndepartment.printName();\ndepartment.printMeeting();\n//department.generateReports(); // error: method doesn\'t exist on declared abstract type\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-23"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "class variables (@@variableName) are like instance variables but belongs to the class"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "global variables ($variableName) must be declared with a $ symbol, if declared within the class"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              'class MathClass\n  $globalVariable = "global variable"\n  @@count = 0\n  \n  def initialize(arg1, arg2)  # constructor\n    @arg1 = arg1  # @ signify that it\'s an instance variable\n    @arg2 = arg2\n  end\n  \n  def innerAdd(arg3)\n    @@count += 1\n    return @arg1 + @arg2 + arg3\n  end\nend\n\n# Instantiation\ntest = MathClass.new(2, 4)\nputs test.innerAdd(2)  # 8\n\n\n# Setters & Getters\n# method 1\nclass Student\n  def initialize\n    puts "New student"\n  end\n  \n  def set_name(new_name)\n    @name = new_name\n  end\n  \n  def get_name\n    @name\n  end\nend\n\ntest = Student.new\ntest.set_name("Foo")\nputs test.get_name  # "Foo"\n\n# method 2\nclass Student2\n  attr_reader :name\n  attr_writer :name\nend\n\ntest2 = Student2.new\ntest2.name = "Foo2"\nputs test2.name  # "Foo2"\n\n# method 3\nclass Student3\n  attr_accessor :name\nend\n\ntest3 = Student3.new\ntest3.name = "Foo3"\nputs test3.name  # "Foo3"\n\n\n# Module: similar to classes, but cannot be instantiated\nmodule MathClass\n  def innerAdd(arg1, arg2)\n    return arg1 + arg2\n  end\nend\n\n# method 1\nclass CalculatorClass1\n  include MathClass  # use this to enable method override\n  \n  def innerAdd(arg1, arg2)\n    return arg1 + arg1\n  end\nend\n\ncalculate1 = CalculatorClass1.new\ncalculate1.innerAdd(1, 3)  # 2\n\n# method 2\nclass CalculatorClass2\n  prepend MathClass  # use this to disable method override\n  \n  def innerAdd(arg1, arg2)\n    return arg1 + arg1\n  end\nend\n\ncalculate2 = CalculatorClass2.new\ncalculate2.innerAdd(1, 3)  # 4\n\n\n# Inheritance\nclass CalculatorClass < MathClass\nend\n\ncalculate = CalculatorClass.new(2, 4)\nputs calculate.innerAdd(2)  # 8\n\n# override parent method\nclass CalculatorClass < MathClass\n  def innerAdd(arg3)\n    return (@arg1 + @arg2 + arg3) / 3\n  end\nend\n\ncalculate = CalculatorClass.new(2, 4)\nputs calculate.innerAdd(2)  # 2\n\n# use super to access parent\'s attributes or methods of an overridden class method\nclass CalculatorClass < MathClass\n  def innerAdd(arg3)\n    print super\n    print " "\n    return (@arg1 + @arg2 + arg3) / 3\n  end\nend\n\ncalculate = CalculatorClass.new(2, 4)\nputs calculate.innerAdd(2)  # 8 2\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-24"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "class",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "if not constructor has been defined, a constructor with no args will be auto generated"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "if a constructor with args has been defined, a constructor with no args will not be auto generated"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'public class Math {\n  public int arg1;\n  public int arg2;\n  public int total;\n  public static final String NAME = "Math";  // declaring a constant variable\n  \n  // constructor (must have the same name as class name, no return data type)\n  public Math(int arg1, int arg2) {\n    // this keyword is not a must, however, variable name must be different from the parameter\n    this.arg1 = arg1;\n    this.arg2 = arg2;\n    this.total = OuterAdd(arg1, arg2);\n  }\n  \n  public int InnerAdd(int arg3) {\n    return this.arg1 + this.arg2 + arg3;\n  }\n  \n  public static int OuterAdd(int number1, int number2) {\n    return number1 + number2;\n  }\n}\n\nclass MainClass {\n  public static void main(String[] args) {\n    Math test = new Math(2, 4);  // instantiation\n    // non-static variables or methods requires instantiation\n    System.out.println(test.total);  // 6\n    System.out.println(test.InnerAdd(2));  // 8\n    // static variables or methods does not requires instantiation\n    System.out.println(Math.OutterAdd(4, 5));  // 9\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "private key")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "public class Person {\n  private int age = 0;  // cannot be accessed other than within the class\n  \n  // age can only be modified with the setter method\n  public void setAge(int age) {\n    this.age = age;\n  }\n  \n  // age can only be retrieve with the getter method\n  public int getAge() {\n    return this.age;\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "protected key"),
              (0, i.kt)(
                "pre",
                {parentName: "li"},
                (0, i.kt)(
                  "code",
                  {parentName: "pre", className: "language-java"},
                  '// class with protected method\npackage p1;\n\n// Class A\npublic class A {\n  protected void display() {\n    System.out.println("test");\n  }\n}\n'
                )
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    "Calling protected function without extending the parent class"
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      "package p2;\n\n// import all classes in package p1\nimport p1.*;\n\nclass B {\n  public static void main(String args[]) {\n    B obj = new B();\n    // not be able to access the function \u201cdisplay\u201d since child class has not inherited its value from the main class\n    obj.display();  // throw an exception\n  }\n}\n"
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      'throw an error Exception in thread "main" java.lang.RuntimeException: Uncompilable source code - Erroneous sym type: p2.B.display'
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    "Accessing a protected class"
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'package p1;\n\n// Class A\nprotected class A {\n  void display()\n  {\n    System.out.println("test");\n  }\n}\n'
                    )
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      "package p2;\n\n// import all classes in package p1\nimport p1.*;\n\n// Class B is a subclass of A\nclass B extends A {\n    public static void main(String args[])\n    {\n        B obj = new B();\n        obj.display();  // throw an exception\n    }\n}\n"
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      'throw an error Exception in thread "main" java.lang.RuntimeException: Uncompilable source code - Erroneous sym type: p2.B.display'
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    "Accessing display function from the same package but different class"
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      "public class C {\n  public static void main(String args[]) {\n    A obj = new A();\n    obj.display();  // test\n  }\n}\n"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    "Accessing display function from a different package"
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      "package p2;\n\n// import all classes in package p1\nimport p1.*;\n\n// Class B is a subclass of A\nclass B extends A {\n  public static void main(String args[]) {\n    B obj = new B();\n    obj.display();  // test\n  }\n}\n"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    "Accessing a protected class by overriding to sub-class within same package"
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'public class C extends A {\n  // overridden function\n  protected void display() {\n    System.out.println("overridden");\n  }\n  \n  public static void main(String args[]) {\n    C obj1 = new C();\n    obj1.display();  // overridden\n  }\n}\n'
                    )
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("p", {parentName: "li"}, "Anonymous classes")
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import java.util.Scanner;\n\npublic class Calculator {\n  public static void main(String[] args) {\n    ClassName c = new ClassName();\n    c.calculate();\n  }\n  \n  // can be accessed from within the same class, subclasses of same packages,\n  // different classes of same packages, subclasses of different packages\n  protected void calculate() {\n    InputHelper helper = new InputHelper();\n    String s1 = helper.getInput("Please do something");\n  }\n  \n  // only Calculator class can use this\n  class InputHelper {\n    // can only be accessed from the same class\n    private String getInput(String prompt) {\n      System.out.println(prompt);\n      Scanner sc = new Scanner(System.in);\n      return sc.nextLine();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "inheritance")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// enum\npublic enum Names {\n  JOHN, PETER;\n}\n\n// parent / base / superclass\npublic class Person {\n  private int age;\n  private Names name;\n\n  public Person(int age, Names name) {\n    this.age = age;\n    this.name = name;\n  }\n\n  public void setAge(int age) {\n    this.age = age;\n  }\n\n  public int getAge() {\n    return this.age;\n  }\n\n  public Names getName() {\n    return this.name;\n  }\n  \n  public void whoAmI() {\n    System.out.println("I am a Person");\n  }\n}\n\n// Inheritance: child / derived / subclass\npublic class John extends Person {\n  public John() {\n    super(25, Names.JOHN);\n  }\n  \n  // Polymorphism: overriding the parent\'s method\n  @Override  // use this even if it is not required for 2 benefits: take adv of compiler check, easier to read\n  public void whoAmI() {\n    System.out.println("I a John");\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Person p = new Person(0, Names.JOHN);\n    p.whoAmI();  // "I am a Person\n    John j = new John();\n    j.setAge(25);\n    System.out.println(j.getAge());\n    System.out.println(j.getName());\n    j.whoAmI();  // "I am John"\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "interface",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is a contract that defines a set of methods with a particular signatures"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "any class that implement that interface must implement those methods"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// enum\npublic enum Names {\n  JOHN, PETER;\n}\n\n// interface: declaring of implementations are not required\n// declaring of implementations in Android might be required during instantiation\npublic interface Human {\n  public void setAge(int age);\n\n  public int getAge();\n\n  public Names getName();\n\n  public void whoAmI();\n}\n\n// class that implements an interface\n// if not all of the methods declared in the interface are implemented, an error will occur\n// additional methods not declared in the interface can be declared\npublic class Person implements Human {\n  private int age;\n  private Names name;\n\n  public Person(int age, Names name) {\n    this.age = age;\n    this.name = name;\n  }\n\n  @Override  // not required but better to be explicit\n  public void setAge(int age) {\n    this.age = age;\n  }\n\n  @Override\n  public int getAge() {\n    return this.age;\n  }\n\n  @Override\n  public Names getName() {\n    return this.name1;\n  }\n\n  @Override\n  public void whoAmI() {\n    System.out.println("I am a Person");\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "abstract",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "the ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "abstract"),
                  " keyword is added"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it can contain a mixture of fully implemented methods & abstract methods",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "abstract method is similar to a method in an interface",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "no implementation & only indicates method signature"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "any subclasses of an abstract method must implement that method"
                        )
                      )
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "cannot be instantiated directly, only their subclasses can be instantiated"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// enum\npublic enum Names {\n  JOHN, PETER;\n}\n\n// interface\npublic interface Human {\n  public void setAge(int age);\n\n  public int getAge();\n\n  public Names getName();\n\n  public void whoAmI();\n}\n\n// abstract parent / base / superclass\npublic abstract class Person implements Human {\n  private int age;\n  private Names name;\n\n  public Person(int age, Names name) {\n    this.age = age;\n    this.name = name;\n  }\n\n  @Override\n  public void setAge(int age) {\n    this.age = age;\n  }\n\n  @Override\n  public int getAge() {\n    return this.age;\n  }\n\n  @Override\n  public Names getName() {\n    return this.name1;\n  }\n\n  @Override\n  public void whoAmI() {\n    System.out.println("I am a Person");\n  }\n  \n  // this means that every subclass of this class must declare its own origin\n  public abstract String getOrigin();\n}\n\n// child / derived / subclass\npublic class John extends Person {\n  public John() {\n    super(25, Names.JOHN);\n  }\n  \n  @Override\n  public void whoAmI() {\n    System.out.println("I a John");\n  }\n  \n  @Override\n  public String getOrigin() {  // this must be declared here, else an error will occur\n    return "Japan";\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    // Person p = new Person(0, Names.JOHN);  // abstract classes cannot be instantiated and will cause an error\n    John j = new John();\n    j.setAge(25);\n    System.out.println(j.getAge());\n    System.out.println(j.getName());\n    j.whoAmI();  // "I am John"\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-41"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Struct vs Class",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "a",
                    {
                      parentName: "li",
                      href: "https://github.com/reshinto/Basic_technologies_revision/blob/master/c%23_summary.md#classes-vs-structs",
                    },
                    "https://github.com/reshinto/Basic_technologies_revision/blob/master/c%23_summary.md#classes-vs-structs"
                  )
                )
              )
            ),
            (0, i.kt)("li", {parentName: "ul"}, "Stuct (structures)")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public struct Math {\n  public int arg1;\n  public int arg2;\n  public int total;\n  \n  // constructor (must have the same name as class name, must have parameters)\n  public Math(int arg1, int arg2) {\n    // this keyword is not a must, however, variable name must be different from the parameter\n    this.arg1 = arg1;\n    this.arg2 = arg2;\n    this.total = OuterAdd(arg1, arg2);\n  }\n  \n  public int InnerAdd(int arg3) {\n    return this.arg1 + this.arg2 + arg3;\n  }\n  \n  public static int OuterAdd(int number1, int number2) {\n    return number1 + number2;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Math test = new Math(2, 4);\n    System.Console.WriteLine(test.total);  // 6\n    System.Console.WriteLine(test.InnerAdd(2));  // 8\n    System.Console.WriteLine(Math.OutterAdd(4, 5));  // 9\n  }\n}\n"
            )
          ),
          (0, i.kt)("ul", null, (0, i.kt)("li", {parentName: "ul"}, "Class")),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class Math {\n  public int arg1;\n  public int arg2;\n  public int total;\n  \n  // constructor (must have the same name as class name, no return data type)\n  public Math(int arg1, int arg2) {\n    // this keyword is not a must, however, variable name must be different from the parameter\n    this.arg1 = arg1;\n    this.arg2 = arg2;\n    this.total = OuterAdd(arg1, arg2);\n  }\n  \n  public int InnerAdd(int arg3) {\n    return this.arg1 + this.arg2 + arg3;\n  }\n  \n  public static int OuterAdd(int number1, int number2) {\n    return number1 + number2;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Math test = new Math(2, 4);\n    System.Console.WriteLine(test.total);  // 6\n    System.Console.WriteLine(test.InnerAdd(2));  // 8\n    System.Console.WriteLine(Math.OutterAdd(4, 5));  // 9\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Inheritance")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Employee {  // parent\n  protected float raiseAmt = 1.04f;  // use protected to allow modification from other classes\n  protected string first;\n  protected string last;\n  public int pay;  // only public allows display of value externally\n    \n  public Employee(string first, string last, int pay) {\n    this.first = first;\n    this.last = last;     \n    this.pay = pay;\n  }\n        \n  public void applyRaise() {\n    this.pay = System.Convert.ToInt32(this.pay * this.raiseAmt);\n  }\n}\n\npublic class Developer : Employee {  // child\n  private string progLang;\n    \n  public Developer(string first, string last, int pay, string progLang) : base(first, last, pay) { // base initiates the parent\'s constructor\n    raiseAmt = 1.1f;  // this will modifiy the base variable value in the parent class\n    this.progLang = progLang;\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args){\n    Developer developer = new Developer("abc", "xyz", 5000, "c#");\n    System.Console.WriteLine(developer.pay);  // 5000\n    developer.applyRaise();\n    System.Console.WriteLine(developer.pay);  // 5500\n    \n    \n    // Upcasting: reduce the methods avaliable to only the parent class\n    Empoyee employee = developer;\n    \n    // Downcasting: add methods avaliable to the child class\n    Developer developer2 = (Developer) employee;  // return an exception if cannot be converted\n    \n    // use "as" keyword if not sure about the runtime type of the object\n    Developer developer3 = employee as Developer;  // return a null if cannot be converted\n    if (developer3 != null) {\n      do_something;\n    }\n    \n    // use "is" keyword to check\n    if (employee is Developer) {\n      Developer developer4 = (Developer) e;\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Composition")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Employee {  // parent\n  protected float raiseAmt;\n  protected string first;\n  protected string last;\n  public int pay;\n\n  public Employee(string first, string last, int pay, float raiseAmt = 1.04f) {\n    this.first = first;\n    this.last = last;\n    this.pay = pay;\n    this.raiseAmt = raiseAmt;\n  }\n\n  public void applyRaise() {\n    this.pay = System.Convert.ToInt32(this.pay * this.raiseAmt);\n  }\n}\n\npublic class Developer {  // child\n  private string progLang;\n  public readonly Employee _employee;\n\n  public Developer(Employee employee, string progLang) {\n    _employee = employee;\n    this.progLang = progLang;\n  }\n}\n\nclass MainClass\n{\n  public static void Main(string[] args)\n  {\n    Developer d = new Developer(new Employee("abc", "xyz", 5000, 1.1f), "c#");\n    Console.WriteLine(d._employee.pay);  // 5000\n    d._employee.applyRaise();\n    Console.WriteLine(d._employee.pay);  // 5500\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Polymorphism")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Subject {\n  public string subjName;\n  \n  public virtual void Study() {\n    System.Console.WriteLine("Study all subjects");\n  }\n}\n\npublic class Math : Subject {\n  public string mathName;\n  \n  public override void Study() {\n    System.Console.WriteLine("Study Maths");\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Subject s = new Subject();\n    s.Study();  // "Study all subjects"\n    s.subjName;  // accessible\n    \n    // polymorphism\n    Subject sm = new Math();  // create a Subject object but override the Study method with the Math object\n    sm.Study();  // "Study Maths"\n    sm.subjName;  // only subjName is accessible, mathName is not\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Properties",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Properties is a kind of class member that is used for providing access to fields of a class"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "best practive to declare fields as private & create public properties to provide access to them"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "a property encapsulates a get and a set method"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// method 1\npublic class Person {\n  private string _name;\n  \n  public void SetName(string name) {\n    this._name = name;\n  }\n  \n  public string GetName() {\n    return _name;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Person p = new Person();\n    p.SetName("xyz");\n    System.WriteLine(p.GetName());  // "xyz"\n  }\n}\n\n\n// method 2: using setter and getter properties\npublic class Person {\n  private string _name;\n  \n  public string name {\n    get { return _name; }\n    set { _name = value; }  // value is a keyword\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Person p = new Person();\n    p.name = "xyz";\n    System.WriteLine(p.name);  // "xyz"\n  }\n}\n\n\n// method 3: using auto-implemented properties (does not work if logic is involved in get or set method, use method 2 instead)\npublic class Person {\n  public string name { get; set; }\n}\n\nclass MainClass {\n  public static void Main() {\n    Person p = new Person();\n    p.name = "xyz";\n    System.WriteLine(p.name);  // "xyz"\n  }\n}\n\n\n// method 4: using auto-implemented properties with private set method\npublic class Person {\n  public string name { get; private set; }  // if private keyword is used, need constructor to set\n  \n  public Person(string inputName) {  // constructor\n    name = inputName;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Person p = new Person("xyz");\n    System.WriteLine(p.name);  // "xyz"\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Interfaces",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is similar to a class but with abstract methods"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  'use of "interface" keyword is required'
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "does not have implementations (similar to abstract methods)"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "does not have access modifiers (eg: public, private, etc) in methods"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "interface is for building loosely-coupled extensible and testable apps",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "enable easy modifications with less or 0 impact on other components"
                    )
                  )
                ),
                (0, i.kt)("li", {parentName: "ul"}, "has polymorphism behavior")
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public interface IFeatureName {  // in .net all interfaces start with "I" convention\n  int Method1 { get; set; }\n  void Method2();\n  void Method3(int arg);\n}\n\npublic class ProductName : IFeatureName {  // similar to inheritance, but different because methods have to be declared\n  public int Method1 { get; set; }\n  \n  public void Method2() {\n    do_something;\n  }\n  \n  public void Method3(int arg) {\n    do_something\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    ProductName p = new ProductName();\n    if (p is IFeatureName) {  // check if IFeatureName exists\n      p.Method2();\n    }\n  }\n}\n\n\n// Multiple Interfaces\npublic interface IFeatureName1 {\n  void MethodName1();\n}\n\npublic interface IFeatureName2 {\n  void MethodName2();\n}\n\npublic class ProductName : IFeatureName1, IFeatureName2 {\n  public void MethodName1() {\n    do_something;\n  }\n  \n  public void MethodName2() {\n    do_something;\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-42"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              '// Math.h\nclass Math\n{\n   private:\n     int num1 = 2;\n     int num2;\n  \n   public:\n     Math();  // constructor\n     int sumOfValues();  // class method prototype\n};\n\n// Math.cpp\n#include <iostream>\n#include "Math.h"\n\nMath::Math()  // class constructor definition\n{\n   num2 = 5;\n}\n\nint Math::sumOfValues()  // class method definition\n{\n   return num1 + num2;\n}\n\nint main()\n{\n   Math math;\n   std::cout << math.sumOfValues();\n}\n'
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "importing-libraries"}, "Importing Libraries"),
          (0, i.kt)("h3", {id: "python-2--3-17"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# import module from libraries\nimport module_name  # must call module_name to use\n\n# Using alias\nimport module_name as mn  # must call mn to use\n\n# import class or function from a module\nfrom module_name import function_name\nfrom module_name import function_name1, function_name2  # multiple imports\n\n# Absoute imports within the same project (file extensions not required)\nfrom folder1 import module1  # example 1\nfrom folder1.module2 import function1  # example 2\nfrom folder2 import class1  # example 3\nfrom folder2.subfolder1.module5 import function2  # example 4\n\n\n# Relative imports (dot feature is similar to terminal)\nfrom .module1 import class1  # example 1\nfrom ..folder2 import function1 # example 2\nfrom . import class2 # example 3\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-8"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Before a module can be imported, it has to be exported first\nvar objectName.functionName = function();\nmodule.exports = objectName;  // can be an object of functions\n// alternative exports, import rules also change\nexports.moduleName = objectName;  // preset a name to the module\n\n// importing a module\n// moduleName can be path too\nvar mn = require("moduleName");  // must call mn to use\nvar {function1, function2} = require("moduleName");  // importing multiple functions from a module\n// import for alternative export\nvar mn = require("moduleName").moduleName;\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-9"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Before a module can be imported, it has to be exported first\nexport default objectName;  // exporting a single or nested functions or class\n\n// {} must be used when importing\n// method 1\nexport {functionName};  // export only 1 class or function (can be used for importing multiple functions or classes\n// method 2, can be function, class, objects, etc.\nexport const functionName = () => {do_something}\n\n\n// import class or function from module\nimport "moduleName";  // import module\nimport name from "moduleName";  // name can be anything if only have 1 export\nimport * as name from "moduleName";  // import multiple exports as name\nimport {function1} from "moduleName";  // import a function from a module of multiple exports\nimport {function1 as f1} from "moduleName";  // import a function with alias\nimport {function1, function2} from "moduleName";  // import multiple functions\nimport name, {function1} from "/modules/path/moduleName"; // function1 can be used directly or via name.function1\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-24"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# import another ruby file\nload "./anotherFile.rb"  # ./ not mandatory\n\n# import module files\nrequire_relative "moduleFileName"  # extension not required\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-25"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "// folder name that the current file is in, all other files that are in this folder can be imported without additional code\npackage com.example.demoapi.student;\n\n// importing of custom nested class\nimport com.example.demoapi.student.utilities.Helper;\n\nimport java.time.LocalDate;\nimport java.time.Period;\n\n// allows imports of all static members of the class\nimport static java.time.LocalDate.*;\n\nimport javax.persistence.Entity;\nimport javax.persistence.Id;\nimport javax.persistence.Table;\nimport javax.persistence.Transient;\n\n// method 2\nimport javax.persistence.*;  // allows imports of all classes\n\n@Entity\n@Table\npublic class Student {\n  @Id\n  private Long id;\n  @Transient\n  private Integer age;\n  \n  // using import java.time.LocalDate;\n  public Integer getAge1() {\n    return Period.between(dob, LocalDate.now()).getYears();\n  }\n  \n  // using import static java.time.LocalDate.*;\n  public Integer getAge() {\n    return Period.between(dob, now()).getYears();\n  }\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-43"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "type-conversions"}, "Type Conversions"),
          (0, i.kt)("h3", {id: "python-2--3-18"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# Convert to Integer, floats will round down\nint(type_to_convert)\n\n# Convert to floats\nfloat(type_to_convert)\n\n# Convert to strings\nstr(type_to_convert)\n\n# Convert to arrays\nlist(type_to_convert)  # cannot be a number\n\n# Convert to tuples\ntuple(type_to_convert)  # cannot be a number\n\n# Convert to sets\nset(type_to_convert)  # cannot be a number\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-14"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// number to string\nlet num = 123;\nlet str = String(num); // "123"\n\n// number to bigInt\nlet bigNum = BigInt(num);  // "123n"\n\n// bigInt to number\nlet bigInt = 1234n;\n// method 1\nnum = parseInt(bigInt);  // 1234\n// method 2\nnum = Number(bigInt);  // 1234\n\n// string to integer (remove all non numbers automatically)\nstr = "12 kg";\nnum = parseInt(str); // 12\n\n// string to float (remove all non number automatically)\nstr = "12.5 kg";\nnum = parseFloat(str) // 12.5\n\n//string to integer or float (return NaN if non number in string)\nstr = "12"\nnum = Number(str) // 12\nstr = 12.5";\nnum = Number(str) // 12.5\nstr = "12.5 kg";\nnum = Number(str); // NaN\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-25"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# String to symbol\n# method 1\n"string".to_sym  # :string\n# method 2\n"string".intern  # :string\n\n# Object to string\n:string.to_s  # "string"\n123.to_s  # "123"\n\n# String to integer\n"123".to_i  # 123\n\n# array of strings to array of integers\nstrings = ["1", "2", "3"]\nnums = strings.map(&:to_i)  # [1, 2, 3]\n\n# array of integers to array of strings\nnums = [1, 2, 3]\nstrings = nums.map(&:to_s)\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-26"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// implicit type conversion (small value to big only)\nbyte b = 1;\nint i = b;\nfloat f = i;\n\n// casting\n// explicit type conversion (can convert big value to small, however, data loss will occur)\nfloat pi = 3.14f;\nint intPi = (int) pi;  // 3\n\nint num = 256;\nbyte b = (byte) num; // 0 (surplus value will assigned if converting big data type value to smaller data type value)\n\nint num2 = 255;\nbyte b2 = (byte) num2; // 255\n\n// convert number to strings (user helper class)\nint i = 1234;\nString str = Integer.toString(i);  // "1234"\n\n// convert string to double\nString s = "423";\ndouble d1 = Double.parseDouble(s);\nSystem.out.println(d1);  // 423.0\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-44"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// implicit type conversion (small value to big only)\nbyte b = 1;\nint i = b;\nfloat f = i;\n\n\n// casting\n// explicit type conversion (can convert big value to small, however, data loss will occur)\nfloat pi = 3.14f;\nint intPi = (int) pi;  // 3\n\nint num = 256;\nbyte b = (byte) num; // 0 (surplus value will assigned if converting big data type value to smaller data type value)\n\nint num2 = 255;\nbyte b2 = (byte) num2; // 255\n\n\n// convert non-compatible types\n// string to integer\nstring s = "1";\n// method 1\nint i = Systen.Convert.ToInt32(s);  // returns 0 if string is null\n// method 2\nint j = int.Parse(s);  // returns an exception if string is null\n\n/* other methods\nToByte()\nToInt16()  // short\nToInt32()  // integer\nToInt64()  // long\n*/\n\n\n// convert number to strings\n// convert to normal string\nint i = 1234;\nstring str = i.ToString();  // "1234"\n// convert to currency with decimal places\nstring floatCurrency = i.ToString("C");  // "$1,234.00"\n// convert to currency without decimal places\nstring currency = i.ToString("C0");  // "$1,234"\n\n/* Format strings\nformat specific | description | example\nc or C          | currency    | 123456 (C) -> $123,456\nd or D          | decimal     | 1234 (D6) -> 001234\ne or E          | exponential | 1052.0329112756 (E) -> 1.052033E+003\nf or F          | fixed point | 1234.567 (F1) -> 1234.5\nx or X          | Hexadecimal | 255 (X) -> FF\n*/\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-45"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "find-data-type"}, "Find Data Type"),
          (0, i.kt)("h3", {id: "python-2--3-19"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Get data type\nnum = 123\ntype(num)  # int\n\n# Get boolean value\nisinstance(num, int)  # True\nisinstance(num, str)  # False\n\n# check if all characters in string are uppercase\n"abc".isupper()  # False\n"Abc".isupper()  # False\n"ABC".isupper()  # True\n"AB1".isupper()  # True\n\n# check if all characters in string are lowercase\n"abC".islower()  # False\n"abc".islower()  # True\n"ab1".islower()  # True\n\n# check if all characters in string are digits\n"ab1".isdigit()  # False\n"123".isdigit()  # True\n\n\n# check if 2 objects are exactly the same even if they have the same value\n# primitive values have the exact same objects\nx = 1\ny = 1\nid(x)  # 4357474608\nid(y)  # 4357474608\n\n# reference type objects are different even if they have the same value\nx = [1]\ny = [1]\nid(x)  # 4360090688\nid(y)  # 4359972032\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-15"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Get data type: "number", "string", "boolean", "object", "undefined", "function"\n// null and arrays are classified as object\n// classes and methods are classfied as function\nlet num = 123;\ntypeof num;  // "number"\n\nlet array = [1, 2, 3];\ntypeof array;  // "object"\n\nlet variable1 = 10 / undefined;  // NaN\nNumber.isNaN(variable1);  // true\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-26"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# Get data type, function won\'t provide a specify class type\nputs "test".class  # String\nputs :stringSym.class  # Symbol\nputs 123.class  # Fixnum\nputs 1.23.class  # Float\nputs true.class  # TrueClass\nputs false.class  # FalseClass\nputs nil.class  # NilClass\nputs [1, 2].class # Array\nhashName = Hash.new()\nputs hashName.class  # Hash\nclass Myclass\n    def myFunc\n        do_something\n    end\nend\nputs Myclass.class  # Class\n\n# Get id of object\nputs "string".object_id  # 2343215, some random number where object is stored in memory\n\n# check if object is the correct type, obj.is_a? data_type\n[1, 2].is_a? Array  # true\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-27"}, "java"),
          (0, i.kt)("h3", {id: "c-46"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "typeof: takes a type name (which you specify at compile time)"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "GetType: gets the runtime type of an instance"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "is: returns true if an instance is in the inheritance tree"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Animal { }\npublic class Dog : Animal { }\n\npublic class MainClass {\n  public static void Main() {\n    Dog spot = new Dog();\n    PrintTypes(spot);\n    int num = 123;\n    System.Console.WriteLine(num.GetType());  // System.Int32\n    System.Console.WriteLine(num.GetTypeCode());  // Int32\n    System.Console.WriteLine(num.GetType() == typeof(int));  // true (System.Int32 == System.Int32)\n  }\n\n  public static void PrintTypes(Animal a) {\n    System.Console.WriteLine(a.GetType() + " " + typeof(Animal));  // Dog Animal\n    System.System.Console.WriteLine(a.GetType() == typeof(Animal));  // false\n    System.Console.WriteLine(a is Animal);  // true  (Dog is Animal)\n    System.Console.WriteLine(a.GetType() + " " + typeof(Dog));  // Dog Dog\n    System.Console.WriteLine(a.GetType() == typeof(Dog));  // true\n    System.Console.WriteLine(a is Dog);  // true (Dog is Dog)\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-47"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "string-concatenation"}, "String Concatenation"),
          (0, i.kt)("h3", {id: "python-2-7"}, "python 2"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'string_name = "string1" + "string2"  # "string1string2"\n\n# String formatting\n# % string operator: old style, soon to be deprecated\nstring_name = "%s %s" % ("string1", "string2")  # "string1 string2"\n\n# {} operator: python 2.6 and above\n# method 1\nstring_name = "{} {}".format("string1", "string2")  # "string1 string2"\n# method 2\nstring_name = "{0} {1}".format("string1", "string2")  # "string1 string2"\n'
            )
          ),
          (0, i.kt)("h3", {id: "python-3-7"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# f string: python 3.6 and above\nstring1 = "string1"\nstring2 = "string2"\nstring_name = f"{string1} {string2}"  # "string1 string2"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "string formatting for numbers")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'a = 8\n\n# set number of digits\n# add spaces to the right for missing digits\nprint(f"{a:<2}")  # "8 "\n#add 0s (can only be number 0) to the right for missing digits\nprint(f"{a:<02}")  # "80"\n\n# add spaces to the left for missing digits\nprint(f"{a:>2}")  # " 8"\n# add 0s (can only be number 0) to the right for missing digits\nprint(f"{a:>02}")  # "08"\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-9"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// javascript allows data type mashups, numbers will be converted to strings when concatenated with a string.\nlet stringName = "string1" + "string2" + 123;  // "string1string2123"\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-10"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'let string1 = "string 1 value";\nlet string2 = "string 2 value";\nlet stringName = `${string1} ${string2} 123`;  // "string 1 value string 2 value 123"\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-27"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              'string1 = "string1"\nstring2 = "string2"\nstring_name = "#{string1} #{string2}"  # "string1 string2"\n\nstring_name << "string 3"  # "string1 string2string3"\n\n# to_s: numbers need to be converted to a string to be concatenated\nputs "one" + 1.to_s  # "one1"\n\n# %s for strings, %d for integers, %f for floats, %.3f for float with 3 decimals\nprintf "%s %s", "string1", "string2"  # "string1 string2"\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-28"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'String string1 = "string";\nint num1 = 1;\n\n// method 1\nString stringName1 = string1 + num1;  // "string1"\n\n// method 2\nStringBuilder sb1 = new StringBuilder(string1);\nsb1.append(num1);  // "string1"\n// or\nStringBuilder sb2 = new StringBuilder();\nsb2.append(string1).append(num1);  // "string1"\n\nsb2.delete(1, sb2.length());  // "s"\n\n// method 3\nStringBuffer sBuffer1 = new StringBuffer(string1);\nsBuffer1.append(num1);\nsBuffer1.toString();  // "string1"\n// or\nStringBuffer sBuffer2 = new StringBuffer();\nsBuffer2.append(string1).append(num1);\nsBuffer2.toString();  // "string1"\n\n// method 4 (concat value must be string type)\nString newString1 = string1.concat(Integer.toString(num1));  // "string1"\n\n// method 5 (%s = string, %d = "byte, short, int, long, bigint", %c = char)\nString newString2 = String.format("%s%d", string1, num1);  // "string1"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)(
                "a",
                {
                  parentName: "li",
                  href: "https://www.javatpoint.com/java-string-format",
                },
                "String format reference"
              )
            )
          ),
          (0, i.kt)("h3", {id: "c-48"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'string string1 = "string 1 value";\nstring string2 = "string 2 value";\n\n// method 1\nstring stringName1 = string1 + string2;  // "string 1 value string 2 value"\n// method 2\nstring stringName2 = String.Format("{0} {1}", string1, string2);  // "string 1 value string 2 value"\n// method 3\nstring stringName3 = $"{string1} {string2}";  // "string 1 value string 2 value"\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-49"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "json"}, "JSON"),
          (0, i.kt)("h3", {id: "python-2--3-20"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "import json  # must import to use\n\n# python objects that can be converted: dict, list, tuple, string, int, float, True, False, None\n# Convert JSON to python\njson.loads(json_object)\n\n# Convert python to JSON\njson.dumps(python_object)\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-16"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// JSON (JavaScript Object Notation): a lightweight, text-based data format that\'s based on JavaScript.\n// convert js to JSON\nlet objName = {title: \'Black Panther\'};\nobjName = JSON.stringify(objName);\n\n// convert JSON to js\nlet objName = {"title": "Black Panther"};\nobjName = JSON.parse(objName);\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-28"}, "ruby"),
          (0, i.kt)("h3", {id: "java-29"}, "java"),
          (0, i.kt)("h3", {id: "c-50"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "program-entry-point"}, "Program Entry Point"),
          (0, i.kt)("h3", {id: "python-2--3-21"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'if __name__ === "__main__":\n    # do something\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-17"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "// only works in node js\nif (require.main === module) {\n  // do something\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-29"}, "ruby"),
          (0, i.kt)("h3", {id: "java-30"}, "java"),
          (0, i.kt)("h3", {id: "c-51"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "class MainClass {\n  public static void Main(string[] args) {\n    // do something\n  }\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-52"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "swapping-values"}, "Swapping values"),
          (0, i.kt)("h3", {id: "python-2--3-22"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "a, b = 1, 2\n# method 1\ntemp = a\na = b\nb = temp\n\n# method 2\na, b = b, a\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es5-10"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "let a = 1;\nlet b = 2;\nconst temp = a;\na = b;\nb = temp;\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-11"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "[a, b] = [b, a];\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-30"}, "ruby"),
          (0, i.kt)("h3", {id: "java-31"}, "java"),
          (0, i.kt)("h3", {id: "c-53"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "error-handling"}, "Error Handling"),
          (0, i.kt)("h3", {id: "python-2--3-23"}, "python 2 & 3"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "try: lets you test a block of code for errors"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "except: except block lets you handle the error",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "covers all error types",
                  (0, i.kt)(
                    "blockquote",
                    {parentName: "li"},
                    (0, i.kt)("p", {parentName: "blockquote"}, "except:")
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "define exception type (can write multiple except statements)",
                  (0, i.kt)(
                    "blockquote",
                    {parentName: "li"},
                    (0, i.kt)(
                      "p",
                      {parentName: "blockquote"},
                      "except NameError:"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "save error to variable e",
                  (0, i.kt)(
                    "blockquote",
                    {parentName: "li"},
                    (0, i.kt)(
                      "p",
                      {parentName: "blockquote"},
                      "except ValueError as e:"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "list of important error types",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "AssertionError, AttributeError, EOFError, FloatingPointError, GeneratorExit, ImportError, IndexError, KeyError"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "KeyboardInterrupt, MemoryError, NameError, NotImplementedError, OSError, OverflowError, ReferenceError, RuntimeError"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "StopIteration, SyntaxError, IndentationError, TabError, SystemError, TypeError, UnboundLocalError, UnicodeError"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "UnicodeEncodeError, UnicodeDecodeError, UnicodeTranslateError, ValueError, ZeroDivisionError"
                    )
                  )
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "else: code to be executed if no errors were raised"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "finally: if specified, will be executed regardless if the try block raises an error or not",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "useful to close objects and clean up resources"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# similar to if else\ntry:  # must start with try\n    do_something\nexcept:  # must have to handle errors\n    do_something_if_error_occurs\nelse:  # not required\n    do_something_if_no_error\nfinally:  # not required\n    do_something_when_try_&_except_or_else_is_completed\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-18"}, "javascript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "try: lets you test a block of code for errors"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "catch: lets you handle the error"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "finally: lets you execute code, after try and catch, regardless of the result"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "try {\n  doSomething;\n} catch(error) {\n  doSomethingIfErrorOccurs;\n} finally {\n  doSomethingWhenTryAndCatchIsCompleted;\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-31"}, "ruby"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "begin: something which might raise an exception"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "rescue: code that deals with some exception"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "else: code that runs only if no exception was raised"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "ensure: ensure that this code always runs, no matter what"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "begin\n  doSomething\nrescue SomeExceptionClass => storeErrorToThisVariable\n  doSomethingIfErrorOccurs\nelse\n  doSomethingIfNoError\nensure\n  doSomethingWhenEverythingIsCompleted\nend\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-32"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "try: lets you test a block of code for errors"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "catch: lets you handle the error",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  'use "Exception" keyword to catch all exception types'
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "use specific exception types to catch that specific exception",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "exceptions are from java.lang library, so no imports are required"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "catch block can be chained (specific exception with highest priority should come first)"
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "finally: lets you execute code, after try and catch, regardless of the result",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "very important for closing a file when an opened file in the try block triggered an exception"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "try {\n  doSomething;\n} catch(SomeSpecificException e) {\n  doSomethingIfErrorOccursRelatedToSomESpecificException;\n} catch(Exception e) {  // e is an arg (mandatory), e can be used to print general or more detailed error\n  doSomethingIfErrorOccursRelatedToAllExceptions;\n} finally {\n  doSomethingWhenTryAndCatchIsCompleted;\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "try with resources statement",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "only for java 8 or later versions, can't be used on android"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is a try statement that declares 1 or more ressources"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "a resource is an object that must be closed after the program is finished with it"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// type 1\nimport java.io.FileReader;\nimport java.io.BufferedReader;\nimport java.io.FileWriter;\n\npublic class Main {\n    // try-with-resources\n    try (BufferedReader bReader = new BufferedReader(new FileReader(sourceFile))) {\n      return bReader.readLine();\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}\n\n// type 2\nimport java.io.FileReader;\nimport java.io.BufferedReader;\nimport java.io.FileWriter;\n\npublic class Main {\n  public static void main(String[] args) {\n    String sourceFile = "textfile";  // textfile path\n    String targetFile = "newtextfile";  // newtextfile path\n\n    // try-with-resources\n    try (\n      FileReader fReader = new FileReader(sourceFile);  // read file\n      BufferedReader bReader = new BufferedReader(fReader);  // read lines in file\n      FileWriter writer = new FileWriter(targetFile);  // write file\n      ) {\n      while (true) {\n        String line = bReader.readLine();\n        if (line == null) {\n          break;\n        } else {\n          writer.write(line + "\\n");\n        }\n      }\n      System.out.println("File copied");\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-54"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "try: lets you test a block of code for errors"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "catch: lets you handle the error",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  'use "Exception" keyword to catch all exception types'
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "use specific exception types to catch that specific exception"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "catch block can be chained (specific exception with highest priority should come first)"
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "finally: lets you execute code, after try and catch, regardless of the result",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "very important for closing a file when an opened file in the try block triggered an exception"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "try {\n  doSomething;\n} catch(SomeSpecificException e) {\n  doSomethingIfErrorOccursRelatedToSomESpecificException;\n} catch(Exception e) {  // e is an arg (is not mandatory), e can be used to print general or more detailed error\n  doSomethingIfErrorOccursRelatedToAllExceptions;\n} finally {\n  doSomethingWhenTryAndCatchIsCompleted;\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Create custom exception")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class NewExceptionName : System.Exception {\n  public NewExceptionName(string message, System.Exception innerException)\n    : base(message, innerException)\n    {}\n}\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-55"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "custom-error"}, "Custom Error"),
          (0, i.kt)("h3", {id: "python-2--3-24"}, "python 2 & 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# raise generic exception\nraise Exception("custom message")\n\n# raise specific exception\nraise ValueError("custom message")\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-19"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'throw "custom message"; // throw a text\n\nthrow 123; // throw a number\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-32"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              '# method 1\nraise errorType, "custom error message"\n# method 2\nraise errorType.new("custom error message")\n'
            )
          ),
          (0, i.kt)("h3", {id: "java-33"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "must use either try catch statements or be inside a conditional statement to work"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// if using try catch, both throw and catch must handle the same Exception type\ntry {\n  // raise specific exception\n  throw new SpecificExceptionName("custom message");\n  \n  // raise generic exception\n  throw new Exception("custom message");\n} catch (SpecificExceptionName e) {\n} catch (Exception e) {\n}\n\n\nif (true) {\n  // raise generic exception\n  throw new Exception("custom message");\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-56"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// raise generic exception\nthrow new System.Exception("custom message");\n\n\n// raise specific exception\nthrow new SpecificExceptionName("custom message");\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-57"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "asynchronous"}, "Asynchronous"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Handling asynchronous code (making it synchronous)"
            )
          ),
          (0, i.kt)("h3", {id: "python-1"}, "python"),
          (0, i.kt)("h3", {id: "javascript-es5-11"}, "javascript ES5"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'var posts = [{title: "Post 1", body: "body of post 1"}, {title: "Post 2", body: "body of post 2"}];\n\n// callback is required if need getPost to display data after createPost is called\n// reason is because createPost takes longer time to complete compared to getPost\nfunction createPost(post, callback) {\n  setTimeout(() => {\n    posts.push(post);\n    callback();\n  }, 2000);\n}\n\n// method 1\n// callback function\nfunction getPosts() {\n  setTimeout(() => {\n    var output = "";\n    posts.forEach((post, index) => {\n      output += post.title;\n    });\n    console.log(output);\n  }, 1000);\n}\ncreatePost({title: "Post 3", body: "body of post 3"}, getPosts);\n\n// method 2:\n// Using anonymous callback function can lead to callback hell if over used\ncreatePost({title: "Post 3", body: "body of post 3"}, function() {\n  setTimeout(() => {\n    var output = "";\n    posts.forEach((post, index) => {\n      output += post.title;\n    });\n    console.log(output);\n  }, 1000);\n});\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es6-12"}, "javascript ES6"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Change createPost to return a Promise\nfunction createPost(post) {\n  return new Promise((resolve, reject) => {\n    setTimeout(() => {\n      if (post) {\n        posts.push(post)\n        resolve();\n      } else {\n        reject("error")\n      }\n    }, 2000);\n  });\n}\n\n// method 3\n// use .then() instead of callback\ncreatePost({title: "Post 3", body: "body of post 3"})\n.then(getPosts) // can chain multiple promises by adding .then(do_something)\n.catch(error => console.log(error));\n\n// method 4\n// use Promise.all\nPromise.all([ // can chain multiple promises\n  createPost({title: "Post 3", body: "body of post 3"}),\n])\n.then(values => {\n  getPosts();\n  console.log(values) // output array of results e.g [promise1_output, promise2_output, ...]\n});\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-es8"}, "javascript ES8"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// method 5\n// use async / await when calling functions\nasync function init() {\n  await createPost({title: "Post 3", body: "body of post 3"});\n  getPosts();\n}\ninit();\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-33"}, "ruby"),
          (0, i.kt)("h3", {id: "java-34"}, "java"),
          (0, i.kt)("h3", {id: "c-58"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'class MainClass {\n    public static void Main(string[] args) {\n        System.Console.WriteLine("Starting");\n        Worker worker = new Worker();\n        worker.DoWork();  // since this is any async function, add this to stack then move on\n        while (!worker.IsComplete) {\n            System.Threading.Thread.Sleep(100);\n            System.Console.Write(".");\n        }\n        System.Console.WriteLine("Done");\n    }\n\n    public static System.Threading.Tasks.Task DelayOperation() {\n        return System.Threading.Tasks.Task.Factory.StartNew(() => {\n            System.Threading.Thread.Sleep(2000);\n        });\n    }\n}\n\npublic class Worker { \n    public bool IsComplete { get; private set; }\n\n    public async void DoWork() {  // add async to make function an async \n        this.IsComplete = false;\n        System.Console.WriteLine("Doing work");\n        await LongOperation();  // wait for the function to finish before proceeding\n        IsComplete = true;\n        System.Console.WriteLine("Work completed");\n    }\n\n    private System.Threading.Tasks.Task LongOperation() {\n        return System.Threading.Tasks.Task.Factory.StartNew(() => {\n            System.Console.WriteLine("Working!");\n            System.Threading.Thread.Sleep(2000);\n        });\n    }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-59"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "math"}, "Math"),
          (0, i.kt)("h3", {id: "python-3-8"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import math\n\nprint("abs(-1) ", abs(-1))  # abs(-1)  1\nprint("max(5, 4) ", max(5, 4))  # max(5, 4)  5\nprint("min(5, 4) ", min(5, 4))  # min(5, 4)  4\nprint("pow(2, 2) ", pow(2, 2))  # pow(2, 2)  4\nprint("ceil(4.5) ", math.ceil(4.5))  # ceil(4.5)  5\nprint("floor(4.5) ", math.floor(4.5))  # floor(4.5)  4\nprint("round(4.5) ", round(4.5))  # round(4.5)  4\nprint("exp(1) ", math.exp(1))  # e**x  # exp(1)  2.718281828459045\nprint("log(e) ", math.log(math.exp(1)))  # log(e)  1.0\nprint("log(100) ", math.log(100, 10))  # Base 10 Log  # log(100)  2.0\nprint("sqrt(100) ", math.sqrt(100))  # sqrt(100)  10.0\nprint("sin(0) ", math.sin(0))  # sin(0)  0.0\nprint("cos(0) ", math.cos(0))  # cos(0)  1.0\nprint("tan(0) ", math.tan(0))  # tan(0)  0.0\nprint("asin(0) ", math.asin(0))  # asin(0)  0.0\nprint("acos(0) ", math.acos(0))  # acos(0)  1.5707963267948966\nprint("atan(0) ", math.atan(0))  # atan(0)  0.0\nprint("sinh(0) ", math.sinh(0))  # sinh(0)  0.0\nprint("cosh(0) ", math.cosh(0))  # cosh(0)  1.0\nprint("tanh(0) ", math.tanh(0))  # tanh(0)  0.0\nprint("asinh(0) ", math.asinh(0))  # asinh(0)  0.0\nprint("acosh(pi) ", math.acosh(math.pi))  # acosh(pi)  1.811526272460853\nprint("atanh(0) ", math.atanh(0))  # atanh(0)  0.0\nprint("hypot(0) ", math.hypot(10, 10))  # sqrt(x*x + y*y)  # hypot(0)  14.142135623730951\nprint("radians(0) ", math.radians(0))  # radians(0)  0.0\nprint("degrees(pi) ", math.degrees(math.pi))  # degrees(pi)  180.0\n\n# infinity value\nmath.inf\n\nimport random\n# random integer\nrandom.randint(1, 3)  # any number from 1 to 3\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-20"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "Math.abs(-1);  // 1\n\nMath.pow(-4, 2)  // 16, same as (-4) ** 2\n\n// random integer from 0 to 9\nMath.floor(Math.random() * 10);\n// similar to\n~~(Math.random() * 10);\n\n// random integer from 0 to 10\nMath.floor(Math.random() * 11);\n\n// random integer from 0 to 10\nMath.floor(Math.random() * 11);\n\n// random integer from 1 to 10\nMath.floor(Math.random() * 10) + 1;\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-34"}, "ruby"),
          (0, i.kt)("h3", {id: "java-35"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import java.util.Random;\n\ndouble number1 = 10.5;\ndouble number2 = 15;\n\nSystem.out.println("Math.abs(number1) " + (Math.abs(number1)));  // Math.abs(number1) 10.5\nSystem.out.println("Math.ceil(number1) " + (Math.ceil(number1)));  // Math.ceil(number1) 11\nSystem.out.println("Math.floor(number1) " + (Math.floor(number1)));  // Math.floor(number1) 10\nSystem.out.println("Math.max(number1, number2) " + (Math.max(number1, number2)));  // Math.max(number1, number2) 15\nSystem.out.println("Math.min(number1, number2) " + (Math.min(number1, number2)));  // Math.min(number1, number2) 10.5\nSystem.out.println("Math.pow(number1, 2) " + (Math.pow(number1, 2)));  // Math.pow(number1, 2) 110.25\nSystem.out.println("Math.round(number1) " + (Math.round(number1)));  // Math.round(number1) 10\nSystem.out.println("Math.sqrt(number1) " + (Math.sqrt(number1)));  // Math.sqrt(number1) 3.24037034920393\n\nSystem.out.println("Random Number Between 0 and 10 = " + (int)(Math.random() * 11 + 1 + 0));  // Math.random() * (max - min + 1) + min2 = change min2 to 1 to become between 1 and 10\n\nRandom rand = new Random();\nSystem.out.println("Random Number Between 0 and 10 " + (rand.nextInt(11)));\nSystem.out.println("Random Number Between 1 and 10 " + (rand.nextInt(10 - 1 + 1) + 1));  // rand.nextInt((max - min) + 1) + min;\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-60"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'double number1 = 10.5;\ndouble number2 = 15;\n\nSystem.Console.WriteLine("Math.Abs(number1) " + (Math.Abs(number1)));  // Math.Abs(number1) 10.5\nSystem.Console.WriteLine("Math.Ceiling(number1) " + (Math.Ceiling(number1)));  // Math.Ceiling(number1) 11\nSystem.Console.WriteLine("Math.Floor(number1) " + (Math.Floor(number1)));  // Math.Floor(number1) 10\nSystem.Console.WriteLine("Math.Max(number1, number2) " + (Math.Max(number1, number2)));  // Math.Max(number1, number2) 15\nSystem.Console.WriteLine("Math.Min(number1, number2) " + (Math.Min(number1, number2)));  // Math.Min(number1, number2) 10.5\nSystem.Console.WriteLine("Math.Pow(number1, 2) " + (Math.Pow(number1, 2)));  // Math.Pow(number1, 2) 110.25\nSystem.Console.WriteLine("Math.Round(number1) " + (Math.Round(number1)));  // Math.Round(number1) 10\nSystem.Console.WriteLine("Math.Sqrt(number1) " + (Math.Sqrt(number1)));  // Math.Sqrt(number1) 3.24037034920393\n\nRandom rand = new Random();\nSystem.Console.WriteLine("Random Number Between 1 and 10 " + (rand.Next(1,11)));\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-61"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// Seed the random number generator with the time method, then convert value to integer\nsrand((int)time(0));\n// Get the random number from the seed & save it to a variable\nint randomNumber = rand() % 100;  // number range from 0 to 99\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "date-and-time"}, "Date and Time"),
          (0, i.kt)("h3", {id: "python3"}, "python3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'from datetime import date, datetime, timedelta\nimport calendar\n\n# get today\'s date from the today method from the date class\ntoday = date.today()\nprint("Today\'s date is ", today)  # Today\'s date is  2021-07-16\n\n# print out the date\'s individual components\nprint("Date components: ", today.day, today.month,\n      today.year)  # Date components:  16 7 2021\n\n# retrieve today\'s weekday (0=Monday, 6=Sunday)\nprint("Today\'s weekday # is: ", today.weekday())  # Today\'s weekday # is:  4\n\n# get today\'s date from the datetime class\ntoday = datetime.now()\nprint("The current date and time is ", today)  # The current date and time is  2021-07-16 18:33:33.510322\n\n# get the current time\nt = datetime.time(datetime.now())\nprint(t)  # 18:34:40.676073\n\n# Times and dates can be formatted using a set of predefined string control codes\nnow = datetime.now()\n# Date formatting\n# %y/%Y - year, %a/%A - weekday, %b/%B - month, %d - day of month\nprint(now.strftime("%a/%A, %d %D %b/%B, %y/%Y"))  # Fri/Friday, 16 07/16/21 Jul/July, 21/2021\n\n# %c - locale\'s date and time, %x - locale\'s date, %X - locale\'s time\nprint(now.strftime("Locale date and time: %c"))  # Locale date and time: Fri Jul 16 18:47:27 2021\nprint(now.strftime("Locale date: %x"))  # Locale date: 07/16/21\nprint(now.strftime("Locale time: %X"))  # Locale time: 18:48:32\n\n# Time formatting\n# %I/%H - 12/24 hour, %M - minute, %S - second, %p - locale\'s AM/PM\nprint(now.strftime("Current time: %I:%M:%S %p"))  # Current time: 06:58:10 PM\nprint(now.strftime("24-hour time: %H:%M"))  # 24-hour time: 18:58\n\n# construct a basic timedelta\nprint(timedelta(days=365, hours=5, minutes=1))  # 365 days, 5:01:00\n\n# today\'s date\nnow = datetime.now()\nprint("today is: ", str(now))  # today is:  2021-07-16 19:05:19.744915\n\n# today\'s date 1 year from now\nprint("one year from now it will be: ", str(now + timedelta(days=365)))  # one year from now it will be:  2022-07-16 19:06:45.299792\n\n# create a timedelta that uses more than one argument\nprint("In 2 days and 3 weeks, it will be ",\n      str(now + timedelta(days=2, weeks=3)))  # In 2 days and 3 weeks, it will be  2021-08-08 19:40:39.554060\n\n# calculate the date 1 week ago, formatted as a string\nt = datetime.now() - timedelta(weeks=1)\ns = t.strftime("%A %B %d, %Y")\nprint("One week ago it was: ", s)  # One week ago it was:  Friday July 09, 2021\n\n# How many days until April Fools\' Day\ntoday = date.today()  # 2021-07-16\nafd = date(today.year, 4, 1)  # 2021-04-01\nprint((today - afd).days)  # 106\nafd = afd.replace(year=today.year + 1)  # 2022-04-01\n\n# calculate the amount of time until April Fool\'s day\ntime_to_afd = afd - today  # 259\n\n# create a text calendar\n# the day (SUNDAY) states the 1st day of the week in the calendar\nc = calendar.TextCalendar(calendar.SUNDAY)\nst = c.formatmonth(2017, 1, 0, 0)\nprint(st)\n\'\'\'\n    January 2017\nSu Mo Tu We Th Fr Sa\n 1  2  3  4  5  6  7\n 8  9 10 11 12 13 14\n15 16 17 18 19 20 21\n22 23 24 25 26 27 28\n29 30 31\n\'\'\'\n\n# create an HTML formatted calendar\nhc = calendar.HTMLCalendar(calendar.SUNDAY)\nst = hc.formatmonth(2017, 1)\nprint(st)  # bunch of html tags\n\n# loop over the days of a month\n# 0s mean that the day of the week is in an overlapping month\nfor i in c.itermonthdays(2017, 8):\n    print(i)\n\n# Calendar module provides useful utilities for the given locale\n# such as the names of days and months in both full and abbreviated forms\nfor month_name in calendar.month_name:\n    print(month_name)\nfor day_name in calendar.day_name:\n    print(day_name)\n\n# calculate all the first Fridays of every month\nfor m in range(1, 13):\n    cal = calendar.monthcalendar(2018, m)\n    weekone = cal[0]\n    weektwo = cal[1]\n    meetday = weekone[calendar.FRIDAY] if weekone[calendar.FRIDAY] != 0 else weektwo[calendar.FRIDAY]\n    print("%10s %2d" % (calendar.month_name[m], meetday))\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-21"}, "javascript"),
          (0, i.kt)("h3", {id: "ruby-35"}, "ruby"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-ruby"},
              "# get current date and time\nTime.now\n"
            )
          ),
          (0, i.kt)("h3", {id: "java-36"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "must import")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              "import java.util.Date;\nimport java.util.GregorianCalendar;\nimport java.text.DateFormat;\nimport java.util.Locale;\nimport java.time.LocalDateTime;  // java 8\nimport java.time.LocalDate;\nimport java.time.format.DateTimeFormatter;\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'Date d = new Date();  // Fri Jul 09 00:46:09 SGT 2021\n\n// January = 0, Feburary = 1, ...\nGregorianCalendar gc = new GregorianCalendar(2009, 1, 28);\ngc.add(GregorianCalendar.DATE, 1);  // add a day\nDate d2 = gc.getTime();  // Sun Mar 01 00:00:00 SGT 2009\n\n// format date\n// method 1, with no specific style and locale\nDateFormat df = DateFormat.getDateInstance();\nSystem.out.println(df.format(d2));  // Mar 1, 2009\n// method 2, with style and no locale\nDateFormat df2 = DateFormat.getDateInstance(DateFormat.FULL);\nSystem.out.println(df2.format(d2));  // Sunday, March 1, 2009\n// method 3, with style and locale\nLocale locale = new Locale("en_SG", "SGP");  // set as Singapore\nDateFormat df3 = DateFormat.getDateInstance(DateFormat.FULL, locale);\nSystem.out.println(df3.format(d2));  // 2009 Mar 1, Sun\n\nLocalDateTime ldt = LocalDateTime.now();  // 2021-07-09T01:03:50.874932\n\n// January = 1, Feburary = 2, ...\nLocalDate ld = LocalDate.of(2009, 1, 28);  // 2009-01-28\n\nDateTimeFormatter dtf = DateTimeFormatter.ISO_DATE;\nSystem.out.println(dtf.format(ld));  // 2009-01-28\n\n// format with a specific pattern\nDateTimeFormatter dtf2 = DateTimeFormatter.ofPattern("M/d/yyyy");\nSystem.out.println(dtf2.format(ld));  // 1/28/2009\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-62"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Set date (time set to default at 12:00:00 AM)\nSystem.DateTime newDate = new System.DateTime(2015, 1, 1);\n\n\n// Get current date (time set to default at 12:00:00 AM)\nSystem.DateTime todayDate = System.DateTime.Today;  // 1/14/2020 12:00:00 AM\n\n\n// Get current date and time\nSystem.DateTime now = System.DateTime.Now;  // 1/14/2020 10:19:54 AM\n\n\n// Add or reduce days\nnow.AddDays(1);  // add 1 day\nnow.AddDays(-10;  // reduce 1 day\n\n\n// Display formats\nSystem.Console.WriteLine(now);  // 1/14/2020 10:23:09 AM\nSystem.Console.WriteLine(now.ToLongDateString());  // Tuesday, January 14, 2020\nSystem.Console.WriteLine(now.ToShortDateString());  // 1/14/2020\nSystem.Console.WriteLine(now.ToLongTimeString());  // 10:23:09 AM\nSystem.Console.WriteLine(now.ToShortTimeString());  // 10:23 AM\nSystem.Console.WriteLine(now.ToString());  // 1/14/2020 10:23:09 AM\nSystem.Console.WriteLine(now.ToString("yyyy-MM-dd"));  // 2020-01-14\nSystem.Console.WriteLine(now.ToString("yyyy-MM-dd HH:mm"));  // 2020-01-14 10:26\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-63"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "file-system"}, "File System"),
          (0, i.kt)("h3", {id: "python-4"}, "python"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Modifying files")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# Open a file for writing and create file if it doesn\'t exist\n# file will be rewritten if contents already exists\nf = open("textfile", "w+")\nfor i in range(10):  # write some lines of data to the file\n    f.write(f"this is line {str(i)}\\r\\n")\nf.close()  # close file when done\n\n\n# Open a file and append text to the end\nf = open("textfile", "a")\nfor i in range(10):\n    f.write(f"this is line {str(i)}\\r\\n")\nf.close()\n\n\n# Open and read file\nf = open("textfile", "r")\nif f.mode == "r":\n    contents = f.read()  # reads the entire content\n    print(contents)\n\n\nf = open("textfile", "r")\nif f.mode == "r":\n    fl = f.readlines()  # reads per line\n    for x in fl:\n        print(x)\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "path utilities")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import os\nfrom os import path\nimport datetime\nimport time\n\n\nprint(os.name)  # get OS name\n\n# check if file exist and file type\nprint(path.exists("textfile"))  # True\nprint(path.isfile("textfile"))  # True\nprint(path.isdir("textfile"))  # False\n\n# get file paths\nprint(path.realpath("textfile"))  # /path/to/textfile\nprint(path.split(path.realpath("textfile")))  # (\'/path/to\', \'textfile\')\n\n# get modificaton time\nt = time.ctime(path.getmtime("textfile"))  # method 1\nprint(t)  # Sun Jul 18 00:16:20 2021\nt2 = datetime.datetime.fromtimestamp(path.getmtime("textfile"))  # method 2\nprint(t2)  # 2021-07-18 00:16:20.360159\n\n# calculate how long ago file was modified\ntd = datetime.datetime.now() - datetime.datetime.fromtimestamp(\n    path.getmtime("textfile")\n)\nprint(td)  # 0:19:02.185160\nprint(td.total_seconds())  # 1142.18516\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "copy and zip files")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import os\nfrom os import path\nimport shutil\nfrom shutil import make_archive\nfrom zipfile import ZipFile\n\n\nif path.exists("textfile"):\n    src = path.realpath("textfile")  # get path of file in current directory\n    dst = src + ".bak"  # create a backup copy by appending "bak"\n    \n    shutil.copy(src, dst)  # copy over only the the contents of file\n    shutil.copytree(src, dst)  # copy over contents and all other metadata of file\n\n    os.rename("textfile", "newtextfile")\n\n    # zip files\n    root_dir, tail = path.split(src)\n    shutil.make_archive("archive", "zip", root_dir)  # zip all files in the folder\n\n    with ZipFile("testzip.zip", "w") as newzip:  # zip only selected files\n        newzip.write("textfile")\n        newzip.write("textfile.bak")\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-22"}, "javascript"),
          (0, i.kt)("h3", {id: "ruby-36"}, "ruby"),
          (0, i.kt)("h3", {id: "java-37"}, "java"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import java.io.FileReader;\nimport java.io.BufferedReader;\nimport java.io.FileWriter;\n\npublic class Main {\n  public static void main(String[] args) {\n    String sourceFile = "textfile";  // sourceFile path\n    String targetFile = "newtextfile";  // targetFile path\n\n    // try with resources statement, only available for java 8 and later versions\n    // can\'t be used on android\n    try (\n      FileReader fReader = new FileReader(sourceFile);  // read file\n      BufferedReader bReader = new BufferedReader(fReader);  // read lines in file\n      FileWriter writer = new FileWriter(targetFile);  // write file\n      ) {\n      while (true) {\n        String line = bReader.readLine();\n        if (line == null) {\n          break;\n        } else {\n          writer.write(line + "\\n");\n        }\n      }\n      System.out.println("File copied");\n    } catch (Exception e) {\n      e.printStackTrace();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import java.nio.file.Files;\nimport java.nio.file.Path;\nimport java.nio.file.Paths;\nimport java.nio.file.StandardCopyOption;\nimport java.io.IOException;\n\npublic class Main {\n  public static void main(String[] args) {\n    String subDirectory = "";  // parent folder where the file is located\n    String sourceFilename = "textfile";\n    String targetFilename = "newtargetfile3";\n    \n    // only for java 7 or later versions, not available for android\n    Path sourceFile = Paths.get(subDirectory, sourceFilename);\n    Path targetFile = Paths.get(subDirectory, targetFilename);\n\n    try {\n      // copy existing file contents into the new file\n      Files.copy(sourceFile, targetFile, StandardCopyOption.REPLACE_EXISTING);\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "using ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "commons-io"),
              " library to copy file",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "for latest versions and for android"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "download the ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "commons-io"),
                  " jar file"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "create a ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "lib"),
                  " folder inside the root folder of your project and move the ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "commons-io"),
                  " jar file into it"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "then add the jar file into the class path"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import org.apache.commons.io.FileUtils;  // common-io library\n\nimport java.io.File;\nimport java.io.IOException;\n\npublic class Main {\n  public static void main(String[] args) {\n    File sourceFile = new File("path/to/file.txt");\n    File targetFile = new File("path/to/newfile.txt");\n    \n    try {\n      // use commons-io\n      FileUtils.copyFile(sourceFile, targetFile);\n    } catch (IOException e) {\n      e.printStackTrace();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "reading a text file over the internet"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'import java.net.URL;\nimport java.io.InputStream;\nimport java.io.BufferedInputStream;\nimport java.io.IOException;\n\npublic class Main {\n  private static final String FLOWERS_FEED = "https://services.hanselandpetal.com/feeds/flowers.xml";\n\n  // adding the throws block allow code to run safely without having to write another try catch statement in the finally block\n  public static void main(String[] args) throws IOException {\n    InputStream stream = null;\n    BufferedInputStream buf = null;\n    try {\n      URL url = new URL(FLOWERS_FEED);\n      stream = url.openStream();\n      buf = new BufferedInputStream(stream);\n\n      StringBuilder sb = new StringBuilder();\n\n      while (true) {\n        int data = buf.read();  // gets a single character from stream, returns a character integer value if found else returns -1\n\n        if (data == -1) {\n          break;\n        } else {\n          sb.append((char) data);  // translate the integer value into a character\n        }\n      }\n      System.out.println(sb);\n    } catch(IOException e) {\n      e.printStackTrace();\n    } finally {\n      // use finally to explicitly close the stream\n      stream.close();\n      buf.close();\n    }\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-64"}, "c#"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Create or Save file\nstring filename = @"/my/file/path/fileFolder/filename.txt";\nstring textString = "data to save in file";\nSystem.IO.File.WriteAllText(filename, textString);  // existing file will be overwritten\n\n// Copy file\nbool overwrite = true;  // overwrite file if exist, else return an File already exists exception\nstring toBeCopiedFile = @"/my/file/path/fileFolder/filename.txt";\nstring toPasteFile = @"/my/file/path/fileFolder/filenameCopied";\n// method 1\nSystem.IO.File.Copy(toBeCopiedFile, toPasteFile, overwrite);\n// method 2\nSystem.IO.FileInfo file = new System.IO.FileInfo(toBeCopiedFile);\nfile.CopyTo(toPasteFile, overwrite);\n\n\n// Check if file exists\n// method 1\nSystem.IO.File.Exists(toPasteFile);  // true\n// method 2\nfile.Exists;  // true\n\n\n// Get text from file\nstring content = System.IO.File.ReadAllText(toPasteFile);\n\n\n// Delete file\nSystem.IO.File.Delete(toPasteFile);  // method 1\nfile.Delete();  // method 2 (deletes toBeCopiedFile)\n\n\n// Create new folder\nstring folder = @"/my/file/path/folderName";\nSystem.IO.Directory.CreateDirectory(folder);  // does not overwrite if folder already exists\n\n\n// Get file in folder\n// method 1\nstring searchPattern = "*.*";  // eg. get only .jpg files -> "*.jpg"\nstring[] filesArray = System.IO.Directory.GetFiles(folder, searchPattern, SearchOption.AllDirectories);\n// method 2\nSystem.IO.DirectoryInfo dirInfo = new System.IO.DirectoryInfo(folder);\nSystem.IO.FileInfo[] filesArray2 = dirInfo.GetFiles("*", SearchOption.AllDirectories);\n\n\n// Get folders in folder\nstring[] foldersArray = System.IO.Directory.GetDirectories(folder, searchPattern, SearchOption.AllDirectories);\nSystem.IO.DirectoryInfo[] foldersArray = dirInfo.GetDirectories();\n\n\n// Check if folder exists\nSystem.IO.Directory.Exists(folder);  // true\n\n\n// Get filename of a file from path\nPath.GetFileName(toBeCopiedFile);  // "filename.txt"\n\n\n// Get file extension of a file from path\nPath.GetExtension(toBeCopiedFile);  // ".txt"\n\n\n// Get filename without file extension of a file from path\nPath.GetFileNameWithoutExtension(toBeCopiedFile);  // "filename"\n\n\n// Get directory name of a file from path\nPath.GetDirectoryName(toBeCopiedFile);  // "fileFolder"\n\n\n// Open file (not in app)\nSystem.Diagnostics.Process.Start(filename);\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-65"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "access-modifier"}, "Access modifier"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "use to hide the implementation details of a class"
            )
          ),
          (0, i.kt)("h3", {id: "python-5"}, "python"),
          (0, i.kt)("h3", {id: "javascript-23"}, "javascript"),
          (0, i.kt)("h3", {id: "typescript-10"}, "typescript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "3 types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Public: ",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "By default, members (properties and methods) of TypeScript class are public"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "Public members are accessible everywhere without restrictions"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Private: ",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "A private member cannot be accessed outside of its containing class"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "Private members can be accessed only within the class."
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Protected: ",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "A protected member cannot be accessed outside of its containing class"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "Protected members can be accessed only within the class and by the instance of its sub/child class."
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "ruby-37"}, "ruby"),
          (0, i.kt)("h3", {id: "java-38"}, "java"),
          (0, i.kt)("h3", {id: "c-66"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "6 types",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "public: accessible from everywhere in project, no accessibility restrictions"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "class NumberClass\n{\n    public int number = 10;\n}\n \nclass MainClass\n{\n    static void Main(string[] args)\n    {\n        NumberClass num = new NumberClass();\n        System.Console.WriteLine(num.number);  // This is OK. The number variable has the public access modifier.\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "private: accessible only from inside a class or a structure, can't access them outside the class they are created"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "class NumberClass\n{\n    private int number = 10;\n}\n \nclass MainClass\n{\n    static void Main(string[] args)\n    {\n        NumberClass num = new NumberClass();\n        System.Console.WriteLine(num.number);  // Error. We can't access the number variable because \n        // it has the private access modifier and its only accessible in the NumberClass class\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "protected: object is accessible inside the class and in all classes that derive from that class"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "class NumberClass\n{\n    protected int number = 10;  // we can access this variable inside this class\n}\n \nclass DerivedClass: NumberClass  // this is inheritance. DerivedClass derives from the NumberClass class\n{\n    void Print()\n    {\n        System.Console.WriteLine(number);  // we can access it in this class as well because it derives from the NumberClass class\n    }\n}\n \nclass MainClass\n{\n    void Print()\n    {\n        NumberClass num = new NumberClass();\n        System.Console.WriteLine(num.number);  // Error. The number variable is inaccessible due to its protection level. \n        // The Program class doesn't derive from the NumberClass\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "internal: object is accessible only inside its own assembly (project) but not in other assemblies (projects)"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "//First Project (ASSEMBLY)\npublic class NumberClassInFirstProject\n{\n    internal int number = 10;  // we can access this variable inside this class\n}\n \nclass Program1\n{\n    public static void Main()\n    {\n        NumberClassInFirstProject num = new NumberClassInFirstProject();\n        System.Console.WriteLine(num.number);  // This is OK. Anywhere in this project (assembly) \n        // we can access the number variable.\n    }\n}\n\n\n//Second project (ASSEMBLY)\nclass Program2\n{\n    public static void Main()\n    {\n        NumberClassInFirstProject num = new NumberClassInFirstProject();\n        System.Console.WriteLine(num.number);  // Error. The number variable is inaccessible due to its protection level. \n        // The Program class in second project can't access the internal members from another project\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "protected internal: a combination of protected and internal, can access the protected internal member only in the same assembly (project) or in a derived class in other assemblies (projects)"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "//First Project (ASSEMBLY)\npublic class NumberClassInFirstProject\n{\n    protected internal int number = 10;  // we can access this variable inside this class\n}\n \nclass Program1\n{\n    public static void Main()\n    {\n        NumberClassInFirstProject num = new NumberClassInFirstProject();\n        System.Console.WriteLine(num.number);  // This is OK. Anywhere in this project (assembly) we can access the number variable.\n    }\n}\n \n//Second project (ASSEMBLY)\nclass Program2: NumberClassInFirstProject  // Inheritance\n{\n    public static void Main()\n    {\n        System.Console.WriteLine(number);  // This is OK as well. The class Program derives from the NumberClassInFirstProject class.\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "private protected: a combination of private and protected, can access members inside the containing class or in a class that derives from a containing class, but only in the same assembly (project)"
            )
          ),
          (0, i.kt)("h3", {id: "c-67"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "iterators"}, "Iterators"),
          (0, i.kt)("h3", {id: "python-6"}, "python"),
          (0, i.kt)("h3", {id: "javascript-24"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "let i = [1, 2];\n\nlet iterator = i[Symbol.iterator]();\n\niterator.next();  // { value: 1, done: false }\niterator.next();  // { value: 2, done: false }\niterator.next();  // { value: undefined, done: true }\n"
            )
          ),
          (0, i.kt)("h3", {id: "ruby-38"}, "ruby"),
          (0, i.kt)("h3", {id: "java-39"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "using iterators to loop through collections"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// import java.util.List;\n// import java.util.ArrayList;\n// import java.util.Iterator;  // must import\n\nList<String> list = new ArrayList<>();\nlist.add("Japan");\nlist.add("China");\nlist.add("USA");\n\n// method 1: using Iterator\nIterator<String> iterator = list.iterator();\nwhile (iterator.hasNext()) {\n  String value = iterator.next();\n  System.out.println(value);\n}\n// method 2: using forEach loop\nfor (String value: list) {\n  System.out.println(value);\n}\n// method 3: using List\'s forEach method, only available for Java 8 onwards, not included in android java 8\nlist.forEach(System.out::println);  // method 1\nlist.forEach((s) -> {System.out.println(s});  // method 2\n\n\n// loop hash maps with Iterator\n// import java.util.Map;\n// import java.util.HashMap;\n// import java.util.Set;\n// import java.Iterator;\nMap<String, String> map = new HashMap<>();\nmap.put("jp", "Japan");\nmap.put("sg", "Singapore");\nmap.put("usa", "United States");\nSet<String> keys = map.keySet();\n\nIterator<String> iterator = keys.iterator();\nwhile (iterator.hasNext()) {\n  String key = iterator.next();\n  System.out.println(map.get(key));\n}\n\n// loop has maps with forEach\nfor (String key : keys) {\n  System.out.println(map.get(key));\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-68"}, "c#"),
          (0, i.kt)("h3", {id: "c-69"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "generators"}, "Generators"),
          (0, i.kt)("h3", {id: "python-7"}, "python"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'def generator_example():\n    yield 1\n\nx = generator_example():\nnext(x)  # 1\n    \ndef infinite_maker():\n    i = 0\n    while True:\n        yield i\n        i += 1\n\nx = infinite_maker()\nnext(x)  # 0\nnext(x)  # 1\n\n# generator expression\ny = (i for i in range(10))\nprint(next(y))  # 0\nprint(next(y))  # 1\n\n\n# send, throw, close method\ndef generator_ex():\n    num = 0\n    while True:\n        j = yield num\n        if j is not None:\n            num = j\n        num += 1\n\n\nx = generator_ex()\nfor i in x:\n    print(i)  # prints out the yield result of num\n    digits = len(str(i))\n    if (i > 100):\n        # method 1\n        x.throw(ValueError("value is above 100"))\n        # method 2\n        x.close()  # raises StopIteration, an exception used to signal the end of a finite iterator\n    # when a yield result is available, return the new value into the generator (eg.: j takes the new value)\n    x.send(10 ** (digits))  # 0 12 102\n\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-25"}, "javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'function* generatorExample1() {\n  yield 1;\n  yield 2;\n}\n\nfunction *generatorExample2() {\n  yield 1;\n  yield 2;\n}\n\nlet iterator1 = generatorExample1();\nlet iterator2 = generatorExample2();\n\niterator1.next();  // { value: 1, done: false }\niterator1.next();  // { value: 2, done: false }\niterator1.next();  // { value: undefined, done: true }\n\niterator2.next();  // { value: 1, done: false }\niterator2.next();  // { value: 2, done: false }\niterator2.next();  // { value: undefined, done: true }\n\n\n// does not cause stackoverflow for infinite loops\nfunction* infiniteMaker() {\n  let i = 0;\n  while (true) {\n    yield i;\n    i++;\n  }\n}\n\nlet iterator3 = infiteMaker();\niterator3.next();  // { value: 0, done: false }\niterator3.next();  // { value: 1, done: false }\n\n\n// nested generators\nfunction* nestedGenerator() {\n  yield* generatorExample1();  // add * after yield to add another generator\n  yield 3;\n}\n\nlet iterator4 = nestedGenerator();\niterator4.next();  // { value: 1, done: false }\niterator4.next();  // { value: 2, done: false }\niterator4.next();  // { value: 3, done: false }\niterator4.next();  // { value: undefined, done: true }\n\n\n// using return keyword will stop the generator\nfunction* generatorWithReturn() {\n  yield 1;\n  return "hello";  // done will become true here\n  yield 2;\n}\n\nlet iterator5 = generatorWithReturn();\niterator5.next();  // { value: 1, done: false }\niterator5.next();  // { value: "hello", done: true }\niterator5.next();  // { value: undefined, done: true }\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-39"}, "ruby"),
          (0, i.kt)("h3", {id: "java-40"}, "java"),
          (0, i.kt)("h3", {id: "c-70"}, "c#"),
          (0, i.kt)("h3", {id: "c-71"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "fetching-web-data"}, "Fetching Web Data"),
          (0, i.kt)("h3", {id: "python-8"}, "python"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "fetching a webpage")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import urllib.request\n\n\nresponse = urllib.request.urlopen("http://www.google.com")\nprint(response.getcode())  # get response status code\n\ndata = response.read()\nprint(data)  # google html tags\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "fetching a json from an api")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import urllib.request\nimport json\n\n\ndef print_json(raw_data):\n    get_json_data = json.loads(raw_data)  # load string data into a dictionary\n    if "title" in get_json_data["metadata"]:\n        print(get_json_data["metadata"]["title"])\n\n    count = get_json_data["metadata"]["count"]\n    print(count)\n\n    for feature in get_json_data["features"]:\n        print(feature["properties"]["place"])\n\n\napi_url = "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/2.5_day.geojson"\n\n# open the URL and read the data\nresponse = urllib.request.urlopen(api_url)\nstatus_code = response.getcode()\n\nprint(status_code)\n\nif (status_code == 200):\n    data = response.read()\n    print_json(data)\nelse:\n    print("Error")\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "manipulate XML")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'import xml.dom.minidom\n\n\ndoc = xml.dom.minidom.parse("samplexml.xml")  # parse the xml file\nprint(doc.nodeName)\nprint(doc.firstChild.tagName)\n\nskills = doc.getElementsByTagName("skill")\nprint(f"%d skills: {skills.length}")\nfor skill in skills:\n    print(skill.getAttribute("name"))\n\n# create a new XML tag and add it into the document\nnew_skill = doc.createElement("skill")  # create a new skill tag\nnew_skill.setAttribute("name", "jQuery")\ndoc.firstChild.appendChild(new_skill)  # adds to memory but not persisted\n\nskills = doc.getElementsByTagName("skill")\nprint(f"%d skills: {skills.length}")\nfor skill in skills:\n    print(skill.getAttribute("name"))\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-26"}, "Javascript"),
          (0, i.kt)("h3", {id: "ruby-40"}, "ruby"),
          (0, i.kt)("h3", {id: "java-41"}, "java"),
          (0, i.kt)("h3", {id: "c-72"}, "c#"),
          (0, i.kt)("h3", {id: "c-73"}, "c++"),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "enum"}, "Enum"),
          (0, i.kt)("h3", {id: "python-3-9"}, "python 3"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "from enum import Enum\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'class Methods(Enum):\n  GET = "GET_VALUE"\n\n# get value\nprint(Method.GET.value)  # "GET_VALUE"\nprint(Method("GET_VALUE").value)  # "GET_VALUE"\n\n# get key\nprint(Method.GET.name)  # "GET"\nprint(Method("GET_VALUE").name)  # "GET"\n\n# check if value exist in Enum\nprint("GET_VALUE" in Methods._value2member_map_)  # True\nprint("GET" in Methods._value2member_map_)  # False\n\n# check if name exist in Enum\nprint("GET_VALUE" in Methods._member_names_)  # False\nprint("GET" in Methods._member_names_)  # True\n'
            )
          ),
          (0, i.kt)("h3", {id: "javascript-27"}, "Javascript"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              "const color = {\n  Red: 1,\n  Green: 2,\n  Blue: 3,\n};\n"
            )
          ),
          (0, i.kt)("h3", {id: "typescript-11"}, "Typescript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Enum: By default, enums begin numbering their members starting at 0"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              'enum Color {\n  Red,\n  Green,\n  Blue,\n}\nlet c: Color = Color.Green;  // 1\nlet colorName: string = Color[1];  // "Green"\n\nenum Color {\n  Red = 1,\n  Green,\n  Blue,\n}\nlet c: Color = Color.Green;  // 2\nlet colorName: string = Color[2];  // "Green"\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-41"}, "ruby"),
          (0, i.kt)("h3", {id: "java-42"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "ENUM"),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Enumerations are lists of possible values that you can use for any particular variable"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "An enumeration in java is called an enum class."
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              '// usual enums\npublic enum Names1 {\n  JOHN, PETER;\n}\n\n// setting a string value for enums\npublic enum Names2 {\n  JOHN("John"), PETER("Peter");\n  \n  private String name;\n  \n  Names2(String name) {\n    this.name = name;\n  }\n  \n  @Override\n  public String toString() {\n    return this.name;\n  }\n}\n\npublic class Person {\n  private Names1 name1 = Names1.JOHN;  // using enum to set a constant variable\n  private Names2 name2 = Names2.JOHN;\n  \n  public Names1 getName1() {\n    return this.name1;\n  }\n  \n  public Names2 getName2() {\n    return this.name2;\n  }\n}\n\npublic class Main {\n  public static void main(String[] args) {\n    Person p = new Person();\n    System.out.println(p.getName1());  // "JOHN"\n    System.out.println(p.getName2());  // "John"\n  }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-74"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Enum",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Used to manage number type constants for better clarity and maintainability"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Can be declared in namespace, in classes"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "By default, enums begin numbering their members starting at 0"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// not reccommended method\nconst int RegularAirMail = 1;\nconst int RegisteredAirMail = 2;\nconst int Express = 3;\n\n// Use enums for better management and for clarity\n// default data type is an integer\npublic enum ShippingMethod : byte  // use : byte to change default data type\n{\n  // if value is not assigned, 1st value will start with 0\n  // subsequent value will be incremented by 1 automatically if value is not assigned\n  RegularAirMail = 1,\n  RegisteredAirMail = 2,\n  Express = 3\n}\n\n// get string value (ToString method not required if using System.Console.WriteLine)\nShippingMethod method = ShippingMethod.Express.ToString();  // Express\n// get number value\nShippingMethod method = (int) ShippingMethod.Express;  // 3\n\n// retrieve string value with number value\nShippingMethod methodType = (ShippingMethod) 3;  // Express\n"
            )
          ),
          (0, i.kt)("h3", {id: "c-75"}, "c++"),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              'enum Color { red, green, blue };\n\n// enum limitations\n// 2 enumerations cannot share the same names (use enum class instead)\nenum Color2 { red, green, blue };  // throws a compilation error\n\n// no variable can have a name which is already in some enumeration\nint red = 0;  // throws a compilation error\n\n// enums are not type safe\nenum Gender { male, female };\nGender gender = male; \nColor color = red;\nif (gender == color)  // gender != color but will return true as both value are 0\n{\n   cout << "Equal";\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Enum class / scoped enumerations",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "makes enumeration both strongly typed & strongly scoped"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "does not allow implicit conversion to int"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "does not compare enumerators from a different enumerations"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// Declaration\nenum class Color{ Red, Green, Blue};\n\n// Initialisation\nColor col = Color::Red;\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          ),
          (0, i.kt)("h2", {id: "language-specific"}, "Language Specific"),
          (0, i.kt)("h3", {id: "python-9"}, "python"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Shebang line / hashbang",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is a common pattern for unix based systems"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "allows a script to be invoked from the command line"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "written on the first line in the python file"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "#!"),
                  " marks the shebang"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "#!/usr/bin/env python3\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# List comprehension\n# original method\narr = []\nfor i in range(5):\n arr.append(i)\nprint(arr)  # [0, 1, 2, 3, 4]\n\n# List comprehension method\narr = [i for i in range(5)]\nprint(arr)  # [0, 1, 2, 3, 4]\n\n# List comprehension with conditional statement\narr = [i for i in range(5) if i < 3]\nprint(arr)  # [0, 1, 2]\n\n# Tuples (similar to list, but are immutable)\ntuple1 = (1, 2, "3")\n\n# Sets (only have unique values)\n# create set\nset1 = set([1, 2])  # method 1\nset2 = {1, 2}  # method 2\n\n# join 2 sets together\nset3 = set1 | set2  # {1, 2}\n\n# add element to set\nset1.add(3)  # {1, 2, 3}\n\n# add set2 to set1\nset1 |= set2  # {1, 2, 3}\n\n# remove element from set from element\nset1.discard(2)  # {1, 3}\n\n# Get intersection of 2 sets\nset1.intersection(set2)  # {1}\n\n# Get unique value from the 2 sets\nset1.symmetric_difference(set2)  # {2, 3}\n\n# Get values from set1 that set2 does not have\nset1.difference(set2)  # {3}\n\n# delete all values from set\nset1.clear()  # set()\n\n# Create a set that cannot be modified\nset_fixed = frozenset([1, 2, 3])\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# modify global variable from local\nvar = "from global"\n\nprint(var)  # from global\n\ndef convert_local_to_global:\n    global var  # without the keyword global, cannot modify global variable var locally unlike javascript\n    var = "from local"\n\nprint(var)  # from local\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# undefine an existing variable\nvar = 123\n\nprint(var)  # 123\n\ndel var\n\nprint(var)  # NameError: name 'var' is not defined\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "# find the sum of values that are True in an array\nsum([True, False, True])  # 2\n"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              '# convert character to number\nord("a")  # 97\n\n# convert number to character\nchr(97)  # a\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "function annotatins"),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)("inlineCode", {parentName: "li"}, "int"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "float"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "bool"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "str"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "bytes"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "None")
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "python 3.8 & earlier, ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "list"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "set"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "dict"),
              ", ",
              (0, i.kt)("inlineCode", {parentName: "li"}, "tuple"),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("inlineCode", {parentName: "li"}, "list[int]"),
                  ", ",
                  (0, i.kt)(
                    "inlineCode",
                    {parentName: "li"},
                    "dict[float, str]"
                  ),
                  ", ",
                  (0, i.kt)("inlineCode", {parentName: "li"}, "Tuple[int, ...]")
                )
              )
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "python 3.9+",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "can import types from typing library"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              'from typing import List, Set, Dict, Tuple, Optional, Callable, Iterator, Union, Any, cast, Mapping, MutableMapping, Sequence, Match, AnyStr, IO\n\nisValid: bool = True;\n\ndef foo(a:\u201dint\u201d, b:\u201dfloat\u201d=5.0)  -> \u201dint\u201d:\n    pass\n    \n  \nx: Optional[str] = some_function()  # use Optional[] for values that could be None\n  \nx: Callable[[int, float], float] = f\n\n# A generator function that yields ints is secretly just a function that\n# returns an iterator of ints,\ndef g(n: int) -> Iterator[int]:\n    i = 0\n    while i < n:\n        yield i\n        i += 1\n\n# can also split a function annotation over multiple lines\ndef send_email(address: Union[str, List[str]],\n               sender: str,\n               cc: Optional[List[str]],\n               bcc: Optional[List[str]],\n               subject=\'\',\n               body: Optional[List[str]] = None\n               ) -> bool:\n                 \n# An argument can be declared positional-only by giving it a name starting with two underscores:\ndef quux(__x: int) -> None:\n    pass\n\nquux(3)  # Fine\nquux(__x=3)  # Error\n  \n# To find out what type mypy infers for an expression anywhere in\n# your program, wrap it in reveal_type().  Mypy will print an error\n# message with the type; remove it again before running the code.\nreveal_type(1)  # -> Revealed type is "builtins.int"\n\n# Use Union when something could be one of a few types\nx: List[Union[int, str]] = [3, 5, "test", "fun"]\n\n# Use Any if you don\'t know the type of something or it\'s too\n# dynamic to write a type for\nx: Any = mystery_function()\n\n# If you initialize a variable with an empty container or "None"\n# you may have to help mypy a bit by providing a type annotation\nx: List[str] = []\nx: Optional[str] = None\n\n# This makes each positional arg and each keyword arg a "str"\ndef call(self, *args: str, **kwargs: str) -> str:\n    request = make_request(*args, **kwargs)\n    return self.do_api_query(request)\n\n# Use a "type: ignore" comment to suppress errors on a given line,\n# when your code confuses mypy or runs into an outright bug in mypy.\n# Good practice is to comment every "ignore" with a bug link\n# (in mypy, typeshed, or your own code) or an explanation of the issue.\nx = confusing_function()  # type: ignore  # https://github.com/python/mypy/issues/1167\n\n# "cast" is a helper function that lets you override the inferred\n# type of an expression. It\'s only for mypy -- there\'s no runtime check.\na = [4]\nb = cast(List[int], a)  # Passes fine\nc = cast(List[str], a)  # Passes fine (no runtime check)\nreveal_type(c)  # -> Revealed type is "builtins.list[builtins.str]"\nprint(c)  # -> [4]; the object is not cast\n\n# If you want dynamic attributes on your class, have it override "__setattr__"\n# or "__getattr__" in a stub or in your source code.\n#\n# "__setattr__" allows for dynamic assignment to names\n# "__getattr__" allows for dynamic access to names\nclass A:\n    # This will allow assignment to any A.x, if x is the same type as "value"\n    # (use "value: Any" to allow arbitrary types)\n    def __setattr__(self, name: str, value: int) -> None: ...\n\n    # This will allow access to any A.x, if x is compatible with the return type\n    def __getattr__(self, name: str) -> int: ...\n\na.foo = 42  # Works\na.bar = \'Ex-parrot\'  # Fails type checking\n\n# Use Iterable for generic iterables (anything usable in "for"),\n# and Sequence where a sequence (supporting "len" and "__getitem__") is\n# required\ndef f(ints: Iterable[int]) -> List[str]:\n    return [str(x) for x in ints]\n\nf(range(1, 3))\n\n# Mapping describes a dict-like object (with "__getitem__") that we won\'t\n# mutate, and MutableMapping one (with "__setitem__") that we might\ndef f(my_mapping: Mapping[int, str]) -> List[int]:\n    my_mapping[5] = \'maybe\'  # if we try this, mypy will throw an error...\n    return list(my_mapping.keys())\n\nf({3: \'yes\', 4: \'no\'})\n\ndef f(my_mapping: MutableMapping[int, str]) -> Set[str]:\n    my_mapping[5] = \'maybe\'  # ...but mypy is OK with this.\n    return set(my_mapping.values())\n\nf({3: \'yes\', 4: \'no\'})\n\n# User-defined classes are valid as types in annotations\nx: MyClass = MyClass()\n\n# "typing.Match" describes regex matches from the re module\nimport re\nx: Match[str] = re.match(r\'[0-9]+\', "15")\n\n# Use IO[] for functions that should accept or return any\n# object that comes from an open() call (IO[] does not\n# distinguish between reading, writing or other modes)\ndef get_sys_IO(mode: str = \'w\') -> IO[str]:\n    if mode == \'w\':\n        return sys.stdout\n    elif mode == \'r\':\n        return sys.stdin\n    else:\n        return sys.stdout\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Async await")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-python"},
              "import asyncio\n\n# A coroutine is typed like a normal function\nasync def countdown35(tag: str, count: int) -> str:\n    while count > 0:\n        print('T-minus {} ({})'.format(count, tag))\n        await asyncio.sleep(0.1)\n        count -= 1\n    return \"Blastoff!\"\n"
            )
          ),
          (0, i.kt)("h3", {id: "javascript-28"}, "javascript"),
          (0, i.kt)("ul", null, (0, i.kt)("li", {parentName: "ul"}, "Set")),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// Create a Set\nconst letters = new Set(["a", "b"]);  // or new Set();\n\n// Add Values to the Set\nletters.add("c");\n\n// size of set\nletters.size;  // 3\n\n// check if value exist\nletters.has("a");  // true\n\n// delete an element\nletters.delete("a");\n\n// loop through a set, keys and values are the same\nfor (const letter of letters.keys()) {  // similar to letters.values\n  console.log(letter);\n}\n\n// loop through a set and get both keys and values\nfor (const letter of letters.entries()) {  // similar to letters.values\n  console.log(letter);  // ["b", "b"]\n}\n\n// delete everything in the set\nletters.clear();\n'
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '// convert character at index 0 to number\n"a".charCodeAt();  // 97\n\n// convert character at a specific index to number\n"abc".charCodeAt(1);  // 98\n\n// convert number to character\nString.fromCharCode(97);  // "a"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Explicit Binding",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  'choose what we want the context of "this" to be by using call, apply or bind'
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  'by refering to the call, apply, or bind methods, you can determine the value of "this"'
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "can only be used on FUNCTIONS"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              '/*\nNAME OF METHOD  | PARAMETERS                | INVOKE IMMEDIATELY?\n    CALL        |   thisArg,a,b,c,...       |       Yes\n    APPLY       |   thisArg,[a,b,c,...]     |       Yes\n    BIND        |   thisArg,a,b,c,...       |       No\n\nCALL args can be set to anything and can have infinite arguments, function is immediately invoked\nAPPLY only takes 2 args, the 2nd arg is an array of infinite arguments, function is immediately invoked\nBIND can have infinite arguments, and is a method that returns a function definition\n*/\nvar foo = {\n  firstName: "Foo",\n  say: function() {\n    return "Hi " + this.firstName;\n  },\n  add: function(a, b, c) {\n    return this.firstName + " just calculated " + (a + b + c);\n  }\n}\nvar bar = {\n  firstName: "Bar"\n}\n// Call: allow this to be referenced to bar instead of foo, all arguments must not be undefined\nfoo.say() // returns "Hi Foo"\nfoo.say.call(bar) // returns "Hi Bar"\nfoo.add.call(bar, 1, 2, 3); // returns "Bar just calculated 6"\n\n// Apply: simlar to Call for the 1st argument, 2nd argument has to be an array of values, all arguments must not be undefined\nfoo.say.apply(bar) // returns "Hi Bar"\nfoo.add.apply(bar, [1, 2, 3]); // returns "Bar just calculated 6"\n\n// Bind: returns the function, then requires it to be called\n// all agruments need not be defined upfront, but must provide remaining arguments when calling\nvar say = foo.say.bind(bar);\nsay(); // returns "Hi Bar"\nvar add = foo.add.bind(bar, 1, 2);\nadd(3); // returns "Bar just calculated 6"\n\n// Bind is commonly used when dealing with asynchronous code\nvar foo = {\n  firstName: "Foo",\n  say: function() {\n    setTimeout(function() {\n      console.log("Hi " + this.firstName;\n    }.bind(this), 1000);\n  }\n}\nfoo.say(); // prints "Hi Foo", if without bind(this), prints "Hi undefined"\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Proxy",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "checks for the number of times the field in the object has been accessed"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "each time the field has been accessed, the defined logic will occur"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-javascript"},
              'const target = {};\nconst handler = {\n  get: function (targetObj, field) {\n    if (field === "nextId") {  // field name must be the same when called\n      if (targetObj[field] === undefined) {\n        targetObj[field] = 1;\n        return targetObj[field];\n      }\n      targetObj[field]++;\n      return targetObj[field];\n    }\n    return undefined;\n  },\n};\n\nconst proxy = new Proxy(target, handler);\nconsole.log(proxy.nextId);  // 1  (field name must be the same as when doing the conditional check)\nconsole.log(proxy.nextId);  // 2\nconsole.log(proxy.nextId);  // 3\n'
            )
          ),
          (0, i.kt)("h3", {id: "typescript-12"}, "typescript"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              'Declaring with type as "any": use to declare variable type if you do not know its type',
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "will receive an error if use methods for the wrong type (no auto checking)"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              'let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = false; // okay, definitely a boolean\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Tuples: allow you to express an array with a fixed number of elements whose types are known, but need not be the same (immutable)"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              '// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ["hello", 10]; // OK\n// Initialize it incorrectly\nx = [10, "hello"]; // Error\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Generics")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-typescript"},
              '// "T" can be name as anything, used "T" due to convention\nfunction genericFunc<T>(value: T): T {  // T is the type base on the value type given in the parameter when called\n  return value;\n}\n\nconsole.log(genericFunc("str type"));  // type are declared base on the input value type\nconsole.log(genericFunc(123));\nconsole.log(genericFunc(false));\n'
            )
          ),
          (0, i.kt)("h3", {id: "ruby-42"}, "ruby"),
          (0, i.kt)("h3", {id: "java-43"}, "java"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Number formatting")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'long longValue = 10_000_000;\n// method 1\n// using "import java.text.NumberFormat;"\nNumberFormat formatter = NumberFormat.getNumberInstance();\nString formatted = formatter.format(lognValue);  // "10,000,000" (us locale)\n// method 2\n// using "import java.util.Locale;"\nLocale locale = new Locale("da", "DK");  // set as Denmark\nNumberFormat formatter = NumberFormat.getNumberInstance(locale);\nString formatted = formatter.format(lognValue);  // "10.000.000" (dk locale)\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Currency formatting")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'long longValue = 10_000_000.00;\n// method 1\n// using "import java.text.NumberFormat;"\nNumberFormat formatter = NumberFormat.getCurrencyInstance();\nString formatted = formatter.format(lognValue);  // "$10,000,000.00" (us locale)\n// method 2\n// using "import java.util.Locale;"\nLocale locale = new Locale("da", "DK");  // set as Denmark\nNumberFormat formatter = NumberFormat.getCurrencyInstance(locale);\nString formatted = formatter.format(lognValue);  // "kr10.000.000,00" (dk locale)\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Integer formatting")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-java"},
              'long longValue = 10_000_000.89;\n// method 1\n// using "import java.text.NumberFormat;"\nNumberFormat formatter = NumberFormat.getIntegerInstance();\nString formatted = formatter.format(lognValue);  // "10,000,001" (us locale)\n// method 2\n// using "import java.util.Locale;"\nLocale locale = new Locale("da", "DK");  // set as Denmark\nNumberFormat formatter = NumberFormat.getIntegerInstance(locale);\nString formatted = formatter.format(lognValue);  // "10.000.001" (dk locale)\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              (0, i.kt)(
                "p",
                {parentName: "li"},
                "double colon operator / method reference operator"
              ),
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)(
                    "p",
                    {parentName: "li"},
                    (0, i.kt)(
                      "inlineCode",
                      {parentName: "p"},
                      "<Class name>::<method name>"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  (0, i.kt)("p", {parentName: "li"}, "can be used for"),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)("li", {parentName: "ul"}, "a static method")
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'import java.util.*;\n\nclass GFG {\n  // static function to be called\n  static void someFunction(String s)\n  {\n    System.out.println(s);\n  }\n\n  public static void main(String[] args)\n  {\n    List<String> list = new ArrayList<String>();\n    list.add("Geeks");\n    list.add("For");\n    list.add("GEEKS");\n\n    // call the static method\n    // using double colon operator\n    list.forEach(GFG::someFunction);\n  }\n}\n'
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)("li", {parentName: "ul"}, "an instance method")
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'import java.util.*;\n\nclass GFG {\n  // instance function to be called\n  void someFunction(String s)\n  {\n    System.out.println(s);\n  }\n\n  public static void main(String[] args)\n  {\n    List<String> list = new ArrayList<String>();\n    list.add("Geeks");\n    list.add("For");\n    list.add("GEEKS");\n\n    // call the instance method\n    // using double colon operator\n    list.forEach((new GFG())::someFunction);\n  }\n}\n'
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)("li", {parentName: "ul"}, "super method")
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'import java.util.*;\nimport java.util.function.*;\n\nclass Test {\n  // super function to be called\n  String print(String str)\n  {\n    return ("Hello " + str + "\\n");\n  }\n}\n\nclass GFG extends Test {\n  // instance method to override super method\n  @Override\n  String print(String s)\n  {\n    // call the super method\n    // using double colon operator\n    Function<String, String> func = super::print;\n    \n    String newValue = func.apply(s);\n    newValue += "Bye " + s + "\\n";\n    System.out.println(newValue);\n    return newValue;\n  }\n\n  // Driver code\n  public static void main(String[] args)\n  {\n    List<String> list = new ArrayList<String>();\n    list.add("Geeks");\n    list.add("For");\n    list.add("GEEKS");\n    \n    // call the instance method\n    // using double colon operator\n    list.forEach(new GFG()::print);\n  }\n}\n'
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "Instance method of an arbitrary object of a particular type"
                    )
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'import java.util.*; \n\nclass Test { \n  String str=null;\n  \n  Test(String s)\n  {\n    this.str=s;\n  }\n  // instance function to be called \n  void someFunction() \n  { \n    System.out.println(this.str); \n  } \n} \n\nclass GFG { \n  public static void main(String[] args) \n  { \n    List<Test> list = new ArrayList<Test>(); \n    list.add(new Test("Geeks")); \n    list.add(new Test("For")); \n    list.add(new Test("GEEKS")); \n\n    // call the instance method \n    // using double colon operator \n    list.forEach(Test::someFunction); \n  } \n}\n'
                    )
                  ),
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)("li", {parentName: "ul"}, "a constructor")
                  ),
                  (0, i.kt)(
                    "pre",
                    {parentName: "li"},
                    (0, i.kt)(
                      "code",
                      {parentName: "pre", className: "language-java"},
                      'import java.util.*;\n\nclass GFG {\n  // Class constructor\n  public GFG(String s)\n  {\n    System.out.println("Hello " + s);\n  }\n\n  // Driver code\n  public static void main(String[] args)\n  {\n    List<String> list = new ArrayList<String>();\n    list.add("Geeks");\n    list.add("For");\n    list.add("GEEKS");\n\n    // call the class constructor\n    // using double colon operator\n    list.forEach(GFG::new);\n  }\n}\n'
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)("h3", {id: "c-76"}, "c#"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Overloading",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "having multiple similar methods with different signatures"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "allows multiple different input data types for the same feature"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// Overloading constructors\n// overloaded constructors are separate \npublic class Print {\n  public Print() {\n    System.Console.Write("test");\n  }\n  \n  public Print(string x) {\n    System.Console.Write(x);\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Print print = new Print();  // "first"\n    Print print2 = new Print("second");  // "second"\n  }\n}\n\n\n// overloaded constructors are linked\npublic class Print {\n  public Print() {\n    System.Console.Write("first");\n  }\n  \n  public Print(string x) : this() {  // add ": this()" to link with default constructor\n    System.Console.Write(x);\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Print print = new Print("second");  // "firstsecond"\n  }\n}\n\n\n// Overloading methods\npublic class Point {\n  public int X;\n  public int Y;\n  \n  public Point(int x, int y) {  // constructor\n    this.X = x;\n    this.Y = y;\n  }\n  \n  public void Move (int x, int y) {\n    this.X = x;\n    this.Y = y;\n  }\n  \n  public void Move(Point newLocation) {  // overloading the 1st Move method\n    Move(newLocation.X, newLocation.Y);\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Overflowing",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "c# does not check for overflow",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "this means that value of a variable can be modified during runtime and when the value goes beyond the boundary of it's data type, overflow will occur"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "e.g.: byte num = 255; num++;  // num value will be the surplus value (in this case 0)"
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// If overflow is not desired, use checked keyword to enable overflow checking\n// In the following example, increment will not occur and an exception will be thrown, which will cause an error\nchecked {\n  byte number = 255;\n  number++;\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Ref Modifier",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)("li", {parentName: "ul"}, "Modifies value type"),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "when pasing a value type to a method, a copy of the variable is sent to the method",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "changes applied to that variable in the method will not be visible upon return from the method"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "the value type can be modified using the ref modifier",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "when the ref modifier is used, a reference to the original variable will be sent to the target method"
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// typical value type cannot be modified case\npublic class Calculator {\n  public int Add(int num){\n    num += 2;\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Calculator cal = new Calculator3();\n    int num = 1;\n    cal.Add(num);\n    System.Console.WriteLine(num);  // 1\n  }\n}\n\n\n// using Ref Modifier\npublic class Calculator {\n  public int Add(ref int num){  // add ref keyword\n    num += 2;\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Calculator cal = new Calculator3();\n    int num = 1;\n    cal.Add(ref num);  // add ref keyword\n    System.Console.WriteLine(num);  // 3\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Out Modifier",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "use to return multiple values from a method"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "any parameter declared with the out modifier is expected to receive a value at the end of the method"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// not using the "out" keyword will result in an error\npublic class Person {\n  public void GetName(string name){\n    name = "myName";\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Person person = new Person();\n    string name;  // unassigned local variable error\n    person.GetName(name);\n    System.Console.WriteLine(name);\n  }\n}\n\n\n// using the "out" keyword\npublic class Person {\n  public void GetName(out string name){\n    name = "myName";\n  }\n}\n\nclass MainClass {\n  public static void Main(string[] args) {\n    Person person = new Person();\n    string name;\n    person.GetName(out name);\n    System.Console.WriteLine(name);  // "myName"\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Readonly modifier",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Prevents accidental overwriting of the value"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// without readonly modifier\npublic System.Collections.Generic.List<int> orders = new System.Collections.Generic.List<int>();\n\npublic void MakeOrder() {\n  orders = new System.Collections.Generic.List<int>();  // a new list will be reassigned\n}\n\n\n// using readonly modifier\npublic readonly System.Collections.Generic.List<int> orders = new System.Collections.Generic.List<int>();\n\npublic void MakeOrder() {\n  orders = new System.Collections.Generic.List<int>();  // this will produce an error that the variable cannot be assigned\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Abstract modifier (polymorphism)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "what?",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "indicates that a class or a member (method) is missing implementation"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "if a method is declared as abstract, the containing class needs to be declared as abstract too"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "the abstract methods must be implemented in the child class"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "abstract classes cannot be instantiated"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "why?",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "use abstract when you want to provide some common behavior, while forcing other developers to follow your design"
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public abstract class ParentClassName {  // if a method has an abstract keyword, the class must also have the abstract keyword\n  public abstract void FunctionName();  // this will allow the child class to override this method\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Virtual modifier (polymorphism)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Used to modify a method, property, indexer, or event declaration and allow for it to be overridden in a derived (child) class"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "cannot be used with the static, abstract, private, or override modifiers"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class ParentClassName { \n  public virtual void FunctionName() {  // this will allow the child class to override this method\n    do_something;\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Override modifier (polymorphism)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "required to extend or modify the abstract or virtual implementation of an inherited method, property, indexer, or event"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class ChildClassName : ParentClassName {\n  public override void FunctionName() {  // this will override the inherited method\n    do_something;\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Sealed modifier (polymorphism)",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "prevents other classes from inheriting from it"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is the opposite of abstract classes"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Use sealed modifier because selaed classes are slightly faster due to some run-time optimizations"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// method 1: applying sealed modifier to the child class will prevent us from being able to create a class that derives from the child class\npublic sealed class ChildClassName : ParentClassName {  // new class will not be able to inherit from ChildClassName\n  public override void FunctionName() {\n    do_something;\n  }\n}\n\n\n// method 2: applying sealed modifier to the overriding methods\npublic class ChildClassName : ParentClassName {\n  public sealed override void FunctionName() {  // new class will be able to inherit from ChildClassName but will be unable to override the FunctionName that is sealed\n    do_something;\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Dynamic type",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "does not work on Apple products (Mac, IOS)"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "converting dynamic to static type does not require casting"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// static type\nstring a = "test";  // cannot reassign to a different data type\n\n// dynamic type\ndynamic b = "test";  // allows variable to be reassigned to a different data type\nb = 123;\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Generics",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "allows the creating of types that use other types"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "make classes reusable and with type-safety"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Stack<T> {  // let data type be T\n  public T testValue { get; set; }\n  private System.Collections.Generic.List<T> stack = new System.Collections.Generic.List<T>();  // use data type\n\n  public T Peek() {  // set return data type as T\n    try {\n      return stack[stack.Count - 1];\n    } catch (System.ArgumentOutOfRangeException) {\n      return default(T);  // return default value of data type T\n    }\n  }\n\n  public void Push(T data) {  // set arg data type as T\n    stack.Add(data);\n  }\n\n  public T Pop() {\n    int lastIndex = stack.Count - 1;\n    T val = stack[lastIndex];  // set data type as T\n    stack.RemoveAt(lastIndex);\n    return val;\n  }\n}\n\npublic class Printer {\n  public void Print<T>(Stack<T> stack) {\n    System.Console.WriteLine(stack.testValue);\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Stack<string> s = new Stack<string>() {testValue="abc"};  // method 1\n    // Stack<string> s = new Stack<string> {testValue="abc"};  // method 2\n    // Stack<string> s = new Stack<string>();  // method 3\n    Printer p = new Printer();\n    p.Print(s);  // "abc", method 3 will cause this to result with ""\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Generic contraints",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Contraints are validations that we can put on generic type parameter"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "at the instantiation time of generic class, if client provides invalid type parameter then compiler will give an error"
                ),
                (0, i.kt)("li", {parentName: "ul"}, "6 types of contraints")
              )
            )
          ),
          (0, i.kt)(
            "ol",
            null,
            (0, i.kt)("li", {parentName: "ol"}, "where T : InterfaceName")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "// method 1: defining generics in methods with contraints\npublic class Maths {\n  public int Max(int a, int b) {  // normal method\n    return a > b ? a : b;\n  }\n  \n  public T Max<T>(T a, T b) where T : System.IComparable {\n    // return a > b ? a : b;  // this will produce an error\n    return a.CompareTo(b) > 0 ? a : b;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Maths m = new Maths();\n    int max1 = m.Max(2, 8);  // 8\n    float max2 = m.Max(3.3f, 6.5f);  // 6.5\n  }\n}\n\n\n// method 2: defining generics at class with contraints\npublic class Maths<T> where T : System.IComparable {\n  public int Max(int a, int b) {  // normal method\n    return a > b ? a : b;\n  }\n  \n  public T Max(T a, T b) {\n    return a.CompareTo(b) > 0 ? a : b;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Maths<int> m = new Maths<int>();\n    int max1 = m.Max(2, 8);  // 8\n    Maths<float> m = new Maths<float>();\n    float max2 = m.Max(3.3f, 6.5f);  // 6.5\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ol",
            {start: 2},
            (0, i.kt)("li", {parentName: "ol"}, "where T : parentClass")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class Product {\n  public string Title { get; set; }\n  public float Price { get; set; }\n}\n\npublic class Calculator<T> where T : Product {\n  public float Cost(T product) {\n    return product.Price;\n  }\n}\n\nclass MainClass {\n  public static void Main() {\n    Product p = new Product { Price = 2.3f };\n    Calculator<Product> c = new Calculator<Product>();\n    System.Console.WriteLine(c.Cost(p));  // 2.3\n  }\n}\n"
            )
          ),
          (0, i.kt)(
            "ol",
            {start: 3},
            (0, i.kt)("li", {parentName: "ol"}, "where T : struct")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class Nullable<T> where T : struct {\n    private object _value;\n\n    public bool HasValue { \n        get { return _value != null; }\n    }\n\n    public Nullable() { }\n\n    public Nullable(T value) {\n        _value = value;\n    }\n\n    public T GetValueOrDefault() {\n        if (HasValue)\n            return (T)_value;\n        return default(T);\n    }\n}\n\nclass MainClass {\n    public static void Main() {\n        Nullable<int> num = new Nullable<int>(5);\n        System.Console.WriteLine(num.HasValue);  // true\n        System.Console.WriteLine(num.GetValueOrDefault());  // 5\n        \n        Nullable<int> num2 = new Nullable<int>();\n        System.Console.WriteLine(num2.HasValue);  // false\n        System.Console.WriteLine(num2.GetValueOrDefault());  // 0\n        \n        Nullable<string> str = new Nullable<string>();  // error as string is not a value type\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ol",
            {start: 4},
            (0, i.kt)("li", {parentName: "ol"}, "where T : class")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class NodeList<T> where T : class\n{}\n\nclass MainClass {\n    public static void Main(string[] args) {\n        NodeList<int> nodesOfInt = new NodeList<int>();  // error as int is a value type\n        NodeList<string> nodesOfString = new NodeList<string>();  // string is a reference type\n        NodeList<Employee> nodesOfEmployee = new NodeList<Employee>();  // Employee is a reference type\n        NodeList<EventHandler> nodesOfAction = new NodeList<EventHandler>();  //EventHandler is a delegate and a reference type\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ol",
            {start: 5},
            (0, i.kt)("li", {parentName: "ol"}, "where T : new()")
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "new() represents default constructor"
            ),
            (0, i.kt)("li", {parentName: "ul"}, "no parameters allowed")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class NodeList<T> where T : new()\n{}\n\npublic class ClassName1 {\n    public ClassName1()\n    {}\n}\n\npublic class ClassName2 {\n    public ClassName2(dataType argName)\n    {}\n}\n\nclass MainClass {\n    public static void Main(string[] args){\n        NodeList<ClassName1> c1 = new NodeList<ClassName1>();  // no error\n        NodeList<ClassName2> c2 = new NodeList<ClassName2>();  // error as parameters are not allowed\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ol",
            {start: 6},
            (0, i.kt)("li", {parentName: "ol"}, "where T : U")
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "2 argument types (T and U)"),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "U can be an interface, abstract class, or simple class"
            ),
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "T must inherit or implements the U class"
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "public class NodeList<T, U> where T : U {\n    public void DoWork(T subClass, U baseClass)\n    {}\n}\n \npublic interface IEmployee\n{}\n \npublic class Employee : IEmployee\n{}\n \nclass MainClass{\n    public static void Main() {\n        NodeList<Employee, IEmployee> employeeNodes = new NodeList<Employee, IEmployee>();\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Delegates",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is an object that knows how to call a method (or a group of methods)"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is a reference or a pointer to a function"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is for designing extensible and flexible apps (eg frameworks)"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// without parameters\npublic delegate void DelegateName();  // use of "delegate" keyword is required\n\nclass MainClass {\n  public static void Main() {\n    // initialize delegate\n    DelegateName delegateName = new DelegateName(DoSomethingMethod);  // method 1\n    delegateName();  // run delegate\n    \n    DelegateName delegateName2 = DoSomethingMethod;  // method 2\n    delegateName2();\n    \n    DelegateName delegateName3 = DoSomethingMethod;\n    RunDelegate(delegateName3);  // method 3\n    \n    DelegateName delegateName4 = GetMyDelegate();  // method 4\n    RunDelegate(delegateName4);\n    \n    DelegateName delegateName5 = delegate() { doSomething; }  // method 5: using anonymous methods\n    delegateName5();\n    \n    DelegateName delegateName6 = delegate() { return doSomething; }  // method 6: return value with anonymous methods\n    dataType variableName = delegateName6();\n    \n    DelegateName delegateName7 = () => { return doSomething; }  // method 7: return value with lambda expression\n    dataType variableName = delegateName7();\n  }\n  \n  public static void DoSomethingMethod() {\n    doSomething;\n  }\n  \n  public static void RunDelegate(DelegateName delegateName3) {\n    delegateName3();\n  }\n  \n  public static DelegateName GetMyDelegate() {\n    return new DelegateName(DoSomethingMethod);\n  }\n}\n\n\n// with parameters\npublic delegate void DelegateName(dataType argName);  // dataType must be the same as the pointed function\n\nclass MainClass {\n  public static void Main() {\n    // initialize delegate\n    DelegateName delegateName = new DelegateName(DoSomethingMethod);  // method 1\n    delegateName(argName_contents);  // must pass in argument\n    \n    DelegateName delegateName2 = DoSomethingMethod;  // method 2\n    delegateName2(argName_contents);  // must pass in argument\n    \n    DelegateName delegateName3 = DoSomethingMethod;\n    RunDelegate(delegateName3);  // method 3\n    \n    DelegateName delegateName4 = GetMyDelegate();  // method 4\n    RunDelegate(delegateName4);\n    \n    DelegateName delegateName5 = delegate(dataType argName) { doSomethingWith_argName; }  // method 5: using anonymous methods\n    delegateName5(argName_contents);\n    \n    DelegateName delegateName6 = delegate(dataType argName) { return doSomethingWith_argName; }  // method 6: return value with anonymous methods\n    dataType variableName = delegateName6(argName_contents);\n    \n    DelegateName delegateName7 = (dataType argName) => { return doSomethingWith_argName; }  // method 7: return value with lambda expression\n    dataType variableName = delegateName7(argName_contents);\n  }\n  \n  public static void DoSomethingMethod(dataType argName) {  // dataType must be the same as the delegate\n    doSomethingWith_argName;\n  }\n  \n  public static void RunDelegate(DelegateName delegateName3) {\n    delegateName3(argName_contents);  // must pass in argument\n  }\n  \n  public static DelegateName GetMyDelegate() {\n    return new DelegateName(DoSomethingMethod);\n  }\n}\n\n\n// usage example\npublic delegate void Operation(int num);\n\nclass MainClass\n{\n    public static void Main(string[] args)\n    {\n        // method 1\n        Operation op = Double;\n        ExecuteOperation(2, op);  // result 4, display 4\n        op = Triple;\n        ExecuteOperation(2, op);  // result 6, display 46\n        \n        // method 2: use chaining\n        Operation op2 = Double;\n        op2 += Triple;\n        ExecuteOperation(2, op2);  // 46\n    }\n\n    public static void Double(int num) {\n        System.Console.Write(num * 2);\n    }\n    \n    public static void Triple(int num) {\n        System.Console.Write(num * 3);\n    }\n\n    public static void ExecuteOperation(int num, Operation operation) {\n        operation(num);\n    }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Generic Delegates",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "Action: does not return a value"
                ),
                (0, i.kt)("li", {parentName: "ul"}, "Func: returns a value")
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              "class MainClass\n{\n    public static void Main(string[] args)\n    {\n        // Declares delegate and operation in 1 line, does not return a value\n        System.Action<int> op = num => { System.Console.WriteLine(num * 2); };  // similar to the Double example above\n        op(3);  // 4\n        \n        // Declares delegate and operation in 1 line, returns a value\n        // set input dataTypes first then output dataType\n        System.Func<int, int> op2 = num => { return num * 3; };\n        System.Console.WriteLine(op2(2));  // 6\n    }\n}\n"
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Events",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "it is a way for 1 object to subscribe to events that are happening within another object and then do some sort of logic around that"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '// naive way of writing events\npublic class Person {\n    private string _name;\n    private ClockTower _tower;\n\n    public Person(string name, ClockTower tower) {\n        _name = name;\n        _tower = tower;\n\n        // chain events\n        _tower.Chime += () => System.Console.WriteLine($"{_name} heard the chime.");\n    }\n}\n\npublic delegate void ChimeEventHandler();\n\npublic class ClockTower {\n    public event ChimeEventHandler Chime;  // more events can be created to handle the different chime timings but it is hard coding\n\n    public void ChimeFivePM() {\n        Chime();\n    }\n\n    public void ChimeSixAM() {\n        Chime();\n    }\n}\n\nclass MainClass {\n    static void Main(string[] args) {\n        // 1 tower\n        ClockTower tower = new ClockTower();\n        // 1 tower watched by multiple People\n        Person person1 = new Person("John", tower);\n        Person person2 = new Person("Sally", tower);\n        tower.ChimeFivePM();  // can\'t tell the difference between the 2 events\n        /*\n        John heard the chime.\n        Sally heard the chime.\n        */\n        tower.ChimeSixAM();  // can\'t tell the difference between the 2 events\n        /*\n        John heard the chime.\n        Sally heard the chime.\n        */\n    }\n}\n\n\n// Using Event args\npublic class Person {  // subscriber\n    private string _name;\n    private ClockTower _tower;\n\n    public Person(string name, ClockTower tower) {\n        _name = name;\n        _tower = tower;\n\n        // chain events with +=\n        // use event args in switch case to manage multiple cases\n        _tower.Chime += (object sender, ClockTowerEventArgs args) =>\n        {\n            System.Console.WriteLine($"{_name} heard the chime from {((ClockTower)sender).name}.");\n            switch(args.Time) {\n                case 6: System.Console.WriteLine($"{_name} is waking up!");\n                    break;\n                case 17: System.Console.WriteLine($"{_name} is going home!");\n                    break;\n                default: break;\n            }\n        };\n    }\n}\n\npublic class ClockTowerEventArgs : System.EventArgs {  // create event class to distinsh between multiple cases\n    public int Time { get; set; }\n}\n\npublic delegate void ChimeEventHandler(object sender, ClockTowerEventArgs args);  // add event args to enable handling of multiple cases for 1 event type\n\npublic class ClockTower {  // publisher\n    public string name = "tower A";\n    public event ChimeEventHandler Chime;  // 1 event type to handle multiple cases\n\n    public void ChimeFivePM() {\n        Chime(this, new ClockTowerEventArgs { Time = 17 });  // use event class to create unique case\n    }\n\n    public void ChimeSixAM() {\n        Chime(this, new ClockTowerEventArgs { Time = 6 });  // use event class to create unique case\n    }\n}\n\nclass MainClass {\n    static void Main(string[] args) {\n        // 1 tower\n        ClockTower tower = new ClockTower();\n        // 1 tower watched by multiple People\n        Person person1 = new Person("John", tower);\n        Person person2 = new Person("Sally", tower);\n        tower.ChimeSixAM();\n        /*\n        John heard the chime from tower A.\n        John is waking up!\n        Sally heard the chime from tower A.\n        Sally is waking up!\n        */\n        tower.ChimeFivePM();\n        /*\n        John heard the chime from tower A.\n        John is going home!\n        Sally heard the chime from tower A.\n        Sally is going home!\n        */\n    }\n}\n\n\n// Using System.EventHandler (auto generate delegates)\npublic class Person {  // subscriber\n    private string _name;\n    private ClockTower _tower;\n\n    public Person(string name, ClockTower tower) {\n        _name = name;\n        _tower = tower;\n\n        // chain events with +=\n        // use event args in switch case to manage multiple cases\n        _tower.Chime += (object sender, ClockTowerEventArgs args) =>\n        {\n            System.Console.WriteLine($"{_name} heard the chime from {((ClockTower)sender).name}.");\n            switch(args.Time) {\n                case 6: System.Console.WriteLine($"{_name} is waking up!");\n                    break;\n                case 17: System.Console.WriteLine($"{_name} is going home!");\n                    break;\n                default: break;\n            }\n        };\n    }\n}\n\npublic class ClockTowerEventArgs : System.EventArgs {  // create event class to distinsh between multiple cases\n    public int Time { get; set; }\n}\n\n// public delegate void ChimeEventHandler(object sender, ClockTowerEventArgs args);  // not required\n\npublic class ClockTower {\n    public string name = "tower A";\n    // public event ChimeEventHandler Chime;  // convert to the following\n    public event System.EventHandler<ClockTowerEventArgs> Chime;  // by using Sysmtem.EventHandler it handles the delegate declaration for us\n\n    public void ChimeFivePM() {\n        Chime(this, new ClockTowerEventArgs { Time = 17 });\n    }\n\n    public void ChimeSixAM() {\n        Chime(this, new ClockTowerEventArgs { Time = 6 });\n    }\n}\n\nclass MainClass {\n    static void Main(string[] args) {\n        ClockTower tower = new ClockTower();\n        Person person1 = new Person("John", tower);\n        Person person2 = new Person("Sally", tower);\n        tower.ChimeSixAM();\n        tower.ChimeFivePM();\n    }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "Extension methods",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "allow us to add methods to an existing class without changing its source code or creating a new class that inherits from it"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "if have source code, modify source code instead of creating extension methods"
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Person {  // given to us by others, this source code we can\'t see or modify directly\n    public string Name { get; set; }\n    public int Age { get; set; }\n}\n\npublic static class Extensions {  // creates an extension of the Person class by using the static in class declaration\n    public static void SayHello(this Person person, Person person2) {  // this keyword must be added only for the 1st arg\n        System.Console.WriteLine($"{person.Name} says hello to {person2.Name}");\n    }\n}\n\nclass MainClass {\n    static void Main(string[] args) {\n        Person p = new Person { Name = "John", Age = 21 };\n        Person p2 = new Person { Name = "Sally", Age = 25 };\n        p.SayHello(p2);  // "John says hello to Sally"\n    }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)(
              "li",
              {parentName: "ul"},
              "LINQ: Language Integrated Query",
              (0, i.kt)(
                "ul",
                {parentName: "li"},
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "gives the capability to query objects"
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "can qury",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "objects in memory, eg collections (LINQ to Objects)"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "Databases (LINQ to Entities)"
                    ),
                    (0, i.kt)("li", {parentName: "ul"}, "XML (LINQ to XML)"),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "ADO.NET Data Sets (LINQ to Data Sets)"
                    )
                  )
                ),
                (0, i.kt)(
                  "li",
                  {parentName: "ul"},
                  "keywords",
                  (0, i.kt)(
                    "ul",
                    {parentName: "li"},
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "where: set conditions"
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "orderby",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "ascending order",
                          (0, i.kt)(
                            "blockquote",
                            {parentName: "li"},
                            (0, i.kt)(
                              "p",
                              {parentName: "blockquote"},
                              "orderby variableName"
                            )
                          )
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "descending order",
                          (0, i.kt)(
                            "blockquote",
                            {parentName: "li"},
                            (0, i.kt)(
                              "p",
                              {parentName: "blockquote"},
                              "orderby variableName descending"
                            )
                          )
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "select",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "cannot be used with group keyword"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "query result will become an array of values"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "must end with a ;",
                          (0, i.kt)(
                            "blockquote",
                            {parentName: "li"},
                            (0, i.kt)(
                              "p",
                              {parentName: "blockquote"},
                              "select variableName;"
                            )
                          )
                        )
                      )
                    ),
                    (0, i.kt)(
                      "li",
                      {parentName: "ul"},
                      "group",
                      (0, i.kt)(
                        "ul",
                        {parentName: "li"},
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "cannot be used with select keyword"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "query result will become an array of dictionaries"
                        ),
                        (0, i.kt)(
                          "li",
                          {parentName: "ul"},
                          "must end with a ;",
                          (0, i.kt)(
                            "blockquote",
                            {parentName: "li"},
                            (0, i.kt)(
                              "p",
                              {parentName: "blockquote"},
                              "group variableName by variableName;"
                            )
                          )
                        )
                      )
                    )
                  )
                )
              )
            )
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              '\n// simple example\nusing System.Linq;  // this is required for query usage\n\nclass MainClass {\n  public static void Main() {\n    string sample = "The quick brown fox jumps over the lazy dog.";\n    \n    var resultArr = from c in sample.ToLower()\n                    where c== \'a\' || c == \'e\' || c == \'i\' || c == \'o\' || c == \'u\'\n                    orderby c\n                    select c;\n                    // group c by c;\n    foreach (var c in resultArr)\n      System.Console.WriteLine(c);  // use for select to get value\n      // System.Console.WriteLine(c.Key);  // use for group to get value\n  }\n}\n\n\n// realistic example\nusing System.Linq;\n\npublic class Person {\n  public string FirstName { get; set; }\n  public string LastName { get; set; }\n  public int Age { get; set; }\n}\n\nclass MainClass {\n  public static void Main() {\n    System.Collections.Generic.List<Person> people = new System.Collections.Generic.List<Person> {\n      new Person{FirstName="John", LastName="Doe", Age=25},\n      new Person{FirstName="John2", LastName="Doe2", Age=26},\n      new Person{FirstName="John3", LastName="Doe3", Age=20},\n    };\n    \n    // method 1: LINQ Query Operators\n    var resultArr = from p in people\n                    where p.Age < 25\n                    select p;\n                    \n    // method 2: LINQ Extension methods\n    // var resultArr = person.Where(p => p.Age < 25).Select(p => p);\n    \n    foreach (var item in resultArr)\n      System.Console.WriteLine(item.FirstName);  // prints out firstnames of those with age less than 25\n  }\n}\n'
            )
          ),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "Reflection")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c#"},
              'public class Sample { \n    public string Name { get; set; }\n    public int Age;\n\n    public void MyMethod() { }\n}\n\nclass Program\n{\n    static void Main(string[] args)\n    {\n        var assembly = System.Reflection.Assembly.GetExecutingAssembly();\n        System.Console.WriteLine(assembly.FullName);  // Override, Version=1.0.7333.32664, Culture=neutral, PublicKeyToken=null\n        var types = assembly.GetTypes();\n        foreach (var type in types) { \n            System.Console.WriteLine("class: " + type.Name + " BaseType: " + type.BaseType);  // class: Program BaseType: System.Object\n            var props = type.GetProperties();\n            foreach (var prop in props)\n                System.Console.WriteLine("Property name: " + prop.Name + " Property type: " + prop.PropertyType);  // Property name: Name Property type: System.String\n            var fields = type.GetFields();\n            foreach (var field in fields)\n                System.Console.WriteLine("Field: " + field.Name);  // Field: Age\n            var methods = type.GetMethods();\n            foreach (var method in methods)\n                System.Console.WriteLine("Method: " + method.Name);\n                /*\n                // class: Program\n                Method: Equals\n                Method: GetHashCode\n                Method: GetType\n                Method: ToString\n\n                // class: Sample\n                Method: get_Name\n                Method: set_Name\n                Method: MyMethod\n                Method: Equals\n                Method: GetHashCode\n                Method: GetType\n                Method: ToString\n                */\n        }\n    }\n}\n'
            )
          ),
          (0, i.kt)("h3", {id: "c-77"}, "c++"),
          (0, i.kt)(
            "ul",
            null,
            (0, i.kt)("li", {parentName: "ul"}, "References")
          ),
          (0, i.kt)(
            "pre",
            null,
            (0, i.kt)(
              "code",
              {parentName: "pre", className: "language-c++"},
              "// using without references\nint num = 10;\nint newNum = num;\n\nnum++;  // num = 11, newNum = 10\nnewNum++;  // num = 11, newNum = 11\n\n\n// using references\nint num = 10;\nint& referenceNum = num;  // add & when referencing\n\nnum++;  // num = 11, referenceNum = 11\nreferenceNum++;  // num = 12, referenceNum = 12\n"
            )
          ),
          (0, i.kt)(
            "p",
            null,
            (0, i.kt)(
              "a",
              {parentName: "p", href: "#table-of-contents"},
              "back to top"
            )
          )
        );
      }
      c.isMDXComponent = !0;
    },
  },
]);
