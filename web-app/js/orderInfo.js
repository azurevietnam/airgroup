var counter = 0;
(function($) {
	$(document)
			.ready(
					function() {
						//declare variables
						var errormsg = $(".errors");
						var customerName = $("#customerName");
						var customerEmail = $("#customerEmail");
						var customerPhoneNumber = $("#customerPhoneNumber");
						var customerAddress = $("#customerAddress");
						var customerCity = $("#customerCity");
						var companyName = $("#companyName");
						var companyAddress = $("#companyAddress");
						var taxSerial = $("#taxSerial");
						var billAddress = $("#address");
						var passengerName = $(":input[id^='passenger']");
						var dateOfBirth = $(":input[id^='datepicker']");
						var airline = $(":input[id$='airline']");
						var flightNumber = $(":input[id$='flightNumber']");
						var departure = $(":input[id$='departure']");
						var arrival = $(":input[id$='arrival']");
						var outboundDate = $(":input[id^='outboundDate']");
						var inboundDate = $(":input[id^='inboundDate']");
						var price = $("#price");
						var tax = $("#tax");
						var totalPrice = $("#totalPrice");
						var statusValue = $('select[name=status]');
						var moneyCode = $("#moneyCode");
						var savePassengerBtn = $("#savePassenger");
						var currentUser = $("#currentUserId");
						var currentUserRole = $("#currentUserRole").val()
						var processUser = $("#processId");
						
						var domestic = $("#domestic");
						
						var payment = $("select[id^='payment.id']");
						var paymentPerson = $("#paymentPerson");
						var paymentPhoneNumber = $("#paymentPhoneNumber");
						var paymentAddress = $("#paymentAddress");
						var paymentCity = $("#paymentCity");
						
						var $email = $('input#customerEmail');
						var emailReg = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}/;
						var stringReg = /[a-zA-Z0-9\s]*$/;
						var digitReg = /^[0-9]{8,15}$/;
						var flightReg = /^[0-9]{2,10}$/;
						var airlineReg = /^[A-Z]{2}$/;
						var iataReg = /^[A-Z]{3}$/;
						var moneyReg = /^[0-9,.]{5,14}$/;
						
						//Hide coming when trip is one way
						if (($("#coming").children()).length == 0) {
							$("#tripComing").hide();
						}
						
						//Add new passenger
						$('input#addPassenger')
								.on(
										'click',
										function() {
											$("#tbl_container tr:last")
													.after(
															'<tr class="prop">'
																	+ '<input type="hidden" name="passenger.'
																	+ (counter + 1)
																	+ '.id" id="passenger.'
																	+ (counter + 1)
																	+ '.id" value=""/>'
																	+ '<td valign="top" class="name"><label for="name">'
																	+ 'Họ và tên'
																	+ ' '
																	+ (counter + 1)
																	+ '</label>'
																	+ '</td>'
																	+ '<td valign="top" class="value">'
																	+ '<input type="text" name="passenger.'
																	+ (counter + 1)
																	+ '.name" id="passenger.'
																	+ (counter + 1)
																	+ '.name" value="" maxlength="100"/>'
																	+ '</td>'
																	+ '<td valign="top">'
																	+ '<select name="passenger.'
																	+ (counter + 1)
																	+ '.gender" id="passenger.'
																	+ (counter + 1)
																	+ '.gender" onchange="showHideDOB(this); return false;">'
																	+ '<option value="0" >Ông</option>'
																	+ '<option value="1" >Bà</option>'
																	+ '<option value="2" >Trẻ em trai</option>'
																	+ '<option value="3" >Trẻ em gái</option>'
																	+ '<option value="4" >Em bé trai</option>'
																	+ '<option value="5" >Em bé gái</option>'
																	+ '</select>'
																	+ '</td>'
																	+ '<td>'
																	+ '<input type="button" class="hideOrder" id="deletePassenger" value="Xóa" onclick="removePassenger(this); return false;"/>'
																	+ '<input type="button" class="hideOrder" id="savePassenger" value="Lưu" onclick="savePassengers(this); return false;"/>'
																	+ '</td>'
																	+ '</tr>'
																	+ "<tr class='prop' style='display:none'>"
																	+ "<td valign='top' class='name'>Ngày sinh"
																	+ "</td>"
																	+ "<td valign='top' class='value'>"
																	+ "<input type='text' name='passenger."
																	+ (counter + 1)
																	+ ".dateOfBirth' onmouseover='DoBClick(this);' readonly='true' id='datepicker."
																	+ (counter + 1)
																	+ "' />"
																	+ "</td>"
																	+ "</tr>");
											if(domestic.val() == 0){
												var obAirlineCode = $("table[id=going] > tbody > tr:first-child > td > input[id$=airline]");
												var ibAirlineCode = $("table[id=coming] > tbody > tr:first-child > td > input[id$=airline]");
												
												if(obAirlineCode.val() == 'BL'){
													$("#tbl_container tr:last")
													.after(
														'<tr>'
															+ '<td>Hành lý chiều đi</td>'
															+ '<td>'
															+ '<select name="passenger.'
															+ (counter + 1)
															+ '.outboundluggage" id="passenger.'
															+ (counter + 1)
															+ '.outboundluggage">'
															+ '<option value="0">Không mang theo hành lý</option>'
															+ '<option value="143000">Thêm 15Kg hành lý (143,000 VND)</option>'
															+ '<option value="165000">Thêm 20Kg hành lý (165,000 VND)</option>'
															+ '<option value="220000">Thêm 25Kg hành lý (220,000 VND)</option>'
															+ '<option value="270000">Thêm 30Kg hành lý (270,000 VND)</option>'
															+ '<option value="320000">Thêm 35Kg hành lý (320,000 VND)</option>'
															+ '<option value="370000">Thêm 40Kg hành lý (370,000 VND)</option>'
															+ '</select>'
															+ '<input type="hidden" id="passenger.' 
															+ (counter + 1)
															+ '.obairline" value="BL" name="passenger.'
															+ (counter + 1)
															+ '.obairline">'
															+ '<input type="hidden" id="passenger.'
															+ (counter + 1)
															+'.isDeparture" value="1" name="passenger.'
															+ (counter + 1)
															+ '.isDeparture">'
															+ '</td>'
															+ '</tr>'
													);
												}
												else if(obAirlineCode.val() == 'VJ'){
													$("#tbl_container tr:last")
													.after(
														'<tr>'
															+ '<td>Hành lý chiều đi</td>'
															+ '<td>'
															+ '<select name="passenger.'
															+ (counter + 1)
															+ '.outboundluggage" id="passenger.'
															+ (counter + 1)
															+ '.outboundluggage">'
															+ '<option value="0">Không mang theo hành lý</option>'
															+ '<option value="143000">Thêm 15Kg hành lý (143,000 VND)</option>'
															+ '<option value="165000">Thêm 20Kg hành lý (165,000 VND)</option>'
															+ '<option value="220000">Thêm 25Kg hành lý (220,000 VND)</option>'
															+ '<option value="330000">Thêm 30Kg hành lý (330,000 VND)</option>'
															+ '<option value="385000">Thêm 35Kg hành lý (385,000 VND)</option>'
															+ '<option value="440000">Thêm 40Kg hành lý (440,000 VND)</option>'
															+ '</select>'
															+ '<input type="hidden" id="passenger.' 
															+ (counter + 1)
															+ '.obairline" value="VJ" name="passenger.'
															+ (counter + 1)
															+ '.obairline">'
															+ '<input type="hidden" id="passenger.'
															+ (counter + 1)
															+'.isDeparture" value="1" name="passenger.'
															+ (counter + 1)
															+ '.isDeparture">'
															+ '</td>'
															+ '</tr>'
													);
												}
												
												if(ibAirlineCode.val() == 'BL'){
													$("#tbl_container tr:last")
													.after(
														'<tr>'
															+ '<td>Hành lý chiều về</td>'
															+ '<td>'
															+ '<select name="passenger.'
															+ (counter + 1)
															+ '.inboundluggage" id="passenger.'
															+ (counter + 1)
															+ '.inboundluggage">'
															+ '<option value="0">Không mang theo hành lý</option>'
															+ '<option value="143000">Thêm 15Kg hành lý (143,000 VND)</option>'
															+ '<option value="165000">Thêm 20Kg hành lý (165,000 VND)</option>'
															+ '<option value="220000">Thêm 25Kg hành lý (220,000 VND)</option>'
															+ '<option value="270000">Thêm 30Kg hành lý (270,000 VND)</option>'
															+ '<option value="320000">Thêm 35Kg hành lý (320,000 VND)</option>'
															+ '<option value="370000">Thêm 40Kg hành lý (370,000 VND)</option>'
															+ '</select>'
															+ '<input type="hidden" id="passenger.' 
															+ (counter + 1)
															+ '.ibairline" value="BL" name="passenger.'
															+ (counter + 1)
															+ '.ibairline">'
															+ '<input type="hidden" id="passenger.'
															+ (counter + 1)
															+'.isDeparture" value="0" name="passenger.'
															+ (counter + 1)
															+ '.isDeparture">'
															+ '</td>'
															+ '</tr>'
													);
												}
												else if(ibAirlineCode.val() == 'VJ'){
													$("#tbl_container tr:last")
													.after(
														'<tr>'
															+ '<td>Hành lý chiều về</td>'
															+ '<td>'
															+ '<select name="passenger.'
															+ (counter + 1)
															+ '.inboundluggage" id="passenger.'
															+ (counter + 1)
															+ '.inboundluggage">'
															+ '<option value="0">Không mang theo hành lý</option>'
															+ '<option value="143000">Thêm 15Kg hành lý (143,000 VND)</option>'
															+ '<option value="165000">Thêm 20Kg hành lý (165,000 VND)</option>'
															+ '<option value="220000">Thêm 25Kg hành lý (220,000 VND)</option>'
															+ '<option value="330000">Thêm 30Kg hành lý (330,000 VND)</option>'
															+ '<option value="385000">Thêm 35Kg hành lý (385,000 VND)</option>'
															+ '<option value="440000">Thêm 40Kg hành lý (440,000 VND)</option>'
															+ '</select>'
															+ '<input type="hidden" id="passenger.' 
															+ (counter + 1)
															+ '.ibairline" value="VJ" name="passenger.'
															+ (counter + 1)
															+ '.ibairline">'
															+ '<input type="hidden" id="passenger.'
															+ (counter + 1)
															+'.isDeparture" value="0" name="passenger.'
															+ (counter + 1)
															+ '.isDeparture">'
															+ '</td>'
															+ '</tr>'
													);
												}
											}
											counter += 1;
												
										});
						
						//Enable all element if current user has role "ADMIN"
						if(currentUserRole == '[ROLE_ADMIN]' && statusValue.val() != 2){
							$("input,select,textarea,img").each(function(){
								$(this).prop('disabled', false)
							})
							$('#adultNumberTemp,#kidNumberTemp,#infantNumberTemp').prop('disabled', true);
						}
						
						// Enable and disable elements
						if(currentUserRole == '[ROLE_USER]'){
							$("input,select,textarea,img")
							.each(
									function() {
										// alert($(this).attr('readonlyValue'));
										$(
												'#adultNumberTemp,#kidNumberTemp,#infantNumberTemp')
												.prop('disabled', true);
										if ($(this).attr('readonlyValue') == 'true') {
											$(this).prop('readonly', true);
											$(':input,select,#update')
													.prop('disabled', true);
											$('input#back,#search,#info,#paidStatus').removeAttr(
													'disabled');
											//$('div#actionButton #sendmail').remove();
											
											if ($("#paidStatus").val() == 2) {
												$('#customerEmail').removeAttr('disabled');
												$('#customerEmail').prop('readonly',false);
											}
												
											if (currentUser.val() != processUser.val()
													&& processUser.val() > 0) {
												$(this).prop('readonly',
														true);
												$('select').prop(
														'disabled', true);

												$(
														"textArea#remark,input#update,#addRemark")
														.removeAttr(
																'readonlyValue');
												$(
														":hidden,input#update,textArea#remark,#addRemark")
														.removeAttr(
																'disabled');
											} else {
												$(this).prop('readonly',
														true);
											}
										} else {
											$(this).removeAttr(
													'readonlyValue');
										}

									});
						}
						errormsg.hide();
						//Format currency
						$("#price,#tax,#totalPrice").on('blur',function(){
							$("#price,#tax,#totalPrice").formatCurrency({
								  decimalSymbol: ',',
								  digitGroupSymbol: '.',
								  dropDecimals: false,
								  groupDigits: true,
								  roundToDecimalPlace: -2,
								  symbol: ''
								});
								
		                });
						
						
						// validate form before submit
						$("#update")
								.on(
										'click',
										function() {
											var date1;
											var date2;
											var i = 0;
											var status = false;
											var outboundIds = [];
											$(".message").hide();
//											if (customerName.val() == '' || !stringReg.test(customerName.val())) {
//												errormsg.html('Tên khách hàng không hợp lệ!');
//												errormsg.show();
//												return false;
//											}
											if (!emailReg.test(customerEmail.val()) && $.trim(customerEmail.val()) != '') {
												errormsg.html('Email khách hàng không hợp lệ!');
												errormsg.show();
												return false;
											}
//											if (customerPhoneNumber.val() == '' || !digitReg.test(customerPhoneNumber.val())) {
//												errormsg.html('Điện thoại khách hàng không hợp lệ!');
//												errormsg.show();
//												return false;
//											}
											/*if ($.trim(customerAddress.val()) == '') {
												errormsg.html('Địa chỉ khách hàng không hợp lệ!');
												errormsg.show();
												return false;
											}
											if ($.trim(customerCity.val()) == '') {
												errormsg.html('Thành phố khách hàng không hợp lệ!');
												errormsg.show();
												return false;
											}*/
//											if (companyName.val() != '' && !stringReg.test(companyName.val())) {
//												errormsg.html('Tên công ty không hợp lệ!');
//												errormsg.show();
//												return false;
//											}
											if(payment.val() == 3){
												var paymentPerson = $("#paymentPerson");
												var paymentPhoneNumber = $("#paymentPhoneNumber");
												var paymentAddress = $("#paymentAddress");
												var paymentCity = $("#paymentCity");
												if (paymentPerson.val() == '') {
													errormsg.html('Tên người nhận không được để trống!');
													errormsg.show();
													return false;
												}
												if (paymentAddress.val() == '') {
													errormsg.html('Địa chỉ người nhận không được để trống!');
													errormsg.show();
													return false;
												}
												if (paymentPhoneNumber.val() == '' || !digitReg.test(paymentPhoneNumber.val())) {
													errormsg.html('Điện thoại người nhận không hợp lệ!');
													errormsg.show();
													return false;
												}
											}
											/*
											if (companyAddress != '' && !addressReg.test(companyAddress)) {
												errormsg.html('Ä�á»‹a chá»‰ cÃ´ng ty khÃ´ng há»£p lá»‡!');
												errormsg.show();
												return false;
											}*/
											/*
											if (billAddress != '' && !addressReg.test(billAddress)) {
												errormsg.html('Ä�á»‹a chá»‰ nháº­n hÃ³a Ä‘Æ¡n khÃ´ng há»£p lá»‡!');
												errormsg.show();
												return false;
											}
											*/
											//alert(passenger.1.name);
											passengerName.each(function() {
												var id = parseInt(this.id
														.replace(
																"passenger.",
																""));
												var passengerNameVal = $(
														"input[id='passenger."
																+ id
																+ ".name']")
														.val();
												if (passengerNameVal == '' || !stringReg.test(passengerNameVal)) {
													status = true;
												}
											});
//											if (status) {
//												errormsg.html('Tên hành khách không hợp lệ!');
//												errormsg.show();
//												return false;
//											}
											//validate airline
											/*airline.each(function() {
												var id = parseInt(this.id
														.replace(
																"orderDetail.",
																""));
												//alert(id);
												var airlineVal = $(
														"input[id='orderDetail."
																+ id
																+ ".airline']")
														.val();
												//alert("airline : "+airlineVal);
												if (airlineVal == '' || !airlineReg.test(airlineVal)) {
													
													status = true;
												}
											});
											if (status) {
												errormsg.html('Mã chuyến bay không hợp lệ!');
												errormsg.show();
												return false;
											}*/
											//validate flight number
											/*flightNumber.each(function() {
												var id = parseInt(this.id
														.replace(
																"orderDetail.",
																""));
												var flightNumberVal = $(
														"input[id='orderDetail."
																+ id
																+ ".flightNumber']")
														.val();
												if (flightNumberVal == '' || !flightReg.test(flightNumberVal)) {
													status = true;
												}
											});
											if (status) {
												errormsg.html('Số hiệu chuyến bay không hợp lệ!');
												errormsg.show();
												return false;
											}
											//validate departure code
											departure.each(function() {
												var id = parseInt(this.id
														.replace(
																"orderDetail.",
																""));
												var departureVal = $(
														"input[id='orderDetail."
																+ id
																+ ".departure']")
														.val();
												if (departureVal == '' || !iataReg.test(departureVal)) {
													status = true;
												}
											});
											if (status) {
												errormsg.html('Điểm khởi hành không hợp lệ!');
												errormsg.show();
												return false;
											}
											//validate arrival code
											arrival.each(function() {
												var id = parseInt(this.id
														.replace(
																"orderDetail.",
																""));
												var arrivalVal = $(
														"input[id='orderDetail."
																+ id
																+ ".arrival']")
														.val();
												if (arrivalVal == '' || !iataReg.test(arrivalVal)) {
													status = true;
												}
											});
											if (status) {
												errormsg.html('Điểm đến không hợp lệ!');
												errormsg.show();
												return false;
											}*/
											
											if (price.val() == '' || !moneyReg.test(price.val())) {
												errormsg.html('Số tiền không hợp lệ');
												errormsg.show();
												return false;
											}
											
											/*if (moneyCode.val() == '' || !iataReg.test(moneyCode.val())) {
												errormsg.html('MÃ£ tiá»�n khÃ´ng há»£p lá»‡!');
												errormsg.show();
												return false;
											}*/
											// compare date and verify date format
											outboundDate
													.each(function() {
														var id = parseInt(this.id
																.replace(
																		"outboundDate.",
																		""));
														outboundIds.push(id);
														var outboundDateVal = $(
																"input[id='outboundDate."
																		+ id
																		+ "']")
																.val();
														if (ValidateDate(outboundDateVal)) {
															$('.error').hide();
														} else {
															status = true;
															alert(outboundDateVal
																	+ ' sai định dạng(dd/mm/yyyy hh:mm)');
														}

													});
											if (status) {
												return false;
											}
											inboundDate
													.each(function() {
														var id = parseInt(this.id
																.replace(
																		"inboundDate.",
																		""));
														var inboundDateVal = $(
																"input[id='inboundDate."
																		+ id
																		+ "']")
																.val();

														if (ValidateDate(inboundDateVal)) {
															$('.error').hide();
														} else {
															status = true;
															alert(inboundDateVal
																	+ ' sai định dạng(dd/mm/yyyy hh:mm)');
														}
													});
											if (status) {
												return false;
											}
											for (i = 0; i < outboundIds.length; i++) {
												date1 = $("input[id='inboundDate."
														+ outboundIds[i] + "']");
												date2 = $("input[id='outboundDate."
														+ outboundIds[i + 1]
														+ "']");
												var testDate1 = date1.datetimepicker("getDate");
												var testDate2 = date2.datetimepicker("getDate");
												//alert(testDate2 - testDate1);
												//alert("date1 :"+testDate1.val()+", date2 : "+testDate2.val());
												if (testDate1 > testDate2) {
													alert('Ngày đi '
															+ date1.datetimepicker({dateFormat:'dd/mm/yy'}).val()
															+ ' phải nhỏ hơn '
															+ date2.datetimepicker({dateFormat:'dd/mm/yy'}).val());
													return false;
													break;
												}
											}
											//alert($("#savePassenger").val());
											if ($("#savePassenger").val() == 'Lưu') {
												errormsg.html('Bạn phải lưu thông tin hành khách trước khi cập nhật!');
												errormsg.show();
												return false;
											}

											if (statusValue.val() == 2 && !($("#completeStatus").is(":checked"))) {
												errormsg.html("Bạn phải đánh dấu vào 'đã xử lý xong' trước khi hoàn thành đơn hàng!");
												errormsg.show();
												return false;
											}
											if (statusValue.val() == 3) {
												var cancelConfirm = confirm('Bạn có muốn hủy đơn hàng?');
											}
											$("#doAdd").submit();
										});
						//set attribute for send mail achor
						var $linkTag = $('span#sendmail a:first-child');
						var emailHref = $linkTag.attr('href');
						var emailClickEvent = $linkTag.attr('onclick');
						$linkTag.attr('href','#');
						$linkTag.attr('onclick','return false;');
						
						//Fix cannot click send mail after finish order
						if(statusValue.val() == 2){
							$linkTag.attr('href',emailHref+'&email='+$email.val());
							$linkTag.attr('onclick',emailClickEvent);
						}

						statusValue.on('change',function(){
							if ($(this).val() == 2 && ($("#completeStatus").is(":checked"))
								&& emailReg.test($email.val())) {
								$linkTag.attr('href',emailHref+'&email='+$email.val());
								$linkTag.attr('onclick',emailClickEvent);
							} else {
								$linkTag.attr('href','#');
								$linkTag.attr('onclick','return false;');
							}
						});
						$("#completeStatus").on('click',function(){
							if ($(this).is(":checked") && statusValue.val() == 2
								&& emailReg.test($email.val())) {
								$linkTag.attr('href',emailHref+'&email='+$email.val());
								$linkTag.attr('onclick',emailClickEvent);
							} else {
								$linkTag.attr('href','#');
								$linkTag.attr('onclick','return false;');
							}
						});
						
						//check before send mail in situation order completed
						if ($("#paidStatus").val() == 2) {
//							$email.on('blur',function(){
								if ($email.val() == '' || !emailReg.test($email.val())) {
									$linkTag.attr('href','#');
									$linkTag.attr('onclick','return false;');
								} else {
									$linkTag.attr('href',emailHref+'&email='+$email.val());
									$linkTag.attr('onclick',emailClickEvent);
								}
//							});
						} else {
							$email.on('blur',function(){
								if (emailReg.test($(this).val()) && ($("#completeStatus").is(":checked")) && statusValue.val() == 2) {
									$linkTag.attr('href',emailHref+'&email='+$(this).val());
									$linkTag.attr('onclick',emailClickEvent);
								} else {
									$linkTag.attr('href','#');
									$linkTag.attr('onclick','return false;');
								}
							});
						}
						
						if ($("#paidStatus").val() == 2) {
							$email.on('change',function(){
								if ($(this).val() == '' || !emailReg.test($(this).val())) {
									$linkTag.attr('href','#');
									$linkTag.attr('onclick','return false;');
								} else {
									$linkTag.attr('href',emailHref+'&email='+$(this).val());
									$linkTag.attr('onclick',emailClickEvent);
								}
							});
						}
						
						// check before send mail
						$("#sendmail")
								.on(
										'click',
										function() {
											if ($email.val() == ''
													|| !emailReg.test($email.val())) {
												errormsg.html('Bạn phải nhập đúng địa chỉ email.');
												errormsg.show();
												jQuery("html, body").animate({ scrollTop: 0 }, "slow");
												return false;
											}
											if ((statusValue.val() != 2 || !($("#completeStatus").is(":checked"))) && $("#paidStatus").val() != 2) {
												errormsg.html("Bạn phải chọn confirm và đánh dấu vào 'đã xử lý xong' trước khi gửi mail!");
												errormsg.show();
												jQuery("html, body").animate({ scrollTop: 0 }, "slow");
												return false;
											}
										});
						
						// notification and time limit date
						$("#notification, #timeLimit").datetimepicker({
							minDate : 0,
							maxDate : "+30D",
							dateFormat : "dd/mm/yy",
							timeFormat : "HH:mm"
						});

						// begin flight date
						outboundDate
								.each(function() {
									var id = parseInt(this.id.replace(
											"outboundDate.", ""));
									var startDate = $(this);
									var endDate = $("input[id='inboundDate."
											+ id + "']");

									startDate
											.datetimepicker({
												timeFormat : 'HH:mm',
												dateFormat : "dd/mm/yy",
												minDate : 0,
												onSelect : function(dateText,
														selected) {
													if (startDate.val() != '') {
														var testStartDate = startDate
																.datetimepicker('getDate');
														var testEndDate = endDate
																.datetimepicker('getDate');
														if (testStartDate > testEndDate) {
															endDate.datetimepicker('setDate', testStartDate);
														} else {
															endDate.datetimepicker('setDate', testEndDate);
														}
														
													} else {
														endDate.val(dateText);
													}
													endDate
															.datetimepicker(
																	"option",
																	"minDate",
																	startDate
																			.datetimepicker('getDate'));
												}
											});
								});

						inboundDate
								.each(function() {
									var id = parseInt(this.id.replace(
											"inboundDate.", ""));
									var endDate = $(this);
									var startDate = $("input[id='outboundDate."
											+ id + "']");
									endDate
											.datetimepicker({
												timeFormat : 'HH:mm',
												dateFormat : "dd/mm/yy",
												minDate : 0,
												onSelect : function(dateText,
														selected) {
													if (startDate.val() != '') {
														var testStartDate = startDate
																.datetimepicker('getDate');
														var testEndDate = endDate
																.datetimepicker('getDate');
														if (testStartDate > testEndDate)
															startDate.datetimepicker('setDate',testEndDate);
														else
															startDate.datetimepicker('setDate',testStartDate);
													} else {
														startDate.val(dateText);
													}
													startDate
															.datetimepicker(
																	"option",
																	"maxDate",
																	endDate
																			.datetimepicker('getDate'));
												}
											});
								});
						// end flight date
												
						// hide delete passenger button when number of passenger
						// equal 1
						var passengers = [];
						$("#deletePassenger").hide();
						$(":text[id^='passenger']").each(function() {
							passengers.push($(this));
						});
						passengers.length > 1 ? $("#deletePassenger").show()
								: $("#deletePassenger").hide();
						//Total price calculate base on price and tax
						$("#price,#tax").on('blur',function(){
							var $taxValue = $("#tax").val();
							var $priceValue = $("#price").val();
							var iTax = $taxValue.replace(/,/g, '');
							var iPrice = $priceValue.replace(/,/g, '');
							var $total = parseInt(iPrice)+parseInt(iTax);
							$("#totalPrice").val($total).formatCurrency({
								  decimalSymbol: '.',
								  digitGroupSymbol: ',',
								  dropDecimals: false,
								  groupDigits: true,
								  symbol: ''
								});
						});
					});// end ready function

})(jQuery);

