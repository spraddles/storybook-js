<template>
  <div :class="classes">
      This is a Heading
  </div>
</template>

<script>
import './heading.css';

export default {
  name: 'my-heading',

  props: {
    size: {
      type: String,
      value: 'small'
    }
  },

  computed: {
    classes() {
      return {
        'heading': true,
        /* do some other computed thing here */
      }
    }
  },

  methods: {}

}
</script>