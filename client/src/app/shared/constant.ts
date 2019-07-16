// var domain = document.domain=='localhost'?'sunobob.dev':document.domain;
//CongThanh: sua lai cho su dung local server - lumen hoac node server
var domain = document.domain=='localhost'?'localhost:8000':document.domain;
// var domain = document.domain=='localhost'?'localhost:3000':document.domain;
var protocol = location.protocol;
export const constant: any=
{
    BASE_URL: protocol+'//'+domain+'/',
    BASE_URL_NOT_HTTP: domain+'/',
    FILE_URL: protocol+'//'+domain+'/files/',
    MEDIA_URL: protocol+'//'+domain+'/uploads/',
    LIMIT_LIST_RECORD_BLOG : 5,
    LIMIT_RECORD_ON_PAGE : 10,
    TOUR_COMPANY_POLICY : 5,
    //Transportation
    //Number Paginator
    NUMBER_PAGINATOR : 8,
    // User group
    GROUP_ADMIN : 1,
    GROUP_USER : 2,
   
   
    // Days of week
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 7,
   

    // search condition type
    
    //day of week
    MONDAY: 'Thứ hai',
    TUESDAY: 'Thứ ba',
    WEDNESDAY: 'Thứ tư',
    THURSDAY: 'Thứ năm',
    FRIDAY: 'Thứ sáu',
    SATURDAY: 'Thứ bảy',
    SUNDAY: 'Chủ nhật',
    NUMBER_ROWS: 6,

       
    Condition_type :
    {
        1: 'Học tại nhà',
        2: 'Học online'
    },

    Loai_CV: 
    {
        1: 'Gia sư',
        2: 'Bán thời gian - parttime'
    },

    Caphoc: {
        1: "Cấp 1",
        2: "Cấp 2",
        3: "Cấp 3",
        4: "Khác"
    },

    User :
    {
        group :
        {
          1: 'Group admin',
          2: 'Group member',
        },
        gender :
        {
          1: 'Male',
          2: 'Female',
        },
    },

    STAYING :
    {
        type :
        {
          1: 'Học tại nhà',
          2: 'Học online'
        }
    },

    Khuvuc:
    {
        1: 'Tp. Quảng Ngãi',
        2: 'Tư Nghĩa',
        3: 'Nghĩa Hành',
        4: 'Minh Long',
        5: 'Trà Bồng',
        6: 'Sơn Trà',
        7: 'Mộ Đức',
        8: 'Đức Phổ',
        9: 'Sơn Tịnh',
        10: 'Bình Sơn',
        11: 'Lý Sơn',
        12: 'Ba Tơ',
        13: 'Sơn Tây',
        14: 'Sơn Hà'
    },

    
    fileValidateDefault:
    {
        required: true,
        size: 3072, //3M
        extensions: ['jpg', 'png', 'jpeg', 'pdf']
    },

    Active: {
        1: 'Enabled',
        0: 'Disabled',
    },
        
    UrlSeting: [
        'key',//key word
        'tinh',//tinh
        'huyen',
        'xa',//Ski place
        'monhoc',
        'caphoc',//Departure City
        'hinhthuc',//move
        'hocphi',//Tour Type        
        'ngay',//Date        
        'page',//page number
        'sort'//sort
    ],

    SearchParams : {
        key_word: '',
        tinh_id:'',
        huyen_id:'',
        xa_id: '',
        monhoc_id:'',
        caphoc_id:'',
        hinhthuc_id: '',
        hocphi: '',
        ngay_bat_dau: '',
        page: '',
        sort: ''
    },

    paramTitle : {
        tour_time_start: '',
        tour_company: '',
        move: '',
        prefecture: '',
        city: '',
        region: '',
        area: '',
        ski_place: '',
        type: '',
        tour_staying: '',
        number_of_room: '',
        lift_ticket: '',
        is_book: ''
    }
}