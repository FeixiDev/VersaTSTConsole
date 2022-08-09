var SECONDARYHEAD = [
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
  var headerData = new Array()
  $.ajax({
    url: SERVERIP + '/performance/seq-rw/show/read/iops',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
    headerData.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: SECONDARYHEAD.length
      }
    ])
  })
  headerData.push(SECONDARYHEAD)
  return headerData
}

function getHeadRM () {
  var headerData = new Array()
  $.ajax({
    url: SERVERIP + '/performance/seq-rw/show/read/mbps',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
    headerData.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: SECONDARYHEAD.length
      }
    ])
  })
  headerData.push(SECONDARYHEAD)
  return headerData
}

function getHeadWI () {
  var headerData = new Array()
  $.ajax({
    url: SERVERIP + '/performance/seq-rw/show/write/iops',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    //回调操作
    headerData.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: SECONDARYHEAD.length
      }
    ])
  })
  headerData.push(SECONDARYHEAD)
  return headerData
}

function getHeadWM () {
  var headerData = new Array()
  $.ajax({
    url: SERVERIP + '/performance/seq-rw/show/write/mbps',
    type: 'GET',
    dataType: 'json',
    async: false
  }).done(function (result) {
    headerData.push([
      {
        field: result.table_name,
        title: result.table_name,
        colspan: SECONDARYHEAD.length
      }
    ])
  })
  headerData.push(SECONDARYHEAD)
  return headerData
}

layui.use(['form', 'layer', 'upload'], function () {
  var form = layui.form,
    layer = layui.layer,
    upload = layui.upload
  // layedit = layui.layedit,
  // laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element

  form.on('submit(seqRW)', function (data) {
    createData = JSON.stringify(data.field)
    $.ajax({
      url: SERVERIP + '/performance/seq-rw/create',
      type: 'get',
      dataType: 'json',
      data: {
        data: createData
      },
      async: true
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
      layer.msg(result)
    })
  })

  upload.render({
    elem: '#uploadSeqRW',
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
  var headData = getHeadRI()
  table.render({
    elem: '#seqRWTableRI',
    url: SERVERIP + '/performance/seq-rw/show/read/iops',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadRM()
  table.render({
    elem: '#seqRWTableRM',
    url: SERVERIP + '/performance/seq-rw/show/read/mbps',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadWI()
  table.render({
    elem: '#seqRWTableWI',
    url: SERVERIP + '/performance/seq-rw/show/write/iops',
    page: true,
    cols: headData
  })
})

layui.use('table', function () {
  var table = layui.table
  var headData = getHeadWM()
  table.render({
    elem: '#seqRWTableWM',
    url: SERVERIP + '/performance/seq-rw/show/write/mbps',
    page: true,
    cols: headData
  })
})
