<template>
  <swiper :options="swiperOptions" className="w-full">
    <slot></slot>
  </swiper>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'

export default {
  name: 'SwiperComponent',
  components: {
    Swiper,
    SwiperSlide
  },
  setup() {
    const swiperOptions = ref({
      slidesPerView: 'auto', // Dynamic number of slides per view
      spaceBetween: 10, // No gaps between slides
      navigation: true,
      pagination: { clickable: true }
    })

    return { swiperOptions }
  }
}
</script>
