!function(t){var e={};function n(o){if(e[o])return e[o].exports;var i=e[o]={i:o,l:!1,exports:{}};return t[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,o){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(o,i,function(e){return t[e]}.bind(null,i));return o},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=0)}([function(t,e,n){"use strict";var o,i,r=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function d(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(d,a)}s((o=o.apply(t,e||[])).next())}))},d=this&&this.__importDefault||function(t){return t&&t.__esModule?t:{default:t}};Object.defineProperty(e,"__esModule",{value:!0});const a=d(n(1));$("#exampleModal").on("shown.bs.modal",(function(){$("#myInput").trigger("focus")}));const s=new a.default;null===(o=document.getElementById("btn-create-task"))||void 0===o||o.addEventListener("click",t=>r(void 0,void 0,void 0,(function*(){const e=document.forms[0];yield fetch("/create_task",{method:"post",body:new FormData(e)}),yield c(),$("#taskModal").modal("hide"),t.preventDefault()}))),null===(i=document.getElementById("btn-truncate-tasks"))||void 0===i||i.addEventListener("click",t=>r(void 0,void 0,void 0,(function*(){yield fetch("/truncate_tasks",{method:"post",body:""}),yield c(),t.preventDefault()})));const c=()=>r(void 0,void 0,void 0,(function*(){var t;s.taskList=yield s.getTasks("/get_all_tasks");let e=document.getElementsByClassName("task-list")[0];for(;e.firstChild;)e.removeChild(e.firstChild);for(let e of s.taskList){let n=`\n        <div class="card-group">\n            <div class="card text-white bg-secondary mb-3" style="max-width: 18rem;">\n                <div class="card-header">\n                    <div class="date">${e.created_on}</div>\n                        <button type="button" data-id=${e.id} id="btn-delete-task_${e.id}" class="btn btn-danger btn-delete-task">X</button>\n                    </div>\n                <div class="card-body">\n                    <h5 class="card-title">${e.name}</h5>\n                    <p class="card-text">${e.comment?e.comment:""}</p>\n                </div>\n            </div>\n        </div>\n        `,o=document.getElementsByClassName("task-list")[0];null==o||o.insertAdjacentHTML("beforeend",n),null===(t=document.getElementById("btn-delete-task_"+e.id))||void 0===t||t.addEventListener("click",t=>r(void 0,void 0,void 0,(function*(){const e=t.target.dataset.id;yield fetch("/remove_task/"+e,{method:"delete",body:""}),yield c(),t.preventDefault()})))}}));c()},function(t,e,n){"use strict";var o=this&&this.__awaiter||function(t,e,n,o){return new(n||(n=Promise))((function(i,r){function d(t){try{s(o.next(t))}catch(t){r(t)}}function a(t){try{s(o.throw(t))}catch(t){r(t)}}function s(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(d,a)}s((o=o.apply(t,e||[])).next())}))};Object.defineProperty(e,"__esModule",{value:!0});e.default=class{constructor(){this.taskList=[]}getTasks(t){return o(this,void 0,void 0,(function*(){let e=yield fetch(t);try{if(e.ok){let t=yield e.json();return console.log(t),Promise.resolve(t)}console.warn("Ошибка HTTP: "+e.status)}catch(t){console.error("Обнаружена ошибка : "+t)}}))}}}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3RhdGljL2luZGV4LnRzIiwid2VicGFjazovLy8uL3N0YXRpYy90YXNrLnRzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsIlN5bWJvbCIsInRvU3RyaW5nVGFnIiwidmFsdWUiLCJ0IiwibW9kZSIsIl9fZXNNb2R1bGUiLCJucyIsImNyZWF0ZSIsImtleSIsImJpbmQiLCJuIiwib2JqZWN0IiwicHJvcGVydHkiLCJwcm90b3R5cGUiLCJoYXNPd25Qcm9wZXJ0eSIsInAiLCJzIiwiJCIsIm9uIiwidHJpZ2dlciIsInRhc2siLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJmb3JtIiwiZm9ybXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJGb3JtRGF0YSIsImJ1aWxkVGFza3MiLCJtb2RhbCIsInByZXZlbnREZWZhdWx0IiwidGFza0xpc3QiLCJnZXRUYXNrcyIsImxpc3RFbGVtZW50IiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZpcnN0Q2hpbGQiLCJyZW1vdmVDaGlsZCIsInRhc2tPYmoiLCJpdGVtIiwiY3JlYXRlZF9vbiIsImlkIiwiY29tbWVudCIsImluc2VydEFkamFjZW50SFRNTCIsInRhcmdldCIsImRhdGFzZXQiLCJ0aGlzIiwidXJsIiwicmVzcG9uc2UiLCJvayIsImpzb24iLCJjb25zb2xlIiwibG9nIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ3YXJuIiwic3RhdHVzIiwiZXJyIiwiZXJyb3IiXSwibWFwcGluZ3MiOiJhQUNFLElBQUlBLEVBQW1CLEdBR3ZCLFNBQVNDLEVBQW9CQyxHQUc1QixHQUFHRixFQUFpQkUsR0FDbkIsT0FBT0YsRUFBaUJFLEdBQVVDLFFBR25DLElBQUlDLEVBQVNKLEVBQWlCRSxHQUFZLENBQ3pDRyxFQUFHSCxFQUNISSxHQUFHLEVBQ0hILFFBQVMsSUFVVixPQU5BSSxFQUFRTCxHQUFVTSxLQUFLSixFQUFPRCxRQUFTQyxFQUFRQSxFQUFPRCxRQUFTRixHQUcvREcsRUFBT0UsR0FBSSxFQUdKRixFQUFPRCxRQUtmRixFQUFvQlEsRUFBSUYsRUFHeEJOLEVBQW9CUyxFQUFJVixFQUd4QkMsRUFBb0JVLEVBQUksU0FBU1IsRUFBU1MsRUFBTUMsR0FDM0NaLEVBQW9CYSxFQUFFWCxFQUFTUyxJQUNsQ0csT0FBT0MsZUFBZWIsRUFBU1MsRUFBTSxDQUFFSyxZQUFZLEVBQU1DLElBQUtMLEtBS2hFWixFQUFvQmtCLEVBQUksU0FBU2hCLEdBQ1gsb0JBQVhpQixRQUEwQkEsT0FBT0MsYUFDMUNOLE9BQU9DLGVBQWViLEVBQVNpQixPQUFPQyxZQUFhLENBQUVDLE1BQU8sV0FFN0RQLE9BQU9DLGVBQWViLEVBQVMsYUFBYyxDQUFFbUIsT0FBTyxLQVF2RHJCLEVBQW9Cc0IsRUFBSSxTQUFTRCxFQUFPRSxHQUV2QyxHQURVLEVBQVBBLElBQVVGLEVBQVFyQixFQUFvQnFCLElBQy9CLEVBQVBFLEVBQVUsT0FBT0YsRUFDcEIsR0FBVyxFQUFQRSxHQUE4QixpQkFBVkYsR0FBc0JBLEdBQVNBLEVBQU1HLFdBQVksT0FBT0gsRUFDaEYsSUFBSUksRUFBS1gsT0FBT1ksT0FBTyxNQUd2QixHQUZBMUIsRUFBb0JrQixFQUFFTyxHQUN0QlgsT0FBT0MsZUFBZVUsRUFBSSxVQUFXLENBQUVULFlBQVksRUFBTUssTUFBT0EsSUFDdEQsRUFBUEUsR0FBNEIsaUJBQVRGLEVBQW1CLElBQUksSUFBSU0sS0FBT04sRUFBT3JCLEVBQW9CVSxFQUFFZSxFQUFJRSxFQUFLLFNBQVNBLEdBQU8sT0FBT04sRUFBTU0sSUFBUUMsS0FBSyxLQUFNRCxJQUM5SSxPQUFPRixHQUlSekIsRUFBb0I2QixFQUFJLFNBQVMxQixHQUNoQyxJQUFJUyxFQUFTVCxHQUFVQSxFQUFPcUIsV0FDN0IsV0FBd0IsT0FBT3JCLEVBQWdCLFNBQy9DLFdBQThCLE9BQU9BLEdBRXRDLE9BREFILEVBQW9CVSxFQUFFRSxFQUFRLElBQUtBLEdBQzVCQSxHQUlSWixFQUFvQmEsRUFBSSxTQUFTaUIsRUFBUUMsR0FBWSxPQUFPakIsT0FBT2tCLFVBQVVDLGVBQWUxQixLQUFLdUIsRUFBUUMsSUFHekcvQixFQUFvQmtDLEVBQUksR0FJakJsQyxFQUFvQkEsRUFBb0JtQyxFQUFJLEcsb2VDbEZyRCxnQkFDQUMsRUFBRSxpQkFBaUJDLEdBQUcsa0JBQWtCLFdBQ3BDRCxFQUFFLFlBQVlFLFFBQVEsWUFFMUIsTUFBTUMsRUFBTyxJQUFJLFVBU3lCLFFBQTFDLEVBQUFDLFNBQVNDLGVBQWUsMEJBQWtCLFNBQUVDLGlCQUFpQixRQUFlQyxHQUFLLG9DQUM3RSxNQUFNQyxFQUFPSixTQUFTSyxNQUFNLFNBQ3RCQyxNQVBZLGVBT1MsQ0FBQ0MsT0FBTyxPQUFRQyxLQUFNLElBQUlDLFNBQVNMLFdBQ3hETSxJQUVMZCxFQUFFLGNBQXNCZSxNQUFNLFFBQy9CUixFQUFFUyxxQkFLdUMsUUFBN0MsRUFBQVosU0FBU0MsZUFBZSw2QkFBcUIsU0FBRUMsaUJBQWlCLFFBQWVDLEdBQUssMENBQzFFRyxNQW5CWSxrQkFtQlMsQ0FBQ0MsT0FBTyxPQUFPQyxLQUFLLFdBQ3pDRSxJQUNOUCxFQUFFUyxxQkFLTixNQUFNRixFQUFhLElBQWEsT0FBRCw2QixNQUMzQlgsRUFBS2MsZUFBaUJkLEVBQUtlLFNBNUJkLGtCQThCYixJQUFJQyxFQUFjZixTQUFTZ0IsdUJBQXVCLGFBQWEsR0FDL0QsS0FBT0QsRUFBWUUsWUFDZkYsRUFBWUcsWUFBWUgsRUFBWUUsWUFFeEMsSUFBSSxJQUFJRSxLQUFXcEIsRUFBS2MsU0FBUyxDQUU3QixJQUFJTyxFQUFPLCtNQUlxQkQsRUFBUUUsMkVBQ1FGLEVBQVFHLDBCQUEwQkgsRUFBUUcsMEtBR3JESCxFQUFRaEQsdURBQ1ZnRCxFQUFRSSxRQUFVSixFQUFRSSxRQUFVLCtFQUtuRVIsRUFBY2YsU0FBU2dCLHVCQUF1QixhQUFhLEdBQy9ERCxXQUFhUyxtQkFBbUIsWUFBWUosR0FFWSxRQUF4RCxFQUFBcEIsU0FBU0MsZUFBZSxtQkFBbUJrQixFQUFRRyxXQUFLLFNBQUVwQixpQkFBaUIsUUFBZUMsR0FBUyxvQ0FDL0YsTUFBTW1CLEVBQUtuQixFQUFFc0IsT0FBT0MsUUFBUUosU0FDdEJoQixNQUFNLGdCQUFvQmdCLEVBQU0sQ0FBQ2YsT0FBTyxTQUFTQyxLQUFLLFdBQ3RERSxJQUNOUCxFQUFFUyx5QkFRVkYsSyw4WUMvQ0osVUF2QkEsTUFFSSxjQUNJaUIsS0FBS2QsU0FBVyxHQUdmLFNBQVNlLEcseUNBQ1YsSUFBSUMsUUFBaUJ2QixNQUFNc0IsR0FDM0IsSUFDSSxHQUFJQyxFQUFTQyxHQUFJLENBQ2IsSUFBSUMsUUFBYUYsRUFBU0UsT0FFMUIsT0FEQUMsUUFBUUMsSUFBSUYsR0FDTEcsUUFBUUMsUUFBUUosR0FFdkJDLFFBQVFJLEtBQUssZ0JBQWtCUCxFQUFTUSxRQUdoRCxNQUFNQyxHQUNGTixRQUFRTyxNQUFNLHVCQUF1QkQiLCJmaWxlIjoic2NyaXB0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDApO1xuIiwiaW1wb3J0IFRhc2sgZnJvbSAnLi90YXNrJztcbiQoJyNleGFtcGxlTW9kYWwnKS5vbignc2hvd24uYnMubW9kYWwnLCBmdW5jdGlvbiAoKSB7XG4gICAgJCgnI215SW5wdXQnKS50cmlnZ2VyKCdmb2N1cycpXG4gIH0pXG5jb25zdCB0YXNrID0gbmV3IFRhc2s7XG5jb25zdCBVcmxUYXNrcyA9ICcvZ2V0X2FsbF90YXNrcyc7XG5jb25zdCBVcmxDbGVhclRhc2tzID0gJy90cnVuY2F0ZV90YXNrcyc7XG5jb25zdCBVcmxSZW1vdmVUYXNrID0gJy9yZW1vdmVfdGFzaydcbmNvbnN0IFVybENyZWF0ZVRhc2sgPSAnL2NyZWF0ZV90YXNrJ1xuXG4vKipcbiAqINCe0LHRgNCw0LHQvtGC0YfQuNC6INGB0L7Qt9C00LDQvdC40Y8g0L3QvtCy0L7QuSDQt9Cw0LTQsNGH0LhcbiAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJidG4tY3JlYXRlLXRhc2tcIik/LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLGFzeW5jIChlKSA9PntcbiAgICBjb25zdCBmb3JtID0gZG9jdW1lbnQuZm9ybXNbMF07XG4gICAgYXdhaXQgZmV0Y2goVXJsQ3JlYXRlVGFzaywge21ldGhvZDoncG9zdCcsIGJvZHk6IG5ldyBGb3JtRGF0YShmb3JtKX0pO1xuICAgIGF3YWl0IGJ1aWxkVGFza3MoKTtcbiAgICAvL1RPRE8gdHlwZSBhbnlcbiAgICAoJCgnI3Rhc2tNb2RhbCcpIGFzIGFueSkubW9kYWwoJ2hpZGUnKTtcbiAgICBlLnByZXZlbnREZWZhdWx0KCk7XG59KVxuLyoqXG4gKiDQntCx0YDQsNCx0L7RgtGH0LjQuiDRg9C00LDQu9C10L3QuNC1INCy0YHQtdGFINGC0LXQutGD0YnQuNGFINC30LDQtNCw0YdcbiAqL1xuZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2J0bi10cnVuY2F0ZS10YXNrcycpPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXN5bmMgKGUpID0+e1xuICAgIGF3YWl0IGZldGNoKFVybENsZWFyVGFza3MsIHttZXRob2Q6J3Bvc3QnLGJvZHk6Jyd9KTtcbiAgICBhd2FpdCBidWlsZFRhc2tzKCk7XG4gICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xufSlcbi8qKlxuICog0J/QvtGB0YLRgNC+0LXQvdC40LUg0YHQv9C40YHQutCwINCy0YHQtdGFINGC0LXQutGD0YnQuNGFINC30LDQtNCw0YcsINGF0YDQsNC90Y/RidC40YXRgdGPINCyINCx0LDQt9C1XG4gKi9cbmNvbnN0IGJ1aWxkVGFza3MgPSBhc3luYyAoICkgPT4ge1xuICAgIHRhc2sudGFza0xpc3QgPSBhd2FpdCB0YXNrLmdldFRhc2tzKFVybFRhc2tzKTtcbiAgICAvLyDQvtGH0LjRgdGC0LrQsCDRgdC/0LjRgdC60LAg0LfQsNC00LDRhyDQvdCwINGB0YLRgNCw0L3QuNGG0LVcbiAgICBsZXQgbGlzdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCd0YXNrLWxpc3QnKVswXTtcbiAgICB3aGlsZSAobGlzdEVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgICBsaXN0RWxlbWVudC5yZW1vdmVDaGlsZChsaXN0RWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgZm9yKGxldCB0YXNrT2JqIG9mIHRhc2sudGFza0xpc3Qpe1xuXG4gICAgICAgIGxldCBpdGVtID0gYFxuICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1ncm91cFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQgdGV4dC13aGl0ZSBiZy1zZWNvbmRhcnkgbWItM1wiIHN0eWxlPVwibWF4LXdpZHRoOiAxOHJlbTtcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1oZWFkZXJcIj5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRhdGVcIj4ke3Rhc2tPYmouY3JlYXRlZF9vbn08L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxidXR0b24gdHlwZT1cImJ1dHRvblwiIGRhdGEtaWQ9JHt0YXNrT2JqLmlkfSBpZD1cImJ0bi1kZWxldGUtdGFza18ke3Rhc2tPYmouaWR9XCIgY2xhc3M9XCJidG4gYnRuLWRhbmdlciBidG4tZGVsZXRlLXRhc2tcIj5YPC9idXR0b24+XG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgICAgPGg1IGNsYXNzPVwiY2FyZC10aXRsZVwiPiR7dGFza09iai5uYW1lfTwvaDU+XG4gICAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiY2FyZC10ZXh0XCI+JHt0YXNrT2JqLmNvbW1lbnQgPyB0YXNrT2JqLmNvbW1lbnQgOiAnJ308L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIGA7XG4gICAgICAgIGxldCBsaXN0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ3Rhc2stbGlzdCcpWzBdO1xuICAgICAgICBsaXN0RWxlbWVudD8uaW5zZXJ0QWRqYWNlbnRIVE1MKCdiZWZvcmVlbmQnLGl0ZW0pO1xuICAgICAgICAvLyDQvdCwINC60LDQttC00YPRjiDQutC90L7Qv9C60YMg0LLQtdGI0LDQtdC8INGB0LLQvtC5INC+0LHRgNCw0LHQvtGC0YfQuNC6INGD0LTQsNC70LXQvdC40Y8g0LfQsNC00LDRh9C4XG4gICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBidG4tZGVsZXRlLXRhc2tfJHt0YXNrT2JqLmlkfWApPy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsYXN5bmMgKGU6YW55KSA9PntcbiAgICAgICAgICAgIGNvbnN0IGlkID0gZS50YXJnZXQuZGF0YXNldC5pZDtcbiAgICAgICAgICAgIGF3YWl0IGZldGNoKGAke1VybFJlbW92ZVRhc2t9LyR7aWR9YCwge21ldGhvZDonZGVsZXRlJyxib2R5OicnfSk7XG4gICAgICAgICAgICBhd2FpdCBidWlsZFRhc2tzKCk7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbi8qKlxuICog0JfQsNC/0YPRgdC6INGC0LXQutGD0YnQtdCz0L4g0YTRg9C90LrRhtC40L7QvdCw0LvQsCDQv9GA0LjQu9C+0LbQtdC90LjRj1xuICovXG5jb25zdCBydW4gPSAoKSA9PiB7XG4gICAgYnVpbGRUYXNrcygpO1xuXG59XG5cbnJ1bigpOyIsImNsYXNzIFRhc2sge1xuICAgIHRhc2tMaXN0OiBhbnlbXTtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy50YXNrTGlzdCA9IFtcbiAgICAgICAgXVxuICAgIH1cbiAgIGFzeW5jIGdldFRhc2tzKHVybDpzdHJpbmcpe1xuICAgICAgICBsZXQgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCh1cmwpO1xuICAgICAgICB0cnl7XG4gICAgICAgICAgICBpZiAocmVzcG9uc2Uub2spIHsgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgbGV0IGpzb24gPSBhd2FpdCByZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coanNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShqc29uKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXCLQntGI0LjQsdC60LAgSFRUUDogXCIgKyByZXNwb25zZS5zdGF0dXMpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2F0Y2goZXJyKXtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYNCe0LHQvdCw0YDRg9C20LXQvdCwINC+0YjQuNCx0LrQsCA6ICR7ZXJyfWApXG4gICAgICAgIH1cblxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IFRhc2s7Il0sInNvdXJjZVJvb3QiOiIifQ==