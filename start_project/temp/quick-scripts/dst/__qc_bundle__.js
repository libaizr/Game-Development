
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/scripts/Game');
require('./assets/scripts/Player');
require('./assets/scripts/Star');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '54f9dGQQx1H9pPqkpdcI/sj', 'Game');
// scripts/Game.js

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
    //引用星星的预制资源
    starPrefab: {
      "default": null,
      type: cc.Prefab
    },
    //星星产生后消失时间的随机范围
    maxStarDuration: 0,
    minStarDuration: 0,
    //地面节点，用于确定星星产生的高度
    ground: {
      "default": null,
      type: cc.Node
    },
    //Player节点，用于获取主角弹跳的高度，和控制主角行动开关
    player: {
      "default": null,
      type: cc.Node
    },
    //Score引用
    scoreDisplay: {
      "default": null,
      type: cc.Label
    },
    //引用得分音频文件
    scoreAudio: {
      "default": null,
      type: cc.AudioClip
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //获取地平面的y坐标
    this.groundY = this.ground.y + this.ground.height / 2; //初始化计时器

    this.timer = 0;
    this.starDuration = 0; //生成一个新的星星

    this.spawnNewStar(); //初始化记分

    this.score = 0;
  },
  update: function update(dt) {
    //每帧刷新定时器，超过限度还没生成新的星星，调用失败逻辑
    if (this.timer > this.starDuration) {
      this.gameOver();
      return;
    }

    this.timer += dt;
  },
  spawnNewStar: function spawnNewStar() {
    //使用给定的模板在场景中生成一个新节点
    var newStar = cc.instantiate(this.starPrefab); //将生成的节点添加到Canvas节点下面

    this.node.addChild(newStar); //为星星随机设置一个位置

    newStar.setPosition(this.getNewStarPosition()); //在星星脚本组件上保存Game对象的引用

    newStar.getComponent('Star').game = this; //重置计时器，根据小时时间范围随机取一个值

    this.starDuration = this.minStarDuration + Math.random() * (this.maxStarDuration - this.minStarDuration);
    this.timer = 0;
  },
  getNewStarPosition: function getNewStarPosition() {
    var randX = 0; //根据地平面位置和主角跳跃高度，随机得到一个星星的y坐标

    var randY = this.groundY + Math.random() * this.player.getComponent('Player').jumpHeight + 20; //根据屏幕宽度，随机得到一个星星的x坐标

    var maxX = this.node.width / 2;
    randX = (Math.random() - 0.5) * 2 * maxX; //返回星星的坐标

    return cc.v2(randX, randY);
  },
  start: function start() {},
  gainScore: function gainScore() {
    this.score += 1; // 更新scoreDisplay Label的文字

    this.scoreDisplay.string = 'Score: ' + this.score; //得分音效

    cc.audioEngine.playEffect(this.scoreAudio, false);
  },
  gameOver: function gameOver() {
    //停止player的跳跃动作
    this.player.stopAllActions(); //重新加载场景game

    cc.director.loadScene('game');
  }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcR2FtZS5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJQcmVmYWIiLCJ0eXBlIiwiUHJlZmFiIiwibWF4U3RhckR1cmF0aW9uIiwibWluU3RhckR1cmF0aW9uIiwiZ3JvdW5kIiwiTm9kZSIsInBsYXllciIsInNjb3JlRGlzcGxheSIsIkxhYmVsIiwic2NvcmVBdWRpbyIsIkF1ZGlvQ2xpcCIsIm9uTG9hZCIsImdyb3VuZFkiLCJ5IiwiaGVpZ2h0IiwidGltZXIiLCJzdGFyRHVyYXRpb24iLCJzcGF3bk5ld1N0YXIiLCJzY29yZSIsInVwZGF0ZSIsImR0IiwiZ2FtZU92ZXIiLCJuZXdTdGFyIiwiaW5zdGFudGlhdGUiLCJub2RlIiwiYWRkQ2hpbGQiLCJzZXRQb3NpdGlvbiIsImdldE5ld1N0YXJQb3NpdGlvbiIsImdldENvbXBvbmVudCIsImdhbWUiLCJNYXRoIiwicmFuZG9tIiwicmFuZFgiLCJyYW5kWSIsImp1bXBIZWlnaHQiLCJtYXhYIiwid2lkdGgiLCJ2MiIsInN0YXJ0IiwiZ2FpblNjb3JlIiwic3RyaW5nIiwiYXVkaW9FbmdpbmUiLCJwbGF5RWZmZWN0Iiwic3RvcEFsbEFjdGlvbnMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDUCxhQUFTRCxFQUFFLENBQUNFLFNBREw7QUFHUEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1Y7QUFDQUMsSUFBQUEsVUFBVSxFQUFFO0FBQ1YsaUJBQVMsSUFEQztBQUVWQyxNQUFBQSxJQUFJLEVBQUVMLEVBQUUsQ0FBQ007QUFGQyxLQUZGO0FBT1Y7QUFDQUMsSUFBQUEsZUFBZSxFQUFFLENBUlA7QUFTVkMsSUFBQUEsZUFBZSxFQUFFLENBVFA7QUFXVjtBQUNBQyxJQUFBQSxN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QUNBdkIsSUFBQUEsRUFBRSxDQUFDOEMsV0FBSCxDQUFlQyxVQUFmLENBQTBCLEtBQUtqQyxVQUEvQixFQUEyQyxLQUEzQztBQUNELEdBekdNO0FBMkdQWSxFQUFBQSxRQTNHTyxzQkEyR0k7QUFDVDtBQUNBLFNBQUtmLE1BQUwsQ0FBWXFDLGNBQVosR0FGUyxDQUlUOztBQUNBaEQsSUFBQUEsRUFBRSxDQUFDaUQsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE1BQXRCO0FBQ0Q7QUFqSE0sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvL+W8leeUqOaYn+aYn+eahOmihOWItui1hOa6kFxyXG4gICAgc3RhclByZWZhYjoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5QcmVmYWJcclxuICAgIH0sXHJcblxyXG4gICAgLy/mmJ/mmJ/kuqfnlJ/lkI7mtojlpLHml7bpl7TnmoTpmo/mnLrojIPlm7RcclxuICAgIG1heFN0YXJEdXJhdGlvbjogMCxcclxuICAgIG1pblN0YXJEdXJhdGlvbjogMCxcclxuXHJcbiAgICAvL+WcsOmdouiKgueCue+8jOeUqOS6juehruWumuaYn+aYn+S6p+eUn+eahOmrmOW6plxyXG4gICAgZ3JvdW5kOiB7XHJcbiAgICAgIGRlZmF1bHQ6IG51bGwsXHJcbiAgICAgIHR5cGU6IGNjLk5vZGVcclxuICAgIH0sXHJcblxyXG4gICAgLy9QbGF5ZXLoioLngrnvvIznlKjkuo7ojrflj5bkuLvop5LlvLnot7PnmoTpq5jluqbvvIzlkozmjqfliLbkuLvop5LooYzliqjlvIDlhbNcclxuICAgIHBsYXllcjoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5Ob2RlXHJcbiAgICB9LFxyXG5cclxuICAgIC8vU2NvcmXlvJXnlKhcclxuICAgIHNjb3JlRGlzcGxheToge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5MYWJlbFxyXG4gICAgfSxcclxuXHJcbiAgICAvL+W8leeUqOW+l+WIhumfs+mikeaWh+S7tlxyXG4gICAgc2NvcmVBdWRpbzoge1xyXG4gICAgICBkZWZhdWx0OiBudWxsLFxyXG4gICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXHJcbiAgICB9XHJcbiAgfSxcclxuXHJcbiAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XHJcblxyXG4gIG9uTG9hZDogZnVuY3Rpb24gKCkge1xyXG4gICAgLy/ojrflj5blnLDlubPpnaLnmoR55Z2Q5qCHXHJcbiAgICB0aGlzLmdyb3VuZFkgPSB0aGlzLmdyb3VuZC55ICsgdGhpcy5ncm91bmQuaGVpZ2h0IC8gMjtcclxuXHJcbiAgICAvL+WIneWni+WMluiuoeaXtuWZqFxyXG4gICAgdGhpcy50aW1lciA9IDA7XHJcbiAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IDA7XHJcblxyXG4gICAgLy/nlJ/miJDkuIDkuKrmlrDnmoTmmJ/mmJ9cclxuICAgIHRoaXMuc3Bhd25OZXdTdGFyKCk7XHJcblxyXG4gICAgLy/liJ3lp4vljJborrDliIZcclxuICAgIHRoaXMuc2NvcmUgPSAwO1xyXG5cclxuICB9LFxyXG5cclxuICB1cGRhdGU6IGZ1bmN0aW9uIChkdCkge1xyXG4gICAgLy/mr4/luKfliLfmlrDlrprml7blmajvvIzotoXov4fpmZDluqbov5jmsqHnlJ/miJDmlrDnmoTmmJ/mmJ/vvIzosIPnlKjlpLHotKXpgLvovpFcclxuICAgIGlmICh0aGlzLnRpbWVyID4gdGhpcy5zdGFyRHVyYXRpb24pIHtcclxuICAgICAgdGhpcy5nYW1lT3ZlcigpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgdGhpcy50aW1lciArPSBkdDtcclxuICB9LFxyXG5cclxuICBzcGF3bk5ld1N0YXI6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v5L2/55So57uZ5a6a55qE5qih5p2/5Zyo5Zy65pmv5Lit55Sf5oiQ5LiA5Liq5paw6IqC54K5XHJcbiAgICB2YXIgbmV3U3RhciA9IGNjLmluc3RhbnRpYXRlKHRoaXMuc3RhclByZWZhYik7XHJcbiAgICAvL+WwhueUn+aIkOeahOiKgueCuea3u+WKoOWIsENhbnZhc+iKgueCueS4i+mdolxyXG4gICAgdGhpcy5ub2RlLmFkZENoaWxkKG5ld1N0YXIpO1xyXG4gICAgLy/kuLrmmJ/mmJ/pmo/mnLrorr7nva7kuIDkuKrkvY3nva5cclxuICAgIG5ld1N0YXIuc2V0UG9zaXRpb24odGhpcy5nZXROZXdTdGFyUG9zaXRpb24oKSk7XHJcblxyXG4gICAgLy/lnKjmmJ/mmJ/ohJrmnKznu4Tku7bkuIrkv53lrZhHYW1l5a+56LGh55qE5byV55SoXHJcbiAgICBuZXdTdGFyLmdldENvbXBvbmVudCgnU3RhcicpLmdhbWUgPSB0aGlzO1xyXG5cclxuICAgIC8v6YeN572u6K6h5pe25Zmo77yM5qC55o2u5bCP5pe25pe26Ze06IyD5Zu06ZqP5py65Y+W5LiA5Liq5YC8XHJcbiAgICB0aGlzLnN0YXJEdXJhdGlvbiA9IHRoaXMubWluU3RhckR1cmF0aW9uICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFN0YXJEdXJhdGlvbiAtIHRoaXMubWluU3RhckR1cmF0aW9uKTtcclxuICAgIHRoaXMudGltZXIgPSAwO1xyXG4gIH0sXHJcblxyXG4gIGdldE5ld1N0YXJQb3NpdGlvbjogZnVuY3Rpb24gKCkge1xyXG4gICAgdmFyIHJhbmRYID0gMDtcclxuICAgIC8v5qC55o2u5Zyw5bmz6Z2i5L2N572u5ZKM5Li76KeS6Lez6LeD6auY5bqm77yM6ZqP5py65b6X5Yiw5LiA5Liq5pif5pif55qEeeWdkOagh1xyXG4gICAgdmFyIHJhbmRZID0gdGhpcy5ncm91bmRZICsgTWF0aC5yYW5kb20oKSAqIHRoaXMucGxheWVyLmdldENvbXBvbmVudCgnUGxheWVyJykuanVtcEhlaWdodCArIDIwO1xyXG4gICAgLy/moLnmja7lsY/luZXlrr3luqbvvIzpmo/mnLrlvpfliLDkuIDkuKrmmJ/mmJ/nmoR45Z2Q5qCHXHJcbiAgICB2YXIgbWF4WCA9IHRoaXMubm9kZS53aWR0aCAvIDI7XHJcbiAgICByYW5kWCA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIgKiBtYXhYO1xyXG4gICAgLy/ov5Tlm57mmJ/mmJ/nmoTlnZDmoIdcclxuICAgIHJldHVybiBjYy52MihyYW5kWCwgcmFuZFkpO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG5cclxuICB9LFxyXG5cclxuICBnYWluU2NvcmUoKSB7XHJcbiAgICB0aGlzLnNjb3JlICs9IDE7XHJcbiAgICAvLyDmm7TmlrBzY29yZURpc3BsYXkgTGFiZWznmoTmloflrZdcclxuICAgIHRoaXMuc2NvcmVEaXNwbGF5LnN0cmluZyA9ICdTY29yZTogJyArIHRoaXMuc2NvcmU7XHJcblxyXG4gICAgLy/lvpfliIbpn7PmlYhcclxuICAgIGNjLmF1ZGlvRW5naW5lLnBsYXlFZmZlY3QodGhpcy5zY29yZUF1ZGlvLCBmYWxzZSk7XHJcbiAgfSxcclxuXHJcbiAgZ2FtZU92ZXIoKSB7XHJcbiAgICAvL+WBnOatonBsYXllcueahOi3s+i3g+WKqOS9nFxyXG4gICAgdGhpcy5wbGF5ZXIuc3RvcEFsbEFjdGlvbnMoKTtcclxuXHJcbiAgICAvL+mHjeaWsOWKoOi9veWcuuaZr2dhbWVcclxuICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnZ2FtZScpO1xyXG4gIH1cclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/scripts/Star.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '87e2aODTblJBLznGn8ZKfdm', 'Star');
