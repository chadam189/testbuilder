/*
 * You'll eventually be given instructions how to use this file
 * If you want to use it before then, you'll have to figure it out yourself
 */

// You don't actually want to fill *this* value in on line 9, but you'll see
// other places in this file where you'll replace the FILL_ME_IN with a
// different value.
var FILL_ME_IN = 'Fill this value in';
 
describe('Introduction to Mocha Tests - READ ME FIRST', function() {
  // A Mocha test is just a function!
  // If the function throws an error when run, it fails.
  // If it doesn't throw an error when run, it doesn't fail. 
  // To read more about mocha, visit mochajs.org

  // Once you've read and understood this section, please comment it out. 
  // You will not be able to proceed with a failing test. 

  it('Throws an error so it fails', function() {
  //  throw new Error('Delete me!');
  });

  it('Doesn\'t throw an error, so it doesn\'t fail', function() {
    // This test doesn't really test anything at all! It will pass no matter what.
    var even = function(num){
      return num/2 === 0;
    }
    return even(10) === true;
  });

  // In tests, we want to compare the expected behavior to the actual behavior.
  // A test should only fail if the expected behavior doesn't match the actual.
  it('Throws an error when expected behavior does not match actual behavior', function() {
    var even = function(num){
      return num%2 === 0;
    }

    if(even(10) !== true) {
      throw new Error('10 should be even!');
    }
  });
});
describe('Diner\'s Club', function() {
  // Be careful, tests can have bugs too...

  it('has a prefix of 38 and a length of 14', function() {

    if (detectNetwork('38888888888888') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
  });

  it('has a prefix of 39 and a length of 14', function() {
    if (detectNetwork('39888888888888') !== 'Diner\'s Club') {
      throw new Error('Test failed');
    }
 
  });
});

describe('American Express', function() {
  // It can get annoying to keep typing the if/throw, so here is a
  // helper function to throw an error if the input statement isn't true. 
  var assert = function(isTrue) {
    if(!isTrue) {
      throw new Error('Test failed');
    }
 
  };

  it('has a prefix of 34 and a length of 15', function() {
    assert(detectNetwork('343456789012345') === 'American Express');
  });

  it('has a prefix of 37 and a length of 15', function() {
    assert(detectNetwork('373456789012345') === 'American Express');
  });
});

describe('Visa', function() {
  // Chai is an entire library of helper functions for tests!
  // Chai provides an assert that acts the same as our previous assert.
  // Search the documentation to figure out how to access it. 
  //   http://chaijs.com/
  var assert = chai.assert;
 

  it('has a prefix of 4 and a length of 13', function() {
    assert(detectNetwork('4123456789012') === 'Visa');
  });

  it('has a prefix of 4 and a length of 16', function() {
    assert(detectNetwork('4123456789012345') === 'Visa');
  });

  it('has a prefix of 4 and a length of 19', function() {
    assert(detectNetwork('4123456789012345678') === 'Visa');
  });

});

describe('MasterCard', function() {
  // Chai lets you write more human-readable tests that throw helpful errors.
  // Expect syntax is one way to do this, but there are others. 
  // If you want to know more, check out the documentation. 
  //   http://chaijs.com/api/bdd/
  var expect = chai.expect;
 
  it('has a prefix of 51 and a length of 16', function() {
    expect(detectNetwork('5112345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 52 and a length of 16', function() {
    expect(detectNetwork('5212345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 53 and a length of 16', function() {
    expect(detectNetwork('5312345678901234')).to.equal('MasterCard');
  });
 

  // You can also use should instead of expect, which changes the style
  // slightly. It really doesn't matter which one you use - check out 
  // http://chaijs.com/guide/styles/ for more info, but it's important
  // to be consistent (unlike in this file, where we use BOTH expect
  // and should, but that's just for learning), so once you've gotten 
  // these tests to pass using should syntax, refactor your tests to 
  // use either expect or should, but not both. 
  // var should = chai.should();
  
  it('has a prefix of 54 and a length of 16', function() {
    expect(detectNetwork('5412345678901234')).to.equal('MasterCard');
  });
 
  it('has a prefix of 55 and a length of 16', function() {
    expect(detectNetwork('5512345678901234')).to.equal('MasterCard');
  });

});

describe('Discover', function() {
  // Tests without a function will be marked as "pending" and not run
  // Implement these tests (and others) and make them pass!
  var expect = chai.expect;

  var discoverPrefix = ['65', '6011', '644', '645', '646', '647', '648', '649'];
  var discoverLength = [16, 19];

  for (var i = 0; i < discoverPrefix.length; i++) {
    for (var j = 0; j < discoverLength.length; j++) {
      var tempPrefix = discoverPrefix[i];
      var tempLength = discoverLength[j];
      var tempSuffix = '';
      for (var k = 0; k < (tempLength - tempPrefix.length); k++) {
        tempSuffix += '8';
      }
      (function (tempPrefix, tempLength, tempSuffix) {
        it('has a prefix of ' + tempPrefix.toString() + ' and a length of ' + tempLength.toString(), function() {
          expect(detectNetwork(tempPrefix + tempSuffix)).to.equal('Discover'); 
        });
      })(tempPrefix, tempLength, tempSuffix);
    }
  }

});

describe('Maestro', function() {
  // Write full test coverage for the Maestro card
  var expect = chai.expect;

  var maestroPrefix = ['5018', '5020', '5038', '6304'];
  var maestroLength = [12, 13, 14, 15, 16, 17, 18, 19];

  for (var i = 0; i < maestroPrefix.length; i++) {
    for (var j = 0; j < maestroLength.length; j++) {
      var tempPrefix = maestroPrefix[i];
      var tempLength = maestroLength[j];
      var tempSuffix = '';
      for (var k = 0; k < (tempLength - tempPrefix.length); k++) {
        tempSuffix += '8';
      }
      (function (tempPrefix, tempLength, tempSuffix) {
        it('has a prefix of ' + tempPrefix.toString() + ' and a length of ' + tempLength.toString(), function() {
          expect(detectNetwork(tempPrefix + tempSuffix)).to.equal('Maestro'); 
        });
      })(tempPrefix, tempLength, tempSuffix);
    }
  }
});
  

describe('China UnionPay', function() {

  var expect = chai.expect;

  for (let prefix = 622126; prefix <= 622925; prefix++) {

    it('has a prefix of ' + prefix + ' and a length of ' + 16, function() {
        expect(detectNetwork(prefix + '1234567890')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 17, function() {
        expect(detectNetwork(prefix + '12345678901')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 18, function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 19, function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay'); 
    });
  }

  for (let prefix = 6282; prefix <= 6288; prefix++) {

    it('has a prefix of ' + prefix + ' and a length of ' + 16, function() {
        expect(detectNetwork(prefix + '123456789012')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 17, function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 18, function() {
        expect(detectNetwork(prefix + '12345678901234')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 19, function() {
        expect(detectNetwork(prefix + '123456789012345')).to.equal('China UnionPay'); 
    });
  }

  for (let prefix = 624; prefix <= 626; prefix++) {

    it('has a prefix of ' + prefix + ' and a length of ' + 16, function() {
        expect(detectNetwork(prefix + '1234567890123')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 17, function() {
        expect(detectNetwork(prefix + '12345678901234')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 18, function() {
        expect(detectNetwork(prefix + '123456789012345')).to.equal('China UnionPay'); 
    });

    it('has a prefix of ' + prefix + ' and a length of ' + 19, function() {
        expect(detectNetwork(prefix + '1234567890123456')).to.equal('China UnionPay'); 
    });
  }

});

describe('Switch', function () {
  
  var expect = chai.expect;

  var switchPrefix = ['4903', '4905', '4911', '4936', '564182', '633110', '6333', '6759'];
  var switchLength = [16, 18, 19];
  
  for (let i = 0; i < switchPrefix.length; i++) {
    for (let j = 0; j < switchLength.length; j++) {
      
      let tempPrefix = switchPrefix[i];
      let tempLength = switchLength[j];

      let tempSuffix = '';
      for (let k = 0; k < (tempLength - tempPrefix.length); k++) {
        tempSuffix += '8';
      }

      it('has a prefix of ' + tempPrefix.toString() + ' and a length of ' + tempLength.toString(), function() {
          expect(detectNetwork(tempPrefix + tempSuffix)).to.equal('Switch'); 
        });
    }
  }

});























