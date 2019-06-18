const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 3000;

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.urlencoded({ extended: true }));


app.use(cors());

app.get('/', function(req, res){
	res.send('Hello from server');
})

app.listen(PORT, function(){
	console.log("Server is running on localhost: " + PORT);
})

app.post('/enroll', function(req, res){
	console.log(req.body);
	res.status(200).send({"message": "Data received"});
})

app.get('/api/monhoc', function(req, res){
	dsmh = [
		{"id":1, "monhoc": "Toan"},
		{"id":2, "monhoc": "Van"},
		{"id":3, "monhoc": "Anh"},
		{"id":4, "monhoc": "Ly"}
	];
	// console.log(dsmh);
	res.status(200).send({"data": dsmh});
})

app.get('/api/khuvuc', function(req, res){
	dsmh = [
		{"id":1, "khuvuc": "Tu Nghia"},
		{"id":2, "khuvuc": "TP Quang Ngai"},
		{"id":3, "khuvuc": "Son Tinh"},
		{"id":4, "khuvuc": "Mo Duc"},
	];
	res.status(200).send({"data": dsmh});
})

app.get('/api/caphoc', function(req, res){
	dsmh = [
		{"id":1, "caphoc": "Mam non"},
		{"id":2, "caphoc": "Tieu hoc"},
		{"id":3, "caphoc": "THCS"},
		{"id":4, "caphoc": "THPT"},
	];
	res.status(200).send({"data": dsmh});
})

app.get('/api/congviec/timkiem', function(req, res){
	//lay thong tin goi len - req.query.<ten_tham_so>	
	//console.log(req.query.key_word);

	dscv = [
		{"id": 1, "tieude": "Anh van lop 3", "ngay_bat_dau": "20/05/2019", "monhoc": "Anh", "caphoc": "THCS", "mucluong": 200000, "mota": "Khong co gi"},
		{"id": 1, "tieude": "Anh van lop 4", "ngay_bat_dau": "20/05/2019", "monhoc": "Anh", "caphoc": "THPT", "mucluong": 210000, "mota": "Khong co gi"},
		{"id": 1, "tieude": "Toan nang cao", "ngay_bat_dau": "20/05/2019", "monhoc": "Toan", "caphoc": "THCS", "mucluong": 230000, "mota": "Khong co gi"},
		{"id": 1, "tieude": "Toan lop 7 - Hinh hoc", "ngay_bat_dau": "20/05/2019", "monhoc": "Toan", "caphoc": "THCS", "mucluong": 160000, "mota": "Khong co gi"},
		{"id": 1, "tieude": "Van lop 9", "ngay_bat_dau": "20/05/2019", "monhoc": "Van", "caphoc": "THCS", "mucluong": 220000, "mota": "Khong co gi"},
		{"id": 1, "tieude": "Hoa cap 3", "ngay_bat_dau": "20/05/2019", "monhoc": "Hoa", "caphoc": "THPT", "mucluong": 170000, "mota": "Khong co gi"},
	];

	res.status(200).send({"data": dscv});
})

app.get('/api/users', function(req, res){
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		user = {
			"id": x,
			"username": "username " + x,
			"fullname": "full name " + x,
			"email": "Anh " + x, 
			"group": "THCS", "active": 1, "created_at": "2019/06/01"
		}
		data.push(user);
	}	
	// data = [
	// 	{"id": 1, "username": "Anh van lop 3", "fullname": "20/05/2019", "email": "Anh", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 2, "username": "Anh van lop 4", "fullname": "20/05/2019", "email": "Anh", "group": "THPT", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 3, "username": "Toan nang cao", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 4, "username": "Toan lop 7 - Hinh hoc", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 5, "username": "Van lop 9", "fullname": "20/05/2019", "email": "Van", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 6, "username": "Hoa cap 3", "fullname": "20/05/2019", "email": "Hoa", "group": "THPT", "active": 1, "created_at": "2019/06/01"},		
	// ];

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/users/detail', function(req, res){
	//lay id cua user
	id = req.query.id;

	data = [
		{"id": id, "username": "user " + id, "fullname": "name " + id, "email": "email" + id, "group": "THCS", "status": 1, "created_at": "2019/06/01"}
	];

	res.status(200).send({"data": data});
})

app.post('/api/users/save', function(req, res){
	console.log("Da luu thanh cong user: " + req.query.username);
	res.status(200).send({"data": "Da luu thanh cong"})
})

app.get('/api/message', function(req, res){
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		user = {
			"id": x,
			"username": "username " + x,
			"fullname": "full name " + x,
			"email": "Anh " + x, 
			"message": "message message + " +x + x + x, 
			"status": 1, 
			"created_at": "2019/06/01"
		}
		data.push(user);
	}	
	
	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/message/detail', function(req, res){
	//lay id cua user
	id = req.query.id;

	data = {
		"id": id, "message": "message " + id, "username": "BAC", "status": 1, "created_at": "2019/06/01"
	};

	//replies thuoc message nay
	var replies = [];
	for (var i = 1; i <= 7; i++){
		x = i;
		reply = {
			"id": x,
			"username": "username " + x,
			"content": "reply cho message " + data.id + " so thu tu: " + x,
			"created_at": "2019/06/01"
		}
		replies.push(reply);
	}	

	result = {
		"data": data,
		"replies": replies
	};

	res.status(200).send({"data": result});
})

