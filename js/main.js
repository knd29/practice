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

    // image
    item: {
      src: "img/img1.png",
      alt: "スクリーンショット",
    },
    imgWidth: 300,
    imgHeight: 300,

    // モンスター
    name: "ゴーレム",
    hp: 1000,
    monsters: [],
  },

  created: function () {
    axios
      .get("monsters.json")
      .then(
        function (response) {
          this.monsters = response.data;
        }.bind(this)
      )
      .catch(function (e) {
        console.error(e);
      });
    console.log("monsters.jsonの読み込みが完了しました。");
  },

  mounted: function () {
    console.log(this.$refs.hello, "マウント後にthis.$refs.helloで参照しています。");
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

    doAdd: function () {
      // 名前の重複をチェック (t/f)
      const result = this.monsters.some((u) => u.name === this.name);

      // 入力されたHPが半角数値以外 -> 0
      const hp = Number(this.hp);

      // 名前が重複する場合は確認
      if (result) {
        const flg = confirm(`"${this.name}"はすでに存在しますが、よろしいですか？`);
        if (!flg) {
          return;
        }
      }

      if (this.name === "") {
        alert("名前を入力してください");
        return;
      } else if (this.name.length > 10) {
        alert("名前は10文字以下にしてください");
      } else if (hp === 0) {
        alert("HPは半角数値で入力してください(最小値: 1)");
        return;
      } else if (hp > 99999) {
        alert("HPは99,999以下にしてください");
        return;
      } else {
        // idの最大値を取得
        const max = this.monsters.reduce(function (a, b) {
          return a > b.id ? a : b.id;
        }, 0);

        this.monsters.push({
          id: max + 1,
          name: this.name,
          hp: hp,
        });

        (this.name = ""), (this.hp = "");
      }
    },

    doRemove: function (index) {
      const flg1 = confirm("削除してもよろしいですか？");
      if (flg1) {
        alert(`さようなら！${this.monsters[index].name}!!!`);
      } else {
        return;
      }
      this.monsters.splice(index, 1);
    },
  },
});
