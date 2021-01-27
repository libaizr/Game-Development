
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