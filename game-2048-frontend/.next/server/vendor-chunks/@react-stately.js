"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/@react-stately";
exports.ids = ["vendor-chunks/@react-stately"];
exports.modules = {

/***/ "(ssr)/./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs":
/*!******************************************************************************!*\
  !*** ./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs ***!
  \******************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useOverlayTriggerState: () => (/* binding */ $fc909762b330b746$export$61c6a8c84e605fb6)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @react-stately/utils */ \"(ssr)/./node_modules/@react-stately/utils/dist/useControlledState.mjs\");\n\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \n\nfunction $fc909762b330b746$export$61c6a8c84e605fb6(props) {\n    let [isOpen, setOpen] = (0, _react_stately_utils__WEBPACK_IMPORTED_MODULE_1__.useControlledState)(props.isOpen, props.defaultOpen || false, props.onOpenChange);\n    const open = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        setOpen(true);\n    }, [\n        setOpen\n    ]);\n    const close = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        setOpen(false);\n    }, [\n        setOpen\n    ]);\n    const toggle = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)(()=>{\n        setOpen(!isOpen);\n    }, [\n        setOpen,\n        isOpen\n    ]);\n    return {\n        isOpen: isOpen,\n        setOpen: setOpen,\n        open: open,\n        close: close,\n        toggle: toggle\n    };\n}\n\n\n\n//# sourceMappingURL=useOverlayTriggerState.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvb3ZlcmxheXMvZGlzdC91c2VPdmVybGF5VHJpZ2dlclN0YXRlLm1qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7QUFBd0Q7QUFDNkI7O0FBRXJGO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0Msb0VBQXlCO0FBQ3pELHFCQUFxQiw4Q0FBa0I7QUFDdkM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHNCQUFzQiw4Q0FBa0I7QUFDeEM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBa0I7QUFDekM7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBRzZFO0FBQzdFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZTIwNDgvLi9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvb3ZlcmxheXMvZGlzdC91c2VPdmVybGF5VHJpZ2dlclN0YXRlLm1qcz8xNDlmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7dXNlQ2FsbGJhY2sgYXMgJGhuTXZpJHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlQ29udHJvbGxlZFN0YXRlIGFzICRobk12aSR1c2VDb250cm9sbGVkU3RhdGV9IGZyb20gXCJAcmVhY3Qtc3RhdGVseS91dGlsc1wiO1xuXG4vKlxuICogQ29weXJpZ2h0IDIwMjAgQWRvYmUuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKiBUaGlzIGZpbGUgaXMgbGljZW5zZWQgdG8geW91IHVuZGVyIHRoZSBBcGFjaGUgTGljZW5zZSwgVmVyc2lvbiAyLjAgKHRoZSBcIkxpY2Vuc2VcIik7XG4gKiB5b3UgbWF5IG5vdCB1c2UgdGhpcyBmaWxlIGV4Y2VwdCBpbiBjb21wbGlhbmNlIHdpdGggdGhlIExpY2Vuc2UuIFlvdSBtYXkgb2J0YWluIGEgY29weVxuICogb2YgdGhlIExpY2Vuc2UgYXQgaHR0cDovL3d3dy5hcGFjaGUub3JnL2xpY2Vuc2VzL0xJQ0VOU0UtMi4wXG4gKlxuICogVW5sZXNzIHJlcXVpcmVkIGJ5IGFwcGxpY2FibGUgbGF3IG9yIGFncmVlZCB0byBpbiB3cml0aW5nLCBzb2Z0d2FyZSBkaXN0cmlidXRlZCB1bmRlclxuICogdGhlIExpY2Vuc2UgaXMgZGlzdHJpYnV0ZWQgb24gYW4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgUkVQUkVTRU5UQVRJT05TXG4gKiBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC4gU2VlIHRoZSBMaWNlbnNlIGZvciB0aGUgc3BlY2lmaWMgbGFuZ3VhZ2VcbiAqIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmQgbGltaXRhdGlvbnMgdW5kZXIgdGhlIExpY2Vuc2UuXG4gKi8gXG5cbmZ1bmN0aW9uICRmYzkwOTc2MmIzMzBiNzQ2JGV4cG9ydCQ2MWM2YThjODRlNjA1ZmI2KHByb3BzKSB7XG4gICAgbGV0IFtpc09wZW4sIHNldE9wZW5dID0gKDAsICRobk12aSR1c2VDb250cm9sbGVkU3RhdGUpKHByb3BzLmlzT3BlbiwgcHJvcHMuZGVmYXVsdE9wZW4gfHwgZmFsc2UsIHByb3BzLm9uT3BlbkNoYW5nZSk7XG4gICAgY29uc3Qgb3BlbiA9ICgwLCAkaG5NdmkkdXNlQ2FsbGJhY2spKCgpPT57XG4gICAgICAgIHNldE9wZW4odHJ1ZSk7XG4gICAgfSwgW1xuICAgICAgICBzZXRPcGVuXG4gICAgXSk7XG4gICAgY29uc3QgY2xvc2UgPSAoMCwgJGhuTXZpJHVzZUNhbGxiYWNrKSgoKT0+e1xuICAgICAgICBzZXRPcGVuKGZhbHNlKTtcbiAgICB9LCBbXG4gICAgICAgIHNldE9wZW5cbiAgICBdKTtcbiAgICBjb25zdCB0b2dnbGUgPSAoMCwgJGhuTXZpJHVzZUNhbGxiYWNrKSgoKT0+e1xuICAgICAgICBzZXRPcGVuKCFpc09wZW4pO1xuICAgIH0sIFtcbiAgICAgICAgc2V0T3BlbixcbiAgICAgICAgaXNPcGVuXG4gICAgXSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgaXNPcGVuOiBpc09wZW4sXG4gICAgICAgIHNldE9wZW46IHNldE9wZW4sXG4gICAgICAgIG9wZW46IG9wZW4sXG4gICAgICAgIGNsb3NlOiBjbG9zZSxcbiAgICAgICAgdG9nZ2xlOiB0b2dnbGVcbiAgICB9O1xufVxuXG5cbmV4cG9ydCB7JGZjOTA5NzYyYjMzMGI3NDYkZXhwb3J0JDYxYzZhOGM4NGU2MDVmYjYgYXMgdXNlT3ZlcmxheVRyaWdnZXJTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VPdmVybGF5VHJpZ2dlclN0YXRlLm1vZHVsZS5qcy5tYXBcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-stately/overlays/dist/useOverlayTriggerState.mjs\n");

