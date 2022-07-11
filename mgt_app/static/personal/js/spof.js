var serverIp = get_vlpx_ip()

layui.use(['form', 'layer'], function () {
  var form = layui.form,
    layer = layui.layer
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(spof)', function (data) {
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/reliability/spof/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })
})

layui.use('table', function () {
  var table = layui.table
  table.render({
    elem: '#spofTable',
    url: serverIp + '/reliablility/spof/show',
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
