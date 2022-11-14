//引入mockjs
import Mock from 'mockjs'
import projectData from '../../public/projectData.json'

//请求地址 请求数据
Mock.mock('/mock/projectData', { code: 200, data: projectData })