// function remove passenger
function removePassenger(element) {
	var numOfAdult = jQuery('#adultNumber').val();
	var numOfKid = jQuery('#kidNumber').val();
	var numOfInfant = jQuery('#infantNumber').val();
	var passengerId = jQuery(element).parent().parent().find(':hidden').val();
	// alert(passengerId);
	var passenger = '{"id":"' + passengerId + '"}';
	if (confirm('Bạn có muốn chắc xóa hành khách này?')) {
		jQuery.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/order/deletePassenger/",
			data : passenger,
			dataType : "json",
			success : function(data) {
				// data - response from server
				if (data.message == 'success') {
					var passType = data.passType;
					var numOfAdult = jQuery('#adultNumber').val();
					var numOfKid = jQuery('#kidNumber').val();
					var numOfInfant = jQuery('#infantNumber').val();
					if (passType == 'adult') {
						jQuery('#adultNumber').val(parseInt(numOfAdult) - 1);
						jQuery('#adultNumberTemp')
								.val(parseInt(numOfAdult) - 1);
					} else if (passType == 'kid') {
						jQuery('#kidNumber').val(parseInt(numOfKid) - 1);
						jQuery('#kidNumberTemp').val(parseInt(numOfKid) - 1);
					} else {
						jQuery('#infantNumber').val(parseInt(numOfInfant) - 1);
						jQuery('#infantNumberTemp').val(
								parseInt(numOfInfant) - 1);
					}
				} else {
					jQuery(".message").append(data.message);
				}
				jQuery(element).parent().parent().next().next().next().remove();
				jQuery(element).parent().parent().next().next().remove();
				jQuery(element).parent().parent().next().remove();
				jQuery(element).parent().parent().remove();
				// Show or hide delete passenger button
				var passengers = [];
				jQuery(":text[id^='passenger']").each(function() {
					passengers.push(jQuery(this));
				});
				passengers.length > 1 ? jQuery("#deletePassenger").show()
						: jQuery("#deletePassenger").hide();
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Error: " + errorThrown);
			}
		});
	}
}

