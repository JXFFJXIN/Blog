var rendomTags = new Vue({
    el:"#random_tags",
    data:{
        tags:[
            "标签1",
            "标签2",
            "标签3",
            "标签4",
            "标签5",
            "标签6",
            "标签7",
            "标签8",
        ]
    },
    computed:{
        randomColor:function(){
            return function(){
                var red = Math.random()*255;
                var green = Math.random()*255;
                var blue = Math.random()*255;
                return `rgba(${red},${green},${blue},1)`;
            }
        },
        randomSize:function(){
            return function(){
                var size = `${Math.random()*20+12}px`;
                return size;
            }
        },
    },
    created:function(){
        //获取标签数据
        console.log("random_tags")
    }
})
var newHot = new Vue({
    el:"#new_hot",
    data:{
        titleList:[
            {
                title:"这是一个标题",
                link:"这是一个链接",
            },
            {
                title:"这是一个标题",
                link:"这是一个链接",
            },
            {
                title:"这是一个标题",
                link:"这是一个链接",
            }
        ]
    },
    computed:{

    },
    created:function(){
        console.log("new_hot")
    }
})
var newComment = new Vue({
    el:"#new_comment",
    data:{
        commentList:[
            {
                name:"这是评论1的作者",
                date:"这是评论1的创建时间",
                comment:"这是评论1的内容",
            },
            {
                name:"这是评论2的作者",
                date:"这是评论2的创建时间",
                comment:"这是评论2的内容",
            },
            {
                name:"这是评论3的作者",
                date:"这是评论3的创建时间",
                comment:"这是评论3的内容",
            }
        ]
    },
    computed:{

    },
    created:function(){
        console.log("comment")
    }
})