// scripts/Star.js

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
    //星星和主角之间的距离小于这数值，就可以完成收集
    pickRadius: 0
  },
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  getPlayerDistance: function getPlayerDistance() {
    //根据player节点判断距离
    var playerPos = this.game.player.getPosition(); //根据两点位置计算距离

    var dist = this.node.position.sub(playerPos).mag();
    return dist;
  },
  onPick: function onPick() {
    //当星星被收集的时候，调用Game中的接口，随机生成一个新的星星
    this.game.spawnNewStar(); //调用Game脚本的gainScore方法

    this.game.gainScore(); //然后销毁当前的星星

    this.node.destroy();
  },
  update: function update(dt) {
    //每一帧判断星星和主角之间的距离
    if (this.getPlayerDistance() < this.pickRadius) {
      //调用收集行为
      this.onPick();
      return;
    } //根据game中的定时器更新星星的透明度


    var opacityRatio = 1 - this.game.timer / this.game.starDuration;
    var minOpacity = 50;
    this.node.opacity = minOpacity + Math.floor(opacityRatio * (255 - minOpacity));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0c1xcc2NyaXB0c1xcU3Rhci5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInBpY2tSYWRpdXMiLCJnZXRQbGF5ZXJEaXN0YW5jZSIsInBsYXllclBvcyIsImdhbWUiLCJwbGF5ZXIiLCJnZXRQb3NpdGlvbiIsImRpc3QiLCJub2RlIiwicG9zaXRpb24iLCJzdWIiLCJtYWciLCJvblBpY2siLCJzcGF3bk5ld1N0YXIiLCJnYWluU2NvcmUiLCJkZXN0cm95IiwidXBkYXRlIiwiZHQiLCJvcGFjaXR5UmF0aW8iLCJ0aW1lciIsInN0YXJEdXJhdGlvbiIsIm1pbk9wYWNpdHkiLCJvcGFjaXR5IiwiTWF0aCIsImZsb29yIiwic3RhcnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ1AsYUFBU0QsRUFBRSxDQUFDRSxTQURMO0FBR1BDLEVBQUFBLFVBQVUsRUFBRTtBQUNWO0FBQ0FDLElBQUFBLFVBQVUsRUFBRTtBQUZGLEdBSEw7QUFRUDtBQUVBO0FBRUFDLEVBQUFBLGlCQUFpQixFQUFFLDZCQUFZO0FBQzdCO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsTUFBVixDQUFpQkMsV0FBakIsRUFBaEIsQ0FGNkIsQ0FHN0I7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUtDLElBQUwsQ0FBVUMsUUFBVixDQUFtQkMsR0FBbkIsQ0FBdUJQLFNBQXZCLEVBQWtDUSxHQUFsQyxFQUFYO0FBQ0EsV0FBT0osSUFBUDtBQUNELEdBbEJNO0FBb0JQSyxFQUFBQSxNQUFNLEVBQUUsa0JBQVk7QUFDbEI7QUFDQSxTQUFLUixJQUFMLENBQVVTLFlBQVYsR0FGa0IsQ0FJbEI7O0FBQ0EsU0FBS1QsSUFBTCxDQUFVVSxTQUFWLEdBTGtCLENBT2xCOztBQUNBLFNBQUtOLElBQUwsQ0FBVU8sT0FBVjtBQUNELEdBN0JNO0FBK0JQQyxFQUFBQSxNQUFNLEVBQUUsZ0JBQVVDLEVBQVYsRUFBYztBQUNwQjtBQUNBLFFBQUksS0FBS2YsaUJBQUwsS0FBMkIsS0FBS0QsVUFBcEMsRUFBZ0Q7QUFDOUM7QUFDQSxXQUFLVyxNQUFMO0FBQ0E7QUFDRCxLQU5tQixDQVFwQjs7O0FBQ0EsUUFBSU0sWUFBWSxHQUFHLElBQUksS0FBS2QsSUFBTCxDQUFVZSxLQUFWLEdBQWtCLEtBQUtmLElBQUwsQ0FBVWdCLFlBQW5EO0FBQ0EsUUFBSUMsVUFBVSxHQUFHLEVBQWpCO0FBQ0EsU0FBS2IsSUFBTCxDQUFVYyxPQUFWLEdBQW9CRCxVQUFVLEdBQUdFLElBQUksQ0FBQ0MsS0FBTCxDQUFXTixZQUFZLElBQUksTUFBTUcsVUFBVixDQUF2QixDQUFqQztBQUNELEdBM0NNO0FBNkNQSSxFQUFBQSxLQTdDTyxtQkE2Q0MsQ0FFUCxDQS9DTSxDQWlEUDs7QUFqRE8sQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gTGVhcm4gY2MuQ2xhc3M6XHJcbi8vICAtIGh0dHBzOi8vZG9jcy5jb2Nvcy5jb20vY3JlYXRvci9tYW51YWwvZW4vc2NyaXB0aW5nL2NsYXNzLmh0bWxcclxuLy8gTGVhcm4gQXR0cmlidXRlOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9yZWZlcmVuY2UvYXR0cmlidXRlcy5odG1sXHJcbi8vIExlYXJuIGxpZmUtY3ljbGUgY2FsbGJhY2tzOlxyXG4vLyAgLSBodHRwczovL2RvY3MuY29jb3MuY29tL2NyZWF0b3IvbWFudWFsL2VuL3NjcmlwdGluZy9saWZlLWN5Y2xlLWNhbGxiYWNrcy5odG1sXHJcblxyXG5jYy5DbGFzcyh7XHJcbiAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxyXG5cclxuICBwcm9wZXJ0aWVzOiB7XHJcbiAgICAvL+aYn+aYn+WSjOS4u+inkuS5i+mXtOeahOi3neemu+Wwj+S6jui/meaVsOWAvO+8jOWwseWPr+S7peWujOaIkOaUtumbhlxyXG4gICAgcGlja1JhZGl1czogMCxcclxuICB9LFxyXG5cclxuICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcclxuXHJcbiAgLy8gb25Mb2FkICgpIHt9LFxyXG5cclxuICBnZXRQbGF5ZXJEaXN0YW5jZTogZnVuY3Rpb24gKCkge1xyXG4gICAgLy/moLnmja5wbGF5ZXLoioLngrnliKTmlq3ot53nprtcclxuICAgIHZhciBwbGF5ZXJQb3MgPSB0aGlzLmdhbWUucGxheWVyLmdldFBvc2l0aW9uKCk7XHJcbiAgICAvL+agueaNruS4pOeCueS9jee9ruiuoeeul+i3neemu1xyXG4gICAgdmFyIGRpc3QgPSB0aGlzLm5vZGUucG9zaXRpb24uc3ViKHBsYXllclBvcykubWFnKCk7XHJcbiAgICByZXR1cm4gZGlzdDtcclxuICB9LFxyXG5cclxuICBvblBpY2s6IGZ1bmN0aW9uICgpIHtcclxuICAgIC8v5b2T5pif5pif6KKr5pS26ZuG55qE5pe25YCZ77yM6LCD55SoR2FtZeS4reeahOaOpeWPo++8jOmaj+acuueUn+aIkOS4gOS4quaWsOeahOaYn+aYn1xyXG4gICAgdGhpcy5nYW1lLnNwYXduTmV3U3RhcigpO1xyXG5cclxuICAgIC8v6LCD55SoR2FtZeiEmuacrOeahGdhaW5TY29yZeaWueazlVxyXG4gICAgdGhpcy5nYW1lLmdhaW5TY29yZSgpO1xyXG5cclxuICAgIC8v54S25ZCO6ZSA5q+B5b2T5YmN55qE5pif5pifXHJcbiAgICB0aGlzLm5vZGUuZGVzdHJveSgpO1xyXG4gIH0sXHJcblxyXG4gIHVwZGF0ZTogZnVuY3Rpb24gKGR0KSB7XHJcbiAgICAvL+avj+S4gOW4p+WIpOaWreaYn+aYn+WSjOS4u+inkuS5i+mXtOeahOi3neemu1xyXG4gICAgaWYgKHRoaXMuZ2V0UGxheWVyRGlzdGFuY2UoKSA8IHRoaXMucGlja1JhZGl1cykge1xyXG4gICAgICAvL+iwg+eUqOaUtumbhuihjOS4ulxyXG4gICAgICB0aGlzLm9uUGljaygpO1xyXG4gICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgLy/moLnmja5nYW1l5Lit55qE5a6a5pe25Zmo5pu05paw5pif5pif55qE6YCP5piO5bqmXHJcbiAgICB2YXIgb3BhY2l0eVJhdGlvID0gMSAtIHRoaXMuZ2FtZS50aW1lciAvIHRoaXMuZ2FtZS5zdGFyRHVyYXRpb247XHJcbiAgICB2YXIgbWluT3BhY2l0eSA9IDUwO1xyXG4gICAgdGhpcy5ub2RlLm9wYWNpdHkgPSBtaW5PcGFjaXR5ICsgTWF0aC5mbG9vcihvcGFjaXR5UmF0aW8gKiAoMjU1IC0gbWluT3BhY2l0eSkpO1xyXG4gIH0sXHJcblxyXG4gIHN0YXJ0KCkge1xyXG5cclxuICB9LFxyXG5cclxuICAvLyB1cGRhdGUgKGR0KSB7fSxcclxufSk7XHJcbiJdfQ==
//------QC-SOURCE-SPLIT------
