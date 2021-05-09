<template>
  <div class="main-min-card-wrap">
    <el-row v-for="card in cards">
      <div class="main-card-title">{{card.title}}</div>
      <el-col :xs="24" :sm="8" :lg="4"  v-for="item in card.items" :key="item.title">
          <div class="main-card-item" @click="open(item)">
            <p class="title">{{item.title}}</p>
          </div>
      </el-col>
    </el-row>
    <div class="seprate"></div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            cards: []
        }
    },
    mounted() {
        this.cards = this.$page.frontmatter.mainCards;
        this.cards2 = this.$page.frontmatter.mainCards2;
    },
    methods: {
        open(item) {
            window.open(item.link, '_blank');
        }
    }
}
</script>

<style lang="stylus">
.main-min-card-wrap
  margin-top 0px
  background-color #fff
.main-card-title
  padding 10px 20px
  border-bottom 1px solid #f5f5f5
  font-size 16px
  font-weight 700
.el-row
  margin-bottom 2px
.el-col
  margin-bottom 10px
.seprate
  height 40px
.main-card-item
  color #0059b2
  cursor pointer
  transition .55s all
  &:hover
    color $accentColor
  .title
    padding 0 20px
    font-weight 700
    margin-block 0
    margin 8px 0 0 0
    font-size 14px
</style>
