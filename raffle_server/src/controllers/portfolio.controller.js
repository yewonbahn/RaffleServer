const httpStatus = require('http-status');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { nftService,portfolioService } = require('../services');


const get_portfolio = catchAsync(async (req, res, next) => {
  
  //TDOO 쿼리 인풋이 address 일때만 구현됐음
  // 유저아이디일때 분기점 필요함
  const portfolio= await portfolioService.get_user_info(req.query);
  res.status(httpStatus.OK).send(portfolio);

  
});

const test = catchAsync(async (req, res, next) => {
  

  res.status(httpStatus.CREATED).send('test');

  
});

module.exports = {
  get_portfolio,
  test,
};
