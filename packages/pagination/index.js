import Pagination from './src/main';

/* istanbul ignore next */
Pagination.install = (Vue) => {
  Vue.component(Pagination.name, Pagination);
};

export default Pagination;
