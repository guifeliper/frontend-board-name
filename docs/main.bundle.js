(()=>{"use strict";const t=function(){function t(t,e){this.email=t,this.isValid=e,this.validEmail='<span class="email">'+this.email+'\n                          <a class="js-delete-tag" title="Remove tag">\n                            x\n                          </a>\n                        </span>',this.invalidEmail='<span class="emailInvalid">'+this.email+'\n                            <a class="js-delete-tag" title="Remove tag">\n                              x\n                            </a>\n                          </span>'}return t.prototype.deleteTag=function(t){var e=t.parentElement;null==e||e.remove()},t.prototype.stringToHTML=function(t){var e=this,n=(new DOMParser).parseFromString(t,"text/html");return n.getElementsByClassName("js-delete-tag")[0].addEventListener("click",(function(t){t.preventDefault(),e.deleteTag(this)})),n.body},t.prototype.getEmailHTML=function(){return this.isValid?this.stringToHTML(this.validEmail):this.stringToHTML(this.invalidEmail)},t}(),e=function(){function e(t){this.email=t}return e.prototype.checkEmail=function(){return new RegExp(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/).test(this.email)},e.prototype.render=function(e){var n=new t(this.email,this.checkEmail()),i=e.lastElementChild,a=n.getEmailHTML();0!=a.childNodes.length&&e.insertBefore(a.childNodes[0],i)},e}();function n(t,n){t.trim().split(",").filter((function(t){return t})).forEach((function(t){!function(t,e){t.render(e)}(new e(t.trim()),n)}))}var i,a,l,s;i=document.getElementById("emailsContainer"),a=document.getElementById("emailsInput"),l=document.getElementById("addEmail"),s=document.getElementById("getEmails"),a.addEventListener("keyup",(function(t){this.value.length<3||("Enter"!==t.key&&","!==t.key||(n(this.value,i),this.value=""),a.focus())})),a.addEventListener("focusout",(function(t){this.value.length<3||(n(this.value,i),this.value="")})),s.addEventListener("click",(function(t){var e=function(t){return t.getElementsByClassName("email").length}(i);e>1?alert("You have "+e+" valid emails"):alert("You have "+e+" valid email"),a.focus()})),l.addEventListener("click",(function(t){n(function(){for(var t="abcdefghijklmno",e="",n=0;n<6;n++)e+=t.charAt(Math.round(t.length*Math.random()));e+="@";for(var i=0;i<4;i++)e+=t.charAt(Math.round(t.length*Math.random()));return e+".com"}(),i),a.focus()})),i.addEventListener("click",(function(t){a.focus()}))})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9XRUJQQUNLLVRZUEVTQ1JJUFQvLi9zcmMvY2xhc3Nlcy9FbWFpbC50cyIsIndlYnBhY2s6Ly9XRUJQQUNLLVRZUEVTQ1JJUFQvLi9zcmMvY2xhc3Nlcy9FbWFpbHNFZGl0b3IudHMiLCJ3ZWJwYWNrOi8vV0VCUEFDSy1UWVBFU0NSSVBULy4vc3JjL3V0aWxzL2luc2VydEVtYWlscy50cyIsIndlYnBhY2s6Ly9XRUJQQUNLLVRZUEVTQ1JJUFQvLi9zcmMvdXRpbHMvcmVuZGVyRW1haWwudHMiLCJ3ZWJwYWNrOi8vV0VCUEFDSy1UWVBFU0NSSVBULy4vc3JjL2luZGV4LnRzIiwid2VicGFjazovL1dFQlBBQ0stVFlQRVNDUklQVC8uL3NyYy91dGlscy9nZXRWYWxpZEVtYWlscy50cyIsIndlYnBhY2s6Ly9XRUJQQUNLLVRZUEVTQ1JJUFQvLi9zcmMvdXRpbHMvZ2VuZXJhdGVGYWtlRW1haWwudHMiXSwibmFtZXMiOlsiZW1haWwiLCJpc1ZhbGlkIiwidGhpcyIsInZhbGlkRW1haWwiLCJpbnZhbGlkRW1haWwiLCJkZWxldGVUYWciLCJlbGVtZW50IiwicGFyZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZSIsInN0cmluZ1RvSFRNTCIsInN0ciIsInNlbGYiLCJkb2MiLCJET01QYXJzZXIiLCJwYXJzZUZyb21TdHJpbmciLCJnZXRFbGVtZW50c0J5Q2xhc3NOYW1lIiwiYWRkRXZlbnRMaXN0ZW5lciIsImUiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJnZXRFbWFpbEhUTUwiLCJjaGVja0VtYWlsIiwiUmVnRXhwIiwidGVzdCIsInJlbmRlciIsImNvbnRhaW5lciIsImh0bWxUZW1wbGF0ZSIsImlucHV0SXRlbSIsImxhc3RFbGVtZW50Q2hpbGQiLCJjaGlsZE5vZGVzIiwibGVuZ3RoIiwiaW5zZXJ0QmVmb3JlIiwiaW5zZXJ0RW1haWxzIiwiaW5wdXQiLCJ0cmltIiwic3BsaXQiLCJmaWx0ZXIiLCJ4IiwiZm9yRWFjaCIsImVtYWlsRWRpdG9yIiwicmVuZGVyRW1haWwiLCJidXR0b25BZGQiLCJidXR0b25HZXRFbWFpbCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ2YWx1ZSIsImtleSIsImZvY3VzIiwidmFsaWRFbWFpbHNDb3VudCIsImdldFZhbGlkRW1haWxzIiwiYWxlcnQiLCJzdHJWYWx1ZXMiLCJzdHJFbWFpbCIsImkiLCJjaGFyQXQiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJqIiwiZ2VuZXJhdGVGYWtlRW1haWwiXSwibWFwcGluZ3MiOiIyQkFBQSxXQU1FLFdBQVlBLEVBQWVDLEdBQ3pCQyxLQUFLRixNQUFRQSxFQUNiRSxLQUFLRCxRQUFVQSxFQUNmQyxLQUFLQyxXQUFhLHVCQUF1QkQsS0FBS0YsTUFBSywyS0FLbkRFLEtBQUtFLGFBQWUsOEJBQThCRixLQUFLRixNQUFLLG1MQWlDaEUsT0ExQlUsWUFBQUssVUFBUixTQUFrQkMsR0FDaEIsSUFBTUMsRUFBU0QsRUFBUUUsY0FDdkJELFdBQVFFLFVBR0YsWUFBQUMsYUFBUixTQUFxQkMsR0FDbkIsSUFBTUMsRUFBT1YsS0FFVFcsR0FEUyxJQUFJQyxXQUNBQyxnQkFBZ0JKLEVBQUssYUFNdEMsT0FMMkJFLEVBQUlHLHVCQUF1QixpQkFBaUIsR0FDL0RDLGlCQUFpQixTQUFTLFNBQVVDLEdBQzFDQSxFQUFFQyxpQkFDRlAsRUFBS1AsVUFBVUgsU0FFVlcsRUFBSU8sTUFHYixZQUFBQyxhQUFBLFdBQ0UsT0FBSW5CLEtBQUtELFFBQ0FDLEtBQUtRLGFBQWFSLEtBQUtDLFlBRXZCRCxLQUFLUSxhQUFhUixLQUFLRSxlQUtwQyxFQS9DQSxHLEVDQ0EsV0FHRSxXQUFZSixHQUNWRSxLQUFLRixNQUFRQSxFQWVqQixPQVpFLFlBQUFzQixXQUFBLFdBRUUsT0FEZSxJQUFJQyxPQUFPLDBKQUNaQyxLQUFLdEIsS0FBS0YsUUFHMUIsWUFBQXlCLE9BQUEsU0FBT0MsR0FDTCxJQUFNQyxFQUFlLElBQUksRUFBTXpCLEtBQUtGLE1BQU9FLEtBQUtvQixjQUMxQ00sRUFBWUYsRUFBVUcsaUJBQ3RCVCxFQUFPTyxFQUFhTixlQUNHLEdBQTFCRCxFQUFLVSxXQUFXQyxRQUNuQkwsRUFBVU0sYUFBYVosRUFBS1UsV0FBVyxHQUFJRixJQUUvQyxFQW5CQSxHQ0VlLFNBQVNLLEVBQWFDLEVBQWVSLEdBQ25DUSxFQUFNQyxPQUFPQyxNQUFNLEtBQUtDLFFBQU8sU0FBQUMsR0FBSyxPQUFBQSxLQUMxQ0MsU0FBUSxTQUFDdkMsSUNITCxTQUFxQndDLEVBQTJCZCxHQUM3RGMsRUFBWWYsT0FBT0MsR0RJakJlLENBRG9CLElBQUksRUFBYXpDLEVBQU1tQyxRQUNsQlQsTUVKN0IsSUFBV0EsRUFBd0JRLEVBQXlCUSxFQUE4QkMsRUFBL0VqQixFQXNDUmtCLFNBQVNDLGVBQWUsbUJBdENRWCxFQXVDakNVLFNBQVNDLGVBQWUsZUF2Q2tDSCxFQXdDMURFLFNBQVNDLGVBQWUsWUF4Q2dFRixFQXlDeEZDLFNBQVNDLGVBQWUsYUF2Q3hCWCxFQUFNakIsaUJBQWlCLFNBQVMsU0FBVUMsR0FDcENoQixLQUFLNEMsTUFBTWYsT0FBUyxJQUNWLFVBQVZiLEVBQUU2QixLQUE2QixNQUFWN0IsRUFBRTZCLE1BQ3pCZCxFQUFhL0IsS0FBSzRDLE1BQU9wQixHQUN6QnhCLEtBQUs0QyxNQUFRLElBRWZaLEVBQU1jLFlBR1JkLEVBQU1qQixpQkFBaUIsWUFBWSxTQUFVQyxHQUN2Q2hCLEtBQUs0QyxNQUFNZixPQUFTLElBQ3hCRSxFQUFhL0IsS0FBSzRDLE1BQU9wQixHQUN6QnhCLEtBQUs0QyxNQUFRLE9BR2ZILEVBQWUxQixpQkFBaUIsU0FBUyxTQUFVQyxHQUNqRCxJQUFJK0IsRUNyQk8sU0FBd0J2QixHQUVyQyxPQURvQkEsRUFBVVYsdUJBQXVCLFNBQ2xDZSxPRG1CY21CLENBQWV4QixHQUMxQ3VCLEVBQW1CLEVBQ3JCRSxNQUFNLFlBQVlGLEVBQWdCLGlCQUVsQ0UsTUFBTSxZQUFZRixFQUFnQixnQkFFcENmLEVBQU1jLFdBR1JOLEVBQVV6QixpQkFBaUIsU0FBUyxTQUFVQyxHQUU1Q2UsRUVoQ1csV0FNYixJQUxBLElBQUltQixFQUFZLGtCQUNaQyxFQUFXLEdBSU5DLEVBQUksRUFBR0EsRUFBSSxFQUFHQSxJQUVyQkQsR0FEU0QsRUFBVUcsT0FBT0MsS0FBS0MsTUFBTUwsRUFBVXJCLE9BQVN5QixLQUFLRSxXQUkvREwsR0FBc0IsSUFHdEIsSUFBSyxJQUFJTSxFQUFJLEVBQUdBLEVBQUksRUFBR0EsSUFFckJOLEdBRFNELEVBQVVHLE9BQU9DLEtBQUtDLE1BQU1MLEVBQVVyQixPQUFTeUIsS0FBS0UsV0FJL0QsT0FEQUwsRUFBc0IsT0ZhSE8sR0FDTWxDLEdBQ3ZCUSxFQUFNYyxXQUdSdEIsRUFBVVQsaUJBQWlCLFNBQVMsU0FBVUMsR0FDNUNnQixFQUFNYyxZIiwiZmlsZSI6Im1haW4uYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWwge1xuICBlbWFpbDogc3RyaW5nO1xuICBpc1ZhbGlkOiBCb29sZWFuO1xuICB2YWxpZEVtYWlsOiBzdHJpbmc7XG4gIGludmFsaWRFbWFpbDogc3RyaW5nO1xuXG4gIGNvbnN0cnVjdG9yKGVtYWlsOiBzdHJpbmcsIGlzVmFsaWQ6IEJvb2xlYW4pIHtcbiAgICB0aGlzLmVtYWlsID0gZW1haWw7XG4gICAgdGhpcy5pc1ZhbGlkID0gaXNWYWxpZDtcbiAgICB0aGlzLnZhbGlkRW1haWwgPSBgPHNwYW4gY2xhc3M9XCJlbWFpbFwiPiR7dGhpcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgY2xhc3M9XCJqcy1kZWxldGUtdGFnXCIgdGl0bGU9XCJSZW1vdmUgdGFnXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+YDtcbiAgICB0aGlzLmludmFsaWRFbWFpbCA9IGA8c3BhbiBjbGFzcz1cImVtYWlsSW52YWxpZFwiPiR7dGhpcy5lbWFpbH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImpzLWRlbGV0ZS10YWdcIiB0aXRsZT1cIlJlbW92ZSB0YWdcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5gO1xuICB9XG5cbiAgcHJpdmF0ZSBkZWxldGVUYWcoZWxlbWVudDogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBwYXJlbnQgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQ7XG4gICAgcGFyZW50Py5yZW1vdmUoKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RyaW5nVG9IVE1MKHN0cjogc3RyaW5nKTogSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgIHZhciBwYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgdmFyIGRvYyA9IHBhcnNlci5wYXJzZUZyb21TdHJpbmcoc3RyLCAndGV4dC9odG1sJyk7XG4gICAgbGV0IGVsZW1lbnQ6IEhUTUxFbGVtZW50ID0gZG9jLmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLWRlbGV0ZS10YWcnKVswXSBhcyBIVE1MRWxlbWVudDtcbiAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgIHNlbGYuZGVsZXRlVGFnKHRoaXMpO1xuICAgIH0pO1xuICAgIHJldHVybiBkb2MuYm9keTtcbiAgfTtcblxuICBnZXRFbWFpbEhUTUwoKTogSFRNTEVsZW1lbnQge1xuICAgIGlmICh0aGlzLmlzVmFsaWQpIHtcbiAgICAgIHJldHVybiB0aGlzLnN0cmluZ1RvSFRNTCh0aGlzLnZhbGlkRW1haWwpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gdGhpcy5zdHJpbmdUb0hUTUwodGhpcy5pbnZhbGlkRW1haWwpO1xuICAgIH1cbiAgfVxuXG5cbn1cbiIsImltcG9ydCBFbWFpbCBmcm9tICcuL0VtYWlsJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsc0VkaXRvciB7XG4gIGVtYWlsOiBzdHJpbmc7XG5cbiAgY29uc3RydWN0b3IoZW1haWw6IHN0cmluZykge1xuICAgIHRoaXMuZW1haWwgPSBlbWFpbDtcbiAgfVxuXG4gIGNoZWNrRW1haWwoKTogQm9vbGVhbiB7XG4gICAgY29uc3QgcmVnZXhwID0gbmV3IFJlZ0V4cCgvXigoW148PigpXFxbXFxdXFxcXC4sOzpcXHNAXCJdKyhcXC5bXjw+KClcXFtcXF1cXFxcLiw7Olxcc0BcIl0rKSopfChcIi4rXCIpKUAoKFxcW1swLTldezEsM31cXC5bMC05XXsxLDN9XFwuWzAtOV17MSwzfVxcLlswLTldezEsM31dKXwoKFthLXpBLVpcXC0wLTldK1xcLikrW2EtekEtWl17Mix9KSkkLyk7XG4gICAgcmV0dXJuIHJlZ2V4cC50ZXN0KHRoaXMuZW1haWwpO1xuICB9XG5cbiAgcmVuZGVyKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiB2b2lkIHtcbiAgICBjb25zdCBodG1sVGVtcGxhdGUgPSBuZXcgRW1haWwodGhpcy5lbWFpbCwgdGhpcy5jaGVja0VtYWlsKCkpXG4gICAgY29uc3QgaW5wdXRJdGVtID0gY29udGFpbmVyLmxhc3RFbGVtZW50Q2hpbGQ7XG4gICAgY29uc3QgYm9keSA9IGh0bWxUZW1wbGF0ZS5nZXRFbWFpbEhUTUwoKTtcbiAgICBpZihib2R5LmNoaWxkTm9kZXMubGVuZ3RoID09IDApIHJldHVybjtcbiAgICBjb250YWluZXIuaW5zZXJ0QmVmb3JlKGJvZHkuY2hpbGROb2Rlc1swXSwgaW5wdXRJdGVtKTtcbiAgfVxufVxuIiwiaW1wb3J0IHsgRW1haWxzRWRpdG9yIH0gZnJvbSAnLi4vY2xhc3Nlcyc7XG5pbXBvcnQgcmVuZGVyRW1haWwgZnJvbSAnLi9yZW5kZXJFbWFpbCc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGluc2VydEVtYWlscyhpbnB1dDogc3RyaW5nLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIHZhciBlbWFpbEFyciA9IGlucHV0LnRyaW0oKS5zcGxpdCgnLCcpLmZpbHRlcih4ID0+IHgpO1xuICBlbWFpbEFyci5mb3JFYWNoKChlbWFpbCkgPT4ge1xuICAgIGNvbnN0IGVtYWlsRWRpdG9yID0gbmV3IEVtYWlsc0VkaXRvcihlbWFpbC50cmltKCkpO1xuICAgIHJlbmRlckVtYWlsKGVtYWlsRWRpdG9yLCBjb250YWluZXIpO1xuICB9KTtcbn1cbiIsImltcG9ydCB7IEVtYWlsc0VkaXRvciB9IGZyb20gJy4uL2NsYXNzZXMnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZW5kZXJFbWFpbChlbWFpbEVkaXRvcjogRW1haWxzRWRpdG9yLCBjb250YWluZXI6IEhUTUxFbGVtZW50KTogdm9pZCB7XG4gIGVtYWlsRWRpdG9yLnJlbmRlcihjb250YWluZXIpO1xufVxuIiwiaW1wb3J0IHsgZ2V0VmFsaWRFbWFpbHMsIGdlbmVyYXRlRmFrZUVtYWlsLCBpbnNlcnRFbWFpbHMgfSBmcm9tICcuL3V0aWxzJztcblxuXG4oZnVuY3Rpb24gKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQsIGlucHV0OiBIVE1MSW5wdXRFbGVtZW50LCBidXR0b25BZGQ6IEhUTUxCdXR0b25FbGVtZW50LCBidXR0b25HZXRFbWFpbDogSFRNTEJ1dHRvbkVsZW1lbnQpIHtcbiAgLy8gIyMjIExpc3RlbmVyc1xuICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdrZXl1cCcsIGZ1bmN0aW9uIChlKSB7XG4gICAgaWYgKHRoaXMudmFsdWUubGVuZ3RoIDwgMykgcmV0dXJuO1xuICAgIGlmIChlLmtleSA9PT0gJ0VudGVyJyB8fCBlLmtleSA9PT0gJywnKSB7XG4gICAgICBpbnNlcnRFbWFpbHModGhpcy52YWx1ZSwgY29udGFpbmVyKTtcbiAgICAgIHRoaXMudmFsdWUgPSAnJztcbiAgICB9XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG5cbiAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXNvdXQnLCBmdW5jdGlvbiAoZSkge1xuICAgIGlmICh0aGlzLnZhbHVlLmxlbmd0aCA8IDMpIHJldHVybjtcbiAgICBpbnNlcnRFbWFpbHModGhpcy52YWx1ZSwgY29udGFpbmVyKTtcbiAgICB0aGlzLnZhbHVlID0gJyc7XG4gIH0pO1xuXG4gIGJ1dHRvbkdldEVtYWlsLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24gKGUpIHtcbiAgICBsZXQgdmFsaWRFbWFpbHNDb3VudDogbnVtYmVyID0gZ2V0VmFsaWRFbWFpbHMoY29udGFpbmVyKTtcbiAgICBpZiAodmFsaWRFbWFpbHNDb3VudCA+IDEpIHtcbiAgICAgIGFsZXJ0KGBZb3UgaGF2ZSAke3ZhbGlkRW1haWxzQ291bnR9IHZhbGlkIGVtYWlsc2ApO1xuICAgIH0gZWxzZSB7XG4gICAgICBhbGVydChgWW91IGhhdmUgJHt2YWxpZEVtYWlsc0NvdW50fSB2YWxpZCBlbWFpbGApO1xuICAgIH1cbiAgICBpbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgXG4gIGJ1dHRvbkFkZC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgY29uc3QgbmV3RW1haWwgPSBnZW5lcmF0ZUZha2VFbWFpbCgpO1xuICAgIGluc2VydEVtYWlscyhuZXdFbWFpbCwgY29udGFpbmVyKTtcbiAgICBpbnB1dC5mb2N1cygpO1xuICB9KTtcbiAgXG4gIGNvbnRhaW5lci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uIChlKSB7XG4gICAgaW5wdXQuZm9jdXMoKTtcbiAgfSk7XG4gIFxuXG59KShkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImVtYWlsc0NvbnRhaW5lclwiKSBhcyBIVE1MRWxlbWVudCxcbiAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJlbWFpbHNJbnB1dFwiKSBhcyBIVE1MSW5wdXRFbGVtZW50LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImFkZEVtYWlsXCIpIGFzIEhUTUxCdXR0b25FbGVtZW50LFxuICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdldEVtYWlsc1wiKSBhcyBIVE1MQnV0dG9uRWxlbWVudCk7XG5cbi8vIGd1aWxoZXJtZUBnbWFpbC5jb20sIG1heWFyYSwga2FyaW5hQGdodS5jb20sIG1heUBtYXJhY2FqYS5jb21cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGdldFZhbGlkRW1haWxzKGNvbnRhaW5lcjogSFRNTEVsZW1lbnQpOiBudW1iZXIge1xuICBjb25zdCB2YWxpZEVtYWlscyA9IGNvbnRhaW5lci5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdlbWFpbCcpO1xuICByZXR1cm4gdmFsaWRFbWFpbHMubGVuZ3RoO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZ2VuZXJhdGVGYWtlRW1haWwoKTogc3RyaW5nIHtcbiAgdmFyIHN0clZhbHVlcyA9IFwiYWJjZGVmZ2hpamtsbW5vXCI7XG4gIHZhciBzdHJFbWFpbCA9IFwiXCI7XG4gIHZhciBzdHJUbXA7XG5cbiAgLy8gTmFtZVxuICBmb3IgKHZhciBpID0gMDsgaSA8IDY7IGkrKykge1xuICAgIHN0clRtcCA9IHN0clZhbHVlcy5jaGFyQXQoTWF0aC5yb3VuZChzdHJWYWx1ZXMubGVuZ3RoICogTWF0aC5yYW5kb20oKSkpO1xuICAgIHN0ckVtYWlsID0gc3RyRW1haWwgKyBzdHJUbXA7XG4gIH1cbiAgc3RyVG1wID0gXCJcIjtcbiAgc3RyRW1haWwgPSBzdHJFbWFpbCArIFwiQFwiO1xuXG4gIC8vUHJvdmlkZXJcbiAgZm9yICh2YXIgaiA9IDA7IGogPCA0OyBqKyspIHtcbiAgICBzdHJUbXAgPSBzdHJWYWx1ZXMuY2hhckF0KE1hdGgucm91bmQoc3RyVmFsdWVzLmxlbmd0aCAqIE1hdGgucmFuZG9tKCkpKTtcbiAgICBzdHJFbWFpbCA9IHN0ckVtYWlsICsgc3RyVG1wO1xuICB9XG4gIHN0ckVtYWlsID0gc3RyRW1haWwgKyBcIi5jb21cIjtcbiAgcmV0dXJuIHN0ckVtYWlsO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==