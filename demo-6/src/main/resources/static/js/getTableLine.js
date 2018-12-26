$("[id=c]").click(function() {
	var index = $("[id=c]").index(this);
	var value = $("[id=Input]").eq(index).val();

	$("#value").val(value);

	$("#edit").show();
});
$("#list tr").click(function() {
	$("#key").val($("tr").index(this));

});
$("#commit").click(function() {
	var index = $("#key").val();
	console.log($("[id=Input]").eq(index));
	var value = $("#value").val();
	$("[id=Input]").eq(index).val(value);

	$("#edit").hide();
});
function addList(obj) {
	// tbody要素に指定したIDを取得し、変数「tbody」に代入
	var tbody = document.getElementById('p2146-tbody');
	// objの親の親のノードを取得し（つまりtr要素）、変数「tr」に代入
	var tr = obj.parentNode.parentNode;
	// tbodyタグ直下のノード（行）を複製し、変数「list」に代入
	var list = tbody.childNodes[0].cloneNode(true);
	// 複製した行の2番目のセルを指定し、変数「td」に代入
	//var td = list.childNodes[1];
	// 複製した行の2番目のセルの内容を「A」に置き換え
	//td.textContent = 'A';
	// 複製したノード「list」を直後の兄弟ノードの上に挿入
	// （「tr」の下に挿入）
	tbody.insertBefore(list, tr.nextSibling);
}
function removeList(obj) {
	// tbody要素に指定したIDを取得し、変数「tbody」に代入
	var tbody = document.getElementById('p2146-tbody');
	// objの親の親のノードを取得し（つまりtr要素）、変数「tr」に代入
	var tr = obj.parentNode.parentNode;
	// 「tbody」の子ノード「tr」を削除
	tbody.removeChild(tr);
}
