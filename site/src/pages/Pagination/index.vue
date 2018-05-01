<template>
  <div>
    <comp-show-container>
      <sofa-pagination></sofa-pagination>
    </comp-show-container>
  </div>
</template>

<script>
import SofaPagination from 'packages/pagination';
import CompShowContainer from '../../components/CompShowContainer';

export default {
  name: 'PaginationPage',
  components: {
    CompShowContainer,
    SofaPagination,
  },
  data() {
    return {
    };
  },
};
</script>

<style lang="scss">
</style>
