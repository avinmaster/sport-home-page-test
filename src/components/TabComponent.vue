<template>
  <div class="-mt-12 h-full w-full">
    <div class="flex gap-8 uppercase text-t-gray h-12">
      <span v-for="(tab, index) in tabs" :key="index" class="cursor-pointer"
            :class="{ 'border-b-8 border-b-purple-600': index === activeTab }"
            @click="activeTab = index; activeItem = 0">{{ tab.title }}</span>
    </div>
    <template v-for="(tab, index) in tabs" :key="'tc-' + index">
      <div v-if="index === activeTab" class="bg-white-pattern px-[40px] py-[90px] pr-[80px]">
        <div v-for="(item, itemIndex) in tab.items" :key="'ti-' + itemIndex" class="flex items-center">
          <div v-if="itemIndex === activeItem" class="w-[317px] h-[317px] shrink-0">
            <img :src="item.image" alt="" class="object-contain w-full h-full">
          </div>
          <div v-if="itemIndex === activeItem" class="text-t-gray overflow-auto h-[317px] px-8">
            <h2 class="text-[30px] leading-[30px] font-bold mb-6" v-html="item.name"></h2>
            <p class="text-[12px] leading-[15px] font-normal mb-4" v-html="item.position"></p>
            <p class="text-[18px] leading-[21px] font-light" v-html="item.description"></p>
          </div>
        </div>
        <div class="flex items-center mt-4">
          <div class="bg-white w-[123px] flex items-center justify-evenly py-[10px]">
            <button @click="activeItem = activeItem - 1" class="my-2" :disabled="activeItem === 0">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                <path :fill="activeItem === 0 ? '#D8D8D8' : 'currentColor'"
                      d="M164.24 203.76a6 6 0 1 1-8.48 8.48l-80-80a6 6 0 0 1 0-8.48l80-80a6 6 0 0 1 8.48 8.48L88.49 128Z" />
              </svg>
            </button>
            <span class="vertical-line h-5"></span>
            <button @click="activeItem = activeItem + 1" class="my-2" :disabled="activeItem === tab.items.length - 1">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 256 256">
                <path :fill="activeItem === tab.items.length - 1 ? '#D8D8D8' : 'currentColor'"
                      d="m180.24 132.24l-80 80a6 6 0 0 1-8.48-8.48L167.51 128L91.76 52.24a6 6 0 0 1 8.48-8.48l80 80a6 6 0 0 1 0 8.48" />
              </svg>
            </button>
          </div>
          <div class="flex flex-column items-center">
            <button v-for="(item, itemIndex) in tab.items" :key="'ti-' + itemIndex"
                    class="w-[60px] h-[60px] rounded-xl mx-2"
                    :class="{ 'bg-t-purple': itemIndex === activeItem }" @click="activeItem = itemIndex">
              <img :src="item.image" alt="" class="object-contain w-full h-full rounded-xl border-2"
                   :class="{ 'border-blue-500': itemIndex === activeItem, 'border-transparent': itemIndex !== activeItem }">
            </button>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  props: {
    tabs: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeTab: 0,
      activeItem: 0
    }
  }
}
</script>

<style scoped>
.vertical-line {
  width: 1px;
  height: 40px;
  background-color: #D8D8D8;
  transform: rotate(15deg);
}
</style>