// function save passenger
function savePassengers(el) {
	var passengerName = jQuery(el).parent().prev().prev().children().val();
	var gender = jQuery(el).parent().prev().children().val();
	var orderId = jQuery('input#id').val();
	var dob = jQuery(el).parent().parent().next().find(':input').val();
	var passengerId = jQuery(el).parent().parent().find(':hidden');
	
	var isDeparture = jQuery(el).parent().parent().next().next().find('input[type="hidden"]').next().val()
	
	if(isDeparture == '0'){
		var inboundLuggage = jQuery(el).parent().parent().next().next().find('select').val()
		var ibairline= jQuery(el).parent().parent().next().next().find('input[type="hidden"]').val()
	}else if (isDeparture == '1'){
		var outboundLuggage = jQuery(el).parent().parent().next().next().find('select').val()
		var inboundLuggage = jQuery(el).parent().parent().next().next().next().find('select').val()
		var obairline= jQuery(el).parent().parent().next().next().find('input[type="hidden"]').val()
		var ibairline= jQuery(el).parent().parent().next().next().next().find('input[type="hidden"]').val()
	}
	
//	var outboundLuggage = jQuery(el).parent().parent().next().next().find('select').val()
//	var inboundLuggage = jQuery(el).parent().parent().next().next().next().find('select').val()
	
//	var obairline= jQuery(el).parent().parent().next().next().find('input[type="hidden"]').val()
//	var ibairline= jQuery(el).parent().parent().next().next().next().find('input[type="hidden"]').val()
	var passenger = '{' + '"name": "' + passengerName + '",' + '"gender": "'
			+ gender + '",' + '"dateOfBirth": "' + dob + '",' + '"order": "'
			+ orderId + '",' + '"outboundLuggage": "' + outboundLuggage + '",' + '"inboundLuggage": "' + inboundLuggage + '",'
			+ '"obairline": "' + obairline + '",' + '"ibairline": "' + ibairline + '"' + '}';
	if (passengerName == '') {
		jQuery(".errors").html('Tên hành khách không được để trống');
		jQuery(".errors").show();
		return false;
	} else if (/[a-zA-Z0-9- ]*$/.test(passengerName) == false) {
		jQuery(".errors").html('Tên hành khách không được chứa các ký tự đặc biệt');
		jQuery(".errors").show();
		return false;
	}
	if (dob == '' && gender > 1) {
		jQuery(".errors").html('Ngày sinh không được để trống');
		jQuery(".errors").show();
		return false;
	} else {
		jQuery.ajax({
			type : "POST",
			contentType : "application/json",
			url : "/order/savePassenger/",
			data : passenger,
			dataType : "json",
			success : function(data) {
				// data - response from server
				if (data.message == 'success') {
					var passType = data.passType;
					var numOfAdult = jQuery('#adultNumber').val();
					var numOfKid = jQuery('#kidNumber').val();
					var numOfInfant = jQuery('#infantNumber').val();
					passengerId.val(data.id);
					if (passType == 'adult') {
						jQuery('#adultNumber').val(parseInt(numOfAdult) + 1);
						jQuery('#adultNumberTemp')
								.val(parseInt(numOfAdult) + 1);
					} else if (passType == 'kid') {
						jQuery('#kidNumber').val(parseInt(numOfKid) + 1);
						jQuery('#kidNumberTemp').val(parseInt(numOfKid) + 1);
					} else {
						jQuery('#infantNumber').val(parseInt(numOfInfant) + 1);
						jQuery('#infantNumberTemp').val(
								parseInt(numOfInfant) + 1);
					}
				} else {
					jQuery(".message").append(data.message);
				}
				// remove save button
				jQuery("input#savePassenger").remove();
				jQuery(".errors").hide();
				// Show or hide delete passenger button
				var passengers = [];
				jQuery(":text[id^='passenger']").each(function() {
					passengers.push(jQuery(this));
				});
				passengers.length > 1 ? jQuery("#deletePassenger").show()
						: jQuery("#deletePassenger").hide();
			},
			error : function(jqXHR, textStatus, errorThrown) {
				alert("Error: " + errorThrown);
			}
		});
	}
}

//Select gender
function showHideDOB(el) {
	var datePickerEl = jQuery(el).parent().parent().next();
	var selectId = el.value;
	if (selectId > 1) {
		datePickerEl.show();
	} else { // hidden
		datePickerEl.hide();
	}
}

// Validate date time format
function ValidateDate(dtValue) {
	var dtRegex = new RegExp(
			/\b\d{1,2}[\/]\d{1,2}[\/]\d{4}\s\d{1,2}[\:]\d{1,2}\b/);
	return dtRegex.test(dtValue);
}
//Get date of birth
function DoBClick(el) {
	var genderSelected = jQuery(el).parent().parent().prev().find(':selected').val();
	jQuery(el).removeClass('hasDatepicker');
	if (genderSelected < 4) {
		jQuery(el).datepicker({
			maxDate : "-2Y",
			minDate : "-12Y",
			defaultDate: "-2Y",
			dateFormat : "dd/mm/yy",
			changeMonth : true,
			changeYear : true
		});
	} else {
		jQuery(el).datepicker({
			maxDate : "-60D",
			minDate : "-2Y",
			defaultDate: "-60D",
			dateFormat : "dd/mm/yy",
			changeMonth : true,
			changeYear : true
		});
	}
}