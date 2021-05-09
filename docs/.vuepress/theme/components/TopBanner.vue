<template>
  <div class="top-banner-wrap">
    <div>
      <h1 class="title">会编 · 零基础学编程</h1>
      <h3 class="des">从 JavaScript 开始，学习一门编程语言</h3>
    </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            banners: []
        }
    },
    mounted() {
        this.banners = this.$page.frontmatter.banners;
    },
    methods: {
        open(item) {
            window.open(item.link, '_blank');
        }
    }
}
</script>

<style lang="stylus">
.top-banner-wrap
  background-color #fff
  text-align center
  padding 40px 0
  margin-top 10px
</style>
