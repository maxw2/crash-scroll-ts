function onTransitionStart(ev: any) {
    this._pos.startTime = ev.timeStamp / 1000

}

function onTransitionMove(ev: any) {
    this._pos.runTime = ev.timeStamp
    console.log(ev)
}

function onTransitionEnd(ev: any) {
    this._pos.endTime = ev.timeStamp
    let time = Math.round(this._pos.endTime - this._pos.startTime)
    // this.dom.content.style = ''
    

}

function onTransitionCancel(ev: any) {
    this._pos.cancelTime = ev.timeStamp / 1000
    let time = Math.round(this._pos.cancelTime - this._pos.startTime)
    let elapsedTime = ev.elapsedTime * 1000
  
}

export {
    onTransitionStart,
    onTransitionMove,
    onTransitionEnd,
    onTransitionCancel
}