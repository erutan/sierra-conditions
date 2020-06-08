<template>
<svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 400 400">
  <g fill="#258238" transform="translate(27 96)">
    <path d="M331.378695,208 L293.619322,208 L194,51.5547475 L211.785683,24.2234927 C218.051833,14.5921691 233.340804,14.5921691 239.606954,24.2234927 L344.674631,185.704164 C351.049097,195.47114 343.564379,208 331.378695,208 L331.378695,208 Z" opacity=".4"/>
    <path d="M183.444434,67.74625 L273,208 L16.766003,208 C3.69350384,208 -4.33651329,194.355417 2.48439255,183.7225 L115.208266,7.865 C121.931575,-2.62166667 138.327775,-2.62166667 145.029396,7.865 L183.444434,67.74625 Z"/>
  </g>
</svg>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 40
    }
  },

  computed: {
    getWidth() {
      return this.width;
    },

    getHeight() {
      return Math.ceil((this.getWidth / 48) * 48);
    }
  }
};
</script>

