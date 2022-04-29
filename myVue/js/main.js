var app = new Vue({
  el: "#app",

  data: {
    hello: "Hello Vue.js!!!",
    list: ["りんご", "ごりら", "らっぱ"],
    message: "入力を同期",
    show: true,
    count: 0,
    colorRed: true,
    textS: false,
    item: {
      src: 'img/img1.png',
      alt: 'スクリーンショット',
      // width: 100,
      // height: 100
    },
    width: 100,
    height: 100
  },

  created: function () {
    console.log("インスタンスが生成されました。");
  },

  methods: {
    click: function () {
      alert("よくできました！");
    },

    increment: function () {
      this.count += 1;
    },

    decrement: function () {
      this.count -= 1;
    },

    reset: function () {
      this.count = 0;
    },
  },
});
