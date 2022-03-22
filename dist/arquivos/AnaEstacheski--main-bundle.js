/******/ (function() { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/PubSub.js":
/*!*********************************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/StateManager/PubSub.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PubSub; }
/* harmony export */ });
class PubSub {
    constructor() {
        this.events = {};
    }
    subscribe(event, callback) {
        if (!this.events.hasOwnProperty(event)) {
            this.events[event] = [];
        }
        return this.events[event].push(callback);
    }
    publish(event, data = {}) {
        if (!this.events.hasOwnProperty(event)) {
            return [];
        }
        return this.events[event].map((callback) => callback(event, data));
    }
    unsubscribe(event, cb) {
        this.events[event] = this.events[event].filter((fn) => fn !== cb);
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUHViU3ViLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhY2thZ2VzL1N0YXRlTWFuYWdlci9QdWJTdWIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsTUFBTSxDQUFDLE9BQU8sT0FBTyxNQUFNO0lBQTNCO1FBQ1MsV0FBTSxHQUFZLEVBQUUsQ0FBQztJQW1COUIsQ0FBQztJQWpCTyxTQUFTLENBQUMsS0FBYSxFQUFFLFFBQWtCO1FBQ2pELElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxLQUFLLENBQUMsRUFBRTtZQUN2QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEVBQUUsQ0FBQztTQUN4QjtRQUNELE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUVNLE9BQU8sQ0FBQyxLQUFhLEVBQUUsSUFBSSxHQUFHLEVBQUU7UUFDdEMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxFQUFFO1lBQ3ZDLE9BQU8sRUFBRSxDQUFDO1NBQ1Y7UUFDRCxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsUUFBUSxFQUFFLEVBQUUsQ0FBQyxRQUFRLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7SUFDcEUsQ0FBQztJQUVNLFdBQVcsQ0FBQyxLQUFhLEVBQUUsRUFBWTtRQUM3QyxJQUFJLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLElBQUksQ0FBQyxNQUFNLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxFQUFFLEtBQUssRUFBRSxDQUFDLENBQUM7SUFDbkUsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHViU3ViIHtcblx0cHJpdmF0ZSBldmVudHM6IElFdmVudHMgPSB7fTtcblxuXHRwdWJsaWMgc3Vic2NyaWJlKGV2ZW50OiBzdHJpbmcsIGNhbGxiYWNrOiBGdW5jdGlvbikge1xuXHRcdGlmICghdGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG5cdFx0XHR0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGNhbGxiYWNrKTtcblx0fVxuXG5cdHB1YmxpYyBwdWJsaXNoKGV2ZW50OiBzdHJpbmcsIGRhdGEgPSB7fSkge1xuXHRcdGlmICghdGhpcy5ldmVudHMuaGFzT3duUHJvcGVydHkoZXZlbnQpKSB7XG5cdFx0XHRyZXR1cm4gW107XG5cdFx0fVxuXHRcdHJldHVybiB0aGlzLmV2ZW50c1tldmVudF0ubWFwKChjYWxsYmFjaykgPT4gY2FsbGJhY2soZXZlbnQsIGRhdGEpKTtcblx0fVxuXG5cdHB1YmxpYyB1bnN1YnNjcmliZShldmVudDogc3RyaW5nLCBjYjogRnVuY3Rpb24pOiB2b2lkIHtcblx0XHR0aGlzLmV2ZW50c1tldmVudF0gPSB0aGlzLmV2ZW50c1tldmVudF0uZmlsdGVyKChmbikgPT4gZm4gIT09IGNiKTtcblx0fVxufVxuXG5pbnRlcmZhY2UgSUV2ZW50cyB7XG5cdFtrZXk6IHN0cmluZ106IEZ1bmN0aW9uW107XG59XG4iXX0=

/***/ }),

/***/ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/Store.js":
/*!********************************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/StateManager/Store.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Store; }
/* harmony export */ });
/* harmony import */ var _PubSub__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./PubSub */ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/PubSub.js");

class Store {
    constructor({ moduleName, actions, mutations, state }) {
        this.actions = Object.assign({}, actions);
        this.mutations = Object.assign({}, mutations);
        this.module = moduleName || "store";
        this.status = "default state";
        this.events = new _PubSub__WEBPACK_IMPORTED_MODULE_0__.default();
        this.state = new Proxy(Object.assign({}, state) || {}, {
            set: (state, key, value) => {
                state[key] = value;
                console.log(`module: ${this.module} stateChange: ${key}:`, value);
                this.events.publish("stateChange", this.state);
                this.events.publish(`stateChange:${key}`, this.state);
                if (this.status !== "mutation") {
                    console.log(`You should use a mutation to set ${key}`);
                }
                this.status = "resting";
                return true;
            },
        });
    }
    dispatch(actionKey, payload) {
        if (typeof this.actions[actionKey] !== "function") {
            console.log(`Action "${actionKey} doesn't exist.`);
            return false;
        }
        console.log(`ACTION: ${actionKey}`);
        this.status = "action";
        this.actions[actionKey](this, payload);
        return true;
    }
    commit(mutationKey, payload) {
        if (typeof this.mutations[mutationKey] !== "function") {
            console.log(`Mutation "${mutationKey}" doesn't exist`);
            return false;
        }
        this.status = "mutation";
        let newState = this.mutations[mutationKey](this.state, payload);
        this.state = Object.assign(this.state, newState);
        return true;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RvcmUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFja2FnZXMvU3RhdGVNYW5hZ2VyL1N0b3JlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQUU5QixNQUFNLENBQUMsT0FBTyxPQUFPLEtBQUs7SUFRekIsWUFBWSxFQUFFLFVBQVUsRUFBRSxPQUFPLEVBQUUsU0FBUyxFQUFFLEtBQUssRUFBa0I7UUFDcEUsSUFBSSxDQUFDLE9BQU8scUJBQVEsT0FBTyxDQUFFLENBQUM7UUFDOUIsSUFBSSxDQUFDLFNBQVMscUJBQVEsU0FBUyxDQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLElBQUksT0FBTyxDQUFDO1FBQ3BDLElBQUksQ0FBQyxNQUFNLEdBQUcsZUFBZSxDQUFDO1FBQzlCLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxNQUFNLEVBQUUsQ0FBQztRQUUzQixJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksS0FBSyxDQUFJLGtCQUFLLEtBQUssS0FBTSxFQUFFLEVBQUU7WUFDN0MsR0FBRyxFQUFFLENBQUMsS0FBVSxFQUFFLEdBQVcsRUFBRSxLQUFVLEVBQUUsRUFBRTtnQkFDNUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxHQUFHLEtBQUssQ0FBQztnQkFDbkIsT0FBTyxDQUFDLEdBQUcsQ0FDVixXQUFXLElBQUksQ0FBQyxNQUFNLGlCQUFpQixHQUFHLEdBQUcsRUFDN0MsS0FBSyxDQUNMLENBQUM7Z0JBQ0YsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsYUFBYSxFQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztnQkFDL0MsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsZUFBZSxHQUFHLEVBQUUsRUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7Z0JBQ3RELElBQUksSUFBSSxDQUFDLE1BQU0sS0FBSyxVQUFVLEVBQUU7b0JBQy9CLE9BQU8sQ0FBQyxHQUFHLENBQUMsb0NBQW9DLEdBQUcsRUFBRSxDQUFDLENBQUM7aUJBQ3ZEO2dCQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsU0FBUyxDQUFDO2dCQUN4QixPQUFPLElBQUksQ0FBQztZQUNiLENBQUM7U0FDRCxDQUFDLENBQUM7SUFDSixDQUFDO0lBRU0sUUFBUSxDQUFDLFNBQWlCLEVBQUUsT0FBWTtRQUM5QyxJQUFJLE9BQU8sSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDbEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLFNBQVMsaUJBQWlCLENBQUMsQ0FBQztZQUNuRCxPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsT0FBTyxDQUFDLEdBQUcsQ0FBQyxXQUFXLFNBQVMsRUFBRSxDQUFDLENBQUM7UUFDcEMsSUFBSSxDQUFDLE1BQU0sR0FBRyxRQUFRLENBQUM7UUFDdkIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQyxJQUFJLEVBQUUsT0FBTyxDQUFDLENBQUM7UUFDdkMsT0FBTyxJQUFJLENBQUM7SUFDYixDQUFDO0lBRU0sTUFBTSxDQUFDLFdBQW1CLEVBQUUsT0FBWTtRQUM5QyxJQUFJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsS0FBSyxVQUFVLEVBQUU7WUFDdEQsT0FBTyxDQUFDLEdBQUcsQ0FBQyxhQUFhLFdBQVcsaUJBQWlCLENBQUMsQ0FBQztZQUN2RCxPQUFPLEtBQUssQ0FBQztTQUNiO1FBQ0QsSUFBSSxDQUFDLE1BQU0sR0FBRyxVQUFVLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLENBQUMsQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLE9BQU8sQ0FBQyxDQUFDO1FBQ2hFLElBQUksQ0FBQyxLQUFLLEdBQUcsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ2pELE9BQU8sSUFBSSxDQUFDO0lBQ2IsQ0FBQztDQUNEIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFB1YlN1YiBmcm9tIFwiLi9QdWJTdWJcIjtcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmU8VCBleHRlbmRzIG9iamVjdD4ge1xuXHRwcml2YXRlIGFjdGlvbnM6IFJlY29yZDxzdHJpbmcsIChzdG9yZTogU3RvcmU8VD4sIHBheWxvYWQ6IGFueSkgPT4gdm9pZD47XG5cdHByaXZhdGUgbXV0YXRpb25zOiBSZWNvcmQ8c3RyaW5nLCAoc3RhdGU6IFQsIHBheWxvYWQ6IGFueSkgPT4gVD47XG5cdHByaXZhdGUgbW9kdWxlOiBzdHJpbmc7XG5cdHByaXZhdGUgc3RhdHVzOiBcIm11dGF0aW9uXCIgfCBcImFjdGlvblwiIHwgXCJyZXN0aW5nXCIgfCBcImRlZmF1bHQgc3RhdGVcIjtcblx0cHVibGljIGV2ZW50czogUHViU3ViO1xuXHRwdWJsaWMgc3RhdGU6IFQ7XG5cblx0Y29uc3RydWN0b3IoeyBtb2R1bGVOYW1lLCBhY3Rpb25zLCBtdXRhdGlvbnMsIHN0YXRlIH06IFN0b3JlUGFyYW1zPFQ+KSB7XG5cdFx0dGhpcy5hY3Rpb25zID0geyAuLi5hY3Rpb25zIH07XG5cdFx0dGhpcy5tdXRhdGlvbnMgPSB7IC4uLm11dGF0aW9ucyB9O1xuXHRcdHRoaXMubW9kdWxlID0gbW9kdWxlTmFtZSB8fCBcInN0b3JlXCI7XG5cdFx0dGhpcy5zdGF0dXMgPSBcImRlZmF1bHQgc3RhdGVcIjtcblx0XHR0aGlzLmV2ZW50cyA9IG5ldyBQdWJTdWIoKTtcblxuXHRcdHRoaXMuc3RhdGUgPSBuZXcgUHJveHk8VD4oeyAuLi5zdGF0ZSB9IHx8IHt9LCB7XG5cdFx0XHRzZXQ6IChzdGF0ZTogYW55LCBrZXk6IHN0cmluZywgdmFsdWU6IGFueSkgPT4ge1xuXHRcdFx0XHRzdGF0ZVtrZXldID0gdmFsdWU7XG5cdFx0XHRcdGNvbnNvbGUubG9nKFxuXHRcdFx0XHRcdGBtb2R1bGU6ICR7dGhpcy5tb2R1bGV9IHN0YXRlQ2hhbmdlOiAke2tleX06YCxcblx0XHRcdFx0XHR2YWx1ZVxuXHRcdFx0XHQpO1xuXHRcdFx0XHR0aGlzLmV2ZW50cy5wdWJsaXNoKFwic3RhdGVDaGFuZ2VcIiwgdGhpcy5zdGF0ZSk7XG5cdFx0XHRcdHRoaXMuZXZlbnRzLnB1Ymxpc2goYHN0YXRlQ2hhbmdlOiR7a2V5fWAsIHRoaXMuc3RhdGUpO1xuXHRcdFx0XHRpZiAodGhpcy5zdGF0dXMgIT09IFwibXV0YXRpb25cIikge1xuXHRcdFx0XHRcdGNvbnNvbGUubG9nKGBZb3Ugc2hvdWxkIHVzZSBhIG11dGF0aW9uIHRvIHNldCAke2tleX1gKTtcblx0XHRcdFx0fVxuXHRcdFx0XHR0aGlzLnN0YXR1cyA9IFwicmVzdGluZ1wiO1xuXHRcdFx0XHRyZXR1cm4gdHJ1ZTtcblx0XHRcdH0sXG5cdFx0fSk7XG5cdH1cblxuXHRwdWJsaWMgZGlzcGF0Y2goYWN0aW9uS2V5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5hY3Rpb25zW2FjdGlvbktleV0gIT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0Y29uc29sZS5sb2coYEFjdGlvbiBcIiR7YWN0aW9uS2V5fSBkb2Vzbid0IGV4aXN0LmApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHRjb25zb2xlLmxvZyhgQUNUSU9OOiAke2FjdGlvbktleX1gKTtcblx0XHR0aGlzLnN0YXR1cyA9IFwiYWN0aW9uXCI7XG5cdFx0dGhpcy5hY3Rpb25zW2FjdGlvbktleV0odGhpcywgcGF5bG9hZCk7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cblxuXHRwdWJsaWMgY29tbWl0KG11dGF0aW9uS2V5OiBzdHJpbmcsIHBheWxvYWQ6IGFueSk6IGJvb2xlYW4ge1xuXHRcdGlmICh0eXBlb2YgdGhpcy5tdXRhdGlvbnNbbXV0YXRpb25LZXldICE9PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKGBNdXRhdGlvbiBcIiR7bXV0YXRpb25LZXl9XCIgZG9lc24ndCBleGlzdGApO1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblx0XHR0aGlzLnN0YXR1cyA9IFwibXV0YXRpb25cIjtcblx0XHRsZXQgbmV3U3RhdGUgPSB0aGlzLm11dGF0aW9uc1ttdXRhdGlvbktleV0odGhpcy5zdGF0ZSwgcGF5bG9hZCk7XG5cdFx0dGhpcy5zdGF0ZSA9IE9iamVjdC5hc3NpZ24odGhpcy5zdGF0ZSwgbmV3U3RhdGUpO1xuXHRcdHJldHVybiB0cnVlO1xuXHR9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU3RvcmVQYXJhbXM8VCBleHRlbmRzIG9iamVjdD4ge1xuXHRtb2R1bGVOYW1lOiBzdHJpbmc7XG5cblx0YWN0aW9uczogUmVjb3JkPHN0cmluZywgKHN0b3JlOiBTdG9yZTxUPiwgcGF5bG9hZDogYW55KSA9PiB2b2lkPjtcblxuXHRtdXRhdGlvbnM6IFJlY29yZDxzdHJpbmcsIChzdGF0ZTogVCwgcGF5bG9hZDogYW55KSA9PiBUPjtcblxuXHRzdGF0ZTogVDtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/mergeStores.js":
/*!**************************************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/StateManager/mergeStores.js ***!
  \**************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ mergeStores; }
/* harmony export */ });
function mergeStores(...storesObj) {
    const store = {};
    storesObj.forEach((s) => {
        store.state = Object.assign(Object.assign({}, store.state), s.state);
        store.mutations = Object.assign(Object.assign({}, store.mutations), s.mutations);
        store.actions = Object.assign(Object.assign({}, store.actions), s.actions);
    });
    return store;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWVyZ2VTdG9yZXMuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvcGFja2FnZXMvU3RhdGVNYW5hZ2VyL21lcmdlU3RvcmVzLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUVBLE1BQU0sQ0FBQyxPQUFPLFVBQVUsV0FBVyxDQUFDLEdBQUcsU0FBNkI7SUFDbkUsTUFBTSxLQUFLLEdBQTJCLEVBQUUsQ0FBQztJQUN6QyxTQUFTLENBQUMsT0FBTyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUU7UUFDdkIsS0FBSyxDQUFDLEtBQUssbUNBQVEsS0FBSyxDQUFDLEtBQUssR0FBSyxDQUFDLENBQUMsS0FBSyxDQUFFLENBQUM7UUFDN0MsS0FBSyxDQUFDLFNBQVMsbUNBQVEsS0FBSyxDQUFDLFNBQVMsR0FBSyxDQUFDLENBQUMsU0FBUyxDQUFFLENBQUM7UUFDekQsS0FBSyxDQUFDLE9BQU8sbUNBQVEsS0FBSyxDQUFDLE9BQU8sR0FBSyxDQUFDLENBQUMsT0FBTyxDQUFFLENBQUM7SUFDcEQsQ0FBQyxDQUFDLENBQUM7SUFFSCxPQUFPLEtBQUssQ0FBQztBQUNkLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBTdG9yZVBhcmFtcyB9IGZyb20gXCIuL1N0b3JlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIG1lcmdlU3RvcmVzKC4uLnN0b3Jlc09iajogU3RvcmVQYXJhbXM8YW55PltdKSB7XG5cdGNvbnN0IHN0b3JlOiBTdG9yZVBhcmFtczxhbnk+IHwgYW55ID0ge307XG5cdHN0b3Jlc09iai5mb3JFYWNoKChzKSA9PiB7XG5cdFx0c3RvcmUuc3RhdGUgPSB7IC4uLnN0b3JlLnN0YXRlLCAuLi5zLnN0YXRlIH07XG5cdFx0c3RvcmUubXV0YXRpb25zID0geyAuLi5zdG9yZS5tdXRhdGlvbnMsIC4uLnMubXV0YXRpb25zIH07XG5cdFx0c3RvcmUuYWN0aW9ucyA9IHsgLi4uc3RvcmUuYWN0aW9ucywgLi4ucy5hY3Rpb25zIH07XG5cdH0pO1xuXG5cdHJldHVybiBzdG9yZTtcbn1cbiJdfQ==

/***/ }),

/***/ "./node_modules/@agenciam3/pkg/dist/lib/core/Container.js":
/*!****************************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/core/Container.js ***!
  \****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Container; }
/* harmony export */ });
/* harmony import */ var _isPage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./isPage */ "./node_modules/@agenciam3/pkg/dist/lib/core/isPage.js");

class Container {
    constructor({ appName, components, pages, services, config, ruler, }) {
        this.appName = appName;
        this.config = config;
        this.pageComponents = pages ? [...pages] : [];
        this.components = components ? [...components] : [];
        this.services = services ? [...services] : [];
        this.serviceMap = {};
        this.instances = {};
        this.componentsConfig = {};
        this.ruler = ruler ? ruler : new _isPage__WEBPACK_IMPORTED_MODULE_0__.default();
        this.ctx = this.createContext.call(this);
    }
    createContext() {
        return {
            config: this.config,
            getService: this.getService.bind(this),
        };
    }
    instantiateComponent(Component) {
        try {
            if (typeof Component === "function") {
                if (this.componentsConfig[Component.name]) {
                    this.instances[Component.name] = new Component(this.ctx, this.componentsConfig[Component.name]);
                }
                else {
                    this.instances[Component.name] = new Component(this.ctx);
                }
                return Component.name;
            }
            else {
                console.warn("Not an Constructor", Component);
            }
        }
        catch (error) {
            console.warn(error);
        }
    }
    instantiateService(Service) {
        if (typeof Service === "function") {
            try {
                this.serviceMap[Service.name] = new Service();
            }
            catch (error) {
                console.warn(error);
            }
        }
        else {
            console.warn("Not an Constructor", Service);
        }
    }
    getService(serviceName) {
        if (this.serviceMap[serviceName])
            return this.serviceMap[serviceName];
        return false;
    }
    buildServices() {
        this.pageComponents.forEach((item) => {
            if (typeof item.services !== "undefined") {
                if (item.hasOwnProperty("pageRefs"))
                    if (this.ruler.is(item.pageRefs)) {
                        item.services.forEach((service) => this.services.push(service));
                    }
            }
        });
        return this.services.map(this.instantiateService.bind(this));
    }
    buildComponents() {
        return this.components.map(this.instantiateComponent.bind(this));
    }
    buildPageComponents() {
        return this.pageComponents.map((item) => {
            if (item.hasOwnProperty("pageRefs"))
                if (this.ruler.is(item.pageRefs)) {
                    item.components.forEach((Comp) => this.instantiateComponent(Comp));
                }
        });
    }
    init() {
        this.buildServices.call(this);
        this.buildComponents.call(this);
        this.buildPageComponents.call(this);
        window["m3Apps"] = { [this.appName]: this };
    }
    bind(compName, config) {
        this.componentsConfig[compName] = config;
    }
    start() {
        if (document.attachEvent
            ? document.readyState === "complete"
            : document.readyState !== "loading") {
            this.init();
        }
        else {
            document.addEventListener("DOMContentLoaded", this.init.bind(this));
        }
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQ29udGFpbmVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhY2thZ2VzL2NvcmUvQ29udGFpbmVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sTUFBTSxNQUFNLFVBQVUsQ0FBQztBQW1DOUIsTUFBTSxDQUFDLE9BQU8sT0FBTyxTQUFTO0lBWTdCLFlBQVksRUFDWCxPQUFPLEVBQ1AsVUFBVSxFQUNWLEtBQUssRUFDTCxRQUFRLEVBQ1IsTUFBTSxFQUNOLEtBQUssR0FDWTtRQUNqQixJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixJQUFJLENBQUMsTUFBTSxHQUFHLE1BQU0sQ0FBQztRQUVyQixJQUFJLENBQUMsY0FBYyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7UUFDOUMsSUFBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxVQUFVLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1FBRXBELElBQUksQ0FBQyxRQUFRLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsUUFBUSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUM5QyxJQUFJLENBQUMsVUFBVSxHQUFHLEVBQUUsQ0FBQztRQUVyQixJQUFJLENBQUMsU0FBUyxHQUFHLEVBQUUsQ0FBQztRQUNwQixJQUFJLENBQUMsZ0JBQWdCLEdBQUcsRUFBRSxDQUFDO1FBRTNCLElBQUksQ0FBQyxLQUFLLEdBQUcsS0FBSyxDQUFDLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLElBQUksTUFBTSxFQUFFLENBQUM7UUFFMUMsSUFBSSxDQUFDLEdBQUcsR0FBRyxJQUFJLENBQUMsYUFBYSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRU8sYUFBYTtRQUNwQixPQUFPO1lBQ04sTUFBTSxFQUFFLElBQUksQ0FBQyxNQUFNO1lBQ25CLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7U0FDdEMsQ0FBQztJQUNILENBQUM7SUFFTyxvQkFBb0IsQ0FBQyxTQUFjO1FBQzFDLElBQUk7WUFDSCxJQUFJLE9BQU8sU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDcEMsSUFBSSxJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUMxQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsR0FBRyxJQUFJLFNBQVMsQ0FDN0MsSUFBSSxDQUFDLEdBQUcsRUFDUixJQUFJLENBQUMsZ0JBQWdCLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUNyQyxDQUFDO2lCQUNGO3FCQUFNO29CQUNOLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksU0FBUyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztpQkFDekQ7Z0JBQ0QsT0FBTyxTQUFTLENBQUMsSUFBSSxDQUFDO2FBQ3RCO2lCQUFNO2dCQUNOLE9BQU8sQ0FBQyxJQUFJLENBQUMsb0JBQW9CLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDOUM7U0FDRDtRQUFDLE9BQU8sS0FBSyxFQUFFO1lBQ2YsT0FBTyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNwQjtJQUNGLENBQUM7SUFFTyxrQkFBa0IsQ0FBQyxPQUFZO1FBQ3RDLElBQUksT0FBTyxPQUFPLEtBQUssVUFBVSxFQUFFO1lBQ2xDLElBQUk7Z0JBQ0gsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEdBQUcsSUFBSSxPQUFPLEVBQUUsQ0FBQzthQUM5QztZQUFDLE9BQU8sS0FBSyxFQUFFO2dCQUNmLE9BQU8sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7YUFDcEI7U0FDRDthQUFNO1lBQ04sT0FBTyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsRUFBRSxPQUFPLENBQUMsQ0FBQztTQUM1QztJQUNGLENBQUM7SUFFTyxVQUFVLENBQUksV0FBbUI7UUFDeEMsSUFBSSxJQUFJLENBQUMsVUFBVSxDQUFDLFdBQVcsQ0FBQztZQUFFLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUN0RSxPQUFPLEtBQUssQ0FBQztJQUNkLENBQUM7SUFFTyxhQUFhO1FBQ3BCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDcEMsSUFBSSxPQUFPLElBQUksQ0FBQyxRQUFRLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO29CQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTt3QkFDakMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsRUFBRSxDQUNqQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsQ0FDM0IsQ0FBQztxQkFDRjthQUNGO1FBQ0YsQ0FBQyxDQUFDLENBQUM7UUFFSCxPQUFPLElBQUksQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxrQkFBa0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUM5RCxDQUFDO0lBRU8sZUFBZTtRQUN0QixPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxvQkFBb0IsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztJQUNsRSxDQUFDO0lBRU8sbUJBQW1CO1FBQzFCLE9BQU8sSUFBSSxDQUFDLGNBQWMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRTtZQUN2QyxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxDQUFDO2dCQUNsQyxJQUFJLElBQUksQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsRUFBRTtvQkFDakMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxJQUFJLEVBQUUsRUFBRSxDQUNoQyxJQUFJLENBQUMsb0JBQW9CLENBQUMsSUFBSSxDQUFDLENBQy9CLENBQUM7aUJBQ0Y7UUFDSCxDQUFDLENBQUMsQ0FBQztJQUNKLENBQUM7SUFFTSxJQUFJO1FBQ1YsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDOUIsSUFBSSxDQUFDLGVBQWUsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDaEMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUVwQyxNQUFNLENBQUMsUUFBUSxDQUFDLEdBQUcsRUFBRSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsRUFBRSxJQUFJLEVBQUUsQ0FBQztJQUM3QyxDQUFDO0lBRU0sSUFBSSxDQUFDLFFBQWdCLEVBQUUsTUFBVztRQUN4QyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsUUFBUSxDQUFDLEdBQUcsTUFBTSxDQUFDO0lBQzFDLENBQUM7SUFFTSxLQUFLO1FBQ1gsSUFDQyxRQUFRLENBQUMsV0FBVztZQUNuQixDQUFDLENBQUMsUUFBUSxDQUFDLFVBQVUsS0FBSyxVQUFVO1lBQ3BDLENBQUMsQ0FBQyxRQUFRLENBQUMsVUFBVSxLQUFLLFNBQVMsRUFDbkM7WUFDRCxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7U0FDWjthQUFNO1lBQ04sUUFBUSxDQUFDLGdCQUFnQixDQUFDLGtCQUFrQixFQUFFLElBQUksQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLENBQUM7U0FDcEU7SUFDRixDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgaXNQYWdlIGZyb20gXCIuL2lzUGFnZVwiO1xuaW1wb3J0IElSdWxlciBmcm9tIFwiLi9JUnVsZXJcIjtcblxuZXhwb3J0IGludGVyZmFjZSBJQ29udGFpbmVyUHJvcHMge1xuXHRhcHBOYW1lOiBzdHJpbmc7XG5cdGNvbXBvbmVudHM/OiBhbnlbXTtcblx0cGFnZXM/OiBJUGFnZUNvbXBvbmVudHNbXTtcblx0c2VydmljZXM/OiBhbnlbXTtcblx0Y29uZmlnPzogYW55O1xuXHRydWxlcj86IElSdWxlcjtcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJUGFnZUNvbXBvbmVudHMge1xuXHRwYWdlUmVmczogc3RyaW5nW107XG5cdGNvbXBvbmVudHM6IGFueVtdO1xuXHRzZXJ2aWNlcz86IGFueVtdO1xufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDb250YWluZXJDb250ZXh0IHtcblx0Y29uZmlnOiBhbnk7XG5cdGdldFNlcnZpY2U6IDxUPihzZXJ2aWNlTmFtZTogc3RyaW5nKSA9PiBUIHwgZmFsc2U7XG59XG5cbmRlY2xhcmUgZ2xvYmFsIHtcblx0aW50ZXJmYWNlIFdpbmRvdyB7XG5cdFx0bTNBcHBzOiBSZWNvcmQ8c3RyaW5nLCBDb250YWluZXI+O1xuXHR9XG5cblx0aW50ZXJmYWNlIERvY3VtZW50IHtcblx0XHRhdHRhY2hFdmVudDpcblx0XHRcdHwgKChldmVudDogc3RyaW5nLCBsaXN0ZW5lcjogRXZlbnRMaXN0ZW5lcikgPT4gYm9vbGVhbiB8IGZhbHNlKVxuXHRcdFx0fCB1bmRlZmluZWQ7XG5cdH1cbn1cblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29udGFpbmVyIHtcblx0cHJpdmF0ZSBydWxlcjogSVJ1bGVyO1xuXHRwcml2YXRlIGFwcE5hbWU6IHN0cmluZztcblx0cHJpdmF0ZSBjb25maWc6IGFueTtcblx0cHJpdmF0ZSBjb21wb25lbnRzQ29uZmlnOiBhbnk7XG5cdHByaXZhdGUgY29tcG9uZW50czogYW55W107XG5cdHByaXZhdGUgcGFnZUNvbXBvbmVudHM6IElQYWdlQ29tcG9uZW50c1tdO1xuXHRwcml2YXRlIHNlcnZpY2VzOiBhbnlbXTtcblx0cHJpdmF0ZSBzZXJ2aWNlTWFwOiBSZWNvcmQ8c3RyaW5nLCBhbnk+O1xuXHRwcml2YXRlIGluc3RhbmNlczogUmVjb3JkPHN0cmluZywgb2JqZWN0Pjtcblx0cHJpdmF0ZSBjdHg6IElDb250YWluZXJDb250ZXh0O1xuXG5cdGNvbnN0cnVjdG9yKHtcblx0XHRhcHBOYW1lLFxuXHRcdGNvbXBvbmVudHMsXG5cdFx0cGFnZXMsXG5cdFx0c2VydmljZXMsXG5cdFx0Y29uZmlnLFxuXHRcdHJ1bGVyLFxuXHR9OiBJQ29udGFpbmVyUHJvcHMpIHtcblx0XHR0aGlzLmFwcE5hbWUgPSBhcHBOYW1lO1xuXHRcdHRoaXMuY29uZmlnID0gY29uZmlnO1xuXG5cdFx0dGhpcy5wYWdlQ29tcG9uZW50cyA9IHBhZ2VzID8gWy4uLnBhZ2VzXSA6IFtdO1xuXHRcdHRoaXMuY29tcG9uZW50cyA9IGNvbXBvbmVudHMgPyBbLi4uY29tcG9uZW50c10gOiBbXTtcblxuXHRcdHRoaXMuc2VydmljZXMgPSBzZXJ2aWNlcyA/IFsuLi5zZXJ2aWNlc10gOiBbXTtcblx0XHR0aGlzLnNlcnZpY2VNYXAgPSB7fTtcblxuXHRcdHRoaXMuaW5zdGFuY2VzID0ge307XG5cdFx0dGhpcy5jb21wb25lbnRzQ29uZmlnID0ge307XG5cblx0XHR0aGlzLnJ1bGVyID0gcnVsZXIgPyBydWxlciA6IG5ldyBpc1BhZ2UoKTtcblxuXHRcdHRoaXMuY3R4ID0gdGhpcy5jcmVhdGVDb250ZXh0LmNhbGwodGhpcyk7XG5cdH1cblxuXHRwcml2YXRlIGNyZWF0ZUNvbnRleHQoKTogSUNvbnRhaW5lckNvbnRleHQge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWc6IHRoaXMuY29uZmlnLFxuXHRcdFx0Z2V0U2VydmljZTogdGhpcy5nZXRTZXJ2aWNlLmJpbmQodGhpcyksXG5cdFx0fTtcblx0fVxuXG5cdHByaXZhdGUgaW5zdGFudGlhdGVDb21wb25lbnQoQ29tcG9uZW50OiBhbnkpIHtcblx0XHR0cnkge1xuXHRcdFx0aWYgKHR5cGVvZiBDb21wb25lbnQgPT09IFwiZnVuY3Rpb25cIikge1xuXHRcdFx0XHRpZiAodGhpcy5jb21wb25lbnRzQ29uZmlnW0NvbXBvbmVudC5uYW1lXSkge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2VzW0NvbXBvbmVudC5uYW1lXSA9IG5ldyBDb21wb25lbnQoXG5cdFx0XHRcdFx0XHR0aGlzLmN0eCxcblx0XHRcdFx0XHRcdHRoaXMuY29tcG9uZW50c0NvbmZpZ1tDb21wb25lbnQubmFtZV1cblx0XHRcdFx0XHQpO1xuXHRcdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRcdHRoaXMuaW5zdGFuY2VzW0NvbXBvbmVudC5uYW1lXSA9IG5ldyBDb21wb25lbnQodGhpcy5jdHgpO1xuXHRcdFx0XHR9XG5cdFx0XHRcdHJldHVybiBDb21wb25lbnQubmFtZTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGNvbnNvbGUud2FybihcIk5vdCBhbiBDb25zdHJ1Y3RvclwiLCBDb21wb25lbnQpO1xuXHRcdFx0fVxuXHRcdH0gY2F0Y2ggKGVycm9yKSB7XG5cdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRcdH1cblx0fVxuXG5cdHByaXZhdGUgaW5zdGFudGlhdGVTZXJ2aWNlKFNlcnZpY2U6IGFueSkge1xuXHRcdGlmICh0eXBlb2YgU2VydmljZSA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHR0cnkge1xuXHRcdFx0XHR0aGlzLnNlcnZpY2VNYXBbU2VydmljZS5uYW1lXSA9IG5ldyBTZXJ2aWNlKCk7XG5cdFx0XHR9IGNhdGNoIChlcnJvcikge1xuXHRcdFx0XHRjb25zb2xlLndhcm4oZXJyb3IpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXCJOb3QgYW4gQ29uc3RydWN0b3JcIiwgU2VydmljZSk7XG5cdFx0fVxuXHR9XG5cblx0cHJpdmF0ZSBnZXRTZXJ2aWNlPFQ+KHNlcnZpY2VOYW1lOiBzdHJpbmcpOiBUIHwgZmFsc2Uge1xuXHRcdGlmICh0aGlzLnNlcnZpY2VNYXBbc2VydmljZU5hbWVdKSByZXR1cm4gdGhpcy5zZXJ2aWNlTWFwW3NlcnZpY2VOYW1lXTtcblx0XHRyZXR1cm4gZmFsc2U7XG5cdH1cblxuXHRwcml2YXRlIGJ1aWxkU2VydmljZXMoKSB7XG5cdFx0dGhpcy5wYWdlQ29tcG9uZW50cy5mb3JFYWNoKChpdGVtKSA9PiB7XG5cdFx0XHRpZiAodHlwZW9mIGl0ZW0uc2VydmljZXMgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0aWYgKGl0ZW0uaGFzT3duUHJvcGVydHkoXCJwYWdlUmVmc1wiKSlcblx0XHRcdFx0XHRpZiAodGhpcy5ydWxlci5pcyhpdGVtLnBhZ2VSZWZzKSkge1xuXHRcdFx0XHRcdFx0aXRlbS5zZXJ2aWNlcy5mb3JFYWNoKChzZXJ2aWNlKSA9PlxuXHRcdFx0XHRcdFx0XHR0aGlzLnNlcnZpY2VzLnB1c2goc2VydmljZSlcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXG5cdFx0cmV0dXJuIHRoaXMuc2VydmljZXMubWFwKHRoaXMuaW5zdGFudGlhdGVTZXJ2aWNlLmJpbmQodGhpcykpO1xuXHR9XG5cblx0cHJpdmF0ZSBidWlsZENvbXBvbmVudHMoKSB7XG5cdFx0cmV0dXJuIHRoaXMuY29tcG9uZW50cy5tYXAodGhpcy5pbnN0YW50aWF0ZUNvbXBvbmVudC5iaW5kKHRoaXMpKTtcblx0fVxuXG5cdHByaXZhdGUgYnVpbGRQYWdlQ29tcG9uZW50cygpIHtcblx0XHRyZXR1cm4gdGhpcy5wYWdlQ29tcG9uZW50cy5tYXAoKGl0ZW0pID0+IHtcblx0XHRcdGlmIChpdGVtLmhhc093blByb3BlcnR5KFwicGFnZVJlZnNcIikpXG5cdFx0XHRcdGlmICh0aGlzLnJ1bGVyLmlzKGl0ZW0ucGFnZVJlZnMpKSB7XG5cdFx0XHRcdFx0aXRlbS5jb21wb25lbnRzLmZvckVhY2goKENvbXApID0+XG5cdFx0XHRcdFx0XHR0aGlzLmluc3RhbnRpYXRlQ29tcG9uZW50KENvbXApXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0fVxuXHRcdH0pO1xuXHR9XG5cblx0cHVibGljIGluaXQoKSB7XG5cdFx0dGhpcy5idWlsZFNlcnZpY2VzLmNhbGwodGhpcyk7XG5cdFx0dGhpcy5idWlsZENvbXBvbmVudHMuY2FsbCh0aGlzKTtcblx0XHR0aGlzLmJ1aWxkUGFnZUNvbXBvbmVudHMuY2FsbCh0aGlzKTtcblxuXHRcdHdpbmRvd1tcIm0zQXBwc1wiXSA9IHsgW3RoaXMuYXBwTmFtZV06IHRoaXMgfTtcblx0fVxuXG5cdHB1YmxpYyBiaW5kKGNvbXBOYW1lOiBzdHJpbmcsIGNvbmZpZzogYW55KSB7XG5cdFx0dGhpcy5jb21wb25lbnRzQ29uZmlnW2NvbXBOYW1lXSA9IGNvbmZpZztcblx0fVxuXG5cdHB1YmxpYyBzdGFydCgpIHtcblx0XHRpZiAoXG5cdFx0XHRkb2N1bWVudC5hdHRhY2hFdmVudFxuXHRcdFx0XHQ/IGRvY3VtZW50LnJlYWR5U3RhdGUgPT09IFwiY29tcGxldGVcIlxuXHRcdFx0XHQ6IGRvY3VtZW50LnJlYWR5U3RhdGUgIT09IFwibG9hZGluZ1wiXG5cdFx0KSB7XG5cdFx0XHR0aGlzLmluaXQoKTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0ZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgdGhpcy5pbml0LmJpbmQodGhpcykpO1xuXHRcdH1cblx0fVxufVxuIl19

/***/ }),

/***/ "./node_modules/@agenciam3/pkg/dist/lib/core/isPage.js":
/*!*************************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/core/isPage.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ isPage; }
/* harmony export */ });
class isPage {
    constructor() {
        var _a;
        const metaPage = document.querySelector('meta[name="page"]');
        this.identificacaoMetaPage = metaPage
            ? metaPage.getAttribute("content") || ""
            : "";
        this.classTagBody = Array.from(document.body.classList);
        this.pageDataLayer = "";
        if (typeof window.dataLayer !== "undefined") {
            this.pageDataLayer = (_a = window.dataLayer[0]) === null || _a === void 0 ? void 0 : _a.pageCategory;
        }
    }
    is(rules) {
        let is = false;
        rules.forEach((rule) => {
            if (this.identificacaoMetaPage.search(rule) >= 0 ||
                this.pageDataLayer === rule ||
                this.classTagBody.includes(rule)) {
                is = true;
            }
        });
        return is;
    }
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaXNQYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3BhY2thZ2VzL2NvcmUvaXNQYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWdCQSxNQUFNLENBQUMsT0FBTyxPQUFPLE1BQU07SUFLMUI7O1FBQ0MsTUFBTSxRQUFRLEdBQUcsUUFBUSxDQUFDLGFBQWEsQ0FBQyxtQkFBbUIsQ0FBQyxDQUFDO1FBQzdELElBQUksQ0FBQyxxQkFBcUIsR0FBRyxRQUFRO1lBQ3BDLENBQUMsQ0FBQyxRQUFRLENBQUMsWUFBWSxDQUFDLFNBQVMsQ0FBQyxJQUFJLEVBQUU7WUFDeEMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztRQUVOLElBQUksQ0FBQyxZQUFZLEdBQUcsS0FBSyxDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQ3hELElBQUksQ0FBQyxhQUFhLEdBQUcsRUFBRSxDQUFDO1FBQ3hCLElBQUksT0FBTyxNQUFNLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtZQUM1QyxJQUFJLENBQUMsYUFBYSxTQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUMsQ0FBQyxDQUFDLDBDQUFFLFlBQVksQ0FBQztTQUN2RDtJQUNGLENBQUM7SUFPRCxFQUFFLENBQUMsS0FBZTtRQUNqQixJQUFJLEVBQUUsR0FBRyxLQUFLLENBQUM7UUFFZixLQUFLLENBQUMsT0FBTyxDQUFDLENBQUMsSUFBSSxFQUFFLEVBQUU7WUFDdEIsSUFDQyxJQUFJLENBQUMscUJBQXFCLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7Z0JBQzVDLElBQUksQ0FBQyxhQUFhLEtBQUssSUFBSTtnQkFDM0IsSUFBSSxDQUFDLFlBQVksQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLEVBQy9CO2dCQUNELEVBQUUsR0FBRyxJQUFJLENBQUM7YUFDVjtRQUNGLENBQUMsQ0FBQyxDQUFDO1FBRUgsT0FBTyxFQUFFLENBQUM7SUFDWCxDQUFDO0NBQ0QiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgSVJ1bGVyIGZyb20gXCIuL0lSdWxlclwiO1xuXG5kZWNsYXJlIGdsb2JhbCB7XG5cdGludGVyZmFjZSBXaW5kb3cge1xuXHRcdGRhdGFMYXllcjogRGF0YUxheWVyT2JqZWN0W10gfCB1bmRlZmluZWQ7XG5cdH1cblxuXHRpbnRlcmZhY2UgRGF0YUxheWVyT2JqZWN0IHtcblx0XHRwYWdlQ2F0ZWdvcnk6IHN0cmluZztcblx0fVxufVxuLyoqXG4gKiAgQ2xhc3NlIHBhcmEgdmVyaWZpY2FyIHNlIGVzdGFtb3MgZW0gdW1hIGRhcyBwYWdpbmFzXG4gKiAgcXVlIHPDo28gcGFzc2FkYXMgcG9yIGFyZ3VtZW50b1xuICovXG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIGlzUGFnZSBpbXBsZW1lbnRzIElSdWxlciB7XG5cdHByaXZhdGUgaWRlbnRpZmljYWNhb01ldGFQYWdlOiBzdHJpbmc7XG5cdHByaXZhdGUgY2xhc3NUYWdCb2R5OiBzdHJpbmdbXTtcblx0cHJpdmF0ZSBwYWdlRGF0YUxheWVyOiBzdHJpbmc7XG5cblx0Y29uc3RydWN0b3IoKSB7XG5cdFx0Y29uc3QgbWV0YVBhZ2UgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdtZXRhW25hbWU9XCJwYWdlXCJdJyk7XG5cdFx0dGhpcy5pZGVudGlmaWNhY2FvTWV0YVBhZ2UgPSBtZXRhUGFnZVxuXHRcdFx0PyBtZXRhUGFnZS5nZXRBdHRyaWJ1dGUoXCJjb250ZW50XCIpIHx8IFwiXCJcblx0XHRcdDogXCJcIjtcblxuXHRcdHRoaXMuY2xhc3NUYWdCb2R5ID0gQXJyYXkuZnJvbShkb2N1bWVudC5ib2R5LmNsYXNzTGlzdCk7XG5cdFx0dGhpcy5wYWdlRGF0YUxheWVyID0gXCJcIjtcblx0XHRpZiAodHlwZW9mIHdpbmRvdy5kYXRhTGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdHRoaXMucGFnZURhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXJbMF0/LnBhZ2VDYXRlZ29yeTtcblx0XHR9XG5cdH1cblxuXHQvKipcblx0ICogKiBAcGFyYW0ge2FycmF5fSBbYXJnc10gdW0gb3UgdW0gYXJyYXkgZGUgc3RyaW5ncyBjb250ZW5kbyBhIHBhbGF2cmEgY2hhdmUgcGFyYSBpZGVudGlmaWNhciBhIHBhZ2luYVxuXHQgKiBAcmV0dXJuIHtCb29sZWFufSByZXRvcm5hIHRydWUgc2UgdW0gZG9zIGFyZ3VtZW50b3MgZXN0aXZlciBuYSBtZXRhL2JvZHlDbGFzcy90YWdcblx0ICovXG5cblx0aXMocnVsZXM6IHN0cmluZ1tdKTogYm9vbGVhbiB7XG5cdFx0bGV0IGlzID0gZmFsc2U7XG5cblx0XHRydWxlcy5mb3JFYWNoKChydWxlKSA9PiB7XG5cdFx0XHRpZiAoXG5cdFx0XHRcdHRoaXMuaWRlbnRpZmljYWNhb01ldGFQYWdlLnNlYXJjaChydWxlKSA+PSAwIHx8XG5cdFx0XHRcdHRoaXMucGFnZURhdGFMYXllciA9PT0gcnVsZSB8fFxuXHRcdFx0XHR0aGlzLmNsYXNzVGFnQm9keS5pbmNsdWRlcyhydWxlKVxuXHRcdFx0KSB7XG5cdFx0XHRcdGlzID0gdHJ1ZTtcblx0XHRcdH1cblx0XHR9KTtcblxuXHRcdHJldHVybiBpcztcblx0fVxufVxuIl19

/***/ }),

/***/ "./node_modules/@agenciam3/pkg/dist/lib/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/@agenciam3/pkg/dist/lib/index.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Container": function() { return /* reexport safe */ _core_Container__WEBPACK_IMPORTED_MODULE_0__.default; },
/* harmony export */   "IsPage": function() { return /* reexport safe */ _core_isPage__WEBPACK_IMPORTED_MODULE_1__.default; },
/* harmony export */   "PubSub": function() { return /* reexport safe */ _StateManager_PubSub__WEBPACK_IMPORTED_MODULE_2__.default; },
/* harmony export */   "Store": function() { return /* reexport safe */ _StateManager_Store__WEBPACK_IMPORTED_MODULE_3__.default; },
/* harmony export */   "mergeStores": function() { return /* reexport safe */ _StateManager_mergeStores__WEBPACK_IMPORTED_MODULE_4__.default; }
/* harmony export */ });
/* harmony import */ var _core_Container__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/Container */ "./node_modules/@agenciam3/pkg/dist/lib/core/Container.js");
/* harmony import */ var _core_isPage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/isPage */ "./node_modules/@agenciam3/pkg/dist/lib/core/isPage.js");
/* harmony import */ var _StateManager_PubSub__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./StateManager/PubSub */ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/PubSub.js");
/* harmony import */ var _StateManager_Store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./StateManager/Store */ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/Store.js");
/* harmony import */ var _StateManager_mergeStores__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./StateManager/mergeStores */ "./node_modules/@agenciam3/pkg/dist/lib/StateManager/mergeStores.js");





//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvcGFja2FnZXMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFFLE9BQU8sSUFBSSxTQUFTLEVBQUUsTUFBTSxrQkFBa0IsQ0FBQztBQUN4RCxPQUFPLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBRSxNQUFNLGVBQWUsQ0FBQztBQUNsRCxPQUFPLEVBQUUsT0FBTyxJQUFJLE1BQU0sRUFBRSxNQUFNLHVCQUF1QixDQUFDO0FBQzFELE9BQU8sRUFBRSxPQUFPLElBQUksS0FBSyxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFDeEQsT0FBTyxFQUFFLE9BQU8sSUFBSSxXQUFXLEVBQUUsTUFBTSw0QkFBNEIsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCB7IGRlZmF1bHQgYXMgQ29udGFpbmVyIH0gZnJvbSBcIi4vY29yZS9Db250YWluZXJcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgSXNQYWdlIH0gZnJvbSBcIi4vY29yZS9pc1BhZ2VcIjtcbmV4cG9ydCB7IGRlZmF1bHQgYXMgUHViU3ViIH0gZnJvbSBcIi4vU3RhdGVNYW5hZ2VyL1B1YlN1YlwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBTdG9yZSB9IGZyb20gXCIuL1N0YXRlTWFuYWdlci9TdG9yZVwiO1xuZXhwb3J0IHsgZGVmYXVsdCBhcyBtZXJnZVN0b3JlcyB9IGZyb20gXCIuL1N0YXRlTWFuYWdlci9tZXJnZVN0b3Jlc1wiO1xuIl19

/***/ }),

/***/ "./src/arquivos/js/app/app.js":
/*!************************************!*\
  !*** ./src/arquivos/js/app/app.js ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agenciam3/pkg */ "./node_modules/@agenciam3/pkg/dist/lib/index.js");
/* harmony import */ var Config_index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Config/index */ "./src/arquivos/js/config/index.js");
/* harmony import */ var _pages_Erro__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/Erro */ "./src/arquivos/js/app/pages/Erro.js");
/* harmony import */ var _pages_Home__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/Home */ "./src/arquivos/js/app/pages/Home.js");
/* harmony import */ var _pages_Categoria__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/Categoria */ "./src/arquivos/js/app/pages/Categoria.js");
/* harmony import */ var _pages_Produto__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./pages/Produto */ "./src/arquivos/js/app/pages/Produto.js");
/* harmony import */ var _pages_Institucional__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/Institucional */ "./src/arquivos/js/app/pages/Institucional.js");
/* harmony import */ var _components_Newsletter__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Newsletter */ "./src/arquivos/js/app/components/Newsletter.js");
/* harmony import */ var _components_Minicart__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Minicart */ "./src/arquivos/js/app/components/Minicart.js");
/* harmony import */ var _components_BottomNav__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/BottomNav */ "./src/arquivos/js/app/components/BottomNav.js");
/* harmony import */ var _components_FixedHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FixedHeader */ "./src/arquivos/js/app/components/FixedHeader.js");
/* harmony import */ var _components_AutoComplete__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/AutoComplete */ "./src/arquivos/js/app/components/AutoComplete.js");
/* harmony import */ var _components_ScrollToTop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ScrollToTop */ "./src/arquivos/js/app/components/ScrollToTop.js");
/* harmony import */ var _partials_Menu__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./partials/Menu */ "./src/arquivos/js/app/partials/Menu.js");
/* harmony import */ var _partials_Promocao__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./partials/Promocao */ "./src/arquivos/js/app/partials/Promocao.js");
/* harmony import */ var _partials_MenuContents__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./partials/MenuContents */ "./src/arquivos/js/app/partials/MenuContents.js");
/* harmony import */ var _partials_Login__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./partials/Login */ "./src/arquivos/js/app/partials/Login.js");
/* harmony import */ var _components_Prateleira_Prateleira__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/Prateleira/Prateleira */ "./src/arquivos/js/app/components/Prateleira/Prateleira.js");
/* harmony import */ var _partials_shelf__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./partials/shelf */ "./src/arquivos/js/app/partials/shelf.js");
/* harmony import */ var _partials_PopUp__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./partials/PopUp */ "./src/arquivos/js/app/partials/PopUp.js");
/* harmony import */ var _components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/Prateleira/PrateleiraService */ "./src/arquivos/js/app/components/Prateleira/PrateleiraService.js");




























const app = new _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__.Container({
	appName: "template",
	config: Config_index__WEBPACK_IMPORTED_MODULE_1__.default,
	components: [
		_partials_Menu__WEBPACK_IMPORTED_MODULE_13__.default,
		_partials_Promocao__WEBPACK_IMPORTED_MODULE_14__.default,
		_partials_PopUp__WEBPACK_IMPORTED_MODULE_19__.default,
		_components_Minicart__WEBPACK_IMPORTED_MODULE_8__.default,
		_partials_MenuContents__WEBPACK_IMPORTED_MODULE_15__.default,
		_partials_Login__WEBPACK_IMPORTED_MODULE_16__.default,
		_components_Newsletter__WEBPACK_IMPORTED_MODULE_7__.default,
		_components_BottomNav__WEBPACK_IMPORTED_MODULE_9__.default,
		_components_FixedHeader__WEBPACK_IMPORTED_MODULE_10__.default,
		_components_ScrollToTop__WEBPACK_IMPORTED_MODULE_12__.default,
		_components_AutoComplete__WEBPACK_IMPORTED_MODULE_11__.default,
		_components_Prateleira_Prateleira__WEBPACK_IMPORTED_MODULE_17__.default,
		_partials_shelf__WEBPACK_IMPORTED_MODULE_18__.default,
	],
	services: [_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_20__.default],
	pages: [
		{
			pageRefs: ["home"],
			components: [_pages_Home__WEBPACK_IMPORTED_MODULE_3__.default],
		},
		{
			pageRefs: ["categoria"],
			components: [_pages_Categoria__WEBPACK_IMPORTED_MODULE_4__.default],
		},
		{
			pageRefs: ["produto"],
			components: [_pages_Produto__WEBPACK_IMPORTED_MODULE_5__.default],
		},
		{
			pageRefs: ["erro"],
			components: [_pages_Erro__WEBPACK_IMPORTED_MODULE_2__.default],
		},
		{
			pageRefs: ["institucional"],
			components: [_pages_Institucional__WEBPACK_IMPORTED_MODULE_6__.default],
		},
	],
});

app.bind(_components_Minicart__WEBPACK_IMPORTED_MODULE_8__.default.name, ".minicart__drawer");

app.bind(_components_Newsletter__WEBPACK_IMPORTED_MODULE_7__.default.name, {
	elemento: ".footer-newsletter__form",
	textButtom: "CADASTRE-SE",
});

/* harmony default export */ __webpack_exports__["default"] = (app);


/***/ }),

/***/ "./src/arquivos/js/app/components/AutoComplete.js":
/*!********************************************************!*\
  !*** ./src/arquivos/js/app/components/AutoComplete.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AutoComplete; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class AutoComplete {
	constructor() {
		this.fixAutoComplete();
	}
	fixAutoComplete() {
		$(".fulltext-search-box").on("autocompleteopen", () => {
			$(".ui-autocomplete.ui-menu").addClass("autocompleteopen");
		});
		$(".selector").on("autocompleteclose", () => {
			$(".ui-autocomplete.ui-menu").removeClass("autocompleteopen");
		});
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/BottomNav.js":
/*!*****************************************************!*\
  !*** ./src/arquivos/js/app/components/BottomNav.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ BottomNav; }
/* harmony export */ });
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class BottomNav {
	constructor() {
		if (Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__.isSmallerThen768) {
			this.selectors();
			this.events();
		}
	}

	selectors() {
		this.mobileOptions = $(".mobile-bottom-options");
		this.window = $(window);
	}

	events() {
		this.window.scroll(this.handleScroll.bind(this));

		$(".mobile-bottom-options .show-search button").on("click", () => {
			this.moveToTop();
			this.focusOnSearch();
		});
	}

	handleScroll() {
		const offset = 200;
		if (this.window.scrollTop() > offset) {
			this.mobileOptions.addClass("active");
		} else {
			this.mobileOptions.removeClass("active");
		}
	}

	moveToTop() {
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			500
		);
	}

	focusOnSearch() {
		$(".busca-mobile .fulltext-search-box").focus();
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/CrossSelling.js":
/*!********************************************************!*\
  !*** ./src/arquivos/js/app/components/CrossSelling.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CrossSelling; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class CrossSelling {
	constructor(idProduct, elemento = ".product-info .similares") {
		this._elemento = elemento;
		this._idProduct = idProduct;

		this._url = {
			similars: "/api/catalog_system/pub/products/crossselling/similars/",
			suggestions:
				"/api/catalog_system/pub/products/crossselling/suggestions/",
			accessories:
				"/api/catalog_system/pub/products/crossselling/accessories/",
		};
	}

	similars(title = "") {
		try {
			this._loadProduct("similars").done(
				(products, textStatus, jqXHR) => {
					this._desenhar(products, "similars", title);
				}
			);
		} catch (error) {
			console.warn(error);
		}
	}
	suggestions(title = "") {
		try {
			this._loadProduct("suggestions").done(
				(products, textStatus, jqXHR) => {
					this._desenhar(products, "suggestions", title);
				}
			);
		} catch (error) {
			console.warn(error);
		}
	}
	accessories(title = "") {
		try {
			this._loadProduct("accessories").done(
				(products, textStatus, jqXHR) => {
					this._desenhar(products, "accessories", title);
				}
			);
		} catch (error) {
			console.warn(error);
		}
	}

	_loadProduct(type = "similars") {
		if (this._url.hasOwnProperty(type)) {
			return $.ajax({
				url: `${this._url[type]}/${this._idProduct}`,
				type: "GET",
			});
		}
		throw "Type erro on load cors selling";
	}

	_desenhar(products, type, title = "") {
		if (products.length > 0) {
			products = this._cleanProducts(products);

			let _html = `<div class="cross-selling ${type.toLowerCase()}">
				<div class="titulo">${title}</div>
				<ul class="lista">
					${products
						.map((item, i) => {
							let imgTag =
								products[i].items[0].images[0].imageTag;
							imgTag = imgTag
								.replace(/#width#/gi, "90")
								.replace(/#height#/gi, "90")
								.replace("~", "");

							return `<li class="item ${
								item.productId == this._idProduct
									? "selected"
									: ""
							}">
							<a href="${item.link}" title="${item.productName}">${imgTag}</a>
						</li>`;
						})
						.join("")}
				</ul>
			</div>`;
			// insere no DOM
			let $products = $(_html);
			$(this._elemento).append($products);

			// Ativa slide
			$products.find("ul").slick({
				dots: false,
				autoplay: true,
				autoplaySpeed: 3000,
				arrows: false,
				infinite: true,
				slidesToShow: 4,
				slidesToScroll: 4,
				speed: 500,
				variableWidth: true,
			});
		}
	}

	_cleanProducts(products) {
		let cleanProducts = [];
		let usedIds = [];

		// cria lista sem repetiçaõ de produtos
		for (let i = 0; i < products.length; i++) {
			const item = products[i];
			if (usedIds.indexOf(item.productId) < 0) {
				cleanProducts.push({ ...item });
				usedIds.push(item.productId);
			}
		}
		try {
			return cleanProducts.sort((a, b) => a.productName <= b.productName);
		} catch (error) {
			return cleanProducts;
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/FixedHeader.js":
/*!*******************************************************!*\
  !*** ./src/arquivos/js/app/components/FixedHeader.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FixedHeader; }
/* harmony export */ });
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class FixedHeader {
	constructor() {
		if (!Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__.isSmallerThen991) {
			this.selectors();
			this.events();	
		}
	}

	selectors() {
		this.pageHeader = $(".page-header");
	}
	
	events() {
		$(document).scroll(this.fixHeader.bind(this));
	}

	fixHeader() {
		const topScroll = $(document).scrollTop();

		if(topScroll > 200) {
			this.pageHeader.addClass("is-fixed")
		} else {
			this.pageHeader.removeClass("is-fixed")
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/Minicart.js":
/*!****************************************************!*\
  !*** ./src/arquivos/js/app/components/Minicart.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Minicart; }
/* harmony export */ });
/* harmony import */ var Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/vtexUtils */ "./src/arquivos/js/helpers/vtexUtils.js");
/* harmony import */ var Helpers_gtmCustomEvents__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/gtmCustomEvents */ "./src/arquivos/js/helpers/gtmCustomEvents.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class Minicart {
	createMiniCartStructure(element) {
		const structure = `
			<div class="mini-cart-container">
				<div class="mini-cart-header">
					<i class="sprite sprite-cadeado"></i>
					<span>
						COMPRA 100% SEGURA
					</span>
					<button class="btn-close" aria-label="fechar carrinho">
						fechar
					</button>
				</div>
				<div class="mini-cart-main">
					<div class="wait-screen"></div>
					<ul class="product-list"></ul>
				</div>
				<div class="mini-cart-footer">
					<div class="totals-container">
						<div class="total">
							TOTAL <strong>R$<span class="value">00,00</span></strong>
						</div>
					</div>
					<button class="continue-buying" aria-label="Continuar comprando">
						Continuar comprando
					</button>
					<a class="finish-order" href="/checkout/#cart">
						Finalizar compra
					</a>
				</div>
			</div>
			<div class="mini-cart-overlay"></div>
		`;

		$(element).html(structure);
	}

	listItems() {
		let orderItems = (items) => {
			$(".mini-cart-container .product-list").empty();

			for (var i = 0; i < items.length; i++) {
				var price = parseFloat(items[i].price / 100).toFixed(2);
				price = "R$ " + price.replace(".", ",");

				if (items[i].sellingPrice == 0) {
					price = "Grátis";
				}

				var orderItem = `
					<li id="${i + "-" + items[i].uniqueId}" class="product">
						<div class="product-image">
							<a href="${items[i].detailUrl}" title="${items[i].name}">
								<img src="${(0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.alterarTamanhoImagemSrcVtex)(items[i].imageUrl, 80, 102)}" alt="${
					items[i].name
				}">
							</a>
						</div>
						<div class="product-options">
							<div class="product-info">
								<div class="name">${items[i].name}</div>
								<div class="product-price">${price}</div>
								<div class="product-qtd">
									<button class="remove-from-cart" aria-label="Remover um item">-</button>
									<span class="value">${items[i].quantity}</span>
									<button class="add-to-cart" aria-label="Adicionar um item">+</button>
								</div>
							</div>
							<div class="product-remove">
								<button class="remove" aria-label="Remover produto">Remover</button>
							</div>
						</div>
					</li>
				`;

				$(".mini-cart-container .product-list").append(orderItem);
			}

			this.addOneToCart();
			this.removeOneFromCart();
			this.removeFromCart();
			this.updateCartTotals();
		};

		let emptyMessage = () => {
			$(".mini-cart-container .product-list").empty();

			let emptyMesssage = `
				<li class="empty-message">
					<strong>
						Sua sacola está vazia
					</strong>
					<p>
						Para continuar comprando, navegue pelas categorias do site ou faça uma busca pelo seu produto.
					</p>
				</li>
			`;

			$(".mini-cart-container .product-list").append(emptyMesssage);

			this.updateCartTotals();
		};

		try {
			var items = window.vtexjs.checkout.orderForm.items;
			$(".mini-cart-container").removeClass("have-item");

			if (items.length > 0) {
				orderItems(items);
				$(".mini-cart-container").addClass("have-item");
			} else {
				emptyMessage();
			}
		} catch (e) {
			emptyMessage();
			console.warn("couldnt list items. " + e.message);
		}
	}
	updateCartTotals() {
		var totalQtd = 0;
		var totalPrice = 0;

		try {
			var items = window.vtexjs.checkout.orderForm.items;
			var valorSubtotalCompraEmCentavos = 0;
			var valorDescontosEmCentavos = 0;

			if (window.vtexjs.checkout.orderForm.totalizers.length > 0) {
				valorSubtotalCompraEmCentavos =
					window.vtexjs.checkout.orderForm.totalizers[0].value;

				if (window.vtexjs.checkout.orderForm.totalizers[1]) {
					if (
						window.vtexjs.checkout.orderForm.totalizers[1].id ==
						"Discounts"
					) {
						valorDescontosEmCentavos =
							window.vtexjs.checkout.orderForm.totalizers[1]
								.value;
					}
				}
			}

			totalPrice +=
				(valorSubtotalCompraEmCentavos + valorDescontosEmCentavos) /
				100;
			totalPrice = parseFloat(totalPrice).toFixed(2);

			if (isNaN(totalPrice)) {
				totalPrice = " ";
			} else {
				totalPrice = totalPrice.replace(".", ",");
			}

			$(".mini-cart-container .product-list .product").each(function () {
				var productId = $(this).attr("id");

				for (var i = 0; i < items.length; i++) {
					if (i + "-" + items[i].uniqueId == productId) {
						var qtd = parseInt(items[i].quantity);
						totalQtd += qtd;
						$(this).find(".product-qtd .value").text(qtd);
						break;
					}
				}
			});
		} catch (e) {
			console.warn("couldnt update cart info. " + e.message);
		}

		$(".mini-cart-footer .total .value").text(totalPrice);
	}
	updateOrderForm(productId, qtd) {
		try {
			window.vtexjs.checkout
				.getOrderForm()
				.then((orderForm) => {
					$(".mini-cart-container .wait-screen").addClass("active");
					for (var i = 0; i < orderForm.items.length; i++) {
						if (
							i + "-" + orderForm.items[i].uniqueId ==
							productId
						) {
							var itemIndex = i;
						}
					}

					var updateItem = {
						index: itemIndex,
						quantity: qtd,
					};
					return window.vtexjs.checkout.updateItems(
						[updateItem],
						null,
						false
					);
				})
				.done(function (orderForm) {
					$(".mini-cart-container .wait-screen").removeClass(
						"active"
					);
				})
				.always(() => {
					this.listItems();
				});
		} catch (e) {
			console.warn("couldnt update order form. " + e.message);
		}
	}
	addOneToCart() {
		$(".mini-cart-container .add-to-cart").click((e) => {
			var qtd = $(e.target).siblings(".value");
			var productId = $(e.target).parents(".product").attr("id");

			if ($.isNumeric(qtd.text())) {
				var valueQtd = parseInt(qtd.text());

				valueQtd += 1;
				this.updateOrderForm(productId, valueQtd);
			} else {
				this.updateOrderForm(productId, 1);
			}
		});
	}
	removeOneFromCart() {
		$(".mini-cart-container .remove-from-cart").click((e) => {
			(0,Helpers_gtmCustomEvents__WEBPACK_IMPORTED_MODULE_1__.removeFromCartM3GtmEvent)();
			var qtd = $(e.target).siblings(".value");
			var productId = $(e.target).parents(".product").attr("id");

			if ($.isNumeric(qtd.text())) {
				var valueQtd = parseInt(qtd.text());
				if (valueQtd > 1) {
					valueQtd -= 1;
					this.updateOrderForm(productId, valueQtd);
				}
			} else {
				this.updateOrderForm(productId, 1);
			}
		});
	}
	removeFromCart() {
		$(".mini-cart-container .product-remove .remove").click((e) => {
			var productId = $(e.target).parents(".product").attr("id");
			this.updateOrderForm(productId, 0);
		});
	}
	configureEvents(openBtn) {
		var openMinicart = () => {
			this.listItems();
			$(".mini-cart-container").parent().toggleClass("show-mini-cart");
			$(".mini-cart-overlay").toggleClass("active");
			$(".mini-cart").parents("header").toggleClass("mini-cart-open");
		};

		var closeMinicart = function () {
			$(".mini-cart-container").parent().removeClass("show-mini-cart");
			$(".mini-cart-overlay").removeClass("active");
			$(".mini-cart").parents("header").removeClass("mini-cart-open");
		};

		$(document).on("click", openBtn, function (e) {
			event.preventDefault();
			$(openBtn).toggleClass("active");
			openMinicart();
		});

		$(document).on(
			"click",
			".mini-cart-container .btn-close, .mini-cart-container .continue-buying, .mini-cart-overlay",
			function () {
				closeMinicart();
				$(openBtn).toggleClass("active");
			}
		);
	}

	constructor(ctx, element) {
		try {
			window.window.vtexjs.checkout.getOrderForm();
		} catch (error) {
			console.warn("vtexjs not found.");
		}

		this.createMiniCartStructure(element);
		this.configureEvents(".minicart__button");
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/Newsletter.js":
/*!******************************************************!*\
  !*** ./src/arquivos/js/app/components/Newsletter.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Newsletter; }
/* harmony export */ });
/* harmony import */ var Lib_custom_newsletter_form__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Lib/custom-newsletter-form */ "./src/arquivos/js/lib/custom-newsletter-form.js");
/* harmony import */ var Lib_custom_newsletter_form__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Lib_custom_newsletter_form__WEBPACK_IMPORTED_MODULE_0__);
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class Newsletter {
	constructor(ctx, { elemento, textButtom }) {
		let $elemento =
			typeof elemento !== "undefined" ? $(elemento) : $(".news-form");
		textButtom =
			typeof textButtom !== "undefined" ? textButtom : "Cadastre-se";

		$elemento.CustomNewsletter({
			shop: ctx.config.loja.accontuName,
			acronymEntity: ctx.config.loja.entityNewsletter,
			textButtom: textButtom,
		});
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/Prateleira/Prateleira.js":
/*!*****************************************************************!*\
  !*** ./src/arquivos/js/app/components/Prateleira/Prateleira.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Prateleira; }
/* harmony export */ });
/* harmony import */ var Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/vtexUtils */ "./src/arquivos/js/helpers/vtexUtils.js");
/* harmony import */ var Config_loja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Config/loja */ "./src/arquivos/js/config/loja.js");
/* harmony import */ var _PrateleiraService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./PrateleiraService */ "./src/arquivos/js/app/components/Prateleira/PrateleiraService.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




class Prateleira {
	constructor(ctx) {
		this.service = ctx.getService(_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.default.name);
		this.atualizar();
		this.service.events.subscribe(_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SHELF, this.atualizar.bind(this));
	}
	flagDeDesconto(elementos) {
		var $elementos = $(elementos);
		if ($elementos.length == 0) {
			$elementos = $(".produto-na-prateleira");
		}

		$elementos.not(".flagDeDesconto").each((index, el) => {
			var percentualDeDesconto = this.calcularValorDeDesconto($(el));
			if (
				percentualDeDesconto >=
				Config_loja__WEBPACK_IMPORTED_MODULE_1__.default.percentualDeDecontoMinimoParaFlag
			) {
				this.createFlagDesconto($(el), percentualDeDesconto);
			}
			$(el).addClass("flagDeDesconto");
		});
	}
	precoParcelado() {
		$(".produto-na-prateleira")
			.not(".calc")
			.each((i, el) => {
				var execucao = new window.Promise((resolve, reject) => {
					try {
						let $price = $(el).find(".price"),
							nParcelas = Config_loja__WEBPACK_IMPORTED_MODULE_1__.default.price.numeroDeParcelas;
						let valorTotal = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)(
							$price.find(".principal .value").text()
						);
						let valorParcelado = valorTotal / nParcelas;

						//limpa o parcelamento atual
						$(el).find(".price .parcelado").remove();
						let htmlPrecoParcelado = this.criarHtmlPrecoParcelado(
							valorParcelado,
							nParcelas
						);
						$price.append(htmlPrecoParcelado);

						resolve();
					} catch (error) {
						reject();
					}
				});
				execucao
					.then(function () {
						$(el).addClass("calc");
					})
					.catch(function () {
						$(el).find(".price .parcelado").remove();
					});
			});
	}
	precoBoleto() {
		$(".produto-na-prateleira")
			.not(".boleto")
			.each(function (i, el) {
				var execucao = new window.Promise(function (resolve, reject) {
					try {
						let $price = $(el).find(".price"),
							percentualBoleto = Config_loja__WEBPACK_IMPORTED_MODULE_1__.default.price.percentualBoleto;
						let valorTotal = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)(
							$price.find(".principal .value").text()
						);
						let valorBoleto =
							valorTotal - (valorTotal * percentualBoleto) / 100;

						//limpa o parcelamento atual
						$(el).find(".price .boleto").remove();
						let htmlPrecoBoleto = criarHtmlPrecoBoleto(valorBoleto);
						$price.append(htmlPrecoBoleto);

						resolve();
					} catch (error) {
						reject();
					}
				});
				execucao
					.then(function () {
						$(el).addClass("boleto");
					})
					.catch(function () {
						$(el).find(".price .boleto").remove();
					});
			});
	}
	//ex atualziar
	atualizar() {
		this.flagDeDesconto();
		// this.precoParcelado();
		// this.precoBoleto();
	}

	criarHtmlPrecoBoleto(valor) {
		var html,
			strValue = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)(valor);
		html = '<div class="boleto">';
		html += '<span class="value"> R$ ' + strValue + "</span>";
		html += "<span> &#224; vista no boleto</span>";
		html += "</div>";

		return html;
	}

	calcularValorDeDesconto($produto) {
		let precoAntigo = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)($produto.find(".antigo .value").text());
		let precoPromocao = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)($produto.find(".principal .value").text());
		if (!precoAntigo || !precoPromocao) return null;

		var floatDesconto = 100 - (precoPromocao / precoAntigo) * 100;
		return Math.ceil(floatDesconto);
	}

	createFlagDesconto($elemento, percentualDeDesconto) {
		var $flag = $("<p />")
			.addClass("flag produto-off")
			.text(percentualDeDesconto + "%OFF");
		$elemento.find(".flags-product .DiscountHightLight").append($flag);
	}

	criarHtmlPrecoParcelado(valor, numeroDeParcelas) {
		var html,
			strValue = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_0__.getPrice)(valor);

		html = '<div class="parcelado">';
		html += '<span class="desconto-parcelado"> ou ';
		html += "<strong>";
		html +=
			'<span class="numero-de-parcelas" > ' +
			numeroDeParcelas +
			"</span>X de";
		html += '<span class="value"> R$ ' + strValue + "</span>";
		html += "</strong> no cartão";
		html += "</span>";
		html += "</div>";

		return html;
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/Prateleira/PrateleiraService.js":
/*!************************************************************************!*\
  !*** ./src/arquivos/js/app/components/Prateleira/PrateleiraService.js ***!
  \************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "UPDATE_SHELF": function() { return /* binding */ UPDATE_SHELF; },
/* harmony export */   "default": function() { return /* binding */ PrateleiraService; }
/* harmony export */ });
/* harmony import */ var _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agenciam3/pkg */ "./node_modules/@agenciam3/pkg/dist/lib/index.js");


const UPDATE_SHELF = "UPDATE_SHELF";

class PrateleiraService {
	constructor() {
		this.events = new _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__.PubSub();
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/components/ProductModules.js":
/*!**********************************************************!*\
  !*** ./src/arquivos/js/app/components/ProductModules.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductModules; }
/* harmony export */ });
/* harmony import */ var Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Lib/ComponentesProduto/index */ "./src/arquivos/js/lib/ComponentesProduto/index.js");
 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

class ProductModules {
	constructor(opts) {
		this.opts = {
			priceSelector: _optionalChain([opts, 'optionalAccess', _ => _.priceSelector]) || ".product__price",
			qtdSelector: _optionalChain([opts, 'optionalAccess', _2 => _2.qtdSelector]) || ".product__qtd",
			buyBtnSelector: _optionalChain([opts, 'optionalAccess', _3 => _3.buyBtnSelector]) || ".product__buy-btn",
			skuSelector: _optionalChain([opts, 'optionalAccess', _4 => _4.skuSelector]) || ".product__skus",
			alertMeSelector: _optionalChain([opts, 'optionalAccess', _5 => _5.alertMeSelector]) || ".product__alert-me",
			skuJson: _optionalChain([opts, 'optionalAccess', _6 => _6.skuJson]) || window.skuJson,
			store: _optionalChain([opts, 'optionalAccess', _7 => _7.store]) || new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ComponentStore(),
		};
		this.store = this.opts.store;
		this.mapearSkus(this.opts.skuJson);
		this.preco(this.opts.priceSelector);
		this.quantidade(this.opts.qtdSelector);
		this.botaoDeCompra(this.opts.buyBtnSelector);
		this.selecaoSkus(this.opts.skuSelector, this.skuJson);
		this.aviseme(this.opts.alertMeSelector);
	}

	mapearSkus(skuJson) {
		this.skuJson = mapearSkus(skuJson);
	}

	preco(elemento) {
		var moduloPreco = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloPreco(
			elemento,
			this.store
		).configurar({
			precoDe: {
				ativo: false,
			},
			precoPor: {
				ativo: true,
			},
			parcelado: {
				ativo: true,
				auto: false,
			},
			boleto: {
				ativo: false,
			},
		});
		moduloPreco.desenhar();
	}

	selecaoSkus(elemento, skuJsonAdultered) {
		var ModuloSkus = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloSkusPorEspecificacoes(
			skuJsonAdultered,
			elemento,
			this.store
		);
		// ModuloSkus.elemento();
		ModuloSkus.desenhar().configurar();
		return ModuloSkus.setDefauls(false);
		// this.opcaoSkuIndisponivel();
	}

	quantidade(elemento) {
		var moduloBtnQtd = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloBtnQtd(elemento, this.store);
		moduloBtnQtd.configurar({
			max: 50,
		});

		var moduloQuantidade = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloQuantidade(
			elemento,
			this.store
		);
		moduloQuantidade.configurar({
			maxEstoque: 50,
		});
		moduloQuantidade.moduloExibicao(moduloBtnQtd);
		moduloQuantidade.desenhar();
	}

	botaoDeCompra(elemento) {
		this.moduloBotaoDeCompra = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloBotaoDeCompra(
			elemento,
			this.store
		);
		this.moduloBotaoDeCompra.configurar({
			botaoCompra: "Comprar",
			botaoSkuIndisponivel: "Indisponível",
			msgAddCarrinhoSucesso: "Adicionado à <strong>Sacola</strong> ",
		});

		this.moduloBotaoDeCompra.desenhar();
	}

	aviseme(elemento) {
		var opcoes = {
			titulo: `
			<p class="alert-me__title">Produto indisponível</p>
			<p class="alert-me__text">Avise-me quando chegar</p>`,
			placeholderNome: "Digite seu nome",
			placeholderEmail: "Digite seu e-mail",
			btnSubmit: "Enviar",
		};

		var moduloAviseMe = new Lib_ComponentesProduto_index__WEBPACK_IMPORTED_MODULE_0__.default.ModuloAviseMe(elemento, this.store);
		moduloAviseMe.configurar(opcoes);
		moduloAviseMe.desenhar();
	}
}

/**
 * Função para mapear skus sem especificações no skuJson
 * esse script usa o nome de cada sku como variação "cadastrada" para o funcionameto correto dos modulos de produto
 * @param {object} skuJson
 */
function mapearSkus(skuJson) {
	var skuJsonAdultered = skuJson;
	if (skuJson.dimensions.length == 0) {
		let variationName = "variacao";
		let nameSkus = [];

		for (const i in skuJsonAdultered.skus) {
			if (skuJsonAdultered.skus.hasOwnProperty(i)) {
				const sku = skuJsonAdultered.skus[i];

				nameSkus.push(sku.skuname);
				sku.dimensions[variationName] = sku.skuname;
			}
		}

		skuJsonAdultered.dimensions.push(variationName);
		skuJsonAdultered.dimensionsInputType[variationName] = "Combo";
		skuJsonAdultered.dimensionsMap[variationName] = nameSkus;

		skuJsonAdultered._scriptMapVariations = true;
	}
	return skuJsonAdultered;
}


/***/ }),

/***/ "./src/arquivos/js/app/components/ScrollToTop.js":
/*!*******************************************************!*\
  !*** ./src/arquivos/js/app/components/ScrollToTop.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollToTop; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class ScrollToTop {
	constructor() {
		this.selectors();
		this.events();
	}

	selectors() {
		this.offset = 200;
		this.duration = 500;
		this.scrollTopEl = $(".scroll-to-top");
		this.window = $(window);
	}

	scrollToTop(event) {
		event.preventDefault();
		$("html, body").animate(
			{
				scrollTop: 0,
			},
			this.duration
		);
		return false;
	}

	events() {
		this.scrollTopEl.click(this.scrollToTop.bind(this));
		this.window.scroll(this.handleScroll.bind(this));
	}

	handleScroll() {
		if (this.window.scrollTop() > this.offset) {
			this.scrollTopEl.fadeIn(this.duration);
		} else {
			this.scrollTopEl.fadeOut(this.duration);
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/functions/slide.js":
/*!************************************************!*\
  !*** ./src/arquivos/js/app/functions/slide.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "slideResponsivo": function() { return /* binding */ slideResponsivo; },
/* harmony export */   "bannerHome": function() { return /* binding */ bannerHome; },
/* harmony export */   "naveguePorCategorias": function() { return /* binding */ naveguePorCategorias; },
/* harmony export */   "barraDeVantagens": function() { return /* binding */ barraDeVantagens; },
/* harmony export */   "produtoThumbs": function() { return /* binding */ produtoThumbs; },
/* harmony export */   "navegacaoInstitucional": function() { return /* binding */ navegacaoInstitucional; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/*
 * 'slideResponsivo': Adiciona o passador (slider) na prateleira (shelf)
 *
 * @help http://kenwheeler.github.io/slick/
 */
function slideResponsivo(
	elementoPaiDaListaDeProdutos,
	slidesToShowDesktop,
	slidesToShow992,
	slidesToShow768,
	slidesToShow576,
	dots,
	arrows
) {
	slidesToShowDesktop =
		typeof slidesToShowDesktop !== "undefined" ? slidesToShowDesktop : 4;
	slidesToShow992 =
		typeof slidesToShow992 !== "undefined" ? slidesToShow992 : 3;
	slidesToShow768 =
		typeof slidesToShow768 !== "undefined" ? slidesToShow768 : 2;
	slidesToShow576 =
		typeof slidesToShow576 !== "undefined" ? slidesToShow576 : 1;
	dots = typeof dots !== "undefined" ? dots : false;
	arrows = typeof arrows !== "undefined" ? arrows : true;

	$(".helperComplement").remove();

	$(elementoPaiDaListaDeProdutos).each(function (i) {
		$(this)
			.find("ul")
			.eq(0)
			.slick({
				lazyLoad: "ondemand",
				dots: dots,
				arrows: arrows,
				infinite: true,
				slidesToShow: slidesToShowDesktop,
				slidesToScroll: slidesToShowDesktop,
				speed: 500,

				responsive: [
					{
						breakpoint: 992,
						settings: {
							lazyLoad: "ondemand",
							slidesToShow: slidesToShow992,
							slidesToScroll: slidesToShow992,
							infinite: true,
						},
					},
					{
						breakpoint: 768,
						settings: {
							dots: true,
							lazyLoad: "ondemand",
							slidesToShow: slidesToShow768,
							slidesToScroll: slidesToShow768,
						},
					},
					{
						breakpoint: 576,
						settings: {
							dots: true,
							lazyLoad: "ondemand",
							slidesToShow: slidesToShow576,
							slidesToScroll: slidesToShow576,
						},
					},
				],
			});
	});
}

function bannerHome(elementoPaiDoBanners) {
	let $elemento =
		typeof elementoPaiDoBanners !== "undefined"
			? $(elementoPaiDoBanners)
			: $(".main-gallery");

	var configDesktop = {
			dots: true,
			arrows: false,
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 6000,
		},
		configMobile = {
			dots: true,
			arrows: true,
			pauseOnHover: false,
			autoplay: true,
			autoplaySpeed: 6000,
		};

	$elemento.find(".desktop").slick(configDesktop);
	$elemento.find(".mobile").slick(configMobile);
}

function naveguePorCategorias(elementoPaiDoBanners) {
	let $elemento =
		typeof elementoPaiDoBanners !== "undefined"
			? $(elementoPaiDoBanners)
			: $(".main-gallery");

	$elemento.slick({
		dots: false,
		arrows: false,
		infinite: true,
		slidesToShow: 4,
		slidesToScroll: 4,
		speed: 500,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
					infinite: false,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
					infinite: false,
					autoplay: false,
					autoplaySpeed: 2000,
				},
			},
		],
	});
}

function barraDeVantagens(barraDeVantagens) {
	let $elemento =
		typeof barraDeVantagens !== "undefined"
			? $(barraDeVantagens)
			: $(".main-gallery");

	$elemento.slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 3,
		slidesToScroll: 3,
		speed: 500,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
}

function produtoThumbs(thumbs) {
	let $elemento =
		typeof thumbs !== "undefined" ? $(thumbs) : $(".main-gallery");

	$elemento.slick({
		autoplay: false,
		autoplaySpeed: 3000,
		lazyLoad: "ondemand",
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		speed: 500,
		vertical: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				},
			},
			{
				breakpoint: 768,
				settings: {
					arrows: false,
					dots: true,
					vertical: false,
					slidesToShow: 1,
					slidesToScroll: 1,
				},
			},
		],
	});
}
function navegacaoInstitucional(elemento) {
	let $elemento =
		typeof elemento !== "undefined"
			? $(elemento)
			: $(".navegacao-institucional");

	$elemento.slick({
		autoplay: false,
		autoplaySpeed: 3000,
		dots: false,
		arrows: false,
		infinite: false,
		slidesToShow: 6,
		slidesToScroll: 6,
		speed: 500,
		variableWidth: true,
		responsive: [
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 3,
				},
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 2,
				},
			},
		],
	});
}


/***/ }),

/***/ "./src/arquivos/js/app/pages/Categoria.js":
/*!************************************************!*\
  !*** ./src/arquivos/js/app/pages/Categoria.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Categoria; }
/* harmony export */ });
/* harmony import */ var Lib_smartResearch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Lib/smartResearch */ "./src/arquivos/js/lib/smartResearch.js");
/* harmony import */ var Lib_smartResearch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Lib_smartResearch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* harmony import */ var App_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! App/components/Prateleira/PrateleiraService */ "./src/arquivos/js/app/components/Prateleira/PrateleiraService.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/*
 * paginaDeCategoria
 * Página 'utilizadas': categoria, derpartamento e resultado de resultado-busca.
 */
class Categoria {
	constructor(ctx) {
		this.prateleiraService = ctx.getService(App_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.default.name);
		this.reposicionarSelectDeOrdenacao();

		if (Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_1__.isSmallerThen768) {
			this.toggleFiltersMobile();
			this.filterMobileExtraInfo();
		}
		this.smartResearch();
		this.renderCategoryFilter();
	}

	toggleFiltersMobile() {
		$("#open-filter-button").on("click", function () {
			$(".filtros-categoria").addClass("mobile-open");
		});

		$("#close-filter-button, .aply-filter-btn").on("click", function () {
			$(".filtros-categoria").removeClass("mobile-open");
		});
	}

	filterMobileExtraInfo() {
		var atualizarContagemDeFiltrosAtivos = function () {
			var opcoesFiltro = $(
				".search-multiple-navigator .multi-search-checkbox"
			);
			var qtd = 0;

			for (var i in opcoesFiltro) {
				var opcao = opcoesFiltro[i];
				if (opcao.checked) {
					qtd++;
				}
			}

			var button = $("#open-filter-button");

			if (qtd > 0) {
				button.find("span").remove();
				$("<span/>", { text: "(" + qtd + ")" }).appendTo(button);

				$(".topo-resultado .clear-filter-btn").addClass("active");
			} else {
				button.find("span").remove();
				$(".topo-resultado .clear-filter-btn").removeClass("active");
			}
		};

		//Para browsers que mantém os checkboxes selecionados ao atualizar a página
		atualizarContagemDeFiltrosAtivos();

		$(".aply-filter-btn").on("click", function () {
			atualizarContagemDeFiltrosAtivos();
		});

		$(".topo-resultado .clear-filter-btn").on("click", function () {
			$("#open-filter-button").find("span").remove();

			$(".multi-search-checkbox").each(function () {
				if ($(this).is(":checked")) {
					$(this).attr("checked", false).trigger("change");
				}
			});

			$(this).removeClass("active");
		});
	}

	reposicionarSelectDeOrdenacao() {
		$(".orderBy").eq(0).appendTo(".topo-resultado .opcoes-resultado");
	}

	createCategoryFilter() {
		let departmentFilter = $("<fieldset />", {
			class: "refino links-departamento",
		});
		let list = $("<div />");
		let navSingle = $(".search-single-navigator");
		let subcategories = navSingle.find("h4,h3,h5");

		subcategories.each(function (i, li) {
			let item = $("<label />", {
				class: "item",
			});

			if ($(li).find("a").length > 0) {
				let link = $(li).find("a");
				link.text(link.attr("title"));
				item.html(link);
				item.appendTo(list);
			}
		});

		$("<h5 />", {
			text: "Categoria",
		}).appendTo(departmentFilter);

		list.appendTo(departmentFilter);

		return departmentFilter;
	}

	renderCategoryFilter() {
		try {
			var navMultiple = $(".search-multiple-navigator");
			var categoryFilter = this.createCategoryFilter();
			categoryFilter.insertBefore(navMultiple.find("fieldset:first"));
		} catch (error) {
			console.log(error);
		}
	}

	smartResearch() {
		let opcoesVtexSmartResearch = {
			menuDepartament: ".menu-departamento",
			loadContent: ".produtos-da-categoria [id^=ResultItems]",
			shelfClass: "[class$=colunas]",
			mergeMenu: false,
			authorizeUpdate: () => true,
			emptySearchMsg:
				"<h3>Não encontramos nenhum resultado para seu filtro!</h3>",
			clearButtonClass: ".clear-filter-btn",
			// valores permitidos ['load-more','pagination','infinit-scroll']
			methodPageLoad: "load-more",
			loadMoreText: "Ver mais",
			shelfCallback: () => {
				this.prateleiraService.events.publish(App_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SHELF);
			},
		};
		if (Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_1__.isSmallerThen768) {
			opcoesVtexSmartResearch.filterOnChange = false;
			opcoesVtexSmartResearch.filterButtonClass = ".aply-filter-btn";
		}

		$(".navigation-tabs input[type='checkbox']").vtexSmartResearch(
			opcoesVtexSmartResearch
		);

		$(document).on("vsr-request-end", () => {
			this.prateleiraService.events.publish(App_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SHELF);
		});
		$(window).on("finished-upadte-filter", () => {
			this.prateleiraService.events.publish(App_components_Prateleira_PrateleiraService__WEBPACK_IMPORTED_MODULE_2__.UPDATE_SHELF);
		});
		// desabilita o scroll automático
		history.scrollRestoration = "manual";
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/pages/Erro.js":
/*!*******************************************!*\
  !*** ./src/arquivos/js/app/pages/Erro.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Erro; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class Erro {
	constructor() {
		this.init();
	}

	buscaVazia() {
		try {
			var word = decodeURI(window.location.search);
			word = word.replace("?ft=", "");
			word = word.split("&")[0];
			$(".busca-vazia .search-term").text(`"${word}"`);
		} catch (error) {
			console.log(error);
		}
	}

	init() {
		this.buscaVazia();
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/pages/Home.js":
/*!*******************************************!*\
  !*** ./src/arquivos/js/app/pages/Home.js ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Home; }
/* harmony export */ });
/* harmony import */ var Config_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Config/slick */ "./src/arquivos/js/config/slick.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class Home {
	constructor() {
		this.selectors();
		this.createSliders()
	}

	selectors() {
		this.desktopMainBanners = $(".main-banners__desktop");
		this.mobileMainBanners = $(".main-banners__mobile");
	}

	createSliders() {
		this.desktopMainBanners.slick(Config_slick__WEBPACK_IMPORTED_MODULE_0__.default.home.desktopMainBanners);
		this.mobileMainBanners.slick(Config_slick__WEBPACK_IMPORTED_MODULE_0__.default.home.mobileMainBanners);
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/pages/Institucional.js":
/*!****************************************************!*\
  !*** ./src/arquivos/js/app/pages/Institucional.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Institucional; }
/* harmony export */ });
/* harmony import */ var App_functions_slide__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App/functions/slide */ "./src/arquivos/js/app/functions/slide.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class Institucional {
	constructor() {
		var pathName = window.location.pathname;

		if (pathName) {
			$('.navegacao a[href="' + pathName + '"]').addClass("ativo");
		}
		(0,App_functions_slide__WEBPACK_IMPORTED_MODULE_0__.navegacaoInstitucional)();
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/pages/Produto.js":
/*!**********************************************!*\
  !*** ./src/arquivos/js/app/pages/Produto.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Produto; }
/* harmony export */ });
/* harmony import */ var Lib_elevateZoom__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Lib/elevateZoom */ "./src/arquivos/js/lib/elevateZoom.js");
/* harmony import */ var Lib_elevateZoom__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(Lib_elevateZoom__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var Config_loja__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! Config/loja */ "./src/arquivos/js/config/loja.js");
/* harmony import */ var Lib_ComponentesProduto__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! Lib/ComponentesProduto */ "./src/arquivos/js/lib/ComponentesProduto/index.js");
/* harmony import */ var Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! Helpers/vtexUtils */ "./src/arquivos/js/helpers/vtexUtils.js");
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* harmony import */ var App_functions_slide__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! App/functions/slide */ "./src/arquivos/js/app/functions/slide.js");
/* harmony import */ var App_components_ProductModules__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! App/components/ProductModules */ "./src/arquivos/js/app/components/ProductModules.js");
/* harmony import */ var _components_CrossSelling__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/CrossSelling */ "./src/arquivos/js/app/components/CrossSelling.js");
/* harmony import */ var Lib_ComponentesProduto_EventType__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! Lib/ComponentesProduto/EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");











class Produto {
	constructor() {
		this.imagensDasVariacoes();
		this.imagensCompreJunto();

		this.shortDescription();
		this.zoomImagemPrincipal();
		this.productSlides();
		this.exibirVariacaoDeCores();
		(0,App_functions_slide__WEBPACK_IMPORTED_MODULE_5__.slideResponsivo)(".prateleira-de-produtos", 4, 3, 1, 1, false, true);
		this.initProductComponents().catch((err) => console.error(err));
	}

	async initProductComponents() {
		const store = new Lib_ComponentesProduto__WEBPACK_IMPORTED_MODULE_2__.default.ComponentStore();
		this.modules = new App_components_ProductModules__WEBPACK_IMPORTED_MODULE_6__.default({
			store,
			priceSelector: ".moduloPreco",
			qtdSelector: ".moduloQuantidade",
			buyBtnSelector: ".moduloBotaoDeCompra",
			skuSelector: ".moduloSkus",
			alertMeSelector: ".moduloAviseMe",
		});

		store.events.subscribe(Lib_ComponentesProduto_EventType__WEBPACK_IMPORTED_MODULE_8__.CHANGE_SKU, this.imagensDasVariacoes);
	}

	/*
	 * 'itempropImage': Adiciona itemprop na imagem para melhorar os meta dados da página.
	 * 'Documentação':  https://schema.org/Product
	 */
	itempropImage() {
		$(".apresentacao #image #image-main").attr("itemprop", "image");
	}

	exibirVariacaoDeCores() {
		let idProduto = window.skuJson.productId;
		let crossSelling = new _components_CrossSelling__WEBPACK_IMPORTED_MODULE_7__.default(
			idProduto,
			".product-info .similares"
		);
		crossSelling.similars();
	}

	shortDescription() {
		$(".descricao-produto a").on("click", function (event) {
			event.preventDefault();
			$("html,body").animate(
				{
					scrollTop: $("#descricao-completa").eq(0).offset().top - 50,
				},
				500
			);
		});
	}

	zoomImagemPrincipal() {
		if (!Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_4__.isSmallerThen768) {
			$(".product-image .apresentacao #include").on(
				"mouseover",
				function () {
					var srcImg = $(".sku-rich-image-main").attr("src");

					$(".sku-rich-image-main").attr(
						"src",
						(0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_3__.alterarTamanhoImagemSrcVtex)(srcImg, 1000, 1000)
					);
					// ativa o zoom
					$(".sku-rich-image-main").elevateZoom({
						zoomType: "inner",
						cursor: "crosshair",
					});
				}
			);

			$("body").on("mouseleave", ".zoomContainer", function () {
				$(".sku-rich-image-main").removeData("elevateZoom");
				$(".zoomContainer").remove();
			});
		}
	}

	productSlides() {
		var $thumbs = $(".product-image .thumbs");
		(0,App_functions_slide__WEBPACK_IMPORTED_MODULE_5__.produtoThumbs)($thumbs);

		$(".similares ul").slick({
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			speed: 500,

			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
			],
		});
	}

	imagensDasVariacoes(event, data) {
		if (typeof window.FireSkuSelectionChanged !== "undefined") {
			var idSku = data.sku;
			window.FireSkuSelectionChanged(idSku);
		}
	}

	imagensCompreJunto() {
		window.onload = function () {
			setTimeout(function () {
				let images = $(".compre-junto table img");

				for (let i = 0; i < images.length; i++) {
					let imageUrl = $(images[i]).attr("src");
					let newUrl = (0,Helpers_vtexUtils__WEBPACK_IMPORTED_MODULE_3__.alterarTamanhoImagemSrcVtex)(
						imageUrl,
						250,
						250
					);
					$(images[i]).attr("src", newUrl);
				}
			}, 1500);
		};
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/partials/Login.js":
/*!***********************************************!*\
  !*** ./src/arquivos/js/app/partials/Login.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Login; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class Login {
	constructor() {
		this.linkUSerHEader();
		this.linkUserMenuMobile();
		this.getUSerData();
	}

	identificacaoDoUsuario(user) {
		var identificacao = user.Email;
		if (user.FirstName !== null) {
			identificacao = user.FirstName;
			if (user.LastName !== null) {
				identificacao += " " + user.LastName;
			}
		}
		return identificacao;
	}

	urlLogin() {
		return (
			"/login?ReturnUrl=" + encodeURIComponent(window.location.pathname)
		);
	}

	urlLogout() {
		return (
			"/no-cache/user/logout?ReturnUrl=" +
			encodeURIComponent(window.location.pathname)
		);
	}

	linkUSerHEader() {
		$(document).on("vtex-user-identification", (event, data) => {
			if (data.IsUserDefined) {
				$("header .links-usuario a.destaque")
					.text("Sair")
					.prop("href", this.urlLogout());
			} else {
				$("header .links-usuario a.destaque")
					.text("Entrar")
					.prop("href", this.urlLogin());
			}
		});
	}

	linkUserMenuMobile() {
		$(document).on("vtex-user-identification", (event, data) => {
			var texto;
			if (data.IsUserDefined) {
				texto = "Ola,";
				texto +=
					"<a href='/account' title=" +
					data.Email +
					"> " +
					this.identificacaoDoUsuario(data) +
					" </a> ";
				texto +=
					"<br>não é você?  <a href=" +
					this.urlLogout() +
					">sair</a>";
			} else {
				texto = "Faça";
				texto += "<a href=" + this.urlLogin() + " > login </a> ou ";
				texto += "<a href=" + this.urlLogin() + ">cadastre-se</a>";
			}
			$(".menu-principal .login .area-login span").html(texto);
		});
	}

	getUSerData() {
		$.getJSON("/no-cache/profileSystem/getProfile").done(function (data) {
			$(document).trigger("vtex-user-identification", data);
		});
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/partials/Menu.js":
/*!**********************************************!*\
  !*** ./src/arquivos/js/app/partials/Menu.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Menu; }
/* harmony export */ });
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class Menu {
	constructor() {
		this.selectors();
		this.events();
	}

	selectors() {
		this.openMenuButton = $('.menu__button');
		this.mainMenu = $('.main-menu');
		this.closeMenuButton = $(".menu-header__close-button");
		this.departmentLink = $(".main-menu__department-link");
		this.returnButton = $(".submenu__return-button");
	}

	events() {
		this.openMenuButton.click(this.openMenu.bind(this));
		this.closeMenuButton.click(this.closeMenu.bind(this));
		this.returnButton.click(this.closeSubmenu.bind(this));

		if (Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__.isSmallerThen991) {
			this.departmentLink.click(this.openSubmenu.bind(this));
		}
	}

	openMenu() {
		this.mainMenu.addClass("is-open");
	}

	closeMenu() {
		this.mainMenu.removeClass("is-open");
	}

	openSubmenu(event) {
		event.preventDefault();

		const link = $(event.target);

		link.parents('.main-menu__department')
		.find(".submenu")
		.addClass("is-open");
	}

	closeSubmenu(event) {
		const button = $(event.target);	
		
		button.parents(".submenu").removeClass("is-open");
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/partials/MenuContents.js":
/*!******************************************************!*\
  !*** ./src/arquivos/js/app/partials/MenuContents.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ MenuContents; }
/* harmony export */ });
/* harmony import */ var Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Helpers/MediasMatch */ "./src/arquivos/js/helpers/MediasMatch.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class MenuContents {
	constructor() {
		if (!Helpers_MediasMatch__WEBPACK_IMPORTED_MODULE_0__.isSmallerThen768) {
			this.getContent();
		}
	}

	getContent() {
		let url = "/Sistema/elementosmenu";

		$.get(url, this.handleContentInsert.bind(this));
	}

	handleContentInsert(data) {
		let $conteudo = $(data);

		$("<div/>", { class: "elementos-menu" }).appendTo(
			".menu-principal .itens >li .container"
		);

		// Implementar futuramente para inserir de acordo com uma config

		// this.insertProduct($conteudo);
		this.insertBanners($conteudo);
	}

	insertProduct($conteudo) {
		let wantedContent = ".produtos-menu";
		let shelfs = $conteudo.find(wantedContent)[0];

		if (shelfs) {
			let categories = $(shelfs).find("h2");

			for (let i = 0; i < categories.length; i++) {
				let categoryName = $(categories[i]).text();

				let productMenuContainer = $(
					'.menu-principal a[title*="' + categoryName + '"]'
				)
					.parent()
					.find(".elementos-menu");

				if (productMenuContainer.length) {
					$(categories[i]).next("ul").appendTo(productMenuContainer);
					$(productMenuContainer).addClass("have-product");
				}
			}
		}
	}

	insertBanners($conteudo) {
		let wantedContent = ".banners-menu";
		let banners = $conteudo.find(wantedContent)[0];

		if (banners) {
			let imgs = $(banners).find("img");

			for (let i = 0; i < imgs.length; i++) {
				let categoryName = $(imgs[i]).attr("alt");

				let bannerMenuContainer = $(
					'.menu-principal a[title*="' + categoryName + '"]'
				)
					.parent()
					.find(".elementos-menu");

				if (bannerMenuContainer.length) {
					$(imgs[i])
						.parents(".box-banner")
						.appendTo(bannerMenuContainer);
					$(bannerMenuContainer).addClass("have-banner");
				}
			}
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/partials/PopUp.js":
/*!***********************************************!*\
  !*** ./src/arquivos/js/app/partials/PopUp.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PopUp; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class PopUp {
	constructor() {
		this.selectors();
		this.events();
		this.getCookies();
	}

	selectors() {
		this.button = $(".pop-up__button");
		this.closePopUpButton = $(".pop-up__button-close");
		this.popUp = $(".pop-up");
		this.sectionPopUp = $(".pop-up-section");
		this.inputName = $(".pop-up__input-nome");
		this.inputEmail = $("pop-up__input-email");
	}

	events() {
		this.button.click(this.getInputValue.bind(this));
		this.closePopUpButton.click(this.closeOfButton.bind(this));
		this.sectionPopUp.click(this.closePopUp.bind(this));
		this.expires = new Date(Date.now() + 604800 * 1000).toUTCString();
	}

	getCookies() {
		if (document.cookie.includes("closePopup")) {
			this.sectionPopUp.addClass("is-close");
		} else {
			document.cookie =
				"closePopup=close; expires=" +
				(this.expires + 604800) +
				";path=/;";
			this.sectionPopUp.addClass("is-open");
		}
	}

	getInputValue(e) {
		e.preventDefault();

		let data = {
			name: document.querySelector(".pop-up__input-nome").value,
			email: document.querySelector(".pop-up__input-email").value,
		};

		this.validator(data);

		const resetInputName = document.querySelector(".pop-up__input-nome");
		const resetInputEmail = document.querySelector(".pop-up__input-email");
		resetInputName.value = "";
		resetInputEmail.value = "";
	}

	closePopUp(event) {
		event.preventDefault();
		const targetButton = $(event.target);
		targetButton.removeClass("is-open");
	}

	closeOfButton() {
		this.sectionPopUp.removeClass("is-open");
	}

	async validator(data) {
		var re = /\S+@\S+\.\S+/;
		var validaEmail = await this.validaEmailRepetido(data.email);
		const errorForm = document.getElementById("message-error-all");

		if (data.name == "" && data.email == "") {
			errorForm.innerHTML = `<span> Preencha os campos faltantes! </span>`;
			this.sleep(5000).then(() => {
				errorForm.innerHTML = ``;
			});
		} else if (data.name.length < 3) {
			const errorFormName = document.getElementById("message-error-nome");
			errorFormName.innerHTML = `<span> Insira um nome válido </span>`;
			this.sleep(5000).then(() => {
				errorFormName.innerHTML = ``;
			});
		} else if (!re.test(data.email)) {
			const errorFormEmail = document.getElementById(
				"message-error-email"
			);
			errorFormEmail.innerHTML = `<span> Insira um email válido </span>`;
			this.sleep(5000).then(() => {
				errorFormEmail.innerHTML = ``;
			});
		} else if (!validaEmail) {
			const sucessForm = document.getElementById("message-sucess-all");
			sucessForm.innerHTML = `
			<span> Email cadastrado com sucesso <i class="sprite sprite-check-icon"></i> </span>`;
			this.sleep(5000).then(() => {
				sucessForm.innerHTML = ``;
			});
			this.cadastraCliente(data.name, data.email);
		} else {
			errorForm.innerHTML = `<span> Email já cadastrado! </span>`;
			this.sleep(5000).then(() => {
				errorForm.innerHTML = ``;
			});
		}
	}

	sleep(time) {
		return new Promise((resolve) => setTimeout(resolve, time));
	}

	async validaEmailRepetido(email) {
		const api = await fetch(
			`/api/dataentities/MA/search?_fields=email&_where=email=${email}`,
			{}
		);
		let emailRepetido = false;
		const responseContent = await api.json();

		if(responseContent.length > 0) {
			emailRepetido = true;
		}
		return emailRepetido;
	}

	cadastraCliente(Nome, Email) {
		let data = {
			name: Nome,
			email: Email,
		};
		fetch("/api/dataentities/MA/documents", {
			method: "POST",
			headers: {
				"content-type": "application/json",
			},
			body: JSON.stringify(data),
		}).then(function (response) {
			console.log("sucess, fez o post", response);
		});
	}
}

/***/ }),

/***/ "./src/arquivos/js/app/partials/Promocao.js":
/*!**************************************************!*\
  !*** ./src/arquivos/js/app/partials/Promocao.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Promocao; }
/* harmony export */ });
class Promocao {
	constructor() {
		var urlAtual = new URL(window.location.href);
		try {
			window.vtexjs.checkout.getOrderForm().then(function (orderForm) {
				var marketingData = {
					utmCampaign: urlAtual.searchParams.get("utm_campaign"),
					utmMedium: urlAtual.searchParams.get("utm_medium"),
					utmSource: urlAtual.searchParams.get("utm_source"),
					utmiCampaign: urlAtual.searchParams.get("utmi_campaign"),
					utmiPart: urlAtual.searchParams.get("utmi_part"),
					utmipage: urlAtual.searchParams.get("utmi_page"),
				};
				// clean data
				for (var i in marketingData) {
					if (marketingData.hasOwnProperty(i)) {
						if (marketingData[i] == null) {
							delete marketingData[i];
						}
					}
				}

				if (Object.keys(marketingData).length === 0) {
					console.info("No marketingData defined");
					return;
				}

				if (orderForm.marketingData !== null) {
					console.info(
						"Replace marketingData :\n",
						orderForm.marketingData,
						"\nFor:\n",
						marketingData
					);
				}

				return window.vtexjs.checkout.sendAttachment(
					"marketingData",
					marketingData
				);
			});
		} catch (error) {
			console.info("Vtexjs não existe nesse ambiente");
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/app/partials/shelf.js":
/*!***********************************************!*\
  !*** ./src/arquivos/js/app/partials/shelf.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Shelf; }
/* harmony export */ });
/* harmony import */ var Config_slick__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! Config/slick */ "./src/arquivos/js/config/slick.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");


class Shelf {
    constructor() {
        this.selectors();
        this.createSlider();
    }

    selectors() {
        this.shelf = $(".shelf ul");
    }

    createSlider() {
        this.shelf.slick(Config_slick__WEBPACK_IMPORTED_MODULE_0__.default.productShelf.defaultShelf);
    }
}

/***/ }),

/***/ "./src/arquivos/js/config/index.js":
/*!*****************************************!*\
  !*** ./src/arquivos/js/config/index.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _loja__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./loja */ "./src/arquivos/js/config/loja.js");
/* harmony import */ var _slick__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./slick */ "./src/arquivos/js/config/slick.js");



/* harmony default export */ __webpack_exports__["default"] = ({ loja: _loja__WEBPACK_IMPORTED_MODULE_0__.default, slick: _slick__WEBPACK_IMPORTED_MODULE_1__.default });


/***/ }),

/***/ "./src/arquivos/js/config/loja.js":
/*!****************************************!*\
  !*** ./src/arquivos/js/config/loja.js ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	NUMERO_DE_PARCELAS: 6,
	PERCENTUAL_DE_DESCONTO: 10,
	accountName: "template",
	entityNewsletter: "CN",
	percentualDeDecontoMinimoParaFlag: 5,
});


/***/ }),

/***/ "./src/arquivos/js/config/slick.js":
/*!*****************************************!*\
  !*** ./src/arquivos/js/config/slick.js ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
	home: {
		desktopMainBanners: {
			dots: true,
			arrows: true,
			pauseOnHover: true,
			autoplay: true,
			autoplaySpeed: 5000,
		},

		mobileMainBanners: {
			dots: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 5000,
		},
	},
	
	general: {
		tipBar: {
			arrows: false,
			dots: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			infinite: true,
			autoplay: true,
			autoplaySpeed: 5000,
			responsive: [
				{
					breakpoint: 1600,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},
				{
					breakpoint: 1500,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
	},
	productShelf: {
		defaultShelf: {
			lazyLoad: "ondemand",
			dots: false,
			arrows: true,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			speed: 500,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 800,
					settings: {
						lazyLoad: "ondemand",
						slidesToShow: 2,
						slidesToScroll: 2,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToShow: 1,
						slidesToScroll: 1,
					},
				},
			],
		},
	},
	institucional: {
		navBar: {
			arrows: false,
			dots: false,
			slidesToScroll: 4,
			slidesToScroll: 4,
			infinite: false,
			variableWidth: true,
			responsive: [
				{
					breakpoint: 768,
					settings: {
						slidesToScroll: 3,
					},
				},
				{
					breakpoint: 576,
					settings: {
						slidesToScroll: 2,
					},
				},
			],
		},
	},
	product: {
		thumbnailImages: {
			lazyLoad: "ondemand",
			dots: false,
			arrows: false,
			infinite: false,
			slidesToShow: 5,
			slidesToScroll: 5,
			speed: 500,
			vertical: true,
			verticalSwiping: true,
			asNavFor: ".product-showcase__main__list",
			focusOnSelect: true,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 4,
					},
				},
			],
		},
		showcaseImages: {
			arrows: true,
			dots: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			infinite: false,
			asNavFor: ".product-showcase__thumbs__list",
			responsive: [
				{
					breakpoint: 768,
					settings: {
						dots: true,
					},
				},
			],
		},
		similars: {
			dots: true,
			arrows: false,
			infinite: true,
			slidesToShow: 4,
			slidesToScroll: 4,
			speed: 500,
			responsive: [
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 3,
					},
				},
			],
		},
	},
});


/***/ }),

/***/ "./src/arquivos/js/helpers/MediasMatch.js":
/*!************************************************!*\
  !*** ./src/arquivos/js/helpers/MediasMatch.js ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isSmallerThen576": function() { return /* binding */ isSmallerThen576; },
/* harmony export */   "isSmallerThen768": function() { return /* binding */ isSmallerThen768; },
/* harmony export */   "isSmallerThen991": function() { return /* binding */ isSmallerThen991; },
/* harmony export */   "isSmallerThen1024": function() { return /* binding */ isSmallerThen1024; }
/* harmony export */ });
const isSmallerThen576 = window.matchMedia("(max-width:576px)").matches;
const isSmallerThen768 = window.matchMedia("(max-width:768px)").matches;
const isSmallerThen991 = window.matchMedia("(max-width:991px)").matches;
const isSmallerThen1024 = window.matchMedia("(max-width:1024px)")
	.matches;


/***/ }),

/***/ "./src/arquivos/js/helpers/gtmCustomEvents.js":
/*!****************************************************!*\
  !*** ./src/arquivos/js/helpers/gtmCustomEvents.js ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "addToCartM3GtmEvent": function() { return /* binding */ addToCartM3GtmEvent; },
/* harmony export */   "productDetailM3GtmEvent": function() { return /* binding */ productDetailM3GtmEvent; },
/* harmony export */   "removeFromCartM3GtmEvent": function() { return /* binding */ removeFromCartM3GtmEvent; }
/* harmony export */ });
let hasDataLayer = true;
if (typeof dataLayer === "undefined") {
	hasDataLayer = false;
}
/**
 * Remover do Carrinho
 */
function addToCartM3GtmEvent() {
	if (hasDataLayer) dataLayer.push({ event: "m3-addToCart" });
}

/**
 * Visualização Virtual de Produto
 */
function productDetailM3GtmEvent() {
	if (hasDataLayer) dataLayer.push({ event: "m3-productDetail" });
}

/**
 * Remover do Carrinho
 */
function removeFromCartM3GtmEvent() {
	if (hasDataLayer) dataLayer.push({ event: "m3-removeFromCart" });
}


/***/ }),

/***/ "./src/arquivos/js/helpers/vtexUtils.js":
/*!**********************************************!*\
  !*** ./src/arquivos/js/helpers/vtexUtils.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "alterarTamanhoImagemSrcVtex": function() { return /* binding */ alterarTamanhoImagemSrcVtex; },
/* harmony export */   "getPrice": function() { return /* binding */ getPrice; },
/* harmony export */   "formatCurrency": function() { return /* binding */ formatCurrency; }
/* harmony export */ });
/**
 * Altera as dimenções especificadas na url da img
 * @param {string} src url da imagem na VTEX
 * @param {int} width
 * @param {int} height
 * @return {string} url da imagem com o tamanho alterado
 */

function alterarTamanhoImagemSrcVtex(src, width, height) {
	if (typeof src == "undefined" || src == null) {
		console.warn("Parametro 'src' não recebido.");

		return;
	}
	width = typeof width == "undefined" ? 1 : width;
	height = typeof height == "undefined" ? width : height;

	src = src.replace(
		/\/(\d+)(-(\d+-\d+)|(_\d+))\//g,
		"/$1-" + width + "-" + height + "/"
	);
	return src;
}

/**
 * Obtem Preco
 * caso o preco recebido seja um Float ou int,
 * 	'Ex.': 10.2 ->'10,20'
 * Recebendo uma string o valor sera retornado como um float
 * 	'Ex.': 'R$1.234,30' -> 1234.3
 * @param  {FloatZstring} price preço
 * @return {[type]}       [description]
 */
function getPrice(price) {
	if (!price) {
		return 0;
	}

	if (isNaN(price)) {
		let newPrice = parseFloat(
			price.replace("R$", "").replace(".", "").replace(",", ".")
		);
		return newPrice;
	} else {
		price = price || 0;
		price = price.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		return price;
	}
}

function formatCurrency(value) {
	return Number(value).toLocaleString("pt-BR", {
		style: "currency",
		currency: "BRL",
	});
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/EventType.js":
/*!*************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/EventType.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ADD_TO_CART": function() { return /* binding */ ADD_TO_CART; },
/* harmony export */   "ADD_SKU_TO_CART_SUCESS": function() { return /* binding */ ADD_SKU_TO_CART_SUCESS; },
/* harmony export */   "ADD_SKU_TO_CART_FAIL": function() { return /* binding */ ADD_SKU_TO_CART_FAIL; },
/* harmony export */   "CHANGE_QTD": function() { return /* binding */ CHANGE_QTD; },
/* harmony export */   "CHANGE_SKU": function() { return /* binding */ CHANGE_SKU; },
/* harmony export */   "ADD_SKU": function() { return /* binding */ ADD_SKU; },
/* harmony export */   "REMOVE_SKU": function() { return /* binding */ REMOVE_SKU; },
/* harmony export */   "SKU_REF": function() { return /* binding */ SKU_REF; }
/* harmony export */ });
const ADD_TO_CART = "add-skuAddCarrinho";
const ADD_SKU_TO_CART_SUCESS = "add-skuAddCarrinho.sucess";
const ADD_SKU_TO_CART_FAIL = "add-skuAddCarrinho.fail";
const CHANGE_QTD = "change-quantidade";
const CHANGE_SKU = "change-sku";
const ADD_SKU = "add-sku";
const REMOVE_SKU = "remove-sku";
const SKU_REF = "sku-referencial";


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js":
/*!**********************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/Modulo.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Modulo; }
/* harmony export */ });
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
class Modulo {
	/**
	 * Modulo de criação de html
	 * preenchendo com JSON
	 * atualizado por eventos js
	 */
	constructor(elemento, store) {
		this.elemento(elemento);
		this.store(store);
	}

	/**
	 * Atualiza os valores no html que foi criado
	 * @return {object} this
	 */
	atualizar() {
		return this;
	}

	store(store) {
		this._store = store;
		return this._store;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @return {object} this
	 */
	desenhar() {
		return this;
	}
	/**
	 * Configura os eventos de atualizacao
	 * @return {object} this
	 */
	configurar(opcoes) {
		this.opcoes($.extend({}, this._opcoes, opcoes));
		return this;
	}
	/**
	 * Get/Set elemento onde sera inserido
	 * @param  {String} seletor seletor em formato css
	 * @return {JqueryElement}
	 */
	elemento(seletor) {
		if (seletor)
			this._elemento = typeof seletor === "string" ? $(seletor) : seletor;
		return this._elemento;
	}
	/**
	 * Get/Set opcoes do modulo
	 * @param  {JSON} opcoes seletor em formato cssopções do modulo
	 * @return {JSON}
	 */
	opcoes(opcoes) {
		if (opcoes) this._opcoes = opcoes;
		return this._opcoes;
	}
	/**
	 * Função para ativar/exibir um modulo
	 * @param {boolean} habilitar
	 */
	habilitar(habilitar) {
		habilitar = typeof habilitar == "undefined" ? true : habilitar;
		if (habilitar == true) {
			this.elemento().removeClass("desativado");
		} else {
			this.elemento().addClass("desativado");
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloAviseMe.js":
/*!*****************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloAviseMe.js ***!
  \*****************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloAviseMe; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloAviseMe extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento = ".avise-me-container:first-child", componentStore) {
		super(elemento, componentStore);
		this.opcoes({
			titulo:
				'Avise-me quando o produto <span id="avise-me-produto-nome"></span> estiver disponível',
			subtitulo: "",
			fechar: "&#215;",
			placeholderNome: "Digite seu nome...",
			placeholderEmail: "Digite seu e-mail...",
			btnSubmit: "Enviar",
			msgSucesso: "Cadastrado com sucesso!",
			msgErro: "Ocorreu algum erro. Tente novamente mais tarde.",
		});
	}

	/**
	 * Configura os eventos js que serão diparados pelo html do desenhar()
	 * @return {object} this
	 */
	configurar(opcoes) {
		super.configurar(opcoes);

		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.SKU_REF, (event, sku) => {
			this.atualizar(sku);
		});
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_SKU, (event, sku) => {
			this.atualizar(sku);
		});
		return this;
	}

	/**
	 * Atualiza a quantidade de acordo com o novo sku
	 * @param  {Event} event evento que disparou atualização
	 * @param  {Object} novoSku objeto do sku selecionado
	 * @return {Object} this
	 */
	atualizar(novoSku) {
		if (!novoSku) {
			novoSku = {
				available: false,
			};
		}
		if ($.isEmptyObject(novoSku)) {
			novoSku = {
				available: true,
			};
		}

		if (!novoSku.available) {
			this.elemento().find("#sku-avise-me").val(novoSku.sku);
			this.elemento().find("#avise-me-produto-nome").val(novoSku.skuname);
		}

		this.elemento().toggle(!novoSku.available);

		return this;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @return {object} this
	 */
	desenhar() {
		if ($(".form-avise-me").length == 0) {
			let _html = `<div class="avise-me-container">
				<fieldset class="form-avise-me">
					<a class="close" >${this.opcoes().fechar}</a>
					<h2> ${this.opcoes().titulo} </h2>
					${this.opcoes().subtitulo ? `<h3> ${this.opcoes().subtitulo} </h3>` : ""}
					<div class="avise-me-wrapper">
						<label >
							<span>${this.opcoes().placeholderNome}</span>
							<input name="notifymeClientName" type="text" id="nome-avise-me"
							placeholder="Ex.: João da silva">
						</label>
						<label >
							<span>${this.opcoes().placeholderEmail}</span>
							<input name="notifymeClientEmail" type="text" id="email-avise-me"
							placeholder="Ex.: joao.da.silva@mail.com">
						</label>
					</div>
					<input name="notifymeIdSku" type="hidden" id="sku-avise-me" class="notifyme-skuid" value="0">
					<input name="notifymeButtonOK" type="button" id="enviar-avise-me" class="btn-enviar" value="${
						this.opcoes().btnSubmit
					}">
					<p class="status"></p>
				</fieldset>
			</div>`;

			var $aviseme = $(_html).appendTo(this.elemento());

			$aviseme.on("click", ".close", () => {
				this.elemento().hide();
			});
			$aviseme.on("click", "#enviar-avise-me", this.enviar.bind(this));
		}
		this.atualizar(this._store.state.selectedSku);
		return this;
	}

	/**
	 * Funçõa que envia registra a solicitação de "avise-me"
	 */
	enviar() {
		var aviseme = this.elemento().find(".form-avise-me");
		if (!this.validar(aviseme)) {
			return false;
		}
		$.ajax({
			type: "POST",
			url: "/no-cache/AviseMe.aspx",
			data: aviseme.serialize(),
			success: function () {
				aviseme
					.find("p.status")
					.html(this.opcoes().msgSucesso)
					.addClass("msgSucesso");
				aviseme.find("input").hide();
				aviseme.find("h3").hide();
			}.bind(this),
			error: function () {
				aviseme
					.find("p.status")
					.html(this.opcoes().msgErro)
					.addClass("msgErro");
			}.bind(this),
		});
	}
	/**
	 * Função para validar os dados do formulário
	 * @param {jQueryElement} aviseme
	 */
	validar(aviseme) {
		var nome = aviseme.find("#nome-avise-me");
		var email = aviseme.find("#email-avise-me");
		var filter = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;
		// if( nome.val() == '' ) {
		// 	alert( 'Por favor, digite seu nome' );
		// 	nome.focus();
		// 	return false;
		// }
		if (!filter.test(email.val())) {
			alert("Por favor, digite o email corretamente");
			email.focus();
			return false;
		}
		return true;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloBotaoDeCompra.js":
/*!***********************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloBotaoDeCompra.js ***!
  \***********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloBotaoDeCompra; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");




/**
 * Modulo de compra
 * permite adicopnar produtos ao carinho
 * fornece o formulario de avise-me para produtos indisponiveis
 * exibe popup de "porduto adicionado ao carrinho"
 *
 * usa api vtex para adicionar no carrinho
 * @link https://github.com/vtex/vtex.js/tree/master/docs/checkout#addtocartitems-expectedorderformsections-saleschannel
 */

class ModuloBotaoDeCompra extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento = ".btnBuy", componentStore) {
		super(elemento, componentStore);

		this.produtoEscolhido = {
			sku: null,
			quantidade: 1,
		};
		this._opcoes = {
			botaoCompra: "Comprar",
			botaoSkuIndisponivel: "Produto indisponível",
			msgVariacaoErro: "<p>Escolha uma variação.</p>",
			msgByEvent: false,
			msgAddCarrinhoErro:
				"<p>Não foi possivel adicionar ao carrinho!</p>",
			msgAddCarrinhoSucesso:
				"<p>Seu produto foi adicionado ao carrinho com sucesso!</p><p>O que deseja fazer agora?</p>",
			botaoContinuarComrpando: "Continuar comprando",
			botaoFinalizarCompra: "Finalizar compra",
			icone: "",
			customBuyBtnEvent: null,
		};
	}

	/**
	 * Atualiza a quantidade de acordo com o novo sku
	 * @param  {Event} event evento que disparou atualização
	 * @param  {Object} value objeto do sku selecionado
	 * @return {Object} this
	 */
	atualizar(event, value) {
		if (event) {
			switch (event) {
				case "change-quantidade":
					this.produtoEscolhido.quantidade = value;
					break;
				case "change-sku":
					this.produtoEscolhido.sku = value;
					this.habilitar(value.available);
					break;
				default:
					console.warn("Evento desconhecido");
					break;
			}
		} else {
			console.warn("Essa funcao só deve ser chamada por eventos js");
		}
		return this;
	}

	obterCannalDeVendas() {
		var name = "VTEXSC=sc=";
		var ca = document.cookie.split(";");
		for (var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == " ") c = c.substring(1);
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return 1;
	}

	/**
	 * Configura os eventos js que serão diparados pelo html do desenhar()
	 * @return {object} this
	 */
	configurar(opcoes) {
		this.opcoes($.extend({}, this._opcoes, opcoes));
		this.opcoes.cannalDeVendas = this.obterCannalDeVendas();

		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_SKU, this.atualizar.bind(this));
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_QTD, this.atualizar.bind(this));
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_TO_CART, this.addToCart.bind(this));
		this._store.events.subscribe(
			_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_SKU_TO_CART_SUCESS,
			this.sucessoAjax.bind(this)
		);
		this._store.events.subscribe(
			_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_SKU_TO_CART_FAIL,
			this.erroAjax.bind(this)
		);

		return this;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @return {object} this
	 */
	desenhar() {
		const html = `
			<a class="btn-compra" id="buy-btn">
				${this.opcoes().botaoCompra}
			</a>
		`;

		this.elemento().append(html);
		this.elemento().find(".btn-compra").click(this.compra.bind(this));

		return this;
	}

	compra() {
		if (this.produtoEscolhido.sku === null) {
			this._mensagemErro(this.opcoes().msgVariacaoErro);
		} else if (
			!this.produtoEscolhido.sku.available &&
			this.produtoEscolhido.quantidade < 1
		) {
			this._mensagemErro(this.opcoes().botaoSkuIndisponivel);
		} else if (this.opcoes().customBuyBtnEvent !== null) {
			this.opcoes().customBuyBtnEvent();
		} else {
			this.addToCart();
		}
	}

	addToCart() {
		return new Promise((resolve, reject) => {
			try {
				window.vtexjs.checkout
					.addToCart(
						[
							{
								id: this.produtoEscolhido.sku.sku,
								quantity: this.produtoEscolhido.quantidade,
								seller: this.produtoEscolhido.sku.sellerId,
							},
						],
						null,
						this.opcoes().cannalDeVendas
					)
					.done((orderForm) => {
						this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_SKU_TO_CART_SUCESS, {
							simpleProducts: this.produtoEscolhido,
							orderForm: orderForm,
						});

						resolve(orderForm);
					})
					.fail(() => {
						this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_SKU_TO_CART_FAIL, {
							simpleProducts: this.produtoEscolhido,
							msg: this.opcoes().msgAddCarrinhoErro,
						});
						reject(this.opcoes().msgAddCarrinhoErro);
					});
			} catch (error) {
				this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.ADD_SKU_TO_CART_FAIL, {
					simpleProducts: this.produtoEscolhido,
					msg: this.opcoes().msgAddCarrinhoErro,
				});
				console.warn("Erro ao adicionar sku ao carrinho de compra");
				console.log(error);
			}
		});
	}

	sucessoAjax(items) {
		dataLayer.push({ event: "m3-addToCart" });

		if (!this._opcoes.msgByEvent) {
			let _html = `<div class="modal-add-cart modal">
				<div class="modal-add-cart__overlay"></div>
				<div class="modal-add-cart__box">
					<button class="close">
						<span> fechar </span>
						<i class="sprite sprite-fechar"></i>
					</button>
					<div class="information">
						<div class="descricao">Adicionado à <strong>Sacola</strong> </div>
						<div class="list">
							<div class="item">
								<img src="${this.produtoEscolhido.sku.image}"
									alt="${this.produtoEscolhido.sku.skuname}">
								<span class="nome">${this.produtoEscolhido.sku.skuname}</span>
							</div>
						</div>
					</div>
					<div class="acoes">
						<a href="#" class="continue">Continuar</a>
						<a href="/checkout/#/cart" class="cart" target="_top">Finalizar compra</a>
					</div>
				</div>
			</div>`;

			let $popup = $(_html);

			this.elemento().find(".erro-add-cart").fadeOut("slow");
			// $popup.hide().appendTo(this.elemento()).fadeIn('slow');
			$popup.appendTo(this.elemento());
			$popup.addClass("show");
			$popup.on(
				"click",
				".modal-add-cart__overlay,.continue,.close",
				(event) => {
					event.preventDefault();
					$popup.removeClass("show");
					$popup.remove();
				}
			);
		}
	}

	/**
	 * Altera o texto do botão para produtos indisponiveis
	 * @param {boolean} habilitar
	 */
	erroAjax(e, { msg }) {
		console.log(msg);
		this._mensagemErro(msg);
		// this.opcoes().msgAddCarrinhoErro
	}

	habilitar(habilitar) {
		habilitar = typeof habilitar == "undefined" ? true : habilitar;
		this.elemento().toggleClass("desativado", !habilitar);
		var textBtn = habilitar
			? this.opcoes().icone + this.opcoes().botaoCompra
			: this.opcoes().botaoSkuIndisponivel;
		this.elemento().find(".btn-compra").html(textBtn);
	}

	_mensagemErro(mensagemDeErro) {
		if (this.elemento().find(".erro-add-cart").length < 1) {
			let _html = `<div class="erro-add-cart">
				<span class="close"></span>
				<div class="info">${mensagemDeErro}</div>
			</div>`;

			var container = $(_html).prependTo(this.elemento());
			container.on("click", ".close", (event) => {
				event.preventDefault();
				container.fadeOut("slow");
			});
		} else {
			this.elemento().find(".erro-add-cart").fadeIn("slow");
		}
		setTimeout(
			function () {
				this.elemento().find(".erro-add-cart").fadeOut("slow");
				setTimeout(() => {
					this.elemento().find(".erro-add-cart").remove();
				}, 400);
			}.bind(this),
			20000
		);

		this.elemento().find(".modal-add-cart").remove();
		this.elemento().find(".modal-add-cart__overlay").remove();
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloCompreJunto.js":
/*!*********************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloCompreJunto.js ***!
  \*********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloCompreJunto; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/**
 * Modulo de quantidade
 * Permite escolher a quantidade de um sku
 */
class ModuloCompreJunto extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento = ".compre-junto", store) {
		super(elemento, store);
		this.opcoes({
			titulo: "Compre junto",
		});
	}

	/**
	 * Configura os eventos js que serão diparados pelo html do desenhar()
	 * @return {object} this
	 */
	configurar(opcoes) {
		this.opcoes($.extend({}, this._opcoes, opcoes));
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_2__.CHANGE_SKU, this.atualizar.bind(this));
		return this;
	}
	/**
	 * Atualiza a quantidade de acordo com o novo sku
	 * @param  {Event} event evento que disparou atualização
	 * @param  {Object} novoSku objeto do sku selecionado
	 * @return {Object} this
	 */
	atualizar(event) {
		var novoSku = JSON.parse(sessionStorage.getItem("sku-selecionado"));
		if (!novoSku) {
			novoSku = {
				available: false,
			};
		}
		if (novoSku.available) {
			var tabelaAtual = this.elemento().find(".produto-" + novoSku.sku);
			if (tabelaAtual.length != 0) {
				this.habilitar(true);
				this.elemento()
					.find(".produtos>div")
					.slideUp(
						600,
						function () {
							tabelaAtual.slideDown(600);
							this.elemento().trigger(
								"change-compre-junto",
								tabelaAtual
							);
						}.bind(this)
					);
			} else {
				this.buscarCompreJunto(novoSku.sku);
			}
		} else {
			this.habilitar(false);
		}
	}
	/**
	 * Cria e insere o html com as variações dos skus
	 * @return {object} this
	 */
	desenhar() {
		this.elemento().addClass("desativado");
		$("<h2 />", {
			class: "special-title",
			text: this.opcoes().titulo,
		}).appendTo(this.elemento());
		$("<div />", {
			class: "produtos",
		}).appendTo(this.elemento());
		return this;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * Funçõa que busca os produtos disponiveis para
	 * comprar junto com o produto = skuid
	 * @param  skuId
	 */
	buscarCompreJunto(skuId) {
		function sucesso(htmlCJVtex, textStatus, jqXHR) {
			if (htmlCJVtex.trim().length > 1) {
				var containerCompreJunto, imagens, $produtos;
				containerCompreJunto = $("<div />", {
					class: "produto-" + skuId,
					html: htmlCJVtex,
				});
				$produtos = this.elemento().find(".produtos");
				$produtos.children().slideUp(600);
				$produtos.append(containerCompreJunto);
				this.habilitar(!0);
				imagens = $(
					".moduloCompreJunto .itemA img, .moduloCompreJunto .itemB img"
				);
				for (var i = 0; i < imagens.length; i++) {
					imagens[i].setAttribute(
						"src",
						(0,_util__WEBPACK_IMPORTED_MODULE_1__.alterarTamanhoImagemSrcVtex)(imagens[i].src, 265, 403)
					);
				}
				this.elemento().trigger(
					"change-compre-junto",
					containerCompreJunto
				);
			}
		}
		function erro(jqXHR, textStatus, errorThrown) {
			console.warn(errorThrown);
			this.habilitar(false);
		}
		var jqXHR = $.get("/comprejuntosku/" + skuId);
		jqXHR.done(sucesso.bind(this)).fail(erro.bind(this));
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloPreco.js":
/*!***************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloPreco.js ***!
  \***************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloPreco; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _SubModulos_ModuloPrecoDe__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoDe */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoDe.js");
/* harmony import */ var _SubModulos_ModuloPrecoPor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoPor */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoPor.js");
/* harmony import */ var _SubModulos_ModuloPrecoParcelado__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoParcelado */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoParcelado.js");
/* harmony import */ var _SubModulos_ModuloPrecoBoleto__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoBoleto */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoBoleto.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");








/**
 * modulo preco
 * Mantem o preço de exibição atualizado
 */
class ModuloPreco extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento = ".preco-produto", store) {
		super(elemento, store);
		this.opcoes({
			precoDe: {
				ativo: true,
			},
			precoPor: {
				ativo: true,
			},
			parcelado: {
				auto: false,
				ativo: false,
				parcelas: 6,
			},
			boleto: {
				ativo: true,
				percentual: 5,
			},
		});
		this.precos = [];
	}

	/**
	 * Configura os eventos js que serão diparados pelo html do desenhar()
	 * @return {object} this
	 */
	configurar(opcoes) {
		this.opcoes($.extend({}, this._opcoes, opcoes));

		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_5__.SKU_REF, (event, sku) => {
			this.atualizar(sku);
		});
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_5__.CHANGE_SKU, (event, sku) => {
			this.atualizar(sku);
		});

		return this;
	}
	/**
	 * Cria e insere o html com as formas de pagamento
	 * @return {object} this
	 */
	desenhar() {
		var container = $("<div />", {
			class: "container-precos",
			css: "display:none",
		}).appendTo(this.elemento());
		if (this.opcoes().precoDe.ativo) {
			var moduloPrecoDe = new _SubModulos_ModuloPrecoDe__WEBPACK_IMPORTED_MODULE_1__.default();
			moduloPrecoDe.configurar(this.opcoes().precoDe);
			this.elemento().append(moduloPrecoDe.desenhar());
			this.precos.push(moduloPrecoDe);
		}
		if (this.opcoes().precoPor.ativo) {
			var moduloPrecoPor = new _SubModulos_ModuloPrecoPor__WEBPACK_IMPORTED_MODULE_2__.default();
			moduloPrecoPor.configurar(this.opcoes().precoPor);
			this.elemento().append(moduloPrecoPor.desenhar());
			this.precos.push(moduloPrecoPor);
		}
		if (this.opcoes().parcelado.ativo) {
			var moduloPrecoParcelado = new _SubModulos_ModuloPrecoParcelado__WEBPACK_IMPORTED_MODULE_3__.default();
			moduloPrecoParcelado.configurar(this.opcoes().parcelado);
			this.elemento().append(moduloPrecoParcelado.desenhar());
			this.precos.push(moduloPrecoParcelado);
		}
		if (this.opcoes().boleto.ativo) {
			var moduloPrecoBoleto = new _SubModulos_ModuloPrecoBoleto__WEBPACK_IMPORTED_MODULE_4__.default();
			moduloPrecoBoleto.configurar(this.opcoes().boleto);
			this.elemento().append(moduloPrecoBoleto.desenhar());
			this.precos.push(moduloPrecoBoleto);
		}
		return this;
	}
	/**
	 * Atualiza os precos de acordo com o novo sku
	 * @param  {Event} event evento que disparou atualização
	 * @param  {Object} novoSku objeto do sku selecionado
	 * @return {Object} this
	 */
	atualizar(novoSku) {
		if (!novoSku) {
			novoSku = {
				available: false,
			};
		}
		if (novoSku.available) {
			for (var tiposPreco in this.precos) {
				if (this.precos.hasOwnProperty(tiposPreco)) {
					this.precos[tiposPreco].atualizar(novoSku);
				}
			}
			this.elemento().css("display", "block");
		} else {
			this.elemento().css("display", "none");
		}
		return this;
	}
	/**
	 * Get/Set configuraçoes de tipos de precos
	 * @param  {Object} tipo um objeto contendo informações das formas de pagamento
	 * @return {Object} 	objeto de configuracao
	 */
	tiposPreco(tipo) {
		if (tipo) {
			this._tiposPreco = $.extend({}, this._tiposPreco, tipo);
		}
		return this._tiposPreco;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloQuantidade.js":
/*!********************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloQuantidade.js ***!
  \********************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloQuantidade; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
 function _optionalChain(ops) { let lastAccessLHS = undefined; let value = ops[0]; let i = 1; while (i < ops.length) { const op = ops[i]; const fn = ops[i + 1]; i += 2; if ((op === 'optionalAccess' || op === 'optionalCall') && value == null) { return undefined; } if (op === 'access' || op === 'optionalAccess') { lastAccessLHS = value; value = fn(value); } else if (op === 'call' || op === 'optionalCall') { value = fn((...args) => value.call(lastAccessLHS, ...args)); lastAccessLHS = undefined; } } return value; }

/**
 * Modulo de quantidade
 * Permite escolher a quantidade de um sku
 */
class ModuloQuantidade extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento = ".avise-me-container:first-child", store) {
		super(elemento, store);
		this.opcoes({
			maxEstoque: 50,
		});
	}

	/**
	 * Configura os eventos js que serão diparados pelo html do desenhar()
	 * @return {object} this
	 */
	configurar(opcoes) {
		super.configurar(opcoes);

		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.SKU_REF, (event, sku) => {
			this.atualizar(sku);
		});
		this._store.events.subscribe(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_SKU, (event, sku) => {
			this.atualizar(sku);
		});
		return this;
	}

	/**
	 * Atualiza a quantidade de acordo com o novo sku
	 * @param  {Event} event evento que disparou atualização
	 * @param  {Object} novoSku objeto do sku selecionado
	 * @return {Object} this
	 */
	atualizar(novoSku) {
		if (_optionalChain([novoSku, 'optionalAccess', _ => _.available]) === true) {
			var estoque,
				skuId = novoSku.sku;
			try {
				estoque = window.dataLayer[0].skuStocks[skuId];
			} catch (e) {
				console.warn(
					"Erro ao buscar estoque no dataLayer, usado o availablequantity"
				);
				estoque = novoSku.availablequantity;
			}
			estoque =
				estoque > this.opcoes().maxEstoque
					? this.opcoes().maxEstoque
					: estoque;

			this.moduloExibicao().atualizar(estoque);
			this.elemento().removeClass("desativado");
		} else {
			this.moduloExibicao().atualizar(0);
			this.elemento().addClass("desativado");
		}
		return this;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @return {object} this
	 */
	desenhar() {
		if (this.moduloExibicao()) {
			this.moduloExibicao().elemento(this.elemento());
			this.moduloExibicao().desenhar();
		} else {
			console.warn("Modulo de exibição não definido");
		}
		return this;
	}
	/**
	 * Get/Set moduloExibicao do modulo
	 * @param  {JSON} moduloExibicao seletor em formato cssopções do modulo
	 * @return {JSON}
	 */
	moduloExibicao(moduloExibicao) {
		if (moduloExibicao) this._moduloExibicao = moduloExibicao;
		return this._moduloExibicao;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/ModuloSkus.js":
/*!**************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/ModuloSkus.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloSkus; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");



class ModuloSkus extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(skuJson, elemento = ".skuSelection", componentStore) {
		super(elemento, componentStore);
		sessionStorage.removeItem("sku-selecionado");
		this._skuJson = skuJson;
	}

	/**
	 * Atualiza os valores no html que foi criado
	 * @return {object} this
	 */
	atualizar() {
		this.desenhar();
		return this;
	}

	/**
	 * Escolhe os primeiros skus de cada variação
	 * @return {object} this
	 */
	setDefauls() {
		return this;
	}

	escolherSku(sku) {
		if (sku) {
			this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_SKU, sku);
			this._store.commit("setSelectedSku", sku);
		} else {
			console.warn("Não conseguimos identificar o sku correspondente");
			// console.warn(especificacoesDoSku);
		}
	}

	escolherSkuReferencia(sku) {
		if (typeof this._skuReferencial === "undefined") {
			this._skuReferencial = sku;
			/**
			 * para capturar o evento
			 * $(document).on( 'change-sku' , function(event, novoSku){} );
			 */

			sessionStorage.setItem("sku-referencial", JSON.stringify(sku));
			this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.SKU_REF, sku);
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloBtnQtd.js":
/*!***************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloBtnQtd.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloBtnQtd; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloBtnQtd extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);
		this.elemento(".qtd-selector");
		this.store(componentStore);
		this._opcoes = {
			titulo: "Quantidade:",
			opcaoIndisponivel: "Indisponível",
			max: "1",
			min: "1",
			default: "1",
		};

		this._store.commit("setQtd", this._opcoes.default);
	}

	desenhar() {
		let _html = `<div class="quantidade">
			<span class="titulo">${this.opcoes().titulo}</span>
			<div class="campo-qtd">
				<button class="remove-from-cart" aria-label="Remover item">-</button>
				<label class="container-qtd">
					<input class="qtd-value" aria-label="Número de itens" type="number"
						data-min="${this.opcoes().min}" data-max="${this.opcoes().max}"
						value="${this._store.state.qtd}" />
				</label>
				<button class="add-to-cart" aria-label="Adicionar item">+</button>
			</div>
		</div>`;

		var $quantidade = $(_html);
		$quantidade
			.on("click", ".remove-from-cart", this.decrementBtn.bind(this))
			.on("click", ".add-to-cart", this.incrementBtn.bind(this));

		$quantidade.appendTo(this.elemento());
		this.inputChange();

		return this;
	}

	atualizar(novoEstoque) {
		this.opcoes().max = novoEstoque;

		this.elemento().find(".qtd-value").trigger("change");

		if (novoEstoque > 0) {
			this.habilitar(true);
		}

		return this;
	}

	onChange(input) {
		var $inputQuantidade = input;
		//obtem os valores de quantidade selecionada e quantidade maxima
		var min = this.opcoes().min;
		var max = this.opcoes().max;

		var qtd = parseInt($inputQuantidade.val());

		if (qtd < min || isNaN(qtd)) {
			this.notificarValor("Minimo: " + min);
			qtd = min;
		} else if (qtd > max) {
			this.notificarValor("Maximo: " + max);
			qtd = max;
		}

		//atualiza todos os skus
		$(".quantidade .qtd-value").val(qtd);

		this._store.commit("setQtd", qtd);
		this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_QTD, qtd);
		return this;
	}

	inputChange() {
		this.elemento()
			.find("input[class='qtd-value']")
			.on("focusout", (e) => {
				this.onChange.call(this, $(e.target));
			});
	}

	incrementBtn() {
		var qtd = this.elemento()
			.find(".quantidade .container-qtd")
			.find(".qtd-value");
		if ($.isNumeric(qtd.val())) {
			var valueQtd = parseInt(qtd.val());
			valueQtd += 1;
			qtd.val(valueQtd);
		} else {
			qtd.val(1);
		}
		this.onChange.call(this, qtd);
	}

	decrementBtn() {
		var qtd = this.elemento()
			.find(".quantidade .container-qtd")
			.find(".qtd-value");
		if ($.isNumeric(qtd.val())) {
			var valueQtd = parseInt(qtd.val());
			if (valueQtd > 1) {
				valueQtd -= 1;
				qtd.val(valueQtd);
			}
		} else {
			qtd.val(1);
		}

		this.onChange.call(this, qtd);
	}

	notificarValor(msg) {
		var notificacao = this.elemento().find(".notificacao");
		if (!notificacao.length) {
			notificacao = $("<div />", {
				class: "notificacao",
			}).appendTo(this.elemento().find(".container-qtd"));
		}
		notificacao.empty().text(msg).fadeIn("slow");
		setTimeout(
			function () {
				notificacao.fadeOut("slow");
			}.bind(this),
			4000
		);
		return this;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoBoleto.js":
/*!********************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoBoleto.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloPrecoBoleto; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloPrecoBoleto extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);
		this.opcoes({
			ativo: true,
		});
	}

	desenhar() {
		let _html = `<div class="preco-boleto">
			<strong class="value"></strong>
			<span> no boleto
				<span class="container-percentual">
				<span class="percentual">%</span>
				OFF</span>
			</span>
		</div>`;

		var valorBoleto = $(_html);

		this.elemento(valorBoleto);
		return valorBoleto;
	}

	atualizar(novoSku) {
		var precoPrincipal = novoSku.bestPrice / 100;
		var precoBoleto =
			precoPrincipal - (precoPrincipal * this.percentual()) / 100;
		var valorBoleto = this.elemento();
		if (this.opcoes().ativo) {
			valorBoleto.find(".percentual").text(this.percentual() + "%");
			valorBoleto.find(".value").text("R$ " + (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPrice)(precoBoleto));
			valorBoleto.css("display", "block");
		} else {
			valorBoleto.css("display", "none");
		}
	}
	percentual(percentual) {
		if (percentual) this._opcoes.percentual = percentual;
		return this._opcoes.percentual || 0;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoDe.js":
/*!****************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoDe.js ***!
  \****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloPrecoDe; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloPrecoDe extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);
		this.opcoes({
			ativo: true,
		});
	}

	desenhar() {
		let _html = `<div class="valor-de">
			<strong class="value"></strong>
		</div>`;
		var valorDe = $(_html);

		this.elemento(valorDe);
		return valorDe;
	}

	atualizar(novoSku) {
		var precoDe = novoSku.listPrice / 100,
			precoPor = novoSku.bestPrice / 100;

		var valorDe = this.elemento();
		if (this.opcoes().ativo) {
			if (precoDe > precoPor) {
				valorDe.find(".value").text("R$ " + (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPrice)(precoDe));
				valorDe.css("display", "block");
			} else {
				valorDe.css("display", "none");
			}
		} else {
			valorDe.css("display", "none");
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoParcelado.js":
/*!***********************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoParcelado.js ***!
  \***********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloPrecoParcelado; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloPrecoParcelado extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);

		this.opcoes({
			auto: false,
			ativo: false,
			parcelas: 5,
		});
		this.numeroParcelas(this.opcoes().parcelas);
	}

	desenhar() {
		let _html = `<div class="valor-dividido" >
			<span>ou <strong class="numero-de-parcelas"></strong> de </span>
			<strong class="value"></strong>
			<span> sem juros</span>
		</div>`;
		var valorParcelado = $(_html);

		this.elemento(valorParcelado);
		return valorParcelado;
	}

	atualizar(novoSku) {
		if (this.opcoes().auto) {
			this.numeroParcelas(parseInt(novoSku.installments));
		}
		var precoPrincipal = novoSku.bestPrice / 100;
		var precoDivido = precoPrincipal / this.numeroParcelas();
		var valorDividido = this.elemento();
		if (this.opcoes().ativo && this.numeroParcelas() > 1) {
			valorDividido
				.find(".numero-de-parcelas")
				.text(this.numeroParcelas() + "x");
			valorDividido.find(".value").text("R$ " + (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPrice)(precoDivido));
			valorDividido.css("display", "block");
		} else {
			valorDividido.css("display", "none");
		}
	}

	numeroParcelas(numeroParcelas) {
		if (numeroParcelas) {
			this.opcoes().parcelas = numeroParcelas;
		}
		return this.opcoes().parcelas;
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoPor.js":
/*!*****************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoPor.js ***!
  \*****************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloPrecoPor; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloPrecoPor extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);
		this.opcoes({
			ativo: true,
		});
	}

	desenhar() {
		let _html = `<div class="valor-por">
			<strong class="value"></strong>
		</div>`;
		var valorPor = $(_html);

		this.elemento(valorPor);
		return valorPor;
	}

	atualizar(novoSku) {
		var valorPor = this.elemento();
		if (this.opcoes().ativo) {
			var precoPor = novoSku.bestPrice / 100;
			if (precoPor) {
				valorPor.find(".value").text("R$ " + (0,_util__WEBPACK_IMPORTED_MODULE_1__.getPrice)(precoPor));
				valorPor.css("display", "block");
			} else {
				valorPor.css("display", "none");
			}
		} else {
			valorPor.css("display", "none");
		}
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSelect.js":
/*!***************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSelect.js ***!
  \***************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloSelect; }
/* harmony export */ });
/* harmony import */ var _Modulo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Modulo */ "./src/arquivos/js/lib/ComponentesProduto/Modulo.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



class ModuloSelect extends _Modulo__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(elemento, componentStore) {
		super(elemento, componentStore);
		this.elemento(".qtd-selector");
		this._opcoes = {
			titulo: "Quantidade",
			opcaoDefault: "Selecione",
			opcaoIndisponivel: "Indisponivel",
		};
	}

	desenhar() {
		let _html = `<div class="qtd-selector">
			<span class="titulo">${this.opcoes().titulo}:</span>
			<span class="wrap-select">
				<select class="quantidade"></select>
			</span>
		</div>`;
		var selectQuantidade = $(_html);
		selectQuantidade.on(
			"change",
			"select.quantidade",
			this.onChange.bind(this)
		);
		selectQuantidade.appendTo(this.elemento());
		return this;
	}

	atualizar(novoEstoque) {
		var opcoes;
		if (novoEstoque > 0) {
			opcoes =
				'<option value="0" disabled >' +
				this.opcoes().opcaoDefault +
				"</option>";
			for (var i = 1; i < novoEstoque; i++) {
				opcoes += '<option value="' + i + '">' + i + "</option>";
			}
			this.elemento().removeClass("desabilitado");
		} else {
			opcoes =
				'<option value="0" disabled selected >' +
				this.opcoes().opcaoIndisponivel +
				"</option>";
			this.elemento().addClass("desabilitado");
		}
		this.elemento().find(".quantidade").html(opcoes);
	}

	onChange() {
		var quantidade = this.elemento().find(".quantidade").val();

		this._store.events.publish(_EventType__WEBPACK_IMPORTED_MODULE_1__.CHANGE_QTD, quantidade);
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorEspecificacoes.js":
/*!******************************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorEspecificacoes.js ***!
  \******************************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloSkusPorEspecificacoes; }
/* harmony export */ });
/* harmony import */ var _ModuloSkus__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ModuloSkus */ "./src/arquivos/js/lib/ComponentesProduto/ModuloSkus.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/**
 * modulo de seleção dos skus
 * Permite escolher o Sku desejado
 */
class ModuloSkusPorEspecificacoes extends _ModuloSkus__WEBPACK_IMPORTED_MODULE_0__.default {
	constructor(skuJson, elemento, componentStore) {
		super(skuJson, elemento, componentStore);
		sessionStorage.removeItem("sku-selecionado");

		this.opcoes({
			especificacaoComImagem: "",
		});

		this.prefix = {
			cor: "",
			tamanho: "",
		};
	}

	/**
	 * Escolhe os primeiros skus de cada variação
	 * @return {object} this
	 */
	setDefauls(hasSetDefauls) {
		let bestSku = this._getBestSku();
		this.escolherSkuReferencia(bestSku);

		// if(this._skuJson.skus.length === 1){
		if (hasSetDefauls) {
			// forçar escolha do unico sku
			for (const especificacao in bestSku.dimensions) {
				if (bestSku.dimensions.hasOwnProperty(especificacao)) {
					const valorEspecificacao =
						bestSku.dimensions[especificacao];
					let $especificacao = this._producraInputNtmlParaEspecificacao(
						especificacao,
						valorEspecificacao
					);
					$especificacao.prop("checked", true);
				}
			}
			this.escolherSku(bestSku);
		}
		// }

		return this;
	}

	/* Prefixa o nome da especificação de acordo com a dimensão passada */
	prefixDimensionName(dimension) {
		var value = dimension.toLowerCase();

		if (this.prefix[value]) {
			return `${this.prefix[value]} ${value}`;
		} else {
			return `${dimension}`;
		}
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @param  {Object} mapaEspecificacoes Mapa das especificações do produto
	 * @return {object} this
	 */
	desenhar() {
		if (
			!this._skuJson.dimensionsMap ||
			this._skuJson.dimensionsMap.length === 0
		) {
			console.warn("Erro! para de especificações não identificado.");
			return this;
		}

		for (var indice in this._skuJson.dimensions) {
			if (this._skuJson.dimensions.hasOwnProperty(indice)) {
				let nomeEspecificacao = this._skuJson.dimensions[indice];
				let values = this._skuJson.dimensionsMap[nomeEspecificacao];
				let isSingleOption = values.length < 2;

				var nameCampo = (0,_util__WEBPACK_IMPORTED_MODULE_1__.textoParaNomeCss)(
					`${this.elemento().selector}_${nomeEspecificacao}_${indice}`
				);

				let _html = `
				<div class="especificacao ${(0,_util__WEBPACK_IMPORTED_MODULE_1__.textoParaNomeCss)(nomeEspecificacao)} ${
					!isSingleOption ? "multi-option" : "single-option"
				}"
					data-especificacao="${(0,_util__WEBPACK_IMPORTED_MODULE_1__.textoParaNomeCss)(nomeEspecificacao)}">

					<div class="titulo" >${this.prefixDimensionName(nomeEspecificacao)}:</div>
					<ul class="skus">${values
						.map((item, i) => {
							let disponivilidade = "";
							var idText = (0,_util__WEBPACK_IMPORTED_MODULE_1__.textoParaNomeCss)(
								`${
									this.elemento().selector
								}_${nomeEspecificacao}_${item}_${indice}`
							);

							// adiciona informação de disponibilidade
							try {
								let sku = this._getSkuPorEspecificacoes({
									[nomeEspecificacao]: item,
								});
								if (typeof sku !== "undefined")
									disponivilidade = sku.available
										? "disponivel"
										: "indisponivel";
							} catch (error) {
								console.info(error);
							}

							return `<li class="sku">
								<input data-especificacao="${item}"
									data-especificacao-title="${nomeEspecificacao}"
									id="${idText}"  type="radio" value="${item}"
									name="${nameCampo}"
									${isSingleOption ? "checked" : ""}>
								${(() => {
									if (
										nomeEspecificacao ===
										this._opcoes.especificacaoComImagem
									) {
										let src = _obtemImagemParaEspecificacao(
											nomeEspecificacao,
											item
										);

										return `<label for="${idText}" class="${disponivilidade} with-image">
											<img src="${(0,_util__WEBPACK_IMPORTED_MODULE_1__.alterarTamanhoImagemSrcVtex)(
												src,
												72,
												100
											)}" title="${nomeEspecificacao}: ${item}" />
										</label>`;
									} else {
										return `<label for="${idText}" class="${disponivilidade}">${item}</label>`;
									}
								})()}
							</li>`;
						})
						.join("")}</ul>
				</div>`;

				$(_html).appendTo(this.elemento());
			}
		}
		this._events();

		return this;
	}

	_events() {
		this.elemento()
			.find(".especificacao input")
			.on("change", () => {
				var especificacoesDoSku = {},
					sku;
				var nomeEspecificacao = "";
				this.elemento()
					.find(".especificacao input:checked")
					.each(function () {
						nomeEspecificacao = this.getAttribute(
							"data-especificacao-title"
						);
						especificacoesDoSku[
							nomeEspecificacao
						] = this.getAttribute("data-especificacao");
					});
				sku = this._getSkuPorEspecificacoes(especificacoesDoSku);
				this.escolherSku(sku);
			});
	}

	_getSkuPorEspecificacoes(especificacoes) {
		return this._skuJson.skus.find((sku) => {
			return this._isEquivalent(sku.dimensions, especificacoes);
		});
	}

	/**
	 * @link http://adripofjavascript.com/blog/drips/object-equality-in-javascript.html
	 */
	_isEquivalent(a, b) {
		var aProps = Object.getOwnPropertyNames(a);
		var bProps = Object.getOwnPropertyNames(b);
		if (aProps.length != bProps.length) {
			return false;
		}
		for (var i = 0; i < aProps.length; i++) {
			var propName = aProps[i];
			if (a[propName] !== b[propName]) {
				return false;
			}
		}
		return true;
	}

	_getBestSku() {
		var bestSku;
		for (const i in this._skuJson.skus) {
			if (this._skuJson.skus.hasOwnProperty(i)) {
				const sku = this._skuJson.skus[i];
				if (sku.available) {
					bestSku = sku;
					break;
				}
			}
		}
		if (typeof bestSku === "undefined") {
			bestSku = this._skuJson.skus[0];
		}
		return bestSku;
	}

	_producraInputNtmlParaEspecificacao(especificacao, valor) {
		especificacao = (0,_util__WEBPACK_IMPORTED_MODULE_1__.textoParaNomeCss)(especificacao);
		let $lista = this.elemento().find(
			'.especificacao[data-especificacao="' + especificacao + '"]'
		);
		return $lista.find('li input[data-especificacao="' + valor + '"]');
	}

	_obtemImagemParaEspecificacao(especificacao, valor) {
		for (const i in this._skuJson.skus) {
			if (this._skuJson.skus.hasOwnProperty(i)) {
				const sku = this._skuJson.skus[i];

				for (const tituloEspecificacao in sku.dimensions) {
					if (sku.dimensions.hasOwnProperty(tituloEspecificacao)) {
						if (tituloEspecificacao === especificacao) {
							if (sku.dimensions[tituloEspecificacao] === valor) {
								var urlSku = "/produto/sku/" + sku.sku;
								let skuData;
								var jqXHR = $.ajax({
									url: urlSku,
									type: "GET",
									success: function (value) {
										const images = value[0].Images;
										const thumbsCor =
											images[images.length - 1];
										skuData =
											thumbsCor[thumbsCor.length - 1]
												.Path;
									},
									async: false,
								});

								if (skuData) {
									return skuData;
								}
								return sku.image;
							}
						}
					}
				}
			}
		}
		return "";
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorNome.js":
/*!********************************************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorNome.js ***!
  \********************************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ModuloSkusPorNome; }
/* harmony export */ });
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ModuloSkus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ModuloSkus */ "./src/arquivos/js/lib/ComponentesProduto/ModuloSkus.js");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./src/arquivos/js/lib/ComponentesProduto/util.js");
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");



/**
 * modulo de seleção dos skus
 * Permite escolher o Sku desejado
 */

class ModuloSkusPorNome extends _ModuloSkus__WEBPACK_IMPORTED_MODULE_1__.default {
	constructor(skuJson, elemento, store) {
		super(skuJson, elemento, store);

		sessionStorage.removeItem("sku-selecionado");

		this.opcoes({
			whithImage: true,
			title: "Escolha uma opção",
			imageWidth: 55,
			imageHeight: 65,
		});
	}

	/**
	 * Escolhe os primeiros skus de cada variação
	 * @return {object} this
	 */
	setDefauls() {
		var bestSku;

		for (const i in this._skuJson.skus) {
			if (this._skuJson.skus.hasOwnProperty(i)) {
				const sku = this._skuJson.skus[i];
				if (sku.available) {
					bestSku = sku;
					break;
				}
			}
		}

		if (typeof bestSku === "undefined") {
			bestSku = this._skuJson.skus[0];
		}
		this.escolherSkuReferencia(bestSku);

		// if(this._skuJson.skus.length === 1){
		$(`input[value="${bestSku.sku}"]`).prop("checked", true);
		this.escolherSku(bestSku);
		// }
		return this;
	}

	/**
	 * Cria e insere o html com as variações dos skus
	 * @param  {Object} mapaEspecificacoes Mapa das especificações do produto
	 * @return {object} this
	 */
	desenhar() {
		let nameCampo = (0,_util__WEBPACK_IMPORTED_MODULE_2__.textoParaNomeCss)(this._skuJson.name);
		let _html = `<div class="skus-selection">
			<div class="skus-wrapper">
				<div class="titulo">${this.opcoes().title}:</div>
				<ul class="lista">${this._skuJson.skus
					.map(
						(sku, i) =>
							`<li class="sku">
						<input id="sku-id__${sku.sku}" type="radio" value="${
								sku.sku
							}" name="${nameCampo}">
						${(() => {
							if (this._opcoes.whithImage) {
								return `
								<label for="sku-id__${sku.sku}" class="${sku.available ? "" : "disable"} image">
									<img src="${(0,_util__WEBPACK_IMPORTED_MODULE_2__.alterarTamanhoImagemSrcVtex)(
										sku.image,
										this._opcoes.imageWidth,
										this._opcoes.imageHeight
									)}" title="${sku.skuname}">
								</label>`;
							} else {
								return ` <label for="sku-id__${
									sku.sku
								}" class="${sku.available ? "" : "disable"} ">
										<span>${sku.skuname}</span>
									</label>`;
							}
						})()}

					</li>`
					)
					.join("")}
				</ul>
			</div>
		</div>`;

		$(_html).appendTo(this.elemento());
		return this;
	}

	/**
	 * Configura os eventos de atualizacao
	 * @return {object} this
	 */
	configurar(opceos) {
		super.configurar(opceos);
		this.elemento().on("change", ".skus-selection input", () => {
			let id = $(".skus-selection input:checked").val();

			var sku = this._getSkuPorId(id);
			console.log(id, sku);
			this.escolherSku(sku);
		});
		return this;
	}

	_getSkuPorId(id) {
		return this._skuJson.skus.find((sku) => {
			return sku.sku == id;
		});
	}
}


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/index.js":
/*!*********************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/index.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _SubModulos_ModuloPrecoDe__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoDe */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoDe.js");
/* harmony import */ var _SubModulos_ModuloPrecoPor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoPor */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoPor.js");
/* harmony import */ var _SubModulos_ModuloPrecoParcelado__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoParcelado */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoParcelado.js");
/* harmony import */ var _SubModulos_ModuloPrecoBoleto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SubModulos/ModuloPrecoBoleto */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloPrecoBoleto.js");
/* harmony import */ var _SubModulos_ModuloBtnQtd__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./SubModulos/ModuloBtnQtd */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloBtnQtd.js");
/* harmony import */ var _SubModulos_ModuloSelect__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./SubModulos/ModuloSelect */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSelect.js");
/* harmony import */ var _SubModulos_ModuloSkusPorNome__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SubModulos/ModuloSkusPorNome */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorNome.js");
/* harmony import */ var _SubModulos_ModuloSkusPorEspecificacoes__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SubModulos/ModuloSkusPorEspecificacoes */ "./src/arquivos/js/lib/ComponentesProduto/SubModulos/ModuloSkusPorEspecificacoes.js");
/* harmony import */ var _ModuloQuantidade__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./ModuloQuantidade */ "./src/arquivos/js/lib/ComponentesProduto/ModuloQuantidade.js");
/* harmony import */ var _ModuloPreco__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./ModuloPreco */ "./src/arquivos/js/lib/ComponentesProduto/ModuloPreco.js");
/* harmony import */ var _ModuloCompreJunto__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ModuloCompreJunto */ "./src/arquivos/js/lib/ComponentesProduto/ModuloCompreJunto.js");
/* harmony import */ var _ModuloBotaoDeCompra__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./ModuloBotaoDeCompra */ "./src/arquivos/js/lib/ComponentesProduto/ModuloBotaoDeCompra.js");
/* harmony import */ var _ModuloAviseMe__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./ModuloAviseMe */ "./src/arquivos/js/lib/ComponentesProduto/ModuloAviseMe.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./store */ "./src/arquivos/js/lib/ComponentesProduto/store.js");
/* harmony import */ var _EventType__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./EventType */ "./src/arquivos/js/lib/ComponentesProduto/EventType.js");
























const Components = {
	ModuloAviseMe: _ModuloAviseMe__WEBPACK_IMPORTED_MODULE_12__.default,
	ModuloBotaoDeCompra: _ModuloBotaoDeCompra__WEBPACK_IMPORTED_MODULE_11__.default,
	ModuloCompreJunto: _ModuloCompreJunto__WEBPACK_IMPORTED_MODULE_10__.default,
	ModuloPreco: _ModuloPreco__WEBPACK_IMPORTED_MODULE_9__.default,
	ModuloQuantidade: _ModuloQuantidade__WEBPACK_IMPORTED_MODULE_8__.default,
	ModuloSkusPorNome: _SubModulos_ModuloSkusPorNome__WEBPACK_IMPORTED_MODULE_6__.default,
	ModuloSkusPorEspecificacoes: _SubModulos_ModuloSkusPorEspecificacoes__WEBPACK_IMPORTED_MODULE_7__.default,
	ModuloBtnQtd: _SubModulos_ModuloBtnQtd__WEBPACK_IMPORTED_MODULE_4__.default,
	ModuloPrecoBoleto: _SubModulos_ModuloPrecoBoleto__WEBPACK_IMPORTED_MODULE_3__.default,
	ModuloPrecoDe: _SubModulos_ModuloPrecoDe__WEBPACK_IMPORTED_MODULE_0__.default,
	ModuloPrecoParcelado: _SubModulos_ModuloPrecoParcelado__WEBPACK_IMPORTED_MODULE_2__.default,
	ModuloPrecoPor: _SubModulos_ModuloPrecoPor__WEBPACK_IMPORTED_MODULE_1__.default,
	ModuloSelect: _SubModulos_ModuloSelect__WEBPACK_IMPORTED_MODULE_5__.default,
	ComponentStore: _store__WEBPACK_IMPORTED_MODULE_13__.ComponentStore,
	Events: {
		CHANGE_QTD: _EventType__WEBPACK_IMPORTED_MODULE_14__.CHANGE_QTD,
		CHANGE_SKU: _EventType__WEBPACK_IMPORTED_MODULE_14__.CHANGE_SKU,
		ADD_SKU_TO_CART_FAIL: _EventType__WEBPACK_IMPORTED_MODULE_14__.ADD_SKU_TO_CART_FAIL,
		ADD_SKU_TO_CART_SUCESS: _EventType__WEBPACK_IMPORTED_MODULE_14__.ADD_SKU_TO_CART_SUCESS,
		SKU_REF: _EventType__WEBPACK_IMPORTED_MODULE_14__.SKU_REF,
	},
};

/* harmony default export */ __webpack_exports__["default"] = (Components);


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/store.js":
/*!*********************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/store.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "ComponentStore": function() { return /* binding */ ComponentStore; }
/* harmony export */ });
/* harmony import */ var _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @agenciam3/pkg */ "./node_modules/@agenciam3/pkg/dist/lib/index.js");


const ComponentStore = function (storeOpts = {}) {
	return new _agenciam3_pkg__WEBPACK_IMPORTED_MODULE_0__.Store({
		moduleName: storeOpts.moduleName || "ProductComponens",
		state: {
			selectedSku: {},
			qtd: 1,
			...storeOpts.state,
		},
		mutations: {
			setSelectedSku(state, selectedSku) {
				state.selectedSku = selectedSku;
			},
			setQtd(state, qtd) {
				state.qtd = qtd;
			},
			...storeOpts.mutations,
		},
		actions: { ...storeOpts.actions },
	});
};


/***/ }),

/***/ "./src/arquivos/js/lib/ComponentesProduto/util.js":
/*!********************************************************!*\
  !*** ./src/arquivos/js/lib/ComponentesProduto/util.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "textoParaNomeCss": function() { return /* binding */ textoParaNomeCss; },
/* harmony export */   "getPrice": function() { return /* binding */ getPrice; },
/* harmony export */   "alterarTamanhoImagemSrcVtex": function() { return /* binding */ alterarTamanhoImagemSrcVtex; }
/* harmony export */ });
/** Util */

function textoParaNomeCss(texto) {
	if (typeof texto == "undefined") {
		return "";
	}

	texto = texto
		.toLowerCase()
		.replace(/\)|\(/g, "")
		.replace(/\./g, "")
		.replace(/,/g, "")
		.replace(/ /g, "-")
		.replace(/\//g, "_")
		.replace(/[áàâã]/g, "a")
		.replace(/[ìíĩî]/g, "i")
		.replace(/[éèê]/g, "e")
		.replace(/[óòôõ]/g, "o")
		.replace(/[úùû]/g, "u")
		.replace(/[ç]/g, "c")
		.replace(/[^A-Za-z0-9_-]/g, "");
	return texto;
}

/**
 * Obtem Preco
 * caso o preco recebido seja um Float ou int,
 * 	Ex.: 10.2 ->'10,20'
 * Recebendo uma string o valor sera retornado como um float
 * 	Ex.: 'R$1.234,30' -> 1234.3
 * @param  {FloatZstring} price preço
 * @return {[type]}       [description]
 */
function getPrice(price) {
	if (isNaN(price)) {
		price = parseFloat(
			price.replace("R$", "").replace(".", "").replace(",", ".")
		);
		return parseFloat(price);
	} else {
		price = price || 0;
		price = price.toLocaleString("pt-BR", {
			minimumFractionDigits: 2,
			maximumFractionDigits: 2,
		});

		return price;
	}
}

if (!Array.prototype.forEach) {
	Array.prototype.forEach = function (fn, scope) {
		for (var i = 0, len = this.length; i < len; ++i) {
			fn.call(scope, this[i], i, this);
		}
	};
}

function logEvent() {
	console.log(arguments);
}
function logWarn() {
	console.warn(arguments);
}
if (!Array.prototype.find) {
	Object.defineProperty(Array.prototype, "find", {
		value: function (predicate) {
			// 1. Let O be ? ToObject(this value).
			if (this == null) {
				throw new TypeError('"this" is null or not defined');
			}
			var o = Object(this);
			// 2. Let len be ? ToLength(? Get(O, "length")).
			var len = o.length >>> 0;
			// 3. If IsCallable(predicate) is false, throw a TypeError exception.
			if (typeof predicate !== "function") {
				throw new TypeError("predicate must be a function");
			}
			// 4. If thisArg was supplied, let T be thisArg; else let T be undefined.
			var thisArg = arguments[1];
			// 5. Let k be 0.
			var k = 0;
			// 6. Repeat, while k < len
			while (k < len) {
				// a. Let Pk be ! ToString(k).
				// b. Let kValue be ? Get(O, Pk).
				// c. Let testResult be ToBoolean(? Call(predicate, T, « kValue, k, O »)).
				// d. If testResult is true, return kValue.
				var kValue = o[k];
				if (predicate.call(thisArg, kValue, k, o)) {
					return kValue;
				}
				// e. Increase k by 1.
				k++;
			}
			// 7. Return undefined.
			return undefined;
		},
	});
}

/**
 * Altera as dimenções especificadas na url da img
 * @param {string} src url da imagem na VTEX
 * @param {int} width
 * @param {int} height
 * @return {string} url da imagem com o tamanho alterado
 */
function alterarTamanhoImagemSrcVtex(src, width, height) {
	if (typeof src == "undefined") {
		console.warn("Parametro 'src' não recebido.");
		return;
	}
	width = typeof width == "undefined" ? 1 : width;
	height = typeof height == "undefined" ? width : height;

	src = src.replace(
		/\/(\d+)(-(\d+-\d+)|(_\d+))\//g,
		"/$1-" + width + "-" + height + "/"
	);
	return src;
}


/***/ }),

/***/ "./src/arquivos/js/lib/custom-newsletter-form.js":
/*!*******************************************************!*\
  !*** ./src/arquivos/js/lib/custom-newsletter-form.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

"use strict";
/* provided dependency */ var $ = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/**
 *  custom-form-newsletter.js
 *
 *  @author	Gabriel de O. Araujo
 *  @author Davi P. Guimarães
 */



var $form;

function CustomNewsletterFormService(opts) {
	// Model

	var _this = this;

	// Rota no servidor
	_this.route = function route(sigla) {
		sigla = sigla == undefined ? opts.acronymEntity : sigla;
		return "/api/dataentities/" + sigla;
	};

	/**
	 * Cria o objeto para ser salvo no Master Data
	 * @param  {String} clientName  Nome do cliente
	 * @param  {String} clientEmail Email do cliente
	 * @param  {object} interest    Objeto de interrece como {musica=>['Rock','Rap','Jazz']}
	 * @return {object}
	 */
	_this.create = function create(clientName, clientEmail, interest, origem) {
		return {
			m3ClientEmail: clientEmail,
			m3ClientInterest: interest,
			m3ClientName: clientName || "",
			m3Origem: origem || "",
		};
	};

	/**
	 * Submete o formulario
	 * @param {JqXhr} Objeto jQuery de requisição
	 */
	_this.add = function add(obj) {
		return $.ajax({
			type: "POST",
			url: _this.route() + "/documents",
			headers: {
				Accept: "application/vnd.vtex.masterdata.v10+json",
				"Content-Type": "application/json;charset=utf-8",
			},
			data: JSON.stringify(obj),
		});
	};

	this.search = function (condicao, campos) {
		if (condicao.length <= 0) return;

		return $.ajax({
			async: false,
			crossDomain: true,
			url:
				_this.route() +
				"/search?_where=" +
				condicao +
				"&_fields=" +
				campos,
			method: "GET",
			headers: {
				"Content-Type": "application/json",
				Accept: "application/vnd.vtex.ds.v10+json",
				"REST-Range": "resources=0-10",
			},
		});
	};
}
// CustomNewsletterFormService

function CustomNewsletterFormController(service, opts) {
	var _this = this;
	_this.opts = opts;

	_this.createdForm = function createdForm(opts) {
		var $form = $("<form />", {
			name: "m3-custom-newsletter-form",
			class: "m3-custom-newsletter-form",
		});
		$form.append(createInterest(opts.interest));
		$form.append(createField("name", "nome", "text"));
		$form.append(createField("email", "email", "email"));
		$form.append(createField("button-ok", opts.textButtom, "button"));
		$form.append($("<div />", { class: "m3-cn-msg" }));

		return $form;
	};

	var removeAccents = function removeAccents(text) {
		return text
			.toLowerCase()
			.replace(/[áàâã]/g, "a")
			.replace(/[ìíĩî]/g, "i")
			.replace(/[éèê]/g, "e")
			.replace(/[óòôõ]/g, "o")
			.replace(/[úùû]/g, "u")
			.replace(/[ç]/g, "c")
			.replace(/[\:]/g, "");
	};

	var configureEventsCheckd = function configureEventsCheckd($form) {
		// sempre que alguma categoria for desmarcada, desmarcar checkbox 'todas' categorias
		$form.find(".m3-cn-checkbox").on("click", function (event) {
			if (!$(this).prop("checked")) {
				$(this)
					.parents("div")
					.eq(0)
					.find(".m3-cn-checkbox-all-interest")
					.prop("checked", false);
			}
		});
		// sempre que checkbox todas categorias, marcar todos os outros checkbox
		$form
			.find(".m3-cn-checkbox-all-interest")
			.on("click", function (event) {
				var $checkboxs = $(this)
					.parents("div")
					.eq(0)
					.find(".m3-cn-checkbox");

				if ($(this).prop("checked")) {
					$checkboxs.prop("checked", true);
				} else {
					$checkboxs.prop("checked", false);
				}
			});
	};
	/**
	 * Cria o Html com os campos de segmentação
	 * @param  {array} interest [campos de segmentação	]
	 * @return {object}        [Jquery element]
	 */
	var createInterest = function createInterest(interest) {
		var identificadorRandomico = Math.floor(Math.random() * 100 + 1),
			$interest = $("<div />", { class: "dynamic-fildset" });
		if (typeof interest == "object") {
			for (var i = 0; i < interest.length; i++) {
				var $field = $("<fieldset />", {
					class: "m3-cn-interest-container",
				}).appendTo($interest);
				createInterestTitle(interest[i]).appendTo($field);
				createInterestOpts(
					interest[i],
					identificadorRandomico
				).appendTo($field);
			}
		}
		return $interest;
	};

	var createField = function createField(nome, titulo, type) {
		nome = nome || "";
		nome = nome.trim();
		titulo = titulo || nome;
		titulo = titulo.trim();
		type = type || "text";

		var idFiel = "m3-cn-" + nome,
			$fieldset = $("<fieldset />", {
				class: "m3-cn-" + nome + "-container dynamic-fildset",
			}),
			$input = $("<input />", {
				id: idFiel,
				placeholder: titulo,
				name: idFiel,
				class: idFiel,
				type: type,
			});

		if (!isInputText(type)) {
			$input.val(titulo);
		} else {
			$("<label />", { for: idFiel, text: titulo }).appendTo($fieldset);
		}
		$input.appendTo($fieldset);

		return $fieldset;
	};
	var isInputText = function isInputText(type) {
		return (
			type === "text" ||
			type === "email" ||
			type === "date" ||
			type === "number" ||
			type === "password" ||
			type === "search" ||
			type === "tel" ||
			type === "url"
		);
	};

	var createdOption = function createdOption(
		id,
		title,
		inputClass,
		type,
		name
	) {
		inputClass = inputClass || "m3-cn-checkbox";
		type = type || "checkbox";
		name = name || "m3-cn-input-radio";

		var $span = $("<span />", { class: "m3-cn-option-interest" });
		$("<input />", {
			id: "m3-cn-" + id,
			class: "m3-cn-checkbox " + inputClass,
			type: type,
			name: name,
			val: title,
		}).appendTo($span);
		$("<label />", { for: "m3-cn-" + id, text: title }).appendTo($span);

		return $span;
	};

	var createInterestOpts = function createInterestOpts(interest, index) {
		var $fields = $("<div />");
		var segmentations = interest.segmentations;

		if (typeof segmentations == "object") {
			if (interest.choiceOfSegmentation != "radio")
				createdOption(
					index,
					"Todas",
					"m3-cn-checkbox-all-interest"
				).appendTo($fields);
			var titleField = removeAccents(interest.title);
			for (var i = 0; i < segmentations.length; i++) {
				var id = removeAccents(segmentations[i]) + "-" + index;
				createdOption(
					id,
					segmentations[i],
					"m3-cn-checkbox-" + titleField,
					interest.choiceOfSegmentation,
					titleField
				).appendTo($fields);
			}
		}
		return $fields;
	};

	var createInterestTitle = function createInterestTitle(interest) {
		var titleInterest = interest.description || interest.title;
		return $("<span />", {
			class: "m3-cn-interest-title",
			title: interest.title,
			text: titleInterest,
		});
	};

	/**
	 * Obtem os valores dos campos de interreses selecionados
	 * @return {obj} um objeto como {musica=>['Rock','Rap','Jazz']}
	 */
	var getInterestFieldsValue = function getInterestFieldsValue() {
		var interestFieldsValue = {};

		/**
		 * iterando todos os fieldsets e montando o array
		 * com o tipo de interesse e seu respectivo valor
		 */
		$form.find(".m3-cn-interest-container").each(function () {
			var key = removeAccents(
				$(this).find(".m3-cn-interest-title").attr("title")
			);

			var values = $(this)
				.find("input:checked")
				.not(".m3-cn-checkbox-all-interest")
				.map(function () {
					return $(this).val();
				})
				.get();

			if (values.length <= 0) {
				values = $(this)
					.find("input")
					.not(".m3-cn-checkbox-all-interest")
					.map(function () {
						return $(this).val();
					})
					.get();
			}

			interestFieldsValue[key] = values;
		});
		return interestFieldsValue;
	};

	/**
	 * @return {object} [description]
	 */
	_this.content = function content() {
		return service.create(
			$form.find(".m3-cn-name").val(),
			$form.find(".m3-cn-email").val(),
			getInterestFieldsValue(),
			$form.parent().data("origem")
		);
	};

	var showCoupon = function showCoupon() {
		if (typeof opts.coupon != "undefined") {
			if (opts.coupon.length > 0) {
				var coupon = $("<div />", {
					class: "m3-cn-coupon",
					text: opts.coupon,
				});
				$form.find(".m3-cn-msg").append(coupon);
			}
		}
	};

	var resetForm = function resetForm() {
		$form.each(function () {
			this.reset();
		});
	};
	var createMensage = function createMensage(text, type) {
		type = type || "error";
		return $("<span />", { class: "m3-cn-" + type, text: text });
	};
	_this.emailIsRegistered = function (email) {
		var resultado = [];
		service
			.search("m3ClientEmail=" + email, "m3ClientEmail")
			.done(function (data) {
				resultado = data;
			});

		if (resultado.length > 0) return true;

		return false;
	};
	_this.validate = function validate($form) {
		var email = $form.find(".m3-cn-email").val();
		if (email.length == 0) {
			$form
				.find(".m3-cn-msg")
				.empty()
				.append(createMensage("Por favor, informe o seu email!"));
			return false;
		} else {
			var regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
			var result = regex.test(email);

			if (!result) {
				$form
					.find(".m3-cn-msg")
					.empty()
					.append(createMensage("Email inválido!"));
				return false;
			}

			if (_this.emailIsRegistered(email)) {
				$form
					.find(".m3-cn-msg")
					.empty()
					.append(createMensage("Este email já está cadastrado!"));
				return false;
			}

			return true;
		}
	};

	_this.success = function success() {
		var msg = createMensage(opts.successMsg, "success");

		$form.find(".m3-cn-msg").empty().append(msg);
		showCoupon();
		resetForm();

		$form.trigger("CN-registered-successfully");
	};

	_this.error = function error() {
		var msg = createMensage(opts.errorMsg);
		$form.trigger("CN-registered-filed");
		$form.find(".m3-cn-msg").empty().html(msg);
	};

	_this.save = function save() {
		$(this).prop("disable", true);
		//Define formulario que esta sendo usado
		$form = $(this).parents(".m3-custom-newsletter-form");

		// limpando a div de msg
		$form.find(".m3-cn-msg").empty();

		if (_this.validate($form)) {
			var obj = _this.content();

			var jqXHR = service.add(obj);

			jqXHR
				.done(_this.success)
				.fail(_this.error)
				.always(function () {
					$(".m3-cn-button-ok").prop("disable", false);
				});
		}
	};

	// Configura os eventos do formulário
	_this.configure = function configure($el) {
		var $form = _this.createdForm(_this.opts);
		configureEventsCheckd($form);
		$form.find(".m3-custom-newsletter-form").submit(false);
		$form.find(".m3-cn-button-ok").on("click", _this.save);

		$form.appendTo($el);
	};
} // CustomNewsletterFormController

$.fn.CustomNewsletter = function (options) {
	var opts = $.extend({}, $.fn.CustomNewsletter.defaults, options);

	var service = new CustomNewsletterFormService(opts);
	var controller = new CustomNewsletterFormController(service, opts);

	$(this).each(function (index, el) {
		controller.configure($(this));

		if (opts.executeCallback) {
			$(this).on("CN-registered-successfully", function () {
				var $form = $(this),
					$msgContatiner = $form.find(".m3-cn-msg"),
					$a = $("<a />", {
						text: "Voltar",
						href: "#",
						class: "btn-voltar",
					}).click(function (event) {
						event.preventDefault();
						$form
							.find(
								".m3-cn-name-container,.m3-cn-email-container,.m3-cn-button-ok-container"
							)
							.show("slow");
						$msgContatiner.empty();
					});
				$msgContatiner.append($a);
				$form
					.find(
						".m3-cn-name-container,.m3-cn-email-container,.m3-cn-button-ok-container"
					)
					.hide("slow");
			});
		}
	});
};

$.fn.CustomNewsletter.defaults = {
	acronymEntity: "CN",
	shop: "minha-loja",
	textButtom: "Enviar",
	errorMsg: "Ocorreu algum erro, tente novamente mais tarde.",
	successMsg: "Cadastro concluído com sucesso!",
	coupon: "",
	executeCallback: true,
	interest: [],
	/*
	,"interest"		:	[
		{
			'title':"Titulo Segmentação",
			'description':"Texto descrevendo segmentação",
			'choiceOfSegmentation':'checkbox',
			'segmentations':[
				"Segmentação-01",
				"Segmentação-02"
			]
		}
	]*/
};


/***/ }),

/***/ "./src/arquivos/js/lib/elevateZoom.js":
/*!********************************************!*\
  !*** ./src/arquivos/js/lib/elevateZoom.js ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
/* jQuery elevateZoom 3.0.8 - Demo's and documentation: - www.elevateweb.co.uk/image-zoom - Copyright (c) 2013 Andrew Eades - www.elevateweb.co.uk - Dual licensed under the LGPL licenses. - http://en.wikipedia.org/wiki/MIT_License - http://en.wikipedia.org/wiki/GNU_General_Public_License */
"function" !== typeof Object.create &&
	(Object.create = function (d) {
		function h() {}
		h.prototype = d;
		return new h();
	});
(function (d, h, l, m) {
	var k = {
		init: function (b, a) {
			var c = this;
			c.elem = a;
			c.$elem = d(a);
			c.imageSrc = c.$elem.data("zoom-image")
				? c.$elem.data("zoom-image")
				: c.$elem.attr("src");
			c.options = d.extend({}, d.fn.elevateZoom.options, b);
			c.options.tint &&
				((c.options.lensColour = "none"),
				(c.options.lensOpacity = "1"));
			"inner" == c.options.zoomType && (c.options.showLens = !1);
			c.$elem.parent().removeAttr("title").removeAttr("alt");
			c.zoomImage = c.imageSrc;
			c.refresh(1);
			d("#" + c.options.gallery + " a").click(function (a) {
				c.options.galleryActiveClass &&
					(d("#" + c.options.gallery + " a").removeClass(
						c.options.galleryActiveClass
					),
					d(this).addClass(c.options.galleryActiveClass));
				a.preventDefault();
				d(this).data("zoom-image")
					? (c.zoomImagePre = d(this).data("zoom-image"))
					: (c.zoomImagePre = d(this).data("image"));
				c.swaptheimage(d(this).data("image"), c.zoomImagePre);
				return !1;
			});
		},
		refresh: function (b) {
			var a = this;
			setTimeout(function () {
				a.fetch(a.imageSrc);
			}, b || a.options.refresh);
		},
		fetch: function (b) {
			var a = this,
				c = new Image();
			c.onload = function () {
				a.largeWidth = c.width;
				a.largeHeight = c.height;
				a.startZoom();
				a.currentImage = a.imageSrc;
				a.options.onZoomedImageLoaded(a.$elem);
			};
			c.src = b;
		},
		startZoom: function () {
			var b = this;
			b.nzWidth = b.$elem.width();
			b.nzHeight = b.$elem.height();
			b.isWindowActive = !1;
			b.isLensActive = !1;
			b.isTintActive = !1;
			b.overWindow = !1;
			b.options.imageCrossfade &&
				((b.zoomWrap = b.$elem.wrap(
					'<div style="height:' +
						b.nzHeight +
						"px;width:" +
						b.nzWidth +
						'px;" class="zoomWrapper" />'
				)),
				b.$elem.css("position", "absolute"));
			b.zoomLock = 1;
			b.scrollingLock = !1;
			b.changeBgSize = !1;
			b.currentZoomLevel = b.options.zoomLevel;
			b.nzOffset = b.$elem.offset();
			b.widthRatio = b.largeWidth / b.currentZoomLevel / b.nzWidth;
			b.heightRatio = b.largeHeight / b.currentZoomLevel / b.nzHeight;
			"window" == b.options.zoomType &&
				(b.zoomWindowStyle =
					"overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " +
					String(b.options.zoomWindowBgColour) +
					";width: " +
					String(b.options.zoomWindowWidth) +
					"px;height: " +
					String(b.options.zoomWindowHeight) +
					"px;float: left;background-size: " +
					b.largeWidth / b.currentZoomLevel +
					"px " +
					b.largeHeight / b.currentZoomLevel +
					"px;display: none;z-index:100;border: " +
					String(b.options.borderSize) +
					"px solid " +
					b.options.borderColour +
					";background-repeat: no-repeat;position: absolute;");
			if ("inner" == b.options.zoomType) {
				var a = b.$elem.css("border-left-width");
				b.zoomWindowStyle =
					"overflow: hidden;margin-left: " +
					String(a) +
					";margin-top: " +
					String(a) +
					";background-position: 0px 0px;width: " +
					String(b.nzWidth) +
					"px;height: " +
					String(b.nzHeight) +
					"px;float: left;display: none;cursor:" +
					b.options.cursor +
					";px solid " +
					b.options.borderColour +
					";background-repeat: no-repeat;position: absolute;";
			}
			"window" == b.options.zoomType &&
				((lensHeight =
					b.nzHeight < b.options.zoomWindowWidth / b.widthRatio
						? b.nzHeight
						: String(b.options.zoomWindowHeight / b.heightRatio)),
				(lensWidth =
					b.largeWidth < b.options.zoomWindowWidth
						? b.nzWidth
						: b.options.zoomWindowWidth / b.widthRatio),
				(b.lensStyle =
					"background-position: 0px 0px;width: " +
					String(b.options.zoomWindowWidth / b.widthRatio) +
					"px;height: " +
					String(b.options.zoomWindowHeight / b.heightRatio) +
					"px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" +
					b.options.lensOpacity +
					";filter: alpha(opacity = " +
					100 * b.options.lensOpacity +
					"); zoom:1;width:" +
					lensWidth +
					"px;height:" +
					lensHeight +
					"px;background-color:" +
					b.options.lensColour +
					";cursor:" +
					b.options.cursor +
					";border: " +
					b.options.lensBorderSize +
					"px solid " +
					b.options.lensBorderColour +
					";background-repeat: no-repeat;position: absolute;"));
			b.tintStyle =
				"display: block;position: absolute;background-color: " +
				b.options.tintColour +
				";filter:alpha(opacity=0);opacity: 0;width: " +
				b.nzWidth +
				"px;height: " +
				b.nzHeight +
				"px;";
			b.lensRound = "";
			"lens" == b.options.zoomType &&
				(b.lensStyle =
					"background-position: 0px 0px;float: left;display: none;border: " +
					String(b.options.borderSize) +
					"px solid " +
					b.options.borderColour +
					";width:" +
					String(b.options.lensSize) +
					"px;height:" +
					String(b.options.lensSize) +
					"px;background-repeat: no-repeat;position: absolute;");
			"round" == b.options.lensShape &&
				(b.lensRound =
					"border-top-left-radius: " +
					String(b.options.lensSize / 2 + b.options.borderSize) +
					"px;border-top-right-radius: " +
					String(b.options.lensSize / 2 + b.options.borderSize) +
					"px;border-bottom-left-radius: " +
					String(b.options.lensSize / 2 + b.options.borderSize) +
					"px;border-bottom-right-radius: " +
					String(b.options.lensSize / 2 + b.options.borderSize) +
					"px;");
			b.zoomContainer = d(
				'<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' +
					b.$elem.parent().offset().left +
					"px;top:" +
					b.$elem.parent().offset().top +
					"px;height:" +
					b.$elem.parent().height() +
					"px;width:" +
					b.$elem.parent().width() +
					'px;"></div>'
			);
			d("body").append(b.zoomContainer);
			b.options.containLensZoom &&
				"lens" == b.options.zoomType &&
				b.zoomContainer.css("overflow", "hidden");
			"inner" != b.options.zoomType &&
				((b.zoomLens = d(
					"<div class='zoomLens' style='" +
						b.lensStyle +
						b.lensRound +
						"'>&nbsp;</div>"
				)
					.appendTo(b.zoomContainer)
					.click(function () {
						b.$elem.trigger("click");
					})),
				b.options.tint &&
					((b.tintContainer = d("<div/>").addClass("tintContainer")),
					(b.zoomTint = d(
						"<div class='zoomTint' style='" +
							b.tintStyle +
							"'></div>"
					)),
					b.zoomLens.wrap(b.tintContainer),
					(b.zoomTintcss = b.zoomLens.after(b.zoomTint)),
					(b.zoomTintImage = d(
						'<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' +
							b.nzWidth +
							"px; height: " +
							b.nzHeight +
							'px;" src="' +
							b.imageSrc +
							'">'
					)
						.appendTo(b.zoomLens)
						.click(function () {
							b.$elem.trigger("click");
						}))));
			isNaN(b.options.zoomWindowPosition)
				? (b.zoomWindow = d(
						"<div style='z-index:999;left:" +
							b.windowOffsetLeft +
							"px;top:" +
							b.windowOffsetTop +
							"px;" +
							b.zoomWindowStyle +
							"' class='zoomWindow'>&nbsp;</div>"
				  )
						.appendTo("body")
						.click(function () {
							b.$elem.trigger("click");
						}))
				: (b.zoomWindow = d(
						"<div style='z-index:999;left:" +
							b.windowOffsetLeft +
							"px;top:" +
							b.windowOffsetTop +
							"px;" +
							b.zoomWindowStyle +
							"' class='zoomWindow'>&nbsp;</div>"
				  )
						.appendTo(b.zoomContainer)
						.click(function () {
							b.$elem.trigger("click");
						}));
			b.zoomWindowContainer = d("<div/>")
				.addClass("zoomWindowContainer")
				.css("width", b.options.zoomWindowWidth);
			b.zoomWindow.wrap(b.zoomWindowContainer);
			"lens" == b.options.zoomType &&
				b.zoomLens.css({
					backgroundImage: "url('" + b.imageSrc + "')",
				});
			"window" == b.options.zoomType &&
				b.zoomWindow.css({
					backgroundImage: "url('" + b.imageSrc + "')",
				});
			"inner" == b.options.zoomType &&
				b.zoomWindow.css({
					backgroundImage: "url('" + b.imageSrc + "')",
				});
			b.$elem.bind("touchmove", function (a) {
				a.preventDefault();
				b.setPosition(
					a.originalEvent.touches[0] ||
						a.originalEvent.changedTouches[0]
				);
			});
			b.zoomContainer.bind("touchmove", function (a) {
				"inner" == b.options.zoomType && b.showHideWindow("show");
				a.preventDefault();
				b.setPosition(
					a.originalEvent.touches[0] ||
						a.originalEvent.changedTouches[0]
				);
			});
			b.zoomContainer.bind("touchend", function (a) {
				b.showHideWindow("hide");
				b.options.showLens && b.showHideLens("hide");
				b.options.tint &&
					"inner" != b.options.zoomType &&
					b.showHideTint("hide");
			});
			b.$elem.bind("touchend", function (a) {
				b.showHideWindow("hide");
				b.options.showLens && b.showHideLens("hide");
				b.options.tint &&
					"inner" != b.options.zoomType &&
					b.showHideTint("hide");
			});
			b.options.showLens &&
				(b.zoomLens.bind("touchmove", function (a) {
					a.preventDefault();
					b.setPosition(
						a.originalEvent.touches[0] ||
							a.originalEvent.changedTouches[0]
					);
				}),
				b.zoomLens.bind("touchend", function (a) {
					b.showHideWindow("hide");
					b.options.showLens && b.showHideLens("hide");
					b.options.tint &&
						"inner" != b.options.zoomType &&
						b.showHideTint("hide");
				}));
			b.$elem.bind("mousemove", function (a) {
				!1 == b.overWindow && b.setElements("show");
				if (b.lastX !== a.clientX || b.lastY !== a.clientY)
					b.setPosition(a), (b.currentLoc = a);
				b.lastX = a.clientX;
				b.lastY = a.clientY;
			});
			b.zoomContainer.bind("mousemove", function (a) {
				!1 == b.overWindow && b.setElements("show");
				if (b.lastX !== a.clientX || b.lastY !== a.clientY)
					b.setPosition(a), (b.currentLoc = a);
				b.lastX = a.clientX;
				b.lastY = a.clientY;
			});
			"inner" != b.options.zoomType &&
				b.zoomLens.bind("mousemove", function (a) {
					if (b.lastX !== a.clientX || b.lastY !== a.clientY)
						b.setPosition(a), (b.currentLoc = a);
					b.lastX = a.clientX;
					b.lastY = a.clientY;
				});
			b.options.tint &&
				"inner" != b.options.zoomType &&
				b.zoomTint.bind("mousemove", function (a) {
					if (b.lastX !== a.clientX || b.lastY !== a.clientY)
						b.setPosition(a), (b.currentLoc = a);
					b.lastX = a.clientX;
					b.lastY = a.clientY;
				});
			"inner" == b.options.zoomType &&
				b.zoomWindow.bind("mousemove", function (a) {
					if (b.lastX !== a.clientX || b.lastY !== a.clientY)
						b.setPosition(a), (b.currentLoc = a);
					b.lastX = a.clientX;
					b.lastY = a.clientY;
				});
			b.zoomContainer
				.add(b.$elem)
				.mouseenter(function () {
					!1 == b.overWindow && b.setElements("show");
				})
				.mouseleave(function () {
					b.scrollLock || b.setElements("hide");
				});
			"inner" != b.options.zoomType &&
				b.zoomWindow
					.mouseenter(function () {
						b.overWindow = !0;
						b.setElements("hide");
					})
					.mouseleave(function () {
						b.overWindow = !1;
					});
			b.minZoomLevel = b.options.minZoomLevel
				? b.options.minZoomLevel
				: 2 * b.options.scrollZoomIncrement;
			b.options.scrollZoom &&
				b.zoomContainer
					.add(b.$elem)
					.bind(
						"mousewheel DOMMouseScroll MozMousePixelScroll",
						function (a) {
							b.scrollLock = !0;
							clearTimeout(d.data(this, "timer"));
							d.data(
								this,
								"timer",
								setTimeout(function () {
									b.scrollLock = !1;
								}, 250)
							);
							var e =
								a.originalEvent.wheelDelta ||
								-1 * a.originalEvent.detail;
							a.stopImmediatePropagation();
							a.stopPropagation();
							a.preventDefault();
							0 < e / 120
								? b.currentZoomLevel >= b.minZoomLevel &&
								  b.changeZoomLevel(
										b.currentZoomLevel -
											b.options.scrollZoomIncrement
								  )
								: b.options.maxZoomLevel
								? b.currentZoomLevel <=
										b.options.maxZoomLevel &&
								  b.changeZoomLevel(
										parseFloat(b.currentZoomLevel) +
											b.options.scrollZoomIncrement
								  )
								: b.changeZoomLevel(
										parseFloat(b.currentZoomLevel) +
											b.options.scrollZoomIncrement
								  );
							return !1;
						}
					);
		},
		setElements: function (b) {
			if (!this.options.zoomEnabled) return !1;
			"show" == b &&
				this.isWindowSet &&
				("inner" == this.options.zoomType &&
					this.showHideWindow("show"),
				"window" == this.options.zoomType &&
					this.showHideWindow("show"),
				this.options.showLens && this.showHideLens("show"),
				this.options.tint &&
					"inner" != this.options.zoomType &&
					this.showHideTint("show"));
			"hide" == b &&
				("window" == this.options.zoomType &&
					this.showHideWindow("hide"),
				this.options.tint || this.showHideWindow("hide"),
				this.options.showLens && this.showHideLens("hide"),
				this.options.tint && this.showHideTint("hide"));
		},
		setPosition: function (b) {
			if (!this.options.zoomEnabled) return !1;
			this.nzHeight = this.$elem.height();
			this.nzWidth = this.$elem.width();
			this.nzOffset = this.$elem.parents("#image").offset();
			this.options.tint &&
				"inner" != this.options.zoomType &&
				(this.zoomTint.css({
					top: 0,
				}),
				this.zoomTint.css({
					left: 0,
				}));
			this.options.responsive &&
				!this.options.scrollZoom &&
				this.options.showLens &&
				((lensHeight =
					this.nzHeight <
					this.options.zoomWindowWidth / this.widthRatio
						? this.nzHeight
						: String(
								this.options.zoomWindowHeight / this.heightRatio
						  )),
				(lensWidth =
					this.largeWidth < this.options.zoomWindowWidth
						? this.nzWidth
						: this.options.zoomWindowWidth / this.widthRatio),
				(this.widthRatio = this.largeWidth / this.nzWidth),
				(this.heightRatio = this.largeHeight / this.nzHeight),
				"lens" != this.options.zoomType &&
					((lensHeight =
						this.nzHeight <
						this.options.zoomWindowWidth / this.widthRatio
							? this.nzHeight
							: String(
									this.options.zoomWindowHeight /
										this.heightRatio
							  )),
					(lensWidth =
						this.options.zoomWindowWidth <
						this.options.zoomWindowWidth
							? this.nzWidth
							: this.options.zoomWindowWidth / this.widthRatio),
					this.zoomLens.css("width", lensWidth),
					this.zoomLens.css("height", lensHeight),
					this.options.tint &&
						(this.zoomTintImage.css("width", this.nzWidth),
						this.zoomTintImage.css("height", this.nzHeight))),
				"lens" == this.options.zoomType &&
					this.zoomLens.css({
						width: String(this.options.lensSize) + "px",
						height: String(this.options.lensSize) + "px",
					}));
			this.zoomContainer.css({
				top: this.nzOffset.top,
			});
			this.zoomContainer.css({
				left: this.nzOffset.left,
			});
			this.mouseLeft = parseInt(b.pageX - this.nzOffset.left);
			this.mouseTop = parseInt(b.pageY - this.nzOffset.top);
			"window" == this.options.zoomType &&
				((this.Etoppos = this.mouseTop < this.zoomLens.height() / 2),
				(this.Eboppos =
					this.mouseTop >
					this.nzHeight -
						this.zoomLens.height() / 2 -
						2 * this.options.lensBorderSize),
				(this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2),
				(this.Eroppos =
					this.mouseLeft >
					this.nzWidth -
						this.zoomLens.width() / 2 -
						2 * this.options.lensBorderSize));
			"inner" == this.options.zoomType &&
				((this.Etoppos =
					this.mouseTop < this.nzHeight / 2 / this.heightRatio),
				(this.Eboppos =
					this.mouseTop >
					this.nzHeight - this.nzHeight / 2 / this.heightRatio),
				(this.Eloppos =
					this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio),
				(this.Eroppos =
					this.mouseLeft >
					this.nzWidth -
						this.nzWidth / 2 / this.widthRatio -
						2 * this.options.lensBorderSize));
			0 >= this.mouseLeft ||
			0 > this.mouseTop ||
			this.mouseLeft > this.nzWidth ||
			this.mouseTop > this.nzHeight
				? this.setElements("hide")
				: (this.options.showLens &&
						((this.lensLeftPos = String(
							this.mouseLeft - this.zoomLens.width() / 2
						)),
						(this.lensTopPos = String(
							this.mouseTop - this.zoomLens.height() / 2
						))),
				  this.Etoppos && (this.lensTopPos = 0),
				  this.Eloppos &&
						(this.tintpos = this.lensLeftPos = this.windowLeftPos = 0),
				  "window" == this.options.zoomType &&
						(this.Eboppos &&
							(this.lensTopPos = Math.max(
								this.nzHeight -
									this.zoomLens.height() -
									2 * this.options.lensBorderSize,
								0
							)),
						this.Eroppos &&
							(this.lensLeftPos =
								this.nzWidth -
								this.zoomLens.width() -
								2 * this.options.lensBorderSize)),
				  "inner" == this.options.zoomType &&
						(this.Eboppos &&
							(this.lensTopPos = Math.max(
								this.nzHeight - 2 * this.options.lensBorderSize,
								0
							)),
						this.Eroppos &&
							(this.lensLeftPos =
								this.nzWidth -
								this.nzWidth -
								2 * this.options.lensBorderSize)),
				  "lens" == this.options.zoomType &&
						((this.windowLeftPos = String(
							-1 *
								((b.pageX - this.nzOffset.left) *
									this.widthRatio -
									this.zoomLens.width() / 2)
						)),
						(this.windowTopPos = String(
							-1 *
								((b.pageY - this.nzOffset.top) *
									this.heightRatio -
									this.zoomLens.height() / 2)
						)),
						this.zoomLens.css({
							backgroundPosition:
								this.windowLeftPos +
								"px " +
								this.windowTopPos +
								"px",
						}),
						this.changeBgSize &&
							(this.nzHeight > this.nzWidth
								? ("lens" == this.options.zoomType &&
										this.zoomLens.css({
											"background-size":
												this.largeWidth /
													this.newvalueheight +
												"px " +
												this.largeHeight /
													this.newvalueheight +
												"px",
										}),
								  this.zoomWindow.css({
										"background-size":
											this.largeWidth /
												this.newvalueheight +
											"px " +
											this.largeHeight /
												this.newvalueheight +
											"px",
								  }))
								: ("lens" == this.options.zoomType &&
										this.zoomLens.css({
											"background-size":
												this.largeWidth /
													this.newvaluewidth +
												"px " +
												this.largeHeight /
													this.newvaluewidth +
												"px",
										}),
								  this.zoomWindow.css({
										"background-size":
											this.largeWidth /
												this.newvaluewidth +
											"px " +
											this.largeHeight /
												this.newvaluewidth +
											"px",
								  })),
							(this.changeBgSize = !1)),
						this.setWindowPostition(b)),
				  this.options.tint &&
						"inner" != this.options.zoomType &&
						this.setTintPosition(b),
				  "window" == this.options.zoomType &&
						this.setWindowPostition(b),
				  "inner" == this.options.zoomType &&
						this.setWindowPostition(b),
				  this.options.showLens &&
						(this.fullwidth &&
							"lens" != this.options.zoomType &&
							(this.lensLeftPos = 0),
						this.zoomLens.css({
							left: this.lensLeftPos + "px",
							top: this.lensTopPos + "px",
						})));
		},
		showHideWindow: function (b) {
			"show" != b ||
				this.isWindowActive ||
				(this.options.zoomWindowFadeIn
					? this.zoomWindow
							.stop(!0, !0, !1)
							.fadeIn(this.options.zoomWindowFadeIn)
					: this.zoomWindow.show(),
				(this.isWindowActive = !0));
			"hide" == b &&
				this.isWindowActive &&
				(this.options.zoomWindowFadeOut
					? this.zoomWindow
							.stop(!0, !0)
							.fadeOut(this.options.zoomWindowFadeOut)
					: this.zoomWindow.hide(),
				(this.isWindowActive = !1));
		},
		showHideLens: function (b) {
			"show" != b ||
				this.isLensActive ||
				(this.options.lensFadeIn
					? this.zoomLens
							.stop(!0, !0, !1)
							.fadeIn(this.options.lensFadeIn)
					: this.zoomLens.show(),
				(this.isLensActive = !0));
			"hide" == b &&
				this.isLensActive &&
				(this.options.lensFadeOut
					? this.zoomLens
							.stop(!0, !0)
							.fadeOut(this.options.lensFadeOut)
					: this.zoomLens.hide(),
				(this.isLensActive = !1));
		},
		showHideTint: function (b) {
			"show" != b ||
				this.isTintActive ||
				(this.options.zoomTintFadeIn
					? this.zoomTint
							.css({
								opacity: this.options.tintOpacity,
							})
							.animate()
							.stop(!0, !0)
							.fadeIn("slow")
					: (this.zoomTint
							.css({
								opacity: this.options.tintOpacity,
							})
							.animate(),
					  this.zoomTint.show()),
				(this.isTintActive = !0));
			"hide" == b &&
				this.isTintActive &&
				(this.options.zoomTintFadeOut
					? this.zoomTint
							.stop(!0, !0)
							.fadeOut(this.options.zoomTintFadeOut)
					: this.zoomTint.hide(),
				(this.isTintActive = !1));
		},
		setLensPostition: function (b) {},
		setWindowPostition: function (b) {
			var a = this;
			if (isNaN(a.options.zoomWindowPosition))
				(a.externalContainer = d("#" + a.options.zoomWindowPosition)),
					(a.externalContainerWidth = a.externalContainer.width()),
					(a.externalContainerHeight = a.externalContainer.height()),
					(a.externalContainerOffset = a.externalContainer.offset()),
					(a.windowOffsetTop = a.externalContainerOffset.top),
					(a.windowOffsetLeft = a.externalContainerOffset.left);
			else
				switch (a.options.zoomWindowPosition) {
					case 1:
						a.windowOffsetTop = a.options.zoomWindowOffety;
						a.windowOffsetLeft = +a.nzWidth;
						break;
					case 2:
						a.options.zoomWindowHeight > a.nzHeight &&
							((a.windowOffsetTop =
								-1 *
								(a.options.zoomWindowHeight / 2 -
									a.nzHeight / 2)),
							(a.windowOffsetLeft = a.nzWidth));
						break;
					case 3:
						a.windowOffsetTop =
							a.nzHeight -
							a.zoomWindow.height() -
							2 * a.options.borderSize;
						a.windowOffsetLeft = a.nzWidth;
						break;
					case 4:
						a.windowOffsetTop = a.nzHeight;
						a.windowOffsetLeft = a.nzWidth;
						break;
					case 5:
						a.windowOffsetTop = a.nzHeight;
						a.windowOffsetLeft =
							a.nzWidth -
							a.zoomWindow.width() -
							2 * a.options.borderSize;
						break;
					case 6:
						a.options.zoomWindowHeight > a.nzHeight &&
							((a.windowOffsetTop = a.nzHeight),
							(a.windowOffsetLeft =
								-1 *
								(a.options.zoomWindowWidth / 2 -
									a.nzWidth / 2 +
									2 * a.options.borderSize)));
						break;
					case 7:
						a.windowOffsetTop = a.nzHeight;
						a.windowOffsetLeft = 0;
						break;
					case 8:
						a.windowOffsetTop = a.nzHeight;
						a.windowOffsetLeft =
							-1 *
							(a.zoomWindow.width() + 2 * a.options.borderSize);
						break;
					case 9:
						a.windowOffsetTop =
							a.nzHeight -
							a.zoomWindow.height() -
							2 * a.options.borderSize;
						a.windowOffsetLeft =
							-1 *
							(a.zoomWindow.width() + 2 * a.options.borderSize);
						break;
					case 10:
						a.options.zoomWindowHeight > a.nzHeight &&
							((a.windowOffsetTop =
								-1 *
								(a.options.zoomWindowHeight / 2 -
									a.nzHeight / 2)),
							(a.windowOffsetLeft =
								-1 *
								(a.zoomWindow.width() +
									2 * a.options.borderSize)));
						break;
					case 11:
						a.windowOffsetTop = a.options.zoomWindowOffety;
						a.windowOffsetLeft =
							-1 *
							(a.zoomWindow.width() + 2 * a.options.borderSize);
						break;
					case 12:
						a.windowOffsetTop =
							-1 *
							(a.zoomWindow.height() + 2 * a.options.borderSize);
						a.windowOffsetLeft =
							-1 *
							(a.zoomWindow.width() + 2 * a.options.borderSize);
						break;
					case 13:
						a.windowOffsetTop =
							-1 *
							(a.zoomWindow.height() + 2 * a.options.borderSize);
						a.windowOffsetLeft = 0;
						break;
					case 14:
						a.options.zoomWindowHeight > a.nzHeight &&
							((a.windowOffsetTop =
								-1 *
								(a.zoomWindow.height() +
									2 * a.options.borderSize)),
							(a.windowOffsetLeft =
								-1 *
								(a.options.zoomWindowWidth / 2 -
									a.nzWidth / 2 +
									2 * a.options.borderSize)));
						break;
					case 15:
						a.windowOffsetTop =
							-1 *
							(a.zoomWindow.height() + 2 * a.options.borderSize);
						a.windowOffsetLeft =
							a.nzWidth -
							a.zoomWindow.width() -
							2 * a.options.borderSize;
						break;
					case 16:
						a.windowOffsetTop =
							-1 *
							(a.zoomWindow.height() + 2 * a.options.borderSize);
						a.windowOffsetLeft = a.nzWidth;
						break;
					default:
						(a.windowOffsetTop = a.options.zoomWindowOffety),
							(a.windowOffsetLeft = a.nzWidth);
				}
			a.isWindowSet = !0;
			a.windowOffsetTop += a.options.zoomWindowOffety;
			a.windowOffsetLeft += a.options.zoomWindowOffetx;
			a.zoomWindow.css({
				top: a.windowOffsetTop,
			});
			a.zoomWindow.css({
				left: a.windowOffsetLeft,
			});
			"inner" == a.options.zoomType &&
				(a.zoomWindow.css({
					top: 0,
				}),
				a.zoomWindow.css({
					left: 0,
				}));
			a.windowLeftPos = String(
				-1 *
					((b.pageX - a.nzOffset.left) * a.widthRatio -
						a.zoomWindow.width() / 2)
			);
			a.windowTopPos = String(
				-1 *
					((b.pageY - a.nzOffset.top) * a.heightRatio -
						a.zoomWindow.height() / 2)
			);
			a.Etoppos && (a.windowTopPos = 0);
			a.Eloppos && (a.windowLeftPos = 0);
			a.Eboppos &&
				(a.windowTopPos =
					-1 *
					(a.largeHeight / a.currentZoomLevel -
						a.zoomWindow.height()));
			a.Eroppos &&
				(a.windowLeftPos =
					-1 *
					(a.largeWidth / a.currentZoomLevel - a.zoomWindow.width()));
			a.fullheight && (a.windowTopPos = 0);
			a.fullwidth && (a.windowLeftPos = 0);
			if ("window" == a.options.zoomType || "inner" == a.options.zoomType)
				1 == a.zoomLock &&
					(1 >= a.widthRatio && (a.windowLeftPos = 0),
					1 >= a.heightRatio && (a.windowTopPos = 0)),
					a.largeHeight < a.options.zoomWindowHeight &&
						(a.windowTopPos = 0),
					a.largeWidth < a.options.zoomWindowWidth &&
						(a.windowLeftPos = 0),
					a.options.easing
						? (a.xp || (a.xp = 0),
						  a.yp || (a.yp = 0),
						  a.loop ||
								(a.loop = setInterval(function () {
									a.xp +=
										(a.windowLeftPos - a.xp) /
										a.options.easingAmount;
									a.yp +=
										(a.windowTopPos - a.yp) /
										a.options.easingAmount;
									a.scrollingLock
										? (clearInterval(a.loop),
										  (a.xp = a.windowLeftPos),
										  (a.yp = a.windowTopPos),
										  (a.xp =
												-1 *
												((b.pageX - a.nzOffset.left) *
													a.widthRatio -
													a.zoomWindow.width() / 2)),
										  (a.yp =
												-1 *
												((b.pageY - a.nzOffset.top) *
													a.heightRatio -
													a.zoomWindow.height() / 2)),
										  a.changeBgSize &&
												(a.nzHeight > a.nzWidth
													? ("lens" ==
															a.options
																.zoomType &&
															a.zoomLens.css({
																"background-size":
																	a.largeWidth /
																		a.newvalueheight +
																	"px " +
																	a.largeHeight /
																		a.newvalueheight +
																	"px",
															}),
													  a.zoomWindow.css({
															"background-size":
																a.largeWidth /
																	a.newvalueheight +
																"px " +
																a.largeHeight /
																	a.newvalueheight +
																"px",
													  }))
													: ("lens" !=
															a.options
																.zoomType &&
															a.zoomLens.css({
																"background-size":
																	a.largeWidth /
																		a.newvaluewidth +
																	"px " +
																	a.largeHeight /
																		a.newvalueheight +
																	"px",
															}),
													  a.zoomWindow.css({
															"background-size":
																a.largeWidth /
																	a.newvaluewidth +
																"px " +
																a.largeHeight /
																	a.newvaluewidth +
																"px",
													  })),
												(a.changeBgSize = !1)),
										  a.zoomWindow.css({
												backgroundPosition:
													a.windowLeftPos +
													"px " +
													a.windowTopPos +
													"px",
										  }),
										  (a.scrollingLock = !1),
										  (a.loop = !1))
										: (a.changeBgSize &&
												(a.nzHeight > a.nzWidth
													? ("lens" ==
															a.options
																.zoomType &&
															a.zoomLens.css({
																"background-size":
																	a.largeWidth /
																		a.newvalueheight +
																	"px " +
																	a.largeHeight /
																		a.newvalueheight +
																	"px",
															}),
													  a.zoomWindow.css({
															"background-size":
																a.largeWidth /
																	a.newvalueheight +
																"px " +
																a.largeHeight /
																	a.newvalueheight +
																"px",
													  }))
													: ("lens" !=
															a.options
																.zoomType &&
															a.zoomLens.css({
																"background-size":
																	a.largeWidth /
																		a.newvaluewidth +
																	"px " +
																	a.largeHeight /
																		a.newvaluewidth +
																	"px",
															}),
													  a.zoomWindow.css({
															"background-size":
																a.largeWidth /
																	a.newvaluewidth +
																"px " +
																a.largeHeight /
																	a.newvaluewidth +
																"px",
													  })),
												(a.changeBgSize = !1)),
										  a.zoomWindow.css({
												backgroundPosition:
													a.xp + "px " + a.yp + "px",
										  }));
								}, 16)))
						: (a.changeBgSize &&
								(a.nzHeight > a.nzWidth
									? ("lens" == a.options.zoomType &&
											a.zoomLens.css({
												"background-size":
													a.largeWidth /
														a.newvalueheight +
													"px " +
													a.largeHeight /
														a.newvalueheight +
													"px",
											}),
									  a.zoomWindow.css({
											"background-size":
												a.largeWidth /
													a.newvalueheight +
												"px " +
												a.largeHeight /
													a.newvalueheight +
												"px",
									  }))
									: ("lens" == a.options.zoomType &&
											a.zoomLens.css({
												"background-size":
													a.largeWidth /
														a.newvaluewidth +
													"px " +
													a.largeHeight /
														a.newvaluewidth +
													"px",
											}),
									  a.largeHeight / a.newvaluewidth <
									  a.options.zoomWindowHeight
											? a.zoomWindow.css({
													"background-size":
														a.largeWidth /
															a.newvaluewidth +
														"px " +
														a.largeHeight /
															a.newvaluewidth +
														"px",
											  })
											: a.zoomWindow.css({
													"background-size":
														a.largeWidth /
															a.newvalueheight +
														"px " +
														a.largeHeight /
															a.newvalueheight +
														"px",
											  })),
								(a.changeBgSize = !1)),
						  a.zoomWindow.css({
								backgroundPosition:
									a.windowLeftPos +
									"px " +
									a.windowTopPos +
									"px",
						  }));
		},
		setTintPosition: function (b) {
			this.nzOffset = this.$elem.offset();
			this.tintpos = String(
				-1 * (b.pageX - this.nzOffset.left - this.zoomLens.width() / 2)
			);
			this.tintposy = String(
				-1 * (b.pageY - this.nzOffset.top - this.zoomLens.height() / 2)
			);
			this.Etoppos && (this.tintposy = 0);
			this.Eloppos && (this.tintpos = 0);
			this.Eboppos &&
				(this.tintposy =
					-1 *
					(this.nzHeight -
						this.zoomLens.height() -
						2 * this.options.lensBorderSize));
			this.Eroppos &&
				(this.tintpos =
					-1 *
					(this.nzWidth -
						this.zoomLens.width() -
						2 * this.options.lensBorderSize));
			this.options.tint &&
				(this.fullheight && (this.tintposy = 0),
				this.fullwidth && (this.tintpos = 0),
				this.zoomTintImage.css({
					left: this.tintpos + "px",
				}),
				this.zoomTintImage.css({
					top: this.tintposy + "px",
				}));
		},
		swaptheimage: function (b, a) {
			var c = this,
				e = new Image();
			c.options.loadingIcon &&
				((c.spinner = d(
					"<div style=\"background: url('" +
						c.options.loadingIcon +
						"') no-repeat center;height:" +
						c.nzHeight +
						"px;width:" +
						c.nzWidth +
						'px;z-index: 2000;position: absolute; background-position: center center;"></div>'
				)),
				c.$elem.after(c.spinner));
			c.options.onImageSwap(c.$elem);
			e.onload = function () {
				c.largeWidth = e.width;
				c.largeHeight = e.height;
				c.zoomImage = a;
				c.zoomWindow.css({
					"background-size":
						c.largeWidth + "px " + c.largeHeight + "px",
				});
				c.zoomWindow.css({
					"background-size":
						c.largeWidth + "px " + c.largeHeight + "px",
				});
				c.swapAction(b, a);
			};
			e.src = a;
		},
		swapAction: function (b, a) {
			var c = this,
				e = new Image();
			e.onload = function () {
				c.nzHeight = e.height;
				c.nzWidth = e.width;
				c.options.onImageSwapComplete(c.$elem);
				c.doneCallback();
			};
			e.src = b;
			c.currentZoomLevel = c.options.zoomLevel;
			c.options.maxZoomLevel = !1;
			"lens" == c.options.zoomType &&
				c.zoomLens.css({
					backgroundImage: "url('" + a + "')",
				});
			"window" == c.options.zoomType &&
				c.zoomWindow.css({
					backgroundImage: "url('" + a + "')",
				});
			"inner" == c.options.zoomType &&
				c.zoomWindow.css({
					backgroundImage: "url('" + a + "')",
				});
			c.currentImage = a;
			if (c.options.imageCrossfade) {
				var f = c.$elem,
					g = f.clone();
				c.$elem.attr("src", b);
				c.$elem.after(g);
				g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
					d(this).remove();
				});
				c.$elem.width("auto").removeAttr("width");
				c.$elem.height("auto").removeAttr("height");
				f.fadeIn(c.options.imageCrossfade);
				c.options.tint &&
					"inner" != c.options.zoomType &&
					((f = c.zoomTintImage),
					(g = f.clone()),
					c.zoomTintImage.attr("src", a),
					c.zoomTintImage.after(g),
					g.stop(!0).fadeOut(c.options.imageCrossfade, function () {
						d(this).remove();
					}),
					f.fadeIn(c.options.imageCrossfade),
					c.zoomTint.css({
						height: c.$elem.height(),
					}),
					c.zoomTint.css({
						width: c.$elem.width(),
					}));
				c.zoomContainer.css("height", c.$elem.height());
				c.zoomContainer.css("width", c.$elem.width());
				"inner" != c.options.zoomType ||
					c.options.constrainType ||
					(c.zoomWrap.parent().css("height", c.$elem.height()),
					c.zoomWrap.parent().css("width", c.$elem.width()),
					c.zoomWindow.css("height", c.$elem.height()),
					c.zoomWindow.css("width", c.$elem.width()));
			} else
				c.$elem.attr("src", b),
					c.options.tint &&
						(c.zoomTintImage.attr("src", a),
						c.zoomTintImage.attr("height", c.$elem.height()),
						c.zoomTintImage.css({
							height: c.$elem.height(),
						}),
						c.zoomTint.css({
							height: c.$elem.height(),
						})),
					c.zoomContainer.css("height", c.$elem.height()),
					c.zoomContainer.css("width", c.$elem.width());
			c.options.imageCrossfade &&
				(c.zoomWrap.css("height", c.$elem.height()),
				c.zoomWrap.css("width", c.$elem.width()));
			c.options.constrainType &&
				("height" == c.options.constrainType &&
					(c.zoomContainer.css("height", c.options.constrainSize),
					c.zoomContainer.css("width", "auto"),
					c.options.imageCrossfade
						? (c.zoomWrap.css("height", c.options.constrainSize),
						  c.zoomWrap.css("width", "auto"),
						  (c.constwidth = c.zoomWrap.width()))
						: (c.$elem.css("height", c.options.constrainSize),
						  c.$elem.css("width", "auto"),
						  (c.constwidth = c.$elem.width())),
					"inner" == c.options.zoomType &&
						(c.zoomWrap
							.parent()
							.css("height", c.options.constrainSize),
						c.zoomWrap.parent().css("width", c.constwidth),
						c.zoomWindow.css("height", c.options.constrainSize),
						c.zoomWindow.css("width", c.constwidth)),
					c.options.tint &&
						(c.tintContainer.css("height", c.options.constrainSize),
						c.tintContainer.css("width", c.constwidth),
						c.zoomTint.css("height", c.options.constrainSize),
						c.zoomTint.css("width", c.constwidth),
						c.zoomTintImage.css("height", c.options.constrainSize),
						c.zoomTintImage.css("width", c.constwidth))),
				"width" == c.options.constrainType &&
					(c.zoomContainer.css("height", "auto"),
					c.zoomContainer.css("width", c.options.constrainSize),
					c.options.imageCrossfade
						? (c.zoomWrap.css("height", "auto"),
						  c.zoomWrap.css("width", c.options.constrainSize),
						  (c.constheight = c.zoomWrap.height()))
						: (c.$elem.css("height", "auto"),
						  c.$elem.css("width", c.options.constrainSize),
						  (c.constheight = c.$elem.height())),
					"inner" == c.options.zoomType &&
						(c.zoomWrap.parent().css("height", c.constheight),
						c.zoomWrap
							.parent()
							.css("width", c.options.constrainSize),
						c.zoomWindow.css("height", c.constheight),
						c.zoomWindow.css("width", c.options.constrainSize)),
					c.options.tint &&
						(c.tintContainer.css("height", c.constheight),
						c.tintContainer.css("width", c.options.constrainSize),
						c.zoomTint.css("height", c.constheight),
						c.zoomTint.css("width", c.options.constrainSize),
						c.zoomTintImage.css("height", c.constheight),
						c.zoomTintImage.css(
							"width",
							c.options.constrainSize
						))));
		},
		doneCallback: function () {
			this.options.loadingIcon && this.spinner.hide();
			this.nzOffset = this.$elem.offset();
			this.nzWidth = this.$elem.width();
			this.nzHeight = this.$elem.height();
			this.currentZoomLevel = this.options.zoomLevel;
			this.widthRatio = this.largeWidth / this.nzWidth;
			this.heightRatio = this.largeHeight / this.nzHeight;
			"window" == this.options.zoomType &&
				((lensHeight =
					this.nzHeight <
					this.options.zoomWindowWidth / this.widthRatio
						? this.nzHeight
						: String(
								this.options.zoomWindowHeight / this.heightRatio
						  )),
				(lensWidth =
					this.options.zoomWindowWidth < this.options.zoomWindowWidth
						? this.nzWidth
						: this.options.zoomWindowWidth / this.widthRatio),
				this.zoomLens &&
					(this.zoomLens.css("width", lensWidth),
					this.zoomLens.css("height", lensHeight)));
		},
		getCurrentImage: function () {
			return this.zoomImage;
		},
		getGalleryList: function () {
			var b = this;
			b.gallerylist = [];
			b.options.gallery
				? d("#" + b.options.gallery + " a").each(function () {
						var a = "";
						d(this).data("zoom-image")
							? (a = d(this).data("zoom-image"))
							: d(this).data("image") &&
							  (a = d(this).data("image"));
						a == b.zoomImage
							? b.gallerylist.unshift({
									href: "" + a + "",
									title: d(this).find("img").attr("title"),
							  })
							: b.gallerylist.push({
									href: "" + a + "",
									title: d(this).find("img").attr("title"),
							  });
				  })
				: b.gallerylist.push({
						href: "" + b.zoomImage + "",
						title: d(this).find("img").attr("title"),
				  });
			return b.gallerylist;
		},
		changeZoomLevel: function (b) {
			this.scrollingLock = !0;
			this.newvalue = parseFloat(b).toFixed(2);
			newvalue = parseFloat(b).toFixed(2);
			maxheightnewvalue =
				this.largeHeight /
				((this.options.zoomWindowHeight / this.nzHeight) *
					this.nzHeight);
			maxwidthtnewvalue =
				this.largeWidth /
				((this.options.zoomWindowWidth / this.nzWidth) * this.nzWidth);
			"inner" != this.options.zoomType &&
				(maxheightnewvalue <= newvalue
					? ((this.heightRatio =
							this.largeHeight /
							maxheightnewvalue /
							this.nzHeight),
					  (this.newvalueheight = maxheightnewvalue),
					  (this.fullheight = !0))
					: ((this.heightRatio =
							this.largeHeight / newvalue / this.nzHeight),
					  (this.newvalueheight = newvalue),
					  (this.fullheight = !1)),
				maxwidthtnewvalue <= newvalue
					? ((this.widthRatio =
							this.largeWidth / maxwidthtnewvalue / this.nzWidth),
					  (this.newvaluewidth = maxwidthtnewvalue),
					  (this.fullwidth = !0))
					: ((this.widthRatio =
							this.largeWidth / newvalue / this.nzWidth),
					  (this.newvaluewidth = newvalue),
					  (this.fullwidth = !1)),
				"lens" == this.options.zoomType &&
					(maxheightnewvalue <= newvalue
						? ((this.fullwidth = !0),
						  (this.newvaluewidth = maxheightnewvalue))
						: ((this.widthRatio =
								this.largeWidth / newvalue / this.nzWidth),
						  (this.newvaluewidth = newvalue),
						  (this.fullwidth = !1))));
			"inner" == this.options.zoomType &&
				((maxheightnewvalue = parseFloat(
					this.largeHeight / this.nzHeight
				).toFixed(2)),
				(maxwidthtnewvalue = parseFloat(
					this.largeWidth / this.nzWidth
				).toFixed(2)),
				newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue),
				newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue),
				maxheightnewvalue <= newvalue
					? ((this.heightRatio =
							this.largeHeight / newvalue / this.nzHeight),
					  (this.newvalueheight =
							newvalue > maxheightnewvalue
								? maxheightnewvalue
								: newvalue),
					  (this.fullheight = !0))
					: ((this.heightRatio =
							this.largeHeight / newvalue / this.nzHeight),
					  (this.newvalueheight =
							newvalue > maxheightnewvalue
								? maxheightnewvalue
								: newvalue),
					  (this.fullheight = !1)),
				maxwidthtnewvalue <= newvalue
					? ((this.widthRatio =
							this.largeWidth / newvalue / this.nzWidth),
					  (this.newvaluewidth =
							newvalue > maxwidthtnewvalue
								? maxwidthtnewvalue
								: newvalue),
					  (this.fullwidth = !0))
					: ((this.widthRatio =
							this.largeWidth / newvalue / this.nzWidth),
					  (this.newvaluewidth = newvalue),
					  (this.fullwidth = !1)));
			scrcontinue = !1;
			"inner" == this.options.zoomType &&
				(this.nzWidth > this.nzHeight &&
					(this.newvaluewidth <= maxwidthtnewvalue
						? (scrcontinue = !0)
						: ((scrcontinue = !1),
						  (this.fullwidth = this.fullheight = !0))),
				this.nzHeight > this.nzWidth &&
					(this.newvaluewidth <= maxwidthtnewvalue
						? (scrcontinue = !0)
						: ((scrcontinue = !1),
						  (this.fullwidth = this.fullheight = !0))));
			"inner" != this.options.zoomType && (scrcontinue = !0);
			scrcontinue &&
				((this.zoomLock = 0),
				(this.changeZoom = !0),
				this.options.zoomWindowHeight / this.heightRatio <=
					this.nzHeight &&
					((this.currentZoomLevel = this.newvalueheight),
					"lens" != this.options.zoomType &&
						"inner" != this.options.zoomType &&
						((this.changeBgSize = !0),
						this.zoomLens.css({
							height:
								String(
									this.options.zoomWindowHeight /
										this.heightRatio
								) + "px",
						})),
					"lens" == this.options.zoomType ||
						"inner" == this.options.zoomType) &&
					(this.changeBgSize = !0),
				this.options.zoomWindowWidth / this.widthRatio <=
					this.nzWidth &&
					("inner" != this.options.zoomType &&
						this.newvaluewidth > this.newvalueheight &&
						(this.currentZoomLevel = this.newvaluewidth),
					"lens" != this.options.zoomType &&
						"inner" != this.options.zoomType &&
						((this.changeBgSize = !0),
						this.zoomLens.css({
							width:
								String(
									this.options.zoomWindowWidth /
										this.widthRatio
								) + "px",
						})),
					"lens" == this.options.zoomType ||
						"inner" == this.options.zoomType) &&
					(this.changeBgSize = !0),
				"inner" == this.options.zoomType &&
					((this.changeBgSize = !0),
					this.nzWidth > this.nzHeight &&
						(this.currentZoomLevel = this.newvaluewidth),
					this.nzHeight > this.nzWidth &&
						(this.currentZoomLevel = this.newvaluewidth)));
			this.setPosition(this.currentLoc);
		},
		closeAll: function () {
			self.zoomWindow && self.zoomWindow.hide();
			self.zoomLens && self.zoomLens.hide();
			self.zoomTint && self.zoomTint.hide();
		},
		changeState: function (b) {
			"enable" == b && (this.options.zoomEnabled = !0);
			"disable" == b && (this.options.zoomEnabled = !1);
		},
	};
	d.fn.elevateZoom = function (b) {
		return this.each(function () {
			var a = Object.create(k);
			a.init(b, this);
			d.data(this, "elevateZoom", a);
		});
	};
	d.fn.elevateZoom.options = {
		zoomActivation: "hover",
		zoomEnabled: !0,
		preloading: 1,
		zoomLevel: 1,
		scrollZoom: !1,
		scrollZoomIncrement: 0.1,
		minZoomLevel: !1,
		maxZoomLevel: !1,
		easing: !1,
		easingAmount: 12,
		lensSize: 200,
		zoomWindowWidth: 400,
		zoomWindowHeight: 400,
		zoomWindowOffetx: 0,
		zoomWindowOffety: 0,
		zoomWindowPosition: 1,
		zoomWindowBgColour: "#fff",
		lensFadeIn: !1,
		lensFadeOut: !1,
		debug: !1,
		zoomWindowFadeIn: !1,
		zoomWindowFadeOut: !1,
		zoomWindowAlwaysShow: !1,
		zoomTintFadeIn: !1,
		zoomTintFadeOut: !1,
		borderSize: 4,
		showLens: !0,
		borderColour: "#888",
		lensBorderSize: 1,
		lensBorderColour: "#000000",
		lensShape: "square",
		zoomType: "window",
		containLensZoom: !1,
		lensColour: "white",
		lensOpacity: 0.4,
		lenszoom: !1,
		tint: !1,
		tintColour: "#333",
		tintOpacity: 0.4,
		gallery: !1,
		galleryActiveClass: "zoomGalleryActive",
		imageCrossfade: !1,
		constrainType: !1,
		constrainSize: !1,
		loadingIcon: !1,
		cursor: "default",
		responsive: !0,
		onComplete: d.noop,
		onZoomedImageLoaded: function () {},
		onImageSwap: d.noop,
		onImageSwapComplete: d.noop,
	};
	window.alert = console.log;
})(jQuery, window, document);


/***/ }),

/***/ "./src/arquivos/js/lib/smartResearch.js":
/*!**********************************************!*\
  !*** ./src/arquivos/js/lib/smartResearch.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

/* provided dependency */ var jQuery = __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js");
(function (document, window, $) {
	/**
	 *	Pesquisa Inteligente
	 *	@description Execurar buscas sem recarregar a página
	 *	@author Carlos Vinicius
	 *	@contributor Edson Domingos Júnior
	 *	@contributor Davi Guimarães
	 *	@version 3.11
	 *	@date 2018-09-12
	 */
	"function" !== typeof String.prototype.replaceSpecialChars &&
		(String.prototype.replaceSpecialChars = function () {
			var b = {
				ç: "c",
				æ: "ae",
				œ: "oe",
				á: "a",
				é: "e",
				í: "i",
				ó: "o",
				ú: "u",
				à: "a",
				è: "e",
				ì: "i",
				ò: "o",
				ù: "u",
				ä: "a",
				ë: "e",
				ï: "i",
				ö: "o",
				ü: "u",
				ÿ: "y",
				â: "a",
				ê: "e",
				î: "i",
				ô: "o",
				û: "u",
				å: "a",
				ã: "a",
				ø: "o",
				õ: "o",
				u: "u",
				Á: "A",
				É: "E",
				Í: "I",
				Ó: "O",
				Ú: "U",
				Ê: "E",
				Ô: "O",
				Ü: "U",
				Ã: "A",
				Õ: "O",
				À: "A",
				Ç: "C",
			};
			return this.replace(/[\u00e0-\u00fa]/g, function (a) {
				return "undefined" != typeof b[a] ? b[a] : a;
			});
		});
	"function" !== typeof String.prototype.trim &&
		(String.prototype.trim = function () {
			return this.replace(/^\s+|\s+$/g, "");
		});

	jQuery.fn.vtexSmartResearch = function (opts) {
		var $this = jQuery(this);

		var log = function (msg, type) {
			if (typeof console == "object")
				console.log(
					"[Smart Research - " + (type || "Erro") + "] " + msg
				);
		};

		var defaults = {
			pageLimit: null, // Número máximo de páginas que o script irá retornar. Exemplo "pageLimit=3" só será retornado resultados até a terceira página
			loadContent: ".prateleira[id^=ResultItems]", // Elemento que esta em volta da(s) prateleira(s) de produtos.
			shelfClass: ".prateleira", // Pratelira de produtos (filha do elemento definido de um "loadContent")
			filtersMenu: ".search-multiple-navigator", // Menu com os filtros
			linksMenu: ".search-single-navigator", // Menu de links
			menuDepartament: ".navigation .menu-departamento", // seletor do menu da página de departamentos
			mergeMenu: true, // Define se o menu de links será mesclado com o de filtros será mesclado na página de departamento
			insertMenuAfter: ".search-multiple-navigator h3:first", // O menu de links será inserido após este elemento
			emptySearchElem: jQuery('<div class="vtexsr-emptySearch"></div>'), // Elemento Html (em Objeto jQuery) no qual será adicionado a mensagem de busca vazia
			elemLoading: '<div id="scrollLoading">Carregando ... </div>', // Elemento com mensagem de carregando ao iniciar a requisição da página seguinte
			returnTopText:
				'<span class="text">voltar ao</span><span class="text2">TOPO</span>', // Mensagem de "retornar ao topo"
			emptySearchMsg:
				"<h3>Esta combinação de filtros não retornou nenhum resultado!</h3>", // Html com a mensagem para ser apresentada quando não existirem resultados para os filtros selecionados
			alertFilterErro: true, // exibe aler casso haja erro algum erro de servidor ao aplicar os filtros
			filterErrorMsg: "Houve um erro ao tentar filtrar a página!", // Mensagem de erro exibida quando existe algum erro de servidor ao aplicar os filtros
			searchUrl: null, // Url da página de busca (opicional)
			usePopup: false, // Opção p/ definir se deseja que a mensagem de não localizado seja exibida em um popup
			showLinks: true, // Exibe o menu de links caso o de filtro não seja encontrado
			popupAutoCloseSeconds: 3, // Caso esteja utilizando popup, defina aqui o tempo para que ele feche automaticamente
			filterOnChange: true, // Permite que o filtro seja aplicado assim que a opção é marcada
			filterButtonClass: ".filter-btn", // Classe do botão que terá a ação de filtro caso a "filterOnChange" seja false
			clearButtonClass: ".clear-filter-btn", // Classe para o botão que limpa todos os filtros
			methodPageLoad: "load-more", // valores permitidos ['load-more','pagination','infinit-scroll']
			loadMoreText: "Carregar mais", // Permite que o filtro seja aplicado assim que a opção é marcada
			// Função que retorna o valor p/ onde a página deve rolar quando o usuário marca ou desmarca um filtro
			filterScrollTop: function (shelfOffset) {
				return shelfOffset.top - 20;
			},
			callback: function () {},
			// Cálculo do tamanho do conteúdo/vitrine para que uma nova página seja chamada antes do usuário chegar ao "final" do site
			getShelfHeight: function (container) {
				return container.scrollTop() + container.height();
			},
			// Callback após inserir a prateleira na página
			shelfCallback: function () {},
			// Callback em cada requisição Ajax (Para requisições feitas com sucesso)
			// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados
			ajaxCallback: function () {},
			// Função que é executada quando a seleção de filtros não retorna nenhum resultado
			// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados
			emptySearchCallback: function () {},
			// Função para permitir ou não que o conteúdo de "loadContent" seja atualizado. Esta deve retornar "true" ou "false"
			// Recebe como parâmetro um objeto contendo a quantidade total de requisições feitas e a quantidade de filtros selecionados
			authorizeUpdate: function () {
				return true;
			},
			// Callback de cada laço percorrendo os fildsets e os labels. Retorna um objeto com algumas informações
			labelCallback: function (data) {},
		};

		var options = jQuery.extend(defaults, opts),
			_console = "object" === typeof console,
			$empty = jQuery(""),
			elemLoading = jQuery(options.elemLoading),
			currentPage = 2,
			moreResults = true,
			_window = jQuery(window),
			_document = jQuery(document),
			_html = jQuery("html,body"),
			body = jQuery("body"),
			currentSearchUrl = "",
			urlFilters = "",
			searchUrl = "",
			animatingFilter = false,
			loadContentE = jQuery(options.loadContent),
			filtersMenuE = jQuery(options.filtersMenu),
			ajaxCallbackObj = {
				requests: 0,
				filters: 0,
				isEmpty: false,
			},
			labelCallbackData = {};

		var fn = {
			getUrl: function (scroll) {
				var s = scroll || false;
				if (s)
					return currentSearchUrl.replace(
						/PageNumber=[0-9]*/,
						"PageNumber=" + currentPage
					);
				else
					return (searchUrl + urlFilters).replace(
						/PageNumber=[0-9]*/,
						"PageNumber=" + pageNumber
					);
			},
			getSearchUrl: function () {
				var url, content, preg;
				jQuery("script:not([src])").each(function () {
					content = jQuery(this)[0].innerHTML;
					preg = /\/buscapagina\?.+&PageNumber=/i;
					if (content.search(/\/buscapagina\?/i) > -1) {
						url = preg.exec(content);
						return false;
					}
				});

				if (typeof url !== "undefined" && typeof url[0] !== "undefined")
					return url[0];
				else {
					log(
						"Não foi possível localizar a url de busca da página.\n Tente adicionar o .js ao final da página. \n[Método: getSearchUrl]"
					);
					return "";
				}
			},
			scrollToTop: function () {
				var elem = body.find("#returnToTop");

				if (elem.length < 1) {
					elem = jQuery(
						'<div id="returnToTop"><a href="#">' +
							options.returnTopText +
							'<span class="arrowToTop"></span></a></div>'
					);
					body.append(elem);
				}

				var windowH = _window.height();
				_window.bind("resize", function () {
					windowH = _window.height();
				});
				_window.bind("scroll", function () {
					if (_window.scrollTop() > windowH)
						elem.stop(true).fadeTo(300, 1, function () {
							elem.show();
						});
					else
						elem.stop(true).fadeTo(300, 0, function () {
							elem.hide();
						});
				});
				elem.bind("click", function () {
					_html.animate(
						{
							scrollTop: 0,
						},
						"slow"
					);
					return false;
				});
			},
			infinitScroll: function (paginador) {
				_window.on("scroll", function () {
					var _this = jQuery(this);

					if (paginador.isDisponivelParaNovaBusca()) {
						if (
							_this.scrollTop() + _this.height() >=
							options.getShelfHeight(loadContentE)
						) {
							paginador.proxima();
						}
					} else return false;
				});
			},
			loadMore: function (paginador) {
				var $loadMore = $("<div />", {
					class: "load-more",
				}).insertAfter(loadContentE);
				var btn = $("<button />", {
					class: "btn",
					text: options.loadMoreText,
				}).appendTo($loadMore);

				btn.click(function () {
					if (paginador.isDisponivelParaNovaBusca()) {
						paginador.proxima();
					}
				});

				btn.hide();
				if (moreResults) {
					btn.show();
				}

				$(window).on("vsr-request-init", function () {
					btn.prop("disabled", true).addClass("loading");

					if (!btn.is(":visible") && moreResults) {
						btn.fadeIn();
					}
				});

				$(window).on("vsr-contagem-produtos", function (event, data) {
					var contagemTotal = parseInt(data);
					var totalDeItensNaPagina = loadContentE.find("li[layout]")
						.length;

					if (totalDeItensNaPagina >= contagemTotal) {
						btn.fadeOut();
					}
				});
				$(window).on("vsr-no-more-results", function () {
					btn.fadeOut();
				});
				$(window).on("vsr-more-results", function () {
					btn.fadeIn();
				});
				$(window).on("vsr-request-init", function () {
					btn.prop("disabled", false).removeClass("loading");
				});
			},
			paginated: function (paginador) {
				var buildStructure = function () {
					const paginatedHtml = `
						<div class="paginated-container">
							<ul class="list-pages">
								<li id="first">
									<a href="#1" title="Primeira página">Primeira página</a>
								</li>
								<li id="prev">
									<a href="#${currentPage - 1}" title="Página anterior">Página anterior</a>
								</li>
								${Array(totalPages)
									.fill()
									.map(
										(item, i) => `
									<li id="page-${i + 1}">
										<a href="#${i + 1}" title="Página ${i + 1}">${i + 1}</a>
									</li>
								`
									)
									.join("")}
								<li id="next">
									<a href="#${currentPage + 1}" title="Próxima página">Próxima página</a>
								</li>
								<li id="last">
									<a href="#${totalPages}" title="Última página">Última página</a>
								</li>
							</ul>
						</div>`;
					const paginated = $(paginatedHtml)
						.insertAfter(loadContentE)
						.hide();

					updateButtons();

					if (totalPages > 1) {
						paginated.fadeIn();
					}
				};

				function updateButtons() {
					updateVisibilityButtons();
					updateLinkButons();
				}

				function updateLinkButons() {
					const $pages = $(".paginated-container .list-pages");
					let prev = currentPage <= 1 ? 1 : currentPage - 1;
					let next =
						currentPage >= totalPages
							? totalPages
							: currentPage + 1;

					$pages.find("#prev a").attr("href", `#${prev}`);
					$pages.find("#next a").attr("href", `#${next}`);
				}

				function updateVisibilityButtons() {
					const $pages = $(".paginated-container .list-pages");
					$pages.find("li").removeClass("ativo desativo current");
					$pages.find("#page-" + currentPage).addClass("current");

					// determina quais botões de pagina serão exibidos
					let listPegeAtive = [
						currentPage - 2,
						currentPage - 1,
						currentPage,
						currentPage + 1,
						currentPage + 2,
					];

					switch (currentPage) {
						case totalPages - 1:
							// ativa o link para a 3º pagina anteior
							listPegeAtive.push(currentPage - 3);
							break;
						case totalPages:
							// ativa o link para a 3º e a 4º pagina anteior
							listPegeAtive.push(currentPage - 3);
							listPegeAtive.push(currentPage - 4);
							break;
						case 0:
							// ativa o link para a 3º e a 4º proxima pagina
							listPegeAtive.push(currentPage + 3);
							listPegeAtive.push(currentPage + 4);
							break;
						case 1:
							// ativa o link para a 3º e proxima pagina
							listPegeAtive.push(currentPage + 3);
							break;
						default:
							break;
					}

					let selectorIdsButtonsAtive = listPegeAtive
						.map((item, i) => {
							return `#page-${item}`;
						})
						.join(",");

					$pages.find(selectorIdsButtonsAtive).addClass("ativo");

					// determeina a visibilidade dos botões de acção
					// fitst, prev, next e last
					if (currentPage <= 1) {
						$pages.find("#first,#prev").addClass("desativo");
					}
					if (currentPage >= totalPages) {
						$pages.find("#last,#next").addClass("desativo");
					}
				}

				var getHash = function () {
					var hash = window.location.hash.replace("#", "");
					var cleanHash = parseInt(hash);

					if ($.isNumeric(cleanHash)) {
						if (cleanHash < 0) {
							cleanHash = 1;
						} else if (cleanHash > totalPages) {
							cleanHash = totalPages;
						}
					} else {
						cleanHash = 1;
					}

					return cleanHash;
				};

				currentPage = getHash();
				var productsPerPage = paginador.qtdProductsPerPage();
				var totalPages = paginador.getTotalPaginas();

				buildStructure();

				$(window).on("vsr-contagem-produtos", function (event, data) {
					var newTotalPages = Math.ceil(data / productsPerPage);

					if (newTotalPages != totalPages) {
						totalPages = newTotalPages;

						$(".paginated-container").remove();

						buildStructure();
					}
				});

				$(window).on("vsr-apply-filter", function () {
					currentPage = 1;
					window.location.hash = 1;
				});

				$(window).on("hashchange", function () {
					paginador.getPageByNumber(getHash());
					updateButtons();
				});
			},
			triggerEvent: function (nameEvent, elemento, data) {
				if (undefined == nameEvent) return;

				elemento = elemento || filtersMenuE;
				$(elemento).trigger(nameEvent, data);
			},
			activePageLoad: function () {
				switch (options.methodPageLoad) {
					case "infinit-scroll":
						fn.infinitScroll(paginador);
						break;
					case "pagination":
						fn.paginated(paginador);
						break;
					case "load-more":
					default:
						fn.loadMore(paginador);
						break;
				}
				fn.scrollToTop();
			},
		};
		var paginas = function () {
			var currentStatus = true;
			var numeroEsperadoItens;

			function getParameterByName(name, url) {
				if (!url) url = window.location.href;
				name = name.replace(/[\[\]]/g, "\\$&");
				var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
					results = regex.exec(url);
				if (!results) return null;
				if (!results[2]) return "";
				return decodeURIComponent(results[2].replace(/\+/g, " "));
			}
			numeroEsperadoItens = parseInt(
				getParameterByName("PS", fn.getSearchUrl())
			);

			$(window).on("vsr-no-more-results", function () {
				moreResults = false;
			});
			$(window).on("vsr-more-results", function () {
				moreResults = true;
			});

			var paginador = {
				isDisponivelParaNovaBusca: function () {
					var disponivel =
						!animatingFilter &&
						currentPage <= paginador.getTotalPaginas() &&
						moreResults;

					return disponivel;
				},
				getTotalPaginas: function () {
					var idElementoPaginacao, idPaginacao;

					if (null !== options.pageLimit) {
						return options.pageLimit;
					}

					idElementoPaginacao = body.find(".pager:first").attr("id");
					idPaginacao = (idElementoPaginacao || "").split("_").pop();
					var totalPaginas = window["pagecount_" + idPaginacao];

					if ("undefined" === typeof totalPaginas)
						totalPaginas = 99999999;

					return totalPaginas;
				},
				proxima: function () {
					if (!currentStatus) return null;

					var currentItems = loadContentE
						.find(options.shelfClass)
						.filter(":last");
					currentItems.after(elemLoading);
					currentStatus = false;

					fn.triggerEvent("vsr-request-init", loadContentE);

					pageJqxhr = jQuery.ajax({
						url: fn.getUrl(true),
						success: function (data) {
							var contagemItens = $(data).find("li[layout]")
								.length;

							if (contagemItens > 0) currentItems.after(data);
							if (
								contagemItens > 0 &&
								contagemItens == numeroEsperadoItens
							) {
								fn.triggerEvent("vsr-more-results", _window);
							} else {
								fn.triggerEvent("vsr-no-more-results", _window);
							}

							currentStatus = true;
							elemLoading.remove();
							ajaxCallbackObj.requests++;
							options.ajaxCallback(ajaxCallbackObj);

							fn.triggerEvent("vsr-ajax-sucess", _window);
						},
						complete: function () {
							fn.triggerEvent("vsr-request-end", loadContentE);
						},
					});

					currentPage++;
				},
				getPageByNumber: function (nPagina) {
					if (!currentStatus) return null;

					if (currentPage == nPagina) return null;

					currentPage = nPagina;

					var currentItems = loadContentE
						.find(options.shelfClass)
						.filter(":last");
					currentItems.after(elemLoading);
					currentStatus = false;

					fn.triggerEvent("vsr-request-init", loadContentE);

					pageJqxhr = jQuery.ajax({
						url: fn.getUrl(true),
						success: function (data) {
							var contagemItens = $(data).find("li[layout]")
								.length;

							if (contagemItens > 0) currentItems.after(data);
							currentItems.remove();
							if (
								contagemItens > 0 &&
								contagemItens == numeroEsperadoItens
							) {
								fn.triggerEvent("vsr-more-results", _window);
							} else {
								fn.triggerEvent("vsr-no-more-results", _window);
							}

							currentStatus = true;
							elemLoading.remove();
							ajaxCallbackObj.requests++;
							options.ajaxCallback(ajaxCallbackObj);

							$("html, body").animate(
								{
									scrollTop: 0,
								},
								500
							);

							fn.triggerEvent("vsr-ajax-sucess", _window);
						},
						complete: function () {
							fn.triggerEvent("vsr-request-end", loadContentE);
						},
					});
				},
				qtdProductsPerPage: function (url) {
					if (!url) {
						url = fn.getUrl();
					}

					return parseInt(getParameterByName("PS", fn.getUrl()));
				},
			};
			return paginador;
		};
		var paginador = paginas();

		if (null !== options.searchUrl)
			currentSearchUrl = searchUrl = options.searchUrl;
		else currentSearchUrl = searchUrl = fn.getSearchUrl();

		// Reporting Errors
		if ($this.length < 1) {
			log("Nenhuma opção de filtro encontrada", "Aviso");
			if (options.showLinks) {
				jQuery(options.linksMenu).css("visibility", "visible").show();
			}
			fn.activePageLoad();
			return $this;
		}

		// Reporting Errors
		if (loadContentE.length < 1) {
			log(
				"Elemento para destino da requisição não foi encontrado \n (" +
					loadContentE.selector +
					")"
			);
			return false;
		}
		if (filtersMenuE.length < 1) {
			log(
				"O menu de filtros não foi encontrado \n (" +
					filtersMenuE.selector +
					")"
			);
		}

		var currentUrl = document.location.href,
			linksMenuE = jQuery(options.linksMenu),
			prodOverlay = jQuery('<div class="vtexSr-overlay"></div>'),
			departamentE = jQuery(options.menuDepartament),
			loadContentOffset = loadContentE.offset(),
			pageNumber = 1,
			shelfJqxhr = null,
			pageJqxhr = null;

		options.emptySearchElem.append(options.emptySearchMsg);
		loadContentE.before(prodOverlay);

		var fns = {
			exec: function () {
				fns.setFilterMenu();
				fns.fieldsetFormat();
				$this.each(function () {
					var _this = jQuery(this),
						label = _this.parent();

					if (_this.is(":checked")) {
						urlFilters += "&" + (_this.attr("rel") || "");
						// Adicionando classe ao label
						label.addClass("sr_selected");
					}

					fns.adjustText(_this);
					// Add span vazio (depois de executar de "adjustText")
					label.append(
						'<span class="sr_box"></span><span class="sr_box2"></span>'
					);

					_this.bind("change", function () {
						fns.inputAction();
						if (_this.is(":checked")) {
							fns.addFilter(_this);
						} else {
							fns.removeFilter(_this);
						}
						if (options.filterOnChange) {
							ajaxCallbackObj.filters = $this.filter(
								":checked"
							).length;
						}
					});
				});
				jQuery(options.filterButtonClass).on("click", function () {
					fns.applyFilter();
				});

				jQuery(options.clearButtonClass).on("click", function (e) {
					fns.removeAllFilters(e, this);
				});

				if ("" !== urlFilters) fns.addFilter($empty);

				fns.atualizarPaginador();
				fn.triggerEvent("vsr-complete");
			},
			mergeMenu: function () {
				if (!options.mergeMenu) return false;

				var elem = departamentE;
				elem.insertAfter(options.insertMenuAfter);
				fns.departamentMenuFormat(elem);
			},
			mergeMenuList: function () {
				var i = 0;
				filtersMenuE.find("h3,h4").each(function () {
					var ul = linksMenuE.find("h3,h4").eq(i).next("ul");
					ul.insertAfter(jQuery(this));
					fns.departamentMenuFormat(ul);
					i++;
				});
			},
			departamentMenuFormat: function (elem) {
				elem.find("a").each(function () {
					var a = jQuery(this);
					a.text(fns.removeCounter(a.text()));
				});
			},
			fieldsetFormat: function () {
				labelCallbackData.fieldsetCount = 0;
				labelCallbackData.tmpCurrentLabel = {};

				filtersMenuE.find("fieldset").each(function () {
					var $t = jQuery(this),
						label = $t.find("label"),
						fieldsetClass =
							"filtro_" +
							($t.find("h5:first").text() || "")
								.toLowerCase()
								.replaceSpecialChars()
								.replace(/\s/g, "-");

					labelCallbackData[fieldsetClass] = {};

					// Ocultar fieldset quando não existe filtro e sair desste método
					if (label.length < 1) {
						$t.hide();
						return;
					}

					// Adicionar classe ao fieldset
					$t.addClass(fieldsetClass);

					// Adicionando classe e título ao label
					label.each(function (ndx) {
						var t = jQuery(this),
							v = t.find("input").val() || "",
							labelClass =
								"sr_" +
								v
									.toLowerCase()
									.replaceSpecialChars()
									.replace(/\s/g, "-");

						labelCallbackData.tmpCurrentLabel = {
							fieldsetParent: [$t, fieldsetClass],
							elem: t,
						};

						labelCallbackData[fieldsetClass][ndx.toString()] = {
							className: labelClass,
							title: v,
						};

						t.addClass(labelClass).attr({
							title: v,
							index: ndx,
						});

						options.labelCallback(labelCallbackData);
					});

					labelCallbackData.fieldsetCount++;
				});
			},
			inputAction: function () {
				if (null !== pageJqxhr) pageJqxhr.abort();
				if (null !== shelfJqxhr) shelfJqxhr.abort();
				currentPage = 2;
				moreResults = true;
			},
			applyFilter: function () {
				currentSearchUrl = fn.getUrl();

				fn.triggerEvent(
					"vsr-request-init",
					loadContentE,
					currentSearchUrl
				);
				shelfJqxhr = jQuery.ajax({
					url: currentSearchUrl,
					success: function (data) {
						fns.filterAjaxSuccess(data);
						fn.triggerEvent("vsr-apply-filter", loadContentE);
					},
					error: fns.filterAjaxError,
					complete: function () {
						fn.triggerEvent("vsr-request-end", loadContentE);
					},
				});
			},
			addFilter: function (input) {
				urlFilters += "&" + (input.attr("rel") || "");
				currentSearchUrl = fn.getUrl();
				if (options.filterOnChange) {
					prodOverlay.fadeTo(300, 0.6);
					fns.applyFilter();
					fn.triggerEvent("vsr-add-filter");
				}
				// Adicionando classe ao label
				input.parent().addClass("sr_selected");
			},
			removeAllFilters: function (evt, obj) {
				urlFilters = "";
				$("input:checked")
					.prop("checked", false)
					.parent()
					.removeClass("sr_selected");

				fns.applyFilter();
				fn.triggerEvent("vsr-clean-all-filter");
			},
			removeFilter: function (input) {
				var url = input.attr("rel") || "";
				if (url !== "") urlFilters = urlFilters.replace("&" + url, "");
				if (options.filterOnChange) {
					prodOverlay.fadeTo(300, 0.6);
					fns.applyFilter();
					fn.triggerEvent("vsr-remove-filter");
				}
				// Removendo classe do label
				input.parent().removeClass("sr_selected");
			},
			filterAjaxSuccess: function (data) {
				var $data = jQuery(data);
				prodOverlay.fadeTo(300, 0, function () {
					jQuery(this).hide();
				});
				fns.updateContent($data);

				ajaxCallbackObj.requests++;
				options.ajaxCallback(ajaxCallbackObj);
				_html.animate(
					{
						scrollTop: options.filterScrollTop(
							loadContentOffset || {
								top: 0,
								left: 0,
							}
						),
					},
					600
				);

				fn.triggerEvent("vsr-ajax-sucess", _window);
			},
			filterAjaxError: function () {
				prodOverlay.fadeTo(300, 0, function () {
					jQuery(this).hide();
				});
				if (options.alertFilterErro) {
					alert(options.filterErrorMsg);
				}
				log(
					"Houve um erro ao tentar fazer a requisição da página com filtros."
				);

				fn.triggerEvent("vsr-ajax-fail");
			},
			updateContent: function ($data) {
				animatingFilter = true;

				if (!options.authorizeUpdate(ajaxCallbackObj)) return false;

				var shelf = $data.filter(options.shelfClass);
				var shelfPage = loadContentE.find(options.shelfClass);

				(shelfPage.length > 0
					? shelfPage
					: options.emptySearchElem
				).slideUp(600, function () {
					jQuery(this).remove();

					// Removendo a mensagem de busca vazia, esta remoção "forçada" foi feita para
					// corrigir um bug encontrado ao clicar em vários filtros
					if (options.usePopup) body.find(".boxPopUp2").vtexPopUp2();
					else options.emptySearchElem.remove();

					if (shelf.length > 0) {
						shelf.hide();
						loadContentE.append(shelf);

						options.shelfCallback();
						shelf.slideDown(600, function () {
							animatingFilter = false;
						});
						ajaxCallbackObj.isEmpty = false;
					} else {
						ajaxCallbackObj.isEmpty = true;

						if (options.usePopup)
							options.emptySearchElem
								.addClass(
									"freeContent autoClose ac_" +
										options.popupAutoCloseSeconds
								)
								.vtexPopUp2()
								.stop(true)
								.show();
						else {
							loadContentE.append(options.emptySearchElem);
							options.emptySearchElem
								.show()
								.css("height", "auto")
								.fadeTo(300, 0.2, function () {
									options.emptySearchElem.fadeTo(300, 1);
								});
						}

						options.emptySearchCallback(ajaxCallbackObj);
					}
				});
			},
			adjustText: function (input) {
				var label = input.parent(),
					text = label.text();

				text = fns.removeCounter(text);

				label.text(text).prepend(input);
			},
			removeCounter: function (text) {
				return text.replace(/\([0-9]+\)/gi, function (a) {
					return "";
				});
			},
			setFilterMenu: function () {
				if (filtersMenuE.length > 0) {
					linksMenuE.hide();
					filtersMenuE.show();
				}
			},
			atualizarPaginador: function () {
				$(window).on("vsr-contagem-produtos", function (event, data) {
					var contagemTotal = parseInt(data);
					var totalDeItensNaPagina = loadContentE.find("li[layout]")
						.length;

					if (totalDeItensNaPagina >= contagemTotal) {
						fn.triggerEvent("vsr-no-more-results", _window);
					} else {
						fn.triggerEvent("vsr-more-results", _window);
					}
				});
			},
			contadorDeProdutos: function () {
				$(window).on("vsr-request-init", function (event, data) {
					$(window).one("vsr-request-end", function (event, data) {
						var urlFiltro = currentSearchUrl.replace(
							"/buscapagina",
							""
						);

						var urlAtual =
							"/api/catalog_system/pub/products/search" +
							urlFiltro;

						if (urlAtual.indexOf("?") !== -1) {
							urlAtual = urlAtual + "&_from=1&_to=1";
						} else {
							urlAtual = urlAtual + "?_from=1&_to=1";
						}

						$.get(urlAtual)
							.done(function (data, status, jqXHR) {
								var numeroDeRecursos = jqXHR.getResponseHeader(
									"resources"
								);
								var aux = numeroDeRecursos.split("/");

								var totalDeItens = 0;
								if (aux.length > 1) {
									totalDeItens = aux[1];
								}
								setTimeout(function () {
									fn.triggerEvent(
										"vsr-contagem-produtos",
										loadContentE,
										totalDeItens
									);
								}, 200);
							})
							.fail();
					});
				});
			},
		};

		if (body.hasClass("departamento")) fns.mergeMenu();
		else if (body.hasClass("categoria") || body.hasClass("resultado-busca"))
			fns.mergeMenuList();

		fns.exec();
		fns.contadorDeProdutos();
		fn.activePageLoad();

		options.callback();

		// Exibindo o menu
		filtersMenuE.css("visibility", "visible");
	};
})(document, window, jQuery);


/***/ }),

/***/ "./node_modules/jquery/dist/jquery.js":
/*!********************************************!*\
  !*** ./node_modules/jquery/dist/jquery.js ***!
  \********************************************/
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
 * jQuery JavaScript Library v1.12.4
 * http://jquery.com/
 *
 * Includes Sizzle.js
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2016-05-20T17:17Z
 */

(function( global, factory ) {

	if (  true && typeof module.exports === "object" ) {
		// For CommonJS and CommonJS-like environments where a proper `window`
		// is present, execute the factory and get jQuery.
		// For environments that do not have a `window` with a `document`
		// (such as Node.js), expose a factory as module.exports.
		// This accentuates the need for the creation of a real `window`.
		// e.g. var jQuery = require("jquery")(window);
		// See ticket #14549 for more info.
		module.exports = global.document ?
			factory( global, true ) :
			function( w ) {
				if ( !w.document ) {
					throw new Error( "jQuery requires a window with a document" );
				}
				return factory( w );
			};
	} else {
		factory( global );
	}

// Pass this if window is not defined yet
}(typeof window !== "undefined" ? window : this, function( window, noGlobal ) {

// Support: Firefox 18+
// Can't be in strict mode, several libs including ASP.NET trace
// the stack via arguments.caller.callee and Firefox dies if
// you try to trace through "use strict" call chains. (#13335)
//"use strict";
var deletedIds = [];

var document = window.document;

var slice = deletedIds.slice;

var concat = deletedIds.concat;

var push = deletedIds.push;

var indexOf = deletedIds.indexOf;

var class2type = {};

var toString = class2type.toString;

var hasOwn = class2type.hasOwnProperty;

var support = {};



var
	version = "1.12.4",

	// Define a local copy of jQuery
	jQuery = function( selector, context ) {

		// The jQuery object is actually just the init constructor 'enhanced'
		// Need init if jQuery is called (just allow error to be thrown if not included)
		return new jQuery.fn.init( selector, context );
	},

	// Support: Android<4.1, IE<9
	// Make sure we trim BOM and NBSP
	rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,

	// Matches dashed string for camelizing
	rmsPrefix = /^-ms-/,
	rdashAlpha = /-([\da-z])/gi,

	// Used by jQuery.camelCase as callback to replace()
	fcamelCase = function( all, letter ) {
		return letter.toUpperCase();
	};

jQuery.fn = jQuery.prototype = {

	// The current version of jQuery being used
	jquery: version,

	constructor: jQuery,

	// Start with an empty selector
	selector: "",

	// The default length of a jQuery object is 0
	length: 0,

	toArray: function() {
		return slice.call( this );
	},

	// Get the Nth element in the matched element set OR
	// Get the whole matched element set as a clean array
	get: function( num ) {
		return num != null ?

			// Return just the one element from the set
			( num < 0 ? this[ num + this.length ] : this[ num ] ) :

			// Return all the elements in a clean array
			slice.call( this );
	},

	// Take an array of elements and push it onto the stack
	// (returning the new matched element set)
	pushStack: function( elems ) {

		// Build a new jQuery matched element set
		var ret = jQuery.merge( this.constructor(), elems );

		// Add the old object onto the stack (as a reference)
		ret.prevObject = this;
		ret.context = this.context;

		// Return the newly-formed element set
		return ret;
	},

	// Execute a callback for every element in the matched set.
	each: function( callback ) {
		return jQuery.each( this, callback );
	},

	map: function( callback ) {
		return this.pushStack( jQuery.map( this, function( elem, i ) {
			return callback.call( elem, i, elem );
		} ) );
	},

	slice: function() {
		return this.pushStack( slice.apply( this, arguments ) );
	},

	first: function() {
		return this.eq( 0 );
	},

	last: function() {
		return this.eq( -1 );
	},

	eq: function( i ) {
		var len = this.length,
			j = +i + ( i < 0 ? len : 0 );
		return this.pushStack( j >= 0 && j < len ? [ this[ j ] ] : [] );
	},

	end: function() {
		return this.prevObject || this.constructor();
	},

	// For internal use only.
	// Behaves like an Array's method, not like a jQuery method.
	push: push,
	sort: deletedIds.sort,
	splice: deletedIds.splice
};

jQuery.extend = jQuery.fn.extend = function() {
	var src, copyIsArray, copy, name, options, clone,
		target = arguments[ 0 ] || {},
		i = 1,
		length = arguments.length,
		deep = false;

	// Handle a deep copy situation
	if ( typeof target === "boolean" ) {
		deep = target;

		// skip the boolean and the target
		target = arguments[ i ] || {};
		i++;
	}

	// Handle case when target is a string or something (possible in deep copy)
	if ( typeof target !== "object" && !jQuery.isFunction( target ) ) {
		target = {};
	}

	// extend jQuery itself if only one argument is passed
	if ( i === length ) {
		target = this;
		i--;
	}

	for ( ; i < length; i++ ) {

		// Only deal with non-null/undefined values
		if ( ( options = arguments[ i ] ) != null ) {

			// Extend the base object
			for ( name in options ) {
				src = target[ name ];
				copy = options[ name ];

				// Prevent never-ending loop
				if ( target === copy ) {
					continue;
				}

				// Recurse if we're merging plain objects or arrays
				if ( deep && copy && ( jQuery.isPlainObject( copy ) ||
					( copyIsArray = jQuery.isArray( copy ) ) ) ) {

					if ( copyIsArray ) {
						copyIsArray = false;
						clone = src && jQuery.isArray( src ) ? src : [];

					} else {
						clone = src && jQuery.isPlainObject( src ) ? src : {};
					}

					// Never move original objects, clone them
					target[ name ] = jQuery.extend( deep, clone, copy );

				// Don't bring in undefined values
				} else if ( copy !== undefined ) {
					target[ name ] = copy;
				}
			}
		}
	}

	// Return the modified object
	return target;
};

jQuery.extend( {

	// Unique for each copy of jQuery on the page
	expando: "jQuery" + ( version + Math.random() ).replace( /\D/g, "" ),

	// Assume jQuery is ready without the ready module
	isReady: true,

	error: function( msg ) {
		throw new Error( msg );
	},

	noop: function() {},

	// See test/unit/core.js for details concerning isFunction.
	// Since version 1.3, DOM methods and functions like alert
	// aren't supported. They return false on IE (#2968).
	isFunction: function( obj ) {
		return jQuery.type( obj ) === "function";
	},

	isArray: Array.isArray || function( obj ) {
		return jQuery.type( obj ) === "array";
	},

	isWindow: function( obj ) {
		/* jshint eqeqeq: false */
		return obj != null && obj == obj.window;
	},

	isNumeric: function( obj ) {

		// parseFloat NaNs numeric-cast false positives (null|true|false|"")
		// ...but misinterprets leading-number strings, particularly hex literals ("0x...")
		// subtraction forces infinities to NaN
		// adding 1 corrects loss of precision from parseFloat (#15100)
		var realStringObj = obj && obj.toString();
		return !jQuery.isArray( obj ) && ( realStringObj - parseFloat( realStringObj ) + 1 ) >= 0;
	},

	isEmptyObject: function( obj ) {
		var name;
		for ( name in obj ) {
			return false;
		}
		return true;
	},

	isPlainObject: function( obj ) {
		var key;

		// Must be an Object.
		// Because of IE, we also have to check the presence of the constructor property.
		// Make sure that DOM nodes and window objects don't pass through, as well
		if ( !obj || jQuery.type( obj ) !== "object" || obj.nodeType || jQuery.isWindow( obj ) ) {
			return false;
		}

		try {

			// Not own constructor property must be Object
			if ( obj.constructor &&
				!hasOwn.call( obj, "constructor" ) &&
				!hasOwn.call( obj.constructor.prototype, "isPrototypeOf" ) ) {
				return false;
			}
		} catch ( e ) {

			// IE8,9 Will throw exceptions on certain host objects #9897
			return false;
		}

		// Support: IE<9
		// Handle iteration over inherited properties before own properties.
		if ( !support.ownFirst ) {
			for ( key in obj ) {
				return hasOwn.call( obj, key );
			}
		}

		// Own properties are enumerated firstly, so to speed up,
		// if last one is own, then all properties are own.
		for ( key in obj ) {}

		return key === undefined || hasOwn.call( obj, key );
	},

	type: function( obj ) {
		if ( obj == null ) {
			return obj + "";
		}
		return typeof obj === "object" || typeof obj === "function" ?
			class2type[ toString.call( obj ) ] || "object" :
			typeof obj;
	},

	// Workarounds based on findings by Jim Driscoll
	// http://weblogs.java.net/blog/driscoll/archive/2009/09/08/eval-javascript-global-context
	globalEval: function( data ) {
		if ( data && jQuery.trim( data ) ) {

			// We use execScript on Internet Explorer
			// We use an anonymous function so that context is window
			// rather than jQuery in Firefox
			( window.execScript || function( data ) {
				window[ "eval" ].call( window, data ); // jscs:ignore requireDotNotation
			} )( data );
		}
	},

	// Convert dashed to camelCase; used by the css and data modules
	// Microsoft forgot to hump their vendor prefix (#9572)
	camelCase: function( string ) {
		return string.replace( rmsPrefix, "ms-" ).replace( rdashAlpha, fcamelCase );
	},

	nodeName: function( elem, name ) {
		return elem.nodeName && elem.nodeName.toLowerCase() === name.toLowerCase();
	},

	each: function( obj, callback ) {
		var length, i = 0;

		if ( isArrayLike( obj ) ) {
			length = obj.length;
			for ( ; i < length; i++ ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		} else {
			for ( i in obj ) {
				if ( callback.call( obj[ i ], i, obj[ i ] ) === false ) {
					break;
				}
			}
		}

		return obj;
	},

	// Support: Android<4.1, IE<9
	trim: function( text ) {
		return text == null ?
			"" :
			( text + "" ).replace( rtrim, "" );
	},

	// results is for internal usage only
	makeArray: function( arr, results ) {
		var ret = results || [];

		if ( arr != null ) {
			if ( isArrayLike( Object( arr ) ) ) {
				jQuery.merge( ret,
					typeof arr === "string" ?
					[ arr ] : arr
				);
			} else {
				push.call( ret, arr );
			}
		}

		return ret;
	},

	inArray: function( elem, arr, i ) {
		var len;

		if ( arr ) {
			if ( indexOf ) {
				return indexOf.call( arr, elem, i );
			}

			len = arr.length;
			i = i ? i < 0 ? Math.max( 0, len + i ) : i : 0;

			for ( ; i < len; i++ ) {

				// Skip accessing in sparse arrays
				if ( i in arr && arr[ i ] === elem ) {
					return i;
				}
			}
		}

		return -1;
	},

	merge: function( first, second ) {
		var len = +second.length,
			j = 0,
			i = first.length;

		while ( j < len ) {
			first[ i++ ] = second[ j++ ];
		}

		// Support: IE<9
		// Workaround casting of .length to NaN on otherwise arraylike objects (e.g., NodeLists)
		if ( len !== len ) {
			while ( second[ j ] !== undefined ) {
				first[ i++ ] = second[ j++ ];
			}
		}

		first.length = i;

		return first;
	},

	grep: function( elems, callback, invert ) {
		var callbackInverse,
			matches = [],
			i = 0,
			length = elems.length,
			callbackExpect = !invert;

		// Go through the array, only saving the items
		// that pass the validator function
		for ( ; i < length; i++ ) {
			callbackInverse = !callback( elems[ i ], i );
			if ( callbackInverse !== callbackExpect ) {
				matches.push( elems[ i ] );
			}
		}

		return matches;
	},

	// arg is for internal usage only
	map: function( elems, callback, arg ) {
		var length, value,
			i = 0,
			ret = [];

		// Go through the array, translating each of the items to their new values
		if ( isArrayLike( elems ) ) {
			length = elems.length;
			for ( ; i < length; i++ ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}

		// Go through every key on the object,
		} else {
			for ( i in elems ) {
				value = callback( elems[ i ], i, arg );

				if ( value != null ) {
					ret.push( value );
				}
			}
		}

		// Flatten any nested arrays
		return concat.apply( [], ret );
	},

	// A global GUID counter for objects
	guid: 1,

	// Bind a function to a context, optionally partially applying any
	// arguments.
	proxy: function( fn, context ) {
		var args, proxy, tmp;

		if ( typeof context === "string" ) {
			tmp = fn[ context ];
			context = fn;
			fn = tmp;
		}

		// Quick check to determine if target is callable, in the spec
		// this throws a TypeError, but we will just return undefined.
		if ( !jQuery.isFunction( fn ) ) {
			return undefined;
		}

		// Simulated bind
		args = slice.call( arguments, 2 );
		proxy = function() {
			return fn.apply( context || this, args.concat( slice.call( arguments ) ) );
		};

		// Set the guid of unique handler to the same of original handler, so it can be removed
		proxy.guid = fn.guid = fn.guid || jQuery.guid++;

		return proxy;
	},

	now: function() {
		return +( new Date() );
	},

	// jQuery.support is not used in Core but other projects attach their
	// properties to it so it needs to exist.
	support: support
} );

// JSHint would error on this code due to the Symbol not being defined in ES5.
// Defining this global in .jshintrc would create a danger of using the global
// unguarded in another place, it seems safer to just disable JSHint for these
// three lines.
/* jshint ignore: start */
if ( typeof Symbol === "function" ) {
	jQuery.fn[ Symbol.iterator ] = deletedIds[ Symbol.iterator ];
}
/* jshint ignore: end */

// Populate the class2type map
jQuery.each( "Boolean Number String Function Array Date RegExp Object Error Symbol".split( " " ),
function( i, name ) {
	class2type[ "[object " + name + "]" ] = name.toLowerCase();
} );

function isArrayLike( obj ) {

	// Support: iOS 8.2 (not reproducible in simulator)
	// `in` check used to prevent JIT error (gh-2145)
	// hasOwn isn't used here due to false negatives
	// regarding Nodelist length in IE
	var length = !!obj && "length" in obj && obj.length,
		type = jQuery.type( obj );

	if ( type === "function" || jQuery.isWindow( obj ) ) {
		return false;
	}

	return type === "array" || length === 0 ||
		typeof length === "number" && length > 0 && ( length - 1 ) in obj;
}
var Sizzle =
/*!
 * Sizzle CSS Selector Engine v2.2.1
 * http://sizzlejs.com/
 *
 * Copyright jQuery Foundation and other contributors
 * Released under the MIT license
 * http://jquery.org/license
 *
 * Date: 2015-10-17
 */
(function( window ) {

var i,
	support,
	Expr,
	getText,
	isXML,
	tokenize,
	compile,
	select,
	outermostContext,
	sortInput,
	hasDuplicate,

	// Local document vars
	setDocument,
	document,
	docElem,
	documentIsHTML,
	rbuggyQSA,
	rbuggyMatches,
	matches,
	contains,

	// Instance-specific data
	expando = "sizzle" + 1 * new Date(),
	preferredDoc = window.document,
	dirruns = 0,
	done = 0,
	classCache = createCache(),
	tokenCache = createCache(),
	compilerCache = createCache(),
	sortOrder = function( a, b ) {
		if ( a === b ) {
			hasDuplicate = true;
		}
		return 0;
	},

	// General-purpose constants
	MAX_NEGATIVE = 1 << 31,

	// Instance methods
	hasOwn = ({}).hasOwnProperty,
	arr = [],
	pop = arr.pop,
	push_native = arr.push,
	push = arr.push,
	slice = arr.slice,
	// Use a stripped-down indexOf as it's faster than native
	// http://jsperf.com/thor-indexof-vs-for/5
	indexOf = function( list, elem ) {
		var i = 0,
			len = list.length;
		for ( ; i < len; i++ ) {
			if ( list[i] === elem ) {
				return i;
			}
		}
		return -1;
	},

	booleans = "checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",

	// Regular expressions

	// http://www.w3.org/TR/css3-selectors/#whitespace
	whitespace = "[\\x20\\t\\r\\n\\f]",

	// http://www.w3.org/TR/CSS21/syndata.html#value-def-identifier
	identifier = "(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",

	// Attribute selectors: http://www.w3.org/TR/selectors/#attribute-selectors
	attributes = "\\[" + whitespace + "*(" + identifier + ")(?:" + whitespace +
		// Operator (capture 2)
		"*([*^$|!~]?=)" + whitespace +
		// "Attribute values must be CSS identifiers [capture 5] or strings [capture 3 or capture 4]"
		"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|(" + identifier + "))|)" + whitespace +
		"*\\]",

	pseudos = ":(" + identifier + ")(?:\\((" +
		// To reduce the number of selectors needing tokenize in the preFilter, prefer arguments:
		// 1. quoted (capture 3; capture 4 or capture 5)
		"('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|" +
		// 2. simple (capture 6)
		"((?:\\\\.|[^\\\\()[\\]]|" + attributes + ")*)|" +
		// 3. anything else (capture 2)
		".*" +
		")\\)|)",

	// Leading and non-escaped trailing whitespace, capturing some non-whitespace characters preceding the latter
	rwhitespace = new RegExp( whitespace + "+", "g" ),
	rtrim = new RegExp( "^" + whitespace + "+|((?:^|[^\\\\])(?:\\\\.)*)" + whitespace + "+$", "g" ),

	rcomma = new RegExp( "^" + whitespace + "*," + whitespace + "*" ),
	rcombinators = new RegExp( "^" + whitespace + "*([>+~]|" + whitespace + ")" + whitespace + "*" ),

	rattributeQuotes = new RegExp( "=" + whitespace + "*([^\\]'\"]*?)" + whitespace + "*\\]", "g" ),

	rpseudo = new RegExp( pseudos ),
	ridentifier = new RegExp( "^" + identifier + "$" ),

	matchExpr = {
		"ID": new RegExp( "^#(" + identifier + ")" ),
		"CLASS": new RegExp( "^\\.(" + identifier + ")" ),
		"TAG": new RegExp( "^(" + identifier + "|[*])" ),
		"ATTR": new RegExp( "^" + attributes ),
		"PSEUDO": new RegExp( "^" + pseudos ),
		"CHILD": new RegExp( "^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\(" + whitespace +
			"*(even|odd|(([+-]|)(\\d*)n|)" + whitespace + "*(?:([+-]|)" + whitespace +
			"*(\\d+)|))" + whitespace + "*\\)|)", "i" ),
		"bool": new RegExp( "^(?:" + booleans + ")$", "i" ),
		// For use in libraries implementing .is()
		// We use this for POS matching in `select`
		"needsContext": new RegExp( "^" + whitespace + "*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\(" +
			whitespace + "*((?:-\\d)?\\d*)" + whitespace + "*\\)|)(?=[^-]|$)", "i" )
	},

	rinputs = /^(?:input|select|textarea|button)$/i,
	rheader = /^h\d$/i,

	rnative = /^[^{]+\{\s*\[native \w/,

	// Easily-parseable/retrievable ID or TAG or CLASS selectors
	rquickExpr = /^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,

	rsibling = /[+~]/,
	rescape = /'|\\/g,

	// CSS escapes http://www.w3.org/TR/CSS21/syndata.html#escaped-characters
	runescape = new RegExp( "\\\\([\\da-f]{1,6}" + whitespace + "?|(" + whitespace + ")|.)", "ig" ),
	funescape = function( _, escaped, escapedWhitespace ) {
		var high = "0x" + escaped - 0x10000;
		// NaN means non-codepoint
		// Support: Firefox<24
		// Workaround erroneous numeric interpretation of +"0x"
		return high !== high || escapedWhitespace ?
			escaped :
			high < 0 ?
				// BMP codepoint
				String.fromCharCode( high + 0x10000 ) :
				// Supplemental Plane codepoint (surrogate pair)
				String.fromCharCode( high >> 10 | 0xD800, high & 0x3FF | 0xDC00 );
	},

	// Used for iframes
	// See setDocument()
	// Removing the function wrapper causes a "Permission Denied"
	// error in IE
	unloadHandler = function() {
		setDocument();
	};

// Optimize for push.apply( _, NodeList )
try {
	push.apply(
		(arr = slice.call( preferredDoc.childNodes )),
		preferredDoc.childNodes
	);
	// Support: Android<4.0
	// Detect silently failing push.apply
	arr[ preferredDoc.childNodes.length ].nodeType;
} catch ( e ) {
	push = { apply: arr.length ?

		// Leverage slice if possible
		function( target, els ) {
			push_native.apply( target, slice.call(els) );
		} :

		// Support: IE<9
		// Otherwise append directly
		function( target, els ) {
			var j = target.length,
				i = 0;
			// Can't trust NodeList.length
			while ( (target[j++] = els[i++]) ) {}
			target.length = j - 1;
		}
	};
}

function Sizzle( selector, context, results, seed ) {
	var m, i, elem, nid, nidselect, match, groups, newSelector,
		newContext = context && context.ownerDocument,

		// nodeType defaults to 9, since context defaults to document
		nodeType = context ? context.nodeType : 9;

	results = results || [];

	// Return early from calls with invalid selector or context
	if ( typeof selector !== "string" || !selector ||
		nodeType !== 1 && nodeType !== 9 && nodeType !== 11 ) {

		return results;
	}

	// Try to shortcut find operations (as opposed to filters) in HTML documents
	if ( !seed ) {

		if ( ( context ? context.ownerDocument || context : preferredDoc ) !== document ) {
			setDocument( context );
		}
		context = context || document;

		if ( documentIsHTML ) {

			// If the selector is sufficiently simple, try using a "get*By*" DOM method
			// (excepting DocumentFragment context, where the methods don't exist)
			if ( nodeType !== 11 && (match = rquickExpr.exec( selector )) ) {

				// ID selector
				if ( (m = match[1]) ) {

					// Document context
					if ( nodeType === 9 ) {
						if ( (elem = context.getElementById( m )) ) {

							// Support: IE, Opera, Webkit
							// TODO: identify versions
							// getElementById can match elements by name instead of ID
							if ( elem.id === m ) {
								results.push( elem );
								return results;
							}
						} else {
							return results;
						}

					// Element context
					} else {

						// Support: IE, Opera, Webkit
						// TODO: identify versions
						// getElementById can match elements by name instead of ID
						if ( newContext && (elem = newContext.getElementById( m )) &&
							contains( context, elem ) &&
							elem.id === m ) {

							results.push( elem );
							return results;
						}
					}

				// Type selector
				} else if ( match[2] ) {
					push.apply( results, context.getElementsByTagName( selector ) );
					return results;

				// Class selector
				} else if ( (m = match[3]) && support.getElementsByClassName &&
					context.getElementsByClassName ) {

					push.apply( results, context.getElementsByClassName( m ) );
					return results;
				}
			}

			// Take advantage of querySelectorAll
			if ( support.qsa &&
				!compilerCache[ selector + " " ] &&
				(!rbuggyQSA || !rbuggyQSA.test( selector )) ) {

				if ( nodeType !== 1 ) {
					newContext = context;
					newSelector = selector;

				// qSA looks outside Element context, which is not what we want
				// Thanks to Andrew Dupont for this workaround technique
				// Support: IE <=8
				// Exclude object elements
				} else if ( context.nodeName.toLowerCase() !== "object" ) {

					// Capture the context ID, setting it first if necessary
					if ( (nid = context.getAttribute( "id" )) ) {
						nid = nid.replace( rescape, "\\$&" );
					} else {
						context.setAttribute( "id", (nid = expando) );
					}

					// Prefix every selector in the list
					groups = tokenize( selector );
					i = groups.length;
					nidselect = ridentifier.test( nid ) ? "#" + nid : "[id='" + nid + "']";
					while ( i-- ) {
						groups[i] = nidselect + " " + toSelector( groups[i] );
					}
					newSelector = groups.join( "," );

					// Expand context for sibling selectors
					newContext = rsibling.test( selector ) && testContext( context.parentNode ) ||
						context;
				}

				if ( newSelector ) {
					try {
						push.apply( results,
							newContext.querySelectorAll( newSelector )
						);
						return results;
					} catch ( qsaError ) {
					} finally {
						if ( nid === expando ) {
							context.removeAttribute( "id" );
						}
					}
				}
			}
		}
	}

	// All others
	return select( selector.replace( rtrim, "$1" ), context, results, seed );
}

/**
 * Create key-value caches of limited size
 * @returns {function(string, object)} Returns the Object data after storing it on itself with
 *	property name the (space-suffixed) string and (if the cache is larger than Expr.cacheLength)
 *	deleting the oldest entry
 */
function createCache() {
	var keys = [];

	function cache( key, value ) {
		// Use (key + " ") to avoid collision with native prototype properties (see Issue #157)
		if ( keys.push( key + " " ) > Expr.cacheLength ) {
			// Only keep the most recent entries
			delete cache[ keys.shift() ];
		}
		return (cache[ key + " " ] = value);
	}
	return cache;
}

/**
 * Mark a function for special use by Sizzle
 * @param {Function} fn The function to mark
 */
function markFunction( fn ) {
	fn[ expando ] = true;
	return fn;
}

/**
 * Support testing using an element
 * @param {Function} fn Passed the created div and expects a boolean result
 */
function assert( fn ) {
	var div = document.createElement("div");

	try {
		return !!fn( div );
	} catch (e) {
		return false;
	} finally {
		// Remove from its parent by default
		if ( div.parentNode ) {
			div.parentNode.removeChild( div );
		}
		// release memory in IE
		div = null;
	}
}

/**
 * Adds the same handler for all of the specified attrs
 * @param {String} attrs Pipe-separated list of attributes
 * @param {Function} handler The method that will be applied
 */
function addHandle( attrs, handler ) {
	var arr = attrs.split("|"),
		i = arr.length;

	while ( i-- ) {
		Expr.attrHandle[ arr[i] ] = handler;
	}
}

/**
 * Checks document order of two siblings
 * @param {Element} a
 * @param {Element} b
 * @returns {Number} Returns less than 0 if a precedes b, greater than 0 if a follows b
 */
function siblingCheck( a, b ) {
	var cur = b && a,
		diff = cur && a.nodeType === 1 && b.nodeType === 1 &&
			( ~b.sourceIndex || MAX_NEGATIVE ) -
			( ~a.sourceIndex || MAX_NEGATIVE );

	// Use IE sourceIndex if available on both nodes
	if ( diff ) {
		return diff;
	}

	// Check if b follows a
	if ( cur ) {
		while ( (cur = cur.nextSibling) ) {
			if ( cur === b ) {
				return -1;
			}
		}
	}

	return a ? 1 : -1;
}

/**
 * Returns a function to use in pseudos for input types
 * @param {String} type
 */
function createInputPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return name === "input" && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for buttons
 * @param {String} type
 */
function createButtonPseudo( type ) {
	return function( elem ) {
		var name = elem.nodeName.toLowerCase();
		return (name === "input" || name === "button") && elem.type === type;
	};
}

/**
 * Returns a function to use in pseudos for positionals
 * @param {Function} fn
 */
function createPositionalPseudo( fn ) {
	return markFunction(function( argument ) {
		argument = +argument;
		return markFunction(function( seed, matches ) {
			var j,
				matchIndexes = fn( [], seed.length, argument ),
				i = matchIndexes.length;

			// Match elements found at the specified indexes
			while ( i-- ) {
				if ( seed[ (j = matchIndexes[i]) ] ) {
					seed[j] = !(matches[j] = seed[j]);
				}
			}
		});
	});
}

/**
 * Checks a node for validity as a Sizzle context
 * @param {Element|Object=} context
 * @returns {Element|Object|Boolean} The input node if acceptable, otherwise a falsy value
 */
function testContext( context ) {
	return context && typeof context.getElementsByTagName !== "undefined" && context;
}

// Expose support vars for convenience
support = Sizzle.support = {};

/**
 * Detects XML nodes
 * @param {Element|Object} elem An element or a document
 * @returns {Boolean} True iff elem is a non-HTML XML node
 */
isXML = Sizzle.isXML = function( elem ) {
	// documentElement is verified for cases where it doesn't yet exist
	// (such as loading iframes in IE - #4833)
	var documentElement = elem && (elem.ownerDocument || elem).documentElement;
	return documentElement ? documentElement.nodeName !== "HTML" : false;
};

/**
 * Sets document-related variables once based on the current document
 * @param {Element|Object} [doc] An element or document object to use to set the document
 * @returns {Object} Returns the current document
 */
setDocument = Sizzle.setDocument = function( node ) {
	var hasCompare, parent,
		doc = node ? node.ownerDocument || node : preferredDoc;

	// Return early if doc is invalid or already selected
	if ( doc === document || doc.nodeType !== 9 || !doc.documentElement ) {
		return document;
	}

	// Update global variables
	document = doc;
	docElem = document.documentElement;
	documentIsHTML = !isXML( document );

	// Support: IE 9-11, Edge
	// Accessing iframe documents after unload throws "permission denied" errors (jQuery #13936)
	if ( (parent = document.defaultView) && parent.top !== parent ) {
		// Support: IE 11
		if ( parent.addEventListener ) {
			parent.addEventListener( "unload", unloadHandler, false );

		// Support: IE 9 - 10 only
		} else if ( parent.attachEvent ) {
			parent.attachEvent( "onunload", unloadHandler );
		}
	}

	/* Attributes
	---------------------------------------------------------------------- */

	// Support: IE<8
	// Verify that getAttribute really returns attributes and not properties
	// (excepting IE8 booleans)
	support.attributes = assert(function( div ) {
		div.className = "i";
		return !div.getAttribute("className");
	});

	/* getElement(s)By*
	---------------------------------------------------------------------- */

	// Check if getElementsByTagName("*") returns only elements
	support.getElementsByTagName = assert(function( div ) {
		div.appendChild( document.createComment("") );
		return !div.getElementsByTagName("*").length;
	});

	// Support: IE<9
	support.getElementsByClassName = rnative.test( document.getElementsByClassName );

	// Support: IE<10
	// Check if getElementById returns elements by name
	// The broken getElementById methods don't pick up programatically-set names,
	// so use a roundabout getElementsByName test
	support.getById = assert(function( div ) {
		docElem.appendChild( div ).id = expando;
		return !document.getElementsByName || !document.getElementsByName( expando ).length;
	});

	// ID find and filter
	if ( support.getById ) {
		Expr.find["ID"] = function( id, context ) {
			if ( typeof context.getElementById !== "undefined" && documentIsHTML ) {
				var m = context.getElementById( id );
				return m ? [ m ] : [];
			}
		};
		Expr.filter["ID"] = function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				return elem.getAttribute("id") === attrId;
			};
		};
	} else {
		// Support: IE6/7
		// getElementById is not reliable as a find shortcut
		delete Expr.find["ID"];

		Expr.filter["ID"] =  function( id ) {
			var attrId = id.replace( runescape, funescape );
			return function( elem ) {
				var node = typeof elem.getAttributeNode !== "undefined" &&
					elem.getAttributeNode("id");
				return node && node.value === attrId;
			};
		};
	}

	// Tag
	Expr.find["TAG"] = support.getElementsByTagName ?
		function( tag, context ) {
			if ( typeof context.getElementsByTagName !== "undefined" ) {
				return context.getElementsByTagName( tag );

			// DocumentFragment nodes don't have gEBTN
			} else if ( support.qsa ) {
				return context.querySelectorAll( tag );
			}
		} :

		function( tag, context ) {
			var elem,
				tmp = [],
				i = 0,
				// By happy coincidence, a (broken) gEBTN appears on DocumentFragment nodes too
				results = context.getElementsByTagName( tag );

			// Filter out possible comments
			if ( tag === "*" ) {
				while ( (elem = results[i++]) ) {
					if ( elem.nodeType === 1 ) {
						tmp.push( elem );
					}
				}

				return tmp;
			}
			return results;
		};

	// Class
	Expr.find["CLASS"] = support.getElementsByClassName && function( className, context ) {
		if ( typeof context.getElementsByClassName !== "undefined" && documentIsHTML ) {
			return context.getElementsByClassName( className );
		}
	};

	/* QSA/matchesSelector
	---------------------------------------------------------------------- */

	// QSA and matchesSelector support

	// matchesSelector(:active) reports false when true (IE9/Opera 11.5)
	rbuggyMatches = [];

	// qSa(:focus) reports false when true (Chrome 21)
	// We allow this because of a bug in IE8/9 that throws an error
	// whenever `document.activeElement` is accessed on an iframe
	// So, we allow :focus to pass through QSA all the time to avoid the IE error
	// See http://bugs.jquery.com/ticket/13378
	rbuggyQSA = [];

	if ( (support.qsa = rnative.test( document.querySelectorAll )) ) {
		// Build QSA regex
		// Regex strategy adopted from Diego Perini
		assert(function( div ) {
			// Select is set to empty string on purpose
			// This is to test IE's treatment of not explicitly
			// setting a boolean content attribute,
			// since its presence should be enough
			// http://bugs.jquery.com/ticket/12359
			docElem.appendChild( div ).innerHTML = "<a id='" + expando + "'></a>" +
				"<select id='" + expando + "-\r\\' msallowcapture=''>" +
				"<option selected=''></option></select>";

			// Support: IE8, Opera 11-12.16
			// Nothing should be selected when empty strings follow ^= or $= or *=
			// The test attribute must be unknown in Opera but "safe" for WinRT
			// http://msdn.microsoft.com/en-us/library/ie/hh465388.aspx#attribute_section
			if ( div.querySelectorAll("[msallowcapture^='']").length ) {
				rbuggyQSA.push( "[*^$]=" + whitespace + "*(?:''|\"\")" );
			}

			// Support: IE8
			// Boolean attributes and "value" are not treated correctly
			if ( !div.querySelectorAll("[selected]").length ) {
				rbuggyQSA.push( "\\[" + whitespace + "*(?:value|" + booleans + ")" );
			}

			// Support: Chrome<29, Android<4.4, Safari<7.0+, iOS<7.0+, PhantomJS<1.9.8+
			if ( !div.querySelectorAll( "[id~=" + expando + "-]" ).length ) {
				rbuggyQSA.push("~=");
			}

			// Webkit/Opera - :checked should return selected option elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":checked").length ) {
				rbuggyQSA.push(":checked");
			}

			// Support: Safari 8+, iOS 8+
			// https://bugs.webkit.org/show_bug.cgi?id=136851
			// In-page `selector#id sibing-combinator selector` fails
			if ( !div.querySelectorAll( "a#" + expando + "+*" ).length ) {
				rbuggyQSA.push(".#.+[+~]");
			}
		});

		assert(function( div ) {
			// Support: Windows 8 Native Apps
			// The type and name attributes are restricted during .innerHTML assignment
			var input = document.createElement("input");
			input.setAttribute( "type", "hidden" );
			div.appendChild( input ).setAttribute( "name", "D" );

			// Support: IE8
			// Enforce case-sensitivity of name attribute
			if ( div.querySelectorAll("[name=d]").length ) {
				rbuggyQSA.push( "name" + whitespace + "*[*^$|!~]?=" );
			}

			// FF 3.5 - :enabled/:disabled and hidden elements (hidden elements are still enabled)
			// IE8 throws error here and will not see later tests
			if ( !div.querySelectorAll(":enabled").length ) {
				rbuggyQSA.push( ":enabled", ":disabled" );
			}

			// Opera 10-11 does not throw on post-comma invalid pseudos
			div.querySelectorAll("*,:x");
			rbuggyQSA.push(",.*:");
		});
	}

	if ( (support.matchesSelector = rnative.test( (matches = docElem.matches ||
		docElem.webkitMatchesSelector ||
		docElem.mozMatchesSelector ||
		docElem.oMatchesSelector ||
		docElem.msMatchesSelector) )) ) {

		assert(function( div ) {
			// Check to see if it's possible to do matchesSelector
			// on a disconnected node (IE 9)
			support.disconnectedMatch = matches.call( div, "div" );

			// This should fail with an exception
			// Gecko does not error, returns false instead
			matches.call( div, "[s!='']:x" );
			rbuggyMatches.push( "!=", pseudos );
		});
	}

	rbuggyQSA = rbuggyQSA.length && new RegExp( rbuggyQSA.join("|") );
	rbuggyMatches = rbuggyMatches.length && new RegExp( rbuggyMatches.join("|") );

	/* Contains
	---------------------------------------------------------------------- */
	hasCompare = rnative.test( docElem.compareDocumentPosition );

	// Element contains another
	// Purposefully self-exclusive
	// As in, an element does not contain itself
	contains = hasCompare || rnative.test( docElem.contains ) ?
		function( a, b ) {
			var adown = a.nodeType === 9 ? a.documentElement : a,
				bup = b && b.parentNode;
			return a === bup || !!( bup && bup.nodeType === 1 && (
				adown.contains ?
					adown.contains( bup ) :
					a.compareDocumentPosition && a.compareDocumentPosition( bup ) & 16
			));
		} :
		function( a, b ) {
			if ( b ) {
				while ( (b = b.parentNode) ) {
					if ( b === a ) {
						return true;
					}
				}
			}
			return false;
		};

	/* Sorting
	---------------------------------------------------------------------- */

	// Document order sorting
	sortOrder = hasCompare ?
	function( a, b ) {

		// Flag for duplicate removal
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		// Sort on method existence if only one input has compareDocumentPosition
		var compare = !a.compareDocumentPosition - !b.compareDocumentPosition;
		if ( compare ) {
			return compare;
		}

		// Calculate position if both inputs belong to the same document
		compare = ( a.ownerDocument || a ) === ( b.ownerDocument || b ) ?
			a.compareDocumentPosition( b ) :

			// Otherwise we know they are disconnected
			1;

		// Disconnected nodes
		if ( compare & 1 ||
			(!support.sortDetached && b.compareDocumentPosition( a ) === compare) ) {

			// Choose the first element that is related to our preferred document
			if ( a === document || a.ownerDocument === preferredDoc && contains(preferredDoc, a) ) {
				return -1;
			}
			if ( b === document || b.ownerDocument === preferredDoc && contains(preferredDoc, b) ) {
				return 1;
			}

			// Maintain original order
			return sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;
		}

		return compare & 4 ? -1 : 1;
	} :
	function( a, b ) {
		// Exit early if the nodes are identical
		if ( a === b ) {
			hasDuplicate = true;
			return 0;
		}

		var cur,
			i = 0,
			aup = a.parentNode,
			bup = b.parentNode,
			ap = [ a ],
			bp = [ b ];

		// Parentless nodes are either documents or disconnected
		if ( !aup || !bup ) {
			return a === document ? -1 :
				b === document ? 1 :
				aup ? -1 :
				bup ? 1 :
				sortInput ?
				( indexOf( sortInput, a ) - indexOf( sortInput, b ) ) :
				0;

		// If the nodes are siblings, we can do a quick check
		} else if ( aup === bup ) {
			return siblingCheck( a, b );
		}

		// Otherwise we need full lists of their ancestors for comparison
		cur = a;
		while ( (cur = cur.parentNode) ) {
			ap.unshift( cur );
		}
		cur = b;
		while ( (cur = cur.parentNode) ) {
			bp.unshift( cur );
		}

		// Walk down the tree looking for a discrepancy
		while ( ap[i] === bp[i] ) {
			i++;
		}

		return i ?
			// Do a sibling check if the nodes have a common ancestor
			siblingCheck( ap[i], bp[i] ) :

			// Otherwise nodes in our document sort first
			ap[i] === preferredDoc ? -1 :
			bp[i] === preferredDoc ? 1 :
			0;
	};

	return document;
};

Sizzle.matches = function( expr, elements ) {
	return Sizzle( expr, null, null, elements );
};

Sizzle.matchesSelector = function( elem, expr ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	// Make sure that attribute selectors are quoted
	expr = expr.replace( rattributeQuotes, "='$1']" );

	if ( support.matchesSelector && documentIsHTML &&
		!compilerCache[ expr + " " ] &&
		( !rbuggyMatches || !rbuggyMatches.test( expr ) ) &&
		( !rbuggyQSA     || !rbuggyQSA.test( expr ) ) ) {

		try {
			var ret = matches.call( elem, expr );

			// IE 9's matchesSelector returns false on disconnected nodes
			if ( ret || support.disconnectedMatch ||
					// As well, disconnected nodes are said to be in a document
					// fragment in IE 9
					elem.document && elem.document.nodeType !== 11 ) {
				return ret;
			}
		} catch (e) {}
	}

	return Sizzle( expr, document, null, [ elem ] ).length > 0;
};

Sizzle.contains = function( context, elem ) {
	// Set document vars if needed
	if ( ( context.ownerDocument || context ) !== document ) {
		setDocument( context );
	}
	return contains( context, elem );
};

Sizzle.attr = function( elem, name ) {
	// Set document vars if needed
	if ( ( elem.ownerDocument || elem ) !== document ) {
		setDocument( elem );
	}

	var fn = Expr.attrHandle[ name.toLowerCase() ],
		// Don't get fooled by Object.prototype properties (jQuery #13807)
		val = fn && hasOwn.call( Expr.attrHandle, name.toLowerCase() ) ?
			fn( elem, name, !documentIsHTML ) :
			undefined;

	return val !== undefined ?
		val :
		support.attributes || !documentIsHTML ?
			elem.getAttribute( name ) :
			(val = elem.getAttributeNode(name)) && val.specified ?
				val.value :
				null;
};

Sizzle.error = function( msg ) {
	throw new Error( "Syntax error, unrecognized expression: " + msg );
};

/**
 * Document sorting and removing duplicates
 * @param {ArrayLike} results
 */
Sizzle.uniqueSort = function( results ) {
	var elem,
		duplicates = [],
		j = 0,
		i = 0;

	// Unless we *know* we can detect duplicates, assume their presence
	hasDuplicate = !support.detectDuplicates;
	sortInput = !support.sortStable && results.slice( 0 );
	results.sort( sortOrder );

	if ( hasDuplicate ) {
		while ( (elem = results[i++]) ) {
			if ( elem === results[ i ] ) {
				j = duplicates.push( i );
			}
		}
		while ( j-- ) {
			results.splice( duplicates[ j ], 1 );
		}
	}

	// Clear input after sorting to release objects
	// See https://github.com/jquery/sizzle/pull/225
	sortInput = null;

	return results;
};

/**
 * Utility function for retrieving the text value of an array of DOM nodes
 * @param {Array|Element} elem
 */
getText = Sizzle.getText = function( elem ) {
	var node,
		ret = "",
		i = 0,
		nodeType = elem.nodeType;

	if ( !nodeType ) {
		// If no nodeType, this is expected to be an array
		while ( (node = elem[i++]) ) {
			// Do not traverse comment nodes
			ret += getText( node );
		}
	} else if ( nodeType === 1 || nodeType === 9 || nodeType === 11 ) {
		// Use textContent for elements
		// innerText usage removed for consistency of new lines (jQuery #11153)
		if ( typeof elem.textContent === "string" ) {
			return elem.textContent;
		} else {
			// Traverse its children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				ret += getText( elem );
			}
		}
	} else if ( nodeType === 3 || nodeType === 4 ) {
		return elem.nodeValue;
	}
	// Do not include comment or processing instruction nodes

	return ret;
};

Expr = Sizzle.selectors = {

	// Can be adjusted by the user
	cacheLength: 50,

	createPseudo: markFunction,

	match: matchExpr,

	attrHandle: {},

	find: {},

	relative: {
		">": { dir: "parentNode", first: true },
		" ": { dir: "parentNode" },
		"+": { dir: "previousSibling", first: true },
		"~": { dir: "previousSibling" }
	},

	preFilter: {
		"ATTR": function( match ) {
			match[1] = match[1].replace( runescape, funescape );

			// Move the given value to match[3] whether quoted or unquoted
			match[3] = ( match[3] || match[4] || match[5] || "" ).replace( runescape, funescape );

			if ( match[2] === "~=" ) {
				match[3] = " " + match[3] + " ";
			}

			return match.slice( 0, 4 );
		},

		"CHILD": function( match ) {
			/* matches from matchExpr["CHILD"]
				1 type (only|nth|...)
				2 what (child|of-type)
				3 argument (even|odd|\d*|\d*n([+-]\d+)?|...)
				4 xn-component of xn+y argument ([+-]?\d*n|)
				5 sign of xn-component
				6 x of xn-component
				7 sign of y-component
				8 y of y-component
			*/
			match[1] = match[1].toLowerCase();

			if ( match[1].slice( 0, 3 ) === "nth" ) {
				// nth-* requires argument
				if ( !match[3] ) {
					Sizzle.error( match[0] );
				}

				// numeric x and y parameters for Expr.filter.CHILD
				// remember that false/true cast respectively to 0/1
				match[4] = +( match[4] ? match[5] + (match[6] || 1) : 2 * ( match[3] === "even" || match[3] === "odd" ) );
				match[5] = +( ( match[7] + match[8] ) || match[3] === "odd" );

			// other types prohibit arguments
			} else if ( match[3] ) {
				Sizzle.error( match[0] );
			}

			return match;
		},

		"PSEUDO": function( match ) {
			var excess,
				unquoted = !match[6] && match[2];

			if ( matchExpr["CHILD"].test( match[0] ) ) {
				return null;
			}

			// Accept quoted arguments as-is
			if ( match[3] ) {
				match[2] = match[4] || match[5] || "";

			// Strip excess characters from unquoted arguments
			} else if ( unquoted && rpseudo.test( unquoted ) &&
				// Get excess from tokenize (recursively)
				(excess = tokenize( unquoted, true )) &&
				// advance to the next closing parenthesis
				(excess = unquoted.indexOf( ")", unquoted.length - excess ) - unquoted.length) ) {

				// excess is a negative index
				match[0] = match[0].slice( 0, excess );
				match[2] = unquoted.slice( 0, excess );
			}

			// Return only captures needed by the pseudo filter method (type and argument)
			return match.slice( 0, 3 );
		}
	},

	filter: {

		"TAG": function( nodeNameSelector ) {
			var nodeName = nodeNameSelector.replace( runescape, funescape ).toLowerCase();
			return nodeNameSelector === "*" ?
				function() { return true; } :
				function( elem ) {
					return elem.nodeName && elem.nodeName.toLowerCase() === nodeName;
				};
		},

		"CLASS": function( className ) {
			var pattern = classCache[ className + " " ];

			return pattern ||
				(pattern = new RegExp( "(^|" + whitespace + ")" + className + "(" + whitespace + "|$)" )) &&
				classCache( className, function( elem ) {
					return pattern.test( typeof elem.className === "string" && elem.className || typeof elem.getAttribute !== "undefined" && elem.getAttribute("class") || "" );
				});
		},

		"ATTR": function( name, operator, check ) {
			return function( elem ) {
				var result = Sizzle.attr( elem, name );

				if ( result == null ) {
					return operator === "!=";
				}
				if ( !operator ) {
					return true;
				}

				result += "";

				return operator === "=" ? result === check :
					operator === "!=" ? result !== check :
					operator === "^=" ? check && result.indexOf( check ) === 0 :
					operator === "*=" ? check && result.indexOf( check ) > -1 :
					operator === "$=" ? check && result.slice( -check.length ) === check :
					operator === "~=" ? ( " " + result.replace( rwhitespace, " " ) + " " ).indexOf( check ) > -1 :
					operator === "|=" ? result === check || result.slice( 0, check.length + 1 ) === check + "-" :
					false;
			};
		},

		"CHILD": function( type, what, argument, first, last ) {
			var simple = type.slice( 0, 3 ) !== "nth",
				forward = type.slice( -4 ) !== "last",
				ofType = what === "of-type";

			return first === 1 && last === 0 ?

				// Shortcut for :nth-*(n)
				function( elem ) {
					return !!elem.parentNode;
				} :

				function( elem, context, xml ) {
					var cache, uniqueCache, outerCache, node, nodeIndex, start,
						dir = simple !== forward ? "nextSibling" : "previousSibling",
						parent = elem.parentNode,
						name = ofType && elem.nodeName.toLowerCase(),
						useCache = !xml && !ofType,
						diff = false;

					if ( parent ) {

						// :(first|last|only)-(child|of-type)
						if ( simple ) {
							while ( dir ) {
								node = elem;
								while ( (node = node[ dir ]) ) {
									if ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) {

										return false;
									}
								}
								// Reverse direction for :only-* (if we haven't yet done so)
								start = dir = type === "only" && !start && "nextSibling";
							}
							return true;
						}

						start = [ forward ? parent.firstChild : parent.lastChild ];

						// non-xml :nth-child(...) stores cache data on `parent`
						if ( forward && useCache ) {

							// Seek `elem` from a previously-cached index

							// ...in a gzip-friendly way
							node = parent;
							outerCache = node[ expando ] || (node[ expando ] = {});

							// Support: IE <9 only
							// Defend against cloned attroperties (jQuery gh-1709)
							uniqueCache = outerCache[ node.uniqueID ] ||
								(outerCache[ node.uniqueID ] = {});

							cache = uniqueCache[ type ] || [];
							nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
							diff = nodeIndex && cache[ 2 ];
							node = nodeIndex && parent.childNodes[ nodeIndex ];

							while ( (node = ++nodeIndex && node && node[ dir ] ||

								// Fallback to seeking `elem` from the start
								(diff = nodeIndex = 0) || start.pop()) ) {

								// When found, cache indexes on `parent` and break
								if ( node.nodeType === 1 && ++diff && node === elem ) {
									uniqueCache[ type ] = [ dirruns, nodeIndex, diff ];
									break;
								}
							}

						} else {
							// Use previously-cached element index if available
							if ( useCache ) {
								// ...in a gzip-friendly way
								node = elem;
								outerCache = node[ expando ] || (node[ expando ] = {});

								// Support: IE <9 only
								// Defend against cloned attroperties (jQuery gh-1709)
								uniqueCache = outerCache[ node.uniqueID ] ||
									(outerCache[ node.uniqueID ] = {});

								cache = uniqueCache[ type ] || [];
								nodeIndex = cache[ 0 ] === dirruns && cache[ 1 ];
								diff = nodeIndex;
							}

							// xml :nth-child(...)
							// or :nth-last-child(...) or :nth(-last)?-of-type(...)
							if ( diff === false ) {
								// Use the same loop as above to seek `elem` from the start
								while ( (node = ++nodeIndex && node && node[ dir ] ||
									(diff = nodeIndex = 0) || start.pop()) ) {

									if ( ( ofType ?
										node.nodeName.toLowerCase() === name :
										node.nodeType === 1 ) &&
										++diff ) {

										// Cache the index of each encountered element
										if ( useCache ) {
											outerCache = node[ expando ] || (node[ expando ] = {});

											// Support: IE <9 only
											// Defend against cloned attroperties (jQuery gh-1709)
											uniqueCache = outerCache[ node.uniqueID ] ||
												(outerCache[ node.uniqueID ] = {});

											uniqueCache[ type ] = [ dirruns, diff ];
										}

										if ( node === elem ) {
											break;
										}
									}
								}
							}
						}

						// Incorporate the offset, then check against cycle size
						diff -= last;
						return diff === first || ( diff % first === 0 && diff / first >= 0 );
					}
				};
		},

		"PSEUDO": function( pseudo, argument ) {
			// pseudo-class names are case-insensitive
			// http://www.w3.org/TR/selectors/#pseudo-classes
			// Prioritize by case sensitivity in case custom pseudos are added with uppercase letters
			// Remember that setFilters inherits from pseudos
			var args,
				fn = Expr.pseudos[ pseudo ] || Expr.setFilters[ pseudo.toLowerCase() ] ||
					Sizzle.error( "unsupported pseudo: " + pseudo );

			// The user may use createPseudo to indicate that
			// arguments are needed to create the filter function
			// just as Sizzle does
			if ( fn[ expando ] ) {
				return fn( argument );
			}

			// But maintain support for old signatures
			if ( fn.length > 1 ) {
				args = [ pseudo, pseudo, "", argument ];
				return Expr.setFilters.hasOwnProperty( pseudo.toLowerCase() ) ?
					markFunction(function( seed, matches ) {
						var idx,
							matched = fn( seed, argument ),
							i = matched.length;
						while ( i-- ) {
							idx = indexOf( seed, matched[i] );
							seed[ idx ] = !( matches[ idx ] = matched[i] );
						}
					}) :
					function( elem ) {
						return fn( elem, 0, args );
					};
			}

			return fn;
		}
	},

	pseudos: {
		// Potentially complex pseudos
		"not": markFunction(function( selector ) {
			// Trim the selector passed to compile
			// to avoid treating leading and trailing
			// spaces as combinators
			var input = [],
				results = [],
				matcher = compile( selector.replace( rtrim, "$1" ) );

			return matcher[ expando ] ?
				markFunction(function( seed, matches, context, xml ) {
					var elem,
						unmatched = matcher( seed, null, xml, [] ),
						i = seed.length;

					// Match elements unmatched by `matcher`
					while ( i-- ) {
						if ( (elem = unmatched[i]) ) {
							seed[i] = !(matches[i] = elem);
						}
					}
				}) :
				function( elem, context, xml ) {
					input[0] = elem;
					matcher( input, null, xml, results );
					// Don't keep the element (issue #299)
					input[0] = null;
					return !results.pop();
				};
		}),

		"has": markFunction(function( selector ) {
			return function( elem ) {
				return Sizzle( selector, elem ).length > 0;
			};
		}),

		"contains": markFunction(function( text ) {
			text = text.replace( runescape, funescape );
			return function( elem ) {
				return ( elem.textContent || elem.innerText || getText( elem ) ).indexOf( text ) > -1;
			};
		}),

		// "Whether an element is represented by a :lang() selector
		// is based solely on the element's language value
		// being equal to the identifier C,
		// or beginning with the identifier C immediately followed by "-".
		// The matching of C against the element's language value is performed case-insensitively.
		// The identifier C does not have to be a valid language name."
		// http://www.w3.org/TR/selectors/#lang-pseudo
		"lang": markFunction( function( lang ) {
			// lang value must be a valid identifier
			if ( !ridentifier.test(lang || "") ) {
				Sizzle.error( "unsupported lang: " + lang );
			}
			lang = lang.replace( runescape, funescape ).toLowerCase();
			return function( elem ) {
				var elemLang;
				do {
					if ( (elemLang = documentIsHTML ?
						elem.lang :
						elem.getAttribute("xml:lang") || elem.getAttribute("lang")) ) {

						elemLang = elemLang.toLowerCase();
						return elemLang === lang || elemLang.indexOf( lang + "-" ) === 0;
					}
				} while ( (elem = elem.parentNode) && elem.nodeType === 1 );
				return false;
			};
		}),

		// Miscellaneous
		"target": function( elem ) {
			var hash = window.location && window.location.hash;
			return hash && hash.slice( 1 ) === elem.id;
		},

		"root": function( elem ) {
			return elem === docElem;
		},

		"focus": function( elem ) {
			return elem === document.activeElement && (!document.hasFocus || document.hasFocus()) && !!(elem.type || elem.href || ~elem.tabIndex);
		},

		// Boolean properties
		"enabled": function( elem ) {
			return elem.disabled === false;
		},

		"disabled": function( elem ) {
			return elem.disabled === true;
		},

		"checked": function( elem ) {
			// In CSS3, :checked should return both checked and selected elements
			// http://www.w3.org/TR/2011/REC-css3-selectors-20110929/#checked
			var nodeName = elem.nodeName.toLowerCase();
			return (nodeName === "input" && !!elem.checked) || (nodeName === "option" && !!elem.selected);
		},

		"selected": function( elem ) {
			// Accessing this property makes selected-by-default
			// options in Safari work properly
			if ( elem.parentNode ) {
				elem.parentNode.selectedIndex;
			}

			return elem.selected === true;
		},

		// Contents
		"empty": function( elem ) {
			// http://www.w3.org/TR/selectors/#empty-pseudo
			// :empty is negated by element (1) or content nodes (text: 3; cdata: 4; entity ref: 5),
			//   but not by others (comment: 8; processing instruction: 7; etc.)
			// nodeType < 6 works because attributes (2) do not appear as children
			for ( elem = elem.firstChild; elem; elem = elem.nextSibling ) {
				if ( elem.nodeType < 6 ) {
					return false;
				}
			}
			return true;
		},

		"parent": function( elem ) {
			return !Expr.pseudos["empty"]( elem );
		},

		// Element/input types
		"header": function( elem ) {
			return rheader.test( elem.nodeName );
		},

		"input": function( elem ) {
			return rinputs.test( elem.nodeName );
		},

		"button": function( elem ) {
			var name = elem.nodeName.toLowerCase();
			return name === "input" && elem.type === "button" || name === "button";
		},

		"text": function( elem ) {
			var attr;
			return elem.nodeName.toLowerCase() === "input" &&
				elem.type === "text" &&

				// Support: IE<8
				// New HTML5 attribute values (e.g., "search") appear with elem.type === "text"
				( (attr = elem.getAttribute("type")) == null || attr.toLowerCase() === "text" );
		},

		// Position-in-collection
		"first": createPositionalPseudo(function() {
			return [ 0 ];
		}),

		"last": createPositionalPseudo(function( matchIndexes, length ) {
			return [ length - 1 ];
		}),

		"eq": createPositionalPseudo(function( matchIndexes, length, argument ) {
			return [ argument < 0 ? argument + length : argument ];
		}),

		"even": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 0;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"odd": createPositionalPseudo(function( matchIndexes, length ) {
			var i = 1;
			for ( ; i < length; i += 2 ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"lt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; --i >= 0; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		}),

		"gt": createPositionalPseudo(function( matchIndexes, length, argument ) {
			var i = argument < 0 ? argument + length : argument;
			for ( ; ++i < length; ) {
				matchIndexes.push( i );
			}
			return matchIndexes;
		})
	}
};

Expr.pseudos["nth"] = Expr.pseudos["eq"];

// Add button/input type pseudos
for ( i in { radio: true, checkbox: true, file: true, password: true, image: true } ) {
	Expr.pseudos[ i ] = createInputPseudo( i );
}
for ( i in { submit: true, reset: true } ) {
	Expr.pseudos[ i ] = createButtonPseudo( i );
}

// Easy API for creating new setFilters
function setFilters() {}
setFilters.prototype = Expr.filters = Expr.pseudos;
Expr.setFilters = new setFilters();

tokenize = Sizzle.tokenize = function( selector, parseOnly ) {
	var matched, match, tokens, type,
		soFar, groups, preFilters,
		cached = tokenCache[ selector + " " ];

	if ( cached ) {
		return parseOnly ? 0 : cached.slice( 0 );
	}

	soFar = selector;
	groups = [];
	preFilters = Expr.preFilter;

	while ( soFar ) {

		// Comma and first run
		if ( !matched || (match = rcomma.exec( soFar )) ) {
			if ( match ) {
				// Don't consume trailing commas as valid
				soFar = soFar.slice( match[0].length ) || soFar;
			}
			groups.push( (tokens = []) );
		}

		matched = false;

		// Combinators
		if ( (match = rcombinators.exec( soFar )) ) {
			matched = match.shift();
			tokens.push({
				value: matched,
				// Cast descendant combinators to space
				type: match[0].replace( rtrim, " " )
			});
			soFar = soFar.slice( matched.length );
		}

		// Filters
		for ( type in Expr.filter ) {
			if ( (match = matchExpr[ type ].exec( soFar )) && (!preFilters[ type ] ||
				(match = preFilters[ type ]( match ))) ) {
				matched = match.shift();
				tokens.push({
					value: matched,
					type: type,
					matches: match
				});
				soFar = soFar.slice( matched.length );
			}
		}

		if ( !matched ) {
			break;
		}
	}

	// Return the length of the invalid excess
	// if we're just parsing
	// Otherwise, throw an error or return tokens
	return parseOnly ?
		soFar.length :
		soFar ?
			Sizzle.error( selector ) :
			// Cache the tokens
			tokenCache( selector, groups ).slice( 0 );
};

function toSelector( tokens ) {
	var i = 0,
		len = tokens.length,
		selector = "";
	for ( ; i < len; i++ ) {
		selector += tokens[i].value;
	}
	return selector;
}

function addCombinator( matcher, combinator, base ) {
	var dir = combinator.dir,
		checkNonElements = base && dir === "parentNode",
		doneName = done++;

	return combinator.first ?
		// Check against closest ancestor/preceding element
		function( elem, context, xml ) {
			while ( (elem = elem[ dir ]) ) {
				if ( elem.nodeType === 1 || checkNonElements ) {
					return matcher( elem, context, xml );
				}
			}
		} :

		// Check against all ancestor/preceding elements
		function( elem, context, xml ) {
			var oldCache, uniqueCache, outerCache,
				newCache = [ dirruns, doneName ];

			// We can't set arbitrary data on XML nodes, so they don't benefit from combinator caching
			if ( xml ) {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						if ( matcher( elem, context, xml ) ) {
							return true;
						}
					}
				}
			} else {
				while ( (elem = elem[ dir ]) ) {
					if ( elem.nodeType === 1 || checkNonElements ) {
						outerCache = elem[ expando ] || (elem[ expando ] = {});

						// Support: IE <9 only
						// Defend against cloned attroperties (jQuery gh-1709)
						uniqueCache = outerCache[ elem.uniqueID ] || (outerCache[ elem.uniqueID ] = {});

						if ( (oldCache = uniqueCache[ dir ]) &&
							oldCache[ 0 ] === dirruns && oldCache[ 1 ] === doneName ) {

							// Assign to newCache so results back-propagate to previous elements
							return (newCache[ 2 ] = oldCache[ 2 ]);
						} else {
							// Reuse newcache so results back-propagate to previous elements
							uniqueCache[ dir ] = newCache;

							// A match means we're done; a fail means we have to keep checking
							if ( (newCache[ 2 ] = matcher( elem, context, xml )) ) {
								return true;
							}
						}
					}
				}
			}
		};
}

function elementMatcher( matchers ) {
	return matchers.length > 1 ?
		function( elem, context, xml ) {
			var i = matchers.length;
			while ( i-- ) {
				if ( !matchers[i]( elem, context, xml ) ) {
					return false;
				}
			}
			return true;
		} :
		matchers[0];
}

function multipleContexts( selector, contexts, results ) {
	var i = 0,
		len = contexts.length;
	for ( ; i < len; i++ ) {
		Sizzle( selector, contexts[i], results );
	}
	return results;
}

function condense( unmatched, map, filter, context, xml ) {
	var elem,
		newUnmatched = [],
		i = 0,
		len = unmatched.length,
		mapped = map != null;

	for ( ; i < len; i++ ) {
		if ( (elem = unmatched[i]) ) {
			if ( !filter || filter( elem, context, xml ) ) {
				newUnmatched.push( elem );
				if ( mapped ) {
					map.push( i );
				}
			}
		}
	}

	return newUnmatched;
}

function setMatcher( preFilter, selector, matcher, postFilter, postFinder, postSelector ) {
	if ( postFilter && !postFilter[ expando ] ) {
		postFilter = setMatcher( postFilter );
	}
	if ( postFinder && !postFinder[ expando ] ) {
		postFinder = setMatcher( postFinder, postSelector );
	}
	return markFunction(function( seed, results, context, xml ) {
		var temp, i, elem,
			preMap = [],
			postMap = [],
			preexisting = results.length,

			// Get initial elements from seed or context
			elems = seed || multipleContexts( selector || "*", context.nodeType ? [ context ] : context, [] ),

			// Prefilter to get matcher input, preserving a map for seed-results synchronization
			matcherIn = preFilter && ( seed || !selector ) ?
				condense( elems, preMap, preFilter, context, xml ) :
				elems,

			matcherOut = matcher ?
				// If we have a postFinder, or filtered seed, or non-seed postFilter or preexisting results,
				postFinder || ( seed ? preFilter : preexisting || postFilter ) ?

					// ...intermediate processing is necessary
					[] :

					// ...otherwise use results directly
					results :
				matcherIn;

		// Find primary matches
		if ( matcher ) {
			matcher( matcherIn, matcherOut, context, xml );
		}

		// Apply postFilter
		if ( postFilter ) {
			temp = condense( matcherOut, postMap );
			postFilter( temp, [], context, xml );

			// Un-match failing elements by moving them back to matcherIn
			i = temp.length;
			while ( i-- ) {
				if ( (elem = temp[i]) ) {
					matcherOut[ postMap[i] ] = !(matcherIn[ postMap[i] ] = elem);
				}
			}
		}

		if ( seed ) {
			if ( postFinder || preFilter ) {
				if ( postFinder ) {
					// Get the final matcherOut by condensing this intermediate into postFinder contexts
					temp = [];
					i = matcherOut.length;
					while ( i-- ) {
						if ( (elem = matcherOut[i]) ) {
							// Restore matcherIn since elem is not yet a final match
							temp.push( (matcherIn[i] = elem) );
						}
					}
					postFinder( null, (matcherOut = []), temp, xml );
				}

				// Move matched elements from seed to results to keep them synchronized
				i = matcherOut.length;
				while ( i-- ) {
					if ( (elem = matcherOut[i]) &&
						(temp = postFinder ? indexOf( seed, elem ) : preMap[i]) > -1 ) {

						seed[temp] = !(results[temp] = elem);
					}
				}
			}

		// Add elements to results, through postFinder if defined
		} else {
			matcherOut = condense(
				matcherOut === results ?
					matcherOut.splice( preexisting, matcherOut.length ) :
					matcherOut
			);
			if ( postFinder ) {
				postFinder( null, results, matcherOut, xml );
			} else {
				push.apply( results, matcherOut );
			}
		}
	});
}

function matcherFromTokens( tokens ) {
	var checkContext, matcher, j,
		len = tokens.length,
		leadingRelative = Expr.relative[ tokens[0].type ],
		implicitRelative = leadingRelative || Expr.relative[" "],
		i = leadingRelative ? 1 : 0,

		// The foundational matcher ensures that elements are reachable from top-level context(s)
		matchContext = addCombinator( function( elem ) {
			return elem === checkContext;
		}, implicitRelative, true ),
		matchAnyContext = addCombinator( function( elem ) {
			return indexOf( checkContext, elem ) > -1;
		}, implicitRelative, true ),
		matchers = [ function( elem, context, xml ) {
			var ret = ( !leadingRelative && ( xml || context !== outermostContext ) ) || (
				(checkContext = context).nodeType ?
					matchContext( elem, context, xml ) :
					matchAnyContext( elem, context, xml ) );
			// Avoid hanging onto element (issue #299)
			checkContext = null;
			return ret;
		} ];

	for ( ; i < len; i++ ) {
		if ( (matcher = Expr.relative[ tokens[i].type ]) ) {
			matchers = [ addCombinator(elementMatcher( matchers ), matcher) ];
		} else {
			matcher = Expr.filter[ tokens[i].type ].apply( null, tokens[i].matches );

			// Return special upon seeing a positional matcher
			if ( matcher[ expando ] ) {
				// Find the next relative operator (if any) for proper handling
				j = ++i;
				for ( ; j < len; j++ ) {
					if ( Expr.relative[ tokens[j].type ] ) {
						break;
					}
				}
				return setMatcher(
					i > 1 && elementMatcher( matchers ),
					i > 1 && toSelector(
						// If the preceding token was a descendant combinator, insert an implicit any-element `*`
						tokens.slice( 0, i - 1 ).concat({ value: tokens[ i - 2 ].type === " " ? "*" : "" })
					).replace( rtrim, "$1" ),
					matcher,
					i < j && matcherFromTokens( tokens.slice( i, j ) ),
					j < len && matcherFromTokens( (tokens = tokens.slice( j )) ),
					j < len && toSelector( tokens )
				);
			}
			matchers.push( matcher );
		}
	}

	return elementMatcher( matchers );
}

function matcherFromGroupMatchers( elementMatchers, setMatchers ) {
	var bySet = setMatchers.length > 0,
		byElement = elementMatchers.length > 0,
		superMatcher = function( seed, context, xml, results, outermost ) {
			var elem, j, matcher,
				matchedCount = 0,
				i = "0",
				unmatched = seed && [],
				setMatched = [],
				contextBackup = outermostContext,
				// We must always have either seed elements or outermost context
				elems = seed || byElement && Expr.find["TAG"]( "*", outermost ),
				// Use integer dirruns iff this is the outermost matcher
				dirrunsUnique = (dirruns += contextBackup == null ? 1 : Math.random() || 0.1),
				len = elems.length;

			if ( outermost ) {
				outermostContext = context === document || context || outermost;
			}

			// Add elements passing elementMatchers directly to results
			// Support: IE<9, Safari
			// Tolerate NodeList properties (IE: "length"; Safari: <number>) matching elements by id
			for ( ; i !== len && (elem = elems[i]) != null; i++ ) {
				if ( byElement && elem ) {
					j = 0;
					if ( !context && elem.ownerDocument !== document ) {
						setDocument( elem );
						xml = !documentIsHTML;
					}
					while ( (matcher = elementMatchers[j++]) ) {
						if ( matcher( elem, context || document, xml) ) {
							results.push( elem );
							break;
						}
					}
					if ( outermost ) {
						dirruns = dirrunsUnique;
					}
				}

				// Track unmatched elements for set filters
				if ( bySet ) {
					// They will have gone through all possible matchers
					if ( (elem = !matcher && elem) ) {
						matchedCount--;
					}

					// Lengthen the array for every element, matched or not
					if ( seed ) {
						unmatched.push( elem );
					}
				}
			}

			// `i` is now the count of elements visited above, and adding it to `matchedCount`
			// makes the latter nonnegative.
			matchedCount += i;

			// Apply set filters to unmatched elements
			// NOTE: This can be skipped if there are no unmatched elements (i.e., `matchedCount`
			// equals `i`), unless we didn't visit _any_ elements in the above loop because we have
			// no element matchers and no seed.
			// Incrementing an initially-string "0" `i` allows `i` to remain a string only in that
			// case, which will result in a "00" `matchedCount` that differs from `i` but is also
			// numerically zero.
			if ( bySet && i !== matchedCount ) {
				j = 0;
				while ( (matcher = setMatchers[j++]) ) {
					matcher( unmatched, setMatched, context, xml );
				}

				if ( seed ) {
					// Reintegrate element matches to eliminate the need for sorting
					if ( matchedCount > 0 ) {
						while ( i-- ) {
							if ( !(unmatched[i] || setMatched[i]) ) {
								setMatched[i] = pop.call( results );
							}
						}
					}

					// Discard index placeholder values to get only actual matches
					setMatched = condense( setMatched );
				}

				// Add matches to results
				push.apply( results, setMatched );

				// Seedless set matches succeeding multiple successful matchers stipulate sorting
				if ( outermost && !seed && setMatched.length > 0 &&
					( matchedCount + setMatchers.length ) > 1 ) {

					Sizzle.uniqueSort( results );
				}
			}

			// Override manipulation of globals by nested matchers
			if ( outermost ) {
				dirruns = dirrunsUnique;
				outermostContext = contextBackup;
			}

			return unmatched;
		};

	return bySet ?
		markFunction( superMatcher ) :
		superMatcher;
}

compile = Sizzle.compile = function( selector, match /* Internal Use Only */ ) {
	var i,
		setMatchers = [],
		elementMatchers = [],
		cached = compilerCache[ selector + " " ];

	if ( !cached ) {
		// Generate a function of recursive functions that can be used to check each element
		if ( !match ) {
			match = tokenize( selector );
		}
		i = match.length;
		while ( i-- ) {
			cached = matcherFromTokens( match[i] );
			if ( cached[ expando ] ) {
				setMatchers.push( cached );
			} else {
				elementMatchers.push( cached );
			}
		}

		// Cache the compiled function
		cached = compilerCache( selector, matcherFromGroupMatchers( elementMatchers, setMatchers ) );

		// Save selector and tokenization
		cached.selector = selector;
	}
	return cached;
};

/**
 * A low-level selection function that works with Sizzle's compiled
 *  selector functions
 * @param {String|Function} selector A selector or a pre-compiled
 *  selector function built with Sizzle.compile
 * @param {Element} context
 * @param {Array} [results]
 * @param {Array} [seed] A set of elements to match against
 */
select = Sizzle.select = function( selector, context, results, seed ) {
	var i, tokens, token, type, find,
		compiled = typeof selector === "function" && selector,
		match = !seed && tokenize( (selector = compiled.selector || selector) );

	results = results || [];

	// Try to minimize operations if there is only one selector in the list and no seed
	// (the latter of which guarantees us context)
	if ( match.length === 1 ) {

		// Reduce context if the leading compound selector is an ID
		tokens = match[0] = match[0].slice( 0 );
		if ( tokens.length > 2 && (token = tokens[0]).type === "ID" &&
				support.getById && context.nodeType === 9 && documentIsHTML &&
				Expr.relative[ tokens[1].type ] ) {

			context = ( Expr.find["ID"]( token.matches[0].replace(runescape, funescape), context ) || [] )[0];
			if ( !context ) {
				return results;

			// Precompiled matchers will still verify ancestry, so step up a level
			} else if ( compiled ) {
				context = context.parentNode;
			}

			selector = selector.slice( tokens.shift().value.length );
		}

		// Fetch a seed set for right-to-left matching
		i = matchExpr["needsContext"].test( selector ) ? 0 : tokens.length;
		while ( i-- ) {
			token = tokens[i];

			// Abort if we hit a combinator
			if ( Expr.relative[ (type = token.type) ] ) {
				break;
			}
			if ( (find = Expr.find[ type ]) ) {
				// Search, expanding context for leading sibling combinators
				if ( (seed = find(
					token.matches[0].replace( runescape, funescape ),
					rsibling.test( tokens[0].type ) && testContext( context.parentNode ) || context
				)) ) {

					// If seed is empty or no tokens remain, we can return early
					tokens.splice( i, 1 );
					selector = seed.length && toSelector( tokens );
					if ( !selector ) {
						push.apply( results, seed );
						return results;
					}

					break;
				}
			}
		}
	}

	// Compile and execute a filtering function if one is not provided
	// Provide `match` to avoid retokenization if we modified the selector above
	( compiled || compile( selector, match ) )(
		seed,
		context,
		!documentIsHTML,
		results,
		!context || rsibling.test( selector ) && testContext( context.parentNode ) || context
	);
	return results;
};

// One-time assignments

// Sort stability
support.sortStable = expando.split("").sort( sortOrder ).join("") === expando;

// Support: Chrome 14-35+
// Always assume duplicates if they aren't passed to the comparison function
support.detectDuplicates = !!hasDuplicate;

// Initialize against the default document
setDocument();

// Support: Webkit<537.32 - Safari 6.0.3/Chrome 25 (fixed in Chrome 27)
// Detached nodes confoundingly follow *each other*
support.sortDetached = assert(function( div1 ) {
	// Should return 1, but returns 4 (following)
	return div1.compareDocumentPosition( document.createElement("div") ) & 1;
});

// Support: IE<8
// Prevent attribute/property "interpolation"
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !assert(function( div ) {
	div.innerHTML = "<a href='#'></a>";
	return div.firstChild.getAttribute("href") === "#" ;
}) ) {
	addHandle( "type|href|height|width", function( elem, name, isXML ) {
		if ( !isXML ) {
			return elem.getAttribute( name, name.toLowerCase() === "type" ? 1 : 2 );
		}
	});
}

// Support: IE<9
// Use defaultValue in place of getAttribute("value")
if ( !support.attributes || !assert(function( div ) {
	div.innerHTML = "<input/>";
	div.firstChild.setAttribute( "value", "" );
	return div.firstChild.getAttribute( "value" ) === "";
}) ) {
	addHandle( "value", function( elem, name, isXML ) {
		if ( !isXML && elem.nodeName.toLowerCase() === "input" ) {
			return elem.defaultValue;
		}
	});
}

// Support: IE<9
// Use getAttributeNode to fetch booleans when getAttribute lies
if ( !assert(function( div ) {
	return div.getAttribute("disabled") == null;
}) ) {
	addHandle( booleans, function( elem, name, isXML ) {
		var val;
		if ( !isXML ) {
			return elem[ name ] === true ? name.toLowerCase() :
					(val = elem.getAttributeNode( name )) && val.specified ?
					val.value :
				null;
		}
	});
}

return Sizzle;

})( window );



jQuery.find = Sizzle;
jQuery.expr = Sizzle.selectors;
jQuery.expr[ ":" ] = jQuery.expr.pseudos;
jQuery.uniqueSort = jQuery.unique = Sizzle.uniqueSort;
jQuery.text = Sizzle.getText;
jQuery.isXMLDoc = Sizzle.isXML;
jQuery.contains = Sizzle.contains;



var dir = function( elem, dir, until ) {
	var matched = [],
		truncate = until !== undefined;

	while ( ( elem = elem[ dir ] ) && elem.nodeType !== 9 ) {
		if ( elem.nodeType === 1 ) {
			if ( truncate && jQuery( elem ).is( until ) ) {
				break;
			}
			matched.push( elem );
		}
	}
	return matched;
};


var siblings = function( n, elem ) {
	var matched = [];

	for ( ; n; n = n.nextSibling ) {
		if ( n.nodeType === 1 && n !== elem ) {
			matched.push( n );
		}
	}

	return matched;
};


var rneedsContext = jQuery.expr.match.needsContext;

var rsingleTag = ( /^<([\w-]+)\s*\/?>(?:<\/\1>|)$/ );



var risSimple = /^.[^:#\[\.,]*$/;

// Implement the identical functionality for filter and not
function winnow( elements, qualifier, not ) {
	if ( jQuery.isFunction( qualifier ) ) {
		return jQuery.grep( elements, function( elem, i ) {
			/* jshint -W018 */
			return !!qualifier.call( elem, i, elem ) !== not;
		} );

	}

	if ( qualifier.nodeType ) {
		return jQuery.grep( elements, function( elem ) {
			return ( elem === qualifier ) !== not;
		} );

	}

	if ( typeof qualifier === "string" ) {
		if ( risSimple.test( qualifier ) ) {
			return jQuery.filter( qualifier, elements, not );
		}

		qualifier = jQuery.filter( qualifier, elements );
	}

	return jQuery.grep( elements, function( elem ) {
		return ( jQuery.inArray( elem, qualifier ) > -1 ) !== not;
	} );
}

jQuery.filter = function( expr, elems, not ) {
	var elem = elems[ 0 ];

	if ( not ) {
		expr = ":not(" + expr + ")";
	}

	return elems.length === 1 && elem.nodeType === 1 ?
		jQuery.find.matchesSelector( elem, expr ) ? [ elem ] : [] :
		jQuery.find.matches( expr, jQuery.grep( elems, function( elem ) {
			return elem.nodeType === 1;
		} ) );
};

jQuery.fn.extend( {
	find: function( selector ) {
		var i,
			ret = [],
			self = this,
			len = self.length;

		if ( typeof selector !== "string" ) {
			return this.pushStack( jQuery( selector ).filter( function() {
				for ( i = 0; i < len; i++ ) {
					if ( jQuery.contains( self[ i ], this ) ) {
						return true;
					}
				}
			} ) );
		}

		for ( i = 0; i < len; i++ ) {
			jQuery.find( selector, self[ i ], ret );
		}

		// Needed because $( selector, context ) becomes $( context ).find( selector )
		ret = this.pushStack( len > 1 ? jQuery.unique( ret ) : ret );
		ret.selector = this.selector ? this.selector + " " + selector : selector;
		return ret;
	},
	filter: function( selector ) {
		return this.pushStack( winnow( this, selector || [], false ) );
	},
	not: function( selector ) {
		return this.pushStack( winnow( this, selector || [], true ) );
	},
	is: function( selector ) {
		return !!winnow(
			this,

			// If this is a positional/relative selector, check membership in the returned set
			// so $("p:first").is("p:last") won't return true for a doc with two "p".
			typeof selector === "string" && rneedsContext.test( selector ) ?
				jQuery( selector ) :
				selector || [],
			false
		).length;
	}
} );


// Initialize a jQuery object


// A central reference to the root jQuery(document)
var rootjQuery,

	// A simple way to check for HTML strings
	// Prioritize #id over <tag> to avoid XSS via location.hash (#9521)
	// Strict HTML recognition (#11290: must start with <)
	rquickExpr = /^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,

	init = jQuery.fn.init = function( selector, context, root ) {
		var match, elem;

		// HANDLE: $(""), $(null), $(undefined), $(false)
		if ( !selector ) {
			return this;
		}

		// init accepts an alternate rootjQuery
		// so migrate can support jQuery.sub (gh-2101)
		root = root || rootjQuery;

		// Handle HTML strings
		if ( typeof selector === "string" ) {
			if ( selector.charAt( 0 ) === "<" &&
				selector.charAt( selector.length - 1 ) === ">" &&
				selector.length >= 3 ) {

				// Assume that strings that start and end with <> are HTML and skip the regex check
				match = [ null, selector, null ];

			} else {
				match = rquickExpr.exec( selector );
			}

			// Match html or make sure no context is specified for #id
			if ( match && ( match[ 1 ] || !context ) ) {

				// HANDLE: $(html) -> $(array)
				if ( match[ 1 ] ) {
					context = context instanceof jQuery ? context[ 0 ] : context;

					// scripts is true for back-compat
					// Intentionally let the error be thrown if parseHTML is not present
					jQuery.merge( this, jQuery.parseHTML(
						match[ 1 ],
						context && context.nodeType ? context.ownerDocument || context : document,
						true
					) );

					// HANDLE: $(html, props)
					if ( rsingleTag.test( match[ 1 ] ) && jQuery.isPlainObject( context ) ) {
						for ( match in context ) {

							// Properties of context are called as methods if possible
							if ( jQuery.isFunction( this[ match ] ) ) {
								this[ match ]( context[ match ] );

							// ...and otherwise set as attributes
							} else {
								this.attr( match, context[ match ] );
							}
						}
					}

					return this;

				// HANDLE: $(#id)
				} else {
					elem = document.getElementById( match[ 2 ] );

					// Check parentNode to catch when Blackberry 4.6 returns
					// nodes that are no longer in the document #6963
					if ( elem && elem.parentNode ) {

						// Handle the case where IE and Opera return items
						// by name instead of ID
						if ( elem.id !== match[ 2 ] ) {
							return rootjQuery.find( selector );
						}

						// Otherwise, we inject the element directly into the jQuery object
						this.length = 1;
						this[ 0 ] = elem;
					}

					this.context = document;
					this.selector = selector;
					return this;
				}

			// HANDLE: $(expr, $(...))
			} else if ( !context || context.jquery ) {
				return ( context || root ).find( selector );

			// HANDLE: $(expr, context)
			// (which is just equivalent to: $(context).find(expr)
			} else {
				return this.constructor( context ).find( selector );
			}

		// HANDLE: $(DOMElement)
		} else if ( selector.nodeType ) {
			this.context = this[ 0 ] = selector;
			this.length = 1;
			return this;

		// HANDLE: $(function)
		// Shortcut for document ready
		} else if ( jQuery.isFunction( selector ) ) {
			return typeof root.ready !== "undefined" ?
				root.ready( selector ) :

				// Execute immediately if ready is not present
				selector( jQuery );
		}

		if ( selector.selector !== undefined ) {
			this.selector = selector.selector;
			this.context = selector.context;
		}

		return jQuery.makeArray( selector, this );
	};

// Give the init function the jQuery prototype for later instantiation
init.prototype = jQuery.fn;

// Initialize central reference
rootjQuery = jQuery( document );


var rparentsprev = /^(?:parents|prev(?:Until|All))/,

	// methods guaranteed to produce a unique set when starting from a unique set
	guaranteedUnique = {
		children: true,
		contents: true,
		next: true,
		prev: true
	};

jQuery.fn.extend( {
	has: function( target ) {
		var i,
			targets = jQuery( target, this ),
			len = targets.length;

		return this.filter( function() {
			for ( i = 0; i < len; i++ ) {
				if ( jQuery.contains( this, targets[ i ] ) ) {
					return true;
				}
			}
		} );
	},

	closest: function( selectors, context ) {
		var cur,
			i = 0,
			l = this.length,
			matched = [],
			pos = rneedsContext.test( selectors ) || typeof selectors !== "string" ?
				jQuery( selectors, context || this.context ) :
				0;

		for ( ; i < l; i++ ) {
			for ( cur = this[ i ]; cur && cur !== context; cur = cur.parentNode ) {

				// Always skip document fragments
				if ( cur.nodeType < 11 && ( pos ?
					pos.index( cur ) > -1 :

					// Don't pass non-elements to Sizzle
					cur.nodeType === 1 &&
						jQuery.find.matchesSelector( cur, selectors ) ) ) {

					matched.push( cur );
					break;
				}
			}
		}

		return this.pushStack( matched.length > 1 ? jQuery.uniqueSort( matched ) : matched );
	},

	// Determine the position of an element within
	// the matched set of elements
	index: function( elem ) {

		// No argument, return index in parent
		if ( !elem ) {
			return ( this[ 0 ] && this[ 0 ].parentNode ) ? this.first().prevAll().length : -1;
		}

		// index in selector
		if ( typeof elem === "string" ) {
			return jQuery.inArray( this[ 0 ], jQuery( elem ) );
		}

		// Locate the position of the desired element
		return jQuery.inArray(

			// If it receives a jQuery object, the first element is used
			elem.jquery ? elem[ 0 ] : elem, this );
	},

	add: function( selector, context ) {
		return this.pushStack(
			jQuery.uniqueSort(
				jQuery.merge( this.get(), jQuery( selector, context ) )
			)
		);
	},

	addBack: function( selector ) {
		return this.add( selector == null ?
			this.prevObject : this.prevObject.filter( selector )
		);
	}
} );

function sibling( cur, dir ) {
	do {
		cur = cur[ dir ];
	} while ( cur && cur.nodeType !== 1 );

	return cur;
}

jQuery.each( {
	parent: function( elem ) {
		var parent = elem.parentNode;
		return parent && parent.nodeType !== 11 ? parent : null;
	},
	parents: function( elem ) {
		return dir( elem, "parentNode" );
	},
	parentsUntil: function( elem, i, until ) {
		return dir( elem, "parentNode", until );
	},
	next: function( elem ) {
		return sibling( elem, "nextSibling" );
	},
	prev: function( elem ) {
		return sibling( elem, "previousSibling" );
	},
	nextAll: function( elem ) {
		return dir( elem, "nextSibling" );
	},
	prevAll: function( elem ) {
		return dir( elem, "previousSibling" );
	},
	nextUntil: function( elem, i, until ) {
		return dir( elem, "nextSibling", until );
	},
	prevUntil: function( elem, i, until ) {
		return dir( elem, "previousSibling", until );
	},
	siblings: function( elem ) {
		return siblings( ( elem.parentNode || {} ).firstChild, elem );
	},
	children: function( elem ) {
		return siblings( elem.firstChild );
	},
	contents: function( elem ) {
		return jQuery.nodeName( elem, "iframe" ) ?
			elem.contentDocument || elem.contentWindow.document :
			jQuery.merge( [], elem.childNodes );
	}
}, function( name, fn ) {
	jQuery.fn[ name ] = function( until, selector ) {
		var ret = jQuery.map( this, fn, until );

		if ( name.slice( -5 ) !== "Until" ) {
			selector = until;
		}

		if ( selector && typeof selector === "string" ) {
			ret = jQuery.filter( selector, ret );
		}

		if ( this.length > 1 ) {

			// Remove duplicates
			if ( !guaranteedUnique[ name ] ) {
				ret = jQuery.uniqueSort( ret );
			}

			// Reverse order for parents* and prev-derivatives
			if ( rparentsprev.test( name ) ) {
				ret = ret.reverse();
			}
		}

		return this.pushStack( ret );
	};
} );
var rnotwhite = ( /\S+/g );



// Convert String-formatted options into Object-formatted ones
function createOptions( options ) {
	var object = {};
	jQuery.each( options.match( rnotwhite ) || [], function( _, flag ) {
		object[ flag ] = true;
	} );
	return object;
}

/*
 * Create a callback list using the following parameters:
 *
 *	options: an optional list of space-separated options that will change how
 *			the callback list behaves or a more traditional option object
 *
 * By default a callback list will act like an event callback list and can be
 * "fired" multiple times.
 *
 * Possible options:
 *
 *	once:			will ensure the callback list can only be fired once (like a Deferred)
 *
 *	memory:			will keep track of previous values and will call any callback added
 *					after the list has been fired right away with the latest "memorized"
 *					values (like a Deferred)
 *
 *	unique:			will ensure a callback can only be added once (no duplicate in the list)
 *
 *	stopOnFalse:	interrupt callings when a callback returns false
 *
 */
jQuery.Callbacks = function( options ) {

	// Convert options from String-formatted to Object-formatted if needed
	// (we check in cache first)
	options = typeof options === "string" ?
		createOptions( options ) :
		jQuery.extend( {}, options );

	var // Flag to know if list is currently firing
		firing,

		// Last fire value for non-forgettable lists
		memory,

		// Flag to know if list was already fired
		fired,

		// Flag to prevent firing
		locked,

		// Actual callback list
		list = [],

		// Queue of execution data for repeatable lists
		queue = [],

		// Index of currently firing callback (modified by add/remove as needed)
		firingIndex = -1,

		// Fire callbacks
		fire = function() {

			// Enforce single-firing
			locked = options.once;

			// Execute callbacks for all pending executions,
			// respecting firingIndex overrides and runtime changes
			fired = firing = true;
			for ( ; queue.length; firingIndex = -1 ) {
				memory = queue.shift();
				while ( ++firingIndex < list.length ) {

					// Run callback and check for early termination
					if ( list[ firingIndex ].apply( memory[ 0 ], memory[ 1 ] ) === false &&
						options.stopOnFalse ) {

						// Jump to end and forget the data so .add doesn't re-fire
						firingIndex = list.length;
						memory = false;
					}
				}
			}

			// Forget the data if we're done with it
			if ( !options.memory ) {
				memory = false;
			}

			firing = false;

			// Clean up if we're done firing for good
			if ( locked ) {

				// Keep an empty list if we have data for future add calls
				if ( memory ) {
					list = [];

				// Otherwise, this object is spent
				} else {
					list = "";
				}
			}
		},

		// Actual Callbacks object
		self = {

			// Add a callback or a collection of callbacks to the list
			add: function() {
				if ( list ) {

					// If we have memory from a past run, we should fire after adding
					if ( memory && !firing ) {
						firingIndex = list.length - 1;
						queue.push( memory );
					}

					( function add( args ) {
						jQuery.each( args, function( _, arg ) {
							if ( jQuery.isFunction( arg ) ) {
								if ( !options.unique || !self.has( arg ) ) {
									list.push( arg );
								}
							} else if ( arg && arg.length && jQuery.type( arg ) !== "string" ) {

								// Inspect recursively
								add( arg );
							}
						} );
					} )( arguments );

					if ( memory && !firing ) {
						fire();
					}
				}
				return this;
			},

			// Remove a callback from the list
			remove: function() {
				jQuery.each( arguments, function( _, arg ) {
					var index;
					while ( ( index = jQuery.inArray( arg, list, index ) ) > -1 ) {
						list.splice( index, 1 );

						// Handle firing indexes
						if ( index <= firingIndex ) {
							firingIndex--;
						}
					}
				} );
				return this;
			},

			// Check if a given callback is in the list.
			// If no argument is given, return whether or not list has callbacks attached.
			has: function( fn ) {
				return fn ?
					jQuery.inArray( fn, list ) > -1 :
					list.length > 0;
			},

			// Remove all callbacks from the list
			empty: function() {
				if ( list ) {
					list = [];
				}
				return this;
			},

			// Disable .fire and .add
			// Abort any current/pending executions
			// Clear all callbacks and values
			disable: function() {
				locked = queue = [];
				list = memory = "";
				return this;
			},
			disabled: function() {
				return !list;
			},

			// Disable .fire
			// Also disable .add unless we have memory (since it would have no effect)
			// Abort any pending executions
			lock: function() {
				locked = true;
				if ( !memory ) {
					self.disable();
				}
				return this;
			},
			locked: function() {
				return !!locked;
			},

			// Call all callbacks with the given context and arguments
			fireWith: function( context, args ) {
				if ( !locked ) {
					args = args || [];
					args = [ context, args.slice ? args.slice() : args ];
					queue.push( args );
					if ( !firing ) {
						fire();
					}
				}
				return this;
			},

			// Call all the callbacks with the given arguments
			fire: function() {
				self.fireWith( this, arguments );
				return this;
			},

			// To know if the callbacks have already been called at least once
			fired: function() {
				return !!fired;
			}
		};

	return self;
};


jQuery.extend( {

	Deferred: function( func ) {
		var tuples = [

				// action, add listener, listener list, final state
				[ "resolve", "done", jQuery.Callbacks( "once memory" ), "resolved" ],
				[ "reject", "fail", jQuery.Callbacks( "once memory" ), "rejected" ],
				[ "notify", "progress", jQuery.Callbacks( "memory" ) ]
			],
			state = "pending",
			promise = {
				state: function() {
					return state;
				},
				always: function() {
					deferred.done( arguments ).fail( arguments );
					return this;
				},
				then: function( /* fnDone, fnFail, fnProgress */ ) {
					var fns = arguments;
					return jQuery.Deferred( function( newDefer ) {
						jQuery.each( tuples, function( i, tuple ) {
							var fn = jQuery.isFunction( fns[ i ] ) && fns[ i ];

							// deferred[ done | fail | progress ] for forwarding actions to newDefer
							deferred[ tuple[ 1 ] ]( function() {
								var returned = fn && fn.apply( this, arguments );
								if ( returned && jQuery.isFunction( returned.promise ) ) {
									returned.promise()
										.progress( newDefer.notify )
										.done( newDefer.resolve )
										.fail( newDefer.reject );
								} else {
									newDefer[ tuple[ 0 ] + "With" ](
										this === promise ? newDefer.promise() : this,
										fn ? [ returned ] : arguments
									);
								}
							} );
						} );
						fns = null;
					} ).promise();
				},

				// Get a promise for this deferred
				// If obj is provided, the promise aspect is added to the object
				promise: function( obj ) {
					return obj != null ? jQuery.extend( obj, promise ) : promise;
				}
			},
			deferred = {};

		// Keep pipe for back-compat
		promise.pipe = promise.then;

		// Add list-specific methods
		jQuery.each( tuples, function( i, tuple ) {
			var list = tuple[ 2 ],
				stateString = tuple[ 3 ];

			// promise[ done | fail | progress ] = list.add
			promise[ tuple[ 1 ] ] = list.add;

			// Handle state
			if ( stateString ) {
				list.add( function() {

					// state = [ resolved | rejected ]
					state = stateString;

				// [ reject_list | resolve_list ].disable; progress_list.lock
				}, tuples[ i ^ 1 ][ 2 ].disable, tuples[ 2 ][ 2 ].lock );
			}

			// deferred[ resolve | reject | notify ]
			deferred[ tuple[ 0 ] ] = function() {
				deferred[ tuple[ 0 ] + "With" ]( this === deferred ? promise : this, arguments );
				return this;
			};
			deferred[ tuple[ 0 ] + "With" ] = list.fireWith;
		} );

		// Make the deferred a promise
		promise.promise( deferred );

		// Call given func if any
		if ( func ) {
			func.call( deferred, deferred );
		}

		// All done!
		return deferred;
	},

	// Deferred helper
	when: function( subordinate /* , ..., subordinateN */ ) {
		var i = 0,
			resolveValues = slice.call( arguments ),
			length = resolveValues.length,

			// the count of uncompleted subordinates
			remaining = length !== 1 ||
				( subordinate && jQuery.isFunction( subordinate.promise ) ) ? length : 0,

			// the master Deferred.
			// If resolveValues consist of only a single Deferred, just use that.
			deferred = remaining === 1 ? subordinate : jQuery.Deferred(),

			// Update function for both resolve and progress values
			updateFunc = function( i, contexts, values ) {
				return function( value ) {
					contexts[ i ] = this;
					values[ i ] = arguments.length > 1 ? slice.call( arguments ) : value;
					if ( values === progressValues ) {
						deferred.notifyWith( contexts, values );

					} else if ( !( --remaining ) ) {
						deferred.resolveWith( contexts, values );
					}
				};
			},

			progressValues, progressContexts, resolveContexts;

		// add listeners to Deferred subordinates; treat others as resolved
		if ( length > 1 ) {
			progressValues = new Array( length );
			progressContexts = new Array( length );
			resolveContexts = new Array( length );
			for ( ; i < length; i++ ) {
				if ( resolveValues[ i ] && jQuery.isFunction( resolveValues[ i ].promise ) ) {
					resolveValues[ i ].promise()
						.progress( updateFunc( i, progressContexts, progressValues ) )
						.done( updateFunc( i, resolveContexts, resolveValues ) )
						.fail( deferred.reject );
				} else {
					--remaining;
				}
			}
		}

		// if we're not waiting on anything, resolve the master
		if ( !remaining ) {
			deferred.resolveWith( resolveContexts, resolveValues );
		}

		return deferred.promise();
	}
} );


// The deferred used on DOM ready
var readyList;

jQuery.fn.ready = function( fn ) {

	// Add the callback
	jQuery.ready.promise().done( fn );

	return this;
};

jQuery.extend( {

	// Is the DOM ready to be used? Set to true once it occurs.
	isReady: false,

	// A counter to track how many items to wait for before
	// the ready event fires. See #6781
	readyWait: 1,

	// Hold (or release) the ready event
	holdReady: function( hold ) {
		if ( hold ) {
			jQuery.readyWait++;
		} else {
			jQuery.ready( true );
		}
	},

	// Handle when the DOM is ready
	ready: function( wait ) {

		// Abort if there are pending holds or we're already ready
		if ( wait === true ? --jQuery.readyWait : jQuery.isReady ) {
			return;
		}

		// Remember that the DOM is ready
		jQuery.isReady = true;

		// If a normal DOM Ready event fired, decrement, and wait if need be
		if ( wait !== true && --jQuery.readyWait > 0 ) {
			return;
		}

		// If there are functions bound, to execute
		readyList.resolveWith( document, [ jQuery ] );

		// Trigger any bound ready events
		if ( jQuery.fn.triggerHandler ) {
			jQuery( document ).triggerHandler( "ready" );
			jQuery( document ).off( "ready" );
		}
	}
} );

/**
 * Clean-up method for dom ready events
 */
function detach() {
	if ( document.addEventListener ) {
		document.removeEventListener( "DOMContentLoaded", completed );
		window.removeEventListener( "load", completed );

	} else {
		document.detachEvent( "onreadystatechange", completed );
		window.detachEvent( "onload", completed );
	}
}

/**
 * The ready event handler and self cleanup method
 */
function completed() {

	// readyState === "complete" is good enough for us to call the dom ready in oldIE
	if ( document.addEventListener ||
		window.event.type === "load" ||
		document.readyState === "complete" ) {

		detach();
		jQuery.ready();
	}
}

jQuery.ready.promise = function( obj ) {
	if ( !readyList ) {

		readyList = jQuery.Deferred();

		// Catch cases where $(document).ready() is called
		// after the browser event has already occurred.
		// Support: IE6-10
		// Older IE sometimes signals "interactive" too soon
		if ( document.readyState === "complete" ||
			( document.readyState !== "loading" && !document.documentElement.doScroll ) ) {

			// Handle it asynchronously to allow scripts the opportunity to delay ready
			window.setTimeout( jQuery.ready );

		// Standards-based browsers support DOMContentLoaded
		} else if ( document.addEventListener ) {

			// Use the handy event callback
			document.addEventListener( "DOMContentLoaded", completed );

			// A fallback to window.onload, that will always work
			window.addEventListener( "load", completed );

		// If IE event model is used
		} else {

			// Ensure firing before onload, maybe late but safe also for iframes
			document.attachEvent( "onreadystatechange", completed );

			// A fallback to window.onload, that will always work
			window.attachEvent( "onload", completed );

			// If IE and not a frame
			// continually check to see if the document is ready
			var top = false;

			try {
				top = window.frameElement == null && document.documentElement;
			} catch ( e ) {}

			if ( top && top.doScroll ) {
				( function doScrollCheck() {
					if ( !jQuery.isReady ) {

						try {

							// Use the trick by Diego Perini
							// http://javascript.nwbox.com/IEContentLoaded/
							top.doScroll( "left" );
						} catch ( e ) {
							return window.setTimeout( doScrollCheck, 50 );
						}

						// detach all dom ready events
						detach();

						// and execute any waiting functions
						jQuery.ready();
					}
				} )();
			}
		}
	}
	return readyList.promise( obj );
};

// Kick off the DOM ready check even if the user does not
jQuery.ready.promise();




// Support: IE<9
// Iteration over object's inherited properties before its own
var i;
for ( i in jQuery( support ) ) {
	break;
}
support.ownFirst = i === "0";

// Note: most support tests are defined in their respective modules.
// false until the test is run
support.inlineBlockNeedsLayout = false;

// Execute ASAP in case we need to set body.style.zoom
jQuery( function() {

	// Minified: var a,b,c,d
	var val, div, body, container;

	body = document.getElementsByTagName( "body" )[ 0 ];
	if ( !body || !body.style ) {

		// Return for frameset docs that don't have a body
		return;
	}

	// Setup
	div = document.createElement( "div" );
	container = document.createElement( "div" );
	container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
	body.appendChild( container ).appendChild( div );

	if ( typeof div.style.zoom !== "undefined" ) {

		// Support: IE<8
		// Check if natively block-level elements act like inline-block
		// elements when setting their display to 'inline' and giving
		// them layout
		div.style.cssText = "display:inline;margin:0;border:0;padding:1px;width:1px;zoom:1";

		support.inlineBlockNeedsLayout = val = div.offsetWidth === 3;
		if ( val ) {

			// Prevent IE 6 from affecting layout for positioned elements #11048
			// Prevent IE from shrinking the body in IE 7 mode #12869
			// Support: IE<8
			body.style.zoom = 1;
		}
	}

	body.removeChild( container );
} );


( function() {
	var div = document.createElement( "div" );

	// Support: IE<9
	support.deleteExpando = true;
	try {
		delete div.test;
	} catch ( e ) {
		support.deleteExpando = false;
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();
var acceptData = function( elem ) {
	var noData = jQuery.noData[ ( elem.nodeName + " " ).toLowerCase() ],
		nodeType = +elem.nodeType || 1;

	// Do not set data on non-element DOM nodes because it will not be cleared (#8335).
	return nodeType !== 1 && nodeType !== 9 ?
		false :

		// Nodes accept data unless otherwise specified; rejection can be conditional
		!noData || noData !== true && elem.getAttribute( "classid" ) === noData;
};




var rbrace = /^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,
	rmultiDash = /([A-Z])/g;

function dataAttr( elem, key, data ) {

	// If nothing was found internally, try to fetch any
	// data from the HTML5 data-* attribute
	if ( data === undefined && elem.nodeType === 1 ) {

		var name = "data-" + key.replace( rmultiDash, "-$1" ).toLowerCase();

		data = elem.getAttribute( name );

		if ( typeof data === "string" ) {
			try {
				data = data === "true" ? true :
					data === "false" ? false :
					data === "null" ? null :

					// Only convert to a number if it doesn't change the string
					+data + "" === data ? +data :
					rbrace.test( data ) ? jQuery.parseJSON( data ) :
					data;
			} catch ( e ) {}

			// Make sure we set the data so it isn't changed later
			jQuery.data( elem, key, data );

		} else {
			data = undefined;
		}
	}

	return data;
}

// checks a cache object for emptiness
function isEmptyDataObject( obj ) {
	var name;
	for ( name in obj ) {

		// if the public data object is empty, the private is still empty
		if ( name === "data" && jQuery.isEmptyObject( obj[ name ] ) ) {
			continue;
		}
		if ( name !== "toJSON" ) {
			return false;
		}
	}

	return true;
}

function internalData( elem, name, data, pvt /* Internal Use Only */ ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var ret, thisCache,
		internalKey = jQuery.expando,

		// We have to handle DOM nodes and JS objects differently because IE6-7
		// can't GC object references properly across the DOM-JS boundary
		isNode = elem.nodeType,

		// Only DOM nodes need the global jQuery cache; JS object data is
		// attached directly to the object so GC can occur automatically
		cache = isNode ? jQuery.cache : elem,

		// Only defining an ID for JS objects if its cache already exists allows
		// the code to shortcut on the same path as a DOM node with no cache
		id = isNode ? elem[ internalKey ] : elem[ internalKey ] && internalKey;

	// Avoid doing any more work than we need to when trying to get data on an
	// object that has no data at all
	if ( ( !id || !cache[ id ] || ( !pvt && !cache[ id ].data ) ) &&
		data === undefined && typeof name === "string" ) {
		return;
	}

	if ( !id ) {

		// Only DOM nodes need a new unique ID for each element since their data
		// ends up in the global cache
		if ( isNode ) {
			id = elem[ internalKey ] = deletedIds.pop() || jQuery.guid++;
		} else {
			id = internalKey;
		}
	}

	if ( !cache[ id ] ) {

		// Avoid exposing jQuery metadata on plain JS objects when the object
		// is serialized using JSON.stringify
		cache[ id ] = isNode ? {} : { toJSON: jQuery.noop };
	}

	// An object can be passed to jQuery.data instead of a key/value pair; this gets
	// shallow copied over onto the existing cache
	if ( typeof name === "object" || typeof name === "function" ) {
		if ( pvt ) {
			cache[ id ] = jQuery.extend( cache[ id ], name );
		} else {
			cache[ id ].data = jQuery.extend( cache[ id ].data, name );
		}
	}

	thisCache = cache[ id ];

	// jQuery data() is stored in a separate object inside the object's internal data
	// cache in order to avoid key collisions between internal data and user-defined
	// data.
	if ( !pvt ) {
		if ( !thisCache.data ) {
			thisCache.data = {};
		}

		thisCache = thisCache.data;
	}

	if ( data !== undefined ) {
		thisCache[ jQuery.camelCase( name ) ] = data;
	}

	// Check for both converted-to-camel and non-converted data property names
	// If a data property was specified
	if ( typeof name === "string" ) {

		// First Try to find as-is property data
		ret = thisCache[ name ];

		// Test for null|undefined property data
		if ( ret == null ) {

			// Try to find the camelCased property
			ret = thisCache[ jQuery.camelCase( name ) ];
		}
	} else {
		ret = thisCache;
	}

	return ret;
}

function internalRemoveData( elem, name, pvt ) {
	if ( !acceptData( elem ) ) {
		return;
	}

	var thisCache, i,
		isNode = elem.nodeType,

		// See jQuery.data for more information
		cache = isNode ? jQuery.cache : elem,
		id = isNode ? elem[ jQuery.expando ] : jQuery.expando;

	// If there is already no cache entry for this object, there is no
	// purpose in continuing
	if ( !cache[ id ] ) {
		return;
	}

	if ( name ) {

		thisCache = pvt ? cache[ id ] : cache[ id ].data;

		if ( thisCache ) {

			// Support array or space separated string names for data keys
			if ( !jQuery.isArray( name ) ) {

				// try the string as a key before any manipulation
				if ( name in thisCache ) {
					name = [ name ];
				} else {

					// split the camel cased version by spaces unless a key with the spaces exists
					name = jQuery.camelCase( name );
					if ( name in thisCache ) {
						name = [ name ];
					} else {
						name = name.split( " " );
					}
				}
			} else {

				// If "name" is an array of keys...
				// When data is initially created, via ("key", "val") signature,
				// keys will be converted to camelCase.
				// Since there is no way to tell _how_ a key was added, remove
				// both plain key and camelCase key. #12786
				// This will only penalize the array argument path.
				name = name.concat( jQuery.map( name, jQuery.camelCase ) );
			}

			i = name.length;
			while ( i-- ) {
				delete thisCache[ name[ i ] ];
			}

			// If there is no data left in the cache, we want to continue
			// and let the cache object itself get destroyed
			if ( pvt ? !isEmptyDataObject( thisCache ) : !jQuery.isEmptyObject( thisCache ) ) {
				return;
			}
		}
	}

	// See jQuery.data for more information
	if ( !pvt ) {
		delete cache[ id ].data;

		// Don't destroy the parent cache unless the internal data object
		// had been the only thing left in it
		if ( !isEmptyDataObject( cache[ id ] ) ) {
			return;
		}
	}

	// Destroy the cache
	if ( isNode ) {
		jQuery.cleanData( [ elem ], true );

	// Use delete when supported for expandos or `cache` is not a window per isWindow (#10080)
	/* jshint eqeqeq: false */
	} else if ( support.deleteExpando || cache != cache.window ) {
		/* jshint eqeqeq: true */
		delete cache[ id ];

	// When all else fails, undefined
	} else {
		cache[ id ] = undefined;
	}
}

jQuery.extend( {
	cache: {},

	// The following elements (space-suffixed to avoid Object.prototype collisions)
	// throw uncatchable exceptions if you attempt to set expando properties
	noData: {
		"applet ": true,
		"embed ": true,

		// ...but Flash objects (which have this classid) *can* handle expandos
		"object ": "clsid:D27CDB6E-AE6D-11cf-96B8-444553540000"
	},

	hasData: function( elem ) {
		elem = elem.nodeType ? jQuery.cache[ elem[ jQuery.expando ] ] : elem[ jQuery.expando ];
		return !!elem && !isEmptyDataObject( elem );
	},

	data: function( elem, name, data ) {
		return internalData( elem, name, data );
	},

	removeData: function( elem, name ) {
		return internalRemoveData( elem, name );
	},

	// For internal use only.
	_data: function( elem, name, data ) {
		return internalData( elem, name, data, true );
	},

	_removeData: function( elem, name ) {
		return internalRemoveData( elem, name, true );
	}
} );

jQuery.fn.extend( {
	data: function( key, value ) {
		var i, name, data,
			elem = this[ 0 ],
			attrs = elem && elem.attributes;

		// Special expections of .data basically thwart jQuery.access,
		// so implement the relevant behavior ourselves

		// Gets all values
		if ( key === undefined ) {
			if ( this.length ) {
				data = jQuery.data( elem );

				if ( elem.nodeType === 1 && !jQuery._data( elem, "parsedAttrs" ) ) {
					i = attrs.length;
					while ( i-- ) {

						// Support: IE11+
						// The attrs elements can be null (#14894)
						if ( attrs[ i ] ) {
							name = attrs[ i ].name;
							if ( name.indexOf( "data-" ) === 0 ) {
								name = jQuery.camelCase( name.slice( 5 ) );
								dataAttr( elem, name, data[ name ] );
							}
						}
					}
					jQuery._data( elem, "parsedAttrs", true );
				}
			}

			return data;
		}

		// Sets multiple values
		if ( typeof key === "object" ) {
			return this.each( function() {
				jQuery.data( this, key );
			} );
		}

		return arguments.length > 1 ?

			// Sets one value
			this.each( function() {
				jQuery.data( this, key, value );
			} ) :

			// Gets one value
			// Try to fetch any internally stored data first
			elem ? dataAttr( elem, key, jQuery.data( elem, key ) ) : undefined;
	},

	removeData: function( key ) {
		return this.each( function() {
			jQuery.removeData( this, key );
		} );
	}
} );


jQuery.extend( {
	queue: function( elem, type, data ) {
		var queue;

		if ( elem ) {
			type = ( type || "fx" ) + "queue";
			queue = jQuery._data( elem, type );

			// Speed up dequeue by getting out quickly if this is just a lookup
			if ( data ) {
				if ( !queue || jQuery.isArray( data ) ) {
					queue = jQuery._data( elem, type, jQuery.makeArray( data ) );
				} else {
					queue.push( data );
				}
			}
			return queue || [];
		}
	},

	dequeue: function( elem, type ) {
		type = type || "fx";

		var queue = jQuery.queue( elem, type ),
			startLength = queue.length,
			fn = queue.shift(),
			hooks = jQuery._queueHooks( elem, type ),
			next = function() {
				jQuery.dequeue( elem, type );
			};

		// If the fx queue is dequeued, always remove the progress sentinel
		if ( fn === "inprogress" ) {
			fn = queue.shift();
			startLength--;
		}

		if ( fn ) {

			// Add a progress sentinel to prevent the fx queue from being
			// automatically dequeued
			if ( type === "fx" ) {
				queue.unshift( "inprogress" );
			}

			// clear up the last queue stop function
			delete hooks.stop;
			fn.call( elem, next, hooks );
		}

		if ( !startLength && hooks ) {
			hooks.empty.fire();
		}
	},

	// not intended for public consumption - generates a queueHooks object,
	// or returns the current one
	_queueHooks: function( elem, type ) {
		var key = type + "queueHooks";
		return jQuery._data( elem, key ) || jQuery._data( elem, key, {
			empty: jQuery.Callbacks( "once memory" ).add( function() {
				jQuery._removeData( elem, type + "queue" );
				jQuery._removeData( elem, key );
			} )
		} );
	}
} );

jQuery.fn.extend( {
	queue: function( type, data ) {
		var setter = 2;

		if ( typeof type !== "string" ) {
			data = type;
			type = "fx";
			setter--;
		}

		if ( arguments.length < setter ) {
			return jQuery.queue( this[ 0 ], type );
		}

		return data === undefined ?
			this :
			this.each( function() {
				var queue = jQuery.queue( this, type, data );

				// ensure a hooks for this queue
				jQuery._queueHooks( this, type );

				if ( type === "fx" && queue[ 0 ] !== "inprogress" ) {
					jQuery.dequeue( this, type );
				}
			} );
	},
	dequeue: function( type ) {
		return this.each( function() {
			jQuery.dequeue( this, type );
		} );
	},
	clearQueue: function( type ) {
		return this.queue( type || "fx", [] );
	},

	// Get a promise resolved when queues of a certain type
	// are emptied (fx is the type by default)
	promise: function( type, obj ) {
		var tmp,
			count = 1,
			defer = jQuery.Deferred(),
			elements = this,
			i = this.length,
			resolve = function() {
				if ( !( --count ) ) {
					defer.resolveWith( elements, [ elements ] );
				}
			};

		if ( typeof type !== "string" ) {
			obj = type;
			type = undefined;
		}
		type = type || "fx";

		while ( i-- ) {
			tmp = jQuery._data( elements[ i ], type + "queueHooks" );
			if ( tmp && tmp.empty ) {
				count++;
				tmp.empty.add( resolve );
			}
		}
		resolve();
		return defer.promise( obj );
	}
} );


( function() {
	var shrinkWrapBlocksVal;

	support.shrinkWrapBlocks = function() {
		if ( shrinkWrapBlocksVal != null ) {
			return shrinkWrapBlocksVal;
		}

		// Will be changed later if needed.
		shrinkWrapBlocksVal = false;

		// Minified: var b,c,d
		var div, body, container;

		body = document.getElementsByTagName( "body" )[ 0 ];
		if ( !body || !body.style ) {

			// Test fired too early or in an unsupported environment, exit.
			return;
		}

		// Setup
		div = document.createElement( "div" );
		container = document.createElement( "div" );
		container.style.cssText = "position:absolute;border:0;width:0;height:0;top:0;left:-9999px";
		body.appendChild( container ).appendChild( div );

		// Support: IE6
		// Check if elements with layout shrink-wrap their children
		if ( typeof div.style.zoom !== "undefined" ) {

			// Reset CSS: box-sizing; display; margin; border
			div.style.cssText =

				// Support: Firefox<29, Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;" +
				"padding:1px;width:1px;zoom:1";
			div.appendChild( document.createElement( "div" ) ).style.width = "5px";
			shrinkWrapBlocksVal = div.offsetWidth !== 3;
		}

		body.removeChild( container );

		return shrinkWrapBlocksVal;
	};

} )();
var pnum = ( /[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/ ).source;

var rcssNum = new RegExp( "^(?:([+-])=|)(" + pnum + ")([a-z%]*)$", "i" );


var cssExpand = [ "Top", "Right", "Bottom", "Left" ];

var isHidden = function( elem, el ) {

		// isHidden might be called from jQuery#filter function;
		// in that case, element will be second argument
		elem = el || elem;
		return jQuery.css( elem, "display" ) === "none" ||
			!jQuery.contains( elem.ownerDocument, elem );
	};



function adjustCSS( elem, prop, valueParts, tween ) {
	var adjusted,
		scale = 1,
		maxIterations = 20,
		currentValue = tween ?
			function() { return tween.cur(); } :
			function() { return jQuery.css( elem, prop, "" ); },
		initial = currentValue(),
		unit = valueParts && valueParts[ 3 ] || ( jQuery.cssNumber[ prop ] ? "" : "px" ),

		// Starting value computation is required for potential unit mismatches
		initialInUnit = ( jQuery.cssNumber[ prop ] || unit !== "px" && +initial ) &&
			rcssNum.exec( jQuery.css( elem, prop ) );

	if ( initialInUnit && initialInUnit[ 3 ] !== unit ) {

		// Trust units reported by jQuery.css
		unit = unit || initialInUnit[ 3 ];

		// Make sure we update the tween properties later on
		valueParts = valueParts || [];

		// Iteratively approximate from a nonzero starting point
		initialInUnit = +initial || 1;

		do {

			// If previous iteration zeroed out, double until we get *something*.
			// Use string for doubling so we don't accidentally see scale as unchanged below
			scale = scale || ".5";

			// Adjust and apply
			initialInUnit = initialInUnit / scale;
			jQuery.style( elem, prop, initialInUnit + unit );

		// Update scale, tolerating zero or NaN from tween.cur()
		// Break the loop if scale is unchanged or perfect, or if we've just had enough.
		} while (
			scale !== ( scale = currentValue() / initial ) && scale !== 1 && --maxIterations
		);
	}

	if ( valueParts ) {
		initialInUnit = +initialInUnit || +initial || 0;

		// Apply relative offset (+=/-=) if specified
		adjusted = valueParts[ 1 ] ?
			initialInUnit + ( valueParts[ 1 ] + 1 ) * valueParts[ 2 ] :
			+valueParts[ 2 ];
		if ( tween ) {
			tween.unit = unit;
			tween.start = initialInUnit;
			tween.end = adjusted;
		}
	}
	return adjusted;
}


// Multifunctional method to get and set values of a collection
// The value/s can optionally be executed if it's a function
var access = function( elems, fn, key, value, chainable, emptyGet, raw ) {
	var i = 0,
		length = elems.length,
		bulk = key == null;

	// Sets many values
	if ( jQuery.type( key ) === "object" ) {
		chainable = true;
		for ( i in key ) {
			access( elems, fn, i, key[ i ], true, emptyGet, raw );
		}

	// Sets one value
	} else if ( value !== undefined ) {
		chainable = true;

		if ( !jQuery.isFunction( value ) ) {
			raw = true;
		}

		if ( bulk ) {

			// Bulk operations run against the entire set
			if ( raw ) {
				fn.call( elems, value );
				fn = null;

			// ...except when executing function values
			} else {
				bulk = fn;
				fn = function( elem, key, value ) {
					return bulk.call( jQuery( elem ), value );
				};
			}
		}

		if ( fn ) {
			for ( ; i < length; i++ ) {
				fn(
					elems[ i ],
					key,
					raw ? value : value.call( elems[ i ], i, fn( elems[ i ], key ) )
				);
			}
		}
	}

	return chainable ?
		elems :

		// Gets
		bulk ?
			fn.call( elems ) :
			length ? fn( elems[ 0 ], key ) : emptyGet;
};
var rcheckableType = ( /^(?:checkbox|radio)$/i );

var rtagName = ( /<([\w:-]+)/ );

var rscriptType = ( /^$|\/(?:java|ecma)script/i );

var rleadingWhitespace = ( /^\s+/ );

var nodeNames = "abbr|article|aside|audio|bdi|canvas|data|datalist|" +
		"details|dialog|figcaption|figure|footer|header|hgroup|main|" +
		"mark|meter|nav|output|picture|progress|section|summary|template|time|video";



function createSafeFragment( document ) {
	var list = nodeNames.split( "|" ),
		safeFrag = document.createDocumentFragment();

	if ( safeFrag.createElement ) {
		while ( list.length ) {
			safeFrag.createElement(
				list.pop()
			);
		}
	}
	return safeFrag;
}


( function() {
	var div = document.createElement( "div" ),
		fragment = document.createDocumentFragment(),
		input = document.createElement( "input" );

	// Setup
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";

	// IE strips leading whitespace when .innerHTML is used
	support.leadingWhitespace = div.firstChild.nodeType === 3;

	// Make sure that tbody elements aren't automatically inserted
	// IE will insert them into empty tables
	support.tbody = !div.getElementsByTagName( "tbody" ).length;

	// Make sure that link elements get serialized correctly by innerHTML
	// This requires a wrapper element in IE
	support.htmlSerialize = !!div.getElementsByTagName( "link" ).length;

	// Makes sure cloning an html5 element does not cause problems
	// Where outerHTML is undefined, this still works
	support.html5Clone =
		document.createElement( "nav" ).cloneNode( true ).outerHTML !== "<:nav></:nav>";

	// Check if a disconnected checkbox will retain its checked
	// value of true after appended to the DOM (IE6/7)
	input.type = "checkbox";
	input.checked = true;
	fragment.appendChild( input );
	support.appendChecked = input.checked;

	// Make sure textarea (and checkbox) defaultValue is properly cloned
	// Support: IE6-IE11+
	div.innerHTML = "<textarea>x</textarea>";
	support.noCloneChecked = !!div.cloneNode( true ).lastChild.defaultValue;

	// #11217 - WebKit loses check when the name is after the checked attribute
	fragment.appendChild( div );

	// Support: Windows Web Apps (WWA)
	// `name` and `type` must use .setAttribute for WWA (#14901)
	input = document.createElement( "input" );
	input.setAttribute( "type", "radio" );
	input.setAttribute( "checked", "checked" );
	input.setAttribute( "name", "t" );

	div.appendChild( input );

	// Support: Safari 5.1, iOS 5.1, Android 4.x, Android 2.3
	// old WebKit doesn't clone checked state correctly in fragments
	support.checkClone = div.cloneNode( true ).cloneNode( true ).lastChild.checked;

	// Support: IE<9
	// Cloned elements keep attachEvent handlers, we use addEventListener on IE9+
	support.noCloneEvent = !!div.addEventListener;

	// Support: IE<9
	// Since attributes and properties are the same in IE,
	// cleanData must set properties to undefined rather than use removeAttribute
	div[ jQuery.expando ] = 1;
	support.attributes = !div.getAttribute( jQuery.expando );
} )();


// We have to close these tags to support XHTML (#13200)
var wrapMap = {
	option: [ 1, "<select multiple='multiple'>", "</select>" ],
	legend: [ 1, "<fieldset>", "</fieldset>" ],
	area: [ 1, "<map>", "</map>" ],

	// Support: IE8
	param: [ 1, "<object>", "</object>" ],
	thead: [ 1, "<table>", "</table>" ],
	tr: [ 2, "<table><tbody>", "</tbody></table>" ],
	col: [ 2, "<table><tbody></tbody><colgroup>", "</colgroup></table>" ],
	td: [ 3, "<table><tbody><tr>", "</tr></tbody></table>" ],

	// IE6-8 can't serialize link, script, style, or any html5 (NoScope) tags,
	// unless wrapped in a div with non-breaking characters in front of it.
	_default: support.htmlSerialize ? [ 0, "", "" ] : [ 1, "X<div>", "</div>" ]
};

// Support: IE8-IE9
wrapMap.optgroup = wrapMap.option;

wrapMap.tbody = wrapMap.tfoot = wrapMap.colgroup = wrapMap.caption = wrapMap.thead;
wrapMap.th = wrapMap.td;


function getAll( context, tag ) {
	var elems, elem,
		i = 0,
		found = typeof context.getElementsByTagName !== "undefined" ?
			context.getElementsByTagName( tag || "*" ) :
			typeof context.querySelectorAll !== "undefined" ?
				context.querySelectorAll( tag || "*" ) :
				undefined;

	if ( !found ) {
		for ( found = [], elems = context.childNodes || context;
			( elem = elems[ i ] ) != null;
			i++
		) {
			if ( !tag || jQuery.nodeName( elem, tag ) ) {
				found.push( elem );
			} else {
				jQuery.merge( found, getAll( elem, tag ) );
			}
		}
	}

	return tag === undefined || tag && jQuery.nodeName( context, tag ) ?
		jQuery.merge( [ context ], found ) :
		found;
}


// Mark scripts as having already been evaluated
function setGlobalEval( elems, refElements ) {
	var elem,
		i = 0;
	for ( ; ( elem = elems[ i ] ) != null; i++ ) {
		jQuery._data(
			elem,
			"globalEval",
			!refElements || jQuery._data( refElements[ i ], "globalEval" )
		);
	}
}


var rhtml = /<|&#?\w+;/,
	rtbody = /<tbody/i;

function fixDefaultChecked( elem ) {
	if ( rcheckableType.test( elem.type ) ) {
		elem.defaultChecked = elem.checked;
	}
}

function buildFragment( elems, context, scripts, selection, ignored ) {
	var j, elem, contains,
		tmp, tag, tbody, wrap,
		l = elems.length,

		// Ensure a safe fragment
		safe = createSafeFragment( context ),

		nodes = [],
		i = 0;

	for ( ; i < l; i++ ) {
		elem = elems[ i ];

		if ( elem || elem === 0 ) {

			// Add nodes directly
			if ( jQuery.type( elem ) === "object" ) {
				jQuery.merge( nodes, elem.nodeType ? [ elem ] : elem );

			// Convert non-html into a text node
			} else if ( !rhtml.test( elem ) ) {
				nodes.push( context.createTextNode( elem ) );

			// Convert html into DOM nodes
			} else {
				tmp = tmp || safe.appendChild( context.createElement( "div" ) );

				// Deserialize a standard representation
				tag = ( rtagName.exec( elem ) || [ "", "" ] )[ 1 ].toLowerCase();
				wrap = wrapMap[ tag ] || wrapMap._default;

				tmp.innerHTML = wrap[ 1 ] + jQuery.htmlPrefilter( elem ) + wrap[ 2 ];

				// Descend through wrappers to the right content
				j = wrap[ 0 ];
				while ( j-- ) {
					tmp = tmp.lastChild;
				}

				// Manually add leading whitespace removed by IE
				if ( !support.leadingWhitespace && rleadingWhitespace.test( elem ) ) {
					nodes.push( context.createTextNode( rleadingWhitespace.exec( elem )[ 0 ] ) );
				}

				// Remove IE's autoinserted <tbody> from table fragments
				if ( !support.tbody ) {

					// String was a <table>, *may* have spurious <tbody>
					elem = tag === "table" && !rtbody.test( elem ) ?
						tmp.firstChild :

						// String was a bare <thead> or <tfoot>
						wrap[ 1 ] === "<table>" && !rtbody.test( elem ) ?
							tmp :
							0;

					j = elem && elem.childNodes.length;
					while ( j-- ) {
						if ( jQuery.nodeName( ( tbody = elem.childNodes[ j ] ), "tbody" ) &&
							!tbody.childNodes.length ) {

							elem.removeChild( tbody );
						}
					}
				}

				jQuery.merge( nodes, tmp.childNodes );

				// Fix #12392 for WebKit and IE > 9
				tmp.textContent = "";

				// Fix #12392 for oldIE
				while ( tmp.firstChild ) {
					tmp.removeChild( tmp.firstChild );
				}

				// Remember the top-level container for proper cleanup
				tmp = safe.lastChild;
			}
		}
	}

	// Fix #11356: Clear elements from fragment
	if ( tmp ) {
		safe.removeChild( tmp );
	}

	// Reset defaultChecked for any radios and checkboxes
	// about to be appended to the DOM in IE 6/7 (#8060)
	if ( !support.appendChecked ) {
		jQuery.grep( getAll( nodes, "input" ), fixDefaultChecked );
	}

	i = 0;
	while ( ( elem = nodes[ i++ ] ) ) {

		// Skip elements already in the context collection (trac-4087)
		if ( selection && jQuery.inArray( elem, selection ) > -1 ) {
			if ( ignored ) {
				ignored.push( elem );
			}

			continue;
		}

		contains = jQuery.contains( elem.ownerDocument, elem );

		// Append to fragment
		tmp = getAll( safe.appendChild( elem ), "script" );

		// Preserve script evaluation history
		if ( contains ) {
			setGlobalEval( tmp );
		}

		// Capture executables
		if ( scripts ) {
			j = 0;
			while ( ( elem = tmp[ j++ ] ) ) {
				if ( rscriptType.test( elem.type || "" ) ) {
					scripts.push( elem );
				}
			}
		}
	}

	tmp = null;

	return safe;
}


( function() {
	var i, eventName,
		div = document.createElement( "div" );

	// Support: IE<9 (lack submit/change bubble), Firefox (lack focus(in | out) events)
	for ( i in { submit: true, change: true, focusin: true } ) {
		eventName = "on" + i;

		if ( !( support[ i ] = eventName in window ) ) {

			// Beware of CSP restrictions (https://developer.mozilla.org/en/Security/CSP)
			div.setAttribute( eventName, "t" );
			support[ i ] = div.attributes[ eventName ].expando === false;
		}
	}

	// Null elements to avoid leaks in IE.
	div = null;
} )();


var rformElems = /^(?:input|select|textarea)$/i,
	rkeyEvent = /^key/,
	rmouseEvent = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
	rfocusMorph = /^(?:focusinfocus|focusoutblur)$/,
	rtypenamespace = /^([^.]*)(?:\.(.+)|)/;

function returnTrue() {
	return true;
}

function returnFalse() {
	return false;
}

// Support: IE9
// See #13393 for more info
function safeActiveElement() {
	try {
		return document.activeElement;
	} catch ( err ) { }
}

function on( elem, types, selector, data, fn, one ) {
	var origFn, type;

	// Types can be a map of types/handlers
	if ( typeof types === "object" ) {

		// ( types-Object, selector, data )
		if ( typeof selector !== "string" ) {

			// ( types-Object, data )
			data = data || selector;
			selector = undefined;
		}
		for ( type in types ) {
			on( elem, type, selector, data, types[ type ], one );
		}
		return elem;
	}

	if ( data == null && fn == null ) {

		// ( types, fn )
		fn = selector;
		data = selector = undefined;
	} else if ( fn == null ) {
		if ( typeof selector === "string" ) {

			// ( types, selector, fn )
			fn = data;
			data = undefined;
		} else {

			// ( types, data, fn )
			fn = data;
			data = selector;
			selector = undefined;
		}
	}
	if ( fn === false ) {
		fn = returnFalse;
	} else if ( !fn ) {
		return elem;
	}

	if ( one === 1 ) {
		origFn = fn;
		fn = function( event ) {

			// Can use an empty set, since event contains the info
			jQuery().off( event );
			return origFn.apply( this, arguments );
		};

		// Use same guid so caller can remove using origFn
		fn.guid = origFn.guid || ( origFn.guid = jQuery.guid++ );
	}
	return elem.each( function() {
		jQuery.event.add( this, types, fn, data, selector );
	} );
}

/*
 * Helper functions for managing events -- not part of the public interface.
 * Props to Dean Edwards' addEvent library for many of the ideas.
 */
jQuery.event = {

	global: {},

	add: function( elem, types, handler, data, selector ) {
		var tmp, events, t, handleObjIn,
			special, eventHandle, handleObj,
			handlers, type, namespaces, origType,
			elemData = jQuery._data( elem );

		// Don't attach events to noData or text/comment nodes (but allow plain objects)
		if ( !elemData ) {
			return;
		}

		// Caller can pass in an object of custom data in lieu of the handler
		if ( handler.handler ) {
			handleObjIn = handler;
			handler = handleObjIn.handler;
			selector = handleObjIn.selector;
		}

		// Make sure that the handler has a unique ID, used to find/remove it later
		if ( !handler.guid ) {
			handler.guid = jQuery.guid++;
		}

		// Init the element's event structure and main handler, if this is the first
		if ( !( events = elemData.events ) ) {
			events = elemData.events = {};
		}
		if ( !( eventHandle = elemData.handle ) ) {
			eventHandle = elemData.handle = function( e ) {

				// Discard the second event of a jQuery.event.trigger() and
				// when an event is called after a page has unloaded
				return typeof jQuery !== "undefined" &&
					( !e || jQuery.event.triggered !== e.type ) ?
					jQuery.event.dispatch.apply( eventHandle.elem, arguments ) :
					undefined;
			};

			// Add elem as a property of the handle fn to prevent a memory leak
			// with IE non-native events
			eventHandle.elem = elem;
		}

		// Handle multiple events separated by a space
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// There *must* be a type, no attaching namespace-only handlers
			if ( !type ) {
				continue;
			}

			// If event changes its type, use the special event handlers for the changed type
			special = jQuery.event.special[ type ] || {};

			// If selector defined, determine special event api type, otherwise given type
			type = ( selector ? special.delegateType : special.bindType ) || type;

			// Update special based on newly reset type
			special = jQuery.event.special[ type ] || {};

			// handleObj is passed to all event handlers
			handleObj = jQuery.extend( {
				type: type,
				origType: origType,
				data: data,
				handler: handler,
				guid: handler.guid,
				selector: selector,
				needsContext: selector && jQuery.expr.match.needsContext.test( selector ),
				namespace: namespaces.join( "." )
			}, handleObjIn );

			// Init the event handler queue if we're the first
			if ( !( handlers = events[ type ] ) ) {
				handlers = events[ type ] = [];
				handlers.delegateCount = 0;

				// Only use addEventListener/attachEvent if the special events handler returns false
				if ( !special.setup ||
					special.setup.call( elem, data, namespaces, eventHandle ) === false ) {

					// Bind the global event handler to the element
					if ( elem.addEventListener ) {
						elem.addEventListener( type, eventHandle, false );

					} else if ( elem.attachEvent ) {
						elem.attachEvent( "on" + type, eventHandle );
					}
				}
			}

			if ( special.add ) {
				special.add.call( elem, handleObj );

				if ( !handleObj.handler.guid ) {
					handleObj.handler.guid = handler.guid;
				}
			}

			// Add to the element's handler list, delegates in front
			if ( selector ) {
				handlers.splice( handlers.delegateCount++, 0, handleObj );
			} else {
				handlers.push( handleObj );
			}

			// Keep track of which events have ever been used, for event optimization
			jQuery.event.global[ type ] = true;
		}

		// Nullify elem to prevent memory leaks in IE
		elem = null;
	},

	// Detach an event or set of events from an element
	remove: function( elem, types, handler, selector, mappedTypes ) {
		var j, handleObj, tmp,
			origCount, t, events,
			special, handlers, type,
			namespaces, origType,
			elemData = jQuery.hasData( elem ) && jQuery._data( elem );

		if ( !elemData || !( events = elemData.events ) ) {
			return;
		}

		// Once for each type.namespace in types; type may be omitted
		types = ( types || "" ).match( rnotwhite ) || [ "" ];
		t = types.length;
		while ( t-- ) {
			tmp = rtypenamespace.exec( types[ t ] ) || [];
			type = origType = tmp[ 1 ];
			namespaces = ( tmp[ 2 ] || "" ).split( "." ).sort();

			// Unbind all events (on this namespace, if provided) for the element
			if ( !type ) {
				for ( type in events ) {
					jQuery.event.remove( elem, type + types[ t ], handler, selector, true );
				}
				continue;
			}

			special = jQuery.event.special[ type ] || {};
			type = ( selector ? special.delegateType : special.bindType ) || type;
			handlers = events[ type ] || [];
			tmp = tmp[ 2 ] &&
				new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" );

			// Remove matching events
			origCount = j = handlers.length;
			while ( j-- ) {
				handleObj = handlers[ j ];

				if ( ( mappedTypes || origType === handleObj.origType ) &&
					( !handler || handler.guid === handleObj.guid ) &&
					( !tmp || tmp.test( handleObj.namespace ) ) &&
					( !selector || selector === handleObj.selector ||
						selector === "**" && handleObj.selector ) ) {
					handlers.splice( j, 1 );

					if ( handleObj.selector ) {
						handlers.delegateCount--;
					}
					if ( special.remove ) {
						special.remove.call( elem, handleObj );
					}
				}
			}

			// Remove generic event handler if we removed something and no more handlers exist
			// (avoids potential for endless recursion during removal of special event handlers)
			if ( origCount && !handlers.length ) {
				if ( !special.teardown ||
					special.teardown.call( elem, namespaces, elemData.handle ) === false ) {

					jQuery.removeEvent( elem, type, elemData.handle );
				}

				delete events[ type ];
			}
		}

		// Remove the expando if it's no longer used
		if ( jQuery.isEmptyObject( events ) ) {
			delete elemData.handle;

			// removeData also checks for emptiness and clears the expando if empty
			// so use it instead of delete
			jQuery._removeData( elem, "events" );
		}
	},

	trigger: function( event, data, elem, onlyHandlers ) {
		var handle, ontype, cur,
			bubbleType, special, tmp, i,
			eventPath = [ elem || document ],
			type = hasOwn.call( event, "type" ) ? event.type : event,
			namespaces = hasOwn.call( event, "namespace" ) ? event.namespace.split( "." ) : [];

		cur = tmp = elem = elem || document;

		// Don't do events on text and comment nodes
		if ( elem.nodeType === 3 || elem.nodeType === 8 ) {
			return;
		}

		// focus/blur morphs to focusin/out; ensure we're not firing them right now
		if ( rfocusMorph.test( type + jQuery.event.triggered ) ) {
			return;
		}

		if ( type.indexOf( "." ) > -1 ) {

			// Namespaced trigger; create a regexp to match event type in handle()
			namespaces = type.split( "." );
			type = namespaces.shift();
			namespaces.sort();
		}
		ontype = type.indexOf( ":" ) < 0 && "on" + type;

		// Caller can pass in a jQuery.Event object, Object, or just an event type string
		event = event[ jQuery.expando ] ?
			event :
			new jQuery.Event( type, typeof event === "object" && event );

		// Trigger bitmask: & 1 for native handlers; & 2 for jQuery (always true)
		event.isTrigger = onlyHandlers ? 2 : 3;
		event.namespace = namespaces.join( "." );
		event.rnamespace = event.namespace ?
			new RegExp( "(^|\\.)" + namespaces.join( "\\.(?:.*\\.|)" ) + "(\\.|$)" ) :
			null;

		// Clean up the event in case it is being reused
		event.result = undefined;
		if ( !event.target ) {
			event.target = elem;
		}

		// Clone any incoming data and prepend the event, creating the handler arg list
		data = data == null ?
			[ event ] :
			jQuery.makeArray( data, [ event ] );

		// Allow special events to draw outside the lines
		special = jQuery.event.special[ type ] || {};
		if ( !onlyHandlers && special.trigger && special.trigger.apply( elem, data ) === false ) {
			return;
		}

		// Determine event propagation path in advance, per W3C events spec (#9951)
		// Bubble up to document, then to window; watch for a global ownerDocument var (#9724)
		if ( !onlyHandlers && !special.noBubble && !jQuery.isWindow( elem ) ) {

			bubbleType = special.delegateType || type;
			if ( !rfocusMorph.test( bubbleType + type ) ) {
				cur = cur.parentNode;
			}
			for ( ; cur; cur = cur.parentNode ) {
				eventPath.push( cur );
				tmp = cur;
			}

			// Only add window if we got to document (e.g., not plain obj or detached DOM)
			if ( tmp === ( elem.ownerDocument || document ) ) {
				eventPath.push( tmp.defaultView || tmp.parentWindow || window );
			}
		}

		// Fire handlers on the event path
		i = 0;
		while ( ( cur = eventPath[ i++ ] ) && !event.isPropagationStopped() ) {

			event.type = i > 1 ?
				bubbleType :
				special.bindType || type;

			// jQuery handler
			handle = ( jQuery._data( cur, "events" ) || {} )[ event.type ] &&
				jQuery._data( cur, "handle" );

			if ( handle ) {
				handle.apply( cur, data );
			}

			// Native handler
			handle = ontype && cur[ ontype ];
			if ( handle && handle.apply && acceptData( cur ) ) {
				event.result = handle.apply( cur, data );
				if ( event.result === false ) {
					event.preventDefault();
				}
			}
		}
		event.type = type;

		// If nobody prevented the default action, do it now
		if ( !onlyHandlers && !event.isDefaultPrevented() ) {

			if (
				( !special._default ||
				 special._default.apply( eventPath.pop(), data ) === false
				) && acceptData( elem )
			) {

				// Call a native DOM method on the target with the same name name as the event.
				// Can't use an .isFunction() check here because IE6/7 fails that test.
				// Don't do default actions on window, that's where global variables be (#6170)
				if ( ontype && elem[ type ] && !jQuery.isWindow( elem ) ) {

					// Don't re-trigger an onFOO event when we call its FOO() method
					tmp = elem[ ontype ];

					if ( tmp ) {
						elem[ ontype ] = null;
					}

					// Prevent re-triggering of the same event, since we already bubbled it above
					jQuery.event.triggered = type;
					try {
						elem[ type ]();
					} catch ( e ) {

						// IE<9 dies on focus/blur to hidden element (#1486,#12518)
						// only reproducible on winXP IE8 native, not IE9 in IE8 mode
					}
					jQuery.event.triggered = undefined;

					if ( tmp ) {
						elem[ ontype ] = tmp;
					}
				}
			}
		}

		return event.result;
	},

	dispatch: function( event ) {

		// Make a writable jQuery.Event from the native event object
		event = jQuery.event.fix( event );

		var i, j, ret, matched, handleObj,
			handlerQueue = [],
			args = slice.call( arguments ),
			handlers = ( jQuery._data( this, "events" ) || {} )[ event.type ] || [],
			special = jQuery.event.special[ event.type ] || {};

		// Use the fix-ed jQuery.Event rather than the (read-only) native event
		args[ 0 ] = event;
		event.delegateTarget = this;

		// Call the preDispatch hook for the mapped type, and let it bail if desired
		if ( special.preDispatch && special.preDispatch.call( this, event ) === false ) {
			return;
		}

		// Determine handlers
		handlerQueue = jQuery.event.handlers.call( this, event, handlers );

		// Run delegates first; they may want to stop propagation beneath us
		i = 0;
		while ( ( matched = handlerQueue[ i++ ] ) && !event.isPropagationStopped() ) {
			event.currentTarget = matched.elem;

			j = 0;
			while ( ( handleObj = matched.handlers[ j++ ] ) &&
				!event.isImmediatePropagationStopped() ) {

				// Triggered event must either 1) have no namespace, or 2) have namespace(s)
				// a subset or equal to those in the bound event (both can have no namespace).
				if ( !event.rnamespace || event.rnamespace.test( handleObj.namespace ) ) {

					event.handleObj = handleObj;
					event.data = handleObj.data;

					ret = ( ( jQuery.event.special[ handleObj.origType ] || {} ).handle ||
						handleObj.handler ).apply( matched.elem, args );

					if ( ret !== undefined ) {
						if ( ( event.result = ret ) === false ) {
							event.preventDefault();
							event.stopPropagation();
						}
					}
				}
			}
		}

		// Call the postDispatch hook for the mapped type
		if ( special.postDispatch ) {
			special.postDispatch.call( this, event );
		}

		return event.result;
	},

	handlers: function( event, handlers ) {
		var i, matches, sel, handleObj,
			handlerQueue = [],
			delegateCount = handlers.delegateCount,
			cur = event.target;

		// Support (at least): Chrome, IE9
		// Find delegate handlers
		// Black-hole SVG <use> instance trees (#13180)
		//
		// Support: Firefox<=42+
		// Avoid non-left-click in FF but don't block IE radio events (#3861, gh-2343)
		if ( delegateCount && cur.nodeType &&
			( event.type !== "click" || isNaN( event.button ) || event.button < 1 ) ) {

			/* jshint eqeqeq: false */
			for ( ; cur != this; cur = cur.parentNode || this ) {
				/* jshint eqeqeq: true */

				// Don't check non-elements (#13208)
				// Don't process clicks on disabled elements (#6911, #8165, #11382, #11764)
				if ( cur.nodeType === 1 && ( cur.disabled !== true || event.type !== "click" ) ) {
					matches = [];
					for ( i = 0; i < delegateCount; i++ ) {
						handleObj = handlers[ i ];

						// Don't conflict with Object.prototype properties (#13203)
						sel = handleObj.selector + " ";

						if ( matches[ sel ] === undefined ) {
							matches[ sel ] = handleObj.needsContext ?
								jQuery( sel, this ).index( cur ) > -1 :
								jQuery.find( sel, this, null, [ cur ] ).length;
						}
						if ( matches[ sel ] ) {
							matches.push( handleObj );
						}
					}
					if ( matches.length ) {
						handlerQueue.push( { elem: cur, handlers: matches } );
					}
				}
			}
		}

		// Add the remaining (directly-bound) handlers
		if ( delegateCount < handlers.length ) {
			handlerQueue.push( { elem: this, handlers: handlers.slice( delegateCount ) } );
		}

		return handlerQueue;
	},

	fix: function( event ) {
		if ( event[ jQuery.expando ] ) {
			return event;
		}

		// Create a writable copy of the event object and normalize some properties
		var i, prop, copy,
			type = event.type,
			originalEvent = event,
			fixHook = this.fixHooks[ type ];

		if ( !fixHook ) {
			this.fixHooks[ type ] = fixHook =
				rmouseEvent.test( type ) ? this.mouseHooks :
				rkeyEvent.test( type ) ? this.keyHooks :
				{};
		}
		copy = fixHook.props ? this.props.concat( fixHook.props ) : this.props;

		event = new jQuery.Event( originalEvent );

		i = copy.length;
		while ( i-- ) {
			prop = copy[ i ];
			event[ prop ] = originalEvent[ prop ];
		}

		// Support: IE<9
		// Fix target property (#1925)
		if ( !event.target ) {
			event.target = originalEvent.srcElement || document;
		}

		// Support: Safari 6-8+
		// Target should not be a text node (#504, #13143)
		if ( event.target.nodeType === 3 ) {
			event.target = event.target.parentNode;
		}

		// Support: IE<9
		// For mouse/key events, metaKey==false if it's undefined (#3368, #11328)
		event.metaKey = !!event.metaKey;

		return fixHook.filter ? fixHook.filter( event, originalEvent ) : event;
	},

	// Includes some event props shared by KeyEvent and MouseEvent
	props: ( "altKey bubbles cancelable ctrlKey currentTarget detail eventPhase " +
		"metaKey relatedTarget shiftKey target timeStamp view which" ).split( " " ),

	fixHooks: {},

	keyHooks: {
		props: "char charCode key keyCode".split( " " ),
		filter: function( event, original ) {

			// Add which for key events
			if ( event.which == null ) {
				event.which = original.charCode != null ? original.charCode : original.keyCode;
			}

			return event;
		}
	},

	mouseHooks: {
		props: ( "button buttons clientX clientY fromElement offsetX offsetY " +
			"pageX pageY screenX screenY toElement" ).split( " " ),
		filter: function( event, original ) {
			var body, eventDoc, doc,
				button = original.button,
				fromElement = original.fromElement;

			// Calculate pageX/Y if missing and clientX/Y available
			if ( event.pageX == null && original.clientX != null ) {
				eventDoc = event.target.ownerDocument || document;
				doc = eventDoc.documentElement;
				body = eventDoc.body;

				event.pageX = original.clientX +
					( doc && doc.scrollLeft || body && body.scrollLeft || 0 ) -
					( doc && doc.clientLeft || body && body.clientLeft || 0 );
				event.pageY = original.clientY +
					( doc && doc.scrollTop  || body && body.scrollTop  || 0 ) -
					( doc && doc.clientTop  || body && body.clientTop  || 0 );
			}

			// Add relatedTarget, if necessary
			if ( !event.relatedTarget && fromElement ) {
				event.relatedTarget = fromElement === event.target ?
					original.toElement :
					fromElement;
			}

			// Add which for click: 1 === left; 2 === middle; 3 === right
			// Note: button is not normalized, so don't use it
			if ( !event.which && button !== undefined ) {
				event.which = ( button & 1 ? 1 : ( button & 2 ? 3 : ( button & 4 ? 2 : 0 ) ) );
			}

			return event;
		}
	},

	special: {
		load: {

			// Prevent triggered image.load events from bubbling to window.load
			noBubble: true
		},
		focus: {

			// Fire native event if possible so blur/focus sequence is correct
			trigger: function() {
				if ( this !== safeActiveElement() && this.focus ) {
					try {
						this.focus();
						return false;
					} catch ( e ) {

						// Support: IE<9
						// If we error on focus to hidden element (#1486, #12518),
						// let .trigger() run the handlers
					}
				}
			},
			delegateType: "focusin"
		},
		blur: {
			trigger: function() {
				if ( this === safeActiveElement() && this.blur ) {
					this.blur();
					return false;
				}
			},
			delegateType: "focusout"
		},
		click: {

			// For checkbox, fire native event so checked state will be right
			trigger: function() {
				if ( jQuery.nodeName( this, "input" ) && this.type === "checkbox" && this.click ) {
					this.click();
					return false;
				}
			},

			// For cross-browser consistency, don't fire native .click() on links
			_default: function( event ) {
				return jQuery.nodeName( event.target, "a" );
			}
		},

		beforeunload: {
			postDispatch: function( event ) {

				// Support: Firefox 20+
				// Firefox doesn't alert if the returnValue field is not set.
				if ( event.result !== undefined && event.originalEvent ) {
					event.originalEvent.returnValue = event.result;
				}
			}
		}
	},

	// Piggyback on a donor event to simulate a different one
	simulate: function( type, elem, event ) {
		var e = jQuery.extend(
			new jQuery.Event(),
			event,
			{
				type: type,
				isSimulated: true

				// Previously, `originalEvent: {}` was set here, so stopPropagation call
				// would not be triggered on donor event, since in our own
				// jQuery.event.stopPropagation function we had a check for existence of
				// originalEvent.stopPropagation method, so, consequently it would be a noop.
				//
				// Guard for simulated events was moved to jQuery.event.stopPropagation function
				// since `originalEvent` should point to the original event for the
				// constancy with other events and for more focused logic
			}
		);

		jQuery.event.trigger( e, null, elem );

		if ( e.isDefaultPrevented() ) {
			event.preventDefault();
		}
	}
};

jQuery.removeEvent = document.removeEventListener ?
	function( elem, type, handle ) {

		// This "if" is needed for plain objects
		if ( elem.removeEventListener ) {
			elem.removeEventListener( type, handle );
		}
	} :
	function( elem, type, handle ) {
		var name = "on" + type;

		if ( elem.detachEvent ) {

			// #8545, #7054, preventing memory leaks for custom events in IE6-8
			// detachEvent needed property on element, by name of that event,
			// to properly expose it to GC
			if ( typeof elem[ name ] === "undefined" ) {
				elem[ name ] = null;
			}

			elem.detachEvent( name, handle );
		}
	};

jQuery.Event = function( src, props ) {

	// Allow instantiation without the 'new' keyword
	if ( !( this instanceof jQuery.Event ) ) {
		return new jQuery.Event( src, props );
	}

	// Event object
	if ( src && src.type ) {
		this.originalEvent = src;
		this.type = src.type;

		// Events bubbling up the document may have been marked as prevented
		// by a handler lower down the tree; reflect the correct value.
		this.isDefaultPrevented = src.defaultPrevented ||
				src.defaultPrevented === undefined &&

				// Support: IE < 9, Android < 4.0
				src.returnValue === false ?
			returnTrue :
			returnFalse;

	// Event type
	} else {
		this.type = src;
	}

	// Put explicitly provided properties onto the event object
	if ( props ) {
		jQuery.extend( this, props );
	}

	// Create a timestamp if incoming event doesn't have one
	this.timeStamp = src && src.timeStamp || jQuery.now();

	// Mark it as fixed
	this[ jQuery.expando ] = true;
};

// jQuery.Event is based on DOM3 Events as specified by the ECMAScript Language Binding
// http://www.w3.org/TR/2003/WD-DOM-Level-3-Events-20030331/ecma-script-binding.html
jQuery.Event.prototype = {
	constructor: jQuery.Event,
	isDefaultPrevented: returnFalse,
	isPropagationStopped: returnFalse,
	isImmediatePropagationStopped: returnFalse,

	preventDefault: function() {
		var e = this.originalEvent;

		this.isDefaultPrevented = returnTrue;
		if ( !e ) {
			return;
		}

		// If preventDefault exists, run it on the original event
		if ( e.preventDefault ) {
			e.preventDefault();

		// Support: IE
		// Otherwise set the returnValue property of the original event to false
		} else {
			e.returnValue = false;
		}
	},
	stopPropagation: function() {
		var e = this.originalEvent;

		this.isPropagationStopped = returnTrue;

		if ( !e || this.isSimulated ) {
			return;
		}

		// If stopPropagation exists, run it on the original event
		if ( e.stopPropagation ) {
			e.stopPropagation();
		}

		// Support: IE
		// Set the cancelBubble property of the original event to true
		e.cancelBubble = true;
	},
	stopImmediatePropagation: function() {
		var e = this.originalEvent;

		this.isImmediatePropagationStopped = returnTrue;

		if ( e && e.stopImmediatePropagation ) {
			e.stopImmediatePropagation();
		}

		this.stopPropagation();
	}
};

// Create mouseenter/leave events using mouseover/out and event-time checks
// so that event delegation works in jQuery.
// Do the same for pointerenter/pointerleave and pointerover/pointerout
//
// Support: Safari 7 only
// Safari sends mouseenter too often; see:
// https://code.google.com/p/chromium/issues/detail?id=470258
// for the description of the bug (it existed in older Chrome versions as well).
jQuery.each( {
	mouseenter: "mouseover",
	mouseleave: "mouseout",
	pointerenter: "pointerover",
	pointerleave: "pointerout"
}, function( orig, fix ) {
	jQuery.event.special[ orig ] = {
		delegateType: fix,
		bindType: fix,

		handle: function( event ) {
			var ret,
				target = this,
				related = event.relatedTarget,
				handleObj = event.handleObj;

			// For mouseenter/leave call the handler if related is outside the target.
			// NB: No relatedTarget if the mouse left/entered the browser window
			if ( !related || ( related !== target && !jQuery.contains( target, related ) ) ) {
				event.type = handleObj.origType;
				ret = handleObj.handler.apply( this, arguments );
				event.type = fix;
			}
			return ret;
		}
	};
} );

// IE submit delegation
if ( !support.submit ) {

	jQuery.event.special.submit = {
		setup: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Lazy-add a submit handler when a descendant form may potentially be submitted
			jQuery.event.add( this, "click._submit keypress._submit", function( e ) {

				// Node name check avoids a VML-related crash in IE (#9807)
				var elem = e.target,
					form = jQuery.nodeName( elem, "input" ) || jQuery.nodeName( elem, "button" ) ?

						// Support: IE <=8
						// We use jQuery.prop instead of elem.form
						// to allow fixing the IE8 delegated submit issue (gh-2332)
						// by 3rd party polyfills/workarounds.
						jQuery.prop( elem, "form" ) :
						undefined;

				if ( form && !jQuery._data( form, "submit" ) ) {
					jQuery.event.add( form, "submit._submit", function( event ) {
						event._submitBubble = true;
					} );
					jQuery._data( form, "submit", true );
				}
			} );

			// return undefined since we don't need an event listener
		},

		postDispatch: function( event ) {

			// If form was submitted by the user, bubble the event up the tree
			if ( event._submitBubble ) {
				delete event._submitBubble;
				if ( this.parentNode && !event.isTrigger ) {
					jQuery.event.simulate( "submit", this.parentNode, event );
				}
			}
		},

		teardown: function() {

			// Only need this for delegated form submit events
			if ( jQuery.nodeName( this, "form" ) ) {
				return false;
			}

			// Remove delegated handlers; cleanData eventually reaps submit handlers attached above
			jQuery.event.remove( this, "._submit" );
		}
	};
}

// IE change delegation and checkbox/radio fix
if ( !support.change ) {

	jQuery.event.special.change = {

		setup: function() {

			if ( rformElems.test( this.nodeName ) ) {

				// IE doesn't fire change on a check/radio until blur; trigger it on click
				// after a propertychange. Eat the blur-change in special.change.handle.
				// This still fires onchange a second time for check/radio after blur.
				if ( this.type === "checkbox" || this.type === "radio" ) {
					jQuery.event.add( this, "propertychange._change", function( event ) {
						if ( event.originalEvent.propertyName === "checked" ) {
							this._justChanged = true;
						}
					} );
					jQuery.event.add( this, "click._change", function( event ) {
						if ( this._justChanged && !event.isTrigger ) {
							this._justChanged = false;
						}

						// Allow triggered, simulated change events (#11500)
						jQuery.event.simulate( "change", this, event );
					} );
				}
				return false;
			}

			// Delegated event; lazy-add a change handler on descendant inputs
			jQuery.event.add( this, "beforeactivate._change", function( e ) {
				var elem = e.target;

				if ( rformElems.test( elem.nodeName ) && !jQuery._data( elem, "change" ) ) {
					jQuery.event.add( elem, "change._change", function( event ) {
						if ( this.parentNode && !event.isSimulated && !event.isTrigger ) {
							jQuery.event.simulate( "change", this.parentNode, event );
						}
					} );
					jQuery._data( elem, "change", true );
				}
			} );
		},

		handle: function( event ) {
			var elem = event.target;

			// Swallow native change events from checkbox/radio, we already triggered them above
			if ( this !== elem || event.isSimulated || event.isTrigger ||
				( elem.type !== "radio" && elem.type !== "checkbox" ) ) {

				return event.handleObj.handler.apply( this, arguments );
			}
		},

		teardown: function() {
			jQuery.event.remove( this, "._change" );

			return !rformElems.test( this.nodeName );
		}
	};
}

// Support: Firefox
// Firefox doesn't have focus(in | out) events
// Related ticket - https://bugzilla.mozilla.org/show_bug.cgi?id=687787
//
// Support: Chrome, Safari
// focus(in | out) events fire after focus & blur events,
// which is spec violation - http://www.w3.org/TR/DOM-Level-3-Events/#events-focusevent-event-order
// Related ticket - https://code.google.com/p/chromium/issues/detail?id=449857
if ( !support.focusin ) {
	jQuery.each( { focus: "focusin", blur: "focusout" }, function( orig, fix ) {

		// Attach a single capturing handler on the document while someone wants focusin/focusout
		var handler = function( event ) {
			jQuery.event.simulate( fix, event.target, jQuery.event.fix( event ) );
		};

		jQuery.event.special[ fix ] = {
			setup: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix );

				if ( !attaches ) {
					doc.addEventListener( orig, handler, true );
				}
				jQuery._data( doc, fix, ( attaches || 0 ) + 1 );
			},
			teardown: function() {
				var doc = this.ownerDocument || this,
					attaches = jQuery._data( doc, fix ) - 1;

				if ( !attaches ) {
					doc.removeEventListener( orig, handler, true );
					jQuery._removeData( doc, fix );
				} else {
					jQuery._data( doc, fix, attaches );
				}
			}
		};
	} );
}

jQuery.fn.extend( {

	on: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn );
	},
	one: function( types, selector, data, fn ) {
		return on( this, types, selector, data, fn, 1 );
	},
	off: function( types, selector, fn ) {
		var handleObj, type;
		if ( types && types.preventDefault && types.handleObj ) {

			// ( event )  dispatched jQuery.Event
			handleObj = types.handleObj;
			jQuery( types.delegateTarget ).off(
				handleObj.namespace ?
					handleObj.origType + "." + handleObj.namespace :
					handleObj.origType,
				handleObj.selector,
				handleObj.handler
			);
			return this;
		}
		if ( typeof types === "object" ) {

			// ( types-object [, selector] )
			for ( type in types ) {
				this.off( type, selector, types[ type ] );
			}
			return this;
		}
		if ( selector === false || typeof selector === "function" ) {

			// ( types [, fn] )
			fn = selector;
			selector = undefined;
		}
		if ( fn === false ) {
			fn = returnFalse;
		}
		return this.each( function() {
			jQuery.event.remove( this, types, fn, selector );
		} );
	},

	trigger: function( type, data ) {
		return this.each( function() {
			jQuery.event.trigger( type, data, this );
		} );
	},
	triggerHandler: function( type, data ) {
		var elem = this[ 0 ];
		if ( elem ) {
			return jQuery.event.trigger( type, data, elem, true );
		}
	}
} );


var rinlinejQuery = / jQuery\d+="(?:null|\d+)"/g,
	rnoshimcache = new RegExp( "<(?:" + nodeNames + ")[\\s/>]", "i" ),
	rxhtmlTag = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,

	// Support: IE 10-11, Edge 10240+
	// In IE/Edge using regex groups here causes severe slowdowns.
	// See https://connect.microsoft.com/IE/feedback/details/1736512/
	rnoInnerhtml = /<script|<style|<link/i,

	// checked="checked" or checked
	rchecked = /checked\s*(?:[^=]|=\s*.checked.)/i,
	rscriptTypeMasked = /^true\/(.*)/,
	rcleanScript = /^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g,
	safeFragment = createSafeFragment( document ),
	fragmentDiv = safeFragment.appendChild( document.createElement( "div" ) );

// Support: IE<8
// Manipulating tables requires a tbody
function manipulationTarget( elem, content ) {
	return jQuery.nodeName( elem, "table" ) &&
		jQuery.nodeName( content.nodeType !== 11 ? content : content.firstChild, "tr" ) ?

		elem.getElementsByTagName( "tbody" )[ 0 ] ||
			elem.appendChild( elem.ownerDocument.createElement( "tbody" ) ) :
		elem;
}

// Replace/restore the type attribute of script elements for safe DOM manipulation
function disableScript( elem ) {
	elem.type = ( jQuery.find.attr( elem, "type" ) !== null ) + "/" + elem.type;
	return elem;
}
function restoreScript( elem ) {
	var match = rscriptTypeMasked.exec( elem.type );
	if ( match ) {
		elem.type = match[ 1 ];
	} else {
		elem.removeAttribute( "type" );
	}
	return elem;
}

function cloneCopyEvent( src, dest ) {
	if ( dest.nodeType !== 1 || !jQuery.hasData( src ) ) {
		return;
	}

	var type, i, l,
		oldData = jQuery._data( src ),
		curData = jQuery._data( dest, oldData ),
		events = oldData.events;

	if ( events ) {
		delete curData.handle;
		curData.events = {};

		for ( type in events ) {
			for ( i = 0, l = events[ type ].length; i < l; i++ ) {
				jQuery.event.add( dest, type, events[ type ][ i ] );
			}
		}
	}

	// make the cloned public data object a copy from the original
	if ( curData.data ) {
		curData.data = jQuery.extend( {}, curData.data );
	}
}

function fixCloneNodeIssues( src, dest ) {
	var nodeName, e, data;

	// We do not need to do anything for non-Elements
	if ( dest.nodeType !== 1 ) {
		return;
	}

	nodeName = dest.nodeName.toLowerCase();

	// IE6-8 copies events bound via attachEvent when using cloneNode.
	if ( !support.noCloneEvent && dest[ jQuery.expando ] ) {
		data = jQuery._data( dest );

		for ( e in data.events ) {
			jQuery.removeEvent( dest, e, data.handle );
		}

		// Event data gets referenced instead of copied if the expando gets copied too
		dest.removeAttribute( jQuery.expando );
	}

	// IE blanks contents when cloning scripts, and tries to evaluate newly-set text
	if ( nodeName === "script" && dest.text !== src.text ) {
		disableScript( dest ).text = src.text;
		restoreScript( dest );

	// IE6-10 improperly clones children of object elements using classid.
	// IE10 throws NoModificationAllowedError if parent is null, #12132.
	} else if ( nodeName === "object" ) {
		if ( dest.parentNode ) {
			dest.outerHTML = src.outerHTML;
		}

		// This path appears unavoidable for IE9. When cloning an object
		// element in IE9, the outerHTML strategy above is not sufficient.
		// If the src has innerHTML and the destination does not,
		// copy the src.innerHTML into the dest.innerHTML. #10324
		if ( support.html5Clone && ( src.innerHTML && !jQuery.trim( dest.innerHTML ) ) ) {
			dest.innerHTML = src.innerHTML;
		}

	} else if ( nodeName === "input" && rcheckableType.test( src.type ) ) {

		// IE6-8 fails to persist the checked state of a cloned checkbox
		// or radio button. Worse, IE6-7 fail to give the cloned element
		// a checked appearance if the defaultChecked value isn't also set

		dest.defaultChecked = dest.checked = src.checked;

		// IE6-7 get confused and end up setting the value of a cloned
		// checkbox/radio button to an empty string instead of "on"
		if ( dest.value !== src.value ) {
			dest.value = src.value;
		}

	// IE6-8 fails to return the selected option to the default selected
	// state when cloning options
	} else if ( nodeName === "option" ) {
		dest.defaultSelected = dest.selected = src.defaultSelected;

	// IE6-8 fails to set the defaultValue to the correct value when
	// cloning other types of input fields
	} else if ( nodeName === "input" || nodeName === "textarea" ) {
		dest.defaultValue = src.defaultValue;
	}
}

function domManip( collection, args, callback, ignored ) {

	// Flatten any nested arrays
	args = concat.apply( [], args );

	var first, node, hasScripts,
		scripts, doc, fragment,
		i = 0,
		l = collection.length,
		iNoClone = l - 1,
		value = args[ 0 ],
		isFunction = jQuery.isFunction( value );

	// We can't cloneNode fragments that contain checked, in WebKit
	if ( isFunction ||
			( l > 1 && typeof value === "string" &&
				!support.checkClone && rchecked.test( value ) ) ) {
		return collection.each( function( index ) {
			var self = collection.eq( index );
			if ( isFunction ) {
				args[ 0 ] = value.call( this, index, self.html() );
			}
			domManip( self, args, callback, ignored );
		} );
	}

	if ( l ) {
		fragment = buildFragment( args, collection[ 0 ].ownerDocument, false, collection, ignored );
		first = fragment.firstChild;

		if ( fragment.childNodes.length === 1 ) {
			fragment = first;
		}

		// Require either new content or an interest in ignored elements to invoke the callback
		if ( first || ignored ) {
			scripts = jQuery.map( getAll( fragment, "script" ), disableScript );
			hasScripts = scripts.length;

			// Use the original fragment for the last item
			// instead of the first because it can end up
			// being emptied incorrectly in certain situations (#8070).
			for ( ; i < l; i++ ) {
				node = fragment;

				if ( i !== iNoClone ) {
					node = jQuery.clone( node, true, true );

					// Keep references to cloned scripts for later restoration
					if ( hasScripts ) {

						// Support: Android<4.1, PhantomJS<2
						// push.apply(_, arraylike) throws on ancient WebKit
						jQuery.merge( scripts, getAll( node, "script" ) );
					}
				}

				callback.call( collection[ i ], node, i );
			}

			if ( hasScripts ) {
				doc = scripts[ scripts.length - 1 ].ownerDocument;

				// Reenable scripts
				jQuery.map( scripts, restoreScript );

				// Evaluate executable scripts on first document insertion
				for ( i = 0; i < hasScripts; i++ ) {
					node = scripts[ i ];
					if ( rscriptType.test( node.type || "" ) &&
						!jQuery._data( node, "globalEval" ) &&
						jQuery.contains( doc, node ) ) {

						if ( node.src ) {

							// Optional AJAX dependency, but won't run scripts if not present
							if ( jQuery._evalUrl ) {
								jQuery._evalUrl( node.src );
							}
						} else {
							jQuery.globalEval(
								( node.text || node.textContent || node.innerHTML || "" )
									.replace( rcleanScript, "" )
							);
						}
					}
				}
			}

			// Fix #11809: Avoid leaking memory
			fragment = first = null;
		}
	}

	return collection;
}

function remove( elem, selector, keepData ) {
	var node,
		elems = selector ? jQuery.filter( selector, elem ) : elem,
		i = 0;

	for ( ; ( node = elems[ i ] ) != null; i++ ) {

		if ( !keepData && node.nodeType === 1 ) {
			jQuery.cleanData( getAll( node ) );
		}

		if ( node.parentNode ) {
			if ( keepData && jQuery.contains( node.ownerDocument, node ) ) {
				setGlobalEval( getAll( node, "script" ) );
			}
			node.parentNode.removeChild( node );
		}
	}

	return elem;
}

jQuery.extend( {
	htmlPrefilter: function( html ) {
		return html.replace( rxhtmlTag, "<$1></$2>" );
	},

	clone: function( elem, dataAndEvents, deepDataAndEvents ) {
		var destElements, node, clone, i, srcElements,
			inPage = jQuery.contains( elem.ownerDocument, elem );

		if ( support.html5Clone || jQuery.isXMLDoc( elem ) ||
			!rnoshimcache.test( "<" + elem.nodeName + ">" ) ) {

			clone = elem.cloneNode( true );

		// IE<=8 does not properly clone detached, unknown element nodes
		} else {
			fragmentDiv.innerHTML = elem.outerHTML;
			fragmentDiv.removeChild( clone = fragmentDiv.firstChild );
		}

		if ( ( !support.noCloneEvent || !support.noCloneChecked ) &&
				( elem.nodeType === 1 || elem.nodeType === 11 ) && !jQuery.isXMLDoc( elem ) ) {

			// We eschew Sizzle here for performance reasons: http://jsperf.com/getall-vs-sizzle/2
			destElements = getAll( clone );
			srcElements = getAll( elem );

			// Fix all IE cloning issues
			for ( i = 0; ( node = srcElements[ i ] ) != null; ++i ) {

				// Ensure that the destination node is not null; Fixes #9587
				if ( destElements[ i ] ) {
					fixCloneNodeIssues( node, destElements[ i ] );
				}
			}
		}

		// Copy the events from the original to the clone
		if ( dataAndEvents ) {
			if ( deepDataAndEvents ) {
				srcElements = srcElements || getAll( elem );
				destElements = destElements || getAll( clone );

				for ( i = 0; ( node = srcElements[ i ] ) != null; i++ ) {
					cloneCopyEvent( node, destElements[ i ] );
				}
			} else {
				cloneCopyEvent( elem, clone );
			}
		}

		// Preserve script evaluation history
		destElements = getAll( clone, "script" );
		if ( destElements.length > 0 ) {
			setGlobalEval( destElements, !inPage && getAll( elem, "script" ) );
		}

		destElements = srcElements = node = null;

		// Return the cloned set
		return clone;
	},

	cleanData: function( elems, /* internal */ forceAcceptData ) {
		var elem, type, id, data,
			i = 0,
			internalKey = jQuery.expando,
			cache = jQuery.cache,
			attributes = support.attributes,
			special = jQuery.event.special;

		for ( ; ( elem = elems[ i ] ) != null; i++ ) {
			if ( forceAcceptData || acceptData( elem ) ) {

				id = elem[ internalKey ];
				data = id && cache[ id ];

				if ( data ) {
					if ( data.events ) {
						for ( type in data.events ) {
							if ( special[ type ] ) {
								jQuery.event.remove( elem, type );

							// This is a shortcut to avoid jQuery.event.remove's overhead
							} else {
								jQuery.removeEvent( elem, type, data.handle );
							}
						}
					}

					// Remove cache only if it was not already removed by jQuery.event.remove
					if ( cache[ id ] ) {

						delete cache[ id ];

						// Support: IE<9
						// IE does not allow us to delete expando properties from nodes
						// IE creates expando attributes along with the property
						// IE does not have a removeAttribute function on Document nodes
						if ( !attributes && typeof elem.removeAttribute !== "undefined" ) {
							elem.removeAttribute( internalKey );

						// Webkit & Blink performance suffers when deleting properties
						// from DOM nodes, so set to undefined instead
						// https://code.google.com/p/chromium/issues/detail?id=378607
						} else {
							elem[ internalKey ] = undefined;
						}

						deletedIds.push( id );
					}
				}
			}
		}
	}
} );

jQuery.fn.extend( {

	// Keep domManip exposed until 3.0 (gh-2225)
	domManip: domManip,

	detach: function( selector ) {
		return remove( this, selector, true );
	},

	remove: function( selector ) {
		return remove( this, selector );
	},

	text: function( value ) {
		return access( this, function( value ) {
			return value === undefined ?
				jQuery.text( this ) :
				this.empty().append(
					( this[ 0 ] && this[ 0 ].ownerDocument || document ).createTextNode( value )
				);
		}, null, value, arguments.length );
	},

	append: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.appendChild( elem );
			}
		} );
	},

	prepend: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.nodeType === 1 || this.nodeType === 11 || this.nodeType === 9 ) {
				var target = manipulationTarget( this, elem );
				target.insertBefore( elem, target.firstChild );
			}
		} );
	},

	before: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this );
			}
		} );
	},

	after: function() {
		return domManip( this, arguments, function( elem ) {
			if ( this.parentNode ) {
				this.parentNode.insertBefore( elem, this.nextSibling );
			}
		} );
	},

	empty: function() {
		var elem,
			i = 0;

		for ( ; ( elem = this[ i ] ) != null; i++ ) {

			// Remove element nodes and prevent memory leaks
			if ( elem.nodeType === 1 ) {
				jQuery.cleanData( getAll( elem, false ) );
			}

			// Remove any remaining nodes
			while ( elem.firstChild ) {
				elem.removeChild( elem.firstChild );
			}

			// If this is a select, ensure that it displays empty (#12336)
			// Support: IE<9
			if ( elem.options && jQuery.nodeName( elem, "select" ) ) {
				elem.options.length = 0;
			}
		}

		return this;
	},

	clone: function( dataAndEvents, deepDataAndEvents ) {
		dataAndEvents = dataAndEvents == null ? false : dataAndEvents;
		deepDataAndEvents = deepDataAndEvents == null ? dataAndEvents : deepDataAndEvents;

		return this.map( function() {
			return jQuery.clone( this, dataAndEvents, deepDataAndEvents );
		} );
	},

	html: function( value ) {
		return access( this, function( value ) {
			var elem = this[ 0 ] || {},
				i = 0,
				l = this.length;

			if ( value === undefined ) {
				return elem.nodeType === 1 ?
					elem.innerHTML.replace( rinlinejQuery, "" ) :
					undefined;
			}

			// See if we can take a shortcut and just use innerHTML
			if ( typeof value === "string" && !rnoInnerhtml.test( value ) &&
				( support.htmlSerialize || !rnoshimcache.test( value )  ) &&
				( support.leadingWhitespace || !rleadingWhitespace.test( value ) ) &&
				!wrapMap[ ( rtagName.exec( value ) || [ "", "" ] )[ 1 ].toLowerCase() ] ) {

				value = jQuery.htmlPrefilter( value );

				try {
					for ( ; i < l; i++ ) {

						// Remove element nodes and prevent memory leaks
						elem = this[ i ] || {};
						if ( elem.nodeType === 1 ) {
							jQuery.cleanData( getAll( elem, false ) );
							elem.innerHTML = value;
						}
					}

					elem = 0;

				// If using innerHTML throws an exception, use the fallback method
				} catch ( e ) {}
			}

			if ( elem ) {
				this.empty().append( value );
			}
		}, null, value, arguments.length );
	},

	replaceWith: function() {
		var ignored = [];

		// Make the changes, replacing each non-ignored context element with the new content
		return domManip( this, arguments, function( elem ) {
			var parent = this.parentNode;

			if ( jQuery.inArray( this, ignored ) < 0 ) {
				jQuery.cleanData( getAll( this ) );
				if ( parent ) {
					parent.replaceChild( elem, this );
				}
			}

		// Force callback invocation
		}, ignored );
	}
} );

jQuery.each( {
	appendTo: "append",
	prependTo: "prepend",
	insertBefore: "before",
	insertAfter: "after",
	replaceAll: "replaceWith"
}, function( name, original ) {
	jQuery.fn[ name ] = function( selector ) {
		var elems,
			i = 0,
			ret = [],
			insert = jQuery( selector ),
			last = insert.length - 1;

		for ( ; i <= last; i++ ) {
			elems = i === last ? this : this.clone( true );
			jQuery( insert[ i ] )[ original ]( elems );

			// Modern browsers can apply jQuery collections as arrays, but oldIE needs a .get()
			push.apply( ret, elems.get() );
		}

		return this.pushStack( ret );
	};
} );


var iframe,
	elemdisplay = {

		// Support: Firefox
		// We have to pre-define these values for FF (#10227)
		HTML: "block",
		BODY: "block"
	};

/**
 * Retrieve the actual display of a element
 * @param {String} name nodeName of the element
 * @param {Object} doc Document object
 */

// Called only from within defaultDisplay
function actualDisplay( name, doc ) {
	var elem = jQuery( doc.createElement( name ) ).appendTo( doc.body ),

		display = jQuery.css( elem[ 0 ], "display" );

	// We don't have any data stored on the element,
	// so use "detach" method as fast way to get rid of the element
	elem.detach();

	return display;
}

/**
 * Try to determine the default display value of an element
 * @param {String} nodeName
 */
function defaultDisplay( nodeName ) {
	var doc = document,
		display = elemdisplay[ nodeName ];

	if ( !display ) {
		display = actualDisplay( nodeName, doc );

		// If the simple way fails, read from inside an iframe
		if ( display === "none" || !display ) {

			// Use the already-created iframe if possible
			iframe = ( iframe || jQuery( "<iframe frameborder='0' width='0' height='0'/>" ) )
				.appendTo( doc.documentElement );

			// Always write a new HTML skeleton so Webkit and Firefox don't choke on reuse
			doc = ( iframe[ 0 ].contentWindow || iframe[ 0 ].contentDocument ).document;

			// Support: IE
			doc.write();
			doc.close();

			display = actualDisplay( nodeName, doc );
			iframe.detach();
		}

		// Store the correct default display
		elemdisplay[ nodeName ] = display;
	}

	return display;
}
var rmargin = ( /^margin/ );

var rnumnonpx = new RegExp( "^(" + pnum + ")(?!px)[a-z%]+$", "i" );

var swap = function( elem, options, callback, args ) {
	var ret, name,
		old = {};

	// Remember the old values, and insert the new ones
	for ( name in options ) {
		old[ name ] = elem.style[ name ];
		elem.style[ name ] = options[ name ];
	}

	ret = callback.apply( elem, args || [] );

	// Revert the old values
	for ( name in options ) {
		elem.style[ name ] = old[ name ];
	}

	return ret;
};


var documentElement = document.documentElement;



( function() {
	var pixelPositionVal, pixelMarginRightVal, boxSizingReliableVal,
		reliableHiddenOffsetsVal, reliableMarginRightVal, reliableMarginLeftVal,
		container = document.createElement( "div" ),
		div = document.createElement( "div" );

	// Finish early in limited (non-browser) environments
	if ( !div.style ) {
		return;
	}

	div.style.cssText = "float:left;opacity:.5";

	// Support: IE<9
	// Make sure that element opacity exists (as opposed to filter)
	support.opacity = div.style.opacity === "0.5";

	// Verify style float existence
	// (IE uses styleFloat instead of cssFloat)
	support.cssFloat = !!div.style.cssFloat;

	div.style.backgroundClip = "content-box";
	div.cloneNode( true ).style.backgroundClip = "";
	support.clearCloneStyle = div.style.backgroundClip === "content-box";

	container = document.createElement( "div" );
	container.style.cssText = "border:0;width:8px;height:0;top:0;left:-9999px;" +
		"padding:0;margin-top:1px;position:absolute";
	div.innerHTML = "";
	container.appendChild( div );

	// Support: Firefox<29, Android 2.3
	// Vendor-prefix box-sizing
	support.boxSizing = div.style.boxSizing === "" || div.style.MozBoxSizing === "" ||
		div.style.WebkitBoxSizing === "";

	jQuery.extend( support, {
		reliableHiddenOffsets: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableHiddenOffsetsVal;
		},

		boxSizingReliable: function() {

			// We're checking for pixelPositionVal here instead of boxSizingReliableVal
			// since that compresses better and they're computed together anyway.
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return boxSizingReliableVal;
		},

		pixelMarginRight: function() {

			// Support: Android 4.0-4.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelMarginRightVal;
		},

		pixelPosition: function() {
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return pixelPositionVal;
		},

		reliableMarginRight: function() {

			// Support: Android 2.3
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginRightVal;
		},

		reliableMarginLeft: function() {

			// Support: IE <=8 only, Android 4.0 - 4.3 only, Firefox <=3 - 37
			if ( pixelPositionVal == null ) {
				computeStyleTests();
			}
			return reliableMarginLeftVal;
		}
	} );

	function computeStyleTests() {
		var contents, divStyle,
			documentElement = document.documentElement;

		// Setup
		documentElement.appendChild( container );

		div.style.cssText =

			// Support: Android 2.3
			// Vendor-prefix box-sizing
			"-webkit-box-sizing:border-box;box-sizing:border-box;" +
			"position:relative;display:block;" +
			"margin:auto;border:1px;padding:1px;" +
			"top:1%;width:50%";

		// Support: IE<9
		// Assume reasonable values in the absence of getComputedStyle
		pixelPositionVal = boxSizingReliableVal = reliableMarginLeftVal = false;
		pixelMarginRightVal = reliableMarginRightVal = true;

		// Check for getComputedStyle so that this code is not run in IE<9.
		if ( window.getComputedStyle ) {
			divStyle = window.getComputedStyle( div );
			pixelPositionVal = ( divStyle || {} ).top !== "1%";
			reliableMarginLeftVal = ( divStyle || {} ).marginLeft === "2px";
			boxSizingReliableVal = ( divStyle || { width: "4px" } ).width === "4px";

			// Support: Android 4.0 - 4.3 only
			// Some styles come back with percentage values, even though they shouldn't
			div.style.marginRight = "50%";
			pixelMarginRightVal = ( divStyle || { marginRight: "4px" } ).marginRight === "4px";

			// Support: Android 2.3 only
			// Div with explicit width and no margin-right incorrectly
			// gets computed margin-right based on width of container (#3333)
			// WebKit Bug 13343 - getComputedStyle returns wrong value for margin-right
			contents = div.appendChild( document.createElement( "div" ) );

			// Reset CSS: box-sizing; display; margin; border; padding
			contents.style.cssText = div.style.cssText =

				// Support: Android 2.3
				// Vendor-prefix box-sizing
				"-webkit-box-sizing:content-box;-moz-box-sizing:content-box;" +
				"box-sizing:content-box;display:block;margin:0;border:0;padding:0";
			contents.style.marginRight = contents.style.width = "0";
			div.style.width = "1px";

			reliableMarginRightVal =
				!parseFloat( ( window.getComputedStyle( contents ) || {} ).marginRight );

			div.removeChild( contents );
		}

		// Support: IE6-8
		// First check that getClientRects works as expected
		// Check if table cells still have offsetWidth/Height when they are set
		// to display:none and there are still other visible table cells in a
		// table row; if so, offsetWidth/Height are not reliable for use when
		// determining if an element has been hidden directly using
		// display:none (it is still safe to use offsets if a parent element is
		// hidden; don safety goggles and see bug #4512 for more information).
		div.style.display = "none";
		reliableHiddenOffsetsVal = div.getClientRects().length === 0;
		if ( reliableHiddenOffsetsVal ) {
			div.style.display = "";
			div.innerHTML = "<table><tr><td></td><td>t</td></tr></table>";
			div.childNodes[ 0 ].style.borderCollapse = "separate";
			contents = div.getElementsByTagName( "td" );
			contents[ 0 ].style.cssText = "margin:0;border:0;padding:0;display:none";
			reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			if ( reliableHiddenOffsetsVal ) {
				contents[ 0 ].style.display = "";
				contents[ 1 ].style.display = "none";
				reliableHiddenOffsetsVal = contents[ 0 ].offsetHeight === 0;
			}
		}

		// Teardown
		documentElement.removeChild( container );
	}

} )();


var getStyles, curCSS,
	rposition = /^(top|right|bottom|left)$/;

if ( window.getComputedStyle ) {
	getStyles = function( elem ) {

		// Support: IE<=11+, Firefox<=30+ (#15098, #14150)
		// IE throws on elements created in popups
		// FF meanwhile throws on frame elements through "defaultView.getComputedStyle"
		var view = elem.ownerDocument.defaultView;

		if ( !view || !view.opener ) {
			view = window;
		}

		return view.getComputedStyle( elem );
	};

	curCSS = function( elem, name, computed ) {
		var width, minWidth, maxWidth, ret,
			style = elem.style;

		computed = computed || getStyles( elem );

		// getPropertyValue is only needed for .css('filter') in IE9, see #12537
		ret = computed ? computed.getPropertyValue( name ) || computed[ name ] : undefined;

		// Support: Opera 12.1x only
		// Fall back to style even without computed
		// computed is undefined for elems on document fragments
		if ( ( ret === "" || ret === undefined ) && !jQuery.contains( elem.ownerDocument, elem ) ) {
			ret = jQuery.style( elem, name );
		}

		if ( computed ) {

			// A tribute to the "awesome hack by Dean Edwards"
			// Chrome < 17 and Safari 5.0 uses "computed value"
			// instead of "used value" for margin-right
			// Safari 5.1.7 (at least) returns percentage for a larger set of values,
			// but width seems to be reliably pixels
			// this is against the CSSOM draft spec:
			// http://dev.w3.org/csswg/cssom/#resolved-values
			if ( !support.pixelMarginRight() && rnumnonpx.test( ret ) && rmargin.test( name ) ) {

				// Remember the original values
				width = style.width;
				minWidth = style.minWidth;
				maxWidth = style.maxWidth;

				// Put in the new values to get a computed value out
				style.minWidth = style.maxWidth = style.width = ret;
				ret = computed.width;

				// Revert the changed values
				style.width = width;
				style.minWidth = minWidth;
				style.maxWidth = maxWidth;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "";
	};
} else if ( documentElement.currentStyle ) {
	getStyles = function( elem ) {
		return elem.currentStyle;
	};

	curCSS = function( elem, name, computed ) {
		var left, rs, rsLeft, ret,
			style = elem.style;

		computed = computed || getStyles( elem );
		ret = computed ? computed[ name ] : undefined;

		// Avoid setting ret to empty string here
		// so we don't default to auto
		if ( ret == null && style && style[ name ] ) {
			ret = style[ name ];
		}

		// From the awesome hack by Dean Edwards
		// http://erik.eae.net/archives/2007/07/27/18.54.15/#comment-102291

		// If we're not dealing with a regular pixel number
		// but a number that has a weird ending, we need to convert it to pixels
		// but not position css attributes, as those are
		// proportional to the parent element instead
		// and we can't measure the parent instead because it
		// might trigger a "stacking dolls" problem
		if ( rnumnonpx.test( ret ) && !rposition.test( name ) ) {

			// Remember the original values
			left = style.left;
			rs = elem.runtimeStyle;
			rsLeft = rs && rs.left;

			// Put in the new values to get a computed value out
			if ( rsLeft ) {
				rs.left = elem.currentStyle.left;
			}
			style.left = name === "fontSize" ? "1em" : ret;
			ret = style.pixelLeft + "px";

			// Revert the changed values
			style.left = left;
			if ( rsLeft ) {
				rs.left = rsLeft;
			}
		}

		// Support: IE
		// IE returns zIndex value as an integer.
		return ret === undefined ?
			ret :
			ret + "" || "auto";
	};
}




function addGetHookIf( conditionFn, hookFn ) {

	// Define the hook, we'll check on the first run if it's really needed.
	return {
		get: function() {
			if ( conditionFn() ) {

				// Hook not needed (or it's not possible to use it due
				// to missing dependency), remove it.
				delete this.get;
				return;
			}

			// Hook needed; redefine it so that the support test is not executed again.
			return ( this.get = hookFn ).apply( this, arguments );
		}
	};
}


var

		ralpha = /alpha\([^)]*\)/i,
	ropacity = /opacity\s*=\s*([^)]*)/i,

	// swappable if display is none or starts with table except
	// "table", "table-cell", or "table-caption"
	// see here for display values:
	// https://developer.mozilla.org/en-US/docs/CSS/display
	rdisplayswap = /^(none|table(?!-c[ea]).+)/,
	rnumsplit = new RegExp( "^(" + pnum + ")(.*)$", "i" ),

	cssShow = { position: "absolute", visibility: "hidden", display: "block" },
	cssNormalTransform = {
		letterSpacing: "0",
		fontWeight: "400"
	},

	cssPrefixes = [ "Webkit", "O", "Moz", "ms" ],
	emptyStyle = document.createElement( "div" ).style;


// return a css property mapped to a potentially vendor prefixed property
function vendorPropName( name ) {

	// shortcut for names that are not vendor prefixed
	if ( name in emptyStyle ) {
		return name;
	}

	// check for vendor prefixed names
	var capName = name.charAt( 0 ).toUpperCase() + name.slice( 1 ),
		i = cssPrefixes.length;

	while ( i-- ) {
		name = cssPrefixes[ i ] + capName;
		if ( name in emptyStyle ) {
			return name;
		}
	}
}

function showHide( elements, show ) {
	var display, elem, hidden,
		values = [],
		index = 0,
		length = elements.length;

	for ( ; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}

		values[ index ] = jQuery._data( elem, "olddisplay" );
		display = elem.style.display;
		if ( show ) {

			// Reset the inline display of this element to learn if it is
			// being hidden by cascaded rules or not
			if ( !values[ index ] && display === "none" ) {
				elem.style.display = "";
			}

			// Set elements which have been overridden with display: none
			// in a stylesheet to whatever the default browser style is
			// for such an element
			if ( elem.style.display === "" && isHidden( elem ) ) {
				values[ index ] =
					jQuery._data( elem, "olddisplay", defaultDisplay( elem.nodeName ) );
			}
		} else {
			hidden = isHidden( elem );

			if ( display && display !== "none" || !hidden ) {
				jQuery._data(
					elem,
					"olddisplay",
					hidden ? display : jQuery.css( elem, "display" )
				);
			}
		}
	}

	// Set the display of most of the elements in a second loop
	// to avoid the constant reflow
	for ( index = 0; index < length; index++ ) {
		elem = elements[ index ];
		if ( !elem.style ) {
			continue;
		}
		if ( !show || elem.style.display === "none" || elem.style.display === "" ) {
			elem.style.display = show ? values[ index ] || "" : "none";
		}
	}

	return elements;
}

function setPositiveNumber( elem, value, subtract ) {
	var matches = rnumsplit.exec( value );
	return matches ?

		// Guard against undefined "subtract", e.g., when used as in cssHooks
		Math.max( 0, matches[ 1 ] - ( subtract || 0 ) ) + ( matches[ 2 ] || "px" ) :
		value;
}

function augmentWidthOrHeight( elem, name, extra, isBorderBox, styles ) {
	var i = extra === ( isBorderBox ? "border" : "content" ) ?

		// If we already have the right measurement, avoid augmentation
		4 :

		// Otherwise initialize for horizontal or vertical properties
		name === "width" ? 1 : 0,

		val = 0;

	for ( ; i < 4; i += 2 ) {

		// both box models exclude margin, so add it if we want it
		if ( extra === "margin" ) {
			val += jQuery.css( elem, extra + cssExpand[ i ], true, styles );
		}

		if ( isBorderBox ) {

			// border-box includes padding, so remove it if we want content
			if ( extra === "content" ) {
				val -= jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );
			}

			// at this point, extra isn't border nor margin, so remove border
			if ( extra !== "margin" ) {
				val -= jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		} else {

			// at this point, extra isn't content, so add padding
			val += jQuery.css( elem, "padding" + cssExpand[ i ], true, styles );

			// at this point, extra isn't content nor padding, so add border
			if ( extra !== "padding" ) {
				val += jQuery.css( elem, "border" + cssExpand[ i ] + "Width", true, styles );
			}
		}
	}

	return val;
}

function getWidthOrHeight( elem, name, extra ) {

	// Start with offset property, which is equivalent to the border-box value
	var valueIsBorderBox = true,
		val = name === "width" ? elem.offsetWidth : elem.offsetHeight,
		styles = getStyles( elem ),
		isBorderBox = support.boxSizing &&
			jQuery.css( elem, "boxSizing", false, styles ) === "border-box";

	// some non-html elements return undefined for offsetWidth, so check for null/undefined
	// svg - https://bugzilla.mozilla.org/show_bug.cgi?id=649285
	// MathML - https://bugzilla.mozilla.org/show_bug.cgi?id=491668
	if ( val <= 0 || val == null ) {

		// Fall back to computed then uncomputed css if necessary
		val = curCSS( elem, name, styles );
		if ( val < 0 || val == null ) {
			val = elem.style[ name ];
		}

		// Computed unit is not pixels. Stop here and return.
		if ( rnumnonpx.test( val ) ) {
			return val;
		}

		// we need the check for style in case a browser which returns unreliable values
		// for getComputedStyle silently falls back to the reliable elem.style
		valueIsBorderBox = isBorderBox &&
			( support.boxSizingReliable() || val === elem.style[ name ] );

		// Normalize "", auto, and prepare for extra
		val = parseFloat( val ) || 0;
	}

	// use the active box-sizing model to add/subtract irrelevant styles
	return ( val +
		augmentWidthOrHeight(
			elem,
			name,
			extra || ( isBorderBox ? "border" : "content" ),
			valueIsBorderBox,
			styles
		)
	) + "px";
}

jQuery.extend( {

	// Add in style property hooks for overriding the default
	// behavior of getting and setting a style property
	cssHooks: {
		opacity: {
			get: function( elem, computed ) {
				if ( computed ) {

					// We should always get a number back from opacity
					var ret = curCSS( elem, "opacity" );
					return ret === "" ? "1" : ret;
				}
			}
		}
	},

	// Don't automatically add "px" to these possibly-unitless properties
	cssNumber: {
		"animationIterationCount": true,
		"columnCount": true,
		"fillOpacity": true,
		"flexGrow": true,
		"flexShrink": true,
		"fontWeight": true,
		"lineHeight": true,
		"opacity": true,
		"order": true,
		"orphans": true,
		"widows": true,
		"zIndex": true,
		"zoom": true
	},

	// Add in properties whose names you wish to fix before
	// setting or getting the value
	cssProps: {

		// normalize float css property
		"float": support.cssFloat ? "cssFloat" : "styleFloat"
	},

	// Get and set the style property on a DOM Node
	style: function( elem, name, value, extra ) {

		// Don't set styles on text and comment nodes
		if ( !elem || elem.nodeType === 3 || elem.nodeType === 8 || !elem.style ) {
			return;
		}

		// Make sure that we're working with the right name
		var ret, type, hooks,
			origName = jQuery.camelCase( name ),
			style = elem.style;

		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// Check if we're setting a value
		if ( value !== undefined ) {
			type = typeof value;

			// Convert "+=" or "-=" to relative numbers (#7345)
			if ( type === "string" && ( ret = rcssNum.exec( value ) ) && ret[ 1 ] ) {
				value = adjustCSS( elem, name, ret );

				// Fixes bug #9237
				type = "number";
			}

			// Make sure that null and NaN values aren't set. See: #7116
			if ( value == null || value !== value ) {
				return;
			}

			// If a number was passed in, add the unit (except for certain CSS properties)
			if ( type === "number" ) {
				value += ret && ret[ 3 ] || ( jQuery.cssNumber[ origName ] ? "" : "px" );
			}

			// Fixes #8908, it can be done more correctly by specifing setters in cssHooks,
			// but it would mean to define eight
			// (for every problematic property) identical functions
			if ( !support.clearCloneStyle && value === "" && name.indexOf( "background" ) === 0 ) {
				style[ name ] = "inherit";
			}

			// If a hook was provided, use that value, otherwise just set the specified value
			if ( !hooks || !( "set" in hooks ) ||
				( value = hooks.set( elem, value, extra ) ) !== undefined ) {

				// Support: IE
				// Swallow errors from 'invalid' CSS values (#5509)
				try {
					style[ name ] = value;
				} catch ( e ) {}
			}

		} else {

			// If a hook was provided get the non-computed value from there
			if ( hooks && "get" in hooks &&
				( ret = hooks.get( elem, false, extra ) ) !== undefined ) {

				return ret;
			}

			// Otherwise just get the value from the style object
			return style[ name ];
		}
	},

	css: function( elem, name, extra, styles ) {
		var num, val, hooks,
			origName = jQuery.camelCase( name );

		// Make sure that we're working with the right name
		name = jQuery.cssProps[ origName ] ||
			( jQuery.cssProps[ origName ] = vendorPropName( origName ) || origName );

		// gets hook for the prefixed version
		// followed by the unprefixed version
		hooks = jQuery.cssHooks[ name ] || jQuery.cssHooks[ origName ];

		// If a hook was provided get the computed value from there
		if ( hooks && "get" in hooks ) {
			val = hooks.get( elem, true, extra );
		}

		// Otherwise, if a way to get the computed value exists, use that
		if ( val === undefined ) {
			val = curCSS( elem, name, styles );
		}

		//convert "normal" to computed value
		if ( val === "normal" && name in cssNormalTransform ) {
			val = cssNormalTransform[ name ];
		}

		// Return, converting to number if forced or a qualifier was provided and val looks numeric
		if ( extra === "" || extra ) {
			num = parseFloat( val );
			return extra === true || isFinite( num ) ? num || 0 : val;
		}
		return val;
	}
} );

jQuery.each( [ "height", "width" ], function( i, name ) {
	jQuery.cssHooks[ name ] = {
		get: function( elem, computed, extra ) {
			if ( computed ) {

				// certain elements can have dimension info if we invisibly show them
				// however, it must have a current display style that would benefit from this
				return rdisplayswap.test( jQuery.css( elem, "display" ) ) &&
					elem.offsetWidth === 0 ?
						swap( elem, cssShow, function() {
							return getWidthOrHeight( elem, name, extra );
						} ) :
						getWidthOrHeight( elem, name, extra );
			}
		},

		set: function( elem, value, extra ) {
			var styles = extra && getStyles( elem );
			return setPositiveNumber( elem, value, extra ?
				augmentWidthOrHeight(
					elem,
					name,
					extra,
					support.boxSizing &&
						jQuery.css( elem, "boxSizing", false, styles ) === "border-box",
					styles
				) : 0
			);
		}
	};
} );

if ( !support.opacity ) {
	jQuery.cssHooks.opacity = {
		get: function( elem, computed ) {

			// IE uses filters for opacity
			return ropacity.test( ( computed && elem.currentStyle ?
				elem.currentStyle.filter :
				elem.style.filter ) || "" ) ?
					( 0.01 * parseFloat( RegExp.$1 ) ) + "" :
					computed ? "1" : "";
		},

		set: function( elem, value ) {
			var style = elem.style,
				currentStyle = elem.currentStyle,
				opacity = jQuery.isNumeric( value ) ? "alpha(opacity=" + value * 100 + ")" : "",
				filter = currentStyle && currentStyle.filter || style.filter || "";

			// IE has trouble with opacity if it does not have layout
			// Force it by setting the zoom level
			style.zoom = 1;

			// if setting opacity to 1, and no other filters exist -
			// attempt to remove filter attribute #6652
			// if value === "", then remove inline opacity #12685
			if ( ( value >= 1 || value === "" ) &&
					jQuery.trim( filter.replace( ralpha, "" ) ) === "" &&
					style.removeAttribute ) {

				// Setting style.filter to null, "" & " " still leave "filter:" in the cssText
				// if "filter:" is present at all, clearType is disabled, we want to avoid this
				// style.removeAttribute is IE Only, but so apparently is this code path...
				style.removeAttribute( "filter" );

				// if there is no filter style applied in a css rule
				// or unset inline opacity, we are done
				if ( value === "" || currentStyle && !currentStyle.filter ) {
					return;
				}
			}

			// otherwise, set new filter values
			style.filter = ralpha.test( filter ) ?
				filter.replace( ralpha, opacity ) :
				filter + " " + opacity;
		}
	};
}

jQuery.cssHooks.marginRight = addGetHookIf( support.reliableMarginRight,
	function( elem, computed ) {
		if ( computed ) {
			return swap( elem, { "display": "inline-block" },
				curCSS, [ elem, "marginRight" ] );
		}
	}
);

jQuery.cssHooks.marginLeft = addGetHookIf( support.reliableMarginLeft,
	function( elem, computed ) {
		if ( computed ) {
			return (
				parseFloat( curCSS( elem, "marginLeft" ) ) ||

				// Support: IE<=11+
				// Running getBoundingClientRect on a disconnected node in IE throws an error
				// Support: IE8 only
				// getClientRects() errors on disconnected elems
				( jQuery.contains( elem.ownerDocument, elem ) ?
					elem.getBoundingClientRect().left -
						swap( elem, { marginLeft: 0 }, function() {
							return elem.getBoundingClientRect().left;
						} ) :
					0
				)
			) + "px";
		}
	}
);

// These hooks are used by animate to expand properties
jQuery.each( {
	margin: "",
	padding: "",
	border: "Width"
}, function( prefix, suffix ) {
	jQuery.cssHooks[ prefix + suffix ] = {
		expand: function( value ) {
			var i = 0,
				expanded = {},

				// assumes a single number if not a string
				parts = typeof value === "string" ? value.split( " " ) : [ value ];

			for ( ; i < 4; i++ ) {
				expanded[ prefix + cssExpand[ i ] + suffix ] =
					parts[ i ] || parts[ i - 2 ] || parts[ 0 ];
			}

			return expanded;
		}
	};

	if ( !rmargin.test( prefix ) ) {
		jQuery.cssHooks[ prefix + suffix ].set = setPositiveNumber;
	}
} );

jQuery.fn.extend( {
	css: function( name, value ) {
		return access( this, function( elem, name, value ) {
			var styles, len,
				map = {},
				i = 0;

			if ( jQuery.isArray( name ) ) {
				styles = getStyles( elem );
				len = name.length;

				for ( ; i < len; i++ ) {
					map[ name[ i ] ] = jQuery.css( elem, name[ i ], false, styles );
				}

				return map;
			}

			return value !== undefined ?
				jQuery.style( elem, name, value ) :
				jQuery.css( elem, name );
		}, name, value, arguments.length > 1 );
	},
	show: function() {
		return showHide( this, true );
	},
	hide: function() {
		return showHide( this );
	},
	toggle: function( state ) {
		if ( typeof state === "boolean" ) {
			return state ? this.show() : this.hide();
		}

		return this.each( function() {
			if ( isHidden( this ) ) {
				jQuery( this ).show();
			} else {
				jQuery( this ).hide();
			}
		} );
	}
} );


function Tween( elem, options, prop, end, easing ) {
	return new Tween.prototype.init( elem, options, prop, end, easing );
}
jQuery.Tween = Tween;

Tween.prototype = {
	constructor: Tween,
	init: function( elem, options, prop, end, easing, unit ) {
		this.elem = elem;
		this.prop = prop;
		this.easing = easing || jQuery.easing._default;
		this.options = options;
		this.start = this.now = this.cur();
		this.end = end;
		this.unit = unit || ( jQuery.cssNumber[ prop ] ? "" : "px" );
	},
	cur: function() {
		var hooks = Tween.propHooks[ this.prop ];

		return hooks && hooks.get ?
			hooks.get( this ) :
			Tween.propHooks._default.get( this );
	},
	run: function( percent ) {
		var eased,
			hooks = Tween.propHooks[ this.prop ];

		if ( this.options.duration ) {
			this.pos = eased = jQuery.easing[ this.easing ](
				percent, this.options.duration * percent, 0, 1, this.options.duration
			);
		} else {
			this.pos = eased = percent;
		}
		this.now = ( this.end - this.start ) * eased + this.start;

		if ( this.options.step ) {
			this.options.step.call( this.elem, this.now, this );
		}

		if ( hooks && hooks.set ) {
			hooks.set( this );
		} else {
			Tween.propHooks._default.set( this );
		}
		return this;
	}
};

Tween.prototype.init.prototype = Tween.prototype;

Tween.propHooks = {
	_default: {
		get: function( tween ) {
			var result;

			// Use a property on the element directly when it is not a DOM element,
			// or when there is no matching style property that exists.
			if ( tween.elem.nodeType !== 1 ||
				tween.elem[ tween.prop ] != null && tween.elem.style[ tween.prop ] == null ) {
				return tween.elem[ tween.prop ];
			}

			// passing an empty string as a 3rd parameter to .css will automatically
			// attempt a parseFloat and fallback to a string if the parse fails
			// so, simple values such as "10px" are parsed to Float.
			// complex values such as "rotate(1rad)" are returned as is.
			result = jQuery.css( tween.elem, tween.prop, "" );

			// Empty strings, null, undefined and "auto" are converted to 0.
			return !result || result === "auto" ? 0 : result;
		},
		set: function( tween ) {

			// use step hook for back compat - use cssHook if its there - use .style if its
			// available and use plain properties where available
			if ( jQuery.fx.step[ tween.prop ] ) {
				jQuery.fx.step[ tween.prop ]( tween );
			} else if ( tween.elem.nodeType === 1 &&
				( tween.elem.style[ jQuery.cssProps[ tween.prop ] ] != null ||
					jQuery.cssHooks[ tween.prop ] ) ) {
				jQuery.style( tween.elem, tween.prop, tween.now + tween.unit );
			} else {
				tween.elem[ tween.prop ] = tween.now;
			}
		}
	}
};

// Support: IE <=9
// Panic based approach to setting things on disconnected nodes

Tween.propHooks.scrollTop = Tween.propHooks.scrollLeft = {
	set: function( tween ) {
		if ( tween.elem.nodeType && tween.elem.parentNode ) {
			tween.elem[ tween.prop ] = tween.now;
		}
	}
};

jQuery.easing = {
	linear: function( p ) {
		return p;
	},
	swing: function( p ) {
		return 0.5 - Math.cos( p * Math.PI ) / 2;
	},
	_default: "swing"
};

jQuery.fx = Tween.prototype.init;

// Back Compat <1.8 extension point
jQuery.fx.step = {};




var
	fxNow, timerId,
	rfxtypes = /^(?:toggle|show|hide)$/,
	rrun = /queueHooks$/;

// Animations created synchronously will run synchronously
function createFxNow() {
	window.setTimeout( function() {
		fxNow = undefined;
	} );
	return ( fxNow = jQuery.now() );
}

// Generate parameters to create a standard animation
function genFx( type, includeWidth ) {
	var which,
		attrs = { height: type },
		i = 0;

	// if we include width, step value is 1 to do all cssExpand values,
	// if we don't include width, step value is 2 to skip over Left and Right
	includeWidth = includeWidth ? 1 : 0;
	for ( ; i < 4 ; i += 2 - includeWidth ) {
		which = cssExpand[ i ];
		attrs[ "margin" + which ] = attrs[ "padding" + which ] = type;
	}

	if ( includeWidth ) {
		attrs.opacity = attrs.width = type;
	}

	return attrs;
}

function createTween( value, prop, animation ) {
	var tween,
		collection = ( Animation.tweeners[ prop ] || [] ).concat( Animation.tweeners[ "*" ] ),
		index = 0,
		length = collection.length;
	for ( ; index < length; index++ ) {
		if ( ( tween = collection[ index ].call( animation, prop, value ) ) ) {

			// we're done with this property
			return tween;
		}
	}
}

function defaultPrefilter( elem, props, opts ) {
	/* jshint validthis: true */
	var prop, value, toggle, tween, hooks, oldfire, display, checkDisplay,
		anim = this,
		orig = {},
		style = elem.style,
		hidden = elem.nodeType && isHidden( elem ),
		dataShow = jQuery._data( elem, "fxshow" );

	// handle queue: false promises
	if ( !opts.queue ) {
		hooks = jQuery._queueHooks( elem, "fx" );
		if ( hooks.unqueued == null ) {
			hooks.unqueued = 0;
			oldfire = hooks.empty.fire;
			hooks.empty.fire = function() {
				if ( !hooks.unqueued ) {
					oldfire();
				}
			};
		}
		hooks.unqueued++;

		anim.always( function() {

			// doing this makes sure that the complete handler will be called
			// before this completes
			anim.always( function() {
				hooks.unqueued--;
				if ( !jQuery.queue( elem, "fx" ).length ) {
					hooks.empty.fire();
				}
			} );
		} );
	}

	// height/width overflow pass
	if ( elem.nodeType === 1 && ( "height" in props || "width" in props ) ) {

		// Make sure that nothing sneaks out
		// Record all 3 overflow attributes because IE does not
		// change the overflow attribute when overflowX and
		// overflowY are set to the same value
		opts.overflow = [ style.overflow, style.overflowX, style.overflowY ];

		// Set display property to inline-block for height/width
		// animations on inline elements that are having width/height animated
		display = jQuery.css( elem, "display" );

		// Test default display if display is currently "none"
		checkDisplay = display === "none" ?
			jQuery._data( elem, "olddisplay" ) || defaultDisplay( elem.nodeName ) : display;

		if ( checkDisplay === "inline" && jQuery.css( elem, "float" ) === "none" ) {

			// inline-level elements accept inline-block;
			// block-level elements need to be inline with layout
			if ( !support.inlineBlockNeedsLayout || defaultDisplay( elem.nodeName ) === "inline" ) {
				style.display = "inline-block";
			} else {
				style.zoom = 1;
			}
		}
	}

	if ( opts.overflow ) {
		style.overflow = "hidden";
		if ( !support.shrinkWrapBlocks() ) {
			anim.always( function() {
				style.overflow = opts.overflow[ 0 ];
				style.overflowX = opts.overflow[ 1 ];
				style.overflowY = opts.overflow[ 2 ];
			} );
		}
	}

	// show/hide pass
	for ( prop in props ) {
		value = props[ prop ];
		if ( rfxtypes.exec( value ) ) {
			delete props[ prop ];
			toggle = toggle || value === "toggle";
			if ( value === ( hidden ? "hide" : "show" ) ) {

				// If there is dataShow left over from a stopped hide or show
				// and we are going to proceed with show, we should pretend to be hidden
				if ( value === "show" && dataShow && dataShow[ prop ] !== undefined ) {
					hidden = true;
				} else {
					continue;
				}
			}
			orig[ prop ] = dataShow && dataShow[ prop ] || jQuery.style( elem, prop );

		// Any non-fx value stops us from restoring the original display value
		} else {
			display = undefined;
		}
	}

	if ( !jQuery.isEmptyObject( orig ) ) {
		if ( dataShow ) {
			if ( "hidden" in dataShow ) {
				hidden = dataShow.hidden;
			}
		} else {
			dataShow = jQuery._data( elem, "fxshow", {} );
		}

		// store state if its toggle - enables .stop().toggle() to "reverse"
		if ( toggle ) {
			dataShow.hidden = !hidden;
		}
		if ( hidden ) {
			jQuery( elem ).show();
		} else {
			anim.done( function() {
				jQuery( elem ).hide();
			} );
		}
		anim.done( function() {
			var prop;
			jQuery._removeData( elem, "fxshow" );
			for ( prop in orig ) {
				jQuery.style( elem, prop, orig[ prop ] );
			}
		} );
		for ( prop in orig ) {
			tween = createTween( hidden ? dataShow[ prop ] : 0, prop, anim );

			if ( !( prop in dataShow ) ) {
				dataShow[ prop ] = tween.start;
				if ( hidden ) {
					tween.end = tween.start;
					tween.start = prop === "width" || prop === "height" ? 1 : 0;
				}
			}
		}

	// If this is a noop like .hide().hide(), restore an overwritten display value
	} else if ( ( display === "none" ? defaultDisplay( elem.nodeName ) : display ) === "inline" ) {
		style.display = display;
	}
}

function propFilter( props, specialEasing ) {
	var index, name, easing, value, hooks;

	// camelCase, specialEasing and expand cssHook pass
	for ( index in props ) {
		name = jQuery.camelCase( index );
		easing = specialEasing[ name ];
		value = props[ index ];
		if ( jQuery.isArray( value ) ) {
			easing = value[ 1 ];
			value = props[ index ] = value[ 0 ];
		}

		if ( index !== name ) {
			props[ name ] = value;
			delete props[ index ];
		}

		hooks = jQuery.cssHooks[ name ];
		if ( hooks && "expand" in hooks ) {
			value = hooks.expand( value );
			delete props[ name ];

			// not quite $.extend, this wont overwrite keys already present.
			// also - reusing 'index' from above because we have the correct "name"
			for ( index in value ) {
				if ( !( index in props ) ) {
					props[ index ] = value[ index ];
					specialEasing[ index ] = easing;
				}
			}
		} else {
			specialEasing[ name ] = easing;
		}
	}
}

function Animation( elem, properties, options ) {
	var result,
		stopped,
		index = 0,
		length = Animation.prefilters.length,
		deferred = jQuery.Deferred().always( function() {

			// don't match elem in the :animated selector
			delete tick.elem;
		} ),
		tick = function() {
			if ( stopped ) {
				return false;
			}
			var currentTime = fxNow || createFxNow(),
				remaining = Math.max( 0, animation.startTime + animation.duration - currentTime ),

				// Support: Android 2.3
				// Archaic crash bug won't allow us to use `1 - ( 0.5 || 0 )` (#12497)
				temp = remaining / animation.duration || 0,
				percent = 1 - temp,
				index = 0,
				length = animation.tweens.length;

			for ( ; index < length ; index++ ) {
				animation.tweens[ index ].run( percent );
			}

			deferred.notifyWith( elem, [ animation, percent, remaining ] );

			if ( percent < 1 && length ) {
				return remaining;
			} else {
				deferred.resolveWith( elem, [ animation ] );
				return false;
			}
		},
		animation = deferred.promise( {
			elem: elem,
			props: jQuery.extend( {}, properties ),
			opts: jQuery.extend( true, {
				specialEasing: {},
				easing: jQuery.easing._default
			}, options ),
			originalProperties: properties,
			originalOptions: options,
			startTime: fxNow || createFxNow(),
			duration: options.duration,
			tweens: [],
			createTween: function( prop, end ) {
				var tween = jQuery.Tween( elem, animation.opts, prop, end,
						animation.opts.specialEasing[ prop ] || animation.opts.easing );
				animation.tweens.push( tween );
				return tween;
			},
			stop: function( gotoEnd ) {
				var index = 0,

					// if we are going to the end, we want to run all the tweens
					// otherwise we skip this part
					length = gotoEnd ? animation.tweens.length : 0;
				if ( stopped ) {
					return this;
				}
				stopped = true;
				for ( ; index < length ; index++ ) {
					animation.tweens[ index ].run( 1 );
				}

				// resolve when we played the last frame
				// otherwise, reject
				if ( gotoEnd ) {
					deferred.notifyWith( elem, [ animation, 1, 0 ] );
					deferred.resolveWith( elem, [ animation, gotoEnd ] );
				} else {
					deferred.rejectWith( elem, [ animation, gotoEnd ] );
				}
				return this;
			}
		} ),
		props = animation.props;

	propFilter( props, animation.opts.specialEasing );

	for ( ; index < length ; index++ ) {
		result = Animation.prefilters[ index ].call( animation, elem, props, animation.opts );
		if ( result ) {
			if ( jQuery.isFunction( result.stop ) ) {
				jQuery._queueHooks( animation.elem, animation.opts.queue ).stop =
					jQuery.proxy( result.stop, result );
			}
			return result;
		}
	}

	jQuery.map( props, createTween, animation );

	if ( jQuery.isFunction( animation.opts.start ) ) {
		animation.opts.start.call( elem, animation );
	}

	jQuery.fx.timer(
		jQuery.extend( tick, {
			elem: elem,
			anim: animation,
			queue: animation.opts.queue
		} )
	);

	// attach callbacks from options
	return animation.progress( animation.opts.progress )
		.done( animation.opts.done, animation.opts.complete )
		.fail( animation.opts.fail )
		.always( animation.opts.always );
}

jQuery.Animation = jQuery.extend( Animation, {

	tweeners: {
		"*": [ function( prop, value ) {
			var tween = this.createTween( prop, value );
			adjustCSS( tween.elem, prop, rcssNum.exec( value ), tween );
			return tween;
		} ]
	},

	tweener: function( props, callback ) {
		if ( jQuery.isFunction( props ) ) {
			callback = props;
			props = [ "*" ];
		} else {
			props = props.match( rnotwhite );
		}

		var prop,
			index = 0,
			length = props.length;

		for ( ; index < length ; index++ ) {
			prop = props[ index ];
			Animation.tweeners[ prop ] = Animation.tweeners[ prop ] || [];
			Animation.tweeners[ prop ].unshift( callback );
		}
	},

	prefilters: [ defaultPrefilter ],

	prefilter: function( callback, prepend ) {
		if ( prepend ) {
			Animation.prefilters.unshift( callback );
		} else {
			Animation.prefilters.push( callback );
		}
	}
} );

jQuery.speed = function( speed, easing, fn ) {
	var opt = speed && typeof speed === "object" ? jQuery.extend( {}, speed ) : {
		complete: fn || !fn && easing ||
			jQuery.isFunction( speed ) && speed,
		duration: speed,
		easing: fn && easing || easing && !jQuery.isFunction( easing ) && easing
	};

	opt.duration = jQuery.fx.off ? 0 : typeof opt.duration === "number" ? opt.duration :
		opt.duration in jQuery.fx.speeds ?
			jQuery.fx.speeds[ opt.duration ] : jQuery.fx.speeds._default;

	// normalize opt.queue - true/undefined/null -> "fx"
	if ( opt.queue == null || opt.queue === true ) {
		opt.queue = "fx";
	}

	// Queueing
	opt.old = opt.complete;

	opt.complete = function() {
		if ( jQuery.isFunction( opt.old ) ) {
			opt.old.call( this );
		}

		if ( opt.queue ) {
			jQuery.dequeue( this, opt.queue );
		}
	};

	return opt;
};

jQuery.fn.extend( {
	fadeTo: function( speed, to, easing, callback ) {

		// show any hidden elements after setting opacity to 0
		return this.filter( isHidden ).css( "opacity", 0 ).show()

			// animate to the value specified
			.end().animate( { opacity: to }, speed, easing, callback );
	},
	animate: function( prop, speed, easing, callback ) {
		var empty = jQuery.isEmptyObject( prop ),
			optall = jQuery.speed( speed, easing, callback ),
			doAnimation = function() {

				// Operate on a copy of prop so per-property easing won't be lost
				var anim = Animation( this, jQuery.extend( {}, prop ), optall );

				// Empty animations, or finishing resolves immediately
				if ( empty || jQuery._data( this, "finish" ) ) {
					anim.stop( true );
				}
			};
			doAnimation.finish = doAnimation;

		return empty || optall.queue === false ?
			this.each( doAnimation ) :
			this.queue( optall.queue, doAnimation );
	},
	stop: function( type, clearQueue, gotoEnd ) {
		var stopQueue = function( hooks ) {
			var stop = hooks.stop;
			delete hooks.stop;
			stop( gotoEnd );
		};

		if ( typeof type !== "string" ) {
			gotoEnd = clearQueue;
			clearQueue = type;
			type = undefined;
		}
		if ( clearQueue && type !== false ) {
			this.queue( type || "fx", [] );
		}

		return this.each( function() {
			var dequeue = true,
				index = type != null && type + "queueHooks",
				timers = jQuery.timers,
				data = jQuery._data( this );

			if ( index ) {
				if ( data[ index ] && data[ index ].stop ) {
					stopQueue( data[ index ] );
				}
			} else {
				for ( index in data ) {
					if ( data[ index ] && data[ index ].stop && rrun.test( index ) ) {
						stopQueue( data[ index ] );
					}
				}
			}

			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this &&
					( type == null || timers[ index ].queue === type ) ) {

					timers[ index ].anim.stop( gotoEnd );
					dequeue = false;
					timers.splice( index, 1 );
				}
			}

			// start the next in the queue if the last step wasn't forced
			// timers currently will call their complete callbacks, which will dequeue
			// but only if they were gotoEnd
			if ( dequeue || !gotoEnd ) {
				jQuery.dequeue( this, type );
			}
		} );
	},
	finish: function( type ) {
		if ( type !== false ) {
			type = type || "fx";
		}
		return this.each( function() {
			var index,
				data = jQuery._data( this ),
				queue = data[ type + "queue" ],
				hooks = data[ type + "queueHooks" ],
				timers = jQuery.timers,
				length = queue ? queue.length : 0;

			// enable finishing flag on private data
			data.finish = true;

			// empty the queue first
			jQuery.queue( this, type, [] );

			if ( hooks && hooks.stop ) {
				hooks.stop.call( this, true );
			}

			// look for any active animations, and finish them
			for ( index = timers.length; index--; ) {
				if ( timers[ index ].elem === this && timers[ index ].queue === type ) {
					timers[ index ].anim.stop( true );
					timers.splice( index, 1 );
				}
			}

			// look for any animations in the old queue and finish them
			for ( index = 0; index < length; index++ ) {
				if ( queue[ index ] && queue[ index ].finish ) {
					queue[ index ].finish.call( this );
				}
			}

			// turn off finishing flag
			delete data.finish;
		} );
	}
} );

jQuery.each( [ "toggle", "show", "hide" ], function( i, name ) {
	var cssFn = jQuery.fn[ name ];
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return speed == null || typeof speed === "boolean" ?
			cssFn.apply( this, arguments ) :
			this.animate( genFx( name, true ), speed, easing, callback );
	};
} );

// Generate shortcuts for custom animations
jQuery.each( {
	slideDown: genFx( "show" ),
	slideUp: genFx( "hide" ),
	slideToggle: genFx( "toggle" ),
	fadeIn: { opacity: "show" },
	fadeOut: { opacity: "hide" },
	fadeToggle: { opacity: "toggle" }
}, function( name, props ) {
	jQuery.fn[ name ] = function( speed, easing, callback ) {
		return this.animate( props, speed, easing, callback );
	};
} );

jQuery.timers = [];
jQuery.fx.tick = function() {
	var timer,
		timers = jQuery.timers,
		i = 0;

	fxNow = jQuery.now();

	for ( ; i < timers.length; i++ ) {
		timer = timers[ i ];

		// Checks the timer has not already been removed
		if ( !timer() && timers[ i ] === timer ) {
			timers.splice( i--, 1 );
		}
	}

	if ( !timers.length ) {
		jQuery.fx.stop();
	}
	fxNow = undefined;
};

jQuery.fx.timer = function( timer ) {
	jQuery.timers.push( timer );
	if ( timer() ) {
		jQuery.fx.start();
	} else {
		jQuery.timers.pop();
	}
};

jQuery.fx.interval = 13;

jQuery.fx.start = function() {
	if ( !timerId ) {
		timerId = window.setInterval( jQuery.fx.tick, jQuery.fx.interval );
	}
};

jQuery.fx.stop = function() {
	window.clearInterval( timerId );
	timerId = null;
};

jQuery.fx.speeds = {
	slow: 600,
	fast: 200,

	// Default speed
	_default: 400
};


// Based off of the plugin by Clint Helfers, with permission.
// http://web.archive.org/web/20100324014747/http://blindsignals.com/index.php/2009/07/jquery-delay/
jQuery.fn.delay = function( time, type ) {
	time = jQuery.fx ? jQuery.fx.speeds[ time ] || time : time;
	type = type || "fx";

	return this.queue( type, function( next, hooks ) {
		var timeout = window.setTimeout( next, time );
		hooks.stop = function() {
			window.clearTimeout( timeout );
		};
	} );
};


( function() {
	var a,
		input = document.createElement( "input" ),
		div = document.createElement( "div" ),
		select = document.createElement( "select" ),
		opt = select.appendChild( document.createElement( "option" ) );

	// Setup
	div = document.createElement( "div" );
	div.setAttribute( "className", "t" );
	div.innerHTML = "  <link/><table></table><a href='/a'>a</a><input type='checkbox'/>";
	a = div.getElementsByTagName( "a" )[ 0 ];

	// Support: Windows Web Apps (WWA)
	// `type` must use .setAttribute for WWA (#14901)
	input.setAttribute( "type", "checkbox" );
	div.appendChild( input );

	a = div.getElementsByTagName( "a" )[ 0 ];

	// First batch of tests.
	a.style.cssText = "top:1px";

	// Test setAttribute on camelCase class.
	// If it works, we need attrFixes when doing get/setAttribute (ie6/7)
	support.getSetAttribute = div.className !== "t";

	// Get the style information from getAttribute
	// (IE uses .cssText instead)
	support.style = /top/.test( a.getAttribute( "style" ) );

	// Make sure that URLs aren't manipulated
	// (IE normalizes it by default)
	support.hrefNormalized = a.getAttribute( "href" ) === "/a";

	// Check the default checkbox/radio value ("" on WebKit; "on" elsewhere)
	support.checkOn = !!input.value;

	// Make sure that a selected-by-default option has a working selected property.
	// (WebKit defaults to false instead of true, IE too, if it's in an optgroup)
	support.optSelected = opt.selected;

	// Tests for enctype support on a form (#6743)
	support.enctype = !!document.createElement( "form" ).enctype;

	// Make sure that the options inside disabled selects aren't marked as disabled
	// (WebKit marks them as disabled)
	select.disabled = true;
	support.optDisabled = !opt.disabled;

	// Support: IE8 only
	// Check if we can trust getAttribute("value")
	input = document.createElement( "input" );
	input.setAttribute( "value", "" );
	support.input = input.getAttribute( "value" ) === "";

	// Check if an input maintains its value after becoming a radio
	input.value = "t";
	input.setAttribute( "type", "radio" );
	support.radioValue = input.value === "t";
} )();


var rreturn = /\r/g,
	rspaces = /[\x20\t\r\n\f]+/g;

jQuery.fn.extend( {
	val: function( value ) {
		var hooks, ret, isFunction,
			elem = this[ 0 ];

		if ( !arguments.length ) {
			if ( elem ) {
				hooks = jQuery.valHooks[ elem.type ] ||
					jQuery.valHooks[ elem.nodeName.toLowerCase() ];

				if (
					hooks &&
					"get" in hooks &&
					( ret = hooks.get( elem, "value" ) ) !== undefined
				) {
					return ret;
				}

				ret = elem.value;

				return typeof ret === "string" ?

					// handle most common string cases
					ret.replace( rreturn, "" ) :

					// handle cases where value is null/undef or number
					ret == null ? "" : ret;
			}

			return;
		}

		isFunction = jQuery.isFunction( value );

		return this.each( function( i ) {
			var val;

			if ( this.nodeType !== 1 ) {
				return;
			}

			if ( isFunction ) {
				val = value.call( this, i, jQuery( this ).val() );
			} else {
				val = value;
			}

			// Treat null/undefined as ""; convert numbers to string
			if ( val == null ) {
				val = "";
			} else if ( typeof val === "number" ) {
				val += "";
			} else if ( jQuery.isArray( val ) ) {
				val = jQuery.map( val, function( value ) {
					return value == null ? "" : value + "";
				} );
			}

			hooks = jQuery.valHooks[ this.type ] || jQuery.valHooks[ this.nodeName.toLowerCase() ];

			// If set returns undefined, fall back to normal setting
			if ( !hooks || !( "set" in hooks ) || hooks.set( this, val, "value" ) === undefined ) {
				this.value = val;
			}
		} );
	}
} );

jQuery.extend( {
	valHooks: {
		option: {
			get: function( elem ) {
				var val = jQuery.find.attr( elem, "value" );
				return val != null ?
					val :

					// Support: IE10-11+
					// option.text throws exceptions (#14686, #14858)
					// Strip and collapse whitespace
					// https://html.spec.whatwg.org/#strip-and-collapse-whitespace
					jQuery.trim( jQuery.text( elem ) ).replace( rspaces, " " );
			}
		},
		select: {
			get: function( elem ) {
				var value, option,
					options = elem.options,
					index = elem.selectedIndex,
					one = elem.type === "select-one" || index < 0,
					values = one ? null : [],
					max = one ? index + 1 : options.length,
					i = index < 0 ?
						max :
						one ? index : 0;

				// Loop through all the selected options
				for ( ; i < max; i++ ) {
					option = options[ i ];

					// oldIE doesn't update selected after form reset (#2551)
					if ( ( option.selected || i === index ) &&

							// Don't return options that are disabled or in a disabled optgroup
							( support.optDisabled ?
								!option.disabled :
								option.getAttribute( "disabled" ) === null ) &&
							( !option.parentNode.disabled ||
								!jQuery.nodeName( option.parentNode, "optgroup" ) ) ) {

						// Get the specific value for the option
						value = jQuery( option ).val();

						// We don't need an array for one selects
						if ( one ) {
							return value;
						}

						// Multi-Selects return an array
						values.push( value );
					}
				}

				return values;
			},

			set: function( elem, value ) {
				var optionSet, option,
					options = elem.options,
					values = jQuery.makeArray( value ),
					i = options.length;

				while ( i-- ) {
					option = options[ i ];

					if ( jQuery.inArray( jQuery.valHooks.option.get( option ), values ) > -1 ) {

						// Support: IE6
						// When new option element is added to select box we need to
						// force reflow of newly added node in order to workaround delay
						// of initialization properties
						try {
							option.selected = optionSet = true;

						} catch ( _ ) {

							// Will be executed only in IE6
							option.scrollHeight;
						}

					} else {
						option.selected = false;
					}
				}

				// Force browsers to behave consistently when non-matching value is set
				if ( !optionSet ) {
					elem.selectedIndex = -1;
				}

				return options;
			}
		}
	}
} );

// Radios and checkboxes getter/setter
jQuery.each( [ "radio", "checkbox" ], function() {
	jQuery.valHooks[ this ] = {
		set: function( elem, value ) {
			if ( jQuery.isArray( value ) ) {
				return ( elem.checked = jQuery.inArray( jQuery( elem ).val(), value ) > -1 );
			}
		}
	};
	if ( !support.checkOn ) {
		jQuery.valHooks[ this ].get = function( elem ) {
			return elem.getAttribute( "value" ) === null ? "on" : elem.value;
		};
	}
} );




var nodeHook, boolHook,
	attrHandle = jQuery.expr.attrHandle,
	ruseDefault = /^(?:checked|selected)$/i,
	getSetAttribute = support.getSetAttribute,
	getSetInput = support.input;

jQuery.fn.extend( {
	attr: function( name, value ) {
		return access( this, jQuery.attr, name, value, arguments.length > 1 );
	},

	removeAttr: function( name ) {
		return this.each( function() {
			jQuery.removeAttr( this, name );
		} );
	}
} );

jQuery.extend( {
	attr: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set attributes on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		// Fallback to prop when attributes are not supported
		if ( typeof elem.getAttribute === "undefined" ) {
			return jQuery.prop( elem, name, value );
		}

		// All attributes are lowercase
		// Grab necessary hook if one is defined
		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {
			name = name.toLowerCase();
			hooks = jQuery.attrHooks[ name ] ||
				( jQuery.expr.match.bool.test( name ) ? boolHook : nodeHook );
		}

		if ( value !== undefined ) {
			if ( value === null ) {
				jQuery.removeAttr( elem, name );
				return;
			}

			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			elem.setAttribute( name, value + "" );
			return value;
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		ret = jQuery.find.attr( elem, name );

		// Non-existent attributes return null, we normalize to undefined
		return ret == null ? undefined : ret;
	},

	attrHooks: {
		type: {
			set: function( elem, value ) {
				if ( !support.radioValue && value === "radio" &&
					jQuery.nodeName( elem, "input" ) ) {

					// Setting the type on a radio button after the value resets the value in IE8-9
					// Reset value to default in case type is set after value during creation
					var val = elem.value;
					elem.setAttribute( "type", value );
					if ( val ) {
						elem.value = val;
					}
					return value;
				}
			}
		}
	},

	removeAttr: function( elem, value ) {
		var name, propName,
			i = 0,
			attrNames = value && value.match( rnotwhite );

		if ( attrNames && elem.nodeType === 1 ) {
			while ( ( name = attrNames[ i++ ] ) ) {
				propName = jQuery.propFix[ name ] || name;

				// Boolean attributes get special treatment (#10870)
				if ( jQuery.expr.match.bool.test( name ) ) {

					// Set corresponding property to false
					if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
						elem[ propName ] = false;

					// Support: IE<9
					// Also clear defaultChecked/defaultSelected (if appropriate)
					} else {
						elem[ jQuery.camelCase( "default-" + name ) ] =
							elem[ propName ] = false;
					}

				// See #9699 for explanation of this approach (setting first, then removal)
				} else {
					jQuery.attr( elem, name, "" );
				}

				elem.removeAttribute( getSetAttribute ? name : propName );
			}
		}
	}
} );

// Hooks for boolean attributes
boolHook = {
	set: function( elem, value, name ) {
		if ( value === false ) {

			// Remove boolean attributes when set to false
			jQuery.removeAttr( elem, name );
		} else if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {

			// IE<8 needs the *property* name
			elem.setAttribute( !getSetAttribute && jQuery.propFix[ name ] || name, name );

		} else {

			// Support: IE<9
			// Use defaultChecked and defaultSelected for oldIE
			elem[ jQuery.camelCase( "default-" + name ) ] = elem[ name ] = true;
		}
		return name;
	}
};

jQuery.each( jQuery.expr.match.bool.source.match( /\w+/g ), function( i, name ) {
	var getter = attrHandle[ name ] || jQuery.find.attr;

	if ( getSetInput && getSetAttribute || !ruseDefault.test( name ) ) {
		attrHandle[ name ] = function( elem, name, isXML ) {
			var ret, handle;
			if ( !isXML ) {

				// Avoid an infinite loop by temporarily removing this function from the getter
				handle = attrHandle[ name ];
				attrHandle[ name ] = ret;
				ret = getter( elem, name, isXML ) != null ?
					name.toLowerCase() :
					null;
				attrHandle[ name ] = handle;
			}
			return ret;
		};
	} else {
		attrHandle[ name ] = function( elem, name, isXML ) {
			if ( !isXML ) {
				return elem[ jQuery.camelCase( "default-" + name ) ] ?
					name.toLowerCase() :
					null;
			}
		};
	}
} );

// fix oldIE attroperties
if ( !getSetInput || !getSetAttribute ) {
	jQuery.attrHooks.value = {
		set: function( elem, value, name ) {
			if ( jQuery.nodeName( elem, "input" ) ) {

				// Does not return so that setAttribute is also used
				elem.defaultValue = value;
			} else {

				// Use nodeHook if defined (#1954); otherwise setAttribute is fine
				return nodeHook && nodeHook.set( elem, value, name );
			}
		}
	};
}

// IE6/7 do not support getting/setting some attributes with get/setAttribute
if ( !getSetAttribute ) {

	// Use this for any attribute in IE6/7
	// This fixes almost every IE6/7 issue
	nodeHook = {
		set: function( elem, value, name ) {

			// Set the existing or create a new attribute node
			var ret = elem.getAttributeNode( name );
			if ( !ret ) {
				elem.setAttributeNode(
					( ret = elem.ownerDocument.createAttribute( name ) )
				);
			}

			ret.value = value += "";

			// Break association with cloned elements by also using setAttribute (#9646)
			if ( name === "value" || value === elem.getAttribute( name ) ) {
				return value;
			}
		}
	};

	// Some attributes are constructed with empty-string values when not defined
	attrHandle.id = attrHandle.name = attrHandle.coords =
		function( elem, name, isXML ) {
			var ret;
			if ( !isXML ) {
				return ( ret = elem.getAttributeNode( name ) ) && ret.value !== "" ?
					ret.value :
					null;
			}
		};

	// Fixing value retrieval on a button requires this module
	jQuery.valHooks.button = {
		get: function( elem, name ) {
			var ret = elem.getAttributeNode( name );
			if ( ret && ret.specified ) {
				return ret.value;
			}
		},
		set: nodeHook.set
	};

	// Set contenteditable to false on removals(#10429)
	// Setting to empty string throws an error as an invalid value
	jQuery.attrHooks.contenteditable = {
		set: function( elem, value, name ) {
			nodeHook.set( elem, value === "" ? false : value, name );
		}
	};

	// Set width and height to auto instead of 0 on empty string( Bug #8150 )
	// This is for removals
	jQuery.each( [ "width", "height" ], function( i, name ) {
		jQuery.attrHooks[ name ] = {
			set: function( elem, value ) {
				if ( value === "" ) {
					elem.setAttribute( name, "auto" );
					return value;
				}
			}
		};
	} );
}

if ( !support.style ) {
	jQuery.attrHooks.style = {
		get: function( elem ) {

			// Return undefined in the case of empty string
			// Note: IE uppercases css property names, but if we were to .toLowerCase()
			// .cssText, that would destroy case sensitivity in URL's, like in "background"
			return elem.style.cssText || undefined;
		},
		set: function( elem, value ) {
			return ( elem.style.cssText = value + "" );
		}
	};
}




var rfocusable = /^(?:input|select|textarea|button|object)$/i,
	rclickable = /^(?:a|area)$/i;

jQuery.fn.extend( {
	prop: function( name, value ) {
		return access( this, jQuery.prop, name, value, arguments.length > 1 );
	},

	removeProp: function( name ) {
		name = jQuery.propFix[ name ] || name;
		return this.each( function() {

			// try/catch handles cases where IE balks (such as removing a property on window)
			try {
				this[ name ] = undefined;
				delete this[ name ];
			} catch ( e ) {}
		} );
	}
} );

jQuery.extend( {
	prop: function( elem, name, value ) {
		var ret, hooks,
			nType = elem.nodeType;

		// Don't get/set properties on text, comment and attribute nodes
		if ( nType === 3 || nType === 8 || nType === 2 ) {
			return;
		}

		if ( nType !== 1 || !jQuery.isXMLDoc( elem ) ) {

			// Fix name and attach hooks
			name = jQuery.propFix[ name ] || name;
			hooks = jQuery.propHooks[ name ];
		}

		if ( value !== undefined ) {
			if ( hooks && "set" in hooks &&
				( ret = hooks.set( elem, value, name ) ) !== undefined ) {
				return ret;
			}

			return ( elem[ name ] = value );
		}

		if ( hooks && "get" in hooks && ( ret = hooks.get( elem, name ) ) !== null ) {
			return ret;
		}

		return elem[ name ];
	},

	propHooks: {
		tabIndex: {
			get: function( elem ) {

				// elem.tabIndex doesn't always return the
				// correct value when it hasn't been explicitly set
				// http://fluidproject.org/blog/2008/01/09/getting-setting-and-removing-tabindex-values-with-javascript/
				// Use proper attribute retrieval(#12072)
				var tabindex = jQuery.find.attr( elem, "tabindex" );

				return tabindex ?
					parseInt( tabindex, 10 ) :
					rfocusable.test( elem.nodeName ) ||
						rclickable.test( elem.nodeName ) && elem.href ?
							0 :
							-1;
			}
		}
	},

	propFix: {
		"for": "htmlFor",
		"class": "className"
	}
} );

// Some attributes require a special call on IE
// http://msdn.microsoft.com/en-us/library/ms536429%28VS.85%29.aspx
if ( !support.hrefNormalized ) {

	// href/src property should get the full normalized URL (#10299/#12915)
	jQuery.each( [ "href", "src" ], function( i, name ) {
		jQuery.propHooks[ name ] = {
			get: function( elem ) {
				return elem.getAttribute( name, 4 );
			}
		};
	} );
}

// Support: Safari, IE9+
// Accessing the selectedIndex property
// forces the browser to respect setting selected
// on the option
// The getter ensures a default option is selected
// when in an optgroup
if ( !support.optSelected ) {
	jQuery.propHooks.selected = {
		get: function( elem ) {
			var parent = elem.parentNode;

			if ( parent ) {
				parent.selectedIndex;

				// Make sure that it also works with optgroups, see #5701
				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
			return null;
		},
		set: function( elem ) {
			var parent = elem.parentNode;
			if ( parent ) {
				parent.selectedIndex;

				if ( parent.parentNode ) {
					parent.parentNode.selectedIndex;
				}
			}
		}
	};
}

jQuery.each( [
	"tabIndex",
	"readOnly",
	"maxLength",
	"cellSpacing",
	"cellPadding",
	"rowSpan",
	"colSpan",
	"useMap",
	"frameBorder",
	"contentEditable"
], function() {
	jQuery.propFix[ this.toLowerCase() ] = this;
} );

// IE6/7 call enctype encoding
if ( !support.enctype ) {
	jQuery.propFix.enctype = "encoding";
}




var rclass = /[\t\r\n\f]/g;

function getClass( elem ) {
	return jQuery.attr( elem, "class" ) || "";
}

jQuery.fn.extend( {
	addClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).addClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {
						if ( cur.indexOf( " " + clazz + " " ) < 0 ) {
							cur += clazz + " ";
						}
					}

					// only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	removeClass: function( value ) {
		var classes, elem, cur, curValue, clazz, j, finalValue,
			i = 0;

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( j ) {
				jQuery( this ).removeClass( value.call( this, j, getClass( this ) ) );
			} );
		}

		if ( !arguments.length ) {
			return this.attr( "class", "" );
		}

		if ( typeof value === "string" && value ) {
			classes = value.match( rnotwhite ) || [];

			while ( ( elem = this[ i++ ] ) ) {
				curValue = getClass( elem );

				// This expression is here for better compressibility (see addClass)
				cur = elem.nodeType === 1 &&
					( " " + curValue + " " ).replace( rclass, " " );

				if ( cur ) {
					j = 0;
					while ( ( clazz = classes[ j++ ] ) ) {

						// Remove *all* instances
						while ( cur.indexOf( " " + clazz + " " ) > -1 ) {
							cur = cur.replace( " " + clazz + " ", " " );
						}
					}

					// Only assign if different to avoid unneeded rendering.
					finalValue = jQuery.trim( cur );
					if ( curValue !== finalValue ) {
						jQuery.attr( elem, "class", finalValue );
					}
				}
			}
		}

		return this;
	},

	toggleClass: function( value, stateVal ) {
		var type = typeof value;

		if ( typeof stateVal === "boolean" && type === "string" ) {
			return stateVal ? this.addClass( value ) : this.removeClass( value );
		}

		if ( jQuery.isFunction( value ) ) {
			return this.each( function( i ) {
				jQuery( this ).toggleClass(
					value.call( this, i, getClass( this ), stateVal ),
					stateVal
				);
			} );
		}

		return this.each( function() {
			var className, i, self, classNames;

			if ( type === "string" ) {

				// Toggle individual class names
				i = 0;
				self = jQuery( this );
				classNames = value.match( rnotwhite ) || [];

				while ( ( className = classNames[ i++ ] ) ) {

					// Check each className given, space separated list
					if ( self.hasClass( className ) ) {
						self.removeClass( className );
					} else {
						self.addClass( className );
					}
				}

			// Toggle whole class name
			} else if ( value === undefined || type === "boolean" ) {
				className = getClass( this );
				if ( className ) {

					// store className if set
					jQuery._data( this, "__className__", className );
				}

				// If the element has a class name or if we're passed "false",
				// then remove the whole classname (if there was one, the above saved it).
				// Otherwise bring back whatever was previously saved (if anything),
				// falling back to the empty string if nothing was stored.
				jQuery.attr( this, "class",
					className || value === false ?
					"" :
					jQuery._data( this, "__className__" ) || ""
				);
			}
		} );
	},

	hasClass: function( selector ) {
		var className, elem,
			i = 0;

		className = " " + selector + " ";
		while ( ( elem = this[ i++ ] ) ) {
			if ( elem.nodeType === 1 &&
				( " " + getClass( elem ) + " " ).replace( rclass, " " )
					.indexOf( className ) > -1
			) {
				return true;
			}
		}

		return false;
	}
} );




// Return jQuery for attributes-only inclusion


jQuery.each( ( "blur focus focusin focusout load resize scroll unload click dblclick " +
	"mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave " +
	"change select submit keydown keypress keyup error contextmenu" ).split( " " ),
	function( i, name ) {

	// Handle event binding
	jQuery.fn[ name ] = function( data, fn ) {
		return arguments.length > 0 ?
			this.on( name, null, data, fn ) :
			this.trigger( name );
	};
} );

jQuery.fn.extend( {
	hover: function( fnOver, fnOut ) {
		return this.mouseenter( fnOver ).mouseleave( fnOut || fnOver );
	}
} );


var location = window.location;

var nonce = jQuery.now();

var rquery = ( /\?/ );



var rvalidtokens = /(,)|(\[|{)|(}|])|"(?:[^"\\\r\n]|\\["\\\/bfnrt]|\\u[\da-fA-F]{4})*"\s*:?|true|false|null|-?(?!0\d)\d+(?:\.\d+|)(?:[eE][+-]?\d+|)/g;

jQuery.parseJSON = function( data ) {

	// Attempt to parse using the native JSON parser first
	if ( window.JSON && window.JSON.parse ) {

		// Support: Android 2.3
		// Workaround failure to string-cast null input
		return window.JSON.parse( data + "" );
	}

	var requireNonComma,
		depth = null,
		str = jQuery.trim( data + "" );

	// Guard against invalid (and possibly dangerous) input by ensuring that nothing remains
	// after removing valid tokens
	return str && !jQuery.trim( str.replace( rvalidtokens, function( token, comma, open, close ) {

		// Force termination if we see a misplaced comma
		if ( requireNonComma && comma ) {
			depth = 0;
		}

		// Perform no more replacements after returning to outermost depth
		if ( depth === 0 ) {
			return token;
		}

		// Commas must not follow "[", "{", or ","
		requireNonComma = open || comma;

		// Determine new depth
		// array/object open ("[" or "{"): depth += true - false (increment)
		// array/object close ("]" or "}"): depth += false - true (decrement)
		// other cases ("," or primitive): depth += true - true (numeric cast)
		depth += !close - !open;

		// Remove this token
		return "";
	} ) ) ?
		( Function( "return " + str ) )() :
		jQuery.error( "Invalid JSON: " + data );
};


// Cross-browser xml parsing
jQuery.parseXML = function( data ) {
	var xml, tmp;
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	try {
		if ( window.DOMParser ) { // Standard
			tmp = new window.DOMParser();
			xml = tmp.parseFromString( data, "text/xml" );
		} else { // IE
			xml = new window.ActiveXObject( "Microsoft.XMLDOM" );
			xml.async = "false";
			xml.loadXML( data );
		}
	} catch ( e ) {
		xml = undefined;
	}
	if ( !xml || !xml.documentElement || xml.getElementsByTagName( "parsererror" ).length ) {
		jQuery.error( "Invalid XML: " + data );
	}
	return xml;
};


var
	rhash = /#.*$/,
	rts = /([?&])_=[^&]*/,

	// IE leaves an \r character at EOL
	rheaders = /^(.*?):[ \t]*([^\r\n]*)\r?$/mg,

	// #7653, #8125, #8152: local protocol detection
	rlocalProtocol = /^(?:about|app|app-storage|.+-extension|file|res|widget):$/,
	rnoContent = /^(?:GET|HEAD)$/,
	rprotocol = /^\/\//,
	rurl = /^([\w.+-]+:)(?:\/\/(?:[^\/?#]*@|)([^\/?#:]*)(?::(\d+)|)|)/,

	/* Prefilters
	 * 1) They are useful to introduce custom dataTypes (see ajax/jsonp.js for an example)
	 * 2) These are called:
	 *    - BEFORE asking for a transport
	 *    - AFTER param serialization (s.data is a string if s.processData is true)
	 * 3) key is the dataType
	 * 4) the catchall symbol "*" can be used
	 * 5) execution will start with transport dataType and THEN continue down to "*" if needed
	 */
	prefilters = {},

	/* Transports bindings
	 * 1) key is the dataType
	 * 2) the catchall symbol "*" can be used
	 * 3) selection will start with transport dataType and THEN go to "*" if needed
	 */
	transports = {},

	// Avoid comment-prolog char sequence (#10098); must appease lint and evade compression
	allTypes = "*/".concat( "*" ),

	// Document location
	ajaxLocation = location.href,

	// Segment location into parts
	ajaxLocParts = rurl.exec( ajaxLocation.toLowerCase() ) || [];

// Base "constructor" for jQuery.ajaxPrefilter and jQuery.ajaxTransport
function addToPrefiltersOrTransports( structure ) {

	// dataTypeExpression is optional and defaults to "*"
	return function( dataTypeExpression, func ) {

		if ( typeof dataTypeExpression !== "string" ) {
			func = dataTypeExpression;
			dataTypeExpression = "*";
		}

		var dataType,
			i = 0,
			dataTypes = dataTypeExpression.toLowerCase().match( rnotwhite ) || [];

		if ( jQuery.isFunction( func ) ) {

			// For each dataType in the dataTypeExpression
			while ( ( dataType = dataTypes[ i++ ] ) ) {

				// Prepend if requested
				if ( dataType.charAt( 0 ) === "+" ) {
					dataType = dataType.slice( 1 ) || "*";
					( structure[ dataType ] = structure[ dataType ] || [] ).unshift( func );

				// Otherwise append
				} else {
					( structure[ dataType ] = structure[ dataType ] || [] ).push( func );
				}
			}
		}
	};
}

// Base inspection function for prefilters and transports
function inspectPrefiltersOrTransports( structure, options, originalOptions, jqXHR ) {

	var inspected = {},
		seekingTransport = ( structure === transports );

	function inspect( dataType ) {
		var selected;
		inspected[ dataType ] = true;
		jQuery.each( structure[ dataType ] || [], function( _, prefilterOrFactory ) {
			var dataTypeOrTransport = prefilterOrFactory( options, originalOptions, jqXHR );
			if ( typeof dataTypeOrTransport === "string" &&
				!seekingTransport && !inspected[ dataTypeOrTransport ] ) {

				options.dataTypes.unshift( dataTypeOrTransport );
				inspect( dataTypeOrTransport );
				return false;
			} else if ( seekingTransport ) {
				return !( selected = dataTypeOrTransport );
			}
		} );
		return selected;
	}

	return inspect( options.dataTypes[ 0 ] ) || !inspected[ "*" ] && inspect( "*" );
}

// A special extend for ajax options
// that takes "flat" options (not to be deep extended)
// Fixes #9887
function ajaxExtend( target, src ) {
	var deep, key,
		flatOptions = jQuery.ajaxSettings.flatOptions || {};

	for ( key in src ) {
		if ( src[ key ] !== undefined ) {
			( flatOptions[ key ] ? target : ( deep || ( deep = {} ) ) )[ key ] = src[ key ];
		}
	}
	if ( deep ) {
		jQuery.extend( true, target, deep );
	}

	return target;
}

/* Handles responses to an ajax request:
 * - finds the right dataType (mediates between content-type and expected dataType)
 * - returns the corresponding response
 */
function ajaxHandleResponses( s, jqXHR, responses ) {
	var firstDataType, ct, finalDataType, type,
		contents = s.contents,
		dataTypes = s.dataTypes;

	// Remove auto dataType and get content-type in the process
	while ( dataTypes[ 0 ] === "*" ) {
		dataTypes.shift();
		if ( ct === undefined ) {
			ct = s.mimeType || jqXHR.getResponseHeader( "Content-Type" );
		}
	}

	// Check if we're dealing with a known content-type
	if ( ct ) {
		for ( type in contents ) {
			if ( contents[ type ] && contents[ type ].test( ct ) ) {
				dataTypes.unshift( type );
				break;
			}
		}
	}

	// Check to see if we have a response for the expected dataType
	if ( dataTypes[ 0 ] in responses ) {
		finalDataType = dataTypes[ 0 ];
	} else {

		// Try convertible dataTypes
		for ( type in responses ) {
			if ( !dataTypes[ 0 ] || s.converters[ type + " " + dataTypes[ 0 ] ] ) {
				finalDataType = type;
				break;
			}
			if ( !firstDataType ) {
				firstDataType = type;
			}
		}

		// Or just use first one
		finalDataType = finalDataType || firstDataType;
	}

	// If we found a dataType
	// We add the dataType to the list if needed
	// and return the corresponding response
	if ( finalDataType ) {
		if ( finalDataType !== dataTypes[ 0 ] ) {
			dataTypes.unshift( finalDataType );
		}
		return responses[ finalDataType ];
	}
}

/* Chain conversions given the request and the original response
 * Also sets the responseXXX fields on the jqXHR instance
 */
function ajaxConvert( s, response, jqXHR, isSuccess ) {
	var conv2, current, conv, tmp, prev,
		converters = {},

		// Work with a copy of dataTypes in case we need to modify it for conversion
		dataTypes = s.dataTypes.slice();

	// Create converters map with lowercased keys
	if ( dataTypes[ 1 ] ) {
		for ( conv in s.converters ) {
			converters[ conv.toLowerCase() ] = s.converters[ conv ];
		}
	}

	current = dataTypes.shift();

	// Convert to each sequential dataType
	while ( current ) {

		if ( s.responseFields[ current ] ) {
			jqXHR[ s.responseFields[ current ] ] = response;
		}

		// Apply the dataFilter if provided
		if ( !prev && isSuccess && s.dataFilter ) {
			response = s.dataFilter( response, s.dataType );
		}

		prev = current;
		current = dataTypes.shift();

		if ( current ) {

			// There's only work to do if current dataType is non-auto
			if ( current === "*" ) {

				current = prev;

			// Convert response if prev dataType is non-auto and differs from current
			} else if ( prev !== "*" && prev !== current ) {

				// Seek a direct converter
				conv = converters[ prev + " " + current ] || converters[ "* " + current ];

				// If none found, seek a pair
				if ( !conv ) {
					for ( conv2 in converters ) {

						// If conv2 outputs current
						tmp = conv2.split( " " );
						if ( tmp[ 1 ] === current ) {

							// If prev can be converted to accepted input
							conv = converters[ prev + " " + tmp[ 0 ] ] ||
								converters[ "* " + tmp[ 0 ] ];
							if ( conv ) {

								// Condense equivalence converters
								if ( conv === true ) {
									conv = converters[ conv2 ];

								// Otherwise, insert the intermediate dataType
								} else if ( converters[ conv2 ] !== true ) {
									current = tmp[ 0 ];
									dataTypes.unshift( tmp[ 1 ] );
								}
								break;
							}
						}
					}
				}

				// Apply converter (if not an equivalence)
				if ( conv !== true ) {

					// Unless errors are allowed to bubble, catch and return them
					if ( conv && s[ "throws" ] ) { // jscs:ignore requireDotNotation
						response = conv( response );
					} else {
						try {
							response = conv( response );
						} catch ( e ) {
							return {
								state: "parsererror",
								error: conv ? e : "No conversion from " + prev + " to " + current
							};
						}
					}
				}
			}
		}
	}

	return { state: "success", data: response };
}

jQuery.extend( {

	// Counter for holding the number of active queries
	active: 0,

	// Last-Modified header cache for next request
	lastModified: {},
	etag: {},

	ajaxSettings: {
		url: ajaxLocation,
		type: "GET",
		isLocal: rlocalProtocol.test( ajaxLocParts[ 1 ] ),
		global: true,
		processData: true,
		async: true,
		contentType: "application/x-www-form-urlencoded; charset=UTF-8",
		/*
		timeout: 0,
		data: null,
		dataType: null,
		username: null,
		password: null,
		cache: null,
		throws: false,
		traditional: false,
		headers: {},
		*/

		accepts: {
			"*": allTypes,
			text: "text/plain",
			html: "text/html",
			xml: "application/xml, text/xml",
			json: "application/json, text/javascript"
		},

		contents: {
			xml: /\bxml\b/,
			html: /\bhtml/,
			json: /\bjson\b/
		},

		responseFields: {
			xml: "responseXML",
			text: "responseText",
			json: "responseJSON"
		},

		// Data converters
		// Keys separate source (or catchall "*") and destination types with a single space
		converters: {

			// Convert anything to text
			"* text": String,

			// Text to html (true = no transformation)
			"text html": true,

			// Evaluate text as a json expression
			"text json": jQuery.parseJSON,

			// Parse text as xml
			"text xml": jQuery.parseXML
		},

		// For options that shouldn't be deep extended:
		// you can add your own custom options here if
		// and when you create one that shouldn't be
		// deep extended (see ajaxExtend)
		flatOptions: {
			url: true,
			context: true
		}
	},

	// Creates a full fledged settings object into target
	// with both ajaxSettings and settings fields.
	// If target is omitted, writes into ajaxSettings.
	ajaxSetup: function( target, settings ) {
		return settings ?

			// Building a settings object
			ajaxExtend( ajaxExtend( target, jQuery.ajaxSettings ), settings ) :

			// Extending ajaxSettings
			ajaxExtend( jQuery.ajaxSettings, target );
	},

	ajaxPrefilter: addToPrefiltersOrTransports( prefilters ),
	ajaxTransport: addToPrefiltersOrTransports( transports ),

	// Main method
	ajax: function( url, options ) {

		// If url is an object, simulate pre-1.5 signature
		if ( typeof url === "object" ) {
			options = url;
			url = undefined;
		}

		// Force options to be an object
		options = options || {};

		var

			// Cross-domain detection vars
			parts,

			// Loop variable
			i,

			// URL without anti-cache param
			cacheURL,

			// Response headers as string
			responseHeadersString,

			// timeout handle
			timeoutTimer,

			// To know if global events are to be dispatched
			fireGlobals,

			transport,

			// Response headers
			responseHeaders,

			// Create the final options object
			s = jQuery.ajaxSetup( {}, options ),

			// Callbacks context
			callbackContext = s.context || s,

			// Context for global events is callbackContext if it is a DOM node or jQuery collection
			globalEventContext = s.context &&
				( callbackContext.nodeType || callbackContext.jquery ) ?
					jQuery( callbackContext ) :
					jQuery.event,

			// Deferreds
			deferred = jQuery.Deferred(),
			completeDeferred = jQuery.Callbacks( "once memory" ),

			// Status-dependent callbacks
			statusCode = s.statusCode || {},

			// Headers (they are sent all at once)
			requestHeaders = {},
			requestHeadersNames = {},

			// The jqXHR state
			state = 0,

			// Default abort message
			strAbort = "canceled",

			// Fake xhr
			jqXHR = {
				readyState: 0,

				// Builds headers hashtable if needed
				getResponseHeader: function( key ) {
					var match;
					if ( state === 2 ) {
						if ( !responseHeaders ) {
							responseHeaders = {};
							while ( ( match = rheaders.exec( responseHeadersString ) ) ) {
								responseHeaders[ match[ 1 ].toLowerCase() ] = match[ 2 ];
							}
						}
						match = responseHeaders[ key.toLowerCase() ];
					}
					return match == null ? null : match;
				},

				// Raw string
				getAllResponseHeaders: function() {
					return state === 2 ? responseHeadersString : null;
				},

				// Caches the header
				setRequestHeader: function( name, value ) {
					var lname = name.toLowerCase();
					if ( !state ) {
						name = requestHeadersNames[ lname ] = requestHeadersNames[ lname ] || name;
						requestHeaders[ name ] = value;
					}
					return this;
				},

				// Overrides response content-type header
				overrideMimeType: function( type ) {
					if ( !state ) {
						s.mimeType = type;
					}
					return this;
				},

				// Status-dependent callbacks
				statusCode: function( map ) {
					var code;
					if ( map ) {
						if ( state < 2 ) {
							for ( code in map ) {

								// Lazy-add the new callback in a way that preserves old ones
								statusCode[ code ] = [ statusCode[ code ], map[ code ] ];
							}
						} else {

							// Execute the appropriate callbacks
							jqXHR.always( map[ jqXHR.status ] );
						}
					}
					return this;
				},

				// Cancel the request
				abort: function( statusText ) {
					var finalText = statusText || strAbort;
					if ( transport ) {
						transport.abort( finalText );
					}
					done( 0, finalText );
					return this;
				}
			};

		// Attach deferreds
		deferred.promise( jqXHR ).complete = completeDeferred.add;
		jqXHR.success = jqXHR.done;
		jqXHR.error = jqXHR.fail;

		// Remove hash character (#7531: and string promotion)
		// Add protocol if not provided (#5866: IE7 issue with protocol-less urls)
		// Handle falsy url in the settings object (#10093: consistency with old signature)
		// We also use the url parameter if available
		s.url = ( ( url || s.url || ajaxLocation ) + "" )
			.replace( rhash, "" )
			.replace( rprotocol, ajaxLocParts[ 1 ] + "//" );

		// Alias method option to type as per ticket #12004
		s.type = options.method || options.type || s.method || s.type;

		// Extract dataTypes list
		s.dataTypes = jQuery.trim( s.dataType || "*" ).toLowerCase().match( rnotwhite ) || [ "" ];

		// A cross-domain request is in order when we have a protocol:host:port mismatch
		if ( s.crossDomain == null ) {
			parts = rurl.exec( s.url.toLowerCase() );
			s.crossDomain = !!( parts &&
				( parts[ 1 ] !== ajaxLocParts[ 1 ] || parts[ 2 ] !== ajaxLocParts[ 2 ] ||
					( parts[ 3 ] || ( parts[ 1 ] === "http:" ? "80" : "443" ) ) !==
						( ajaxLocParts[ 3 ] || ( ajaxLocParts[ 1 ] === "http:" ? "80" : "443" ) ) )
			);
		}

		// Convert data if not already a string
		if ( s.data && s.processData && typeof s.data !== "string" ) {
			s.data = jQuery.param( s.data, s.traditional );
		}

		// Apply prefilters
		inspectPrefiltersOrTransports( prefilters, s, options, jqXHR );

		// If request was aborted inside a prefilter, stop there
		if ( state === 2 ) {
			return jqXHR;
		}

		// We can fire global events as of now if asked to
		// Don't fire events if jQuery.event is undefined in an AMD-usage scenario (#15118)
		fireGlobals = jQuery.event && s.global;

		// Watch for a new set of requests
		if ( fireGlobals && jQuery.active++ === 0 ) {
			jQuery.event.trigger( "ajaxStart" );
		}

		// Uppercase the type
		s.type = s.type.toUpperCase();

		// Determine if request has content
		s.hasContent = !rnoContent.test( s.type );

		// Save the URL in case we're toying with the If-Modified-Since
		// and/or If-None-Match header later on
		cacheURL = s.url;

		// More options handling for requests with no content
		if ( !s.hasContent ) {

			// If data is available, append data to url
			if ( s.data ) {
				cacheURL = ( s.url += ( rquery.test( cacheURL ) ? "&" : "?" ) + s.data );

				// #9682: remove data so that it's not used in an eventual retry
				delete s.data;
			}

			// Add anti-cache in url if needed
			if ( s.cache === false ) {
				s.url = rts.test( cacheURL ) ?

					// If there is already a '_' parameter, set its value
					cacheURL.replace( rts, "$1_=" + nonce++ ) :

					// Otherwise add one to the end
					cacheURL + ( rquery.test( cacheURL ) ? "&" : "?" ) + "_=" + nonce++;
			}
		}

		// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
		if ( s.ifModified ) {
			if ( jQuery.lastModified[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-Modified-Since", jQuery.lastModified[ cacheURL ] );
			}
			if ( jQuery.etag[ cacheURL ] ) {
				jqXHR.setRequestHeader( "If-None-Match", jQuery.etag[ cacheURL ] );
			}
		}

		// Set the correct header, if data is being sent
		if ( s.data && s.hasContent && s.contentType !== false || options.contentType ) {
			jqXHR.setRequestHeader( "Content-Type", s.contentType );
		}

		// Set the Accepts header for the server, depending on the dataType
		jqXHR.setRequestHeader(
			"Accept",
			s.dataTypes[ 0 ] && s.accepts[ s.dataTypes[ 0 ] ] ?
				s.accepts[ s.dataTypes[ 0 ] ] +
					( s.dataTypes[ 0 ] !== "*" ? ", " + allTypes + "; q=0.01" : "" ) :
				s.accepts[ "*" ]
		);

		// Check for headers option
		for ( i in s.headers ) {
			jqXHR.setRequestHeader( i, s.headers[ i ] );
		}

		// Allow custom headers/mimetypes and early abort
		if ( s.beforeSend &&
			( s.beforeSend.call( callbackContext, jqXHR, s ) === false || state === 2 ) ) {

			// Abort if not done already and return
			return jqXHR.abort();
		}

		// aborting is no longer a cancellation
		strAbort = "abort";

		// Install callbacks on deferreds
		for ( i in { success: 1, error: 1, complete: 1 } ) {
			jqXHR[ i ]( s[ i ] );
		}

		// Get transport
		transport = inspectPrefiltersOrTransports( transports, s, options, jqXHR );

		// If no transport, we auto-abort
		if ( !transport ) {
			done( -1, "No Transport" );
		} else {
			jqXHR.readyState = 1;

			// Send global event
			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxSend", [ jqXHR, s ] );
			}

			// If request was aborted inside ajaxSend, stop there
			if ( state === 2 ) {
				return jqXHR;
			}

			// Timeout
			if ( s.async && s.timeout > 0 ) {
				timeoutTimer = window.setTimeout( function() {
					jqXHR.abort( "timeout" );
				}, s.timeout );
			}

			try {
				state = 1;
				transport.send( requestHeaders, done );
			} catch ( e ) {

				// Propagate exception as error if not done
				if ( state < 2 ) {
					done( -1, e );

				// Simply rethrow otherwise
				} else {
					throw e;
				}
			}
		}

		// Callback for when everything is done
		function done( status, nativeStatusText, responses, headers ) {
			var isSuccess, success, error, response, modified,
				statusText = nativeStatusText;

			// Called once
			if ( state === 2 ) {
				return;
			}

			// State is "done" now
			state = 2;

			// Clear timeout if it exists
			if ( timeoutTimer ) {
				window.clearTimeout( timeoutTimer );
			}

			// Dereference transport for early garbage collection
			// (no matter how long the jqXHR object will be used)
			transport = undefined;

			// Cache response headers
			responseHeadersString = headers || "";

			// Set readyState
			jqXHR.readyState = status > 0 ? 4 : 0;

			// Determine if successful
			isSuccess = status >= 200 && status < 300 || status === 304;

			// Get response data
			if ( responses ) {
				response = ajaxHandleResponses( s, jqXHR, responses );
			}

			// Convert no matter what (that way responseXXX fields are always set)
			response = ajaxConvert( s, response, jqXHR, isSuccess );

			// If successful, handle type chaining
			if ( isSuccess ) {

				// Set the If-Modified-Since and/or If-None-Match header, if in ifModified mode.
				if ( s.ifModified ) {
					modified = jqXHR.getResponseHeader( "Last-Modified" );
					if ( modified ) {
						jQuery.lastModified[ cacheURL ] = modified;
					}
					modified = jqXHR.getResponseHeader( "etag" );
					if ( modified ) {
						jQuery.etag[ cacheURL ] = modified;
					}
				}

				// if no content
				if ( status === 204 || s.type === "HEAD" ) {
					statusText = "nocontent";

				// if not modified
				} else if ( status === 304 ) {
					statusText = "notmodified";

				// If we have data, let's convert it
				} else {
					statusText = response.state;
					success = response.data;
					error = response.error;
					isSuccess = !error;
				}
			} else {

				// We extract error from statusText
				// then normalize statusText and status for non-aborts
				error = statusText;
				if ( status || !statusText ) {
					statusText = "error";
					if ( status < 0 ) {
						status = 0;
					}
				}
			}

			// Set data for the fake xhr object
			jqXHR.status = status;
			jqXHR.statusText = ( nativeStatusText || statusText ) + "";

			// Success/Error
			if ( isSuccess ) {
				deferred.resolveWith( callbackContext, [ success, statusText, jqXHR ] );
			} else {
				deferred.rejectWith( callbackContext, [ jqXHR, statusText, error ] );
			}

			// Status-dependent callbacks
			jqXHR.statusCode( statusCode );
			statusCode = undefined;

			if ( fireGlobals ) {
				globalEventContext.trigger( isSuccess ? "ajaxSuccess" : "ajaxError",
					[ jqXHR, s, isSuccess ? success : error ] );
			}

			// Complete
			completeDeferred.fireWith( callbackContext, [ jqXHR, statusText ] );

			if ( fireGlobals ) {
				globalEventContext.trigger( "ajaxComplete", [ jqXHR, s ] );

				// Handle the global AJAX counter
				if ( !( --jQuery.active ) ) {
					jQuery.event.trigger( "ajaxStop" );
				}
			}
		}

		return jqXHR;
	},

	getJSON: function( url, data, callback ) {
		return jQuery.get( url, data, callback, "json" );
	},

	getScript: function( url, callback ) {
		return jQuery.get( url, undefined, callback, "script" );
	}
} );

jQuery.each( [ "get", "post" ], function( i, method ) {
	jQuery[ method ] = function( url, data, callback, type ) {

		// shift arguments if data argument was omitted
		if ( jQuery.isFunction( data ) ) {
			type = type || callback;
			callback = data;
			data = undefined;
		}

		// The url can be an options object (which then must have .url)
		return jQuery.ajax( jQuery.extend( {
			url: url,
			type: method,
			dataType: type,
			data: data,
			success: callback
		}, jQuery.isPlainObject( url ) && url ) );
	};
} );


jQuery._evalUrl = function( url ) {
	return jQuery.ajax( {
		url: url,

		// Make this explicit, since user can override this through ajaxSetup (#11264)
		type: "GET",
		dataType: "script",
		cache: true,
		async: false,
		global: false,
		"throws": true
	} );
};


jQuery.fn.extend( {
	wrapAll: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapAll( html.call( this, i ) );
			} );
		}

		if ( this[ 0 ] ) {

			// The elements to wrap the target around
			var wrap = jQuery( html, this[ 0 ].ownerDocument ).eq( 0 ).clone( true );

			if ( this[ 0 ].parentNode ) {
				wrap.insertBefore( this[ 0 ] );
			}

			wrap.map( function() {
				var elem = this;

				while ( elem.firstChild && elem.firstChild.nodeType === 1 ) {
					elem = elem.firstChild;
				}

				return elem;
			} ).append( this );
		}

		return this;
	},

	wrapInner: function( html ) {
		if ( jQuery.isFunction( html ) ) {
			return this.each( function( i ) {
				jQuery( this ).wrapInner( html.call( this, i ) );
			} );
		}

		return this.each( function() {
			var self = jQuery( this ),
				contents = self.contents();

			if ( contents.length ) {
				contents.wrapAll( html );

			} else {
				self.append( html );
			}
		} );
	},

	wrap: function( html ) {
		var isFunction = jQuery.isFunction( html );

		return this.each( function( i ) {
			jQuery( this ).wrapAll( isFunction ? html.call( this, i ) : html );
		} );
	},

	unwrap: function() {
		return this.parent().each( function() {
			if ( !jQuery.nodeName( this, "body" ) ) {
				jQuery( this ).replaceWith( this.childNodes );
			}
		} ).end();
	}
} );


function getDisplay( elem ) {
	return elem.style && elem.style.display || jQuery.css( elem, "display" );
}

function filterHidden( elem ) {

	// Disconnected elements are considered hidden
	if ( !jQuery.contains( elem.ownerDocument || document, elem ) ) {
		return true;
	}
	while ( elem && elem.nodeType === 1 ) {
		if ( getDisplay( elem ) === "none" || elem.type === "hidden" ) {
			return true;
		}
		elem = elem.parentNode;
	}
	return false;
}

jQuery.expr.filters.hidden = function( elem ) {

	// Support: Opera <= 12.12
	// Opera reports offsetWidths and offsetHeights less than zero on some elements
	return support.reliableHiddenOffsets() ?
		( elem.offsetWidth <= 0 && elem.offsetHeight <= 0 &&
			!elem.getClientRects().length ) :
			filterHidden( elem );
};

jQuery.expr.filters.visible = function( elem ) {
	return !jQuery.expr.filters.hidden( elem );
};




var r20 = /%20/g,
	rbracket = /\[\]$/,
	rCRLF = /\r?\n/g,
	rsubmitterTypes = /^(?:submit|button|image|reset|file)$/i,
	rsubmittable = /^(?:input|select|textarea|keygen)/i;

function buildParams( prefix, obj, traditional, add ) {
	var name;

	if ( jQuery.isArray( obj ) ) {

		// Serialize array item.
		jQuery.each( obj, function( i, v ) {
			if ( traditional || rbracket.test( prefix ) ) {

				// Treat each array item as a scalar.
				add( prefix, v );

			} else {

				// Item is non-scalar (array or object), encode its numeric index.
				buildParams(
					prefix + "[" + ( typeof v === "object" && v != null ? i : "" ) + "]",
					v,
					traditional,
					add
				);
			}
		} );

	} else if ( !traditional && jQuery.type( obj ) === "object" ) {

		// Serialize object item.
		for ( name in obj ) {
			buildParams( prefix + "[" + name + "]", obj[ name ], traditional, add );
		}

	} else {

		// Serialize scalar item.
		add( prefix, obj );
	}
}

// Serialize an array of form elements or a set of
// key/values into a query string
jQuery.param = function( a, traditional ) {
	var prefix,
		s = [],
		add = function( key, value ) {

			// If value is a function, invoke it and return its value
			value = jQuery.isFunction( value ) ? value() : ( value == null ? "" : value );
			s[ s.length ] = encodeURIComponent( key ) + "=" + encodeURIComponent( value );
		};

	// Set traditional to true for jQuery <= 1.3.2 behavior.
	if ( traditional === undefined ) {
		traditional = jQuery.ajaxSettings && jQuery.ajaxSettings.traditional;
	}

	// If an array was passed in, assume that it is an array of form elements.
	if ( jQuery.isArray( a ) || ( a.jquery && !jQuery.isPlainObject( a ) ) ) {

		// Serialize the form elements
		jQuery.each( a, function() {
			add( this.name, this.value );
		} );

	} else {

		// If traditional, encode the "old" way (the way 1.3.2 or older
		// did it), otherwise encode params recursively.
		for ( prefix in a ) {
			buildParams( prefix, a[ prefix ], traditional, add );
		}
	}

	// Return the resulting serialization
	return s.join( "&" ).replace( r20, "+" );
};

jQuery.fn.extend( {
	serialize: function() {
		return jQuery.param( this.serializeArray() );
	},
	serializeArray: function() {
		return this.map( function() {

			// Can add propHook for "elements" to filter or add form elements
			var elements = jQuery.prop( this, "elements" );
			return elements ? jQuery.makeArray( elements ) : this;
		} )
		.filter( function() {
			var type = this.type;

			// Use .is(":disabled") so that fieldset[disabled] works
			return this.name && !jQuery( this ).is( ":disabled" ) &&
				rsubmittable.test( this.nodeName ) && !rsubmitterTypes.test( type ) &&
				( this.checked || !rcheckableType.test( type ) );
		} )
		.map( function( i, elem ) {
			var val = jQuery( this ).val();

			return val == null ?
				null :
				jQuery.isArray( val ) ?
					jQuery.map( val, function( val ) {
						return { name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
					} ) :
					{ name: elem.name, value: val.replace( rCRLF, "\r\n" ) };
		} ).get();
	}
} );


// Create the request object
// (This is still attached to ajaxSettings for backward compatibility)
jQuery.ajaxSettings.xhr = window.ActiveXObject !== undefined ?

	// Support: IE6-IE8
	function() {

		// XHR cannot access local files, always use ActiveX for that case
		if ( this.isLocal ) {
			return createActiveXHR();
		}

		// Support: IE 9-11
		// IE seems to error on cross-domain PATCH requests when ActiveX XHR
		// is used. In IE 9+ always use the native XHR.
		// Note: this condition won't catch Edge as it doesn't define
		// document.documentMode but it also doesn't support ActiveX so it won't
		// reach this code.
		if ( document.documentMode > 8 ) {
			return createStandardXHR();
		}

		// Support: IE<9
		// oldIE XHR does not support non-RFC2616 methods (#13240)
		// See http://msdn.microsoft.com/en-us/library/ie/ms536648(v=vs.85).aspx
		// and http://www.w3.org/Protocols/rfc2616/rfc2616-sec9.html#sec9
		// Although this check for six methods instead of eight
		// since IE also does not support "trace" and "connect"
		return /^(get|post|head|put|delete|options)$/i.test( this.type ) &&
			createStandardXHR() || createActiveXHR();
	} :

	// For all other browsers, use the standard XMLHttpRequest object
	createStandardXHR;

var xhrId = 0,
	xhrCallbacks = {},
	xhrSupported = jQuery.ajaxSettings.xhr();

// Support: IE<10
// Open requests must be manually aborted on unload (#5280)
// See https://support.microsoft.com/kb/2856746 for more info
if ( window.attachEvent ) {
	window.attachEvent( "onunload", function() {
		for ( var key in xhrCallbacks ) {
			xhrCallbacks[ key ]( undefined, true );
		}
	} );
}

// Determine support properties
support.cors = !!xhrSupported && ( "withCredentials" in xhrSupported );
xhrSupported = support.ajax = !!xhrSupported;

// Create transport if the browser can provide an xhr
if ( xhrSupported ) {

	jQuery.ajaxTransport( function( options ) {

		// Cross domain only allowed if supported through XMLHttpRequest
		if ( !options.crossDomain || support.cors ) {

			var callback;

			return {
				send: function( headers, complete ) {
					var i,
						xhr = options.xhr(),
						id = ++xhrId;

					// Open the socket
					xhr.open(
						options.type,
						options.url,
						options.async,
						options.username,
						options.password
					);

					// Apply custom fields if provided
					if ( options.xhrFields ) {
						for ( i in options.xhrFields ) {
							xhr[ i ] = options.xhrFields[ i ];
						}
					}

					// Override mime type if needed
					if ( options.mimeType && xhr.overrideMimeType ) {
						xhr.overrideMimeType( options.mimeType );
					}

					// X-Requested-With header
					// For cross-domain requests, seeing as conditions for a preflight are
					// akin to a jigsaw puzzle, we simply never set it to be sure.
					// (it can always be set on a per-request basis or even using ajaxSetup)
					// For same-domain requests, won't change header if already provided.
					if ( !options.crossDomain && !headers[ "X-Requested-With" ] ) {
						headers[ "X-Requested-With" ] = "XMLHttpRequest";
					}

					// Set headers
					for ( i in headers ) {

						// Support: IE<9
						// IE's ActiveXObject throws a 'Type Mismatch' exception when setting
						// request header to a null-value.
						//
						// To keep consistent with other XHR implementations, cast the value
						// to string and ignore `undefined`.
						if ( headers[ i ] !== undefined ) {
							xhr.setRequestHeader( i, headers[ i ] + "" );
						}
					}

					// Do send the request
					// This may raise an exception which is actually
					// handled in jQuery.ajax (so no try/catch here)
					xhr.send( ( options.hasContent && options.data ) || null );

					// Listener
					callback = function( _, isAbort ) {
						var status, statusText, responses;

						// Was never called and is aborted or complete
						if ( callback && ( isAbort || xhr.readyState === 4 ) ) {

							// Clean up
							delete xhrCallbacks[ id ];
							callback = undefined;
							xhr.onreadystatechange = jQuery.noop;

							// Abort manually if needed
							if ( isAbort ) {
								if ( xhr.readyState !== 4 ) {
									xhr.abort();
								}
							} else {
								responses = {};
								status = xhr.status;

								// Support: IE<10
								// Accessing binary-data responseText throws an exception
								// (#11426)
								if ( typeof xhr.responseText === "string" ) {
									responses.text = xhr.responseText;
								}

								// Firefox throws an exception when accessing
								// statusText for faulty cross-domain requests
								try {
									statusText = xhr.statusText;
								} catch ( e ) {

									// We normalize with Webkit giving an empty statusText
									statusText = "";
								}

								// Filter status for non standard behaviors

								// If the request is local and we have data: assume a success
								// (success with no data won't get notified, that's the best we
								// can do given current implementations)
								if ( !status && options.isLocal && !options.crossDomain ) {
									status = responses.text ? 200 : 404;

								// IE - #1450: sometimes returns 1223 when it should be 204
								} else if ( status === 1223 ) {
									status = 204;
								}
							}
						}

						// Call complete if needed
						if ( responses ) {
							complete( status, statusText, responses, xhr.getAllResponseHeaders() );
						}
					};

					// Do send the request
					// `xhr.send` may raise an exception, but it will be
					// handled in jQuery.ajax (so no try/catch here)
					if ( !options.async ) {

						// If we're in sync mode we fire the callback
						callback();
					} else if ( xhr.readyState === 4 ) {

						// (IE6 & IE7) if it's in cache and has been
						// retrieved directly we need to fire the callback
						window.setTimeout( callback );
					} else {

						// Register the callback, but delay it in case `xhr.send` throws
						// Add to the list of active xhr callbacks
						xhr.onreadystatechange = xhrCallbacks[ id ] = callback;
					}
				},

				abort: function() {
					if ( callback ) {
						callback( undefined, true );
					}
				}
			};
		}
	} );
}

// Functions to create xhrs
function createStandardXHR() {
	try {
		return new window.XMLHttpRequest();
	} catch ( e ) {}
}

function createActiveXHR() {
	try {
		return new window.ActiveXObject( "Microsoft.XMLHTTP" );
	} catch ( e ) {}
}




// Install script dataType
jQuery.ajaxSetup( {
	accepts: {
		script: "text/javascript, application/javascript, " +
			"application/ecmascript, application/x-ecmascript"
	},
	contents: {
		script: /\b(?:java|ecma)script\b/
	},
	converters: {
		"text script": function( text ) {
			jQuery.globalEval( text );
			return text;
		}
	}
} );

// Handle cache's special case and global
jQuery.ajaxPrefilter( "script", function( s ) {
	if ( s.cache === undefined ) {
		s.cache = false;
	}
	if ( s.crossDomain ) {
		s.type = "GET";
		s.global = false;
	}
} );

// Bind script tag hack transport
jQuery.ajaxTransport( "script", function( s ) {

	// This transport only deals with cross domain requests
	if ( s.crossDomain ) {

		var script,
			head = document.head || jQuery( "head" )[ 0 ] || document.documentElement;

		return {

			send: function( _, callback ) {

				script = document.createElement( "script" );

				script.async = true;

				if ( s.scriptCharset ) {
					script.charset = s.scriptCharset;
				}

				script.src = s.url;

				// Attach handlers for all browsers
				script.onload = script.onreadystatechange = function( _, isAbort ) {

					if ( isAbort || !script.readyState || /loaded|complete/.test( script.readyState ) ) {

						// Handle memory leak in IE
						script.onload = script.onreadystatechange = null;

						// Remove the script
						if ( script.parentNode ) {
							script.parentNode.removeChild( script );
						}

						// Dereference the script
						script = null;

						// Callback if not abort
						if ( !isAbort ) {
							callback( 200, "success" );
						}
					}
				};

				// Circumvent IE6 bugs with base elements (#2709 and #4378) by prepending
				// Use native DOM manipulation to avoid our domManip AJAX trickery
				head.insertBefore( script, head.firstChild );
			},

			abort: function() {
				if ( script ) {
					script.onload( undefined, true );
				}
			}
		};
	}
} );




var oldCallbacks = [],
	rjsonp = /(=)\?(?=&|$)|\?\?/;

// Default jsonp settings
jQuery.ajaxSetup( {
	jsonp: "callback",
	jsonpCallback: function() {
		var callback = oldCallbacks.pop() || ( jQuery.expando + "_" + ( nonce++ ) );
		this[ callback ] = true;
		return callback;
	}
} );

// Detect, normalize options and install callbacks for jsonp requests
jQuery.ajaxPrefilter( "json jsonp", function( s, originalSettings, jqXHR ) {

	var callbackName, overwritten, responseContainer,
		jsonProp = s.jsonp !== false && ( rjsonp.test( s.url ) ?
			"url" :
			typeof s.data === "string" &&
				( s.contentType || "" )
					.indexOf( "application/x-www-form-urlencoded" ) === 0 &&
				rjsonp.test( s.data ) && "data"
		);

	// Handle iff the expected data type is "jsonp" or we have a parameter to set
	if ( jsonProp || s.dataTypes[ 0 ] === "jsonp" ) {

		// Get callback name, remembering preexisting value associated with it
		callbackName = s.jsonpCallback = jQuery.isFunction( s.jsonpCallback ) ?
			s.jsonpCallback() :
			s.jsonpCallback;

		// Insert callback into url or form data
		if ( jsonProp ) {
			s[ jsonProp ] = s[ jsonProp ].replace( rjsonp, "$1" + callbackName );
		} else if ( s.jsonp !== false ) {
			s.url += ( rquery.test( s.url ) ? "&" : "?" ) + s.jsonp + "=" + callbackName;
		}

		// Use data converter to retrieve json after script execution
		s.converters[ "script json" ] = function() {
			if ( !responseContainer ) {
				jQuery.error( callbackName + " was not called" );
			}
			return responseContainer[ 0 ];
		};

		// force json dataType
		s.dataTypes[ 0 ] = "json";

		// Install callback
		overwritten = window[ callbackName ];
		window[ callbackName ] = function() {
			responseContainer = arguments;
		};

		// Clean-up function (fires after converters)
		jqXHR.always( function() {

			// If previous value didn't exist - remove it
			if ( overwritten === undefined ) {
				jQuery( window ).removeProp( callbackName );

			// Otherwise restore preexisting value
			} else {
				window[ callbackName ] = overwritten;
			}

			// Save back as free
			if ( s[ callbackName ] ) {

				// make sure that re-using the options doesn't screw things around
				s.jsonpCallback = originalSettings.jsonpCallback;

				// save the callback name for future use
				oldCallbacks.push( callbackName );
			}

			// Call if it was a function and we have a response
			if ( responseContainer && jQuery.isFunction( overwritten ) ) {
				overwritten( responseContainer[ 0 ] );
			}

			responseContainer = overwritten = undefined;
		} );

		// Delegate to script
		return "script";
	}
} );




// data: string of html
// context (optional): If specified, the fragment will be created in this context,
// defaults to document
// keepScripts (optional): If true, will include scripts passed in the html string
jQuery.parseHTML = function( data, context, keepScripts ) {
	if ( !data || typeof data !== "string" ) {
		return null;
	}
	if ( typeof context === "boolean" ) {
		keepScripts = context;
		context = false;
	}
	context = context || document;

	var parsed = rsingleTag.exec( data ),
		scripts = !keepScripts && [];

	// Single tag
	if ( parsed ) {
		return [ context.createElement( parsed[ 1 ] ) ];
	}

	parsed = buildFragment( [ data ], context, scripts );

	if ( scripts && scripts.length ) {
		jQuery( scripts ).remove();
	}

	return jQuery.merge( [], parsed.childNodes );
};


// Keep a copy of the old load method
var _load = jQuery.fn.load;

/**
 * Load a url into a page
 */
jQuery.fn.load = function( url, params, callback ) {
	if ( typeof url !== "string" && _load ) {
		return _load.apply( this, arguments );
	}

	var selector, type, response,
		self = this,
		off = url.indexOf( " " );

	if ( off > -1 ) {
		selector = jQuery.trim( url.slice( off, url.length ) );
		url = url.slice( 0, off );
	}

	// If it's a function
	if ( jQuery.isFunction( params ) ) {

		// We assume that it's the callback
		callback = params;
		params = undefined;

	// Otherwise, build a param string
	} else if ( params && typeof params === "object" ) {
		type = "POST";
	}

	// If we have elements to modify, make the request
	if ( self.length > 0 ) {
		jQuery.ajax( {
			url: url,

			// If "type" variable is undefined, then "GET" method will be used.
			// Make value of this field explicit since
			// user can override it through ajaxSetup method
			type: type || "GET",
			dataType: "html",
			data: params
		} ).done( function( responseText ) {

			// Save response for use in complete callback
			response = arguments;

			self.html( selector ?

				// If a selector was specified, locate the right elements in a dummy div
				// Exclude scripts to avoid IE 'Permission Denied' errors
				jQuery( "<div>" ).append( jQuery.parseHTML( responseText ) ).find( selector ) :

				// Otherwise use the full result
				responseText );

		// If the request succeeds, this function gets "data", "status", "jqXHR"
		// but they are ignored because response was set above.
		// If it fails, this function gets "jqXHR", "status", "error"
		} ).always( callback && function( jqXHR, status ) {
			self.each( function() {
				callback.apply( this, response || [ jqXHR.responseText, status, jqXHR ] );
			} );
		} );
	}

	return this;
};




// Attach a bunch of functions for handling common AJAX events
jQuery.each( [
	"ajaxStart",
	"ajaxStop",
	"ajaxComplete",
	"ajaxError",
	"ajaxSuccess",
	"ajaxSend"
], function( i, type ) {
	jQuery.fn[ type ] = function( fn ) {
		return this.on( type, fn );
	};
} );




jQuery.expr.filters.animated = function( elem ) {
	return jQuery.grep( jQuery.timers, function( fn ) {
		return elem === fn.elem;
	} ).length;
};





/**
 * Gets a window from an element
 */
function getWindow( elem ) {
	return jQuery.isWindow( elem ) ?
		elem :
		elem.nodeType === 9 ?
			elem.defaultView || elem.parentWindow :
			false;
}

jQuery.offset = {
	setOffset: function( elem, options, i ) {
		var curPosition, curLeft, curCSSTop, curTop, curOffset, curCSSLeft, calculatePosition,
			position = jQuery.css( elem, "position" ),
			curElem = jQuery( elem ),
			props = {};

		// set position first, in-case top/left are set even on static elem
		if ( position === "static" ) {
			elem.style.position = "relative";
		}

		curOffset = curElem.offset();
		curCSSTop = jQuery.css( elem, "top" );
		curCSSLeft = jQuery.css( elem, "left" );
		calculatePosition = ( position === "absolute" || position === "fixed" ) &&
			jQuery.inArray( "auto", [ curCSSTop, curCSSLeft ] ) > -1;

		// need to be able to calculate position if either top or left
		// is auto and position is either absolute or fixed
		if ( calculatePosition ) {
			curPosition = curElem.position();
			curTop = curPosition.top;
			curLeft = curPosition.left;
		} else {
			curTop = parseFloat( curCSSTop ) || 0;
			curLeft = parseFloat( curCSSLeft ) || 0;
		}

		if ( jQuery.isFunction( options ) ) {

			// Use jQuery.extend here to allow modification of coordinates argument (gh-1848)
			options = options.call( elem, i, jQuery.extend( {}, curOffset ) );
		}

		if ( options.top != null ) {
			props.top = ( options.top - curOffset.top ) + curTop;
		}
		if ( options.left != null ) {
			props.left = ( options.left - curOffset.left ) + curLeft;
		}

		if ( "using" in options ) {
			options.using.call( elem, props );
		} else {
			curElem.css( props );
		}
	}
};

jQuery.fn.extend( {
	offset: function( options ) {
		if ( arguments.length ) {
			return options === undefined ?
				this :
				this.each( function( i ) {
					jQuery.offset.setOffset( this, options, i );
				} );
		}

		var docElem, win,
			box = { top: 0, left: 0 },
			elem = this[ 0 ],
			doc = elem && elem.ownerDocument;

		if ( !doc ) {
			return;
		}

		docElem = doc.documentElement;

		// Make sure it's not a disconnected DOM node
		if ( !jQuery.contains( docElem, elem ) ) {
			return box;
		}

		// If we don't have gBCR, just use 0,0 rather than error
		// BlackBerry 5, iOS 3 (original iPhone)
		if ( typeof elem.getBoundingClientRect !== "undefined" ) {
			box = elem.getBoundingClientRect();
		}
		win = getWindow( doc );
		return {
			top: box.top  + ( win.pageYOffset || docElem.scrollTop )  - ( docElem.clientTop  || 0 ),
			left: box.left + ( win.pageXOffset || docElem.scrollLeft ) - ( docElem.clientLeft || 0 )
		};
	},

	position: function() {
		if ( !this[ 0 ] ) {
			return;
		}

		var offsetParent, offset,
			parentOffset = { top: 0, left: 0 },
			elem = this[ 0 ];

		// Fixed elements are offset from window (parentOffset = {top:0, left: 0},
		// because it is its only offset parent
		if ( jQuery.css( elem, "position" ) === "fixed" ) {

			// we assume that getBoundingClientRect is available when computed position is fixed
			offset = elem.getBoundingClientRect();
		} else {

			// Get *real* offsetParent
			offsetParent = this.offsetParent();

			// Get correct offsets
			offset = this.offset();
			if ( !jQuery.nodeName( offsetParent[ 0 ], "html" ) ) {
				parentOffset = offsetParent.offset();
			}

			// Add offsetParent borders
			parentOffset.top  += jQuery.css( offsetParent[ 0 ], "borderTopWidth", true );
			parentOffset.left += jQuery.css( offsetParent[ 0 ], "borderLeftWidth", true );
		}

		// Subtract parent offsets and element margins
		// note: when an element has margin: auto the offsetLeft and marginLeft
		// are the same in Safari causing offset.left to incorrectly be 0
		return {
			top:  offset.top  - parentOffset.top - jQuery.css( elem, "marginTop", true ),
			left: offset.left - parentOffset.left - jQuery.css( elem, "marginLeft", true )
		};
	},

	offsetParent: function() {
		return this.map( function() {
			var offsetParent = this.offsetParent;

			while ( offsetParent && ( !jQuery.nodeName( offsetParent, "html" ) &&
				jQuery.css( offsetParent, "position" ) === "static" ) ) {
				offsetParent = offsetParent.offsetParent;
			}
			return offsetParent || documentElement;
		} );
	}
} );

// Create scrollLeft and scrollTop methods
jQuery.each( { scrollLeft: "pageXOffset", scrollTop: "pageYOffset" }, function( method, prop ) {
	var top = /Y/.test( prop );

	jQuery.fn[ method ] = function( val ) {
		return access( this, function( elem, method, val ) {
			var win = getWindow( elem );

			if ( val === undefined ) {
				return win ? ( prop in win ) ? win[ prop ] :
					win.document.documentElement[ method ] :
					elem[ method ];
			}

			if ( win ) {
				win.scrollTo(
					!top ? val : jQuery( win ).scrollLeft(),
					top ? val : jQuery( win ).scrollTop()
				);

			} else {
				elem[ method ] = val;
			}
		}, method, val, arguments.length, null );
	};
} );

// Support: Safari<7-8+, Chrome<37-44+
// Add the top/left cssHooks using jQuery.fn.position
// Webkit bug: https://bugs.webkit.org/show_bug.cgi?id=29084
// getComputedStyle returns percent when specified for top/left/bottom/right
// rather than make the css module depend on the offset module, we just check for it here
jQuery.each( [ "top", "left" ], function( i, prop ) {
	jQuery.cssHooks[ prop ] = addGetHookIf( support.pixelPosition,
		function( elem, computed ) {
			if ( computed ) {
				computed = curCSS( elem, prop );

				// if curCSS returns percentage, fallback to offset
				return rnumnonpx.test( computed ) ?
					jQuery( elem ).position()[ prop ] + "px" :
					computed;
			}
		}
	);
} );


// Create innerHeight, innerWidth, height, width, outerHeight and outerWidth methods
jQuery.each( { Height: "height", Width: "width" }, function( name, type ) {
	jQuery.each( { padding: "inner" + name, content: type, "": "outer" + name },
	function( defaultExtra, funcName ) {

		// margin is only for outerHeight, outerWidth
		jQuery.fn[ funcName ] = function( margin, value ) {
			var chainable = arguments.length && ( defaultExtra || typeof margin !== "boolean" ),
				extra = defaultExtra || ( margin === true || value === true ? "margin" : "border" );

			return access( this, function( elem, type, value ) {
				var doc;

				if ( jQuery.isWindow( elem ) ) {

					// As of 5/8/2012 this will yield incorrect results for Mobile Safari, but there
					// isn't a whole lot we can do. See pull request at this URL for discussion:
					// https://github.com/jquery/jquery/pull/764
					return elem.document.documentElement[ "client" + name ];
				}

				// Get document width or height
				if ( elem.nodeType === 9 ) {
					doc = elem.documentElement;

					// Either scroll[Width/Height] or offset[Width/Height] or client[Width/Height],
					// whichever is greatest
					// unfortunately, this causes bug #3838 in IE6/8 only,
					// but there is currently no good, small way to fix it.
					return Math.max(
						elem.body[ "scroll" + name ], doc[ "scroll" + name ],
						elem.body[ "offset" + name ], doc[ "offset" + name ],
						doc[ "client" + name ]
					);
				}

				return value === undefined ?

					// Get width or height on the element, requesting but not forcing parseFloat
					jQuery.css( elem, type, extra ) :

					// Set width or height on the element
					jQuery.style( elem, type, value, extra );
			}, type, chainable ? margin : undefined, chainable, null );
		};
	} );
} );


jQuery.fn.extend( {

	bind: function( types, data, fn ) {
		return this.on( types, null, data, fn );
	},
	unbind: function( types, fn ) {
		return this.off( types, null, fn );
	},

	delegate: function( selector, types, data, fn ) {
		return this.on( types, selector, data, fn );
	},
	undelegate: function( selector, types, fn ) {

		// ( namespace ) or ( selector, types [, fn] )
		return arguments.length === 1 ?
			this.off( selector, "**" ) :
			this.off( types, selector || "**", fn );
	}
} );

// The number of elements contained in the matched element set
jQuery.fn.size = function() {
	return this.length;
};

jQuery.fn.andSelf = jQuery.fn.addBack;




// Register as a named AMD module, since jQuery can be concatenated with other
// files that may use define, but not via a proper concatenation script that
// understands anonymous AMD modules. A named AMD is safest and most robust
// way to register. Lowercase jquery is used because AMD module names are
// derived from file names, and jQuery is normally delivered in a lowercase
// file name. Do this after creating the global so that if an AMD module wants
// to call noConflict to hide this version of jQuery, it will work.

// Note that for maximum portability, libraries that are not jQuery should
// declare themselves as anonymous modules, and avoid setting a global if an
// AMD loader is present. jQuery is a special case. For more information, see
// https://github.com/jrburke/requirejs/wiki/Updating-existing-libraries#wiki-anon

if ( true ) {
	!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function() {
		return jQuery;
	}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
}



var

	// Map over jQuery in case of overwrite
	_jQuery = window.jQuery,

	// Map over the $ in case of overwrite
	_$ = window.$;

jQuery.noConflict = function( deep ) {
	if ( window.$ === jQuery ) {
		window.$ = _$;
	}

	if ( deep && window.jQuery === jQuery ) {
		window.jQuery = _jQuery;
	}

	return jQuery;
};

// Expose jQuery and $ identifiers, even in
// AMD (#7102#comment:10, https://github.com/jquery/jquery/pull/557)
// and CommonJS for browser emulators (#13566)
if ( !noGlobal ) {
	window.jQuery = window.$ = jQuery;
}

return jQuery;
}));


/***/ }),

/***/ "./node_modules/lazysizes/lazysizes.js":
/*!*********************************************!*\
  !*** ./node_modules/lazysizes/lazysizes.js ***!
  \*********************************************/
/***/ (function(module) {

(function(window, factory) {
	var lazySizes = factory(window, window.document, Date);
	window.lazySizes = lazySizes;
	if( true && module.exports){
		module.exports = lazySizes;
	}
}(typeof window != 'undefined' ?
      window : {}, 
/**
 * import("./types/global")
 * @typedef { import("./types/lazysizes-config").LazySizesConfigPartial } LazySizesConfigPartial
 */
function l(window, document, Date) { // Pass in the window Date function also for SSR because the Date class can be lost
	'use strict';
	/*jshint eqnull:true */

	var lazysizes,
		/**
		 * @type { LazySizesConfigPartial }
		 */
		lazySizesCfg;

	(function(){
		var prop;

		var lazySizesDefaults = {
			lazyClass: 'lazyload',
			loadedClass: 'lazyloaded',
			loadingClass: 'lazyloading',
			preloadClass: 'lazypreload',
			errorClass: 'lazyerror',
			//strictClass: 'lazystrict',
			autosizesClass: 'lazyautosizes',
			fastLoadedClass: 'ls-is-cached',
			iframeLoadMode: 0,
			srcAttr: 'data-src',
			srcsetAttr: 'data-srcset',
			sizesAttr: 'data-sizes',
			//preloadAfterLoad: false,
			minSize: 40,
			customMedia: {},
			init: true,
			expFactor: 1.5,
			hFac: 0.8,
			loadMode: 2,
			loadHidden: true,
			ricTimeout: 0,
			throttleDelay: 125,
		};

		lazySizesCfg = window.lazySizesConfig || window.lazysizesConfig || {};

		for(prop in lazySizesDefaults){
			if(!(prop in lazySizesCfg)){
				lazySizesCfg[prop] = lazySizesDefaults[prop];
			}
		}
	})();

	if (!document || !document.getElementsByClassName) {
		return {
			init: function () {},
			/**
			 * @type { LazySizesConfigPartial }
			 */
			cfg: lazySizesCfg,
			/**
			 * @type { true }
			 */
			noSupport: true,
		};
	}

	var docElem = document.documentElement;

	var supportPicture = window.HTMLPictureElement;

	var _addEventListener = 'addEventListener';

	var _getAttribute = 'getAttribute';

	/**
	 * Update to bind to window because 'this' becomes null during SSR
	 * builds.
	 */
	var addEventListener = window[_addEventListener].bind(window);

	var setTimeout = window.setTimeout;

	var requestAnimationFrame = window.requestAnimationFrame || setTimeout;

	var requestIdleCallback = window.requestIdleCallback;

	var regPicture = /^picture$/i;

	var loadEvents = ['load', 'error', 'lazyincluded', '_lazyloaded'];

	var regClassCache = {};

	var forEach = Array.prototype.forEach;

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var hasClass = function(ele, cls) {
		if(!regClassCache[cls]){
			regClassCache[cls] = new RegExp('(\\s|^)'+cls+'(\\s|$)');
		}
		return regClassCache[cls].test(ele[_getAttribute]('class') || '') && regClassCache[cls];
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var addClass = function(ele, cls) {
		if (!hasClass(ele, cls)){
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').trim() + ' ' + cls);
		}
	};

	/**
	 * @param ele {Element}
	 * @param cls {string}
	 */
	var removeClass = function(ele, cls) {
		var reg;
		if ((reg = hasClass(ele,cls))) {
			ele.setAttribute('class', (ele[_getAttribute]('class') || '').replace(reg, ' '));
		}
	};

	var addRemoveLoadEvents = function(dom, fn, add){
		var action = add ? _addEventListener : 'removeEventListener';
		if(add){
			addRemoveLoadEvents(dom, fn);
		}
		loadEvents.forEach(function(evt){
			dom[action](evt, fn);
		});
	};

	/**
	 * @param elem { Element }
	 * @param name { string }
	 * @param detail { any }
	 * @param noBubbles { boolean }
	 * @param noCancelable { boolean }
	 * @returns { CustomEvent }
	 */
	var triggerEvent = function(elem, name, detail, noBubbles, noCancelable){
		var event = document.createEvent('Event');

		if(!detail){
			detail = {};
		}

		detail.instance = lazysizes;

		event.initEvent(name, !noBubbles, !noCancelable);

		event.detail = detail;

		elem.dispatchEvent(event);
		return event;
	};

	var updatePolyfill = function (el, full){
		var polyfill;
		if( !supportPicture && ( polyfill = (window.picturefill || lazySizesCfg.pf) ) ){
			if(full && full.src && !el[_getAttribute]('srcset')){
				el.setAttribute('srcset', full.src);
			}
			polyfill({reevaluate: true, elements: [el]});
		} else if(full && full.src){
			el.src = full.src;
		}
	};

	var getCSS = function (elem, style){
		return (getComputedStyle(elem, null) || {})[style];
	};

	/**
	 *
	 * @param elem { Element }
	 * @param parent { Element }
	 * @param [width] {number}
	 * @returns {number}
	 */
	var getWidth = function(elem, parent, width){
		width = width || elem.offsetWidth;

		while(width < lazySizesCfg.minSize && parent && !elem._lazysizesWidth){
			width =  parent.offsetWidth;
			parent = parent.parentNode;
		}

		return width;
	};

	var rAF = (function(){
		var running, waiting;
		var firstFns = [];
		var secondFns = [];
		var fns = firstFns;

		var run = function(){
			var runFns = fns;

			fns = firstFns.length ? secondFns : firstFns;

			running = true;
			waiting = false;

			while(runFns.length){
				runFns.shift()();
			}

			running = false;
		};

		var rafBatch = function(fn, queue){
			if(running && !queue){
				fn.apply(this, arguments);
			} else {
				fns.push(fn);

				if(!waiting){
					waiting = true;
					(document.hidden ? setTimeout : requestAnimationFrame)(run);
				}
			}
		};

		rafBatch._lsFlush = run;

		return rafBatch;
	})();

	var rAFIt = function(fn, simple){
		return simple ?
			function() {
				rAF(fn);
			} :
			function(){
				var that = this;
				var args = arguments;
				rAF(function(){
					fn.apply(that, args);
				});
			}
		;
	};

	var throttle = function(fn){
		var running;
		var lastTime = 0;
		var gDelay = lazySizesCfg.throttleDelay;
		var rICTimeout = lazySizesCfg.ricTimeout;
		var run = function(){
			running = false;
			lastTime = Date.now();
			fn();
		};
		var idleCallback = requestIdleCallback && rICTimeout > 49 ?
			function(){
				requestIdleCallback(run, {timeout: rICTimeout});

				if(rICTimeout !== lazySizesCfg.ricTimeout){
					rICTimeout = lazySizesCfg.ricTimeout;
				}
			} :
			rAFIt(function(){
				setTimeout(run);
			}, true)
		;

		return function(isPriority){
			var delay;

			if((isPriority = isPriority === true)){
				rICTimeout = 33;
			}

			if(running){
				return;
			}

			running =  true;

			delay = gDelay - (Date.now() - lastTime);

			if(delay < 0){
				delay = 0;
			}

			if(isPriority || delay < 9){
				idleCallback();
			} else {
				setTimeout(idleCallback, delay);
			}
		};
	};

	//based on http://modernjavascript.blogspot.de/2013/08/building-better-debounce.html
	var debounce = function(func) {
		var timeout, timestamp;
		var wait = 99;
		var run = function(){
			timeout = null;
			func();
		};
		var later = function() {
			var last = Date.now() - timestamp;

			if (last < wait) {
				setTimeout(later, wait - last);
			} else {
				(requestIdleCallback || run)(run);
			}
		};

		return function() {
			timestamp = Date.now();

			if (!timeout) {
				timeout = setTimeout(later, wait);
			}
		};
	};

	var loader = (function(){
		var preloadElems, isCompleted, resetPreloadingTimer, loadMode, started;

		var eLvW, elvH, eLtop, eLleft, eLright, eLbottom, isBodyHidden;

		var regImg = /^img$/i;
		var regIframe = /^iframe$/i;

		var supportScroll = ('onscroll' in window) && !(/(gle|ing)bot/.test(navigator.userAgent));

		var shrinkExpand = 0;
		var currentExpand = 0;

		var isLoading = 0;
		var lowRuns = -1;

		var resetPreloading = function(e){
			isLoading--;
			if(!e || isLoading < 0 || !e.target){
				isLoading = 0;
			}
		};

		var isVisible = function (elem) {
			if (isBodyHidden == null) {
				isBodyHidden = getCSS(document.body, 'visibility') == 'hidden';
			}

			return isBodyHidden || !(getCSS(elem.parentNode, 'visibility') == 'hidden' && getCSS(elem, 'visibility') == 'hidden');
		};

		var isNestedVisible = function(elem, elemExpand){
			var outerRect;
			var parent = elem;
			var visible = isVisible(elem);

			eLtop -= elemExpand;
			eLbottom += elemExpand;
			eLleft -= elemExpand;
			eLright += elemExpand;

			while(visible && (parent = parent.offsetParent) && parent != document.body && parent != docElem){
				visible = ((getCSS(parent, 'opacity') || 1) > 0);

				if(visible && getCSS(parent, 'overflow') != 'visible'){
					outerRect = parent.getBoundingClientRect();
					visible = eLright > outerRect.left &&
						eLleft < outerRect.right &&
						eLbottom > outerRect.top - 1 &&
						eLtop < outerRect.bottom + 1
					;
				}
			}

			return visible;
		};

		var checkElements = function() {
			var eLlen, i, rect, autoLoadElem, loadedSomething, elemExpand, elemNegativeExpand, elemExpandVal,
				beforeExpandVal, defaultExpand, preloadExpand, hFac;
			var lazyloadElems = lazysizes.elements;

			if((loadMode = lazySizesCfg.loadMode) && isLoading < 8 && (eLlen = lazyloadElems.length)){

				i = 0;

				lowRuns++;

				for(; i < eLlen; i++){

					if(!lazyloadElems[i] || lazyloadElems[i]._lazyRace){continue;}

					if(!supportScroll || (lazysizes.prematureUnveil && lazysizes.prematureUnveil(lazyloadElems[i]))){unveilElement(lazyloadElems[i]);continue;}

					if(!(elemExpandVal = lazyloadElems[i][_getAttribute]('data-expand')) || !(elemExpand = elemExpandVal * 1)){
						elemExpand = currentExpand;
					}

					if (!defaultExpand) {
						defaultExpand = (!lazySizesCfg.expand || lazySizesCfg.expand < 1) ?
							docElem.clientHeight > 500 && docElem.clientWidth > 500 ? 500 : 370 :
							lazySizesCfg.expand;

						lazysizes._defEx = defaultExpand;

						preloadExpand = defaultExpand * lazySizesCfg.expFactor;
						hFac = lazySizesCfg.hFac;
						isBodyHidden = null;

						if(currentExpand < preloadExpand && isLoading < 1 && lowRuns > 2 && loadMode > 2 && !document.hidden){
							currentExpand = preloadExpand;
							lowRuns = 0;
						} else if(loadMode > 1 && lowRuns > 1 && isLoading < 6){
							currentExpand = defaultExpand;
						} else {
							currentExpand = shrinkExpand;
						}
					}

					if(beforeExpandVal !== elemExpand){
						eLvW = innerWidth + (elemExpand * hFac);
						elvH = innerHeight + elemExpand;
						elemNegativeExpand = elemExpand * -1;
						beforeExpandVal = elemExpand;
					}

					rect = lazyloadElems[i].getBoundingClientRect();

					if ((eLbottom = rect.bottom) >= elemNegativeExpand &&
						(eLtop = rect.top) <= elvH &&
						(eLright = rect.right) >= elemNegativeExpand * hFac &&
						(eLleft = rect.left) <= eLvW &&
						(eLbottom || eLright || eLleft || eLtop) &&
						(lazySizesCfg.loadHidden || isVisible(lazyloadElems[i])) &&
						((isCompleted && isLoading < 3 && !elemExpandVal && (loadMode < 3 || lowRuns < 4)) || isNestedVisible(lazyloadElems[i], elemExpand))){
						unveilElement(lazyloadElems[i]);
						loadedSomething = true;
						if(isLoading > 9){break;}
					} else if(!loadedSomething && isCompleted && !autoLoadElem &&
						isLoading < 4 && lowRuns < 4 && loadMode > 2 &&
						(preloadElems[0] || lazySizesCfg.preloadAfterLoad) &&
						(preloadElems[0] || (!elemExpandVal && ((eLbottom || eLright || eLleft || eLtop) || lazyloadElems[i][_getAttribute](lazySizesCfg.sizesAttr) != 'auto')))){
						autoLoadElem = preloadElems[0] || lazyloadElems[i];
					}
				}

				if(autoLoadElem && !loadedSomething){
					unveilElement(autoLoadElem);
				}
			}
		};

		var throttledCheckElements = throttle(checkElements);

		var switchLoadingClass = function(e){
			var elem = e.target;

			if (elem._lazyCache) {
				delete elem._lazyCache;
				return;
			}

			resetPreloading(e);
			addClass(elem, lazySizesCfg.loadedClass);
			removeClass(elem, lazySizesCfg.loadingClass);
			addRemoveLoadEvents(elem, rafSwitchLoadingClass);
			triggerEvent(elem, 'lazyloaded');
		};
		var rafedSwitchLoadingClass = rAFIt(switchLoadingClass);
		var rafSwitchLoadingClass = function(e){
			rafedSwitchLoadingClass({target: e.target});
		};

		var changeIframeSrc = function(elem, src){
			var loadMode = elem.getAttribute('data-load-mode') || lazySizesCfg.iframeLoadMode;

			// loadMode can be also a string!
			if (loadMode == 0) {
				elem.contentWindow.location.replace(src);
			} else if (loadMode == 1) {
				elem.src = src;
			}
		};

		var handleSources = function(source){
			var customMedia;

			var sourceSrcset = source[_getAttribute](lazySizesCfg.srcsetAttr);

			if( (customMedia = lazySizesCfg.customMedia[source[_getAttribute]('data-media') || source[_getAttribute]('media')]) ){
				source.setAttribute('media', customMedia);
			}

			if(sourceSrcset){
				source.setAttribute('srcset', sourceSrcset);
			}
		};

		var lazyUnveil = rAFIt(function (elem, detail, isAuto, sizes, isImg){
			var src, srcset, parent, isPicture, event, firesLoad;

			if(!(event = triggerEvent(elem, 'lazybeforeunveil', detail)).defaultPrevented){

				if(sizes){
					if(isAuto){
						addClass(elem, lazySizesCfg.autosizesClass);
					} else {
						elem.setAttribute('sizes', sizes);
					}
				}

				srcset = elem[_getAttribute](lazySizesCfg.srcsetAttr);
				src = elem[_getAttribute](lazySizesCfg.srcAttr);

				if(isImg) {
					parent = elem.parentNode;
					isPicture = parent && regPicture.test(parent.nodeName || '');
				}

				firesLoad = detail.firesLoad || (('src' in elem) && (srcset || src || isPicture));

				event = {target: elem};

				addClass(elem, lazySizesCfg.loadingClass);

				if(firesLoad){
					clearTimeout(resetPreloadingTimer);
					resetPreloadingTimer = setTimeout(resetPreloading, 2500);
					addRemoveLoadEvents(elem, rafSwitchLoadingClass, true);
				}

				if(isPicture){
					forEach.call(parent.getElementsByTagName('source'), handleSources);
				}

				if(srcset){
					elem.setAttribute('srcset', srcset);
				} else if(src && !isPicture){
					if(regIframe.test(elem.nodeName)){
						changeIframeSrc(elem, src);
					} else {
						elem.src = src;
					}
				}

				if(isImg && (srcset || isPicture)){
					updatePolyfill(elem, {src: src});
				}
			}

			if(elem._lazyRace){
				delete elem._lazyRace;
			}
			removeClass(elem, lazySizesCfg.lazyClass);

			rAF(function(){
				// Part of this can be removed as soon as this fix is older: https://bugs.chromium.org/p/chromium/issues/detail?id=7731 (2015)
				var isLoaded = elem.complete && elem.naturalWidth > 1;

				if( !firesLoad || isLoaded){
					if (isLoaded) {
						addClass(elem, lazySizesCfg.fastLoadedClass);
					}
					switchLoadingClass(event);
					elem._lazyCache = true;
					setTimeout(function(){
						if ('_lazyCache' in elem) {
							delete elem._lazyCache;
						}
					}, 9);
				}
				if (elem.loading == 'lazy') {
					isLoading--;
				}
			}, true);
		});

		/**
		 *
		 * @param elem { Element }
		 */
		var unveilElement = function (elem){
			if (elem._lazyRace) {return;}
			var detail;

			var isImg = regImg.test(elem.nodeName);

			//allow using sizes="auto", but don't use. it's invalid. Use data-sizes="auto" or a valid value for sizes instead (i.e.: sizes="80vw")
			var sizes = isImg && (elem[_getAttribute](lazySizesCfg.sizesAttr) || elem[_getAttribute]('sizes'));
			var isAuto = sizes == 'auto';

			if( (isAuto || !isCompleted) && isImg && (elem[_getAttribute]('src') || elem.srcset) && !elem.complete && !hasClass(elem, lazySizesCfg.errorClass) && hasClass(elem, lazySizesCfg.lazyClass)){return;}

			detail = triggerEvent(elem, 'lazyunveilread').detail;

			if(isAuto){
				 autoSizer.updateElem(elem, true, elem.offsetWidth);
			}

			elem._lazyRace = true;
			isLoading++;

			lazyUnveil(elem, detail, isAuto, sizes, isImg);
		};

		var afterScroll = debounce(function(){
			lazySizesCfg.loadMode = 3;
			throttledCheckElements();
		});

		var altLoadmodeScrollListner = function(){
			if(lazySizesCfg.loadMode == 3){
				lazySizesCfg.loadMode = 2;
			}
			afterScroll();
		};

		var onload = function(){
			if(isCompleted){return;}
			if(Date.now() - started < 999){
				setTimeout(onload, 999);
				return;
			}


			isCompleted = true;

			lazySizesCfg.loadMode = 3;

			throttledCheckElements();

			addEventListener('scroll', altLoadmodeScrollListner, true);
		};

		return {
			_: function(){
				started = Date.now();

				lazysizes.elements = document.getElementsByClassName(lazySizesCfg.lazyClass);
				preloadElems = document.getElementsByClassName(lazySizesCfg.lazyClass + ' ' + lazySizesCfg.preloadClass);

				addEventListener('scroll', throttledCheckElements, true);

				addEventListener('resize', throttledCheckElements, true);

				addEventListener('pageshow', function (e) {
					if (e.persisted) {
						var loadingElements = document.querySelectorAll('.' + lazySizesCfg.loadingClass);

						if (loadingElements.length && loadingElements.forEach) {
							requestAnimationFrame(function () {
								loadingElements.forEach( function (img) {
									if (img.complete) {
										unveilElement(img);
									}
								});
							});
						}
					}
				});

				if(window.MutationObserver){
					new MutationObserver( throttledCheckElements ).observe( docElem, {childList: true, subtree: true, attributes: true} );
				} else {
					docElem[_addEventListener]('DOMNodeInserted', throttledCheckElements, true);
					docElem[_addEventListener]('DOMAttrModified', throttledCheckElements, true);
					setInterval(throttledCheckElements, 999);
				}

				addEventListener('hashchange', throttledCheckElements, true);

				//, 'fullscreenchange'
				['focus', 'mouseover', 'click', 'load', 'transitionend', 'animationend'].forEach(function(name){
					document[_addEventListener](name, throttledCheckElements, true);
				});

				if((/d$|^c/.test(document.readyState))){
					onload();
				} else {
					addEventListener('load', onload);
					document[_addEventListener]('DOMContentLoaded', throttledCheckElements);
					setTimeout(onload, 20000);
				}

				if(lazysizes.elements.length){
					checkElements();
					rAF._lsFlush();
				} else {
					throttledCheckElements();
				}
			},
			checkElems: throttledCheckElements,
			unveil: unveilElement,
			_aLSL: altLoadmodeScrollListner,
		};
	})();


	var autoSizer = (function(){
		var autosizesElems;

		var sizeElement = rAFIt(function(elem, parent, event, width){
			var sources, i, len;
			elem._lazysizesWidth = width;
			width += 'px';

			elem.setAttribute('sizes', width);

			if(regPicture.test(parent.nodeName || '')){
				sources = parent.getElementsByTagName('source');
				for(i = 0, len = sources.length; i < len; i++){
					sources[i].setAttribute('sizes', width);
				}
			}

			if(!event.detail.dataAttr){
				updatePolyfill(elem, event.detail);
			}
		});
		/**
		 *
		 * @param elem {Element}
		 * @param dataAttr
		 * @param [width] { number }
		 */
		var getSizeElement = function (elem, dataAttr, width){
			var event;
			var parent = elem.parentNode;

			if(parent){
				width = getWidth(elem, parent, width);
				event = triggerEvent(elem, 'lazybeforesizes', {width: width, dataAttr: !!dataAttr});

				if(!event.defaultPrevented){
					width = event.detail.width;

					if(width && width !== elem._lazysizesWidth){
						sizeElement(elem, parent, event, width);
					}
				}
			}
		};

		var updateElementsSizes = function(){
			var i;
			var len = autosizesElems.length;
			if(len){
				i = 0;

				for(; i < len; i++){
					getSizeElement(autosizesElems[i]);
				}
			}
		};

		var debouncedUpdateElementsSizes = debounce(updateElementsSizes);

		return {
			_: function(){
				autosizesElems = document.getElementsByClassName(lazySizesCfg.autosizesClass);
				addEventListener('resize', debouncedUpdateElementsSizes);
			},
			checkElems: debouncedUpdateElementsSizes,
			updateElem: getSizeElement
		};
	})();

	var init = function(){
		if(!init.i && document.getElementsByClassName){
			init.i = true;
			autoSizer._();
			loader._();
		}
	};

	setTimeout(function(){
		if(lazySizesCfg.init){
			init();
		}
	});

	lazysizes = {
		/**
		 * @type { LazySizesConfigPartial }
		 */
		cfg: lazySizesCfg,
		autoSizer: autoSizer,
		loader: loader,
		init: init,
		uP: updatePolyfill,
		aC: addClass,
		rC: removeClass,
		hC: hasClass,
		fire: triggerEvent,
		gW: getWidth,
		rAF: rAF,
	};

	return lazysizes;
}
));


/***/ }),

/***/ "./node_modules/lazysizes/plugins/noscript/ls.noscript.js":
/*!****************************************************************!*\
  !*** ./node_modules/lazysizes/plugins/noscript/ls.noscript.js ***!
  \****************************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(window, factory) {
	var globalInstall = function(){
		factory(window.lazySizes);
		window.removeEventListener('lazyunveilread', globalInstall, true);
	};

	factory = factory.bind(null, window, window.document);

	if( true && module.exports){
		factory(__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js"));
	} else if (true) {
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}(window, function(window, document, lazySizes) {
	/*jshint eqnull:true */
	'use strict';

	var dummyParent = {nodeName: ''};
	var supportPicture = !!window.HTMLPictureElement && ('sizes' in document.createElement('img'));
	var config = window.lazySizes && lazySizes.cfg;

	var handleLoadingElements = function(e){
		var i, isResponsive, hasTriggered, onload, loading;

		var loadElements = e.target.querySelectorAll('img, iframe');

		for(i = 0; i < loadElements.length; i++){
			isResponsive = loadElements[i].getAttribute('srcset') || (loadElements[i].parentNode || dummyParent).nodeName.toLowerCase() == 'picture';

			if(!supportPicture && isResponsive){
				lazySizes.uP(loadElements[i]);
			}

			if(!loadElements[i].complete && (isResponsive || loadElements[i].src)){
				e.detail.firesLoad = true;

				if(!onload || !loading){
					loading = 0;
					/*jshint loopfunc:true */
					onload = function(evt){
						loading--;
						if((!evt || loading < 1) && !hasTriggered){
							hasTriggered = true;
							e.detail.firesLoad = false;
							lazySizes.fire(e.target, '_lazyloaded', {}, false, true);
						}

						if(evt && evt.target){
							evt.target.removeEventListener('load', onload);
							evt.target.removeEventListener('error', onload);
						}
					};

					setTimeout(onload, 3500);
				}

				loading++;

				loadElements[i].addEventListener('load', onload);
				loadElements[i].addEventListener('error', onload);
			}
		}
	};

	config.getNoscriptContent =  function(noScript){
		return noScript.textContent || noScript.innerText;
	};

	window.addEventListener('lazybeforeunveil', function(e){
		if(e.detail.instance != lazySizes || e.defaultPrevented || e.target.getAttribute('data-noscript') == null){return;}

		var noScript = e.target.querySelector('noscript, script[type*="html"]') || {};
		var content = config.getNoscriptContent(noScript);

		if(content){
			e.target.innerHTML = content;
			handleLoadingElements(e);
		}
	});
}));


/***/ }),

/***/ "./node_modules/proxy-polyfill/proxy.min.js":
/*!**************************************************!*\
  !*** ./node_modules/proxy-polyfill/proxy.min.js ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __unused_webpack_exports, __webpack_require__) {

(function(){function n(){function v(){return null}function l(a){return a?"object"===typeof a||"function"===typeof a:!1}function p(a){if(null!==a&&!l(a))throw new TypeError("Object prototype may only be an Object or null: "+a);}var q=null,e=Object,w=!!e.create||!({__proto__:null}instanceof e),A=e.create||(w?function(a){p(a);return{__proto__:a}}:function(a){function c(){}p(a);if(null===a)throw new SyntaxError("Native Object.create is required to create objects with null prototype");c.prototype=a;return new c}),
B=e.getPrototypeOf||([].__proto__===Array.prototype?function(a){a=a.__proto__;return l(a)?a:null}:v);var m=function(a,c){function k(){}if(void 0===(this&&this instanceof m?this.constructor:void 0))throw new TypeError("Constructor Proxy requires 'new'");if(!l(a)||!l(c))throw new TypeError("Cannot create proxy with a non-object as target or handler");q=function(){a=null;k=function(b){throw new TypeError("Cannot perform '"+b+"' on a proxy that has been revoked");}};setTimeout(function(){q=null},0);var g=
c;c={get:null,set:null,apply:null,construct:null};for(var h in g){if(!(h in c))throw new TypeError("Proxy polyfill does not support trap '"+h+"'");c[h]=g[h]}"function"===typeof g&&(c.apply=g.apply.bind(g));g=B(a);var r=!1,t=!1;if("function"===typeof a){var f=function(){var b=this&&this.constructor===f,d=Array.prototype.slice.call(arguments);k(b?"construct":"apply");return b&&c.construct?c.construct.call(this,a,d):!b&&c.apply?c.apply(a,this,d):b?(d.unshift(a),new (a.bind.apply(a,d))):a.apply(this,
d)};r=!0}else a instanceof Array?(f=[],t=!0):f=w||null!==g?A(g):{};var x=c.get?function(b){k("get");return c.get(this,b,f)}:function(b){k("get");return this[b]},C=c.set?function(b,d){k("set");c.set(this,b,d,f)}:function(b,d){k("set");this[b]=d},y={};e.getOwnPropertyNames(a).forEach(function(b){if(!((r||t)&&b in f)){var d=e.getOwnPropertyDescriptor(a,b);e.defineProperty(f,b,{enumerable:!!d.enumerable,get:x.bind(a,b),set:C.bind(a,b)});y[b]=!0}});h=!0;if(r||t){var D=e.setPrototypeOf||([].__proto__===
Array.prototype?function(b,d){p(d);b.__proto__=d;return b}:v);g&&D(f,g)||(h=!1)}if(c.get||!h)for(var u in a)y[u]||e.defineProperty(f,u,{get:x.bind(a,u)});e.seal(a);e.seal(f);return f};m.revocable=function(a,c){return{proxy:new m(a,c),revoke:q}};return m};var z="undefined"!==typeof process&&"[object process]"==={}.toString.call(process)||"undefined"!==typeof navigator&&"ReactNative"===navigator.product?__webpack_require__.g:self;z.Proxy||(z.Proxy=n(),z.Proxy.revocable=z.Proxy.revocable);})();


/***/ }),

/***/ "./node_modules/regenerator-runtime/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/regenerator-runtime/runtime.js ***!
  \*****************************************************/
/***/ (function(module) {

/**
 * Copyright (c) 2014-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var runtime = (function (exports) {
  "use strict";

  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined; // More compressible than void 0.
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";

  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    // IE 8 has a broken Object.defineProperty that only works on DOM objects.
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }

  function wrap(innerFn, outerFn, self, tryLocsList) {
    // If outerFn provided and outerFn.prototype is a Generator, then outerFn.prototype instanceof Generator.
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);

    // The ._invoke method unifies the implementations of the .next,
    // .throw, and .return methods.
    generator._invoke = makeInvokeMethod(innerFn, self, context);

    return generator;
  }
  exports.wrap = wrap;

  // Try/catch helper to minimize deoptimizations. Returns a completion
  // record like context.tryEntries[i].completion. This interface could
  // have been (and was previously) designed to take a closure to be
  // invoked without arguments, but in all the cases we care about we
  // already have an existing method we want to call, so there's no need
  // to create a new function object. We can even get away with assuming
  // the method takes exactly one argument, since that happens to be true
  // in every case, so we don't have to touch the arguments object. The
  // only additional allocation required is the completion record, which
  // has a stable shape and so hopefully should be cheap to allocate.
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }

  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";

  // Returning this object from the innerFn has the same effect as
  // breaking out of the dispatch switch statement.
  var ContinueSentinel = {};

  // Dummy constructor functions that we use as the .constructor and
  // .constructor.prototype properties for functions that return Generator
  // objects. For full spec compliance, you may wish to configure your
  // minifier not to mangle the names of these two functions.
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}

  // This is a polyfill for %IteratorPrototype% for environments that
  // don't natively support it.
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });

  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    // This environment has a native %IteratorPrototype%; use it instead
    // of the polyfill.
    IteratorPrototype = NativeIteratorPrototype;
  }

  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );

  // Helper for defining the .next, .throw, and .return methods of the
  // Iterator interface in terms of a single ._invoke method.
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }

  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        // For the native GeneratorFunction constructor, the best we can
        // do is to check its .name property.
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };

  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };

  // Within the body of any async function, `await x` is transformed to
  // `yield regeneratorRuntime.awrap(x)`, so that the runtime can test
  // `hasOwn.call(value, "__await")` to determine if the yielded value is
  // meant to be awaited.
  exports.awrap = function(arg) {
    return { __await: arg };
  };

  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }

        return PromiseImpl.resolve(value).then(function(unwrapped) {
          // When a yielded Promise is resolved, its final value becomes
          // the .value of the Promise<{value,done}> result for the
          // current iteration.
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          // If a rejected Promise was yielded, throw the rejection back
          // into the async generator function so it can be handled there.
          return invoke("throw", error, resolve, reject);
        });
      }
    }

    var previousPromise;

    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }

      return previousPromise =
        // If enqueue has been called before, then we want to wait until
        // all previous Promises have been resolved before calling invoke,
        // so that results are always delivered in the correct order. If
        // enqueue has not been called before, then it is important to
        // call invoke immediately, without waiting on a callback to fire,
        // so that the async generator function has the opportunity to do
        // any necessary setup in a predictable way. This predictability
        // is why the Promise constructor synchronously invokes its
        // executor callback, and why async functions synchronously
        // execute code before the first await. Since we implement simple
        // async functions in terms of async generators, it is especially
        // important to get this right, even though it requires care.
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          // Avoid propagating failures to Promises returned by later
          // invocations of the iterator.
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }

    // Define the unified helper method that is used to implement .next,
    // .throw, and .return (see defineIteratorMethods).
    this._invoke = enqueue;
  }

  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;

  // Note that simple async functions are implemented on top of
  // AsyncIterator objects; they just return a Promise for the value of
  // the final result produced by the iterator.
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;

    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );

    return exports.isGeneratorFunction(outerFn)
      ? iter // If outerFn is a generator, return the full iterator.
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };

  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;

    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }

      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }

        // Be forgiving, per 25.3.3.3.3 of the spec:
        // https://people.mozilla.org/~jorendorff/es6-draft.html#sec-generatorresume
        return doneResult();
      }

      context.method = method;
      context.arg = arg;

      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }

        if (context.method === "next") {
          // Setting context._sent for legacy support of Babel's
          // function.sent implementation.
          context.sent = context._sent = context.arg;

        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }

          context.dispatchException(context.arg);

        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }

        state = GenStateExecuting;

        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          // If an exception is thrown from innerFn, we leave state ===
          // GenStateExecuting and loop back for another invocation.
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;

          if (record.arg === ContinueSentinel) {
            continue;
          }

          return {
            value: record.arg,
            done: context.done
          };

        } else if (record.type === "throw") {
          state = GenStateCompleted;
          // Dispatch the exception by looping back around to the
          // context.dispatchException(context.arg) call above.
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }

  // Call delegate.iterator[context.method](context.arg) and handle the
  // result, either by returning a { value, done } result from the
  // delegate iterator, or by modifying context.method and context.arg,
  // setting context.delegate to null, and returning the ContinueSentinel.
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined) {
      // A .throw or .return when the delegate iterator has no .throw
      // method always terminates the yield* loop.
      context.delegate = null;

      if (context.method === "throw") {
        // Note: ["return"] must be used for ES3 parsing compatibility.
        if (delegate.iterator["return"]) {
          // If the delegate iterator has a return method, give it a
          // chance to clean up.
          context.method = "return";
          context.arg = undefined;
          maybeInvokeDelegate(delegate, context);

          if (context.method === "throw") {
            // If maybeInvokeDelegate(context) changed context.method from
            // "return" to "throw", let that override the TypeError below.
            return ContinueSentinel;
          }
        }

        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }

      return ContinueSentinel;
    }

    var record = tryCatch(method, delegate.iterator, context.arg);

    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }

    var info = record.arg;

    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }

    if (info.done) {
      // Assign the result of the finished delegate to the temporary
      // variable specified by delegate.resultName (see delegateYield).
      context[delegate.resultName] = info.value;

      // Resume execution at the desired location (see delegateYield).
      context.next = delegate.nextLoc;

      // If context.method was "throw" but the delegate handled the
      // exception, let the outer generator proceed normally. If
      // context.method was "next", forget context.arg since it has been
      // "consumed" by the delegate iterator. If context.method was
      // "return", allow the original .return call to continue in the
      // outer generator.
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined;
      }

    } else {
      // Re-yield the result returned by the delegate method.
      return info;
    }

    // The delegate iterator is finished, so forget it and continue with
    // the outer generator.
    context.delegate = null;
    return ContinueSentinel;
  }

  // Define Generator.prototype.{next,throw,return} in terms of the
  // unified ._invoke helper method.
  defineIteratorMethods(Gp);

  define(Gp, toStringTagSymbol, "Generator");

  // A Generator should always return itself as the iterator object when the
  // @@iterator function is called on it. Some browsers' implementations of the
  // iterator prototype chain incorrectly implement this, causing the Generator
  // object to not be returned from this call. This ensures that doesn't happen.
  // See https://github.com/facebook/regenerator/issues/274 for more details.
  define(Gp, iteratorSymbol, function() {
    return this;
  });

  define(Gp, "toString", function() {
    return "[object Generator]";
  });

  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };

    if (1 in locs) {
      entry.catchLoc = locs[1];
    }

    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }

    this.tryEntries.push(entry);
  }

  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }

  function Context(tryLocsList) {
    // The root entry object (effectively a try statement without a catch
    // or a finally block) gives us a place to store values thrown from
    // locations where there is no enclosing try statement.
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }

  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();

    // Rather than returning an object with a next method, we keep
    // things simple and return the next function itself.
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }

      // To avoid creating an additional object, we just hang the .value
      // and .done properties off the next function object itself. This
      // also ensures that the minifier will not anonymize the function.
      next.done = true;
      return next;
    };
  };

  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }

      if (typeof iterable.next === "function") {
        return iterable;
      }

      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }

          next.value = undefined;
          next.done = true;

          return next;
        };

        return next.next = next;
      }
    }

    // Return an iterator with no values.
    return { next: doneResult };
  }
  exports.values = values;

  function doneResult() {
    return { value: undefined, done: true };
  }

  Context.prototype = {
    constructor: Context,

    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      // Resetting context._sent for legacy support of Babel's
      // function.sent implementation.
      this.sent = this._sent = undefined;
      this.done = false;
      this.delegate = null;

      this.method = "next";
      this.arg = undefined;

      this.tryEntries.forEach(resetTryEntry);

      if (!skipTempReset) {
        for (var name in this) {
          // Not sure about the optimal order of these conditions:
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined;
          }
        }
      }
    },

    stop: function() {
      this.done = true;

      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }

      return this.rval;
    },

    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }

      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;

        if (caught) {
          // If the dispatched exception was caught by a catch block,
          // then let that catch block handle the exception normally.
          context.method = "next";
          context.arg = undefined;
        }

        return !! caught;
      }

      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;

        if (entry.tryLoc === "root") {
          // Exception thrown outside of any try block that could handle
          // it, so set the completion value of the entire function to
          // throw the exception.
          return handle("end");
        }

        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");

          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }

          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }

          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },

    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }

      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        // Ignore the finally entry if control is not jumping to a
        // location outside the try/catch block.
        finallyEntry = null;
      }

      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;

      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }

      return this.complete(record);
    },

    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }

      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }

      return ContinueSentinel;
    },

    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },

    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }

      // The context.catch method must only be called with a location
      // argument that corresponds to a known catch block.
      throw new Error("illegal catch attempt");
    },

    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };

      if (this.method === "next") {
        // Deliberately forget the last sent value so that we don't
        // accidentally pass it on to the delegate.
        this.arg = undefined;
      }

      return ContinueSentinel;
    }
  };

  // Regardless of whether this script is executing as a CommonJS module
  // or not, return the runtime object so that we can declare the variable
  // regeneratorRuntime in the outer scope, which allows this module to be
  // injected easily by `bin/regenerator --include-runtime script.js`.
  return exports;

}(
  // If this script is executing as a CommonJS module, use module.exports
  // as the regeneratorRuntime namespace. Otherwise create a new empty
  // object. Either way, the resulting object will be used to initialize
  // the regeneratorRuntime variable at the top of this file.
   true ? module.exports : 0
));

try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  // This module should not be running in strict mode, so the above
  // assignment should always work unless something is misconfigured. Just
  // in case runtime.js accidentally runs in strict mode, in modern engines
  // we can explicitly access globalThis. In older engines we can escape
  // strict mode using a global Function call. This could conceivably fail
  // if a Content Security Policy forbids using Function, but in that case
  // the proper solution is to fix the accidental strict mode problem. If
  // you've misconfigured your bundler to force strict mode and applied a
  // CSP to forbid Function, and you're not willing to fix either of those
  // problems, please detail your unique predicament in a GitHub issue.
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}


/***/ }),

/***/ "./node_modules/slick-carousel/slick/slick.js":
/*!****************************************************!*\
  !*** ./node_modules/slick-carousel/slick/slick.js ***!
  \****************************************************/
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*
     _ _      _       _
 ___| (_) ___| | __  (_)___
/ __| | |/ __| |/ /  | / __|
\__ \ | | (__|   < _ | \__ \
|___/_|_|\___|_|\_(_)/ |___/
                   |__/

 Version: 1.8.1
  Author: Ken Wheeler
 Website: http://kenwheeler.github.io
    Docs: http://kenwheeler.github.io/slick
    Repo: http://github.com/kenwheeler/slick
  Issues: http://github.com/kenwheeler/slick/issues

 */
/* global window, document, define, jQuery, setInterval, clearInterval */
;(function(factory) {
    'use strict';
    if (true) {
        !(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.js")], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
    } else {}

}(function($) {
    'use strict';
    var Slick = window.Slick || {};

    Slick = (function() {

        var instanceUid = 0;

        function Slick(element, settings) {

            var _ = this, dataSettings;

            _.defaults = {
                accessibility: true,
                adaptiveHeight: false,
                appendArrows: $(element),
                appendDots: $(element),
                arrows: true,
                asNavFor: null,
                prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
                nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
                autoplay: false,
                autoplaySpeed: 3000,
                centerMode: false,
                centerPadding: '50px',
                cssEase: 'ease',
                customPaging: function(slider, i) {
                    return $('<button type="button" />').text(i + 1);
                },
                dots: false,
                dotsClass: 'slick-dots',
                draggable: true,
                easing: 'linear',
                edgeFriction: 0.35,
                fade: false,
                focusOnSelect: false,
                focusOnChange: false,
                infinite: true,
                initialSlide: 0,
                lazyLoad: 'ondemand',
                mobileFirst: false,
                pauseOnHover: true,
                pauseOnFocus: true,
                pauseOnDotsHover: false,
                respondTo: 'window',
                responsive: null,
                rows: 1,
                rtl: false,
                slide: '',
                slidesPerRow: 1,
                slidesToShow: 1,
                slidesToScroll: 1,
                speed: 500,
                swipe: true,
                swipeToSlide: false,
                touchMove: true,
                touchThreshold: 5,
                useCSS: true,
                useTransform: true,
                variableWidth: false,
                vertical: false,
                verticalSwiping: false,
                waitForAnimate: true,
                zIndex: 1000
            };

            _.initials = {
                animating: false,
                dragging: false,
                autoPlayTimer: null,
                currentDirection: 0,
                currentLeft: null,
                currentSlide: 0,
                direction: 1,
                $dots: null,
                listWidth: null,
                listHeight: null,
                loadIndex: 0,
                $nextArrow: null,
                $prevArrow: null,
                scrolling: false,
                slideCount: null,
                slideWidth: null,
                $slideTrack: null,
                $slides: null,
                sliding: false,
                slideOffset: 0,
                swipeLeft: null,
                swiping: false,
                $list: null,
                touchObject: {},
                transformsEnabled: false,
                unslicked: false
            };

            $.extend(_, _.initials);

            _.activeBreakpoint = null;
            _.animType = null;
            _.animProp = null;
            _.breakpoints = [];
            _.breakpointSettings = [];
            _.cssTransitions = false;
            _.focussed = false;
            _.interrupted = false;
            _.hidden = 'hidden';
            _.paused = true;
            _.positionProp = null;
            _.respondTo = null;
            _.rowCount = 1;
            _.shouldClick = true;
            _.$slider = $(element);
            _.$slidesCache = null;
            _.transformType = null;
            _.transitionType = null;
            _.visibilityChange = 'visibilitychange';
            _.windowWidth = 0;
            _.windowTimer = null;

            dataSettings = $(element).data('slick') || {};

            _.options = $.extend({}, _.defaults, settings, dataSettings);

            _.currentSlide = _.options.initialSlide;

            _.originalSettings = _.options;

            if (typeof document.mozHidden !== 'undefined') {
                _.hidden = 'mozHidden';
                _.visibilityChange = 'mozvisibilitychange';
            } else if (typeof document.webkitHidden !== 'undefined') {
                _.hidden = 'webkitHidden';
                _.visibilityChange = 'webkitvisibilitychange';
            }

            _.autoPlay = $.proxy(_.autoPlay, _);
            _.autoPlayClear = $.proxy(_.autoPlayClear, _);
            _.autoPlayIterator = $.proxy(_.autoPlayIterator, _);
            _.changeSlide = $.proxy(_.changeSlide, _);
            _.clickHandler = $.proxy(_.clickHandler, _);
            _.selectHandler = $.proxy(_.selectHandler, _);
            _.setPosition = $.proxy(_.setPosition, _);
            _.swipeHandler = $.proxy(_.swipeHandler, _);
            _.dragHandler = $.proxy(_.dragHandler, _);
            _.keyHandler = $.proxy(_.keyHandler, _);

            _.instanceUid = instanceUid++;

            // A simple way to check for HTML strings
            // Strict HTML recognition (must start with <)
            // Extracted from jQuery v1.11 source
            _.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/;


            _.registerBreakpoints();
            _.init(true);

        }

        return Slick;

    }());

    Slick.prototype.activateADA = function() {
        var _ = this;

        _.$slideTrack.find('.slick-active').attr({
            'aria-hidden': 'false'
        }).find('a, input, button, select').attr({
            'tabindex': '0'
        });

    };

    Slick.prototype.addSlide = Slick.prototype.slickAdd = function(markup, index, addBefore) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            addBefore = index;
            index = null;
        } else if (index < 0 || (index >= _.slideCount)) {
            return false;
        }

        _.unload();

        if (typeof(index) === 'number') {
            if (index === 0 && _.$slides.length === 0) {
                $(markup).appendTo(_.$slideTrack);
            } else if (addBefore) {
                $(markup).insertBefore(_.$slides.eq(index));
            } else {
                $(markup).insertAfter(_.$slides.eq(index));
            }
        } else {
            if (addBefore === true) {
                $(markup).prependTo(_.$slideTrack);
            } else {
                $(markup).appendTo(_.$slideTrack);
            }
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slides.each(function(index, element) {
            $(element).attr('data-slick-index', index);
        });

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.animateHeight = function() {
        var _ = this;
        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.animate({
                height: targetHeight
            }, _.options.speed);
        }
    };

    Slick.prototype.animateSlide = function(targetLeft, callback) {

        var animProps = {},
            _ = this;

        _.animateHeight();

        if (_.options.rtl === true && _.options.vertical === false) {
            targetLeft = -targetLeft;
        }
        if (_.transformsEnabled === false) {
            if (_.options.vertical === false) {
                _.$slideTrack.animate({
                    left: targetLeft
                }, _.options.speed, _.options.easing, callback);
            } else {
                _.$slideTrack.animate({
                    top: targetLeft
                }, _.options.speed, _.options.easing, callback);
            }

        } else {

            if (_.cssTransitions === false) {
                if (_.options.rtl === true) {
                    _.currentLeft = -(_.currentLeft);
                }
                $({
                    animStart: _.currentLeft
                }).animate({
                    animStart: targetLeft
                }, {
                    duration: _.options.speed,
                    easing: _.options.easing,
                    step: function(now) {
                        now = Math.ceil(now);
                        if (_.options.vertical === false) {
                            animProps[_.animType] = 'translate(' +
                                now + 'px, 0px)';
                            _.$slideTrack.css(animProps);
                        } else {
                            animProps[_.animType] = 'translate(0px,' +
                                now + 'px)';
                            _.$slideTrack.css(animProps);
                        }
                    },
                    complete: function() {
                        if (callback) {
                            callback.call();
                        }
                    }
                });

            } else {

                _.applyTransition();
                targetLeft = Math.ceil(targetLeft);

                if (_.options.vertical === false) {
                    animProps[_.animType] = 'translate3d(' + targetLeft + 'px, 0px, 0px)';
                } else {
                    animProps[_.animType] = 'translate3d(0px,' + targetLeft + 'px, 0px)';
                }
                _.$slideTrack.css(animProps);

                if (callback) {
                    setTimeout(function() {

                        _.disableTransition();

                        callback.call();
                    }, _.options.speed);
                }

            }

        }

    };

    Slick.prototype.getNavTarget = function() {

        var _ = this,
            asNavFor = _.options.asNavFor;

        if ( asNavFor && asNavFor !== null ) {
            asNavFor = $(asNavFor).not(_.$slider);
        }

        return asNavFor;

    };

    Slick.prototype.asNavFor = function(index) {

        var _ = this,
            asNavFor = _.getNavTarget();

        if ( asNavFor !== null && typeof asNavFor === 'object' ) {
            asNavFor.each(function() {
                var target = $(this).slick('getSlick');
                if(!target.unslicked) {
                    target.slideHandler(index, true);
                }
            });
        }

    };

    Slick.prototype.applyTransition = function(slide) {

        var _ = this,
            transition = {};

        if (_.options.fade === false) {
            transition[_.transitionType] = _.transformType + ' ' + _.options.speed + 'ms ' + _.options.cssEase;
        } else {
            transition[_.transitionType] = 'opacity ' + _.options.speed + 'ms ' + _.options.cssEase;
        }

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.autoPlay = function() {

        var _ = this;

        _.autoPlayClear();

        if ( _.slideCount > _.options.slidesToShow ) {
            _.autoPlayTimer = setInterval( _.autoPlayIterator, _.options.autoplaySpeed );
        }

    };

    Slick.prototype.autoPlayClear = function() {

        var _ = this;

        if (_.autoPlayTimer) {
            clearInterval(_.autoPlayTimer);
        }

    };

    Slick.prototype.autoPlayIterator = function() {

        var _ = this,
            slideTo = _.currentSlide + _.options.slidesToScroll;

        if ( !_.paused && !_.interrupted && !_.focussed ) {

            if ( _.options.infinite === false ) {

                if ( _.direction === 1 && ( _.currentSlide + 1 ) === ( _.slideCount - 1 )) {
                    _.direction = 0;
                }

                else if ( _.direction === 0 ) {

                    slideTo = _.currentSlide - _.options.slidesToScroll;

                    if ( _.currentSlide - 1 === 0 ) {
                        _.direction = 1;
                    }

                }

            }

            _.slideHandler( slideTo );

        }

    };

    Slick.prototype.buildArrows = function() {

        var _ = this;

        if (_.options.arrows === true ) {

            _.$prevArrow = $(_.options.prevArrow).addClass('slick-arrow');
            _.$nextArrow = $(_.options.nextArrow).addClass('slick-arrow');

            if( _.slideCount > _.options.slidesToShow ) {

                _.$prevArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');
                _.$nextArrow.removeClass('slick-hidden').removeAttr('aria-hidden tabindex');

                if (_.htmlExpr.test(_.options.prevArrow)) {
                    _.$prevArrow.prependTo(_.options.appendArrows);
                }

                if (_.htmlExpr.test(_.options.nextArrow)) {
                    _.$nextArrow.appendTo(_.options.appendArrows);
                }

                if (_.options.infinite !== true) {
                    _.$prevArrow
                        .addClass('slick-disabled')
                        .attr('aria-disabled', 'true');
                }

            } else {

                _.$prevArrow.add( _.$nextArrow )

                    .addClass('slick-hidden')
                    .attr({
                        'aria-disabled': 'true',
                        'tabindex': '-1'
                    });

            }

        }

    };

    Slick.prototype.buildDots = function() {

        var _ = this,
            i, dot;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$slider.addClass('slick-dotted');

            dot = $('<ul />').addClass(_.options.dotsClass);

            for (i = 0; i <= _.getDotCount(); i += 1) {
                dot.append($('<li />').append(_.options.customPaging.call(this, _, i)));
            }

            _.$dots = dot.appendTo(_.options.appendDots);

            _.$dots.find('li').first().addClass('slick-active');

        }

    };

    Slick.prototype.buildOut = function() {

        var _ = this;

        _.$slides =
            _.$slider
                .children( _.options.slide + ':not(.slick-cloned)')
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        _.$slides.each(function(index, element) {
            $(element)
                .attr('data-slick-index', index)
                .data('originalStyling', $(element).attr('style') || '');
        });

        _.$slider.addClass('slick-slider');

        _.$slideTrack = (_.slideCount === 0) ?
            $('<div class="slick-track"/>').appendTo(_.$slider) :
            _.$slides.wrapAll('<div class="slick-track"/>').parent();

        _.$list = _.$slideTrack.wrap(
            '<div class="slick-list"/>').parent();
        _.$slideTrack.css('opacity', 0);

        if (_.options.centerMode === true || _.options.swipeToSlide === true) {
            _.options.slidesToScroll = 1;
        }

        $('img[data-lazy]', _.$slider).not('[src]').addClass('slick-loading');

        _.setupInfinite();

        _.buildArrows();

        _.buildDots();

        _.updateDots();


        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        if (_.options.draggable === true) {
            _.$list.addClass('draggable');
        }

    };

    Slick.prototype.buildRows = function() {

        var _ = this, a, b, c, newSlides, numOfSlides, originalSlides,slidesPerSection;

        newSlides = document.createDocumentFragment();
        originalSlides = _.$slider.children();

        if(_.options.rows > 0) {

            slidesPerSection = _.options.slidesPerRow * _.options.rows;
            numOfSlides = Math.ceil(
                originalSlides.length / slidesPerSection
            );

            for(a = 0; a < numOfSlides; a++){
                var slide = document.createElement('div');
                for(b = 0; b < _.options.rows; b++) {
                    var row = document.createElement('div');
                    for(c = 0; c < _.options.slidesPerRow; c++) {
                        var target = (a * slidesPerSection + ((b * _.options.slidesPerRow) + c));
                        if (originalSlides.get(target)) {
                            row.appendChild(originalSlides.get(target));
                        }
                    }
                    slide.appendChild(row);
                }
                newSlides.appendChild(slide);
            }

            _.$slider.empty().append(newSlides);
            _.$slider.children().children().children()
                .css({
                    'width':(100 / _.options.slidesPerRow) + '%',
                    'display': 'inline-block'
                });

        }

    };

    Slick.prototype.checkResponsive = function(initial, forceUpdate) {

        var _ = this,
            breakpoint, targetBreakpoint, respondToWidth, triggerBreakpoint = false;
        var sliderWidth = _.$slider.width();
        var windowWidth = window.innerWidth || $(window).width();

        if (_.respondTo === 'window') {
            respondToWidth = windowWidth;
        } else if (_.respondTo === 'slider') {
            respondToWidth = sliderWidth;
        } else if (_.respondTo === 'min') {
            respondToWidth = Math.min(windowWidth, sliderWidth);
        }

        if ( _.options.responsive &&
            _.options.responsive.length &&
            _.options.responsive !== null) {

            targetBreakpoint = null;

            for (breakpoint in _.breakpoints) {
                if (_.breakpoints.hasOwnProperty(breakpoint)) {
                    if (_.originalSettings.mobileFirst === false) {
                        if (respondToWidth < _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    } else {
                        if (respondToWidth > _.breakpoints[breakpoint]) {
                            targetBreakpoint = _.breakpoints[breakpoint];
                        }
                    }
                }
            }

            if (targetBreakpoint !== null) {
                if (_.activeBreakpoint !== null) {
                    if (targetBreakpoint !== _.activeBreakpoint || forceUpdate) {
                        _.activeBreakpoint =
                            targetBreakpoint;
                        if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                            _.unslick(targetBreakpoint);
                        } else {
                            _.options = $.extend({}, _.originalSettings,
                                _.breakpointSettings[
                                    targetBreakpoint]);
                            if (initial === true) {
                                _.currentSlide = _.options.initialSlide;
                            }
                            _.refresh(initial);
                        }
                        triggerBreakpoint = targetBreakpoint;
                    }
                } else {
                    _.activeBreakpoint = targetBreakpoint;
                    if (_.breakpointSettings[targetBreakpoint] === 'unslick') {
                        _.unslick(targetBreakpoint);
                    } else {
                        _.options = $.extend({}, _.originalSettings,
                            _.breakpointSettings[
                                targetBreakpoint]);
                        if (initial === true) {
                            _.currentSlide = _.options.initialSlide;
                        }
                        _.refresh(initial);
                    }
                    triggerBreakpoint = targetBreakpoint;
                }
            } else {
                if (_.activeBreakpoint !== null) {
                    _.activeBreakpoint = null;
                    _.options = _.originalSettings;
                    if (initial === true) {
                        _.currentSlide = _.options.initialSlide;
                    }
                    _.refresh(initial);
                    triggerBreakpoint = targetBreakpoint;
                }
            }

            // only trigger breakpoints during an actual break. not on initialize.
            if( !initial && triggerBreakpoint !== false ) {
                _.$slider.trigger('breakpoint', [_, triggerBreakpoint]);
            }
        }

    };

    Slick.prototype.changeSlide = function(event, dontAnimate) {

        var _ = this,
            $target = $(event.currentTarget),
            indexOffset, slideOffset, unevenOffset;

        // If target is a link, prevent default action.
        if($target.is('a')) {
            event.preventDefault();
        }

        // If target is not the <li> element (ie: a child), find the <li>.
        if(!$target.is('li')) {
            $target = $target.closest('li');
        }

        unevenOffset = (_.slideCount % _.options.slidesToScroll !== 0);
        indexOffset = unevenOffset ? 0 : (_.slideCount - _.currentSlide) % _.options.slidesToScroll;

        switch (event.data.message) {

            case 'previous':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : _.options.slidesToShow - indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide - slideOffset, false, dontAnimate);
                }
                break;

            case 'next':
                slideOffset = indexOffset === 0 ? _.options.slidesToScroll : indexOffset;
                if (_.slideCount > _.options.slidesToShow) {
                    _.slideHandler(_.currentSlide + slideOffset, false, dontAnimate);
                }
                break;

            case 'index':
                var index = event.data.index === 0 ? 0 :
                    event.data.index || $target.index() * _.options.slidesToScroll;

                _.slideHandler(_.checkNavigable(index), false, dontAnimate);
                $target.children().trigger('focus');
                break;

            default:
                return;
        }

    };

    Slick.prototype.checkNavigable = function(index) {

        var _ = this,
            navigables, prevNavigable;

        navigables = _.getNavigableIndexes();
        prevNavigable = 0;
        if (index > navigables[navigables.length - 1]) {
            index = navigables[navigables.length - 1];
        } else {
            for (var n in navigables) {
                if (index < navigables[n]) {
                    index = prevNavigable;
                    break;
                }
                prevNavigable = navigables[n];
            }
        }

        return index;
    };

    Slick.prototype.cleanUpEvents = function() {

        var _ = this;

        if (_.options.dots && _.$dots !== null) {

            $('li', _.$dots)
                .off('click.slick', _.changeSlide)
                .off('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .off('mouseleave.slick', $.proxy(_.interrupt, _, false));

            if (_.options.accessibility === true) {
                _.$dots.off('keydown.slick', _.keyHandler);
            }
        }

        _.$slider.off('focus.slick blur.slick');

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow && _.$prevArrow.off('click.slick', _.changeSlide);
            _.$nextArrow && _.$nextArrow.off('click.slick', _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow && _.$prevArrow.off('keydown.slick', _.keyHandler);
                _.$nextArrow && _.$nextArrow.off('keydown.slick', _.keyHandler);
            }
        }

        _.$list.off('touchstart.slick mousedown.slick', _.swipeHandler);
        _.$list.off('touchmove.slick mousemove.slick', _.swipeHandler);
        _.$list.off('touchend.slick mouseup.slick', _.swipeHandler);
        _.$list.off('touchcancel.slick mouseleave.slick', _.swipeHandler);

        _.$list.off('click.slick', _.clickHandler);

        $(document).off(_.visibilityChange, _.visibility);

        _.cleanUpSlideEvents();

        if (_.options.accessibility === true) {
            _.$list.off('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().off('click.slick', _.selectHandler);
        }

        $(window).off('orientationchange.slick.slick-' + _.instanceUid, _.orientationChange);

        $(window).off('resize.slick.slick-' + _.instanceUid, _.resize);

        $('[draggable!=true]', _.$slideTrack).off('dragstart', _.preventDefault);

        $(window).off('load.slick.slick-' + _.instanceUid, _.setPosition);

    };

    Slick.prototype.cleanUpSlideEvents = function() {

        var _ = this;

        _.$list.off('mouseenter.slick', $.proxy(_.interrupt, _, true));
        _.$list.off('mouseleave.slick', $.proxy(_.interrupt, _, false));

    };

    Slick.prototype.cleanUpRows = function() {

        var _ = this, originalSlides;

        if(_.options.rows > 0) {
            originalSlides = _.$slides.children().children();
            originalSlides.removeAttr('style');
            _.$slider.empty().append(originalSlides);
        }

    };

    Slick.prototype.clickHandler = function(event) {

        var _ = this;

        if (_.shouldClick === false) {
            event.stopImmediatePropagation();
            event.stopPropagation();
            event.preventDefault();
        }

    };

    Slick.prototype.destroy = function(refresh) {

        var _ = this;

        _.autoPlayClear();

        _.touchObject = {};

        _.cleanUpEvents();

        $('.slick-cloned', _.$slider).detach();

        if (_.$dots) {
            _.$dots.remove();
        }

        if ( _.$prevArrow && _.$prevArrow.length ) {

            _.$prevArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.prevArrow )) {
                _.$prevArrow.remove();
            }
        }

        if ( _.$nextArrow && _.$nextArrow.length ) {

            _.$nextArrow
                .removeClass('slick-disabled slick-arrow slick-hidden')
                .removeAttr('aria-hidden aria-disabled tabindex')
                .css('display','');

            if ( _.htmlExpr.test( _.options.nextArrow )) {
                _.$nextArrow.remove();
            }
        }


        if (_.$slides) {

            _.$slides
                .removeClass('slick-slide slick-active slick-center slick-visible slick-current')
                .removeAttr('aria-hidden')
                .removeAttr('data-slick-index')
                .each(function(){
                    $(this).attr('style', $(this).data('originalStyling'));
                });

            _.$slideTrack.children(this.options.slide).detach();

            _.$slideTrack.detach();

            _.$list.detach();

            _.$slider.append(_.$slides);
        }

        _.cleanUpRows();

        _.$slider.removeClass('slick-slider');
        _.$slider.removeClass('slick-initialized');
        _.$slider.removeClass('slick-dotted');

        _.unslicked = true;

        if(!refresh) {
            _.$slider.trigger('destroy', [_]);
        }

    };

    Slick.prototype.disableTransition = function(slide) {

        var _ = this,
            transition = {};

        transition[_.transitionType] = '';

        if (_.options.fade === false) {
            _.$slideTrack.css(transition);
        } else {
            _.$slides.eq(slide).css(transition);
        }

    };

    Slick.prototype.fadeSlide = function(slideIndex, callback) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).css({
                zIndex: _.options.zIndex
            });

            _.$slides.eq(slideIndex).animate({
                opacity: 1
            }, _.options.speed, _.options.easing, callback);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 1,
                zIndex: _.options.zIndex
            });

            if (callback) {
                setTimeout(function() {

                    _.disableTransition(slideIndex);

                    callback.call();
                }, _.options.speed);
            }

        }

    };

    Slick.prototype.fadeSlideOut = function(slideIndex) {

        var _ = this;

        if (_.cssTransitions === false) {

            _.$slides.eq(slideIndex).animate({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            }, _.options.speed, _.options.easing);

        } else {

            _.applyTransition(slideIndex);

            _.$slides.eq(slideIndex).css({
                opacity: 0,
                zIndex: _.options.zIndex - 2
            });

        }

    };

    Slick.prototype.filterSlides = Slick.prototype.slickFilter = function(filter) {

        var _ = this;

        if (filter !== null) {

            _.$slidesCache = _.$slides;

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.filter(filter).appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.focusHandler = function() {

        var _ = this;

        _.$slider
            .off('focus.slick blur.slick')
            .on('focus.slick blur.slick', '*', function(event) {

            event.stopImmediatePropagation();
            var $sf = $(this);

            setTimeout(function() {

                if( _.options.pauseOnFocus ) {
                    _.focussed = $sf.is(':focus');
                    _.autoPlay();
                }

            }, 0);

        });
    };

    Slick.prototype.getCurrent = Slick.prototype.slickCurrentSlide = function() {

        var _ = this;
        return _.currentSlide;

    };

    Slick.prototype.getDotCount = function() {

        var _ = this;

        var breakPoint = 0;
        var counter = 0;
        var pagerQty = 0;

        if (_.options.infinite === true) {
            if (_.slideCount <= _.options.slidesToShow) {
                 ++pagerQty;
            } else {
                while (breakPoint < _.slideCount) {
                    ++pagerQty;
                    breakPoint = counter + _.options.slidesToScroll;
                    counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
                }
            }
        } else if (_.options.centerMode === true) {
            pagerQty = _.slideCount;
        } else if(!_.options.asNavFor) {
            pagerQty = 1 + Math.ceil((_.slideCount - _.options.slidesToShow) / _.options.slidesToScroll);
        }else {
            while (breakPoint < _.slideCount) {
                ++pagerQty;
                breakPoint = counter + _.options.slidesToScroll;
                counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
            }
        }

        return pagerQty - 1;

    };

    Slick.prototype.getLeft = function(slideIndex) {

        var _ = this,
            targetLeft,
            verticalHeight,
            verticalOffset = 0,
            targetSlide,
            coef;

        _.slideOffset = 0;
        verticalHeight = _.$slides.first().outerHeight(true);

        if (_.options.infinite === true) {
            if (_.slideCount > _.options.slidesToShow) {
                _.slideOffset = (_.slideWidth * _.options.slidesToShow) * -1;
                coef = -1

                if (_.options.vertical === true && _.options.centerMode === true) {
                    if (_.options.slidesToShow === 2) {
                        coef = -1.5;
                    } else if (_.options.slidesToShow === 1) {
                        coef = -2
                    }
                }
                verticalOffset = (verticalHeight * _.options.slidesToShow) * coef;
            }
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                if (slideIndex + _.options.slidesToScroll > _.slideCount && _.slideCount > _.options.slidesToShow) {
                    if (slideIndex > _.slideCount) {
                        _.slideOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * _.slideWidth) * -1;
                        verticalOffset = ((_.options.slidesToShow - (slideIndex - _.slideCount)) * verticalHeight) * -1;
                    } else {
                        _.slideOffset = ((_.slideCount % _.options.slidesToScroll) * _.slideWidth) * -1;
                        verticalOffset = ((_.slideCount % _.options.slidesToScroll) * verticalHeight) * -1;
                    }
                }
            }
        } else {
            if (slideIndex + _.options.slidesToShow > _.slideCount) {
                _.slideOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * _.slideWidth;
                verticalOffset = ((slideIndex + _.options.slidesToShow) - _.slideCount) * verticalHeight;
            }
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.slideOffset = 0;
            verticalOffset = 0;
        }

        if (_.options.centerMode === true && _.slideCount <= _.options.slidesToShow) {
            _.slideOffset = ((_.slideWidth * Math.floor(_.options.slidesToShow)) / 2) - ((_.slideWidth * _.slideCount) / 2);
        } else if (_.options.centerMode === true && _.options.infinite === true) {
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2) - _.slideWidth;
        } else if (_.options.centerMode === true) {
            _.slideOffset = 0;
            _.slideOffset += _.slideWidth * Math.floor(_.options.slidesToShow / 2);
        }

        if (_.options.vertical === false) {
            targetLeft = ((slideIndex * _.slideWidth) * -1) + _.slideOffset;
        } else {
            targetLeft = ((slideIndex * verticalHeight) * -1) + verticalOffset;
        }

        if (_.options.variableWidth === true) {

            if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
            } else {
                targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow);
            }

            if (_.options.rtl === true) {
                if (targetSlide[0]) {
                    targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                } else {
                    targetLeft =  0;
                }
            } else {
                targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
            }

            if (_.options.centerMode === true) {
                if (_.slideCount <= _.options.slidesToShow || _.options.infinite === false) {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex);
                } else {
                    targetSlide = _.$slideTrack.children('.slick-slide').eq(slideIndex + _.options.slidesToShow + 1);
                }

                if (_.options.rtl === true) {
                    if (targetSlide[0]) {
                        targetLeft = (_.$slideTrack.width() - targetSlide[0].offsetLeft - targetSlide.width()) * -1;
                    } else {
                        targetLeft =  0;
                    }
                } else {
                    targetLeft = targetSlide[0] ? targetSlide[0].offsetLeft * -1 : 0;
                }

                targetLeft += (_.$list.width() - targetSlide.outerWidth()) / 2;
            }
        }

        return targetLeft;

    };

    Slick.prototype.getOption = Slick.prototype.slickGetOption = function(option) {

        var _ = this;

        return _.options[option];

    };

    Slick.prototype.getNavigableIndexes = function() {

        var _ = this,
            breakPoint = 0,
            counter = 0,
            indexes = [],
            max;

        if (_.options.infinite === false) {
            max = _.slideCount;
        } else {
            breakPoint = _.options.slidesToScroll * -1;
            counter = _.options.slidesToScroll * -1;
            max = _.slideCount * 2;
        }

        while (breakPoint < max) {
            indexes.push(breakPoint);
            breakPoint = counter + _.options.slidesToScroll;
            counter += _.options.slidesToScroll <= _.options.slidesToShow ? _.options.slidesToScroll : _.options.slidesToShow;
        }

        return indexes;

    };

    Slick.prototype.getSlick = function() {

        return this;

    };

    Slick.prototype.getSlideCount = function() {

        var _ = this,
            slidesTraversed, swipedSlide, centerOffset;

        centerOffset = _.options.centerMode === true ? _.slideWidth * Math.floor(_.options.slidesToShow / 2) : 0;

        if (_.options.swipeToSlide === true) {
            _.$slideTrack.find('.slick-slide').each(function(index, slide) {
                if (slide.offsetLeft - centerOffset + ($(slide).outerWidth() / 2) > (_.swipeLeft * -1)) {
                    swipedSlide = slide;
                    return false;
                }
            });

            slidesTraversed = Math.abs($(swipedSlide).attr('data-slick-index') - _.currentSlide) || 1;

            return slidesTraversed;

        } else {
            return _.options.slidesToScroll;
        }

    };

    Slick.prototype.goTo = Slick.prototype.slickGoTo = function(slide, dontAnimate) {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'index',
                index: parseInt(slide)
            }
        }, dontAnimate);

    };

    Slick.prototype.init = function(creation) {

        var _ = this;

        if (!$(_.$slider).hasClass('slick-initialized')) {

            $(_.$slider).addClass('slick-initialized');

            _.buildRows();
            _.buildOut();
            _.setProps();
            _.startLoad();
            _.loadSlider();
            _.initializeEvents();
            _.updateArrows();
            _.updateDots();
            _.checkResponsive(true);
            _.focusHandler();

        }

        if (creation) {
            _.$slider.trigger('init', [_]);
        }

        if (_.options.accessibility === true) {
            _.initADA();
        }

        if ( _.options.autoplay ) {

            _.paused = false;
            _.autoPlay();

        }

    };

    Slick.prototype.initADA = function() {
        var _ = this,
                numDotGroups = Math.ceil(_.slideCount / _.options.slidesToShow),
                tabControlIndexes = _.getNavigableIndexes().filter(function(val) {
                    return (val >= 0) && (val < _.slideCount);
                });

        _.$slides.add(_.$slideTrack.find('.slick-cloned')).attr({
            'aria-hidden': 'true',
            'tabindex': '-1'
        }).find('a, input, button, select').attr({
            'tabindex': '-1'
        });

        if (_.$dots !== null) {
            _.$slides.not(_.$slideTrack.find('.slick-cloned')).each(function(i) {
                var slideControlIndex = tabControlIndexes.indexOf(i);

                $(this).attr({
                    'role': 'tabpanel',
                    'id': 'slick-slide' + _.instanceUid + i,
                    'tabindex': -1
                });

                if (slideControlIndex !== -1) {
                   var ariaButtonControl = 'slick-slide-control' + _.instanceUid + slideControlIndex
                   if ($('#' + ariaButtonControl).length) {
                     $(this).attr({
                         'aria-describedby': ariaButtonControl
                     });
                   }
                }
            });

            _.$dots.attr('role', 'tablist').find('li').each(function(i) {
                var mappedSlideIndex = tabControlIndexes[i];

                $(this).attr({
                    'role': 'presentation'
                });

                $(this).find('button').first().attr({
                    'role': 'tab',
                    'id': 'slick-slide-control' + _.instanceUid + i,
                    'aria-controls': 'slick-slide' + _.instanceUid + mappedSlideIndex,
                    'aria-label': (i + 1) + ' of ' + numDotGroups,
                    'aria-selected': null,
                    'tabindex': '-1'
                });

            }).eq(_.currentSlide).find('button').attr({
                'aria-selected': 'true',
                'tabindex': '0'
            }).end();
        }

        for (var i=_.currentSlide, max=i+_.options.slidesToShow; i < max; i++) {
          if (_.options.focusOnChange) {
            _.$slides.eq(i).attr({'tabindex': '0'});
          } else {
            _.$slides.eq(i).removeAttr('tabindex');
          }
        }

        _.activateADA();

    };

    Slick.prototype.initArrowEvents = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {
            _.$prevArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'previous'
               }, _.changeSlide);
            _.$nextArrow
               .off('click.slick')
               .on('click.slick', {
                    message: 'next'
               }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$prevArrow.on('keydown.slick', _.keyHandler);
                _.$nextArrow.on('keydown.slick', _.keyHandler);
            }
        }

    };

    Slick.prototype.initDotEvents = function() {

        var _ = this;

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {
            $('li', _.$dots).on('click.slick', {
                message: 'index'
            }, _.changeSlide);

            if (_.options.accessibility === true) {
                _.$dots.on('keydown.slick', _.keyHandler);
            }
        }

        if (_.options.dots === true && _.options.pauseOnDotsHover === true && _.slideCount > _.options.slidesToShow) {

            $('li', _.$dots)
                .on('mouseenter.slick', $.proxy(_.interrupt, _, true))
                .on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initSlideEvents = function() {

        var _ = this;

        if ( _.options.pauseOnHover ) {

            _.$list.on('mouseenter.slick', $.proxy(_.interrupt, _, true));
            _.$list.on('mouseleave.slick', $.proxy(_.interrupt, _, false));

        }

    };

    Slick.prototype.initializeEvents = function() {

        var _ = this;

        _.initArrowEvents();

        _.initDotEvents();
        _.initSlideEvents();

        _.$list.on('touchstart.slick mousedown.slick', {
            action: 'start'
        }, _.swipeHandler);
        _.$list.on('touchmove.slick mousemove.slick', {
            action: 'move'
        }, _.swipeHandler);
        _.$list.on('touchend.slick mouseup.slick', {
            action: 'end'
        }, _.swipeHandler);
        _.$list.on('touchcancel.slick mouseleave.slick', {
            action: 'end'
        }, _.swipeHandler);

        _.$list.on('click.slick', _.clickHandler);

        $(document).on(_.visibilityChange, $.proxy(_.visibility, _));

        if (_.options.accessibility === true) {
            _.$list.on('keydown.slick', _.keyHandler);
        }

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        $(window).on('orientationchange.slick.slick-' + _.instanceUid, $.proxy(_.orientationChange, _));

        $(window).on('resize.slick.slick-' + _.instanceUid, $.proxy(_.resize, _));

        $('[draggable!=true]', _.$slideTrack).on('dragstart', _.preventDefault);

        $(window).on('load.slick.slick-' + _.instanceUid, _.setPosition);
        $(_.setPosition);

    };

    Slick.prototype.initUI = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.show();
            _.$nextArrow.show();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.show();

        }

    };

    Slick.prototype.keyHandler = function(event) {

        var _ = this;
         //Dont slide if the cursor is inside the form fields and arrow keys are pressed
        if(!event.target.tagName.match('TEXTAREA|INPUT|SELECT')) {
            if (event.keyCode === 37 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'next' :  'previous'
                    }
                });
            } else if (event.keyCode === 39 && _.options.accessibility === true) {
                _.changeSlide({
                    data: {
                        message: _.options.rtl === true ? 'previous' : 'next'
                    }
                });
            }
        }

    };

    Slick.prototype.lazyLoad = function() {

        var _ = this,
            loadRange, cloneRange, rangeStart, rangeEnd;

        function loadImages(imagesScope) {

            $('img[data-lazy]', imagesScope).each(function() {

                var image = $(this),
                    imageSource = $(this).attr('data-lazy'),
                    imageSrcSet = $(this).attr('data-srcset'),
                    imageSizes  = $(this).attr('data-sizes') || _.$slider.attr('data-sizes'),
                    imageToLoad = document.createElement('img');

                imageToLoad.onload = function() {

                    image
                        .animate({ opacity: 0 }, 100, function() {

                            if (imageSrcSet) {
                                image
                                    .attr('srcset', imageSrcSet );

                                if (imageSizes) {
                                    image
                                        .attr('sizes', imageSizes );
                                }
                            }

                            image
                                .attr('src', imageSource)
                                .animate({ opacity: 1 }, 200, function() {
                                    image
                                        .removeAttr('data-lazy data-srcset data-sizes')
                                        .removeClass('slick-loading');
                                });
                            _.$slider.trigger('lazyLoaded', [_, image, imageSource]);
                        });

                };

                imageToLoad.onerror = function() {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                };

                imageToLoad.src = imageSource;

            });

        }

        if (_.options.centerMode === true) {
            if (_.options.infinite === true) {
                rangeStart = _.currentSlide + (_.options.slidesToShow / 2 + 1);
                rangeEnd = rangeStart + _.options.slidesToShow + 2;
            } else {
                rangeStart = Math.max(0, _.currentSlide - (_.options.slidesToShow / 2 + 1));
                rangeEnd = 2 + (_.options.slidesToShow / 2 + 1) + _.currentSlide;
            }
        } else {
            rangeStart = _.options.infinite ? _.options.slidesToShow + _.currentSlide : _.currentSlide;
            rangeEnd = Math.ceil(rangeStart + _.options.slidesToShow);
            if (_.options.fade === true) {
                if (rangeStart > 0) rangeStart--;
                if (rangeEnd <= _.slideCount) rangeEnd++;
            }
        }

        loadRange = _.$slider.find('.slick-slide').slice(rangeStart, rangeEnd);

        if (_.options.lazyLoad === 'anticipated') {
            var prevSlide = rangeStart - 1,
                nextSlide = rangeEnd,
                $slides = _.$slider.find('.slick-slide');

            for (var i = 0; i < _.options.slidesToScroll; i++) {
                if (prevSlide < 0) prevSlide = _.slideCount - 1;
                loadRange = loadRange.add($slides.eq(prevSlide));
                loadRange = loadRange.add($slides.eq(nextSlide));
                prevSlide--;
                nextSlide++;
            }
        }

        loadImages(loadRange);

        if (_.slideCount <= _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-slide');
            loadImages(cloneRange);
        } else
        if (_.currentSlide >= _.slideCount - _.options.slidesToShow) {
            cloneRange = _.$slider.find('.slick-cloned').slice(0, _.options.slidesToShow);
            loadImages(cloneRange);
        } else if (_.currentSlide === 0) {
            cloneRange = _.$slider.find('.slick-cloned').slice(_.options.slidesToShow * -1);
            loadImages(cloneRange);
        }

    };

    Slick.prototype.loadSlider = function() {

        var _ = this;

        _.setPosition();

        _.$slideTrack.css({
            opacity: 1
        });

        _.$slider.removeClass('slick-loading');

        _.initUI();

        if (_.options.lazyLoad === 'progressive') {
            _.progressiveLazyLoad();
        }

    };

    Slick.prototype.next = Slick.prototype.slickNext = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'next'
            }
        });

    };

    Slick.prototype.orientationChange = function() {

        var _ = this;

        _.checkResponsive();
        _.setPosition();

    };

    Slick.prototype.pause = Slick.prototype.slickPause = function() {

        var _ = this;

        _.autoPlayClear();
        _.paused = true;

    };

    Slick.prototype.play = Slick.prototype.slickPlay = function() {

        var _ = this;

        _.autoPlay();
        _.options.autoplay = true;
        _.paused = false;
        _.focussed = false;
        _.interrupted = false;

    };

    Slick.prototype.postSlide = function(index) {

        var _ = this;

        if( !_.unslicked ) {

            _.$slider.trigger('afterChange', [_, index]);

            _.animating = false;

            if (_.slideCount > _.options.slidesToShow) {
                _.setPosition();
            }

            _.swipeLeft = null;

            if ( _.options.autoplay ) {
                _.autoPlay();
            }

            if (_.options.accessibility === true) {
                _.initADA();

                if (_.options.focusOnChange) {
                    var $currentSlide = $(_.$slides.get(_.currentSlide));
                    $currentSlide.attr('tabindex', 0).focus();
                }
            }

        }

    };

    Slick.prototype.prev = Slick.prototype.slickPrev = function() {

        var _ = this;

        _.changeSlide({
            data: {
                message: 'previous'
            }
        });

    };

    Slick.prototype.preventDefault = function(event) {

        event.preventDefault();

    };

    Slick.prototype.progressiveLazyLoad = function( tryCount ) {

        tryCount = tryCount || 1;

        var _ = this,
            $imgsToLoad = $( 'img[data-lazy]', _.$slider ),
            image,
            imageSource,
            imageSrcSet,
            imageSizes,
            imageToLoad;

        if ( $imgsToLoad.length ) {

            image = $imgsToLoad.first();
            imageSource = image.attr('data-lazy');
            imageSrcSet = image.attr('data-srcset');
            imageSizes  = image.attr('data-sizes') || _.$slider.attr('data-sizes');
            imageToLoad = document.createElement('img');

            imageToLoad.onload = function() {

                if (imageSrcSet) {
                    image
                        .attr('srcset', imageSrcSet );

                    if (imageSizes) {
                        image
                            .attr('sizes', imageSizes );
                    }
                }

                image
                    .attr( 'src', imageSource )
                    .removeAttr('data-lazy data-srcset data-sizes')
                    .removeClass('slick-loading');

                if ( _.options.adaptiveHeight === true ) {
                    _.setPosition();
                }

                _.$slider.trigger('lazyLoaded', [ _, image, imageSource ]);
                _.progressiveLazyLoad();

            };

            imageToLoad.onerror = function() {

                if ( tryCount < 3 ) {

                    /**
                     * try to load the image 3 times,
                     * leave a slight delay so we don't get
                     * servers blocking the request.
                     */
                    setTimeout( function() {
                        _.progressiveLazyLoad( tryCount + 1 );
                    }, 500 );

                } else {

                    image
                        .removeAttr( 'data-lazy' )
                        .removeClass( 'slick-loading' )
                        .addClass( 'slick-lazyload-error' );

                    _.$slider.trigger('lazyLoadError', [ _, image, imageSource ]);

                    _.progressiveLazyLoad();

                }

            };

            imageToLoad.src = imageSource;

        } else {

            _.$slider.trigger('allImagesLoaded', [ _ ]);

        }

    };

    Slick.prototype.refresh = function( initializing ) {

        var _ = this, currentSlide, lastVisibleIndex;

        lastVisibleIndex = _.slideCount - _.options.slidesToShow;

        // in non-infinite sliders, we don't want to go past the
        // last visible index.
        if( !_.options.infinite && ( _.currentSlide > lastVisibleIndex )) {
            _.currentSlide = lastVisibleIndex;
        }

        // if less slides than to show, go to start.
        if ( _.slideCount <= _.options.slidesToShow ) {
            _.currentSlide = 0;

        }

        currentSlide = _.currentSlide;

        _.destroy(true);

        $.extend(_, _.initials, { currentSlide: currentSlide });

        _.init();

        if( !initializing ) {

            _.changeSlide({
                data: {
                    message: 'index',
                    index: currentSlide
                }
            }, false);

        }

    };

    Slick.prototype.registerBreakpoints = function() {

        var _ = this, breakpoint, currentBreakpoint, l,
            responsiveSettings = _.options.responsive || null;

        if ( $.type(responsiveSettings) === 'array' && responsiveSettings.length ) {

            _.respondTo = _.options.respondTo || 'window';

            for ( breakpoint in responsiveSettings ) {

                l = _.breakpoints.length-1;

                if (responsiveSettings.hasOwnProperty(breakpoint)) {
                    currentBreakpoint = responsiveSettings[breakpoint].breakpoint;

                    // loop through the breakpoints and cut out any existing
                    // ones with the same breakpoint number, we don't want dupes.
                    while( l >= 0 ) {
                        if( _.breakpoints[l] && _.breakpoints[l] === currentBreakpoint ) {
                            _.breakpoints.splice(l,1);
                        }
                        l--;
                    }

                    _.breakpoints.push(currentBreakpoint);
                    _.breakpointSettings[currentBreakpoint] = responsiveSettings[breakpoint].settings;

                }

            }

            _.breakpoints.sort(function(a, b) {
                return ( _.options.mobileFirst ) ? a-b : b-a;
            });

        }

    };

    Slick.prototype.reinit = function() {

        var _ = this;

        _.$slides =
            _.$slideTrack
                .children(_.options.slide)
                .addClass('slick-slide');

        _.slideCount = _.$slides.length;

        if (_.currentSlide >= _.slideCount && _.currentSlide !== 0) {
            _.currentSlide = _.currentSlide - _.options.slidesToScroll;
        }

        if (_.slideCount <= _.options.slidesToShow) {
            _.currentSlide = 0;
        }

        _.registerBreakpoints();

        _.setProps();
        _.setupInfinite();
        _.buildArrows();
        _.updateArrows();
        _.initArrowEvents();
        _.buildDots();
        _.updateDots();
        _.initDotEvents();
        _.cleanUpSlideEvents();
        _.initSlideEvents();

        _.checkResponsive(false, true);

        if (_.options.focusOnSelect === true) {
            $(_.$slideTrack).children().on('click.slick', _.selectHandler);
        }

        _.setSlideClasses(typeof _.currentSlide === 'number' ? _.currentSlide : 0);

        _.setPosition();
        _.focusHandler();

        _.paused = !_.options.autoplay;
        _.autoPlay();

        _.$slider.trigger('reInit', [_]);

    };

    Slick.prototype.resize = function() {

        var _ = this;

        if ($(window).width() !== _.windowWidth) {
            clearTimeout(_.windowDelay);
            _.windowDelay = window.setTimeout(function() {
                _.windowWidth = $(window).width();
                _.checkResponsive();
                if( !_.unslicked ) { _.setPosition(); }
            }, 50);
        }
    };

    Slick.prototype.removeSlide = Slick.prototype.slickRemove = function(index, removeBefore, removeAll) {

        var _ = this;

        if (typeof(index) === 'boolean') {
            removeBefore = index;
            index = removeBefore === true ? 0 : _.slideCount - 1;
        } else {
            index = removeBefore === true ? --index : index;
        }

        if (_.slideCount < 1 || index < 0 || index > _.slideCount - 1) {
            return false;
        }

        _.unload();

        if (removeAll === true) {
            _.$slideTrack.children().remove();
        } else {
            _.$slideTrack.children(this.options.slide).eq(index).remove();
        }

        _.$slides = _.$slideTrack.children(this.options.slide);

        _.$slideTrack.children(this.options.slide).detach();

        _.$slideTrack.append(_.$slides);

        _.$slidesCache = _.$slides;

        _.reinit();

    };

    Slick.prototype.setCSS = function(position) {

        var _ = this,
            positionProps = {},
            x, y;

        if (_.options.rtl === true) {
            position = -position;
        }
        x = _.positionProp == 'left' ? Math.ceil(position) + 'px' : '0px';
        y = _.positionProp == 'top' ? Math.ceil(position) + 'px' : '0px';

        positionProps[_.positionProp] = position;

        if (_.transformsEnabled === false) {
            _.$slideTrack.css(positionProps);
        } else {
            positionProps = {};
            if (_.cssTransitions === false) {
                positionProps[_.animType] = 'translate(' + x + ', ' + y + ')';
                _.$slideTrack.css(positionProps);
            } else {
                positionProps[_.animType] = 'translate3d(' + x + ', ' + y + ', 0px)';
                _.$slideTrack.css(positionProps);
            }
        }

    };

    Slick.prototype.setDimensions = function() {

        var _ = this;

        if (_.options.vertical === false) {
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: ('0px ' + _.options.centerPadding)
                });
            }
        } else {
            _.$list.height(_.$slides.first().outerHeight(true) * _.options.slidesToShow);
            if (_.options.centerMode === true) {
                _.$list.css({
                    padding: (_.options.centerPadding + ' 0px')
                });
            }
        }

        _.listWidth = _.$list.width();
        _.listHeight = _.$list.height();


        if (_.options.vertical === false && _.options.variableWidth === false) {
            _.slideWidth = Math.ceil(_.listWidth / _.options.slidesToShow);
            _.$slideTrack.width(Math.ceil((_.slideWidth * _.$slideTrack.children('.slick-slide').length)));

        } else if (_.options.variableWidth === true) {
            _.$slideTrack.width(5000 * _.slideCount);
        } else {
            _.slideWidth = Math.ceil(_.listWidth);
            _.$slideTrack.height(Math.ceil((_.$slides.first().outerHeight(true) * _.$slideTrack.children('.slick-slide').length)));
        }

        var offset = _.$slides.first().outerWidth(true) - _.$slides.first().width();
        if (_.options.variableWidth === false) _.$slideTrack.children('.slick-slide').width(_.slideWidth - offset);

    };

    Slick.prototype.setFade = function() {

        var _ = this,
            targetLeft;

        _.$slides.each(function(index, element) {
            targetLeft = (_.slideWidth * index) * -1;
            if (_.options.rtl === true) {
                $(element).css({
                    position: 'relative',
                    right: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            } else {
                $(element).css({
                    position: 'relative',
                    left: targetLeft,
                    top: 0,
                    zIndex: _.options.zIndex - 2,
                    opacity: 0
                });
            }
        });

        _.$slides.eq(_.currentSlide).css({
            zIndex: _.options.zIndex - 1,
            opacity: 1
        });

    };

    Slick.prototype.setHeight = function() {

        var _ = this;

        if (_.options.slidesToShow === 1 && _.options.adaptiveHeight === true && _.options.vertical === false) {
            var targetHeight = _.$slides.eq(_.currentSlide).outerHeight(true);
            _.$list.css('height', targetHeight);
        }

    };

    Slick.prototype.setOption =
    Slick.prototype.slickSetOption = function() {

        /**
         * accepts arguments in format of:
         *
         *  - for changing a single option's value:
         *     .slick("setOption", option, value, refresh )
         *
         *  - for changing a set of responsive options:
         *     .slick("setOption", 'responsive', [{}, ...], refresh )
         *
         *  - for updating multiple values at once (not responsive)
         *     .slick("setOption", { 'option': value, ... }, refresh )
         */

        var _ = this, l, item, option, value, refresh = false, type;

        if( $.type( arguments[0] ) === 'object' ) {

            option =  arguments[0];
            refresh = arguments[1];
            type = 'multiple';

        } else if ( $.type( arguments[0] ) === 'string' ) {

            option =  arguments[0];
            value = arguments[1];
            refresh = arguments[2];

            if ( arguments[0] === 'responsive' && $.type( arguments[1] ) === 'array' ) {

                type = 'responsive';

            } else if ( typeof arguments[1] !== 'undefined' ) {

                type = 'single';

            }

        }

        if ( type === 'single' ) {

            _.options[option] = value;


        } else if ( type === 'multiple' ) {

            $.each( option , function( opt, val ) {

                _.options[opt] = val;

            });


        } else if ( type === 'responsive' ) {

            for ( item in value ) {

                if( $.type( _.options.responsive ) !== 'array' ) {

                    _.options.responsive = [ value[item] ];

                } else {

                    l = _.options.responsive.length-1;

                    // loop through the responsive object and splice out duplicates.
                    while( l >= 0 ) {

                        if( _.options.responsive[l].breakpoint === value[item].breakpoint ) {

                            _.options.responsive.splice(l,1);

                        }

                        l--;

                    }

                    _.options.responsive.push( value[item] );

                }

            }

        }

        if ( refresh ) {

            _.unload();
            _.reinit();

        }

    };

    Slick.prototype.setPosition = function() {

        var _ = this;

        _.setDimensions();

        _.setHeight();

        if (_.options.fade === false) {
            _.setCSS(_.getLeft(_.currentSlide));
        } else {
            _.setFade();
        }

        _.$slider.trigger('setPosition', [_]);

    };

    Slick.prototype.setProps = function() {

        var _ = this,
            bodyStyle = document.body.style;

        _.positionProp = _.options.vertical === true ? 'top' : 'left';

        if (_.positionProp === 'top') {
            _.$slider.addClass('slick-vertical');
        } else {
            _.$slider.removeClass('slick-vertical');
        }

        if (bodyStyle.WebkitTransition !== undefined ||
            bodyStyle.MozTransition !== undefined ||
            bodyStyle.msTransition !== undefined) {
            if (_.options.useCSS === true) {
                _.cssTransitions = true;
            }
        }

        if ( _.options.fade ) {
            if ( typeof _.options.zIndex === 'number' ) {
                if( _.options.zIndex < 3 ) {
                    _.options.zIndex = 3;
                }
            } else {
                _.options.zIndex = _.defaults.zIndex;
            }
        }

        if (bodyStyle.OTransform !== undefined) {
            _.animType = 'OTransform';
            _.transformType = '-o-transform';
            _.transitionType = 'OTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.MozTransform !== undefined) {
            _.animType = 'MozTransform';
            _.transformType = '-moz-transform';
            _.transitionType = 'MozTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.MozPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.webkitTransform !== undefined) {
            _.animType = 'webkitTransform';
            _.transformType = '-webkit-transform';
            _.transitionType = 'webkitTransition';
            if (bodyStyle.perspectiveProperty === undefined && bodyStyle.webkitPerspective === undefined) _.animType = false;
        }
        if (bodyStyle.msTransform !== undefined) {
            _.animType = 'msTransform';
            _.transformType = '-ms-transform';
            _.transitionType = 'msTransition';
            if (bodyStyle.msTransform === undefined) _.animType = false;
        }
        if (bodyStyle.transform !== undefined && _.animType !== false) {
            _.animType = 'transform';
            _.transformType = 'transform';
            _.transitionType = 'transition';
        }
        _.transformsEnabled = _.options.useTransform && (_.animType !== null && _.animType !== false);
    };


    Slick.prototype.setSlideClasses = function(index) {

        var _ = this,
            centerOffset, allSlides, indexOffset, remainder;

        allSlides = _.$slider
            .find('.slick-slide')
            .removeClass('slick-active slick-center slick-current')
            .attr('aria-hidden', 'true');

        _.$slides
            .eq(index)
            .addClass('slick-current');

        if (_.options.centerMode === true) {

            var evenCoef = _.options.slidesToShow % 2 === 0 ? 1 : 0;

            centerOffset = Math.floor(_.options.slidesToShow / 2);

            if (_.options.infinite === true) {

                if (index >= centerOffset && index <= (_.slideCount - 1) - centerOffset) {
                    _.$slides
                        .slice(index - centerOffset + evenCoef, index + centerOffset + 1)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    indexOffset = _.options.slidesToShow + index;
                    allSlides
                        .slice(indexOffset - centerOffset + 1 + evenCoef, indexOffset + centerOffset + 2)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

                if (index === 0) {

                    allSlides
                        .eq(allSlides.length - 1 - _.options.slidesToShow)
                        .addClass('slick-center');

                } else if (index === _.slideCount - 1) {

                    allSlides
                        .eq(_.options.slidesToShow)
                        .addClass('slick-center');

                }

            }

            _.$slides
                .eq(index)
                .addClass('slick-center');

        } else {

            if (index >= 0 && index <= (_.slideCount - _.options.slidesToShow)) {

                _.$slides
                    .slice(index, index + _.options.slidesToShow)
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else if (allSlides.length <= _.options.slidesToShow) {

                allSlides
                    .addClass('slick-active')
                    .attr('aria-hidden', 'false');

            } else {

                remainder = _.slideCount % _.options.slidesToShow;
                indexOffset = _.options.infinite === true ? _.options.slidesToShow + index : index;

                if (_.options.slidesToShow == _.options.slidesToScroll && (_.slideCount - index) < _.options.slidesToShow) {

                    allSlides
                        .slice(indexOffset - (_.options.slidesToShow - remainder), indexOffset + remainder)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                } else {

                    allSlides
                        .slice(indexOffset, indexOffset + _.options.slidesToShow)
                        .addClass('slick-active')
                        .attr('aria-hidden', 'false');

                }

            }

        }

        if (_.options.lazyLoad === 'ondemand' || _.options.lazyLoad === 'anticipated') {
            _.lazyLoad();
        }
    };

    Slick.prototype.setupInfinite = function() {

        var _ = this,
            i, slideIndex, infiniteCount;

        if (_.options.fade === true) {
            _.options.centerMode = false;
        }

        if (_.options.infinite === true && _.options.fade === false) {

            slideIndex = null;

            if (_.slideCount > _.options.slidesToShow) {

                if (_.options.centerMode === true) {
                    infiniteCount = _.options.slidesToShow + 1;
                } else {
                    infiniteCount = _.options.slidesToShow;
                }

                for (i = _.slideCount; i > (_.slideCount -
                        infiniteCount); i -= 1) {
                    slideIndex = i - 1;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex - _.slideCount)
                        .prependTo(_.$slideTrack).addClass('slick-cloned');
                }
                for (i = 0; i < infiniteCount  + _.slideCount; i += 1) {
                    slideIndex = i;
                    $(_.$slides[slideIndex]).clone(true).attr('id', '')
                        .attr('data-slick-index', slideIndex + _.slideCount)
                        .appendTo(_.$slideTrack).addClass('slick-cloned');
                }
                _.$slideTrack.find('.slick-cloned').find('[id]').each(function() {
                    $(this).attr('id', '');
                });

            }

        }

    };

    Slick.prototype.interrupt = function( toggle ) {

        var _ = this;

        if( !toggle ) {
            _.autoPlay();
        }
        _.interrupted = toggle;

    };

    Slick.prototype.selectHandler = function(event) {

        var _ = this;

        var targetElement =
            $(event.target).is('.slick-slide') ?
                $(event.target) :
                $(event.target).parents('.slick-slide');

        var index = parseInt(targetElement.attr('data-slick-index'));

        if (!index) index = 0;

        if (_.slideCount <= _.options.slidesToShow) {

            _.slideHandler(index, false, true);
            return;

        }

        _.slideHandler(index);

    };

    Slick.prototype.slideHandler = function(index, sync, dontAnimate) {

        var targetSlide, animSlide, oldSlide, slideLeft, targetLeft = null,
            _ = this, navTarget;

        sync = sync || false;

        if (_.animating === true && _.options.waitForAnimate === true) {
            return;
        }

        if (_.options.fade === true && _.currentSlide === index) {
            return;
        }

        if (sync === false) {
            _.asNavFor(index);
        }

        targetSlide = index;
        targetLeft = _.getLeft(targetSlide);
        slideLeft = _.getLeft(_.currentSlide);

        _.currentLeft = _.swipeLeft === null ? slideLeft : _.swipeLeft;

        if (_.options.infinite === false && _.options.centerMode === false && (index < 0 || index > _.getDotCount() * _.options.slidesToScroll)) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        } else if (_.options.infinite === false && _.options.centerMode === true && (index < 0 || index > (_.slideCount - _.options.slidesToScroll))) {
            if (_.options.fade === false) {
                targetSlide = _.currentSlide;
                if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
                    _.animateSlide(slideLeft, function() {
                        _.postSlide(targetSlide);
                    });
                } else {
                    _.postSlide(targetSlide);
                }
            }
            return;
        }

        if ( _.options.autoplay ) {
            clearInterval(_.autoPlayTimer);
        }

        if (targetSlide < 0) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = _.slideCount - (_.slideCount % _.options.slidesToScroll);
            } else {
                animSlide = _.slideCount + targetSlide;
            }
        } else if (targetSlide >= _.slideCount) {
            if (_.slideCount % _.options.slidesToScroll !== 0) {
                animSlide = 0;
            } else {
                animSlide = targetSlide - _.slideCount;
            }
        } else {
            animSlide = targetSlide;
        }

        _.animating = true;

        _.$slider.trigger('beforeChange', [_, _.currentSlide, animSlide]);

        oldSlide = _.currentSlide;
        _.currentSlide = animSlide;

        _.setSlideClasses(_.currentSlide);

        if ( _.options.asNavFor ) {

            navTarget = _.getNavTarget();
            navTarget = navTarget.slick('getSlick');

            if ( navTarget.slideCount <= navTarget.options.slidesToShow ) {
                navTarget.setSlideClasses(_.currentSlide);
            }

        }

        _.updateDots();
        _.updateArrows();

        if (_.options.fade === true) {
            if (dontAnimate !== true) {

                _.fadeSlideOut(oldSlide);

                _.fadeSlide(animSlide, function() {
                    _.postSlide(animSlide);
                });

            } else {
                _.postSlide(animSlide);
            }
            _.animateHeight();
            return;
        }

        if (dontAnimate !== true && _.slideCount > _.options.slidesToShow) {
            _.animateSlide(targetLeft, function() {
                _.postSlide(animSlide);
            });
        } else {
            _.postSlide(animSlide);
        }

    };

    Slick.prototype.startLoad = function() {

        var _ = this;

        if (_.options.arrows === true && _.slideCount > _.options.slidesToShow) {

            _.$prevArrow.hide();
            _.$nextArrow.hide();

        }

        if (_.options.dots === true && _.slideCount > _.options.slidesToShow) {

            _.$dots.hide();

        }

        _.$slider.addClass('slick-loading');

    };

    Slick.prototype.swipeDirection = function() {

        var xDist, yDist, r, swipeAngle, _ = this;

        xDist = _.touchObject.startX - _.touchObject.curX;
        yDist = _.touchObject.startY - _.touchObject.curY;
        r = Math.atan2(yDist, xDist);

        swipeAngle = Math.round(r * 180 / Math.PI);
        if (swipeAngle < 0) {
            swipeAngle = 360 - Math.abs(swipeAngle);
        }

        if ((swipeAngle <= 45) && (swipeAngle >= 0)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle <= 360) && (swipeAngle >= 315)) {
            return (_.options.rtl === false ? 'left' : 'right');
        }
        if ((swipeAngle >= 135) && (swipeAngle <= 225)) {
            return (_.options.rtl === false ? 'right' : 'left');
        }
        if (_.options.verticalSwiping === true) {
            if ((swipeAngle >= 35) && (swipeAngle <= 135)) {
                return 'down';
            } else {
                return 'up';
            }
        }

        return 'vertical';

    };

    Slick.prototype.swipeEnd = function(event) {

        var _ = this,
            slideCount,
            direction;

        _.dragging = false;
        _.swiping = false;

        if (_.scrolling) {
            _.scrolling = false;
            return false;
        }

        _.interrupted = false;
        _.shouldClick = ( _.touchObject.swipeLength > 10 ) ? false : true;

        if ( _.touchObject.curX === undefined ) {
            return false;
        }

        if ( _.touchObject.edgeHit === true ) {
            _.$slider.trigger('edge', [_, _.swipeDirection() ]);
        }

        if ( _.touchObject.swipeLength >= _.touchObject.minSwipe ) {

            direction = _.swipeDirection();

            switch ( direction ) {

                case 'left':
                case 'down':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide + _.getSlideCount() ) :
                            _.currentSlide + _.getSlideCount();

                    _.currentDirection = 0;

                    break;

                case 'right':
                case 'up':

                    slideCount =
                        _.options.swipeToSlide ?
                            _.checkNavigable( _.currentSlide - _.getSlideCount() ) :
                            _.currentSlide - _.getSlideCount();

                    _.currentDirection = 1;

                    break;

                default:


            }

            if( direction != 'vertical' ) {

                _.slideHandler( slideCount );
                _.touchObject = {};
                _.$slider.trigger('swipe', [_, direction ]);

            }

        } else {

            if ( _.touchObject.startX !== _.touchObject.curX ) {

                _.slideHandler( _.currentSlide );
                _.touchObject = {};

            }

        }

    };

    Slick.prototype.swipeHandler = function(event) {

        var _ = this;

        if ((_.options.swipe === false) || ('ontouchend' in document && _.options.swipe === false)) {
            return;
        } else if (_.options.draggable === false && event.type.indexOf('mouse') !== -1) {
            return;
        }

        _.touchObject.fingerCount = event.originalEvent && event.originalEvent.touches !== undefined ?
            event.originalEvent.touches.length : 1;

        _.touchObject.minSwipe = _.listWidth / _.options
            .touchThreshold;

        if (_.options.verticalSwiping === true) {
            _.touchObject.minSwipe = _.listHeight / _.options
                .touchThreshold;
        }

        switch (event.data.action) {

            case 'start':
                _.swipeStart(event);
                break;

            case 'move':
                _.swipeMove(event);
                break;

            case 'end':
                _.swipeEnd(event);
                break;

        }

    };

    Slick.prototype.swipeMove = function(event) {

        var _ = this,
            edgeWasHit = false,
            curLeft, swipeDirection, swipeLength, positionOffset, touches, verticalSwipeLength;

        touches = event.originalEvent !== undefined ? event.originalEvent.touches : null;

        if (!_.dragging || _.scrolling || touches && touches.length !== 1) {
            return false;
        }

        curLeft = _.getLeft(_.currentSlide);

        _.touchObject.curX = touches !== undefined ? touches[0].pageX : event.clientX;
        _.touchObject.curY = touches !== undefined ? touches[0].pageY : event.clientY;

        _.touchObject.swipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curX - _.touchObject.startX, 2)));

        verticalSwipeLength = Math.round(Math.sqrt(
            Math.pow(_.touchObject.curY - _.touchObject.startY, 2)));

        if (!_.options.verticalSwiping && !_.swiping && verticalSwipeLength > 4) {
            _.scrolling = true;
            return false;
        }

        if (_.options.verticalSwiping === true) {
            _.touchObject.swipeLength = verticalSwipeLength;
        }

        swipeDirection = _.swipeDirection();

        if (event.originalEvent !== undefined && _.touchObject.swipeLength > 4) {
            _.swiping = true;
            event.preventDefault();
        }

        positionOffset = (_.options.rtl === false ? 1 : -1) * (_.touchObject.curX > _.touchObject.startX ? 1 : -1);
        if (_.options.verticalSwiping === true) {
            positionOffset = _.touchObject.curY > _.touchObject.startY ? 1 : -1;
        }


        swipeLength = _.touchObject.swipeLength;

        _.touchObject.edgeHit = false;

        if (_.options.infinite === false) {
            if ((_.currentSlide === 0 && swipeDirection === 'right') || (_.currentSlide >= _.getDotCount() && swipeDirection === 'left')) {
                swipeLength = _.touchObject.swipeLength * _.options.edgeFriction;
                _.touchObject.edgeHit = true;
            }
        }

        if (_.options.vertical === false) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        } else {
            _.swipeLeft = curLeft + (swipeLength * (_.$list.height() / _.listWidth)) * positionOffset;
        }
        if (_.options.verticalSwiping === true) {
            _.swipeLeft = curLeft + swipeLength * positionOffset;
        }

        if (_.options.fade === true || _.options.touchMove === false) {
            return false;
        }

        if (_.animating === true) {
            _.swipeLeft = null;
            return false;
        }

        _.setCSS(_.swipeLeft);

    };

    Slick.prototype.swipeStart = function(event) {

        var _ = this,
            touches;

        _.interrupted = true;

        if (_.touchObject.fingerCount !== 1 || _.slideCount <= _.options.slidesToShow) {
            _.touchObject = {};
            return false;
        }

        if (event.originalEvent !== undefined && event.originalEvent.touches !== undefined) {
            touches = event.originalEvent.touches[0];
        }

        _.touchObject.startX = _.touchObject.curX = touches !== undefined ? touches.pageX : event.clientX;
        _.touchObject.startY = _.touchObject.curY = touches !== undefined ? touches.pageY : event.clientY;

        _.dragging = true;

    };

    Slick.prototype.unfilterSlides = Slick.prototype.slickUnfilter = function() {

        var _ = this;

        if (_.$slidesCache !== null) {

            _.unload();

            _.$slideTrack.children(this.options.slide).detach();

            _.$slidesCache.appendTo(_.$slideTrack);

            _.reinit();

        }

    };

    Slick.prototype.unload = function() {

        var _ = this;

        $('.slick-cloned', _.$slider).remove();

        if (_.$dots) {
            _.$dots.remove();
        }

        if (_.$prevArrow && _.htmlExpr.test(_.options.prevArrow)) {
            _.$prevArrow.remove();
        }

        if (_.$nextArrow && _.htmlExpr.test(_.options.nextArrow)) {
            _.$nextArrow.remove();
        }

        _.$slides
            .removeClass('slick-slide slick-active slick-visible slick-current')
            .attr('aria-hidden', 'true')
            .css('width', '');

    };

    Slick.prototype.unslick = function(fromBreakpoint) {

        var _ = this;
        _.$slider.trigger('unslick', [_, fromBreakpoint]);
        _.destroy();

    };

    Slick.prototype.updateArrows = function() {

        var _ = this,
            centerOffset;

        centerOffset = Math.floor(_.options.slidesToShow / 2);

        if ( _.options.arrows === true &&
            _.slideCount > _.options.slidesToShow &&
            !_.options.infinite ) {

            _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');
            _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            if (_.currentSlide === 0) {

                _.$prevArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$nextArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - _.options.slidesToShow && _.options.centerMode === false) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            } else if (_.currentSlide >= _.slideCount - 1 && _.options.centerMode === true) {

                _.$nextArrow.addClass('slick-disabled').attr('aria-disabled', 'true');
                _.$prevArrow.removeClass('slick-disabled').attr('aria-disabled', 'false');

            }

        }

    };

    Slick.prototype.updateDots = function() {

        var _ = this;

        if (_.$dots !== null) {

            _.$dots
                .find('li')
                    .removeClass('slick-active')
                    .end();

            _.$dots
                .find('li')
                .eq(Math.floor(_.currentSlide / _.options.slidesToScroll))
                .addClass('slick-active');

        }

    };

    Slick.prototype.visibility = function() {

        var _ = this;

        if ( _.options.autoplay ) {

            if ( document[_.hidden] ) {

                _.interrupted = true;

            } else {

                _.interrupted = false;

            }

        }

    };

    $.fn.slick = function() {
        var _ = this,
            opt = arguments[0],
            args = Array.prototype.slice.call(arguments, 1),
            l = _.length,
            i,
            ret;
        for (i = 0; i < l; i++) {
            if (typeof opt == 'object' || typeof opt == 'undefined')
                _[i].slick = new Slick(_[i], opt);
            else
                ret = _[i].slick[opt].apply(_[i].slick, args);
            if (typeof ret != 'undefined') return ret;
        }
        return _;
    };

}));


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	!function() {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
!function() {
"use strict";
/*!*********************************!*\
  !*** ./src/arquivos/js/main.js ***!
  \*********************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! regenerator-runtime/runtime.js */ "./node_modules/regenerator-runtime/runtime.js");
/* harmony import */ var regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var proxy_polyfill_proxy_min_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! proxy-polyfill/proxy.min.js */ "./node_modules/proxy-polyfill/proxy.min.js");
/* harmony import */ var proxy_polyfill_proxy_min_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(proxy_polyfill_proxy_min_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lazysizes */ "./node_modules/lazysizes/lazysizes.js");
/* harmony import */ var lazysizes__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lazysizes__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lazysizes_plugins_noscript_ls_noscript__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lazysizes/plugins/noscript/ls.noscript */ "./node_modules/lazysizes/plugins/noscript/ls.noscript.js");
/* harmony import */ var lazysizes_plugins_noscript_ls_noscript__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lazysizes_plugins_noscript_ls_noscript__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! slick-carousel */ "./node_modules/slick-carousel/slick/slick.js");
/* harmony import */ var slick_carousel__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(slick_carousel__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _app_app__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app/app */ "./src/arquivos/js/app/app.js");







window.lazySizesConfig = {
	addClasses: true,
};

_app_app__WEBPACK_IMPORTED_MODULE_5__.default.start();

}();
/******/ })()
;