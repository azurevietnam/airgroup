<!DOCTYPE html>
<html xmlns="http://www.w3.org/1999/xhtml">
<g:render template="/layouts/responsivewebpart/head" />
<body>
	<noscript>
		<div style="display: inline;">
			<img height="1" width="1" style="border-style: none;" alt=""
				src="//googleads.g.doubleclick.net/pagead/viewthroughconversion/1000656472/?value=0&amp;guid=ON&amp;script=0" />
		</div>
	</noscript>
	<div id="tour-page">
		<g:render template="/layouts/responsivewebpart/header" />
		<div id="tour-section" class="container">
			<div class="row">
		    <div class="col-md-10 col-md-offset-1 col-sm-10 col-sm-offset-1 col-xs-12">
			<g:layoutBody />
			<div class="space-20"></div>
		</div>
		<g:render template="/layouts/responsivewebpart/footer" />
		</div>
	</div>
	
	<g:include view="layouts/responsivewebpart/_advertLeft.gsp" />

	<g:include view="layouts/responsivewebpart/_advertRight.gsp" />
	
	<div id="fb-root"></div>
</div>
	
	<script>
		jQuery(document)
				.ready(
						function($) {
							$
									.ajax({
										async : true,
										type : "GET",
										contentType : "application/json; charset=utf-8",
										url : "/link/listFrontEndInternational",
										dataType : "json",
										success : function(jsonData) {
											var str = "";
											var list = new Array();
											for (i in jsonData) {
												var stt = Math
														.floor((Math.random() * jsonData.length));
												while (list.indexOf(stt) != -1) {
													stt = Math
															.floor((Math
																	.random() * jsonData.length))
												}
												list[i] = stt;
												str += "<li><a href='/link/getContentDetails?contentId="+ jsonData[stt].id +"' >"
													+ jsonData[stt].title
													+ "</a> </li>";
											}
											$("#tour-tree-marker-international")
													.append(str);
										}
									});

						});
	</script>
	
	<script>
		jQuery(document)
				.ready(
						function($) {
							$
									.ajax({
										async : true,
										type : "GET",
										contentType : "application/json; charset=utf-8",
										url : "/link/listFrontEndLocal",
										dataType : "json",
										success : function(jsonData) {
											var str = "";
											var list = new Array();
											for (i in jsonData) {
												var stt = Math
														.floor((Math.random() * jsonData.length));
												while (list.indexOf(stt) != -1) {
													stt = Math
															.floor((Math
																	.random() * jsonData.length))
												}
												list[i] = stt;
												str += "<li><a href='/link/getContentDetails?contentId="+ jsonData[stt].id +"' >"
													+ jsonData[stt].title
													+ "</a> </li>";
											}
											$("#tour-tree-marker-local")
													.append(str);
										}
									});

						});
	</script>
	
	<script>
		jQuery(document)
				.ready(
						function($) {
							$
									.ajax({
										async : true,
										type : "GET",
										contentType : "application/json; charset=utf-8",
										url : "/link/listFrontEndCompany",
										dataType : "json",
										success : function(jsonData) {
											var str = "";
											var list = new Array();
											for (i in jsonData) {
												var stt = Math
														.floor((Math.random() * jsonData.length));
												while (list.indexOf(stt) != -1) {
													stt = Math
															.floor((Math
																	.random() * jsonData.length))
												}
												list[i] = stt;
												str += "<li><a href='/link/getContentDetails?contentId="+ jsonData[stt].id +"' >"
													+ jsonData[stt].title
													+ "</a> </li>";
											}
											$("#tour-tree-marker-company")
													.append(str);
										}
									});

						});
	</script>
	
	<script>
		jQuery(document)
				.ready(
						function($) {
							$
									.ajax({
										async : true,
										type : "GET",
										contentType : "application/json; charset=utf-8",
										url : "/link/listFrontEndType",
										dataType : "json",
										success : function(jsonData) {
											var str = "";
											var list = new Array();
											for (i in jsonData) {
												var stt = Math
														.floor((Math.random() * jsonData.length));
												while (list.indexOf(stt) != -1) {
													stt = Math
															.floor((Math
																	.random() * jsonData.length))
												}
												list[i] = stt;
												str += "<li><a href='/link/getContentDetails?contentId="+ jsonData[stt].id +"' >"
													+ jsonData[stt].title
													+ "</a> </li>";
											}
											$("#tour-tree-marker-type")
													.append(str);
										}
									});

						});
	</script>
</body>
</html>
