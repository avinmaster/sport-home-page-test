<script>
import ButtonComponent from '@/components/ButtonComponent.vue'
import HeroSlider from '@/components/HeroSlider.vue'
import BigSwiperComponent from '@/components/BigSwiperComponent.vue'
import SmallSwiperComponent from '@/components/SmallSwiperComponent.vue'
import TabComponent from '@/components/TabComponent.vue'
import SwiperComponent from '@/components/SwiperComponent.vue'
import { SwiperSlide } from 'swiper/vue'
import { Button } from 'flowbite-vue'

export default {
  name: 'HomeView',
  data: () => ({
    images: [
      'image (1).png',
      'image (2).png',
      'image (3).png',
      'image (4).png',
      'image (5).png',
      'image (6).png'
    ],
    acceptanceVisible: false,
    slides: [
      {
        image: '/фасад.png',
        icon1: '/flash.png',
        icon2: '/bag-2.png',
        date: '12 марта 2024',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        iconColor: '/Icon color.png',
        location: 'Демонстрационный бассейн',
        buttonText: 'Купить билет'
      },
      {
        image: '/фасад.png',
        icon1: '/flash.png',
        icon2: '',
        date: '12 марта 2024',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        iconColor: '/Icon color.png',
        location: 'Демонстрационный бассейн',
        buttonText: 'Купить билет'
      },
      {
        image: '/фасад.png',
        icon1: '/flash.png',
        icon2: '/bag-2.png',
        date: '12 марта 2024',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        iconColor: '/Icon color.png',
        location: 'Демонстрационный бассейн',
        buttonText: 'Купить билет'
      },
      {
        image: '/фасад.png',
        icon1: '/flash.png',
        icon2: '/bag-2.png',
        date: '12 марта 2024',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        iconColor: '/Icon color.png',
        location: 'Демонстрационный бассейн',
        buttonText: 'Купить билет'
      },
      {
        image: '/фасад.png',
        icon1: '/flash.png',
        icon2: '/bag-2.png',
        date: '12 марта 2024',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        iconColor: '/Icon color.png',
        location: 'Демонстрационный бассейн',
        buttonText: 'Купить билет'
      }
    ],
    offersSlides: [
      {
        image: '',
        icon: '/flash.png',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        details: 'Краткие подробности или комментарий',
        price: '500'
      },
      {
        image: '/фасад.png',
        icon: '/flash.png',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        details: 'Краткие подробности или комментарий',
        price: '500'
      },
      {
        image: '',
        icon: '/flash.png',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        details: 'Краткие подробности или комментарий',
        price: '500'
      },
      {
        image: '',
        icon: '/flash.png',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        details: 'Краткие подробности или комментарий',
        price: '500'
      },
      {
        image: '',
        icon: '/flash.png',
        title: 'Спектакль на воде «Сказ о русских берегах»',
        details: 'Краткие подробности или комментарий',
        price: '500'
      }
    ],
    tabs: [
      {
        title: 'Отделение «Плавание»',
        items: [
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров <br/> Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию <br /> Образование: высшее <br /> Стаж работы по специальности: 21 год <br /> Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров <br/> Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию <br /> Образование: высшее <br /> Стаж работы по специальности: 21 год <br /> Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров <br/> Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию <br /> Образование: высшее <br /> Стаж работы по специальности: 21 год <br /> Категория тренера: высшая'
          }
        ]
      },
      {
        title: 'Отделение «Прыжки в воду»',
        items: [
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          }
        ]
      },
      {
        title: 'Отделение «Синхронное плавание»',
        items: [
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          },
          {
            image: '/Bitmap Copy 4.png',
            name: 'Егоров Алексей Владимирович',
            position: 'Тренер - преподаватель по плаванию',
            description: 'Мастер спорта Международного класса по плаванию Образование: высшее Стаж работы по специальности: 21 год Категория тренера: высшая'
          }
        ]
      }
    ]
  }),
  components: {
    Button,
    SwiperComponent,
    TabComponent,
    BigSwiperComponent,
    SmallSwiperComponent,
    ButtonComponent,
    HeroSlider,
    SwiperSlide
  }
}
</script>