/***/ }),

/***/ "(ssr)/./node_modules/@react-stately/utils/dist/useControlledState.mjs":
/*!***********************************************************************!*\
  !*** ./node_modules/@react-stately/utils/dist/useControlledState.mjs ***!
  \***********************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useControlledState: () => (/* binding */ $458b0a5536c1a7cf$export$40bfa8c7b0832715)\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n\n\n/*\n * Copyright 2020 Adobe. All rights reserved.\n * This file is licensed to you under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License. You may obtain a copy\n * of the License at http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software distributed under\n * the License is distributed on an \"AS IS\" BASIS, WITHOUT WARRANTIES OR REPRESENTATIONS\n * OF ANY KIND, either express or implied. See the License for the specific language\n * governing permissions and limitations under the License.\n */ \nfunction $458b0a5536c1a7cf$export$40bfa8c7b0832715(value, defaultValue, onChange) {\n    let [stateValue, setStateValue] = (0, react__WEBPACK_IMPORTED_MODULE_0__.useState)(value || defaultValue);\n    let isControlledRef = (0, react__WEBPACK_IMPORTED_MODULE_0__.useRef)(value !== undefined);\n    let isControlled = value !== undefined;\n    (0, react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        let wasControlled = isControlledRef.current;\n        if (wasControlled !== isControlled) console.warn(`WARN: A component changed from ${wasControlled ? 'controlled' : 'uncontrolled'} to ${isControlled ? 'controlled' : 'uncontrolled'}.`);\n        isControlledRef.current = isControlled;\n    }, [\n        isControlled\n    ]);\n    let currentValue = isControlled ? value : stateValue;\n    let setValue = (0, react__WEBPACK_IMPORTED_MODULE_0__.useCallback)((value, ...args)=>{\n        let onChangeCaller = (value, ...onChangeArgs)=>{\n            if (onChange) {\n                if (!Object.is(currentValue, value)) onChange(value, ...onChangeArgs);\n            }\n            if (!isControlled) // If uncontrolled, mutate the currentValue local variable so that\n            // calling setState multiple times with the same value only emits onChange once.\n            // We do not use a ref for this because we specifically _do_ want the value to\n            // reset every render, and assigning to a ref in render breaks aborted suspended renders.\n            // eslint-disable-next-line react-hooks/exhaustive-deps\n            currentValue = value;\n        };\n        if (typeof value === 'function') {\n            console.warn('We can not support a function callback. See Github Issues for details https://github.com/adobe/react-spectrum/issues/2320');\n            // this supports functional updates https://reactjs.org/docs/hooks-reference.html#functional-updates\n            // when someone using useControlledState calls setControlledState(myFunc)\n            // this will call our useState setState with a function as well which invokes myFunc and calls onChange with the value from myFunc\n            // if we're in an uncontrolled state, then we also return the value of myFunc which to setState looks as though it was just called with myFunc from the beginning\n            // otherwise we just return the controlled value, which won't cause a rerender because React knows to bail out when the value is the same\n            let updateFunction = (oldValue, ...functionArgs)=>{\n                let interceptedValue = value(isControlled ? currentValue : oldValue, ...functionArgs);\n                onChangeCaller(interceptedValue, ...args);\n                if (!isControlled) return interceptedValue;\n                return oldValue;\n            };\n            setStateValue(updateFunction);\n        } else {\n            if (!isControlled) setStateValue(value);\n            onChangeCaller(value, ...args);\n        }\n    }, [\n        isControlled,\n        currentValue,\n        onChange\n    ]);\n    return [\n        currentValue,\n        setValue\n    ];\n}\n\n\n\n//# sourceMappingURL=useControlledState.module.js.map\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvdXRpbHMvZGlzdC91c2VDb250cm9sbGVkU3RhdGUubWpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQTZJOztBQUU3STtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsMkNBQWU7QUFDekQsOEJBQThCLHlDQUFhO0FBQzNDO0FBQ0EsUUFBUSw0Q0FBZ0I7QUFDeEI7QUFDQSwyRkFBMkYsK0NBQStDLEtBQUssNkNBQTZDO0FBQzVMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLHVCQUF1Qiw4Q0FBa0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR3lFO0FBQ3pFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZ2FtZTIwNDgvLi9ub2RlX21vZHVsZXMvQHJlYWN0LXN0YXRlbHkvdXRpbHMvZGlzdC91c2VDb250cm9sbGVkU3RhdGUubWpzP2E3MDEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHt1c2VTdGF0ZSBhcyAkM3dodE0kdXNlU3RhdGUsIHVzZVJlZiBhcyAkM3dodE0kdXNlUmVmLCB1c2VFZmZlY3QgYXMgJDN3aHRNJHVzZUVmZmVjdCwgdXNlQ2FsbGJhY2sgYXMgJDN3aHRNJHVzZUNhbGxiYWNrfSBmcm9tIFwicmVhY3RcIjtcblxuLypcbiAqIENvcHlyaWdodCAyMDIwIEFkb2JlLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICogVGhpcyBmaWxlIGlzIGxpY2Vuc2VkIHRvIHlvdSB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLiBZb3UgbWF5IG9idGFpbiBhIGNvcHlcbiAqIG9mIHRoZSBMaWNlbnNlIGF0IGh0dHA6Ly93d3cuYXBhY2hlLm9yZy9saWNlbnNlcy9MSUNFTlNFLTIuMFxuICpcbiAqIFVubGVzcyByZXF1aXJlZCBieSBhcHBsaWNhYmxlIGxhdyBvciBhZ3JlZWQgdG8gaW4gd3JpdGluZywgc29mdHdhcmUgZGlzdHJpYnV0ZWQgdW5kZXJcbiAqIHRoZSBMaWNlbnNlIGlzIGRpc3RyaWJ1dGVkIG9uIGFuIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9SIFJFUFJFU0VOVEFUSU9OU1xuICogT0YgQU5ZIEtJTkQsIGVpdGhlciBleHByZXNzIG9yIGltcGxpZWQuIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlXG4gKiBnb3Zlcm5pbmcgcGVybWlzc2lvbnMgYW5kIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovIFxuZnVuY3Rpb24gJDQ1OGIwYTU1MzZjMWE3Y2YkZXhwb3J0JDQwYmZhOGM3YjA4MzI3MTUodmFsdWUsIGRlZmF1bHRWYWx1ZSwgb25DaGFuZ2UpIHtcbiAgICBsZXQgW3N0YXRlVmFsdWUsIHNldFN0YXRlVmFsdWVdID0gKDAsICQzd2h0TSR1c2VTdGF0ZSkodmFsdWUgfHwgZGVmYXVsdFZhbHVlKTtcbiAgICBsZXQgaXNDb250cm9sbGVkUmVmID0gKDAsICQzd2h0TSR1c2VSZWYpKHZhbHVlICE9PSB1bmRlZmluZWQpO1xuICAgIGxldCBpc0NvbnRyb2xsZWQgPSB2YWx1ZSAhPT0gdW5kZWZpbmVkO1xuICAgICgwLCAkM3dodE0kdXNlRWZmZWN0KSgoKT0+e1xuICAgICAgICBsZXQgd2FzQ29udHJvbGxlZCA9IGlzQ29udHJvbGxlZFJlZi5jdXJyZW50O1xuICAgICAgICBpZiAod2FzQ29udHJvbGxlZCAhPT0gaXNDb250cm9sbGVkKSBjb25zb2xlLndhcm4oYFdBUk46IEEgY29tcG9uZW50IGNoYW5nZWQgZnJvbSAke3dhc0NvbnRyb2xsZWQgPyAnY29udHJvbGxlZCcgOiAndW5jb250cm9sbGVkJ30gdG8gJHtpc0NvbnRyb2xsZWQgPyAnY29udHJvbGxlZCcgOiAndW5jb250cm9sbGVkJ30uYCk7XG4gICAgICAgIGlzQ29udHJvbGxlZFJlZi5jdXJyZW50ID0gaXNDb250cm9sbGVkO1xuICAgIH0sIFtcbiAgICAgICAgaXNDb250cm9sbGVkXG4gICAgXSk7XG4gICAgbGV0IGN1cnJlbnRWYWx1ZSA9IGlzQ29udHJvbGxlZCA/IHZhbHVlIDogc3RhdGVWYWx1ZTtcbiAgICBsZXQgc2V0VmFsdWUgPSAoMCwgJDN3aHRNJHVzZUNhbGxiYWNrKSgodmFsdWUsIC4uLmFyZ3MpPT57XG4gICAgICAgIGxldCBvbkNoYW5nZUNhbGxlciA9ICh2YWx1ZSwgLi4ub25DaGFuZ2VBcmdzKT0+e1xuICAgICAgICAgICAgaWYgKG9uQ2hhbmdlKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFPYmplY3QuaXMoY3VycmVudFZhbHVlLCB2YWx1ZSkpIG9uQ2hhbmdlKHZhbHVlLCAuLi5vbkNoYW5nZUFyZ3MpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFpc0NvbnRyb2xsZWQpIC8vIElmIHVuY29udHJvbGxlZCwgbXV0YXRlIHRoZSBjdXJyZW50VmFsdWUgbG9jYWwgdmFyaWFibGUgc28gdGhhdFxuICAgICAgICAgICAgLy8gY2FsbGluZyBzZXRTdGF0ZSBtdWx0aXBsZSB0aW1lcyB3aXRoIHRoZSBzYW1lIHZhbHVlIG9ubHkgZW1pdHMgb25DaGFuZ2Ugb25jZS5cbiAgICAgICAgICAgIC8vIFdlIGRvIG5vdCB1c2UgYSByZWYgZm9yIHRoaXMgYmVjYXVzZSB3ZSBzcGVjaWZpY2FsbHkgX2RvXyB3YW50IHRoZSB2YWx1ZSB0b1xuICAgICAgICAgICAgLy8gcmVzZXQgZXZlcnkgcmVuZGVyLCBhbmQgYXNzaWduaW5nIHRvIGEgcmVmIGluIHJlbmRlciBicmVha3MgYWJvcnRlZCBzdXNwZW5kZWQgcmVuZGVycy5cbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSByZWFjdC1ob29rcy9leGhhdXN0aXZlLWRlcHNcbiAgICAgICAgICAgIGN1cnJlbnRWYWx1ZSA9IHZhbHVlO1xuICAgICAgICB9O1xuICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oJ1dlIGNhbiBub3Qgc3VwcG9ydCBhIGZ1bmN0aW9uIGNhbGxiYWNrLiBTZWUgR2l0aHViIElzc3VlcyBmb3IgZGV0YWlscyBodHRwczovL2dpdGh1Yi5jb20vYWRvYmUvcmVhY3Qtc3BlY3RydW0vaXNzdWVzLzIzMjAnKTtcbiAgICAgICAgICAgIC8vIHRoaXMgc3VwcG9ydHMgZnVuY3Rpb25hbCB1cGRhdGVzIGh0dHBzOi8vcmVhY3Rqcy5vcmcvZG9jcy9ob29rcy1yZWZlcmVuY2UuaHRtbCNmdW5jdGlvbmFsLXVwZGF0ZXNcbiAgICAgICAgICAgIC8vIHdoZW4gc29tZW9uZSB1c2luZyB1c2VDb250cm9sbGVkU3RhdGUgY2FsbHMgc2V0Q29udHJvbGxlZFN0YXRlKG15RnVuYylcbiAgICAgICAgICAgIC8vIHRoaXMgd2lsbCBjYWxsIG91ciB1c2VTdGF0ZSBzZXRTdGF0ZSB3aXRoIGEgZnVuY3Rpb24gYXMgd2VsbCB3aGljaCBpbnZva2VzIG15RnVuYyBhbmQgY2FsbHMgb25DaGFuZ2Ugd2l0aCB0aGUgdmFsdWUgZnJvbSBteUZ1bmNcbiAgICAgICAgICAgIC8vIGlmIHdlJ3JlIGluIGFuIHVuY29udHJvbGxlZCBzdGF0ZSwgdGhlbiB3ZSBhbHNvIHJldHVybiB0aGUgdmFsdWUgb2YgbXlGdW5jIHdoaWNoIHRvIHNldFN0YXRlIGxvb2tzIGFzIHRob3VnaCBpdCB3YXMganVzdCBjYWxsZWQgd2l0aCBteUZ1bmMgZnJvbSB0aGUgYmVnaW5uaW5nXG4gICAgICAgICAgICAvLyBvdGhlcndpc2Ugd2UganVzdCByZXR1cm4gdGhlIGNvbnRyb2xsZWQgdmFsdWUsIHdoaWNoIHdvbid0IGNhdXNlIGEgcmVyZW5kZXIgYmVjYXVzZSBSZWFjdCBrbm93cyB0byBiYWlsIG91dCB3aGVuIHRoZSB2YWx1ZSBpcyB0aGUgc2FtZVxuICAgICAgICAgICAgbGV0IHVwZGF0ZUZ1bmN0aW9uID0gKG9sZFZhbHVlLCAuLi5mdW5jdGlvbkFyZ3MpPT57XG4gICAgICAgICAgICAgICAgbGV0IGludGVyY2VwdGVkVmFsdWUgPSB2YWx1ZShpc0NvbnRyb2xsZWQgPyBjdXJyZW50VmFsdWUgOiBvbGRWYWx1ZSwgLi4uZnVuY3Rpb25BcmdzKTtcbiAgICAgICAgICAgICAgICBvbkNoYW5nZUNhbGxlcihpbnRlcmNlcHRlZFZhbHVlLCAuLi5hcmdzKTtcbiAgICAgICAgICAgICAgICBpZiAoIWlzQ29udHJvbGxlZCkgcmV0dXJuIGludGVyY2VwdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG9sZFZhbHVlO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNldFN0YXRlVmFsdWUodXBkYXRlRnVuY3Rpb24pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKCFpc0NvbnRyb2xsZWQpIHNldFN0YXRlVmFsdWUodmFsdWUpO1xuICAgICAgICAgICAgb25DaGFuZ2VDYWxsZXIodmFsdWUsIC4uLmFyZ3MpO1xuICAgICAgICB9XG4gICAgfSwgW1xuICAgICAgICBpc0NvbnRyb2xsZWQsXG4gICAgICAgIGN1cnJlbnRWYWx1ZSxcbiAgICAgICAgb25DaGFuZ2VcbiAgICBdKTtcbiAgICByZXR1cm4gW1xuICAgICAgICBjdXJyZW50VmFsdWUsXG4gICAgICAgIHNldFZhbHVlXG4gICAgXTtcbn1cblxuXG5leHBvcnQgeyQ0NThiMGE1NTM2YzFhN2NmJGV4cG9ydCQ0MGJmYThjN2IwODMyNzE1IGFzIHVzZUNvbnRyb2xsZWRTdGF0ZX07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11c2VDb250cm9sbGVkU3RhdGUubW9kdWxlLmpzLm1hcFxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/./node_modules/@react-stately/utils/dist/useControlledState.mjs\n");

/***/ })

};
;