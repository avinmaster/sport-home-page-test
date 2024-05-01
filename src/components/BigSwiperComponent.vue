<template>
  <swiper :options="swiperOptions" className="w-full">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div
        :style="{backgroundImage: `url(${slide.image})`}"
        class="mask mask-round rounded-xl w-[806px] h-[343px] flex flex-col justify-between px-8 pt-6 pb-4"
      >
        <div class="flex">
          <div v-if="slide.icon1"
               class="w-[51px] h-[51px] mr-[20px] rounded-full items-center flex justify-center bg-icon-pattern">
            <img :src="slide.icon1" alt="">
          </div>
          <div v-if="slide.icon2"
               class="w-[51px] h-[51px] rounded-full items-center flex justify-center bg-icon-pattern">
            <img :src="slide.icon2" alt="">
          </div>
        </div>
        <div class="flex justify-between items-end">
          <div class="uppercase">
            <p class="text-white leading-[21px] font-normal">{{ slide.date }}</p>
            <p class="text-white leading-[53px] font-bold text-[20px] w-[500px] truncate">{{ slide.title }}</p>
            <div class="flex">
              <img :src="slide.iconColor" alt="">
              <p class="font-light text-white text-[14px] leading-[21px] ml-[10px]">{{ slide.location }}</p>
            </div>
          </div>
          <ButtonComponent class="text-[16px]">{{ slide.buttonText }}</ButtonComponent>
        </div>
      </div>
    </swiper-slide>
  </swiper>
</template>

<script>
import { ref } from 'vue'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/swiper-bundle.css'
import ButtonComponent from '@/components/ButtonComponent.vue'

export default {
  name: 'BigSwiperComponent',
  props: {
    slides: {
      type: Array,
      required: true
    }
  },
  components: {
    Swiper,
    SwiperSlide,
    ButtonComponent
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
