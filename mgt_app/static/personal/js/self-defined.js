layui.use(['form', 'layedit', 'laydate', 'element', 'upload'], function () {
  var form = layui.form,
    layer = layui.layer,
    upload = layui.upload
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(selfDefined)', function (data) {
    if (!data.field.rw) {
      layer.msg('请选择 rw 选项', { icon: 5 })
      return false
    }
    createData = JSON.stringify(data.field)
    $.ajax({
      url: SERVERIP + '/performance/self-defined/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: createData
      },
      async: true
      // success: function (result) {
      //   layer.msg(result, { icon: 1 })
      // },
      // error: function () {
      //   layer.alert('ERROR', { icon: 5 })
      // }
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })

  upload.render({
    elem: '#uploadSelfDefined',
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
