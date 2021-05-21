import {request} from 'network/request'

// 获取商品分类列表
export function getCategory(){
    return request({
        url:'/category'
    })
}

//获取商品分类的详细数据
export function getSubcategory(maitKey){
    return request({
        url:'/subcategory',
        params:{
            maitKey
        }
    })
}

//商品详情页
export function getCategoryDetail(miniWallkey,type){
    return request({
        url:'/subcategory/detail',
        params:{
            miniWallkey,
            type
        }
    })
}