"use strict";
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