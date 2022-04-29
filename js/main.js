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
      src: "img/img1.png",
      alt: "スクリーンショット",
    },
    imgWidth: 300,
    imgHeight: 300,
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

    defaultSize: function () {
      (this.imgWidth = 300), (this.imgHeight = 300);
    },
  },
});
