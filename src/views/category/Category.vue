<template>
    <div>

        <div class="wrapper">
            <ul class="content">
                <li>示例1</li>
                <li>示例2</li>
                <li>示例3</li>
                <li>示例4</li>
                <li>示例5</li>
                <li>示例6</li>
                <li>示例7</li>
                <li>示例8</li>
                <li>示例9</li>
                <li>示例10</li>
                <li>示例11</li>
                <li>示例12</li>
                <li>示例13</li>
                <li>示例14</li>
                <li>示例15</li>
                <li>示例16</li>
                <li>示例17</li>
                <li>示例18</li>
                <li>示例19</li>
                <li>示例20</li>
                <li>示例21</li>
                <li>示例22</li>
                <li>示例23</li>
                <li>示例24</li>
                <li>示例25</li>
                <li>示例26</li>
                <li>示例27</li>
                <li>示例28</li>
                <li>示例29</li>
                <li>示例30</li>
                <li>示例31</li>
                <li>示例32</li>
                <li>示例33</li>
                <li>示例34</li>
                <li>示例35</li>
                <li>示例36</li>
                <li>示例37</li>
                <li>示例38</li>
                <li>示例39</li>
                <li>示例40</li>
                <li>示例41</li>
                <li>示例42</li>
                <li>示例43</li>
                <li>示例44</li>
                <li>示例45</li>
                <li>示例46</li>
                <li>示例47</li>
                <li>示例48</li>
                <li>示例49</li>
                <li>示例50</li>
                <li>示例51</li>
                <li>示例52</li>
                <li>示例53</li>
                <li>示例54</li>
                <li>示例55</li>
                <li>示例56</li>
                <li>示例57</li>
                <li>示例58</li>
                <li>示例59</li>
                <li>示例60</li>
                <li>示例61</li>
                <li>示例62</li>
                <li>示例63</li>
                <li>示例64</li>
                <li>示例65</li>
                <li>示例66</li>
                <li>示例67</li>
                <li>示例68</li>
                <li>示例69</li>
                <li>示例70</li>
                <li>示例71</li>
                <li>示例72</li>
                <li>示例73</li>
                <li>示例74</li>
                <li>示例75</li>
                <li>示例76</li>
                <li>示例77</li>
                <li>示例78</li>
                <li>示例79</li>
                <li>示例80</li>
                <li>示例81</li>
                <li>示例82</li>
                <li>示例83</li>
                <li>示例84</li>
                <li>示例85</li>
                <li>示例86</li>
                <li>示例87</li>
                <li>示例88</li>
                <li>示例89</li>
                <li>示例90</li>
                <li>示例91</li>
                <li>示例92</li>
                <li>示例93</li>
                <li>示例94</li>
                <li>示例95</li>
                <li>示例96</li>
                <li>示例97</li>
                <li>示例98</li>
                <li>示例99</li>
                <li>示例100</li>
            </ul>
        </div>


    </div>
</template>

<script>
    import BScroll from 'better-scroll'


    export default {
        name: "Category",
        components : {

        },
        data(){
            return {
                bscroll : null
            }
        },
        created(){

        },
        mounted(){

            this.bscroll = new BScroll('.wrapper',{
                probeType : 3,
                pullUpLoad : true
            });

            this.bscroll.on('scroll',()=>{
                //console.log(position);
            });

            this.bscroll.on('pullingUp',()=>{
                console.log('bbbb');

                setTimeout(()=>{
                    this.bscroll.finishPullUp()
                },2000)
            })
        }
    }
</script>

<style scoped>
    .wrapper{
        height: 200px;
        overflow: hidden;
        background-color: red;
    }

</style>