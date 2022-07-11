var serverIp = get_vlpx_ip()
var secondary_head_data = [
  { field: 'dev_fs', title: 'dev_fs' },
  { field: '1k', title: '1k' },
  { field: '2k', title: '2k' },
  { field: '4k', title: '4k' },
  { field: '8k', title: '8k' },
  { field: '16k', title: '16k' },
  { field: '32k', title: '32k' },
  { field: '64k', title: '64k' }
]

layui.use(['form', 'layer', 'table'], function () {
  var form = layui.form,
    layer = layui.layer,
    table = layui.table
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(randomRW)', function (data) {
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/performance/random-rw/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: false
      // success: function (result) {
      //   layer.msg(result, { icon: 1 })
      //   table.reload('randomRWTableRI')
      //   table.reload('randomRWTableRM')
      // },
      // error: function (e) {
      //   layer.alert('ERROR', { icon: 5 })
      // }
    }).done(function (result) {
      console.log(result)
      layer.msg(result)
    })
  })
})

function getHeadRI () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/random-rw/show/read/iops',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    head_data.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: secondary_head_data.length
      }
    ])
  })
  head_data.push(secondary_head_data)
  return head_data
}

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadRI()
  table.render({
    elem: '#randomRWTableRI',
    url: serverIp + '/performance/random-rw/show/read/iops',
    page: true,
    cols: headData
  })
})
