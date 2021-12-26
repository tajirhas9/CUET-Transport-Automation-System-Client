import request from '@/utils/request'

export const getDrivers = (params?: any) =>
  request({
    url: '/drivers',
    method: 'get',
    params
  })

export const addNewDriver = (data: {
    name: string
    address: string
    license: boolean
  }) =>
  request({
    url: '/drivers',
    method: 'post',
    data
  })

export const updateDriver = (data: {
    id: number
    name: string
    address: string
    license: boolean
  }) =>
  request({
    url: '/drivers',
    method: 'put',
    data
  })
