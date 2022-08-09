layui.use(['form', 'layedit', 'laydate', 'element'], function () {
  var form = layui.form,
    layer = layui.layer,
    layedit = layui.layedit,
    laydate = layui.laydate
  var $ = layui.jquery,
    element = layui.element
  var xmSelect = layui.xmSelect
  var rw = xmSelect.render({
    el: '#rw',
    direction: 'down',
    name : "rw",
    data: [
      { name: 'read', value: 'read' },
      { name: 'write', value: 'write' },
      { name: 'randread', value: 'randread' },
      { name: 'randwrite', value: 'randwrite' },
      { name: 'randrw', value: 'randrw' }
    ]
  })
})
