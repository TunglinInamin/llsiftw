
var ReadPredCN={
	obj:"",
		init:function()
	Read:function(num){
		var obj = this.obj;
		if (obj.EventGlobal[1][0] == "0")
			return 0
		var tmp = obj.EventGlobal[1][2+num];
		if(tmp.indexOf("~")>-1){
			var temp = tmp.split("~");
			var result = parseFloat(temp[0]) + parseFloat(temp[1]);
			result = Math.floor(result*500);
		}
		else if (tmp=="")
			return 0;
		else{
			var result = Math.floor(parseFloat(tmp)*1000);
		}
		return result
	},
	readTextFile:function(url){
		var rawFile = new XMLHttpRequest();
		var allText = "";
		rawFile.open("GET", url, false);
		rawFile.onreadystatechange = function (){
			if(rawFile.readyState === 4){
				if(rawFile.status === 200 || rawFile.status == 0){
					allText = rawFile.responseText;
				}
			}
		}
		rawFile.send(null);
		return allText;
	}
}
ReadPredCN.init()