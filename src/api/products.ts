import api from '../plugins/axios';

// const url = import.meta.env.VITE_BASE_URL;

async function apifetchProducts() {
  return api.get('api/product/all');
}


export {
  apifetchProducts,
};
