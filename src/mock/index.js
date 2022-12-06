import Mock from 'mockjs'
import bannerList from '@/data/banner.json'
import hotList from '@/data/hot.json'
import FloorList from '@/data/floor.json'
import sort from '@/data/sort.json'

const baseURL = 'http://localhost:8080'
Mock.mock(`${baseURL}/mock/home/banner`, 'get', { status: 200, message: 'success', data: bannerList })
Mock.mock(`${baseURL}/mock/home/hot`, 'get', { status: 200, message: 'success', data: hotList })
Mock.mock(`${baseURL}/mock/home/floor`, 'get', { status: 200, message: 'success', data: FloorList })
Mock.mock(`${baseURL}/mock/sort`, 'get', { status: 200, message: 'success', data: sort })
