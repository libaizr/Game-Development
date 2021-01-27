
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Player.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'f689csnCRlNX6QzBBIROGAb', 'Player');
// scripts/Player.js

"use strict";

// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
cc.Class({
  "extends": cc.Component,
  properties: {
    jumpHeight: 0,
    jumpDuration: 0,
    maxMoveSpeed: 0,
    accel: 0,
    //引用声音文件
    jumpAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  runJumpAction: function runJumpAction() {
    //起跳
    var jumpUp = cc.tween().by(this.jumpDuration, {
      y: this.jumpHeight
    }, {
      easing: 'sineOut'
    }); //下落

    var jumpDown = cc.tween().by(this.jumpDuration, {
      y: -this.jumpHeight
    }, {
      easing: 'sineIn'
    }); //创建一个缓动，按jumpUp，jumpDown的顺序执行,添加回调函数，在前面动作都结束时调用playJumpSound

    var tween = cc.tween().sequence(jumpUp, jumpDown).call(this.playJumpSound, this); //重复

    return cc.tween().repeatForever(tween);
  },
  playJumpSound: function playJumpSound() {
    //调用声音引擎播放音频
    cc.audioEngine.playEffect(this.jumpAudio, false);
  },
  onKeyDown: function onKeyDown(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = true;
        break;

      case cc.macro.KEY.d:
        this.accRight = true;
        break;
    }
  },
  onKeyUp: function onKeyUp(event) {
    switch (event.keyCode) {
      case cc.macro.KEY.a:
        this.accLeft = false;
        break;

      case cc.macro.KEY.d:
        this.accRight = false;
        break;
    }
  },
  onLoad: function onLoad() {
    //初始化跳跃动作
    var jumpAction = this.runJumpAction();
    cc.tween(this.node).then(jumpAction).start(); //加速度方向开关

    this.accLeft = false;
    this.accRight = false; //主角当前水平方向速度

    this.xSpeed = 0; //初始化键盘监听

    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.on(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  onDestroy: function onDestroy() {
    //取消键盘监听
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_DOWN, this.onKeyDown, this);
    cc.systemEvent.off(cc.SystemEvent.EventType.KEY_UP, this.onKeyUp, this);
  },
  update: function update(dt) {
    //根据当前加速度方向每帧更新速度
    if (this.accLeft) {
      this.xSpeed -= this.accel * dt;
    } else if (this.accRight) {
      this.xSpeed += this.accel * dt;
    } //限制主角速度最大值


    if (Math.abs(this.xSpeed) > this.maxMoveSpeed) {
      this.xSpeed = this.maxMoveSpeed * this.xSpeed / Math.abs(this.xSpeed);
    } //根据当前速度更新主角的位置


    this.node.x += this.xSpeed * dt;
  },
  start: function start() {} // update (dt) {},

});

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcUGxheWVyLmpzIl0sIm5hbWVzIjpbImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwianVtcEhlaWdodCIsImp1bXBEdXJhdGlvbiIsIm1heE1vdmVTcGVlZCIsImFjY2VsIiwianVtcEF1ZGlvIiwidHlwZSIsIkF1ZGlvQ2xpcCIsInJ1bkp1bXBBY3Rpb24iLCJqdW1wVXAiLCJ0d2VlbiIsImJ5IiwieSIsImVhc2luZyIsImp1bXBEb3duIiwic2VxdWVuY2UiLCJjYWxsIiwicGxheUp1bXBTb3VuZCIsInJlcGVhdEZvcmV2ZXIiLCJhdWRpb0VuZ2luZSIsInBsYXlFZmZlY3QiLCJvbktleURvd24iLCJldmVudCIsImtleUNvZGUiLCJtYWNybyIsIktFWSIsImEiLCJhY2NMZWZ0IiwiZCIsImFjY1JpZ2h0Iiwib25LZXlVcCIsIm9uTG9hZCIsImp1bXBBY3Rpb24iLCJub2RlIiwidGhlbiIsInN0YXJ0IiwieFNwZWVkIiwic3lzdGVtRXZlbnQiLCJvbiIsIlN5c3RlbUV2ZW50IiwiRXZlbnRUeXBlIiwiS0VZX0RPV04iLCJLRVlfVVAiLCJvbkRlc3Ryb3kiLCJvZmYiLCJ1cGRhdGUiLCJkdCIsIk1hdGgiLCJhYnMiLCJ4Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNQLGFBQVNELEVBQUUsQ0FBQ0UsU0FETDtBQUdQQyxFQUFBQSxVQUFVLEVBQUU7QUFDVkMsSUFBQUEsVUFBVSxFQUFFLENBREY7QUFFVkMsSUFBQUEsWUFBWSxFQUFFLENBRko7QUFHVkMsSUFBQUEsWUFBWSxFQUFFLENBSEo7QUFJVkMsSUFBQUEsS0FBSyxFQUFFLENBSkc7QUFNVjtBQUNBQyxJQUFBQSxTQUFTLEVBQUU7QUFDVCxpQkFBUyxJQURBO0FBRVRDLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDVTtBQUZBO0FB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Q0FBbUIvQyxFQUFFLENBQUMwQyxXQUFILENBQWVDLFNBQWYsQ0FBeUJDLFFBQTVDLEVBQXNELEtBQUtwQixTQUEzRCxFQUFzRSxJQUF0RTtBQUNBeEIsSUFBQUEsRUFBRSxDQUFDd0MsV0FBSCxDQUFlTyxHQUFmLENBQW1CL0MsRUFBRSxDQUFDMEMsV0FBSCxDQUFlQyxTQUFmLENBQXlCRSxNQUE1QyxFQUFvRCxLQUFLWixPQUF6RCxFQUFrRSxJQUFsRTtBQUNELEdBM0VNO0FBNkVQZSxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNwQjtBQUNBLFFBQUksS0FBS25CLE9BQVQsRUFBa0I7QUFDaEIsV0FBS1MsTUFBTCxJQUFlLEtBQUtoQyxLQUFMLEdBQWEwQyxFQUE1QjtBQUNELEtBRkQsTUFHSyxJQUFJLEtBQUtqQixRQUFULEVBQW1CO0FBQ3RCLFdBQUtPLE1BQUwsSUFBZSxLQUFLaEMsS0FBTCxHQUFhMEMsRUFBNUI7QUFDRCxLQVBtQixDQVNwQjs7O0FBQ0EsUUFBSUMsSUFBSSxDQUFDQyxHQUFMLENBQVMsS0FBS1osTUFBZCxJQUF3QixLQUFLakMsWUFBakMsRUFBK0M7QUFDN0MsV0FBS2lDLE1BQUwsR0FBYyxLQUFLakMsWUFBTCxHQUFvQixLQUFLaUMsTUFBekIsR0FBa0NXLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtaLE1BQWQsQ0FBaEQ7QUFDRCxLQVptQixDQWNwQjs7O0FBQ0EsU0FBS0gsSUFBTCxDQUFVZ0IsQ0FBVixJQUFlLEtBQUtiLE1BQUwsR0FBY1UsRUFBN0I7QUFDRCxHQTdGTTtBQStGUFgsRUFBQUEsS0EvRk8sbUJBK0ZDLENBRVAsQ0FqR00sQ0FtR1A7O0FBbkdPLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIExlYXJuIGNjLkNsYXNzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9jbGFzcy5odG1sXHJcbi8vIExlYXJuIEF0dHJpYnV0ZTpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvcmVmZXJlbmNlL2F0dHJpYnV0ZXMuaHRtbFxyXG4vLyBMZWFybiBsaWZlLWN5Y2xlIGNhbGxiYWNrczpcclxuLy8gIC0gaHR0cHM6Ly9kb2NzLmNvY29zLmNvbS9jcmVhdG9yL21hbnVhbC9lbi9zY3JpcHRpbmcvbGlmZS1jeWNsZS1jYWxsYmFja3MuaHRtbFxyXG5cclxuY2MuQ2xhc3Moe1xyXG4gIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcclxuXHJcbiAgcHJvcGVydGllczoge1xyXG4gICAganVtcEhlaWdodDogMCxcclxuICAgIGp1bXBEdXJhdGlvbjogMCxcclxuICAgIG1heE1vdmVTcGVlZDogMCxcclxuICAgIGFjY2VsOiAwLFxyXG5cclxuICAgIC8v5byV55So5aOw6Z+z5paH5Lu2XHJcbiAgICBqdW1wQXVkaW86IHtcclxuICAgICAgZGVmYXVsdDogbnVsbCxcclxuICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIHJ1bkp1bXBBY3Rpb24oKSB7XHJcbiAgICAvL+i1t+i3s1xyXG4gICAgdmFyIGp1bXBVcCA9IGNjLnR3ZWVuKCkuYnkodGhpcy5qdW1wRHVyYXRpb24sIHsgeTogdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZU91dCcgfSk7XHJcbiAgICAvL+S4i+iQvVxyXG4gICAgdmFyIGp1bXBEb3duID0gY2MudHdlZW4oKS5ieSh0aGlzLmp1bXBEdXJhdGlvbiwgeyB5OiAtdGhpcy5qdW1wSGVpZ2h0IH0sIHsgZWFzaW5nOiAnc2luZUluJyB9KTtcclxuXHJcbiAgICAvL+WIm+W7uuS4gOS4que8k+WKqO+8jOaMiWp1bXBVcO+8jGp1bXBEb3du55qE6aG65bqP5omn6KGMLOa3u+WKoOWbnuiwg+WHveaVsO+8jOWcqOWJjemdouWKqOS9nOmDvee7k+adn+aXtuiwg+eUqHBsYXlKdW1wU291bmRcclxuICAgIHZhciB0d2VlbiA9IGNjLnR3ZWVuKCkuc2VxdWVuY2UoanVtcFVwLCBqdW1wRG93bikuY2FsbCh0aGlzLnBsYXlKdW1wU291bmQsIHRoaXMpO1xyXG4gICAgLy/ph43lpI1cclxuICAgIHJldHVybiBjYy50d2VlbigpLnJlcGVhdEZvcmV2ZXIodHdlZW4pO1xyXG4gIH0sXHJcblxyXG4gIHBsYXlKdW1wU291bmQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v6LCD55So5aOw6Z+z5byV5pOO5pKt5pS+6Z+z6aKRXHJcbiAgICBjYy5hdWRpb0VuZ2luZS5wbGF5RWZmZWN0KHRoaXMuanVtcEF1ZGlvLCBmYWxzZSk7XHJcbiAgfSxcclxuXHJcbiAgb25LZXlEb3duKGV2ZW50KSB7XHJcbiAgICBzd2l0Y2ggKGV2ZW50LmtleUNvZGUpIHtcclxuICAgICAgY2FzZSBjYy5tYWNyby5LRVkuYTpcclxuICAgICAgICB0aGlzLmFjY0xlZnQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSB0cnVlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgfVxyXG4gIH0sXHJcblxyXG4gIG9uS2V5VXAoZXZlbnQpIHtcclxuICAgIHN3aXRjaCAoZXZlbnQua2V5Q29kZSkge1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5hOlxyXG4gICAgICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgICAgIGJyZWFrO1xyXG4gICAgICBjYXNlIGNjLm1hY3JvLktFWS5kOlxyXG4gICAgICAgIHRoaXMuYWNjUmlnaHQgPSBmYWxzZTtcclxuICAgICAgICBicmVhaztcclxuICAgIH1cclxuICB9LFxyXG5cclxuICBvbkxvYWQ6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v5Yid5aeL5YyW6Lez6LeD5Yqo5L2cXHJcbiAgICB2YXIganVtcEFjdGlvbiA9IHRoaXMucnVuSnVtcEFjdGlvbigpO1xyXG4gICAgY2MudHdlZW4odGhpcy5ub2RlKS50aGVuKGp1bXBBY3Rpb24pLnN0YXJ0KCk7XHJcblxyXG4gICAgLy/liqDpgJ/luqbmlrnlkJHlvIDlhbNcclxuICAgIHRoaXMuYWNjTGVmdCA9IGZhbHNlO1xyXG4gICAgdGhpcy5hY2NSaWdodCA9IGZhbHNlO1xyXG4gICAgLy/kuLvop5LlvZPliY3msLTlubPmlrnlkJHpgJ/luqZcclxuICAgIHRoaXMueFNwZWVkID0gMDtcclxuXHJcbiAgICAvL+WIneWni+WMlumUruebmOebkeWQrFxyXG4gICAgY2Muc3lzdGVtRXZlbnQub24oY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vbihjYy5TeXN0ZW1FdmVudC5FdmVudFR5cGUuS0VZX1VQLCB0aGlzLm9uS2V5VXAsIHRoaXMpO1xyXG4gIH0sXHJcblxyXG4gIG9uRGVzdHJveSgpIHtcclxuICAgIC8v5Y+W5raI6ZSu55uY55uR5ZCsXHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9ET1dOLCB0aGlzLm9uS2V5RG93biwgdGhpcyk7XHJcbiAgICBjYy5zeXN0ZW1FdmVudC5vZmYoY2MuU3lzdGVtRXZlbnQuRXZlbnRUeXBlLktFWV9VUCwgdGhpcy5vbktleVVwLCB0aGlzKTtcclxuICB9LFxyXG5cclxuICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy/moLnmja7lvZPliY3liqDpgJ/luqbmlrnlkJHmr4/luKfmm7TmlrDpgJ/luqZcclxuICAgIGlmICh0aGlzLmFjY0xlZnQpIHtcclxuICAgICAgdGhpcy54U3BlZWQgLT0gdGhpcy5hY2NlbCAqIGR0O1xyXG4gICAgfVxyXG4gICAgZWxzZSBpZiAodGhpcy5hY2NSaWdodCkge1xyXG4gICAgICB0aGlzLnhTcGVlZCArPSB0aGlzLmFjY2VsICogZHQ7XHJcbiAgICB9XHJcblxyXG4gICAgLy/pmZDliLbkuLvop5LpgJ/luqbmnIDlpKflgLxcclxuICAgIGlmIChNYXRoLmFicyh0aGlzLnhTcGVlZCkgPiB0aGlzLm1heE1vdmVTcGVlZCkge1xyXG4gICAgICB0aGlzLnhTcGVlZCA9IHRoaXMubWF4TW92ZVNwZWVkICogdGhpcy54U3BlZWQgLyBNYXRoLmFicyh0aGlzLnhTcGVlZCk7XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja7lvZPliY3pgJ/luqbmm7TmlrDkuLvop5LnmoTkvY3nva5cclxuICAgIHRoaXMubm9kZS54ICs9IHRoaXMueFNwZWVkICogZHQ7XHJcbiAgfSxcclxuXHJcbiAgc3RhcnQoKSB7XHJcblxyXG4gIH0sXHJcblxyXG4gIC8vIHVwZGF0ZSAoZHQpIHt9LFxyXG59KTtcclxuIl19