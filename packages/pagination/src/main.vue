<template>
  <div class="sofa-pagination">
    pagination
  </div>
</template>
<script>
export default {
  name: 'SofaPagination',

  inject: {
    sofaForm: {
      default: '',
    },

    sofaFormItem: {
      default: '',
    },
  },

  componentName: 'SofaPagination',

  props: {
    value: {},
    label: {},
    disabled: Boolean,
    name: String,
  },

  data() {
    return {
      focus: false,
    };
  },
  computed: {
  },

  methods: {
  },
};
</script>
