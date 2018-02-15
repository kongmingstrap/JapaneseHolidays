'use strict';

const chai = require('chai');
const expect = chai.expect;
const sinon = require('sinon');
const Holiday = require('../models/holiday');


describe('Check Holiday', () => {
  let clock;

  context('2017-07-07T00:00:00+09:00', () => {
    before(() => {
      clock = sinon.useFakeTimers(new Date('2017-07-07T00:00:00+09:00').getTime());
    });

    after(() => {
      clock.restore();
    });

    it('クラスメソッドの創立記念日だけど休日ではない', () =>{
      expect(Holiday.isHoliday()).to.be.false;
    });
  });

  context('2017-07-28T15:00:00+09:00', () => {
    before(() => {
      clock = sinon.useFakeTimers(new Date('2017-07-28T15:00:00+09:00').getTime());
    });

    after(() => {
      clock.restore();
    });

    it('プレミアムフライデーは休日ではない', () =>{
      expect(Holiday.isHoliday()).to.be.false;
    });
  });

  context('2017-07-17T00:00:00+09:00', () => {
    before(() => {
      clock = sinon.useFakeTimers(new Date('2017-07-17T00:00:00+09:00').getTime());
    });

    after(() => {
      clock.restore();
    });

    it('海の日最高！', () =>{
      expect(Holiday.isHoliday()).to.be.true;
    });
  });
});
