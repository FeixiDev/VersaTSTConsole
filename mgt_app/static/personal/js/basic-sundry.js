//var tid = Date.parse(new Date()).toString();// 获取到毫秒的时间戳，精确到毫秒
//var tid = tid.substr(0, 10);
//var mgtIp = get_mgt_ip();

//function get_mgt_ip(){
//	var obj = new Object();
//	$.ajax({
//		url : "/mgtip",
//		type : "GET",
//		dataType : "json",
//		async:false,
//		success : function(data) {
//			obj =  "http://"+data["ip"];
//		}
//	});
//	return obj;
//}

function get_vlpx_ip () {
  var obj = new Object()
  $.ajax({
    url: '/vplxip',
    type: 'GET',
    dataType: 'json',
    async: false,
    success: function (data) {
      obj = 'http://' + data['ip']
    }
  })

  return obj
}

layui.use(['form', 'layedit', 'laydate', 'element', 'util'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  var util = layui.util
  var selectedid = 'down_host'

  form.verify({
    ip: [
      /^((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})(\.((2([0-4]\d|5[0-5]))|[1-9]?\d|1\d{2})){3}$/,
      '请填写正确的 IP 格式'
    ],
    not_require_number: function (value) {
      if (value && !new RegExp('^[0-9]+$').test(value)) return '填写数字'
    }
  })

  form.on('select(test_action)', function (data) {
    document.getElementById(selectedid).hidden = true
    if (data.value == 'node_down') {
      document.getElementById('down_host').hidden = false
      selectedid = 'down_host'
    }
    if (data.value == 'switch_port_down') {
      document.getElementById('down_switch').hidden = false
      selectedid = 'down_switch'
    }
    if (data.value == 'interface_down') {
      document.getElementById('down_interface').hidden = false
      selectedid = 'down_interface'
    }
    if (data.value == 'manual') {
      document.getElementById('manual').hidden = false
      selectedid = 'manual'
    }
  })

  util.event('lay-active', {
    addHost: function (othis) {
      var str =
        '<div class="layui-form-item" >' +
        '<label class="layui-form-label">test_node_hostname</label>' +
        '<div class="layui-input-inline">' +
        '<input type="text" placeholder="请输入正确值" name="test_node_hostname" autocomplete="off" class="layui-input" lay-verify="required" />' +
        '</div>' +
        '<label class="layui-form-label">test_node_IP</label>' +
        '<div class="layui-input-inline">' +
        '<input type="text" placeholder="请输入正确值" name="test_node_IP" autocomplete="off" class="layui-input" lay-verify="required|ip" />' +
        '</div>' +
        '</div>' +
        '<div class="layui-form-item" >' +
        '<label class="layui-form-label">test_node_port</label>' +
        '<div class="layui-input-inline">' +
        '<input type="text" placeholder="请输入正确值" name="test_node_port" autocomplete="off" class="layui-input" lay-verify="required|number" />' +
        '</div>' +
        '<label class="layui-form-label">test_node_password</label>' +
        '<div class="layui-input-inline">' +
        '<input type="text" placeholder="请输入正确值" name="test_node_password" autocomplete="off" class="layui-input" lay-verify="required" />' +
        '</div>' +
        '</div>'
      $('#testnode').append(str)
    }
  })
})
