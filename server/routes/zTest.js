const mongoose = require('mongoose');
const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');
const mime = require('mime');
const multer = require('multer');
//mime/lite버전을 사용하고 싶은데 로드가 되지 않는다 mime보다 1/3 밖에 용량이 안된다고 한다.
//multer 관련 변수 (파일 처리)
const { Board } = require('../models/Board');

const storage = multer.diskStorage({
  // 파일 저장 경로
  destination: (req, file, cb) => {
    cb(null, 'zDummyFile/');
  },
  // 파일 저장시 파일명
  filename: (req, file, cb) => {
    console.log('[storage] save file > ', file);
    cb(null, `${Date.now().toString().substr(0)}_${file.originalname}`);
  },
});

const upload = multer({ storage: storage }).single('file');

router.get('/condb', (req, res) => {
  Board.find()
    .then((data) => {
      console.log('db connect state >> success');
      console.log(data);
      return res.status(200).json({
        data,
      });
    })
    .catch((err) => {
      res.status(500).json({
        message: err,
      });
    });
});

router.post('/save', (req, res) => {
  console.log('[zTest] req.body >> ', req.body);

  upload(req, res, (err) => {
    if (err) {
      return res.json({
        success: false,
        message: '파일 저장에 실패했습니다',
        error: err,
      });
    }

    return res.json({
      success: true,
      // fileName: req.file.filename,
      // filePath: req.file.path,
      message: '파일을 저장했습니다.',
    });
  });
});

router.post('/sendfile', (req, res) => {
  const filename = 'origin_blob.png';
  const filePath = path.join(__dirname, `../../zDummyFile/${filename}`);
  console.log('[zTest] file path >> ', filePath);

  const fileMime = mime.lookup(filePath);
  console.log('[zTest] file mime >> ', fileMime);

  fs.readFile(filePath, (err, data) => {
    if (err) console.log(err);
    res.writeHead(206, {
      'Content-Type': fileMime,
    });
    res.end(data);
  });
});

router.post('/form/save', (req, res) => {
  console.log('[zTest] req.body >> ', req.body);

  res.status(200).json({
    success: true,
    value: req.body,
  });
});

router.get('/', (req, res) => {
  // res.header('Access-Control-Allow-Origin', '*');
  // res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
  // res.header(
  //   'Access-Control-Allow-Headers',
  //   'Content-Type, Authorization, Content-Length, X-Requested-With'
  // );
  res.send('response testRouter...');
});

router.get('/cookie', (req, res) => {
  res.cookie('PurpleCookie', 'grape').send('쿠키 생성에 성공했습니다.');
});
router.post('/cookie', (req, res) => {
  res.cookie('YellowCookie', 'banana').send('쿠키 생성2에 성공했습니다.');
});
router.post('/', (req, res) => {
  console.log('req.file >> ', req.file);

  const filename = '1627179811536_blob';
  console.log(
    'path >> ',
    path.join(__dirname, `../../UploadProfileImage/${filename}`)
  );

  const imagePath = path.join(
    __dirname,
    `../../UploadProfileImage/${filename}`
  );
  const imagePath2 = path.join(
    __dirname,
    `../../UploadProfileImage/AxsETab001.txt`
  );
  const imagePath3 = path.join(
    __dirname,
    `../../UploadProfileImage/artgirl.jpg`
  );

  console.log('imagePath >> ', imagePath);
  console.log('imagePath2 >> ', imagePath2);

  const readfile = fs.readFileSync(imagePath, 'utf-8');
  const readfile2 = fs.readFileSync(imagePath2, 'utf-8');
  const readfile3 = fs.readFileSync(imagePath3, 'utf-8');
  //mime version2부터는 getType을 사용하지 않고 lookup을 사용한다 npm 참고
  const imgMime = mime.lookup(imagePath);
  console.log('imgMime >> ', imgMime);

  //---------------------------------------------------------------------
  // Stream Section
  //---------------------------------------------------------------------
  fs.stat(imagePath, (err, stat) => {
    if (err) return res.json({ err }); //값의 변수명이 키값으로 들어가는 문법으로 알고있다.
    console.log('stat >> ', stat);
    const { size } = stat;
    console.log('stat.size >> ', size);

    const start = 0;
    const end = size - 1;
    const chunk = end - start + 1;

    //스트림 생성
    const stream = fs.createReadStream(imagePath, { start, end }); //path

    res.writeHead(206, {
      'Content-Range': `bytes ${start}-${end}/${size}`,
      'Accept-Ranges': 'bytes',
      'Content-Length': chunk,
      'Content-Type': imgMime,
    });

    stream.pipe(res);
  });

  // console.log("stream >> ", stream);

  // 아래의 data, end 핸들러 대신 pipe로 대체가능
  //---------------------------------------------------------------------
  // let count = 0;
  // //스트림 시작
  // stream.on("data", (data) => {
  //   count += 1;
  //   console.log("count >> ", count);

  //   //res.send, res.json, res.end는 한번씩 밖에 응답을 하지 못한다 두번쓰면 반드시 에러 발생한다
  //   // 연속으로 파일을 보내기 위해 res.write 사용

  //   res.write(data);
  // });

  // //스트림을 다 보냈을 시 종료
  // stream.on("end", () => {
  //   console.log("Stream end...");
  //   res.end();
  // });

  // //스트림중 에러 발생
  // stream.on("error", (err) => {
  //   console.log("Stream err >> ", err);
  //   res.status(500).end("Connect to the Internet...");
  // });

  //---------------------------------------------------------------------
  // Buffer Section
  //---------------------------------------------------------------------
  // //Buffer생성
  // const createBuffer = Buffer.from("버퍼를 만들어보자.");
  // console.log("createBuffer >> ", createBuffer);
  // console.log("createBuffer.toString >> ", createBuffer.toString());

  // //Buffer.alloc 와 allocUnsafe 비교 : 둘다 버퍼를 지정한 용량 만큼 공간을 확보하는 개념까진 비슷하나 alloc은 모두 00 으로 초기화를 해주는 반면
  // //allocUnsafe는 초기화 되지 않은 쓰레기값을 그대로 사용한다 때문에 더 빠르긴하지만 쓰레기 값을 그대로 들고가 값이 의도대로 나오지 않을수도 있다.
  // const allocBuffer = Buffer.alloc(1024); //1kb buffer  1byte => 1024 or 1000 현실세계에서 쓰는 단위와 컴퓨터 단위로 둘 다 사용하지만 정확하게는 1024가 맞다.
  // console.log("allocBuffer >> ", allocBuffer);
  // const unsafeAllocBuffer = Buffer.allocUnsafe(1024); //1kb buffer  1byte => 1024 or 1000 현실세계에서 쓰는 단위와 컴퓨터 단위로 둘 다 사용하지만 정확하게는 1024가 맞다.
  // console.log("unsafeAllocBuffer >> ", unsafeAllocBuffer);
  // // fs.readfile의 기본값이 utf-8로 알고 있어서 옵션을 적지 않아도 그렇게 읽힐줄 알았는데 그렇지 않고 버퍼로 읽혔다. (binary파일을 읽어서 그런건가 싶다.)
  // fs.readFile(imagePath, (err, data) => {
  //   if (err) return res.json({ err: err });
  //   console.log("data >> ", data);

  //   return res
  //     .set({ "Content-Type": imgMime, "Content-Disposition": "inline" })
  //     .send(data);
  // });
});

module.exports = router;
