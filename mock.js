import Mock from 'mockjs';

// 使用Mock.js进行数据模拟
Mock.mock('/api/user', 'get', {
  name: '@name',
  age: '@integer(18, 60)',
  'gender|1': ['男', '女'],
});
