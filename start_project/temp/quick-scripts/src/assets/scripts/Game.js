"use strict";
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