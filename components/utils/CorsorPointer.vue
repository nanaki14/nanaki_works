<template>
  <div class="CorsorPointer">
    <span class="CorsorPointer__dot" />
    <span class="CorsorPointer__over">
      <span class="CorsorPointer__overEffect" />
    </span>
  </div>
</template>

<script>
import CursorMove from '@/assets/javascript/CursorMove'

export default {
  name: 'CorsorPointer',
  props: {
    isLoading: {
      type: Boolean,
      required: true
    }
  },
  watch: {
    isLoading: function(next, prev) {
      if (!next && prev) {
        const cursor = new CursorMove({})
        cursor.init()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
$wrapper-class: CorsorPointer;
$dot-class: CorsorPointer__dot;
$over-class: CorsorPointer__over;
$effect-class: CorsorPointer__overEffect;

$dot-color: #555;
$over-color: #555;

$ease-out-cubic: cubic-bezier(0.215, 0.61, 0.355, 1);

.#{$wrapper-class} {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  z-index: 10000;
  pointer-events: none;
  * {
    filter: hue-rotate(180deg);
  }
}

.#{$dot-class} {
  position: absolute;
  width: 6px;
  height: 6px;
  margin: -3px 0 0 -3px;
  background-color: $dot-color;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  pointer-events: none;
  z-index: 2;
  &.is-visible {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.3s $ease-out-cubic, opacity 0.5s ease;
  }
  &.is-hide {
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s $ease-out-cubic, opacity 0.5s ease;
  }
}

.#{$over-class} {
  position: absolute;
  width: 50px;
  height: 50px;
  margin: -25px 0 0 -25px;
  border: 1px solid $over-color;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: opacity 0.5s ease;
  overflow: hidden;
  pointer-events: none;
  z-index: 1;
  &.is-visible {
    opacity: 1;
    transform: scale(1);
    transition: transform 0.3s $ease-out-cubic, opacity 0.5s ease;
  }
  &.is-hide {
    opacity: 0;
    transform: scale(0);
    transition: transform 0.3s $ease-out-cubic, opacity 0.5s ease-out;
  }
  &.is-hover {
    transform: scale(1.7);
    transition: transform 0.3s $ease-out-cubic;

    .#{$effect-class} {
      animation: 0.8s cmEffectAnim $ease-out-cubic both;
    }
  }
  &.is-active {
    transform: scale(0.7);
    transition: transform 0.3s $ease-out-cubic;
    .#{$effect-class} {
      animation: 0.8s cmEffectAnim $ease-out-cubic both;
    }
  }
}

.#{$effect-class} {
  position: absolute;
  top: 50%;
  left: 50%;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: #555;
  opacity: 0;
  transform: translate(-50%, -50%);
}

@keyframes cmEffectAnim {
  0% {
    width: 0%;
    height: 0%;
    opacity: 1;
  }
  100% {
    width: 100%;
    height: 100%;
    opacity: 0;
  }
}
</style>
