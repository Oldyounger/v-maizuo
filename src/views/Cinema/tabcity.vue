<template>
    <div name="city" slot='city' class="tab tab-city">
        <ul>
            <li
                v-for="region in regions"
                :key="region.id"
            >
                {{region.title}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            regions:[
                {id:1,title:"全城"},
                {id:2,title:"市北区"},
                {id:3,title:"市南区"},
                {id:4,title:"李沧区"},
                {id:5,title:"崂山区"},
                {id:6,title:"城阳区"},
                {id:7,title:"即墨区"},
                {id:8,title:"黄岛区"},
                {id:9,title:"胶州市"},
                {id:10,title:"莱西市"}

            ]
        }
    }
}
</script>
<style lang="scss" scoped>
    ul{
        width:100%;
        display:flex;
        flex-wrap: wrap;
        li{
            width:25%;

        }
    }
</style>
