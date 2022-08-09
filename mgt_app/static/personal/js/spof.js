layui.use(['form', 'layer', 'upload'], function () {
  var form = layui.form,
    layer = layui.layer,
    upload = layui.upload
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(spof)', function (data) {
    createData = JSON.stringify(data.field)
    $.ajax({
      url: SERVERIP + '/reliability/spof/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: createData
      },
      async: true
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })

  upload.render({
    elem: '#uploadSpof',
    url: 'https://httpbin.org/post',
    accept: 'file',
    done: function (res) {
      console.log(res)
      if (res.code > 0) {
        return layer.msg('上传失败')
      }
      return layer.msg('上传成功')
    },
    error: function () {
      return layer.msg('File upload failed, please try again')
    }
  })
})

layui.use('table', function () {
  var table = layui.table
  table.render({
    elem: '#spofTable',
    url: SERVERIP + '/reliablility/spof/show',
    page: true,
    cols: [
      [
        { field: 'Test_scenario', title: 'Test_scenario' },
        { field: 'Test_action', title: 'Test_action' },
        { field: 'Test_result', title: 'Test_result' },
        { field: 'Test_times', title: 'Test_times' },
        { field: 'Expected_times', title: 'Expected_times' },
        { field: 'Test_date', title: 'Test_date' },
        { field: 'Test_name', title: 'Test_name' }
      ]
    ]
  })
})
