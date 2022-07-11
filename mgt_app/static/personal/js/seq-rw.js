var serverIp = get_vlpx_ip()
var secondary_head_data = [
  { field: 'dev_fs', title: 'dev_fs' },
  { field: '1k', title: '1k' },
  { field: '2k', title: '2k' },
  { field: '4k', title: '4k' },
  { field: '8k', title: '8k' },
  { field: '16k', title: '16k' },
  { field: '32k', title: '32k' },
  { field: '64k', title: '64k' },
  { field: '128k', title: '128k' },
  { field: '256k', title: '256k' },
  { field: '512k', title: '512k' },
  { field: '1M', title: '1M' },
  { field: '2M', title: '2M' }
]

function getHeadRI () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/seq-rw/show/read/iops',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
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

function getHeadRM () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/seq-rw/show/read/mbps',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
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

function getHeadWI () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/seq-rw/show/write/iops',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
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

function getHeadWM () {
  var head_data = new Array()
  $.ajax({
    url: serverIp + '/performance/seq-rw/show/write/mbps',
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

layui.use(['form', 'layer', 'table'], function () {
  var form = layui.form,
    layer = layui.layer,
    table = layui.table
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
  element = layui.element
  form.on('submit(seqRW)', function (data) {
    create_data = JSON.stringify(data.field)
    $.ajax({
      url: serverIp + '/performance/seq-rw/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: create_data
      },
      async: true,
      // success: function (result) {
      //   layer.msg(result, { icon: 1 })
      //   table.reload('seqRWTableRI')
      //   table.reload('seqRWTableRM')
      //   table.reload('seqRWTableWI')
      //   table.reload('seqRWTableWM')
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

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadRI()
  table.render({
    elem: '#seqRWTableRI',
    url: serverIp + '/performance/seq-rw/show/read/iops',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadRM()
  table.render({
    elem: '#seqRWTableRM',
    url: serverIp + '/performance/seq-rw/show/read/mbps',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadWI()
  table.render({
    elem: '#seqRWTableWI',
    url: serverIp + '/performance/seq-rw/show/write/iops',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadWM()
  table.render({
    elem: '#seqRWTableWM',
    url: serverIp + '/performance/seq-rw/show/write/mbps',
    page: true,
    cols: headData
  })
})
