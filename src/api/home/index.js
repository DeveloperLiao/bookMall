// 导入封装好的axios
import request from '@/requset'
const home = {
  getBannerList: () => request({ url: 'mock/home/banner', method: 'get' }),
  getHotList: () => request({ url: 'mock/home/hot', method: 'get' }),
  getFloorList: () => request({ url: 'mock/home/floor', method: 'get' })
}
export default home
