<script id="temp_table" type="text/html">
var model_temp_table = {
    model_1 : `  {{each data item}}
    <tr>
        <td>{{item.title}}</td>
        <td>{{item.author}}</td>
        <td>{{item.type}}</td>
        <td class="text-center">{{item.date}}</td>
        <td class="text-center">{{item.state}}</td>
        <td class="text-center">
            <a href="article_edit.html" class="btn btn-default btn-xs">编辑</a>
            <a href="javascript:deleteTr( 1005 );" class="btn btn-danger btn-xs">删除</a>
        </td>
    </tr>
    {{/each}}`,
}
model_temp_table.model_1;
</script>