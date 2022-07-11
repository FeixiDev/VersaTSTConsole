var serverIp = get_vlpx_ip()

// function getHead () {
//   var serverIp = get_vlpx_ip()
//   var head_data = null
//   $.ajax({
//     url: serverIp + '/performance/self-defined/show',
//     type: 'GET',
//     dataType: 'json',
//     async: false
//   }).done(function (result) {
//     //回调操作
//     head_data = result

//   })
//   head_data = [
//     [{ field: 'id', title: 'ID',width:100,colspan:3 }],
//     [
//       //表头
//       { field: 'id', title: 'ID' },
//       { field: 'username', title: '用户名' },
//       { field: 'sex', title: '性别' }
//     ]
//   ]
//   return head_data
// }

// layui.use('table', function () {
//   var table = layui.table
//   var serverIp = get_vlpx_ip()
//   var headData = getHead()
//   table.render({
//     elem: '#selfDefinedTable',
//     height: 312,
//     url: serverIp + '/performance/self-defined/show',
//     page: true, //开启分页
//     cols: headData
//   })
// })

layui.use(['form', 'layedit', 'laydate', 'element'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  form.on('submit(selfDefined)', function (data) {
    if (!data.field.rw) {
      layer.msg('请选择 rw 选项', { icon: 5 })
      return false
    }
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/performance/self-defined/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true,
      // success: function (result) {
      //   layer.msg(result, { icon: 1 })
      // },
      // error: function () {
      //   layer.alert('ERROR', { icon: 5 })
      // }
    }).done(function (result) {
      console.log(result)
      layer.msg(result);
    })
  })
})
