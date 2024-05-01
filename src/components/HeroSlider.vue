<template>
  <div>
    <div
      v-for="(slide, index) in slides"
      :key="'hs-' + index"
      class="mask min-h-screen pt-[80px] flex justify-between items-center w-full px-[150px] bg-no-repeat bg-center bg-cover"
      :style="{backgroundImage: `url(${slide.image})`, display: activeSlide === index ? 'flex' : 'none'}"
    >
      <slot :name="`slide-${index}`"></slot>
    </div>
    <div class="dots">
      <button
        v-for="(slide, index) in slides"
        :key="'dot-' + index"
        class="dot"
        :class="{ 'active': activeSlide === index }"
        @click="activeSlide = index"
      ></button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HeroSlider',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeSlide: 0
    }
  }
}
</script>

<style scoped>
.dots {
  /* Add your dots container styles here */
  display: flex;
  justify-content: center;
  gap: 10px;
  position: absolute;
  bottom: 20px;
  left: 80px;
}

.dot {
  /* Add your dot styles here */
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: white;
  cursor: pointer;
}

.dot.active {
  /* Add your active dot styles here */
  width: 25px;
  border-radius: 25px;
}
</style>
