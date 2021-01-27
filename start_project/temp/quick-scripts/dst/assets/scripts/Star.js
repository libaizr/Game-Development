
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