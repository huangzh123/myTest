/**
 * Created by gohero on 2016/3/7.
 */
require.config({
    "baseUrl":"../../tool",//基于当前的main.js位置
    "paths":{//优先基于baseUrl
        "jquery":"jquery/jquery-2.1.4.min"
    }
});
require(['jquery'], function($) {
    alert($().jquery);
});
function abc(){

}