// 导入封装好的axios
import request from '@/requset'
const home = {
  getSortList: () => request({ url: 'mock/sort', method: 'get' })
}
export default home
