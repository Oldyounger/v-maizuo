<template>
  <div class="city">
      <p class="select">选择您所在的城市</p>
    <mt-index-list>
      <mt-index-section index="A">
        <router-link to="/cinema" v-for="a in A" :key="a.id">
          <!-- <mt-cell titel="title"></mt-cell> -->
          {{a.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="B">
          <router-link to="/cinema" v-for="b in B" :key="b.id">
          {{b.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="C">
          <router-link to="/cinema" v-for="z in Z" :key="z.id">
          {{z.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="D">
        <router-link to="/cinema" v-for="a in A" :key="a.id">
          <!-- <mt-cell titel="title"></mt-cell> -->
          {{a.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="E">
          <router-link to="/cinema" v-for="b in B" :key="b.id">
          {{b.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="F">
          <router-link to="/cinema" v-for="z in Z" :key="z.id">
          {{z.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="G">
        <router-link to="/cinema" v-for="a in A" :key="a.id">
          <!-- <mt-cell titel="title"></mt-cell> -->
          {{a.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="H">
          <router-link to="/cinema" v-for="b in B" :key="b.id">
          {{b.title}}
        </router-link>
      </mt-index-section>
      <mt-index-section index="Z">
          <router-link to="/cinema" v-for="z in Z" :key="z.id">
          {{z.title}}
        </router-link>
      </mt-index-section>
    </mt-index-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      A: [
        { id: 1, title: "安庆" },
        { id: 2, title: "安阳" },
        { id: 3, title: "安顺" },
        { id: 4, title: "安康" }
      ],
      B: [
        { id: 1, title: "北京" },
        { id: 2, title: "保定" },
        { id: 3, title: "包头" },
        { id: 4, title: "巴彦卓尔" },
        { id: 5, title: "本溪" },
        { id: 6, title: "白山" },
        { id: 7, title: "白城" },
        { id: 8, title: "蚌埠" },
        { id: 9, title: "毫州" },
        { id: 10, title: "滨州" },
        { id: 11, title: "白色" },
        { id: 12, title: "巴中" },
        { id: 13, title: "毕节" },
        { id: 14, title: "保山" },
        { id: 15, title: "宝鸡" },
        { id: 16, title: "白银" }
      ],
      Z: [
        { id: 1, title: "张家口" },
        { id: 2, title: "镇江" },
        { id: 3, title: "舟山" },
        { id: 4, title: "漳州" },
        { id: 5, title: "淄博" },
        { id: 6, title: "枣庄" },
        { id: 7, title: "郑州" },
        { id: 8, title: "周口" },
        { id: 9, title: "驻马店" },
        { id: 10, title: "株洲" },
        { id: 11, title: "张家界" },
        { id: 12, title: "珠海" },
        { id: 13, title: "湛江" },
        { id: 14, title: "中山" },
        { id: 15, title: "自贡" },
        { id: 16, title: "资阳" }
      ]
    };
  }
};
</script>

<style lang="postcss" scoped>
.select{
    font-size:20px;
    text-align: center;
    padding:15px 0;
}
a{
    font-size:18px;
    display:block;
    color:rgb(129, 129, 129);
    font-weight: 100;
    padding:10px;
    border-bottom:1px solid #ccc;
}
</style>
