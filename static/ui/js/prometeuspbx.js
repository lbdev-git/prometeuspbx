(()=>{"use strict";class o{defaultOptions={autoReconnect:!0,reconnectTimeout:5e3};constructor(o,s){this._url=o,this.options={...this.defaultOptions,...s},this.initialize()}initialize(){this.socket=new WebSocket(this._url),this.socket.onopen=this.onOpen,this.socket.onclose=this.onClose,this.socket.onerror=this.onError,this.socket.onmessage=this.onMessage}onOpen=o=>this.options.onOpen&&this.options.onOpen(o);onClose=o=>(this.options.autoReconnect&&setTimeout(this.initialize,this.options.reconnectTimeout),this.options.onClose&&this.options.onClose(o));onError=o=>this.options.onError&&this.options.onError(o);onMessage=o=>this.options.onMessage&&this.options.onMessage(o);sendMessage=(o,s)=>this.socket.send(JSON.stringify({type:o,data:s}))}function s(o){console.log(o)}window.PrometeusPbxUi={Socket:o,initializeUI:function(t){const e=new o(t,{onOpen:()=>{e.sendMessage("teste","teste")},onMessage:s})}}})();
//# sourceMappingURL=prometeuspbx.js.map