/**
 * Created by gohero on 2016/3/7.
 */
require.config({
    "baseUrl":"../../tool",//���ڵ�ǰ��main.jsλ��
    "paths":{//���Ȼ���baseUrl
        "jquery":"jquery/jquery-2.1.4.min"
    }
});
require(['jquery'], function($) {
    alert($().jquery);
});
function abc(){

}