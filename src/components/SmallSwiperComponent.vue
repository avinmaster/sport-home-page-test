<template>
  <swiper :options="swiperOptions" className="w-full">
    <swiper-slide v-for="(slide, index) in slides" :key="index">
      <div class="w-[386px] mt-[60px] rounded-2xl h-[343px] flex flex-col justify-between px-6 py-4"
           :class="{'bg-white': !slide.image }"
           :style="{ backgroundImage: `url(${slide.image})` }">
        <div class="flex">
          <div>
            <p
              class="text-t-gray uppercase text-[30px] shrink-0 font-bold leading-[31px]"
              :class="{'text-white': slide.image }"
            >{{ slide.title }}</p>
            <p
              class="text-t-gray font-light text-[14px] w-[240px] leading-[21px] mt-4"
              :class="{'text-white': slide.image }"
            >{{ slide.details }}</p>
          </div>
          <div class="w-[51px] h-[51px] shrink-0 rounded-full justify-center items-center flex"
               :class="{'bg-icon-pattern': !slide.image, 'border-2 border-white': slide.image }"
          >
            <img :src="slide.icon" alt="">
          </div>
        </div>
        <div class="flex items-center h-[51px] justify-between">
          <p class="text-t-gray font-bold text-[24px]"
             :class="{'text-white': slide.image }"
          >{{ slide.price }} ₽</p>
          <ButtonComponent :transparent="!!slide.image" class="flex items-center">Забронировать <img src="/bag-2.png"
                                                                                                     class="pl-[10px]">
          </ButtonComponent>
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
  name: 'SmallSwiperComponent',
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
