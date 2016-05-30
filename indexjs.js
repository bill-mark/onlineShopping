function SetHome(){
	if (document.all) {  //判断是否存在dom对象（document）
		document.body.style.behavior = 'url(#default#homepage)';
		document.body.setHomePage(url);
	}
	else{
		alert("遇到问题，请手动设置主页")
	}
}

function AddFavorite(sURL,sTitle){
	sURL = encodeURI(sURL);//将文本字符串编码为一个统一资源标识符 (URI)，返回一个已编码的 URI
	try{
          window.external.addFavorite(sURL,sTitle);
	}
	catch(e)
	{
		try{
			 window.sidebar.addPanel(sTitle, sURL, "");
		}
		catch(e){
			alert("添加失败")
		}
	}

}