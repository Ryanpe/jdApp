<template>
  <search class="category">
    <div class="back" slot="left" @click="backClick">
      <span class="back-image"></span>
    </div>
    <div class="to-cart" slot="right" @click="cartClick">
      <span class="cart-icon"></span>
    </div>
  </search>
</template>

<script>
import Search from "../../../components/commom/search/Search";
export default {
  components: {
    Search
  },
    methods:{
        backClick(){
            this.$router.back()
        },
        cartClick(){
          this.$router.push('/cart')
        }
    }
};
</script>

<style lang="less" scoped>
.category{
  border-bottom: 1px solid #e5e5e5
}
.back {
  .back-image {
    margin: 12px 0 0 10px;
    width: 20px;
    height: 20px;
    display: block;
    background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyhpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuNi1jMDY3IDc5LjE1Nzc0NywgMjAxNS8wMy8zMC0yMzo0MDo0MiAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENDIDIwMTUgKE1hY2ludG9zaCkiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6NzRCQTEyN0IzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6NzRCQTEyN0MzOTcwMTFFODk1OEZCOEVCMEE2QUU1NkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDo3NEJBMTI3OTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDo3NEJBMTI3QTM5NzAxMUU4OTU4RkI4RUIwQTZBRTU2RSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/PulQWg8AAAF/SURBVHja7Ni9SsRAEAfwnd1wldiIlqK1td4LiL7CFQaFCHZWgmVqH+GK4FejryA+gPcA9vZ2YnVkd5yAcBLOYJKZ3UWyRbIchPsxSzb/HUBEFfPQKvIxAP89MGn7wPHpuTLOtXoGMdl1WF4rUBug9cX25tpdnufRVHBssXxGhTu0Y6yjs1P6bRTLEo9Lp56ohquLasKcbk5sifvgAMBRRc5oWoau4FIcfRJOaPoQ+i1uwt2H3mZYcdxAdhwnUATHBRTDcQBFcX2B4rg+QC+4rsA9X7gunzpQ1j7S3QuudQWz7HKFjjBbNXNR4QhaYcMCi+LqkwxvtbSX0SWNJVGjAZhQ1T4W8Qk11e2GpkexRP5ZotVBHUmXWwlk122mCZnGAPwV+b3caQxAL0iOsCCK5IpbYkjOwCqC5I787EiJQxMrUurY2YScxNI8Woq0qKZtUpR062NmQB/+RALgqM3/+mgevRhI9imMvVIcewdtqtbH/M8BdOhRD8DA40uAAQDL2thNJDxLvAAAAABJRU5ErkJggg==)
      no-repeat;
    background-size: 100% 100%;
  }
}
.to-cart{
  width: 100%;
  height: 100%;
    .cart-icon{
      position: relative;
      right: 0.4rem;
      display: inline-block;
      background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACwAAAAqCAMAAAD/A0kuAAAAe1BMVEUAAACZmZmampqZmZmampqZmZmampqampqbm5uenp6ampqampqampqcnJyampqZmZmampqZmZmZmZmampqbm5uampqbm5ubm5uampqampqurq7b29uampqampqampqZmZmampqampqZmZmfn5+ZmZmampqampqqqqqZmZmKvX5MAAAAKHRSTlMA9Lv8+R6F7EIU5decJyK4raiLfWReU002MQcE3crIpJBwbBoKzFEM1bcTtgAAAQFJREFUOMvNlNmSgjAQRROCRJZBXEdcR2c7//+FFlXRoKVNP3qemq5TTWgumCzF2WltVFg6vM7uJgN7o2UMdqu2C/hQyxNYqeUZZGp5Cc31cZ/j7PE7yC3swiJf44O9cbgfeTJwDKNLWBuRT/ChnMJClnNwoZzD1+CLO8SbJLJ8giqUNXhZruDcC18uynsYX+tDVwts+9MqOElyDcXt4gyVJK9g0t/MryTPYRZ3PpD/Bpbq/JfQavO/dqSbu/w7JMq7/Mv4/iFbJNImujH/SmL+ZWL+BxHyL31ku1wr/ztpG9mDvUDAmgf+CmnyWzJKbDLS9hPCn0bTt3FDYl8/WX/mC+pzPnfPOji8AAAAAElFTkSuQmCC) no-repeat center;
      background-size: 1.1rem auto;
      width: 1.8rem;
      height: 100%;
    }
}
</style>>
  