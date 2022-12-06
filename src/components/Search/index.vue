<template>
  <!-- search  -->
  <div class="search">
    <div class="check">
      <div class="categories">
        全站<svg t="1665578510248" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="7479" width="11" height="11">
          <path d="M301.99808 44.9792l-47.04768 47.09888 419.9424 419.98848-419.9424 419.90144 47.0528 47.0528 419.93728-419.89632h0.00512l47.104-47.09888-47.0528-47.04768z" p-id="7480" fill="#666666"></path>
        </svg>
        <div class="all">
          <ul>
            <li><a href="#">言情</a></li>
            <li><a href="#"> 文艺</a></li>
            <li><a href="#"> 武侠</a></li>
            <li><a href="#"> 科技</a></li>
            <li><a href="#"> 心理</a></li>
            <li><a href="#"> 教育</a></li>
            <li><a href="#"> 童书</a></li>
            <li><a href="#"> 生活</a></li>
            <li><a href="#"> 经营</a></li>
            <li><a href="#"> 期刊</a></li>
            <li><a href="#"> 其他</a></li>
          </ul>
        </div>
      </div>

      <input type="text" placeholder="输入你想要的书籍" />
      <a href="#"
        ><svg t="1665410753862" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2872" width="32" height="32">
          <path
            d="M405.333333 725.333333a320 320 0 1 0 0-640 320 320 0 0 0 0 640z m0 42.666667a362.666667 362.666667 0 1 1 0-725.333333 362.666667 362.666667 0 0 1 0 725.333333zM730.496 730.496a42.666667 42.666667 0 0 0 0 60.373333l150.869333 150.826667a42.666667 42.666667 0 1 0 60.330667-60.330667l-150.826667-150.869333a42.666667 42.666667 0 0 0-60.373333 0z m-30.165333-30.165333a85.333333 85.333333 0 0 1 120.704 0l150.826666 150.869333a85.333333 85.333333 0 1 1-120.661333 120.661333l-150.869333-150.826666a85.333333 85.333333 0 0 1 0-120.704z"
            p-id="2873"
            fill="#ffffff"
          ></path>
          <path d="M640 670.165333l30.208-30.165333 70.229333 70.229333-30.165333 30.165334z" p-id="2874" fill="#ffffff"></path></svg
      ></a>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Search'
}
</script>

<style lang="less" scoped>
.search {
  width: 1400px;
  margin: 0 auto;
  position: relative;
  .check {
    width: 530px;
    position: absolute;
    top: 0px;
    left: 430px;
    display: flex;
    box-shadow: 10px 10px 15px #888888;
    border-radius: 10px;
    .categories {
      width: 60px;
      height: 50px;
      font-size: 14px;
      color: #666;
      text-align: center;
      line-height: 50px;
      background-color: #fff;
      border-radius: 10px 0px 0px 10px;
      &:hover {
        cursor: pointer;
      }
      &:hover .all {
        opacity: 1;
        display: block;
      }
      .all {
        position: absolute;
        top: 50px;
        background-color: #fff;
        opacity: 0;
        display: none;
        transition: opacity 0.5s;
        z-index: 999;
        ul li {
          line-height: 30px;
          > a {
            display: inline-block;
            width: 80px;
            height: 30px;
            font-size: 12px;
            text-align: center;
            line-height: 30px;
          }
          > a {
            &:hover {
              color: #fff;
              background-image: linear-gradient(to right, #ff1534, #ef7c63);
            }
          }
        }
      }
    }

    > input {
      width: 400px;
      height: 50px;
      outline: none;
      border: 0;
      padding-left: 5px;
    }
    > a {
      display: inline-block;
      width: 130px;
      height: 50px;
      line-height: 70px;
      text-align: center;
      background-color: #d70e30;
      color: white;
      margin-left: -5px;
      border-radius: 0 10px 10px 0;
    }
  }
}
</style>
