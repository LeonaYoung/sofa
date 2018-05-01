<template>
  <div>
    <comp-show-container>
      <sofa-pagination :currentPage="1" :pageCount="100" :pagerCount="5"></sofa-pagination>
    </comp-show-container>

    <comp-show-container>
      <sofa-pagination :currentPage="9" :pageCount="100" :pagerCount="5"></sofa-pagination>
    </comp-show-container>

    <comp-show-container>
      <sofa-pagination :currentPage="50" :pageCount="100" :pagerCount="7"></sofa-pagination>
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