<template>
  <div class="w-full h-[80px] flex justify-between absolute z-10 px-[40px]">
    <div class="flex items-center">
      <img src="/Logo-gor-wite Copy 4.svg" class="h-[55px] mr-[40px]">
      <p class="text-white text-[16px] font-roboto-condensed-regular">Г. Екатеринбург,<br> ул. Универсиады, стр. 11</p>
      <p class="text-white text-[20px] ml-[40px]">+7 (343) 222 22 33</p>
    </div>
    <div class="flex items-center">
      <img src="/search copy.png" class="mr-[55px]">
      <img src="/ico-glasses_outlined.png" class="mr-[40px]">
      <p class="text-white leading-[18.75px] text-[16px] mr-[10px]">ВХОД</p>
      <img src="/log-in.png" class="mr-[30px]">
      <img src="/ico-glasses_outlined copy.png">
    </div>
  </div>
  <HeroSlider :slides="[
    { image: '/фасад.png' },
    { image: '/фасад.png' },
    { image: '/фасад.png' },
    { image: '/фасад.png' },
  ]">
    <template v-for="index in 4" :key="'hs-' + index" v-slot:[`slide-${index-1}`]>
      <div>
        <h1 class="text-[50px] text-white leading-[53px] font-bold tracking-tight">{{ index }} СОВРЕМЕННЫЙ КОМПЛЕКС
          <br /> ДЛЯ
          МЕЖДУНАРОДНЫХ СОРЕВНОВАНИЙ <br> И ТРЕНИРОВОК В ЦЕНТРЕ ЕВРАЗИИ</h1>
        <ButtonComponent class="flex items-center mt-[40px]">профессиональный спорт <img src="/search copy 45.png"
                                                                                         class="px-[10px]"
                                                                                         alt="">
        </ButtonComponent>
      </div>
      <div class="max-w-[400px]">
        <div class="text-white border-l-[2px] pl-[30px]">
          <p class="text-[18px] brightness-75 leading-[24px]">Суббота. 03 февраля 14:58:03</p>
          <p class="uppercase text-[29px] font-bold leading-[36px] mt-[30px]">Прямо сейчас в тренировочном бассейне 65
            свободных мест</p>
        </div>
        <ButtonComponent class="flex items-center text-white mt-[40px]">купить абонемент<img src="/bag-2.png"
                                                                                             class="px-[10px]">
        </ButtonComponent>
      </div>
    </template>
  </HeroSlider>
  <div
    v-show="acceptanceVisible"
    class="w-[80%] rounded-full bg-dark-opacity left-[10%] flex justify-between items-center px-[80px] py-[50px] fixed bottom-5">
    <p class="text-white text-[14px] leading-[17px] w-[calc(100%-200px)] font-light">Мы используем Интернет-сервис
      «Яндекс.Метрика» и файлы Cookies. Это позволяет анализировать взаимодействие посетителей с сайтом ДВВС и
      делать его лучше. Оставаясь на сайте ДВВС, Вы соглашаетесь с использованием Интернет-сервиса «Яндекс.Метрика»
      и файлов Cookies.</p>
    <button class="border-white rounded-3xl border-[1px] text-white w-[131px] h-[50px]"
            @click="acceptanceVisible = false"
    >Принять
    </button>
  </div>
  <div class="px-[40px] pt-[90px] pb-[150px]">
    <div class="uppercase">
      <div>
        <p class="text-[60px] leading-[53px] font-bold text-t-gray">ближайшие события</p>
        <div class="flex">
          <p class="text-[16px] leading-[18.75px] font-normal text-t-gray mr-[20px] mt-[20px]">календарь всех
            событий</p>
          <img src="/arrow-right copy 11.png"
               class="mt-[18px]"
               alt="">
        </div>
      </div>
    </div>
    <div class="mt-8 z-10 flex flex-col w-[816px]">
      <big-swiper-component :slides="slides" />
    </div>
  </div>
  <div class="flex justify-stretch">
    <div class="p-[40px] flex justify-center flex-col w-full max-w-[580px] shrink-0 bg-blue-gradient">
      <p class="font-bold text-[50px] text-white leading-[66px]">СПОРТИВНАЯ ШКОЛА ИМЕНИ АЛЕКСАНДРА ПОПОВА</p>
      <div class="flex items-center justify-between">
        <button
          class="uppercase bg-button-purple mt-[40px] text-white h-[60px] px-[30px] rounded-full">подробнее
        </button>
        <p class="flex mt-[45px] place-items-center text-white uppercase font-normal leading-[18.75px] text-[16px]">
          Тренерский состав <img src="/arrow-right copy 11.png" class="pl-[5px]">
        </p>
      </div>
    </div>
    <tab-component :tabs="tabs" />
  </div>

  <div class="mt-[120px] px-[40px]">
    <p class="text-[60px] leading-[53px] font-bold text-t-gray uppercase">Свежие новости</p>
    <div class="flex mt-[60px]">
      <div style="background: url(/dji-0068-----2.png) no-repeat center center / cover;"
           class="h-[632px] flex flex-col justify-between w-full max-w-[726px] rounded-xl">
        <div class="m-[40px] w-[51px] h-[51px] shrink-0 rounded-full justify-center items-center flex bg-icon-pattern"
        >
          <img src="/flash.png" alt="">
        </div>
        <div class="text-white px-[65px] pb-2">
          <h3 class="font-bold text-[26px] mb-4">Пост гордости!</h3>
          <p class="mb-6 text-[16px] font-light">Наши спортсмены завоевали медали на областных соревнованиях по прыжкам
            в воду, которые проходили во Дворце
            молодежи с 12 по 14 февраля. Всего боролись за право быть лучшими 80 человек. Из них 22 участника из Дворца
            водных видов спорта. В копилке наших спортсменов по прыжкам в воду 6 золотых, 3 серебряных и 3 бронзовые
            награды. Всего было разыграно 12 золотых, 12 серебряных и 12 бронзовых медалей.</p>
          <p>12 марта 2024</p>
        </div>
      </div>
      <div class="flex-1 overflow-auto h-[632px] px-[65px] text-t-gray">
        <div v-for="i in 6" :key="'news-' + i" class="mb-[40px] relative post-block">
          <div class="transparent-oval -z-10 right-0 bottom-[calc((100%-200px)/2)]"></div>
          <h3 class="font-bold text-[26px] mb-4">Шоу Киселевой во Дворце водных видов спорта позади.</h3>
          <p class="mb-6 text-[16px] font-light">Нам приятно, что в отзывах вы пишете, что это было незабываемо и вы уже
            скучаете.
            Поэтому специально для вас сегодня мы покажем то, что не доступно обычному зрителю - тайную жизнь закулисья.
            И ответим на вопрос - почему пришлось сменить установки спектакля.
            Вашему вниманию рубрика «Не вошедшее - Сказ о русских берегах</p>
          <div class="flex justify-between">
            <p>10 марта 2024</p>
            <a href="#" class="w-[42px] h-[42px] flex items-center justify-center rounded-full link-btn">-></a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div style="background: url(/frame-65-4.png);" class="mt-[120px] h-[658px] p-[40px]">
    <p class="text-white text-[60px] font-bold leading-[53px] uppercase">Специальные предложения</p>
    <div class="mt-8 z-10 flex flex-col w-[396px]">
      <small-swiper-component :slides="offersSlides"></small-swiper-component>
      <div class="flex items-center">
        <p class="text-[16px] leading-[18.75px] font-normal text-white mr-[20px] mt-[20px]">
          ВСЕ ПРЕДЛОЖЕНИЯ
        </p>
        <img src="/arrow-right copy 11.png"
             class="mt-[18px]"
             alt="">
      </div>
    </div>
  </div>

  <div class="mt-[120px] px-[40px]">
    <div class="flex justify-between">
      <p class="text-t-gray text-[60px] font-bold leading-[53px] uppercase">Галерея</p>
      <div class="flex items-center gap-4">
        <p>Фильтр</p>
        <button-component @click="images = images.sort(() => Math.random() - 0.5)">
          В случайном порядке
        </button-component>
        <button-component @click="images = images.sort((a, b) => a.localeCompare(b))">
          Мероприятия
        </button-component>
        <button-component @click="images = images.sort((a, b) => b.localeCompare(a))">
          Сооружение
        </button-component>
      </div>
    </div>
    <div class="mt-[60px]">
      <img v-for="(image, index) in images" :key="index" :src="image" alt="Image" class="inline-block h-[282px]" />
    </div>
  </div>

  <div class="mt-[120px] pr-[80px] pl-[40px] overflow-hidden w-full">
    <div class="relative overflow-hidden w-full">
      <p class="text-t-gray text-[60px] font-bold uppercase">партнёры</p>
      <div class="mt-8 z-10 flex flex-col w-[336px]">
        <swiper-component>
          <swiper-slide v-for="i in 15" :key="'p-' + i">
            <div>
              <div class="pt-[60px] pb-[30px] px-[70px]">
                <div class="w-[183px] h-[183px] rounded-full bg-circle-pattern"></div>
              </div>
              <p class="uppercase text-[30px] text-t-gray mx-[40px] font-bold leading-[31px] w-[236px]">название
                организации</p>
              <p class="text-[14px] text-t-gray font-light mt-[20px] mx-[70px] leading-[21px] w-[168.57px]">Краткие
                подробности или комментарий</p>
            </div>
          </swiper-slide>
        </swiper-component>
      </div>
    </div>
  </div>

  <div class="mt-[120px] bg-footer-pattern font-thin h-[372px] px-[40px]">
    <div class="flex gap-16 justify-between h-full max-h-[192px]">
      <div class="flex-1 border-b-[1px] pb-[40px] flex">
        <img src="/public/Logo-gor-wite Copy 4.svg" class="w-[400px] pt-[10px]">
        <div class="flex flex-col ml-[40px]">
          <p class="text-white text-[20px] leading-[21px] w-[370px] mt-[40px]">г.Екатеринбург, ул.Универсиады,
            стр.11</p>
          <div class="flex flex-row pt-[20px]">
            <p class="text-white text-[20px] leading-[21px] border-r-[1px] pr-[10px]">+7 343 222-22-33</p>
            <p class="text-white text-[20px] leading-[21px] pl-[10px]"> info@dvvs-ekb.ru</p>
          </div>
        </div>
      </div>
      <div class="w-[454px]">
        <p class="text-[18px] leading-[32px] text-white font-bold flex flex-col mt-[35px]">Время работы <span
          class="font-light">Ежедневно с 8:00 до 21:00</span></p>
        <p class="text-[18px] leading-[32px] text-white font-bold flex flex-col">Почтовый адрес <span
          class="font-light">620060, г. Екатеринбург, ул. Универсиады, строение 11</span>
        </p>
      </div>
    </div>
    <div class="flex gap-16 justify-center h-full max-h-[100px] items-center mt-[45px]">
      <p class="flex-1 text-white text-[14px] w-[785px] leading-[21px] mt-[45px]">© 2024 Государственное автономное нетиповое
        образовательное учреждение Свердловской области «ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА» со структурным подразделением
        «Спортивная школа имени А.В. Попова»</p>
      <div class="flex items-center justify-between w-[454px]">
        <p class="font-bold uppercase text-white text-[35px] leading-[45px]">социальные сети</p>
        <img src="/public/.png">
        <img src="/public/.png">
      </div>
    </div>
  </div>
</template>

<style scoped>
.transparent-oval {
  opacity: 0;
  position: absolute;
  width: 200px;
  height: 200px;
  background: #dcb7ff;
  border-radius: 50%;
  transition: opacity 3s;
}

.post-block:hover .transparent-oval {
  opacity: 1;
}

.post-block:hover .link-btn {
  @apply bg-blue-gradient;
  color: #fff;
}
</style>