app.post('/api/message/reply', function(req, res){
	var id = req.body.message_id;
	 console.log("Da luu thanh cong user: " + id);
 console.log(JSON.stringify(req.body));
 console.log(req.body);
	res.status(200).send({"data": "Da luu thanh cong"})
})

app.get('/api/bentimviec', function(req, res){
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		user = {
			"id": x,
			"username": "username " + x,
			"fullname": "full name " + x,
			"email": "Anh " + x, 
			"group": "THCS", "active": 1, "created_at": "2019/06/01"
		}
		data.push(user);
	}	
	// data = [
	// 	{"id": 1, "username": "Anh van lop 3", "fullname": "20/05/2019", "email": "Anh", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 2, "username": "Anh van lop 4", "fullname": "20/05/2019", "email": "Anh", "group": "THPT", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 3, "username": "Toan nang cao", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 4, "username": "Toan lop 7 - Hinh hoc", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 5, "username": "Van lop 9", "fullname": "20/05/2019", "email": "Van", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 6, "username": "Hoa cap 3", "fullname": "20/05/2019", "email": "Hoa", "group": "THPT", "active": 1, "created_at": "2019/06/01"},		
	// ];

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/bentuyendung', function(req, res){
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		user = {
			"id": x,
			"username": "username " + x,
			"fullname": "full name " + x,
			"email": "Anh " + x, 
			"group": "THCS", "active": 1, "created_at": "2019/06/01"
		}
		data.push(user);
	}	
	// data = [
	// 	{"id": 1, "username": "Anh van lop 3", "fullname": "20/05/2019", "email": "Anh", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 2, "username": "Anh van lop 4", "fullname": "20/05/2019", "email": "Anh", "group": "THPT", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 3, "username": "Toan nang cao", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 4, "username": "Toan lop 7 - Hinh hoc", "fullname": "20/05/2019", "email": "Toan", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 5, "username": "Van lop 9", "fullname": "20/05/2019", "email": "Van", "group": "THCS", "active": 1, "created_at": "2019/06/01"},
	// 	{"id": 6, "username": "Hoa cap 3", "fullname": "20/05/2019", "email": "Hoa", "group": "THPT", "active": 1, "created_at": "2019/06/01"},		
	// ];

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/danhmucviec', function(req, res){
	var p = req.query.page;
	var hinhthuc = 0;
	if (req.query.hinhthuc_id){
		hinhthuc = req.query.hinhthuc_id;
	} 
	console.log(hinhthuc);
	if (hinhthuc == 1){
		data = [
			{"id": 1, "tendanhmuc": "Toan", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 2, "tendanhmuc": "Ly", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 3, "tendanhmuc": "Hoa", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			// {"id": 4, "tendanhmuc": "Nhân viên phục vụ quán cafe", "hinhthuc_id": 2, "tenhinhthuc": "Parttime", "active": 1}
		];
	} else if (hinhthuc == 2){
		data = [
			// {"id": 1, "tendanhmuc": "Toan", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			// {"id": 2, "tendanhmuc": "Ly", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			// {"id": 3, "tendanhmuc": "Hoa", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 4, "tendanhmuc": "Nhân viên phục vụ quán cafe", "hinhthuc_id": 2, "tenhinhthuc": "Parttime", "active": 1}
		];
	} else {
		data = [
			{"id": 1, "tendanhmuc": "Toan", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 2, "tendanhmuc": "Ly", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 3, "tendanhmuc": "Hoa", "hinhthuc_id": 1, "tenhinhthuc": "Gia sư", "active": 1},
			{"id": 4, "tendanhmuc": "Nhân viên phục vụ quán cafe", "hinhthuc_id": 2, "tenhinhthuc": "Parttime", "active": 1}
		];
	}
	

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/viec', function(req, res){
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		viec = {
			"id": x,
			"tieude": "can giao vien day Toan " + x,
			"mota": "luong 200/buoi .... " + x,
			"monhoc": "Anh " + x, 
			"khuvuc": "THCS", 
			"caphoc": "THCS", 
			"active": 1, 
			"created_at": "2019/06/01"
		}
		data.push(viec);
	}		

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/bookings', function(req, res){
	console.log('bookings bookings');
	var p = req.query.page;
	data = [];
	for (var i = 1; i <= 7; i++){
		x = (p -1 ) * 7 + i;
		viec = {
			"id": x,
			"tieude": "can giao vien day Toan " + x,
			"nguoituyendung": "Ong Nguyen Van A .... " + x,
			"sdtnguoituyendung": "0909090909",
			"nguoitimviec": "Co Le Thi X ..." + x, 
			"sdtnguoitimviec": "0999999999",
			"trangthaithanhtoan": 0, 
			"sotiendathanhtoan": 0, 
			// "active": 1, 
			"admin_duyet": "admin123",
			"created_at": "2019/06/01"
		}
		data.push(viec);
	}		

	result = {
		"data": data,
		"from": (p -1 ) * 7,
		"to": p * 7 - 1,
		"total": 150, 
		"current_page": p, 
		"last_page": 15
	};
	res.status(200).send({"data": result});
})

app.get('/api/danhmucviec/detail', function(req, res){
	//lay id cua user
	id = req.query.id;

	data = {
		"id": id, "tendanhmuc": "Danh muc viec " + id, "hinhthuc_id": 1, "active": 1
	};
	
	result = {
		"data": data
	};

	res.status(200).send({"data": result});
})

app.post('/api/danhmucviec/save', function(req, res){
	console.log(req.body);
	res.status(200).send({"message": "Data received"});
})

// app.get('/api/danhmucviec')