Component({
 /**
   * 继承父组件的class
   */
  externalClasses: ['wuss-class'], 

  /**
   * 组件的属性列表
   * @param {Boolean} visible 组件是否可见
   * @param {Boolean} maskCancel 是否开启遮罩层点击关闭
   * @param {Number} z-index 当前组件的z-index值
   * @param {Number} opacity 当前组件遮罩的不透明度
   */
  properties: {
    visible: {
      type: Boolean,
      value: false,
    },
    maskCancel: {
      type: Boolean,
      value: true,
    },
    zIndex: {
      type: Number,
      value: 100,
    },
    opacity: {
      type: Number,
      value: .7,
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    maskStyles: '',
  },

  /**
   * 组件的方法列表
   */
  methods: {
    handleClick() {
      const {
        visible
      } = this.data;
      const {maskCancel } = this.data;
      if(!maskCancel)return false; // 如果用户没开则退出
      this.triggerEvent('close', {
        visible
      }, {})
    },
  },

  ready: function() {
    const {
      zIndex,
      opacity,
    } = this.data;
    let maskStyles = '';
    maskStyles += `z-index: ${zIndex}; background: rgba(0, 0, 0, ${opacity});`;
    this.setData({
      maskStyles,
    })
  },
})