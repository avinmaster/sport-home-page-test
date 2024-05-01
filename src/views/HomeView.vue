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
    activeTab: 0,
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
    <div class="lg:flex items-center hidden">
      <img src="/Logo-gor-wite Copy 4.svg" class="h-[55px] mr-[40px]">
      <p class="text-white text-[16px] font-roboto-condensed-regular">Г. Екатеринбург,<br> ул. Универсиады, стр. 11</p>
      <p class="text-white text-[20px] ml-[40px]">+7 (343) 222 22 33</p>
    </div>
    <div class="lg:flex items-center justify-between gap-[40px] hidden">
      <img src="/search copy.png" alt="" class="cursor-pointer">
      <img src="/ico-glasses_outlined.png" alt="" class="cursor-pointer">
      <div class="flex items-center gap-[10px] cursor-pointer">
        <p class="text-white leading-[18.75px] text-[16px]">ВХОД</p>
        <img src="/log-in.png">
      </div>
      <img src="/ico-glasses_outlined copy.png" alt="" class="cursor-pointer">
    </div>
    <div class="lg:hidden flex items-center justify-between w-full">
      <div class="flex gap-[20px]">
        <img src="/search copy.png" alt="" class="cursor-pointer">
        <img src="/ico-glasses_outlined.png" alt="" class="cursor-pointer">
        <img src="/log-in.png" alt="" class="cursor-pointer">
      </div>
      <div>
        <img src="/ico-glasses_outlined copy.png" alt="" class="cursor-pointer">
      </div>
    </div>
  </div>
  <div
    class="lg:hidden mask pb-[40px] pt-[100px] px-[20px] block w-full bg-no-repeat bg-center bg-cover"
    style="background-image: url('/фасад.png')">
    <img src="/Logo-gor-wite Copy 4.png" alt="" class="w-[180px] mx-auto mb-[30px]">
    <div class="text-white text-center">
      <p class="font-light text-[14px] mb-2">Суббота, 03 февраля 14:58:03</p>
      <h2 class="text-[30px] leading-[30px] mb-[80px]">Прямо сейчас в тренировочном бассейне
        65 свободных мест</h2>
    </div>
    <ButtonComponent class="flex items-center w-full max-w-[400px] mx-auto mt-[40px] text-left justify-between">купить
      абонемент<img src="/bag-2.png"
                    class="px-[10px]">
    </ButtonComponent>
    <ButtonComponent class="flex items-center w-full max-w-[400px] mx-auto mt-[10px] text-left justify-between">
      профессиональный спорт <img src="/search copy 45.png"
                                  class="px-[10px]"
                                  alt="">
    </ButtonComponent>
  </div>
  <div class="lg:block hidden">
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
  </div>
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
  <div class="px-[40px] lg:pt-[90px] pt-[40px] pb-[150px]">
    <div class="uppercase">
      <div class="lg:text-left text-center">
        <p class="lg:text-[60px] text-[33px] leading-[53px] font-bold text-t-gray">ближайшие события</p>
        <div class="flex lg:justify-start justify-center">
          <p class="lg:block hidden text-[16px] leading-[18.75px] font-normal text-t-gray mr-[20px] mt-[20px]">календарь
            всех
            событий</p>
          <p class="lg:hidden block text-[16px] leading-[18.75px] font-normal text-t-gray mr-[20px] mt-[20px]">
            все события
          </p>
          <img src="/arrow-right copy 11.png"
               class="mt-[18px]"
               alt="">
        </div>
      </div>
    </div>
    <div class="mt-8 z-10 flex flex-col lg:w-[816px] w-[270px]">
      <big-swiper-component :slides="slides" />
    </div>
  </div>
  <div class="lg:flex justify-stretch hidden">
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

  <div class="lg:hidden text-center">
    <div class="mb-8 pt-[40px] pb-[130px] flex justify-center flex-col w-full shrink-0 bg-blue-gradient">
      <p class="font-bold text-[48px] text-white leading-[48px]">СПОРТИВНАЯ ШКОЛА ИМЕНИ АЛЕКСАНДРА ПОПОВА</p>
      <div class="flex items-center justify-center">
        <p class="text-[16px] leading-[18.75px] uppercase text-white font-normal text-t-gray mr-[20px] mt-[20px]">
          подробнее
        </p>
        <img src="/arrow-right copy 11.png"
             class="mt-[18px]"
             alt="">
      </div>
      <h2 class="mt-[45px] text-white uppercase text-[33px]">
        Тренерский состав
      </h2>

      <div>
        <ButtonComponent v-for="(tab, index) in tabs" :key="tab.title"
                         class="bg-none border-2 border-white mx-auto flex items-center mt-[40px]"
                         :class="{ 'bg-button-purple border-none': activeTab === index }"
                         @click="activeTab = index"
        >
          {{ tab.title }}
        </ButtonComponent>
      </div>

    </div>
    <div class="-mt-[100px]">
      <div class="px-[15px] z-10 flex flex-col w-[280px]" v-for="(tab, index) in tabs" :key="tab.title">
        <swiper-component v-if="index === activeTab">
          <swiper-slide v-for="(item, itemIndex) in tab.items" :key="'ti-' + itemIndex">
            <div class="pr-[10px]">
              <div>
                <img :src="item.image" alt="" class="object-contain w-full h-full">
              </div>
              <div class="text-left text-t-gray">
                <h2 class="text-[30px] leading-[30px] font-bold mb-6" v-html="item.name"></h2>
                <p class="text-[12px] leading-[15px] font-normal mb-4" v-html="item.position"></p>
                <p class="text-[18px] leading-[21px] font-light" v-html="item.description"></p>
              </div>
            </div>
          </swiper-slide>
        </swiper-component>
      </div>
    </div>
  </div>

  <div class="mt-[120px] px-[40px]">
    <p class="text-center lg:text-left text-[33px] lg:text-[60px] leading-[53px] font-bold text-t-gray uppercase">Свежие
      новости</p>
    <div class="lg:flex mt-[60px]">
      <div style="background: url(/dji-0068-----2.png) no-repeat center center / cover;"
           class="h-[200px] lg:h-[632px] flex flex-col justify-between w-full max-w-[726px] rounded-xl">
        <div
          class="lg:static absolute right-[40px] m-[20px] lg:m-[40px] w-[51px] h-[51px] shrink-0 rounded-full justify-center items-center flex bg-icon-pattern"
        >
          <img src="/flash.png" alt="">
        </div>
        <div class="text-white px-[65px] pb-2 hidden lg:block">
          <h3 class="font-bold text-[26px] mb-4">Пост гордости!</h3>
          <p class="mb-6 text-[16px] font-light">Наши спортсмены завоевали медали на областных соревнованиях по прыжкам
            в воду, которые проходили во Дворце
            молодежи с 12 по 14 февраля. Всего боролись за право быть лучшими 80 человек. Из них 22 участника из Дворца
            водных видов спорта. В копилке наших спортсменов по прыжкам в воду 6 золотых, 3 серебряных и 3 бронзовые
            награды. Всего было разыграно 12 золотых, 12 серебряных и 12 бронзовых медалей.</p>
          <p>12 марта 2024</p>
        </div>
      </div>
      <div class="flex-1 lg:overflow-auto lg:h-[632px] lg:px-[65px] text-t-gray">
        <div v-for="i in 6" :key="'news-' + i"
             class="mb-[40px] relative post-block rounded-xl lg:bg-transparent bg-gray-100 lg:p-0 p-4">
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

    <div class="lg:hidden block">
      <p class="text-center uppercase">
        Показать больше
      </p>
      <div class="flex items-center justify-center">
        <p class="text-[16px] uppercase leading-[18.75px] font-normal mr-[20px] mt-[20px]">
          ВСЕ НОВОСТИ
        </p>
        <img src="/arrow-right copy 11.png"
             class="mt-[18px]"
             alt="">
      </div>
    </div>
  </div>

  <div style="background: url(/frame-65-4.png);" class="mt-[120px] h-[658px] p-[40px]">
    <p class="text-white text-center lg:text-left text-[33px] lg:text-[60px] font-bold leading-[53px] uppercase">
      Специальные предложения</p>
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
    <div class="lg:flex items-center justify-between">
      <h2 class="text-t-gray text-center lg:text-left text-[33px] lg:text-[60px] font-bold leading-[53px] uppercase">
        Галерея</h2>
      <div class="flex items-center gap-4 overflow-x-auto overflow-y-hidden h-[90px]">
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

  <div class="mt-[120px] lg:pr-[80px] pr-[40px] pl-[40px] overflow-hidden w-full">
    <div class="relative overflow-hidden w-full">
      <h2 class="text-t-gray text-center lg:text-left text-[33px] lg:text-[60px] font-bold uppercase">партнёры</h2>
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

  <div class="mt-[120px] bg-footer-pattern font-thin px-[40px] pb-[40px]">
    <div class="lg:text-left text-center lg:flex gap-16 justify-between h-full lg:max-h-[192px]">
      <div class="flex-1 lg:border-b-[1px] pb-[40px] lg:flex">
        <img src="/Logo-gor-wite Copy 4.svg" class="w-full max-w-[400px] pt-[10px] mx-auto">
        <div class="lg:flex flex-col lg:ml-[40px]">
          <p class="text-white text-[20px] leading-[21px] mt-[40px]">г.Екатеринбург, ул.Универсиады,
            стр.11</p>
          <div class="lg:flex flex-row pt-[20px]">
            <p class="text-white text-[20px] leading-[21px] lg:border-r-[1px] pr-[10px]">+7 343 222-22-33</p>
            <p class="text-white text-[20px] leading-[21px] pl-[10px]"> info@dvvs-ekb.ru</p>
          </div>
        </div>
      </div>
      <div class="lg:w-[454px]">
        <p class="text-[18px] leading-[32px] text-white font-bold lg:flex flex-col mt-[35px]">Время работы <span
          class="font-light">Ежедневно с 8:00 до 21:00</span></p>
        <p class="text-[18px] leading-[32px] text-white font-bold lg:flex flex-col">Почтовый адрес <span
          class="font-light">620060, г. Екатеринбург, ул. Универсиады, строение 11</span>
        </p>
      </div>
    </div>
    <div
      class="flex lg:flex-row flex-col-reverse lg:gap-16 justify-center lg:h-full lg:max-h-[100px] items-center mt-[45px]">
      <p class="flex-1 text-white text-[14px] leading-[21px] mt-[45px] lg:border-t-0 border-t-2 pt-[40px]">© 2024
        Государственное автономное
        нетиповое
        образовательное учреждение Свердловской области «ДВОРЕЦ ВОДНЫХ ВИДОВ СПОРТА» со структурным подразделением
        «Спортивная школа имени А.В. Попова»</p>
      <div class="lg:flex items-center justify-between lg:w-[454px] lg:text-left text-center">
        <p class="font-bold uppercase text-white text-[35px] leading-[45px] lg:mb-0 mb-8">социальные сети</p>
        <div class="gap-[20px] flex justify-between">
          <img src="/.png" class="lg:w-auto w-[50px]">
          <img src="/.png" class="lg:w-auto w-[50px]">
        </div>
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
