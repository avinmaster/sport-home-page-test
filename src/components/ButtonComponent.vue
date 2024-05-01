<template>
  <button :class="{'btn': true, 'transparent': transparent}" class="btn h-[57px] px-[30px] uppercase rounded-3xl bg-blue-gradient text-white">
    <slot />
  </button>
</template>

<script>
export default {
  name: 'ButtonComponent',
  props: {
    transparent: {
      default: false,
      type: Boolean
    }
  }
}
</script>

<style>
.btn:hover {
  background: #CB37EE url("/pattern-2.png");
}

.btn.transparent {
  background: none;
  border: 1px solid white;
  color: white;
}
</style>
