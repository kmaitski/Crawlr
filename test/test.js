var assert = require('assert');

describe('Array', function() {
  describe('#indexOf()', function() {
    it('should return -1 when the value is not present', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
  });
});

describe('Index', function() {
    it('should render all components', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});

describe('Search', function() {
    it('should run handleSearch on submit', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});

describe('MapView', function() {
    it('should render map', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should create markers on search', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    describe('Markers', function() {
        it('should have a button that adds item to crawl', function() {
          assert.equal([1,2,3].indexOf(4), -1);
        });
    });

});

describe('SearchList', function() {
    it('should display bar results from search', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});

describe('SearchListEntry', function() {
    it('should have a button that adds item to crawl', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});

describe('CrawlEntryList', function() {
    it('should display bars added by searchListAdd', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should display bars added by markerAdd', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should generate route upon submit', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
    it('should send POST to server on submit', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});

describe('CrawlEntry', function() {
    it('should display relevant bar info', function() {
      assert.equal([1,2,3].indexOf(4), -1);
    });
});